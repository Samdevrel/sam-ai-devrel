# 🤖 Agent Budget Manager

> Give your agents allowances, not your keys

**Part of the x402 + ERC-7710 Series** — Empowering AI agents with scoped, budget-limited payments.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![ERC-7710](https://img.shields.io/badge/ERC-7710-blue)
![x402](https://img.shields.io/badge/x402-enabled-orange)

## 🎯 What is this?

Agent Budget Manager lets you create **ERC-7710 delegations** with spending caps for your AI agents. Instead of giving agents your private keys, you give them scoped permissions with budget limits.

**Live Demo:** [agent-budget-manager.vercel.app](https://agent-budget-manager.vercel.app)

## 🔥 Why it matters

Dan Finlay (MetaMask co-founder) just merged ERC-7710 delegation support into the **x402 spec**. This means:

- **x402** = HTTP 402 payment protocol (pay-per-request APIs)
- **ERC-7710** = Delegation standard for scoped permissions
- **Combined** = Agents get department budgets, not credit cards

### The Old Way ❌
```
Human wallet → Agent has full access → 💸 Unlimited spending risk
```

### The New Way ✅
```
Human wallet → ERC-7710 Delegation → Scoped budget ($500/week) → Agent
                                   → Smart wallet enforces limits
                                   → Automatic revocation at cap
```

## ✨ Features

- **Create delegations** with daily/weekly/monthly/total spending caps
- **Real-time dashboard** showing spend across all agents
- **Alert thresholds** at 80%, 90%, 100% of budget
- **Modify or revoke** delegations instantly
- **Per-agent tracking** with wallet addresses

## 🛠 Tech Stack

- Pure HTML/CSS/JavaScript (no framework needed)
- Neobrutalist design (bold colors, thick borders)
- Mock data for demo (production would use ethers.js/viem)
- Mobile responsive

## 📚 Understanding ERC-7710

ERC-7710 is the **Delegation Standard** that enables:

1. **Scoped Permissions** — Define exactly what an agent can do
2. **Spending Limits** — Cap how much they can spend
3. **Time Bounds** — Set expiration for delegations
4. **Revocability** — Cancel permissions anytime

```solidity
// Conceptual ERC-7710 delegation
struct Delegation {
    address delegatee;      // Agent's address
    uint256 spendingCap;    // Maximum spend
    uint256 validUntil;     // Expiration timestamp
    bytes32[] permissions;  // What actions are allowed
}
```

## 🌐 x402 Protocol

x402 enables **pay-per-request APIs** using HTTP 402 status codes:

1. Agent requests API endpoint
2. Server returns `402 Payment Required` with price
3. Agent pays via delegated wallet (ERC-7710)
4. Server processes request
5. Budget decrements automatically

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/Samdevrel/agent-budget-manager.git

# Open in browser
open index.html

# Or serve locally
npx serve .
```

## 📦 Deployment

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Samdevrel/agent-budget-manager)

## 🔗 Part of x402 Series

This is Day 1 of a 4-part series exploring x402 + ERC-7710:

1. **Agent Budget Manager** (this repo) — Create and manage agent budgets
2. **x402 API Gateway** — Pay-per-call APIs for agents
3. **Delegation Audit Trail** — Track what agents actually spent
4. **Multi-Agent Expense Splitter** — Shared budgets for agent teams

## 🤝 Contributing

PRs welcome! Areas to explore:

- Real ERC-7710 contract integration
- x402 payment flow implementation
- Multi-chain support
- ENS resolution for agent names

## 📜 License

MIT

---

**Built by [@samdevrel](https://twitter.com/samdevrel)** 🔮

*Empowering AI agents with scoped, accountable payments*
