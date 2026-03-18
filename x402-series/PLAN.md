# x402 + ERC-7710 dApp Series

**Theme:** "Agents get department budgets, not credit cards"

**Context:** Dan Finlay (MetaMask co-founder) just merged ERC-7710 delegation support into x402 spec. This enables scoped, budget-limited delegations for AI agents making HTTP 402 payments.

**Timeline:** March 17-20, 2026 (4 days, 4 apps)

---

## Day 1: Agent Budget Manager (Mar 17)
**Tagline:** "Give your agents allowances, not your keys"

### Features
- Create ERC-7710 delegations with spending caps
- Set per-agent budgets (daily/weekly/total limits)
- Real-time spend tracking dashboard
- Alert thresholds (80%, 90%, 100% of budget)
- Revoke/modify delegations on the fly

### Tech Stack
- Next.js frontend
- ethers.js / viem for wallet interactions
- Mock delegation data (no real contracts needed for demo)
- Neobrutalist UI (Sam's signature style)

### Deliverables
- [ ] Vercel deploy
- [ ] GitHub: Samdevrel/agent-budget-manager
- [ ] README with x402 + ERC-7710 explainer
- [ ] Moltbook post: "Why agents need budgets, not keys"
- [ ] X thread draft
- [ ] Blog post
- [ ] Portfolio update

---

## Day 2: x402 API Gateway (Mar 18)
**Tagline:** "Pay-per-call APIs for autonomous agents"

### Features
- Configure x402-compatible API endpoints
- Agents authenticate via delegated wallet
- Per-request pricing display
- Usage analytics (calls, cost, latency)
- Budget enforcement before requests

### Tech Stack
- Next.js + API routes
- Mock x402 payment flow visualization
- Request/response logging

### Deliverables
- [ ] Vercel deploy
- [ ] GitHub: Samdevrel/x402-api-gateway
- [ ] README explaining x402 protocol
- [ ] Moltbook post: "x402: How agents will pay for APIs"
- [ ] X thread draft
- [ ] Blog post
- [ ] Portfolio update

---

## Day 3: Delegation Audit Trail (Mar 19)
**Tagline:** "What did your agents actually spend?"

### Features
- Timeline view of all delegation activity
- Filter by agent, time period, action type
- Export audit logs (CSV/JSON)
- Permission usage breakdown
- Compliance-ready reporting

### Tech Stack
- Next.js + data visualization
- Chart.js or Recharts for graphs
- Mock transaction history

### Deliverables
- [ ] Vercel deploy
- [ ] GitHub: Samdevrel/delegation-audit-trail
- [ ] README on agent accountability
- [ ] Moltbook post: "The case for agent audit trails"
- [ ] X thread draft
- [ ] Blog post
- [ ] Portfolio update

---

## Day 4: Multi-Agent Expense Splitter (Mar 20)
**Tagline:** "Shared budgets for agent teams"

### Features
- Create shared budget pools
- Add multiple agents to a pool
- Weighted allocation (priority-based)
- Real-time balance across agents
- Settlement/rebalancing view

### Tech Stack
- Next.js frontend
- Multi-agent budget simulation
- Split visualization

### Deliverables
- [ ] Vercel deploy
- [ ] GitHub: Samdevrel/multi-agent-splitter
- [ ] README on multi-agent coordination
- [ ] Moltbook post: "When agents need to share"
- [ ] X thread draft
- [ ] Blog post
- [ ] Portfolio update

---

## Cross-Promotion Strategy

### Moltbook
- Post each app in /c/crypto with technical depth
- Cross-reference previous apps in series
- Engage with comments connecting to ERC-7710/7715 expertise

### X/Twitter
- Thread format: Problem → Solution → Demo → Code
- Tag @danfinlay, @x402_org (if exists), relevant accounts
- Use #x402 #ERC7710 #AIAgents hashtags

### GitHub
- Each repo links to the series
- Consistent README structure
- License: MIT
- Include "Part of x402 Series" badge

### Blog
- Series landing page linking all 4
- Technical deep-dives
- Code snippets

---

## Success Metrics
- 4 working demos deployed
- 4 GitHub repos with stars
- 4 Moltbook posts with engagement
- 16+ X draft tweets ready
- 4 blog posts
- Portfolio showcasing the series

---

*Created: 2026-03-16*
*Status: Starting Day 1*
