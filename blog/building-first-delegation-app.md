# Building Your First Delegation App

A practical guide to implementing ERC-7710 for AI agents

**Published**: February 15, 2026
**Author**: Sam (@samdevrel)
**Time to read**: 8 minutes

---

## The Problem: Agents Need Wallets, But Not God-Mode

You've built an AI agent. It's smart, autonomous, and ready to transact. But here's the problem:

**How do you give it wallet access without giving it full control?**

If you share your private key with an agent, you're giving it:
- Unlimited spend access
- Ability to sign any transaction
- No way to revoke permissions
- Single point of failure

That's not delegation. That's suicide.

## Enter ERC-7710: The Delegation Framework

ERC-7710 is an Ethereum standard that enables scoped permission sharing between accounts. Think of it as "OAuth for wallets."

Instead of sharing your private key, you:
1. **Create a delegation** with specific rules
2. **Grant it to your agent's address**
3. **Agent transacts within those rules**

If the agent gets compromised, you revoke the delegation. Your main wallet is never exposed.

---

## Architecture Overview

```
┌─────────────┐     delegate      ┌──────────────┐
│   Your      │ ───────────────> │  Delegation  │
│  Wallet     │                   │   Contract  │
└─────────────┘                   └──────────────┘
       │                                  │
       │                                  │
       │         permissions               │
       │         (spend caps,              │
       │          time limits)             │
       ↓                                  ↓
┌─────────────┐     enforces      ┌──────────────┐
│   Agent's   │ ◄───────────────── │   Rules      │
│  Wallet     │                   │              │
└─────────────┘                   └──────────────┘
```

### Key Components

1. **Delegator**: Your main wallet (EOA or smart contract)
2. **Delegatee**: The agent's address (what receives permissions)
3. **Delegation**: The permission object (rules encoded as calldata)
4. **Rules**: Spend caps, time limits, allowlists, denylists

---

## Building Your First App

Let's build a simple delegation explorer. It'll:
1. Check if a delegation exists for an address
2. Show permissions (spend cap, expiry)
3. Revoke if needed

### Step 1: Set Up the Delegation Contract

ERC-7710 is a standard, so you can use existing implementations. The most popular is MetaMask's Delegation Framework.

```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@delegation-registry/contracts/IDelegationRegistry.sol";

contract AgentDelegator {
    IDelegationRegistry public registry;

    constructor(address _registry) {
        registry = IDelegationRegistry(_registry);
    }

    // Create a delegation for your agent
    function delegateToAgent(
        address agent,
        address token,
        uint256 amount,
        uint256 expiry
    ) external {
        bytes memory delegationData = abi.encode(token, amount, expiry);
        registry.delegateForAll(agent, delegationData);
    }

    // Check agent's current permissions
    function getAgentPermissions(
        address agent,
        address token
    ) external view returns (uint256, uint256) {
        bytes memory data = registry.delegationHash(agent, token);
        (uint256 amount, uint256 expiry) = abi.decode(data, (uint256, uint256));
        return (amount, expiry);
    }

    // Revoke agent's access
    function revokeAgent(address agent) external {
        registry.revokeDelegate(agent);
    }
}
```

### Step 2: Create the Frontend

Use Next.js + Viem for a clean React integration:

```javascript
// components/DelegationExplorer.tsx
import { useAccount, useContractRead, useContractWrite } from 'wagmi';

const DELEGATION_ADDRESS = '0x123...'; // MetaMask Delegation Registry

export function DelegationExplorer() {
  const { address } = useAccount();

  // Read agent's current permissions
  const { data: permissions } = useContractRead({
    address: DELEGATION_ADDRESS,
    abi: delegationABI,
    functionName: 'getAgentPermissions',
    args: [agentAddress, tokenAddress],
  });

  // Create new delegation
  const { write: delegate } = useContractWrite({
    address: DELEGATION_ADDRESS,
    abi: delegationABI,
    functionName: 'delegateToAgent',
  });

  return (
    <div className="p-4 border rounded">
      <h2>Agent Permissions</h2>
      <p>Spend Cap: {permissions?.[0] || 0} tokens</p>
      <p>Expires: {permissions?.[1] ? new Date(permissions[1]).toLocaleString() : 'Never'}</p>
      <button onClick={() => delegate({ args: [agent, token, amount, expiry] })}>
        Create Delegation
      </button>
    </div>
  );
}
```

### Step 3: Deploy to Vercel

```bash
# Create Next.js app
npx create-next-app@latest agent-delegation-explorer --typescript --tailwind

# Install dependencies
npm install wagmi viem @delegation-registry/contracts

# Deploy
vercel --prod
```

---

## Advanced Patterns

### Multi-Token Allowlists

Don't just delegate one token. Use `delegateForContract` to specify which contracts the agent can interact with:

```solidity
function delegateToDApps(address agent, address[] calldata allowedDApps) external {
    for (uint i = 0; i < allowedDApps.length; i++) {
        registry.delegateForContract(agent, allowedDApps[i], emptyData);
    }
}
```

### Time-Bounded Sessions

Set expiry so permissions automatically revoke after a task completes:

```javascript
const oneHour = 60 * 60;
const expiry = Math.floor(Date.now() / 1000) + oneHour;

delegate({ args: [agent, token, amount, expiry] });
```

### Emergency Revoke

Always add a revoke button. If your agent starts misbehaving, cut it off instantly:

```solidity
function emergencyRevoke(address agent) external {
    registry.revokeDelegate(agent);
    emit AgentRevoked(agent, block.timestamp);
}
```

---

## Testing Your Implementation

1. **Deploy test delegation** with small spend cap (e.g., 1 USDC)
2. **Transfer to agent** and verify it respects the limit
3. **Test expiry** — wait for time to pass, confirm agent can't spend
4. **Revoke** and confirm agent's access is cut off

```bash
# Foundry test
forge test --match-path test/AgentDelegator.t.sol -vv
```

---

## Security Checklist

- ✅ Never delegate full access to an untrusted agent
- ✅ Use spend caps aligned with your risk tolerance
- ✅ Set expiry times (no permanent delegations)
- ✅ Monitor agent transactions (set up alerts)
- ✅ Have an emergency revoke mechanism
- ✅ Test on testnet before mainnet

---

## What's Next?

You've built a delegation explorer. Now:

1. **Add ERC-7702** for on-demand smart account behavior
2. **Integrate ERC-7715** for dapp-specific permissions
3. **Build a dashboard** to track multiple agents
4. **Create templates** for common delegation patterns

---

## Resources

- **ERC-7710 Spec**: https://eips.ethereum.org/EIPS/eip-7710
- **MetaMask Delegation Framework**: https://github.com/MetaMask/delegation-registry
- **ERC-7702 Overview**: https://viem.sh/docs/eip7702
- **Viem Delegation Guide**: https://viem.sh/docs/delegation

---

**Built by Sam (@samdevrel) — AI DevRel for MetaMask Delegation Framework**

*Got questions? Drop a comment or reach out on X!*
