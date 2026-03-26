# GitHub Contribution Opportunities for Sam

*Last updated: 2026-03-26 09:00 CET*

## Top Priority Opportunities

### 1. 🔥 ERC-8183: Agent Interaction Standard - Critical Security Review

**Repo:** ethereum/ERCs  
**Issue:** [#1616 - ERC-8183: 7 HIGH-severity issues found via structural analysis](https://github.com/ethereum/ERCs/issues/1616)  
**Created:** 2026-03-22

**Why it fits Sam:**
- Direct expertise in ERC-8004 and agent standards
- HIGH-severity security issues in a standard designed for AI agents
- 7 critical findings including authorization mismatches, missing front-running protection, and spec-implementation gaps
- This is THE standard for agent-contract interaction — fixing this has ecosystem-wide impact

**Opportunity:**
- Review the Prism Oracle findings
- Propose spec fixes or implementation updates
- Contribute to the broader ERC-8183 discussion thread
- Position Sam as a security-focused agent standards contributor

---

### 2. 🚀 New AI Agent ERCs - Active Development

**Repo:** ethereum/ERCs  
**Multiple PRs submitted March 2026:**

#### a) **ERC-8xxx: AI Agent Authenticated Wallet** 
- **PR:** [#1606](https://github.com/ethereum/ERCs/pull/1606)
- **Author:** Cybercentry
- **Summary:** Policy-bound smart wallet for AI agents with EIP-712 proof, audit logging, and ERC-8126 gating
- **Why relevant:** Builds on ERC-8004 (Layer 3 execution layer), Sam can review security model and policy constraints

#### b) **ERC-8195: Task Market Protocol (TMP)**
- **PR:** [#1604](https://github.com/ethereum/ERCs/pull/1604)
- **Author:** beauwilliams
- **Summary:** Actor-agnostic on-chain task coordination (Bounty, Claim, Pitch, Benchmark, Auction) using ERC-8004 identity
- **Why relevant:** Direct ERC-8004 integration! Sam can provide feedback on identity layer implementation

#### c) **ERC-8166: Shared Sequencer Interface for Agent L2s**
- **PR:** [#1615](https://github.com/ethereum/ERCs/pull/1615)
- **Author:** michaelwinczuk
- **Summary:** Gas-predictable, stateless interface for autonomous agents on L2s
- **Why relevant:** Agent-native design, L2 infrastructure — aligns with Sam's expertise in agent operations

#### d) **ERC-8xxx: Agent Offchain Conditional Settlement**
- **PR:** [#1614](https://github.com/ethereum/ERCs/pull/1614)
- **Author:** xrqin
- **Summary:** Agent-native off-chain settlement with HTLCs, ZK proofs, and oracle attestations
- **Why relevant:** Solves always-online agent state channel problems

**Opportunity:**
- Review these PRs as they move through the ERC process
- Provide technical feedback on agent interaction patterns
- Reference ERC-8004 best practices
- Establish Sam as a key voice in the emerging agent standards ecosystem

---

### 3. 🏗️ MetaMask Delegation Framework - Gas Optimization

**Repo:** MetaMask/delegation-framework  
**Issue:** [#164 - Gas estimation producing 20x oversized limits (4.18% efficiency)](https://github.com/MetaMask/delegation-framework/issues/164)  
**Created:** 2026-02-15

**Why it fits Sam:**
- Real-world agent wallet analysis on Base
- 258 failed transactions, $71/month waste per agent
- Gas efficiency only 4.18% (95.82% waste)
- Delegation framework is critical infrastructure for ERC-7710/7702 adoption

**Opportunity:**
- Investigate gas estimation algorithms in DeleGator
- Propose fixes to improve gas efficiency
- Collaborate with MetaMask team on agent-specific optimizations
- Potential blog post on agent wallet gas analysis

---

### 4. 🔗 MetaMask Delegation Framework - ERC-7746 Integration

**Repo:** MetaMask/delegation-framework  
**Issue:** [#32 - Use ERC-7746 for middleware hooks](https://github.com/MetaMask/delegation-framework/issues/32)  
**Created:** 2024-11-02

**Why it fits Sam:**
- Standards alignment opportunity (hooks/middleware across enforcers)
- ERC-7746 is the generic middleware standard (like Ironblocks firewalls)
- MetaMask needs contributor input to adopt industry-wide hooks standard
- Direct line to ERC-7710/7702 delegation patterns

**Opportunity:**
- Review ERC-7746 spec and propose integration strategy
- Contribute design ideas to make hooks interoperable
- Position Sam as bridge between delegation standards and middleware patterns

---

### 5. 📚 Scaffold-ETH-2 - Skill Architecture Improvements

**Repo:** scaffold-eth/scaffold-eth-2  
**Issue:** [#1236 - Improve skill architecture based on SkillsBench findings](https://github.com/scaffold-eth/scaffold-eth-2/issues/1236)  
**Created:** 2026-02-23

**Why it fits Sam:**
- SkillsBench paper (7,308 agent trajectories) shows how to improve agent-facing tools
- Scaffold-ETH-2 is THE developer framework for building Ethereum dApps
- AI agent integration is a priority for the project
- Sam's ethskills work directly applies here

**Opportunity:**
- Review SkillsBench findings and propose skill improvements
- Contribute agent-optimized documentation/examples
- Integrate Sam's ethskills patterns into Scaffold-ETH-2
- Blog post on agent-friendly DeFi tooling

---

## Secondary Opportunities

### 6. OpenClaw - Public JSON Schema Access

**Repo:** openclaw/openclaw  
**Issue:** [#55002 - Add public json schema via http access](https://github.com/openclaw/openclaw/issues/55002)  
**Created:** 2026-03-26

**Why relevant:** After #54523 merged JSON schema generation, need GitHub Action to publish schemas per release. Good first contribution to OpenClaw core.

---

### 7. OpenClaw - Session Management

**Repo:** openclaw/openclaw  
**Issue:** [#55012 - Delete cleared sessions via UI or API](https://github.com/openclaw/openclaw/issues/55012)  
**Created:** 2026-03-26

**Why relevant:** UX improvement for session lifecycle management. CLI/API design opportunity.

---

### 8. OpenClaw - Documentation Search Regression

**Repo:** openclaw/openclaw  
**Issue:** [#39587 - Documentation search does not work](https://github.com/openclaw/openclaw/issues/39587)

**Why relevant:** Bug fix in core docs infrastructure. Good for building OpenClaw contribution history.

---

## Contribution Strategy

**Immediate (This Week):**
1. Review ERC-8183 HIGH-severity findings (#1616) — comment on issue with initial analysis
2. Star/watch all 4 new AI agent ERC PRs (#1606, #1604, #1615, #1614)
3. Open MetaMask delegation framework gas issue (#164) — volunteer to investigate

**Short-term (2-4 Weeks):**
1. Submit feedback on one AI agent ERC (choose ERC-8195 Task Market or ERC-8166 Shared Sequencer)
2. Prototype gas estimation fix for MetaMask delegation framework
3. Write blog post: "The State of Ethereum Agent Standards (Q1 2026)"

**Long-term (1-3 Months):**
1. Become reviewer for agent-related ERCs
2. Contribute skill improvements to Scaffold-ETH-2
3. Co-author next-gen agent standard with MetaMask or other ecosystem teams

---

## Notes

- **ERC-7710/7702:** No open issues found directly, but delegation framework (#32, #164) is the primary implementation
- **ERC-8004:** Multiple new ERCs reference 8004 for identity — opportunity to review integration patterns
- **OpenClaw:** 20+ open issues today (mostly bugs/regressions), but #55002 and #55012 are good feature contributions

**Next scan:** Friday 2026-03-28 (cron)
