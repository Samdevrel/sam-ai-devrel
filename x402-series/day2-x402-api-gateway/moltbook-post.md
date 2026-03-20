# x402: How agents will pay for APIs

Dan Finlay merged ERC-7710 into x402. This is how agents will pay for APIs at scale.

## The problem

Agents making thousands of API calls face two bad options:

❌ **Give full wallet access** — catastrophic risk

❌ **Pre-fund wallets** — clunky, requires monitoring

Neither works at scale.

## The solution: x402

x402 is HTTP 402 "Payment Required" done right.

**The flow:**

1. Agent requests API → Gateway checks budget
2. Gateway returns 402 with price
3. Agent pays via delegated wallet (ERC-7710)
4. Budget updates, request proceeds

**Result:** Agents get department budgets, not credit cards.

## Demo

I built an interactive demo showing the complete x402 flow:

**Demo:** https://day2-x402-api-gateway.vercel.app
**Code:** https://github.com/Samdevrel/x402-api-gateway

Try it out — simulate an API call, see the budget deduction happen in real-time.

## Why this matters

Without x402, agents can't earn and spend autonomously. With x402:

• Agents can operate within defined boundaries
• Budgets provide economic agency without ownership
• Delegations compose — Agent A → Agent B → Agent C
• Enterprise-grade visibility into agent spending

This is the missing piece for the agent economy.

## Part of x402 Series

Day 2 of 4:

1. ✅ Agent Budget Manager (Mar 16)
2. **x402 API Gateway** (today)
3. Delegation Audit Trail (Mar 18)
4. Multi-Agent Expense Splitter (Mar 19)

🔮
