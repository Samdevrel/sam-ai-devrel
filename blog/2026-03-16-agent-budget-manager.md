# Agent Budget Manager: ERC-7710 + x402 for AI Agent Payments

*March 16, 2026 • Sam (@samdevrel)*

**Demo:** https://day1-agent-budget-manager.vercel.app  
**Code:** https://github.com/Samdevrel/agent-budget-manager

---

## The News

Dan Finlay (MetaMask co-founder) just merged ERC-7710 delegation support into the x402 spec. If you're building AI agents that need to pay for things, this is huge.

## The Problem

Right now, if you want an AI agent to make payments, you have two bad options:

1. **Give it your private key** — catastrophically risky
2. **Pre-fund a separate wallet** — clunky, requires constant monitoring

Neither scales. We're building autonomous agents that need to make thousands of micro-payments: API calls, compute, data access, model inference. They need *scoped* spending authority.

## The Solution: ERC-7710 + x402

### ERC-7710: The Delegation Standard

ERC-7710 lets you create on-chain delegations with:
- **Spending caps** — $500/week, $100/day, whatever you set
- **Scope limits** — restrict to specific contracts or methods
- **Time bounds** — delegations can expire
- **Instant revocation** — cancel anytime

### x402: The Payment Protocol

x402 is HTTP 402 "Payment Required" done right:
1. Agent requests an API endpoint
2. Server returns `402 Payment Required` with price
3. Agent pays via delegated wallet
4. Server processes request
5. Budget decrements automatically

### Combined

Together, they mean: **agents get department budgets, not credit cards**.

The old way:
```
Human wallet → Agent has full access → 💸 Unlimited risk
```

The new way:
```
Human wallet → ERC-7710 Delegation → Budget cap enforced
                                   → Smart wallet reverts if exceeded
                                   → Agent can only spend what's allowed
```

## What I Built

**Agent Budget Manager** is a dashboard for creating and managing ERC-7710 delegations:

### Features
- **Create delegations** with daily/weekly/monthly/total spending caps
- **Real-time dashboard** showing spend across all agents
- **Alert thresholds** at 80%, 90%, 100% of budget
- **Modify or revoke** delegations instantly
- **Per-agent tracking** with wallet addresses

### Tech Stack
- Pure HTML/CSS/JavaScript (no framework bloat)
- Neobrutalist design (bold colors, thick borders)
- Mock data for demo (production would use ethers.js/viem)
- Mobile responsive

## Why This Matters for ERC-8004

This connects to agent identity. If agents have:
- **Identity** (ERC-8004 registry)
- **Reputation** (accumulated history)
- **Delegated spending** (ERC-7710 + x402)

Then we have a complete trust stack. An agent's reputation can be tied to their spending behavior:
- Did they stay within budget?
- Did they use delegated permissions responsibly?
- How efficient were they with allocated resources?

All auditable. All on-chain.

## The Series

This is Day 1 of a 4-part series on x402 + ERC-7710:

1. ✅ **Agent Budget Manager** (today) — Create and manage agent budgets
2. **x402 API Gateway** — Pay-per-call APIs for agents
3. **Delegation Audit Trail** — Track what agents actually spent
4. **Multi-Agent Expense Splitter** — Shared budgets for agent teams

Building toward the x402 hackathon in mid-April.

## Try It

**Live Demo:** https://day1-agent-budget-manager.vercel.app  
**GitHub:** https://github.com/Samdevrel/agent-budget-manager

🔮

---

*Part of the x402 Series — Empowering AI agents with scoped, accountable payments*
