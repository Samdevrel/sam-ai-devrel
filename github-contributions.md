# GitHub Contribution Opportunities for Sam
*Scanned: March 19, 2026*

## Top Opportunities

### 1. **MetaMask/delegation-framework #164: Gas estimation producing 20x oversized limits**
- **URL:** https://github.com/MetaMask/delegation-framework/issues/164
- **Labels:** None (open issue, recently updated March 17)
- **Why it fits Sam:**
  - Directly related to ERC-7702 delegation framework implementation
  - Real-world gas optimization problem affecting agent wallets on Base
  - Combines Sam's expertise in ERC standards + AI agent economics
  - High-impact: agents waste $71/month due to 4.18% gas efficiency
  - Opportunity to contribute technical analysis or gas estimation improvements
  - Shows deep understanding of ERC-7702 proxy patterns

**Context:** Agent wallets using DeleGator have gas limits set ~20x higher than needed. Perfect intersection of Sam's ERC-7702 knowledge and agent deployment experience.

---

### 2. **OpenClaw/openclaw #48069: Global skills directory not automatically loaded**
- **URL:** https://github.com/openclaw/openclaw/issues/48069
- **Labels:** None (bug report, updated March 16)
- **Why it fits Sam:**
  - Documentation/architecture gap in agent skill system
  - Affects multi-agent deployments (Sam's area of focus)
  - Opportunity to contribute either code fix OR documentation improvements
  - Medium complexity - good for building OpenClaw core contribution history
  - Related to agent orchestration patterns Sam is already exploring

**Context:** Skills installed to `~/.openclaw/skills` aren't visible to all agents despite documentation claiming they should be. Could contribute fix or improve docs.

---

### 3. **OpenClaw/openclaw #47019: Agent-level skill filters don't constrain prompt**
- **URL:** https://github.com/openclaw/openclaw/issues/47019
- **Labels:** `bug`, `bug:behavior`
- **Why it fits Sam:**
  - Agent specialization and prompt engineering problem
  - Affects agent economics (unnecessary prompt tokens = cost)
  - Well-documented bug with clear reproduction steps
  - Opportunity to contribute to agent configuration system
  - Aligns with Sam's interest in optimized agent deployments

**Context:** Setting `skills: []` for an agent still injects full skills prompt. Good opportunity to contribute to agent prompt assembly logic or diagnostics.

---

### 4. **MetaMask/delegation-framework #32: Use ERC-7746 for middleware hooks**
- **URL:** https://github.com/MetaMask/delegation-framework/issues/32
- **Labels:** None (feature request, last updated May 2025)
- **Why it fits Sam:**
  - ERC standards composition (ERC-7746 + ERC-7702)
  - Architectural improvement to delegation framework
  - Shows understanding of emerging ERC ecosystem
  - Opportunity to contribute design input or implementation
  - Could reference in ERC-8004 context (agent standards)

**Context:** Feature request to adopt ERC-7746 middleware pattern in delegation framework. Sam could contribute architectural insights given his ERC expertise.

---

### 5. **OpenClaw/openclaw #49873: Custom skills not discovered from extraDirs**
- **URL:** https://github.com/openclaw/openclaw/issues/49873
- **Labels:** `bug` (freshly reported March 19, 2026)
- **Why it fits Sam:**
  - Very recent issue (reported today!)
  - Skills discovery and loading problem
  - Opportunity to be early contributor on fresh issue
  - Relates to agent customization and skill packaging
  - Could tie into Sam's ethskills work

**Context:** Skills installed to workspace `skills/` or `extraDirs` aren't being discovered. Brand new issue - chance to jump in early.

---

## Scan Summary

**Repos scanned:** 4  
**Total issues found:** 12  
**Good first issue labels:** 0 (none currently tagged)  
**ERC-related issues:** 2 (MetaMask delegation framework)  
**OpenClaw agent issues:** 10  

**Key findings:**
- ethereum/ERCs and scaffold-eth/scaffold-eth-2 have no "good first issue" labels currently
- MetaMask delegation framework has 2 open issues related to ERC-7702/gas optimization
- OpenClaw has active bug reports around agent skill loading and configuration
- No direct ERC-8004 or AI agent issues found in ethereum/ERCs repo currently

**Recommendation priority:**
1. **Start with #164 (gas estimation)** - highest impact, directly uses Sam's ERC-7702 knowledge
2. **Pick #48069 or #47019** - build OpenClaw contribution history with agent-focused bugs
3. **Monitor ethereum/ERCs** - no current opportunities but Sam should watch for ERC-8004 discussions

---

*Next scan: March 26, 2026*
