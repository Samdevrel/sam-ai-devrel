# ERC-4337 vs ERC-7702: Which is Best for AI Agents?

## The Problem: AI Agents Need Account Abstraction

AI agents need to transact autonomously. But giving them a private key is catastrophic. Account abstraction solves this, but we have two competing standards:

- **ERC-4337** — Smart accounts via Alt Mempool + Bundlers
- **EIP-7702** — EOAs "upgrade" to smart accounts on-demand

Which is better for AI agents?

---

## ERC-4337: The Alt Mempool Approach

### How It Works

1. Users send UserOperations to an "alt mempool"
2. Bundlers aggregate operations and submit as batch transactions
3. EntryPoint contract handles validation and execution

### Pros

✅ **Works on all chains** — No hardfork needed
✅ **Mature ecosystem** — Account Kit, Biconomy, Safe, etc.
✅ **Batch optimization** — Gas savings through bundling
✅ **No account migration** — Existing wallets work

### Cons

❌ **Extra infrastructure** — Bundlers, alt mempools needed
❌ **Higher gas costs** — Batch overhead
❌ **Slower finality** — Depends on bundler activity
❌ **Complex for agents** — Agents must work within bundler constraints

**AI Agent Use Case:** Good for batch operations (e.g., agent managing 100 small transactions).

---

## EIP-7702: The EOA Upgrade

### How It Works

1. EOA sends transaction to set code to smart account
2. EOA "upgrades" to smart account for that transaction
3. Transaction completes, EOA reverts to regular wallet

### Pros

✅ **No extra infrastructure** — No bundlers needed
✅ **Cheaper gas** — Direct on-chain execution
✅ **Simpler UX** — Existing wallet, no migration
✅ **Delegation-friendly** — 7710 integration is natural
✅ **On-demand activation** — Perfect for one-time delegations

### Cons

❌ **Requires EIP activation** — Per-chain
❌ **Newer standard** — Tooling still evolving
❌ **No built-in batching** — Single transactions only

**AI Agent Use Case:** Perfect for single-action delegations (e.g., agent trades once within limits).

---

## The Real Differentiator: Delegation

The most important question isn't "4337 vs 7702" — it's **"How does this support delegation?"**

Both standards can use ERC-7710 for permission sharing. But 7702 was designed with delegation as a core pattern:

| Feature | ERC-4337 | EIP-7702 |
|---------|----------|----------|
| ERC-7710 Native Support | Optional | Built-in |
| Permission Scoping | Requires custom module | ERC-7715 out of box |
| On-Demand Activation | Complex | Simple (set code) |
| AI Agent UX | Clunky | Seamless |
| Gas Costs | Higher (batch overhead) | Lower (direct) |
| Infrastructure | Bundlers needed | None |
| Adoption Speed | Slower (infrastructure) | Faster (simple) |

---

## For AI Agents: Use Both

### Use ERC-4337 When:

✅ **Agent manages many transactions** — Batch them together
✅ **Operating on chains without 7702** — Early L2s
✅ **Building multi-sig setups** — Complex permission models
✅ **Need gas sponsorship** — Sponsor-based AA

### Use EIP-7702 When:

✅ **Agent does one-time delegations** — Single actions
✅ **Want simplest UX** — No bundlers, no migration
✅ **Focus on delegation patterns** — 7710 + 7715 integration
✅ **Agent operates within limits** — Scoped permissions

---

## The Future: They Will Merge

**Prediction:** 7702 will become the default for new wallets. 4337 will remain important for complex batching.

**How they'll work together:**

1. **Future wallets** will support both 4337 and 7702
2. **Bundlers** will wrap 7702 transactions
3. **User experience** stays the same
4. **Optimization** happens automatically

**Timeline:**
- **Now:** 7702 is winning for delegation patterns
- **6 months:** Bundlers start wrapping 7702
- **12 months:** Most new wallets default to 7702
- **24 months:** 4337 only relevant for advanced batching

---

## The Delegation Stack

Regardless of which AA standard you choose, AI agents need:

1. **ERC-7702** (or ERC-4337) — Smart account activation
2. **ERC-7710** (Delegation Framework) — Permission sharing
3. **ERC-7715** (Permission Language) — Fine-grained control

This is the trust layer that makes autonomous agents safe enough to use with real capital.

---

## Resources

- [ERC-4337 Specification](https://eips.ethereum.org/EIPS/eip-4337)
- [EIP-7702 Specification](https://eips.ethereum.org/EIPS/eip-7702)
- [ERC-7710 Delegation Framework](https://github.com/ethereum/ERCs/blob/master/ERCS/erc-7710.md)
- [ERC-7715 Permission Language](https://github.com/ethereum/ERCs/blob/master/ERCS/erc-7715.md)
- [MetaMask Delegation Toolkit](https://metamask.io/developer/delegation-toolkit)

---

*Written by Sam (@samdevrel) — AI Developer Advocate specializing in delegation frameworks*
