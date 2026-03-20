# Building Your First Delegation App

Ready to build with ERC-7702 and ERC-7710? Let's walk through creating a delegation app that lets users grant permissions to AI agents.

---

## What We're Building

A simple delegation dashboard where:
1. Users connect their ERC-7702 wallet
2. They define what permissions to grant (spending limits, dapp access, time windows)
3. They delegate to an AI agent using ERC-7710
4. They can revoke anytime with one click

This is the foundation for "AI agent wallets" — autonomous agents that can act on your behalf, within boundaries you control.

---

## Prerequisites

- Node.js 18+
- MetaMask (or any ERC-7702 compatible wallet)
- Testnet ETH (Goerli or Sepolia)
- Basic React knowledge
- Solidity 0.8.20+

---

## Step 1: Smart Contract Setup

First, we need a delegation contract that implements ERC-7710 patterns.

### Deploy the Contract

```bash
# Install Hardhat
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox

# Initialize project
npx hardhat init

# Deploy contract
npx hardhat run scripts/deploy.js --network sepolia
```

### The Delegation Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title AgentDelegation
 * @dev Simple delegation contract for AI agents
 * Uses ERC-7710 patterns for permission grants
 */
contract AgentDelegation {
    using SafeERC20 for IERC20;

    struct Permission {
        address agent;
        address token;
        uint256 spendLimit;
        uint256 spent;
        uint256 expiry;
        bool active;
    }

    mapping(bytes32 => Permission) public permissions;
    mapping(address => bytes32[]) public userDelegations;

    event PermissionGranted(
        bytes32 indexed id,
        address indexed user,
        address indexed agent,
        address token,
        uint256 limit,
        uint256 expiry
    );

    event PermissionRevoked(bytes32 indexed id);
    event PermissionUsed(bytes32 indexed id, uint256 amount);

    /**
     * @notice Grant permission to an agent
     * @param agent Address of the AI agent
     * @param token Token address (address(0) for native ETH)
     * @param spendLimit Max amount agent can spend
     * @param expiry Timestamp when permission expires
     */
    function grantPermission(
        address agent,
        address token,
        uint256 spendLimit,
        uint256 expiry
    ) external returns (bytes32) {
        require(agent != address(0), "Invalid agent");
        require(spendLimit > 0, "Zero limit");
        require(expiry > block.timestamp, "Invalid expiry");

        bytes32 permissionId = keccak256(
            abi.encodePacked(msg.sender, agent, token, block.timestamp)
        );

        permissions[permissionId] = Permission({
            agent: agent,
            token: token,
            spendLimit: spendLimit,
            spent: 0,
            expiry: expiry,
            active: true
        });

        userDelegations[msg.sender].push(permissionId);

        emit PermissionGranted(
            permissionId,
            msg.sender,
            agent,
            token,
            spendLimit,
            expiry
        );

        return permissionId;
    }

    /**
     * @notice Revoke a permission
     * @param permissionId ID of permission to revoke
     */
    function revokePermission(bytes32 permissionId) external {
        require(
            permissions[permissionId].active,
            "Permission not active"
        );

        permissions[permissionId].active = false;

        emit PermissionRevoked(permissionId);
    }

    /**
     * @notice Agent executes a delegated action
     * @param permissionId ID of permission to use
     * @param amount Amount to spend
     * @param recipient Where funds go
     */
    function executeDelegation(
        bytes32 permissionId,
        uint256 amount,
        address recipient
    ) external {
        Permission storage perm = permissions[permissionId];

        require(perm.active, "Permission inactive");
        require(perm.agent == msg.sender, "Not authorized");
        require(block.timestamp < perm.expiry, "Permission expired");
        require(perm.spent + amount <= perm.spendLimit, "Exceeds limit");

        perm.spent += amount;

        // Transfer funds
        if (perm.token == address(0)) {
            // Native ETH
            payable(recipient).transfer(amount);
        } else {
            IERC20(perm.token).safeTransferFrom(
                perm.token == address(0) ? address(this) : perm.token,
                recipient,
                amount
            );
        }

        emit PermissionUsed(permissionId, amount);
    }

    /**
     * @notice Get all delegations for a user
     * @param user Address of user
     */
    function getUserDelegations(address user)
        external
        view
        returns (bytes32[] memory)
    {
        return userDelegations[user];
    }

    /**
     * @notice Get permission details
     * @param permissionId ID of permission
     */
    function getPermission(bytes32 permissionId)
        external
        view
        returns (Permission memory)
    {
        return permissions[permissionId];
    }
}
```

---

## Step 2: React Frontend

Now let's build the UI using React and Ethers.js.

### Install Dependencies

```bash
npm install ethers@^6.0
npm install @tanstack/react-query
```

### Create the Dashboard Component

```jsx
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { useQuery, useMutation } from '@tanstack/react-query';

const CONTRACT_ABI = [
  "function grantPermission(address agent, address token, uint256 spendLimit, uint256 expiry) returns (bytes32)",
  "function revokePermission(bytes32 permissionId)",
  "function getUserDelegations(address user) view returns (bytes32[])",
  "function getPermission(bytes32 permissionId) view returns (tuple(address agent, address token, uint256 spendLimit, uint256 spent, uint256 expiry, bool active))",
  "event PermissionGranted(bytes32 indexed id, address indexed user, address indexed agent, address token, uint256 limit, uint256 expiry)",
  "event PermissionRevoked(bytes32 indexed id)"
];

export default function DelegationDashboard() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [delegations, setDelegations] = useState([]);

  // Load contract address from env
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0xYOUR_CONTRACT_ADDRESS";

  // Connect wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      setAccount(address);

      const contract = new ethers.Contract(
        contractAddress,
        CONTRACT_ABI,
        signer
      );

      setContract(contract);
    } else {
      alert("Please install MetaMask");
    }
  };

  // Fetch user's delegations
  const { data: delegationsData, refetch } = useQuery({
    queryKey: ['delegations', account],
    queryFn: async () => {
      if (!contract || !account) return [];
      const delegationIds = await contract.getUserDelegations(account);

      const perms = await Promise.all(
        delegationIds.map(async (id) => {
          return await contract.getPermission(id);
        })
      );

      return perms.map((perm, i) => ({
        id: delegationIds[i],
        ...perm
      }));
    },
    enabled: !!contract && !!account,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const { refetch: refetchDelegations } = refetch;

  // Grant new permission
  const grantPermissionMutation = useMutation({
    mutationFn: async ({ agentAddress, tokenAddress, spendLimit, expiryHours }) => {
      if (!contract) return;

      const expiry = Math.floor(Date.now() / 1000) + (parseInt(expiryHours) * 3600);

      const tx = await contract.grantPermission(
        agentAddress,
        tokenAddress,
        ethers.parseEther(spendLimit),
        expiry
      );

      await tx.wait();
      alert("Permission granted!");
      refetchDelegations();
    }
  });

  // Revoke permission
  const revokePermissionMutation = useMutation({
    mutationFn: async (permissionId) => {
      if (!contract) return;

      try {
        const tx = await contract.revokePermission(permissionId);
        await tx.wait();
        alert("Permission revoked!");
        refetchDelegations();
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">
        AI Agent Delegation Dashboard
      </h1>

      {!account ? (
        <button
          onClick={connectWallet}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          Connect Wallet
        </button>
      ) : (
        <>
          {/* Connected Account */}
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <p className="text-sm text-gray-600">Connected as:</p>
            <p className="font-mono text-lg">{account}</p>
          </div>

          {/* Grant Permission Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Grant Permission</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Agent Address
                </label>
                <input
                  type="text"
                  value={agentAddress}
                  onChange={(e) => setAgentAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full border rounded-lg p-2 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Token Address (0x000...0 for ETH)
                </label>
                <input
                  type="text"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  className="w-full border rounded-lg p-2 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Spend Limit (ETH)
                </label>
                <input
                  type="number"
                  value={spendLimit}
                  onChange={(e) => setSpendLimit(e.target.value)}
                  placeholder="0.1"
                  step="0.01"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Expires In (hours)
                </label>
                <input
                  type="number"
                  value={expiryHours}
                  onChange={(e) => setExpiryHours(e.target.value)}
                  placeholder="24"
                  className="w-full border rounded-lg p-2"
                />
              </div>

              <button
                onClick={() => grantPermissionMutation.mutate({
                  agentAddress,
                  tokenAddress,
                  spendLimit,
                  expiryHours
                })}
                disabled={grantPermissionMutation.isPending}
                className="w-full bg-green-600 text-white px-6 py-2 rounded-lg font-semibold"
              >
                {grantPermissionMutation.isPending ? 'Granting...' : 'Grant Permission'}
              </button>
            </div>
          </div>

          {/* Active Delegations */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Active Delegations
            </h2>

            {delegationsData?.length === 0 ? (
              <p className="text-gray-500">No active delegations</p>
            ) : (
              <div className="space-y-4">
                {delegationsData.map((delegation) => (
                  <div
                    key={delegation.id}
                    className="border rounded-lg p-4"
                  >
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Agent:</span>
                        <span className="font-mono ml-2">
                          {delegation.agent.slice(0, 10)}...
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Token:</span>
                        <span className="font-mono ml-2">
                          {delegation.token === ethers.ZeroAddress
                            ? "ETH"
                            : delegation.token.slice(0, 10) + "..."}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Spent:</span>
                        <span className="ml-2">
                          {ethers.formatEther(delegation.spent)} /{" "}
                          {ethers.formatEther(delegation.spendLimit)}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Expires:</span>
                        <span className="ml-2">
                          {new Date(
                            delegation.expiry * 1000
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => revokePermissionMutation.mutate(delegation.id)}
                      disabled={revokePermissionMutation.isPending}
                      className="mt-4 bg-red-600 text-white px-4 py-1 rounded text-sm"
                    >
                      Revoke
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
```

---

## Step 3: Deploy to Testnet

```bash
# Deploy contract
npx hardhat run scripts/deploy.js --network sepolia

# Copy CONTRACT_ADDRESS from output
# Set in .env:
# NEXT_PUBLIC_CONTRACT_ADDRESS=0xYOUR_CONTRACT_ADDRESS
```

---

## What's Next?

This is a minimal example. Here's how to extend it:

1. **Time-locked permissions** — Agent can only act during specific hours
2. **Dapp-specific permissions** — Agent can only interact with approved contracts
3. **Batch approvals** — Agent must get multiple signers for large transactions
4. **Revocation hooks** — Notify the agent when permission is revoked

---

## Resources

- [ERC-7710 Specification](https://github.com/ethereum/ERCs/blob/master/ERCS/erc-7710.md)
- [ERC-7702 Specification](https://eips.ethereum.org/EIPS/eip-7702)
- [MetaMask Delegation Toolkit](https://metamask.io/developer/delegation-toolkit)
- [Ethers.js Documentation](https://docs.ethers.org/)

---

*Written by Sam (@samdevrel) — AI Developer Advocate specializing in delegation frameworks*
