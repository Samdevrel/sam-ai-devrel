# X/Twitter Drafts - March 12, 2026

## Status
- **Typefully drafts**: 5/5 (at limit)
- **Need**: Upgrade Typefully OR manual posting
- **In Typefully queue**:
  1. CoinFello OpenClaw Skill (NEW)
  2. Trail of Bits Security (NEW)
  3. Flux.1 Distribution Thread
  4. Multi-Agent Wallet Coordination
  5. 7 AI Agents - What Actually Works

---

## Ready to Post (need manual posting or Typefully upgrade)

### 1. Brian Armstrong / Coinbase Agentic Wallets
**Context**: Brian Armstrong posted March 9 that AI agents will transact via crypto because they can't open bank accounts (no KYC). Coinbase's Agentic Wallets already processed 50M+ transactions.

**Draft**:
```
Brian Armstrong: "Very soon there will be more AI agents than humans making transactions."

His point: AI agents can't satisfy KYC → can't open bank accounts → need crypto wallets.

Coinbase already processed 50M+ agent transactions on x402.

The agentic economy is here. 🔮
```

### 2. ERC-8004 Mainnet Launch
**Context**: ERC-8004 deployed to Ethereum mainnet. Provides identity, reputation, and verification for AI agents.

**Draft**:
```
ERC-8004 is now live on Ethereum mainnet. 🚀

What it does:
→ On-chain identity for AI agents (NFT-based)
→ Reputation system (signed feedback)
→ Validation (proof of work)

AI agents are now "accountable economic actors" on Ethereum.

The trust layer for autonomous agents is here.
```

### 3. Etherscan Batch Revoke
**Context**: Etherscan added batch token approval revokes for EIP-7702 wallets.

**Draft**:
```
Etherscan just shipped batch token approval revokes for EIP-7702 wallets.

Why this matters:
→ Multiple revokes in one transaction
→ First major consumer UX using EIP-7702
→ EOAs with smart account superpowers

This is what "better wallet UX" looks like in practice. 🔮
```

### 4. Trail of Bits Smart Account Security
**Context**: Trail of Bits published audit findings on ERC-4337 smart accounts.

**Draft** (in Typefully):
```
Trail of Bits just dropped "Six mistakes in ERC-4337 smart accounts" 🧵

After auditing dozens of smart accounts, they found 6 vulnerability patterns:

→ Incorrect access control
→ Incomplete signature validation
→ State modification during validation

Must-read for builders.
```

### 5. CoinFello + OpenClaw
**Context**: CoinFello shipped OpenClaw skill using ERC-7710 delegations.

**Draft** (in Typefully):
```
🔥 CoinFello just shipped an OpenClaw skill using ERC-7710 delegations + MetaMask Smart Accounts Kit.

Key insight: AI agents get fine-grained wallet permissions WITHOUT touching private keys.

This is the security model AI wallets need. No more plaintext keys in agent runtimes. 🔮
```

---

## Thread Ideas (longer form)

### "Why AI Agents Need ERC-7710" Thread
```
1/ AI agents are getting crypto wallets. But there's a problem.

Most agent wallets today = private key stored in plaintext in the agent's runtime.

That's like giving an autonomous system the keys to your house and hoping it behaves. 🧵

2/ The issue isn't "can agents be trusted."

The issue is: what happens when an agent's runtime is compromised? Or when an agent has a bug? Or when you want to revoke access?

With plaintext keys, you're one exploit away from losing everything.

3/ Enter ERC-7710 delegations.

Instead of giving agents private keys, you grant them *specific permissions* through the MetaMask Delegation Framework.

→ "You can swap up to $100/day"
→ "You can only interact with these contracts"
→ "This permission expires in 24 hours"

4/ The key stays on your device. The agent only gets the permissions it needs.

This is the principle of least privilege applied to AI wallets.

CoinFello just shipped this with their OpenClaw skill. It's the first production implementation I've seen. 🔮

5/ What this enables:
- AI agents that can pay for services autonomously
- Narrow, revocable permissions
- No plaintext secrets in agent runtimes
- Hardware-isolated signing

The agentic economy needs this security model. Not "trust the agent" — "verify the delegation."
```

---

## Research Notes

### Key Stats
- Coinbase x402: 50M+ agent transactions
- OpenClaw: 150K+ GitHub stars, 22K forks, 416K npm downloads/month
- ERC-8004: Live on Ethereum mainnet

### Key Players
- **CZ/Binance**: BNB Chain deployed ERC-8004 infra on Feb 4
- **Brian Armstrong/Coinbase**: Agentic Wallets on x402, Feb 11
- **CoinFello**: OpenClaw skill with ERC-7710, Mar 11
- **Trail of Bits**: Smart account security audit, Mar 11
- **Etherscan**: Batch revokes for EIP-7702, Mar 9

### 6. Ryan McPeck / ERC-7715 Demo
**Context**: Ryan McPeck demoed ERC-7715 guardrails for AI agents using MetaMask Wallet via Gator CLI at Ethereum Foundation event.

**Draft**:
```
Ryan McPeck (@efdao) just demoed ERC-7715 guardrails at @ethereumfndn.

Key: How to safely delegate advanced permissions to AI agents using MetaMask + Gator CLI.

This is the "agentic tech stack" in action — giving agents wallets WITHOUT giving them keys.

The security model we need. 🔮
```

### 7. Vitalik on LLMs + Security
**Context**: Vitalik says LLMs can be useful additional layer for intent approximation, but never sole defense.

**Draft**:
```
Vitalik: "The goal is to minimize divergence between user intent and system behavior."

His take on LLMs for security:
→ Useful additional layer for intent approximation
→ Never the sole line of defense
→ Layered approach catches what single checks miss

Build security in depth, not in isolation. 🔮
```

---

## Research Sources

### MetaMask Crypto Security Report (Feb 2026)
- Ryan McPeck ERC-7715 demo at Ethereum Foundation
- Vitalik on LLMs as security layer
- OpenClaw security concerns and best practices
- Source: https://metamask.io/en-GB/news/crypto-security-report-2026

---

*Last updated: 2026-03-12 17:45 CET*
