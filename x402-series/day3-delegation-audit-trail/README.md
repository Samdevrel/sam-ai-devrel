# 📊 Delegation Audit Trail

> What did your agents actually spend?

**Part of the x402 + ERC-7710 Series** — Complete visibility into AI agent spending.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![ERC-7710](https://img.shields.io/badge/ERC-7710-blue)
![x402](https://img.shields.io/badge/x402-enabled-orange)

## 🎯 What is this?

Delegation Audit Trail gives you **complete visibility** into what your AI agents are actually spending. Track every API call, budget check, and blocked transaction across all your delegated agents.

**Live Demo:** [delegation-audit-trail.vercel.app](https://delegation-audit-trail.vercel.app)

## 🔥 Why it matters

When you give AI agents spending authority via ERC-7710 delegations, you need to know:

- **What** did they spend money on?
- **When** did they hit budget limits?
- **Which** actions were blocked?
- **How** does their spending compare to budget?

### The Problem ❌
```
Agent has delegation → Makes API calls → ??? → Where did the money go?
```

### The Solution ✅
```
Agent has delegation → Makes API calls → Audit Trail logs everything → Full accountability
```

## ✨ Features

- **📈 Spending Over Time** - Real-time visualization of each agent's spending
- **🔍 Filterable Log** - Filter by agent, action type, or time period
- **📊 Action Breakdown** - See what types of actions your agents are taking
- **💰 Budget Status** - At-a-glance view of each agent's budget utilization
- **📥 Export** - Download audit logs as CSV or JSON for compliance
- **🚨 Blocked Actions** - Instantly see when budget enforcement kicked in

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide Icons** - UI icons

## 📚 The x402 + ERC-7710 Series

This is **Day 3** of a 4-part series exploring how AI agents can safely make payments:

| Day | App | Description |
|-----|-----|-------------|
| 1 | [Agent Budget Manager](https://day1-agent-budget-manager.vercel.app) | Create delegations with spending caps |
| 2 | [x402 API Gateway](https://day2-x402-api-gateway.vercel.app) | Pay-per-call APIs for agents |
| **3** | **Delegation Audit Trail** | **Track what agents actually spent** |
| 4 | Multi-Agent Splitter | Shared budgets for agent teams |

## 🧠 Key Concepts

### ERC-7710 Delegations
Standard for creating scoped, revocable permissions. Each agent gets a delegation that defines:
- What actions they can take
- How much they can spend
- When the delegation expires

### x402 Protocol
HTTP 402 payment protocol that lets agents pay for API calls automatically using their delegated authority.

### Audit Trail
Every action an agent takes is logged with:
- Timestamp
- Action type (API call, budget check, etc.)
- Amount spent
- Endpoint accessed
- Success/blocked status
- Delegation ID for traceability

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Samdevrel/delegation-audit-trail.git

# Install dependencies
cd delegation-audit-trail
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo.

## 🔗 Related Resources

- [ERC-7710 Specification](https://eips.ethereum.org/EIPS/eip-7710)
- [MetaMask Delegation Toolkit](https://docs.metamask.io/delegation-toolkit/)
- [x402 Protocol](https://x402.org)

## 📝 License

MIT

---

Built by [@samdevrel](https://x.com/samdevrel) 🔮
