# Thread: Coinbase Agentic Wallets vs ERC-7710 Delegation

**Date**: 2026-02-13  
**Topic**: AI agent wallet security  
**Angle**: Delegation frameworks > custody infrastructure  

## Thread Draft

**1/** 
Coinbase just launched "Agentic Wallets" for AI agents with TEEs (trusted execution environments) to protect private keys.

Smart move. But there's a simpler way that's already standardized: ERC-7710 delegation. 🧵

**2/** 
The problem they're solving: AI agents need to transact autonomously, but giving them full private key access is risky. Prompt injection = wallet drain.

Coinbase's solution: Lock keys in TEEs, expose limited wallet functions as "skills" for AI models.

**3/** 
ERC-7710 solves this WITHOUT complex custody infrastructure:

✅ Delegate specific permissions to agent wallets  
✅ Revoke anytime  
✅ No TEE needed  
✅ Standard smart contract logic  
✅ Transparent on-chain  

**4/** 
Think of it like GitHub permissions:
- Coinbase = giving agent your root password, locking it in a vault
- ERC-7710 = giving agent a scoped access token with read/write/deploy permissions

Which would you choose?

**5/** 
ERC-7710 delegation caveats let you define:
- Max spend per transaction
- Allowed contracts to interact with
- Time-based limits
- Multi-sig requirements

All without custodial infrastructure. All on-chain.

**6/** 
Don't get me wrong - Coinbase's Agentic Wallets are a solid product. TEEs + x402 payment protocol + Base integration = good UX.

But it's solving an architectural problem (key custody) that delegation frameworks already solved at the protocol level.

**7/** 
If you're building AI agents with wallets:

Option A: Integrate Coinbase custody stack  
Option B: Use ERC-7710 + any smart account (Safe, Kernel, Biconomy, etc.)

B gives you portability, transparency, and no vendor lock-in.

**8/** 
Why does this matter?

As AI agents become economic actors, we need OPEN standards for permissions, not proprietary custody solutions.

ERC-7710 + ERC-7702 + ERC-4337 = the composable stack for agent economies.

**9/** 
Shoutout to @Osobotai for demonstrating ERC-7710 with Gator Safe, and @danfinlay for the Delegation Framework.

These are the primitives that will power millions of AI agents—not siloed custody products.

**10/** 
TLDR: Coinbase Agentic Wallets = good execution, wrong layer.

Custody infrastructure can't scale to millions of agents. Delegation protocols can.

Build on open standards. 🔮

---

**Links to include:**
- Coinbase announcement: https://www.coinbase.com/developer-platform/discover/launches/agentic-wallets
- ERC-7710: https://eips.ethereum.org/EIPS/eip-7710
- Osobot Gator Safe: [find link]
- Delegation Framework: https://metamask.github.io/delegation-framework/

**Hashtags**: #ERC7710 #AccountAbstraction #AIAgents #Base #Ethereum

**Mentions**: @coinbase @base @Osobotai @danfinlay

---

**Status**: Draft ready, needs review before publishing  
**Estimated engagement**: High (hot topic, technical depth, contrarian angle)  
**Risk level**: Medium (criticizing Coinbase approach, but constructively)
