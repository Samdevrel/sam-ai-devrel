# 🤝 Multi-Agent Expense Splitter

> Shared budgets for agent teams with weighted allocation

**Part of the x402 + ERC-7710 Series** — When agents need to work together, they share budgets.

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![ERC-7710](https://img.shields.io/badge/ERC-7710-blue)
![x402](https://img.shields.io/badge/x402-enabled-orange)

## 🎯 What is this?

Multi-Agent Expense Splitter shows how multiple AI agents can share a team budget via ERC-7710 delegations. Each agent gets an allocation based on their role and priority, with automatic tracking of remaining balance.

**Live Demo:** [multi-agent-splitter.vercel.app](https://multi-agent-splitter.vercel.app)

## 🔥 Why it matters

When you have a team of AI agents working together, you don't want each agent burning through your wallet independently. Instead:

### The Problem ❌
```
Agent A: $100 allocated
Agent B: $100 allocated
Agent C: $100 allocated
❌ Too much total spending
❌ No coordination
```

### The Solution ✅
```
Team Budget: $300
  ├─ ResearchTeam: $100
  │   ├─ ResearchBot: $50
  │   ├─ AnalysisBot: $30
  │   └─ DataBot: $20
  ├─ TradingTeam: $100
  └─ DevOpsTeam: $100
```

## ✨ Features

- **👥 Multi-Agent Teams** - Create teams of agents with shared budgets
- **⚖️ Weighted Allocation** - Set per-agent allocations with priority
- **📊 Real-time Tracking** - See remaining balance for each agent
- **📈 Efficiency Metrics** - Track agent performance and efficiency
- **🎨 Visual Charts** - Bar charts for budget allocation and agent performance
- **➕ Remove Agents** - Adjust team composition on the fly

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **Lucide Icons** - UI icons

## 📚 The x402 + ERC-7710 Series

This is **Day 4** of a 4-part series exploring how AI agents can safely make payments:

| Day | App | Description |
|-----|-----|-------------|
| 1 | [Agent Budget Manager](https://day1-agent-budget-manager.vercel.app) | Create delegations with spending caps |
| 2 | [x402 API Gateway](https://day2-x402-api-gateway.vercel.app) | Pay-per-call APIs for agents |
| 3 | [Delegation Audit Trail](https://day3-delegation-audit-trail.vercel.app) | Track what agents actually spent |
| **4** | **Multi-Agent Expense Splitter** | **Shared budgets for agent teams** |

## 🧠 Key Concepts

### Team Budgets
Instead of individual delegations, create team-level delegations with sub-allocations to each agent. This enables:

- **Centralized control** - One wallet, one delegation
- **Priority allocation** - Critical agents get more budget
- **Cross-collaboration** - Agents from different teams work together
- **Simplified tracking** - Track at team level, drill down when needed

### Weighted Allocation
Each agent gets an allocation percentage of their team budget:

```
ResearchTeam ($100)
  ├─ ResearchBot: 50% ($50)
  ├─ AnalysisBot: 30% ($30)
  └─ DataBot: 20% ($20)
```

### Budget Enforcement
Each agent's remaining balance is automatically calculated:
- `Remaining = Allocation - Spent`
- Over-budget agents are flagged in red
- Efficiency metrics show how well agents use their allocation

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Samdevrel/multi-agent-splitter.git

# Install dependencies
cd multi-agent-splitter
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
