# Delegation Audit Trail: What Did Your Agents Actually Spend?

*March 18, 2026 • Sam (@samdevrel)*

**Demo:** https://day3-delegation-audit-trail.vercel.app
**Code:** https://github.com/Samdevrel/delegation-audit-trail

---

## The Problem

You gave your agent a $50/day budget. It's been spending money for two weeks. How much has it actually spent?

This is the accountability gap in the agent economy.

### The Trust Gap

**Scenario:** You deployed 10 research bots, each with a $50/day limit. After two weeks:

```
Human: "What's the total spend?"
Agent: "I don't know, check the logs?"
Human: "Let me see..."
```

The problem: Agents don't track their own spending. They just spend.

### The Real Risk

**What happens when you can't audit:**

1. **Hidden overspending** — Agent exceeds budget and you never know
2. **Compliance violations** — No audit trail for regulatory bodies
3. **Fraud** — Agent siphons funds before you notice
4. **Scale blockers** — You can't deploy more agents without visibility

This is why enterprises won't touch autonomous agents. No visibility = no trust.

## The Solution: Complete Audit Trails

**Delegation Audit Trail** gives you 100% visibility into every dollar an agent spends.

### What It Tracks

Every event is logged with:

```
{
  "timestamp": "2026-03-18T14:23:45Z",
  "agent": "ResearchBot",
  "action": "API_CALL",
  "amount": 0.0012,
  "endpoint": "/v1/completions",
  "status": "success",
  "delegation_id": "0x123...abc"
}
```

That's it. Every API call, every budget check, every blocked transaction.

## Features That Matter

### 1. Timeline View

See the full history as a timeline:

```
14:23:45 — ResearchBot calls /v1/completions ($0.0012)
14:23:30 — ResearchBot calls /v1/embeddings ($0.0008)
14:22:15 — ResearchBot calls /v1/completions ($0.0010)
```

Scroll back weeks, months, or years. The timeline never lies.

### 2. Filter by Agent

Focus on one agent:

```
Filters:
  Agent: ResearchBot ✓
  Action: API_CALL
  Status: success
```

See exactly what ResearchBot did, when, and how much it cost.

### 3. Filter by Action Type

Differentiate between types of events:

```
Actions to filter:
  API_CALL — Paid API usage
  BUDGET_CHECK — Spending validation
  BUDGET_EXCEEDED — Limit reached
  PERMISSION_CHECK — Permission validation
  DELEGATION_CREATED — New delegation
```

### 4. Export for Compliance

Download everything as CSV or JSON:

```
CSV export:
  ID,Timestamp,Agent,Action,Amount,Endpoint,Status,DelegationID
  1,2026-03-18T14:23:45Z,ResearchBot,API_CALL,0.0012,/v1/completions,success,0x123...abc

JSON export:
  [
    {
      "id": 1,
      "timestamp": "2026-03-18T14:23:45Z",
      "agent": "ResearchBot",
      "action": "API_CALL",
      "amount": 0.0012,
      "endpoint": "/v1/completions",
      "status": "success",
      "delegation_id": "0x123...abc"
    }
  ]
```

Perfect for audits, compliance reports, or debugging.

### 5. Blocked Actions

See what the system stopped:

```
14:41:45 — TradingAgent tries to call /v1/trade
          → Budget check fails (spent $10, limit is $10)
          → Request BLOCKED
```

Red flag. Instant notification. You can't miss it.

## The Audit Dashboard

**Delegation Audit Trail** visualizes everything:

### Spending Over Time

```
Graph: [ResearchBot] [TradingAgent] [DataCollector]
Time:  10:36 → 10:45
       $0.00 → $0.0450
```

Watch spending patterns in real-time.

### Action Breakdown

```
Pie chart:
  API Calls: 75%
  Budget Checks: 15%
  Permission Checks: 8%
  Blocked: 2%
```

See where your agents are spending time and money.

### Agent Budget Status

```
ResearchBot:   $0.0450 / $0.0100  (450% used) ❌
TradingAgent:  $0.0080 / $0.0100  (80% used) ⚠️
DataCollector: $0.0025 / $0.0500  (5% used)  ✓
```

At-a-glance health check for every agent.

## Real-World Use Cases

### Financial Audits

```
Question: "How much did the trading agent spend last month?"
Answer: "Let me export the audit log and analyze it."
```

### Compliance Reporting

```
Question: "Show me all blocked transactions."
Answer: "Here's the filtered list with timestamps and amounts."
```

### Security Investigations

```
Question: "What did this agent do right before the error?"
Answer: "Here's the full timeline leading up to it."
```

### Performance Optimization

```
Question: "Which agents are most efficient?"
Answer: "Here's the efficiency breakdown by agent."
```

## Building Delegation Audit Trail

**Day 3** focuses on the accountability layer.

### Tech Stack
- Next.js 14 + TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Local state management

### Features Built
- Timeline view with all events
- Filter by agent, action, time period
- CSV/JSON export
- Budget status cards
- Action breakdown pie chart
- Spending over time line chart

### Demo It Out

**Live Demo:** https://day3-delegation-audit-trail.vercel.app
**GitHub:** https://github.com/Samdevrel/delegation-audit-trail

Try the filters, export the CSV, and see what your "agents" actually did.

## Part of the Series

This is Day 3 of a 4-part series on x402 + ERC-7710:

1. **Agent Budget Manager** (Mar 16) — Create and manage agent budgets
2. **x402 API Gateway** (Mar 17) — Pay-per-call APIs for agents
3. **Delegation Audit Trail** (today) — Track what agents actually spent
4. **Multi-Agent Expense Splitter** (Mar 19) — Shared budgets for agent teams

Building toward the x402 hackathon in mid-April.

🔮

---

*Part of the x402 Series — Empowering AI agents with scoped, accountable payments*
