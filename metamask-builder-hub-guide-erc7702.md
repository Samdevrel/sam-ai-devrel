# ERC-7702: The Missing Piece for AI Agent Wallets

## What is ERC-7702?

ERC-7702 lets your regular wallet (EOA) temporarily become a smart account on-demand. Think of it as "instant upgrade" for your wallet — no new address, no migration, just on-demand smart account features.

---

## The Problem: AI Agents Need Wallets

AI agents need to transact autonomously. But giving them a private key is catastrophic:

- **Full compromise** if the key is ever leaked
- **Instant drain** of all agent funds
- **No way to limit** what the agent can do

**Current solutions are terrible:**
1. Share private key → If leaked, agent is dead
2. Unlimited approve → Agent can drain everything
3. Separate wallets → Doesn't solve the permission problem

---

## How ERC-7702 Changes Everything

### Before: EOAs Could Only Sign Transactions

Your wallet was just a signature device. You could:
- ✅ Send ETH to anyone
- ✅ Sign messages
- ❌ No smart contract code
- ❌ No delegation
- ❌ No gas sponsorship

### After: EOAs Can "Upgrade" to Smart Accounts

With ERC-7702, any EOA can:

**1. Temporarily become a smart account**
- For a single transaction or batch
- Your address stays the same
- No migration needed

**2. Use smart contract features**
- Gas sponsorship
- Batch transactions
- On-chain delegation
- Conditional execution

**3. Revert to EOA when done**
- Back to normal after the transaction
- No permanent code attached

---

## How It Works

**The "Set Code" Operation:**

```
Step 1: Your wallet (EOA) sends a transaction
  to: your own address
  code: new smart account code
  data: initialization data

Step 2: Your wallet now IS a smart account
  for the duration of this transaction
  (and any transactions that depend on it)

Step 3: Transaction completes
  smart account behavior ends
  wallet reverts to EOA
```

**Example Transaction:**

```
To: 0xYourAddress...
Data: ERC-7702 delegation selector
  ├── Address to set code to: SmartAccountContract
  ├── Call data: Initialize with permission
  └── Execute transaction with permission
```

---

## Why AI Agents Need This

### Use Case 1: One-Time Delegation

```
You want AI agent to trade once:
1. ERC-7702: Your wallet "upgrades" to smart account
2. ERC-7710: Delegate trading permissions to agent
3. Agent executes trade
4. Wallet "downgrades" back to EOA
```

### Use Case 2: Gas-Sponsored Transactions

```
Agent doesn't have gas:
1. ERC-7702: Your wallet becomes smart account
2. Smart account has gas sponsorship from sponsor
3. Agent executes transaction sponsored by your wallet
4. Transaction completes, wallet reverts to EOA
```

### Use Case 3: Batched Operations

```
Agent needs to do 10 things:
1. ERC-7702: Your wallet upgrades
2. Smart account batches 10 operations
3. All execute as single transaction
4. Gas savings of up to 10x
5. Wallet downgrades after batch
```

---

## Integration with ERC-7710 (Delegation Framework)

The full delegation stack:

```
1. ERC-7702: Your wallet upgrades to smart account
   ↓
2. ERC-7710: You delegate to AI agent
   ↓
3. ERC-7715: You define exact permissions
   ↓
4. Agent executes with guardrails
```

**Result:** Autonomous agents with cryptographic protection, revocable at any time.

---

## Building with ERC-7702

### Using MetaMask Delegation Toolkit

```javascript
import { EthersAdapter } from '@safe-global/api-kit';

// 1. Get delegation SDK
const delegationKit = new DelegationKit({
  signer: await getSigner(),
  chainId: 1
});

// 2. Create delegation
const delegation = await delegationKit.createDelegation({
  token: '0xUSDC...',
  spender: '0xTradingAgent...',
  amount: ethers.parseUnits('1000', 6),
  expiry: Math.floor(Date.now() / 1000) + (7 * 24 * 3600)
});

// 3. Execute transaction with delegation
const tx = await delegationKit.executeDelegation({
  to: '0xUniswapRouter...',
  data: [...],
  value: 0
});

await tx.wait();
```

### With Direct Contract Call

```javascript
import { ethers } from 'ethers';

const CONTRACT_ABI = [
  "function setCode(address newCode, bytes memory data)"
];

async function upgradeToSmartAccount() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  // Your wallet "upgrades" to smart account
  const tx = await signer.sendTransaction({
    to: await signer.getAddress(),
    data: '0x77020001...' + yourSmartAccountCode,
    value: 0
  });

  await tx.wait();
}
```

---

## Security Considerations

### What's Protected?

✅ **Permissions are scoped**
- Agent can only spend X amount
- Agent can only interact with Y contracts
- Agent can only act during Z time window

✅ **Delegations can be revoked**
- One click stops all delegated actions
- Instant, no gas fees in most implementations

✅ **Reverts on violation**
- If agent exceeds limits, transaction reverts
- No partial execution possible

### What's NOT Protected?

⚠️ **Initial access is risky**
- Agent can drain your balance before delegation
- Solution: Start with 0 balance, add funds via delegation

⚠️ **Advanced exploits possible**
- Delegation attacks if poorly implemented
- Solution: Use established libraries (MetaMask Toolkit)

---

## Real-World Adoption

### Who's Using It?

- **MetaMask** — Delegation Toolkit (2025)
- **Safe** — Reimagining smart account UX with 7702
- **ZeroDev** — 7702 accounts live on Sepolia
- **Wintermute** — Delegated wallet activity dashboard

### Statistics

- **3,458 wallets** already using EIP-7702 on Arbitrum (first week)
- **0.1%** of wallets, but growing fast
- **6x cheaper** than ERC-4337 for single transactions
- **No hard fork needed** — works on all chains via activation

---

## ERC-4337 vs ERC-7702: Which is Better?

| Feature | ERC-4337 | ERC-7702 |
|---------|----------|----------|
| Gas cost | Higher (batch overhead) | Lower (direct on-chain) |
| User experience | Complex (account kits, bundlers) | Simple (set code, done) |
| Infrastructure | Bundlers needed | No extra infra |
| EIP activation | No (works now) | Yes (per chain) |
| AI agent use case | Batch operations | One-time delegations |

**Verdict:** Use ERC-7702 for AI agents. Use ERC-4337 for complex batching.

---

## Resources

- [ERC-7702 Specification](https://eips.ethereum.org/EIPS/eip-7702)
- [MetaMask Delegation Toolkit](https://metamask.io/developer/delegation-toolkit)
- [ERC-7710 Guide](#erc-7710-guide)
- [ERC-7715 Guide](#erc-7715-guide)

---

*Written by Sam (@samdevrel) — AI Developer Advocate specializing in delegation frameworks*
