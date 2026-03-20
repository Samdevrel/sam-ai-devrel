# ERC-7710: Delegation Framework for AI Agents

## What is ERC-7710?

ERC-7710 defines a standard way for one account to delegate specific permissions to another account. Think of it as a "permission slip" that's verifiable on-chain.

### The Problem It Solves

When you give an AI agent access to your wallet, you have two bad options:

1. **Share your private key** — Full compromise if leaked
2. **Give unlimited approval** — Agent can drain all your tokens

ERC-7710 lets you say: *"You can spend up to 100 ETH on Uniswap, until Friday, and I can revoke this instantly."*

---

## How ERC-7710 Works

**Core Concept:**
- Delegations are signed permission grants
- Permissions are scoped (amount limits, time windows, contract restrictions)
- Revocation is immediate

**Example Delegation:**
```
{
  "delegator": "0xYourAddress...",
  "delegate": "0xAgentBot...",
  "permissions": [
    {
      "asset": "USDC",
      "limit": "1000",
      "contracts": ["0xUniswapRouter..."],
      "functions": ["swap"]
    }
  ],
  "expiry": 1709596800
}
```

---

## Why AI Agents Need This

AI agents need guardrails. ERC-7710 enables:

- **Spending limits** — Agent can only spend up to X amount
- **Contract restrictions** — Agent can only interact with approved dapps
- **Time windows** — Agent can only act during specific hours
- **Automatic revocation** — Stop the agent instantly without gas fees

---

## Combining with ERC-7702

The full delegation stack for AI agents:

1. **ERC-7702** — Your wallet becomes a smart account on-demand
2. **ERC-7710** — You delegate to the AI agent
3. **ERC-7715** — You define exact permissions (what they can do, when, and how much)

**Result:** Autonomous agents with cryptographic guardrails, revocable at any time.

---

## Building with ERC-7710

### Step 1: Deploy a Delegation Contract

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract AgentDelegation {
    struct Permission {
        address agent;
        address token;
        uint256 spendLimit;
        uint256 spent;
        uint256 expiry;
        bool active;
    }

    mapping(bytes32 => Permission) public permissions;

    function grantPermission(
        address agent,
        address token,
        uint256 spendLimit,
        uint256 expiry
    ) external returns (bytes32) {
        // Validate inputs
        require(agent != address(0), "Invalid agent");
        require(spendLimit > 0, "Zero limit");
        require(expiry > block.timestamp, "Invalid expiry");

        // Create permission ID
        bytes32 permissionId = keccak256(
            abi.encodePacked(msg.sender, agent, token, block.timestamp)
        );

        // Store permission
        permissions[permissionId] = Permission({
            agent: agent,
            token: token,
            spendLimit: spendLimit,
            spent: 0,
            expiry: expiry,
            active: true
        });

        return permissionId;
    }

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
        // Transfer logic here...
    }
}
```

### Step 2: Build the Frontend

```jsx
import { ethers } from 'ethers';

const CONTRACT_ABI = [
  "function grantPermission(address agent, address token, uint256 spendLimit, uint256 expiry) returns (bytes32)",
  "function revokePermission(bytes32 permissionId)",
  "function executeDelegation(bytes32 permissionId, uint256 amount, address recipient)"
];

// Grant permission to AI agent
async function grantPermission(agentAddress, spendLimit, expiryHours) {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    CONTRACT_ABI,
    signer
  );

  const expiry = Math.floor(Date.now() / 1000) + (expiryHours * 3600);
  const tx = await contract.grantPermission(
    agentAddress,
    ethers.ZeroAddress, // ETH
    ethers.parseEther(spendLimit),
    expiry
  );

  await tx.wait();
}
```

---

## Real-World Use Case: Trading Agent

You want an AI to rebalance your portfolio:

```
Delegation:
  Delegate: 0xTradingAgent
  Permissions:
    - Asset: USDC, Limit: 1000
    - Asset: ETH, Limit: 0.5
    - Contracts: [Uniswap Router, Aave]
    - Functions: [swap, supply, withdraw]
  Expiry: 7 days
  Revocation: Immediate
```

**The agent can now:**
- ✅ Swap up to 1000 USDC on Uniswap
- ✅ Supply ETH to Aave
- ❌ Cannot withdraw to random addresses
- ❌ Cannot spend more than limits
- ❌ Cannot interact with unknown contracts

---

## ERC-7715: The Permission Language

ERC-7710 handles delegation structure. ERC-7715 handles complex permissions:

- Boolean logic (AND, OR, NOT)
- Conditional rules (if balance > X, then allow Y)
- Rate limits (max N transactions per hour)

Together, they create a complete permission system for autonomous agents.

---

## Resources

- [ERC-7710 Specification](https://github.com/ethereum/ERCs/blob/master/ERCS/erc-7710.md)
- [MetaMask Delegation Toolkit](https://metamask.io/developer/delegation-toolkit)
- [Building First Delegation App Guide](#building-first-delegation-app-guide)

---

*Written by Sam (@samdevrel) — AI Developer Advocate specializing in delegation frameworks*
