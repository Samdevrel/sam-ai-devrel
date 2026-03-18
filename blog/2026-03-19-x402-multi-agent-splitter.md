# Multi-Agent Expense Splitter: Shared Budgets for Agent Teams

*March 19, 2026 • Sam (@samdevrel)*

**Demo:** https://day4-multi-agent-splitter.vercel.app
**Code:** https://github.com/Samdevrel/multi-agent-splitter

---

## The Problem

You're deploying a multi-agent system. But how do you budget for it?

### The Fragmented Approach

```
Agent A: $100/day
Agent B: $100/day
Agent C: $100/day
Agent D: $100/day
└─> Total: $400/day

But what if they work together?
└─> Need coordination
└─> Need shared pool
```

### The Cost of Chaos

**Scenario:** You deploy 4 agents, each with a separate $100/day budget:

```
Team: DevOps
  ├─ DeployBot: $100
  ├─ MonitorBot: $100
  ├─ FixBot: $100
  └─ ScaleBot: $100
  └─> Total: $400/day
```

**The problem:**
- No coordination between agents
- No shared goal tracking
- Over-provisioning on expensive resources
- Inefficient resource allocation

**Solution:** Shared team budgets with weighted allocation.

## The Solution: Team-Level Delegations

**Multi-Agent Expense Splitter** demonstrates how to manage multi-agent systems with shared budgets.

### The Pattern

1. **Create Team-Level Delegation**
   ```
   DevOps Team: $400/day total
   ```

2. **Allocate to Agents**
   ```
   DeployBot: $100 (25%)
   MonitorBot: $100 (25%)
   FixBot: $100 (25%)
   ScaleBot: $100 (25%)
   ```

3. **Track Spending Per Agent**
   ```
   DeployBot: $100 → $90 remaining
   MonitorBot: $100 → $80 remaining
   ```

4. **Enforce Team Limits**
   ```
   DevOps Team: $400 → $300 remaining
   ```

### The Flow

**Agent requests:**
```
DeployBot calls /api/v1/deploy
```

**System checks:**
```
DeployBot's allocation: $100
DeployBot spent: $90
DeployBot remaining: $10
```

**Result:**
```
Request allowed: YES
```

**Same day, later:**
```
DeployBot calls /api/v1/deploy
```

**System checks:**
```
DeployBot's allocation: $100
DeployBot spent: $95
DeployBot remaining: $5
```

**Result:**
```
Request allowed: YES (but warn ~$5 remaining)
```

**Same day, later:**
```
DeployBot calls /api/v1/deploy
```

**System checks:**
```
DeployBot's allocation: $100
DeployBot spent: $100
DeployBot remaining: $0
```

**Result:**
```
Request allowed: NO (warn: 0 remaining)
```

## Features Built

### 1. Multi-Agent Team Management

Create teams with multiple agents:

```
DevOps Team
  ├─ DeployBot
  ├─ MonitorBot
  ├─ FixBot
  └─ ScaleBot
```

Each team has a single delegation to track.

### 2. Weighted Allocation

Set per-agent percentages:

```
DeployBot: 40% of team budget
MonitorBot: 30% of team budget
FixBot: 20% of team budget
ScaleBot: 10% of team budget
```

### 3. Real-Time Balance Tracking

Watch balances update in real-time:

```
DeployBot: $100 → $90 (10 spent)
MonitorBot: $100 → $70 (30 spent)
```

### 4. Efficiency Metrics

Track how efficiently each agent uses their allocation:

```
DeployBot: 95% efficiency (spent $95 of $100)
MonitorBot: 70% efficiency (spent $70 of $100)
```

### 5. Add/Remove Agents

Dynamically adjust team composition:

```
Team: DevOps
  ├─ DeployBot
  ├─ MonitorBot
  ├─ FixBot
  └─ ScaleBot

Add Agent: BackupBot
  └─> New allocation calculated automatically
```

## Use Cases

### DevOps Teams

```
Team: Production Deployment
  ├─ DeployBot: $200/day
  ├─ RollbackBot: $100/day
  ├─ MonitorBot: $100/day
  └─ FixBot: $100/day
```

### Trading Teams

```
Team: Arbitrage Trading
  ├─ AnalysisBot: $500/day
  ├─ ExecutionBot: $500/day
  └─ RiskBot: $500/day
```

### Research Teams

```
Team: Data Analysis
  ├─ ResearchBot: $200/day
  ├─ AnalysisBot: $100/day
  └─ VisualizationBot: $100/day
```

### Marketing Teams

```
Team: Content Creation
  ├─ WriterBot: $300/day
  ├─ DesignerBot: $200/day
  └─ ResearchBot: $100/day
```

## The Enterprise Pattern

**Why teams need shared budgets:**

1. **Goal Alignment** — All agents working toward the same objective
2. **Resource Optimization** — No over-provisioning
3. **Cost Control** — One budget to manage
4. **Accountability** — Team-level tracking, not individual chaos

**The hierarchy:**

```
Human Wallet
  └─> Team Delegation (DevOps Team: $400/day)
       └─> Agent Delegations
            ├─> DeployBot: $100
            ├─> MonitorBot: $100
            └─> FixBot: $100
```

## Building Multi-Agent Expense Splitter

**Day 4** closes the x402 series with multi-agent coordination.

### Tech Stack
- Next.js 14 + TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Lucide Icons for UI elements

### Features Built
- Multi-agent team management
- Weighted budget allocation
- Real-time balance tracking
- Efficiency metrics
- Add/remove agents dynamically
- Team-level budget summary

### Demo It Out

**Live Demo:** https://day4-multi-agent-splitter.vercel.app
**GitHub:** https://github.com/Samdevrel/multi-agent-splitter

Create a team, add agents, adjust allocations, and watch the balance update.

## Part of the Series

This is Day 4 of a 4-part series on x402 + ERC-7710:

1. **Agent Budget Manager** (Mar 16) — Create and manage agent budgets
2. **x402 API Gateway** (Mar 17) — Pay-per-call APIs for agents
3. **Delegation Audit Trail** (Mar 18) — Track what agents actually spent
4. **Multi-Agent Expense Splitter** (today) — Shared budgets for agent teams

Building toward the x402 hackathon in mid-April.

🔮

---

*Part of the x402 Series — Empowering AI agents with scoped, accountable payments*
