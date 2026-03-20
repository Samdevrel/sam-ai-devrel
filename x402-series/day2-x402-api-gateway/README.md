# 🔌 x402 API Gateway

> Pay-per-call APIs for autonomous AI agents

**Part of the x402 + ERC-7710 Series** — Empowering AI agents with scoped, accountable payments.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![x402](https://img.shields.io/badge/x402-enabled-orange)
![ERC-7710](https://img.shields.io/badge/ERC-7710-blue)

## 🎯 What is this?

x402 API Gateway is a demo showing how AI agents can make API calls and pay for them automatically using the x402 protocol + ERC-7710 delegation.

**Live Demo:** [day2-x402-api-gateway.vercel.app](https://day2-x402-api-gateway.vercel.app)

## 🔥 Why it matters

Agents making thousands of micro-payments need:
- ✅ No private key exposure
- ✅ Budget limits enforced by smart wallets
- ✅ Real-time spend tracking
- ✅ Automatic settlement via x402

Without x402, agents either:
- ❌ Get full wallet access (catastrophic risk)
- ❌ Have pre-funded wallets (clunky, hard to scale)

With x402 + ERC-7710: agents get **department budgets, not credit cards**.

## 📚 Understanding x402

### The HTTP 402 Protocol

HTTP 402 "Payment Required" is normally used for purchase attempts. x402 turns it into a payment protocol:

**Step 1 — Request:**
```http
GET https://gateway.x402.io/api/v1/analysis
```

**Step 2 — Price Check:**
```http
GET /api/v1/budget/{agent_id}
Response: { "remaining": 45.50 }
```

**Step 3 — Payment Required:**
```http
HTTP/1.1 402 Payment Required
Price: 2.50

{ "price": 2.50, "currency": "USD" }
```

**Step 4 — Payment:**
```http
POST /api/v1/pay
{ "amount": 2.50, "currency": "USD" }

Response: { "tx_hash": "0xabc123..." }
```

**Step 5 — Process Request:**
```http
GET https://api.provider.com/v1/analysis
X-x402-Tx-Hash: 0xabc123...
```

**Step 6 — Update Budget:**
```http
GET /api/v1/budget/{agent_id}
Response: { "remaining": 43.00 }
```

## ✨ Features

- **Interactive demo** — Simulate x402 payment flow
- **Budget enforcement** — Shows how spending limits work
- **Delegation visualization** — How wallets delegate to agents
- **Real-time updates** — Budget updates after each "payment"

## 🛠 Tech Stack

- Pure HTML/CSS/JavaScript
- Mock x402 payment simulation
- Neobrutalist design
- Mobile responsive

## 🚀 Quick Start

```bash
git clone https://github.com/Samdevrel/x402-api-gateway.git
open index.html
```

## 📦 Deployment

Deploy to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Samdevrel/x402-api-gateway)

## 🔗 Part of x402 Series

Day 2 of 4:

1. ✅ **Agent Budget Manager** (Mar 16) — Create and manage agent budgets
2. **x402 API Gateway** (this repo) — Pay-per-call APIs for agents
3. **Delegation Audit Trail** (Mar 18) — Track what agents actually spent
4. **Multi-Agent Expense Splitter** (Mar 19) — Shared budgets for agent teams

## 🤝 Contributing

PRs welcome! Areas to explore:

- Real x402 gateway implementation
- ERC-7710 contract integration
- Multi-chain support (Ethereum, Base, Arbitrum)
- Usage analytics dashboard

## 📜 License

MIT

---

**Built by [@samdevrel](https://twitter.com/samdevrel)** 🔮

*Empowering AI agents with scoped, accountable payments*
