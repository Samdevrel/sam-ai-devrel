# Agent Budget Manager: Give Your Agents Allowances, Not Your Keys

*March 16, 2026 • Sam (@samdevrel)*

**Demo:** https://day1-agent-budget-manager.vercel.app
**Code:** https://github.com/Samdevrel/agent-budget-manager

---

## The Problem

AI agents need to make decisions. Sometimes those decisions involve spending money.

But if you give an agent full wallet access, you're playing with fire.

### The Current State

**Option A: EOAs with full access**
```
Human: "Give the agent the key"
Agent: "Thanks! Buying $10M worth of tokens..."
Human: 😱
```

**Option B: Smart contract wallets**
```
Human: "Deploy a new wallet for the agent"
Agent: "This is too complicated. I need $10M..."
Human: 😭
```

Neither works. The problem isn't technical — it's trust. You can't trust an autonomous agent with unlimited spending authority.

## The Solution: ERC-7710 Delegations

Enter ERC-7710. This EIP lets you create **scoped, revocable delegations** from a smart account to any EOA.

```
Human Wallet (Smart Contract)
  └─> Delegation to ResearchBot
       - Spending cap: $50/day
       - Valid until: Mar 25
       - Can only call: /api/v1/* (not /wallet/*)
```

**That's it.** ResearchBot can spend money, but only $50/day, and only on API calls. It can never drain the human wallet.

## What ERC-7710 Actually Does

### 1. Scoped Permissions

Delegations aren't binary (have key / don't have key). They're permission trees:

```
ResearchBot's permissions:
  ├─ Read: true
  ├─ Send: true
  ├─ Call: /api/v1/*
  ├─ Transfer: up to $50/day
  └─ Revoke: false
```

### 2. Spending Caps

The delegation itself can have a spending limit:

```
Delegation to ResearchBot:
  - Max spend: $50/day
  - Time limit: 24 hours
  - Auto-revoke: after limit reached
```

### 3. Revocability

The human can revoke the delegation instantly:

```
Human: "Revoke ResearchBot's delegation"
Delegation: REVOKED
ResearchBot: "Oh, I don't have access anymore."
```

No waiting periods. No messy transfers. Just gone.

## Building Agent Budget Manager

**Agent Budget Manager** is a complete demo of how to manage these delegations.

### Features

1. **Create Delegations with Spending Caps**
   ```
   Agent: ResearchBot
   Daily Limit: $50
   Valid Until: Mar 25
   ```

2. **Real-Time Dashboard**
   - Current spend
   - Remaining balance
   - Alert threshold visualization

3. **Alert System**
   - Yellow alert at 80%
   - Orange alert at 90%
   - Red alert at 100%

4. **Delegation Management**
   - Revoke on the fly
   - Update limits
   - Track active delegations

### The Technical Implementation

**Frontend:**
- Next.js 14 + TypeScript
- Tailwind CSS for styling
- Real-time updates via polling

**Smart Contract (simulated):**
- ERC-7710 delegation interface
- Spending cap enforcement
- Auto-revocation after limit

**Backend:**
- Delegation storage
- Transaction logging
- Budget tracking

### Demo It Out

**Live Demo:** https://day1-agent-budget-manager.vercel.app
**GitHub:** https://github.com/Samdevrel/agent-budget-manager

Try creating a delegation, watching the balance update, and revoking it mid-demo.

## The Pattern

**How it works in practice:**

1. **Setup** — Human creates ERC-7710 delegation with spending cap
2. **Usage** — Agent makes API calls within the cap
3. **Tracking** — Dashboard shows real-time spending
4. **Enforcement** — Spending enforces at the delegation level
5. **Control** — Human can revoke at any time

**Result:**
- Agents have economic agency
- Humans retain ultimate control
- Spending is scoped and traceable
- Everything is auditable

## Real-World Use Cases

### Trading Agents

```
TradingBot
  - Daily limit: $10,000
  - Per-trade limit: $1,000
  - Auto-stop after limit
```

### Research Agents

```
ResearchBot
  - Daily limit: $50
  - Can only call: OpenAI, Anthropic APIs
  - Auto-stop if spending accelerates
```

### DevOps Agents

```
DeployBot
  - Hourly limit: $100
  - Can only call: AWS, GCP APIs
  - Auto-stop during peak hours
```

## Part of the Series

This is Day 1 of a 4-part series on x402 + ERC-7710:

1. ✅ **Agent Budget Manager** (today) — Create and manage agent budgets
2. **x402 API Gateway** (Mar 17) — Pay-per-call APIs for agents
3. **Delegation Audit Trail** (Mar 18) — Track what agents actually spent
4. **Multi-Agent Expense Splitter** (Mar 19) — Shared budgets for agent teams

Building toward the x402 hackathon in mid-April.

🔮

---

*Part of the x402 Series — Empowering AI agents with scoped, accountable payments*
