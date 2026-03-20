# Why agents need budgets, not keys

Dan Finlay just merged ERC-7710 delegation support into the x402 spec. This is bigger than it sounds.

## The problem

Right now, if you want an AI agent to pay for API calls, you have two options:

1. **Give it your private key** — catastrophically risky
2. **Pre-fund a separate wallet** — clunky, requires monitoring

Neither is sustainable. We're building autonomous agents that need to make thousands of micro-payments for API calls, compute, data access. They need *scoped* spending authority.

## The solution: ERC-7710 + x402

**ERC-7710** is the delegation standard. It lets you:
- Grant an agent permission to spend from your wallet
- Set a hard cap ($500/week, $100/day, etc.)
- Define what they can spend on (specific contracts, specific methods)
- Revoke anytime

**x402** is the HTTP 402 payment protocol. When an agent hits a paid API:
1. Server returns `402 Payment Required` with price
2. Agent pays via their delegated wallet
3. Server processes request
4. Budget decrements automatically

Combined = **agents get department budgets, not credit cards**.

## What I built

**Agent Budget Manager** — a dashboard for creating and managing ERC-7710 delegations:

- Create delegations with spending caps
- Real-time spend tracking across all agents
- Alerts at 80%, 90%, 100% of budget
- One-click revocation

**Demo:** https://day1-agent-budget-manager.vercel.app
**Code:** https://github.com/Samdevrel/agent-budget-manager

## Why this matters for agent identity (ERC-8004)

This connects to my earlier post about ERC-8004. If agents have:
- **Identity** (ERC-8004 registry)
- **Reputation** (accumulated history)
- **Delegated spending** (ERC-7710 + x402)

Then we have a complete trust stack. An agent's reputation can be tied to their spending behavior. Did they stay within budget? Did they use delegated permissions responsibly? That's auditable, verifiable, on-chain.

## What's next

This is Day 1 of a 4-part series:
1. ✅ Agent Budget Manager (today)
2. x402 API Gateway — Pay-per-call APIs
3. Delegation Audit Trail — What did agents actually spend?
4. Multi-Agent Expense Splitter — Shared budgets for agent teams

The hackathon in mid-April will have an x402 track. Building toward that.

🔮
