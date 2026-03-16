# GitHub Contribution Opportunities for Sam

**Scan Date:** March 16, 2026, 9:00 AM CET  
**Target Repos:** MetaMask/delegation-framework, ethereum/ERCs, scaffold-eth/scaffold-eth-2, openclaw/openclaw

---

## 🎯 Top 5 High-Impact Opportunities

### 1. **Scaffold-ETH 2: Skill Architecture Improvements** ⭐⭐⭐
- **Repo:** scaffold-eth/scaffold-eth-2
- **Issue:** [#1236 - Improve skill architecture based on SkillsBench findings](https://github.com/scaffold-eth/scaffold-eth-2/issues/1236)
- **Type:** Architecture / AI Agent Tooling
- **Why it fits Sam:**
  - Directly related to AI agent effectiveness in building Ethereum dApps
  - Research-backed (SkillsBench paper) with actionable recommendations
  - Touches the exact intersection of AI agents + Ethereum development
  - Opportunity to shape how LLMs build dApps in SE-2
  - Skills are similar to ethskills framework Sam knows
- **Key findings from issue:**
  - Compact skills (+17.1pp) and detailed skills (+18.8pp) outperform comprehensive ones (-2.9pp)
  - 2-3 skills per task is optimal; 4+ skills degrades performance
  - Executable resources (scripts/templates) matter more than markdown-only docs
  - Current SE-2 has two massive skills (533 and 443 lines) that likely hurt agent performance
- **Contribution path:**
  - Split large skills into focused 150-250 line modules
  - Add template .sol contracts and deploy scripts alongside SKILL.md
  - Add composition guidance for which 2-3 skills pair well
  - Create verification checklists for each skill
  - Test improvements against baseline LLM prompts

---

### 2. **MetaMask Delegation Framework: Gas Estimation Bug** ⭐⭐⭐
- **Repo:** MetaMask/delegation-framework
- **Issue:** [#164 - Gas estimation producing 20x oversized limits (4.18% efficiency)](https://github.com/MetaMask/delegation-framework/issues/164)
- **Type:** Performance / ERC-7702 Implementation
- **Why it fits Sam:**
  - Real production issue affecting AI agents using delegation framework
  - ERC-7702 proxy implementation (cutting-edge EIP)
  - Quantified impact: $71.35/month waste per agent, 95.82% gas waste
  - Directly relevant to agent wallet economics
  - Ties into broader ERC-7710/7702 ecosystem Sam cares about
- **Context:**
  - Analyzed wallet: `0x464fc339add314932920d3e060745bd7ea3e92ad`
  - 258 failed transactions, all reverted (not OOG)
  - Gas limits ~20x higher than actual usage
  - Expected efficiency: 70-90%, actual: 4.18%
- **Contribution path:**
  - Deep dive into gas estimation logic in delegation framework
  - Compare with standard EIP-7702 proxy implementations
  - Propose fix to bring efficiency to 70-90% range
  - Document findings for other delegation framework users

---

### 3. **MetaMask Delegation Framework: ERC-7746 Middleware Hooks** ⭐⭐
- **Repo:** MetaMask/delegation-framework
- **Issue:** [#32 - Use ERC-7746 for middleware hooks](https://github.com/MetaMask/delegation-framework/issues/32)
- **Type:** Standards Adoption / Interoperability
- **Why it fits Sam:**
  - Cross-ERC work (7746 + delegation framework)
  - Aligns multiple protocols (Ironblocks firewalls, delegation enforcers)
  - Opportunity to contribute ideas to ERC-7746 standard
  - Fits "building blocks" / DeFi legos mental model
  - Industry-wide problem (firewalls, hooks, middleware)
- **Context:**
  - Delegation framework currently uses custom hooks extensively
  - ERC-7746 exists to standardize middleware hooks across industry
  - Contributor suggests aligning delegation framework with 7746
- **Contribution path:**
  - Read ERC-7746 spec and compare with current delegation framework hook patterns
  - Identify gaps or improvements needed in ERC-7746 to support delegation use cases
  - Contribute feedback/PRs to ethereum/ERCs for ERC-7746
  - Propose migration path for delegation framework to adopt 7746

---

### 4. **Scaffold-ETH 2: bytecode prefix bug in decodeTxData** ⭐⭐
- **Repo:** scaffold-eth/scaffold-eth-2
- **Issue:** [#1246 - Bug: decodeTxData.ts checks wrong bytecode prefix](https://github.com/scaffold-eth/scaffold-eth-2/issues/1246)
- **Type:** Bug Fix / Solidity Deep Knowledge
- **Why it fits Sam:**
  - Small, surgical fix with clear diagnostic
  - Requires understanding of Solidity contract creation bytecode
  - Affects block explorer UX in SE-2 (contract creation txs labeled "Unknown")
  - Quick win to build SE-2 contributor reputation
  - Good "first real contribution" before tackling #1236
- **Bug details:**
  - Current check: `!tx.input.startsWith("0x60e06040")`
  - Correct check: `!tx.input.startsWith("0x6080604")` (standard Solidity init code)
  - Result: Contract creation transactions mislabeled in block explorer
- **Contribution path:**
  - Fix one-line typo in `packages/nextjs/utils/scaffold-eth/decodeTxData.ts`
  - Add test case for contract creation detection
  - PR with clear before/after explanation

---

### 5. **OpenClaw: Skills inaccessible in sandbox rw mode** ⭐
- **Repo:** openclaw/openclaw
- **Issue:** [#48011 - Non-workspace skills are inaccessible to the agent when sandbox is in workspaceAccess: "rw" mode](https://github.com/openclaw/openclaw/issues/48011)
- **Type:** Bug / Agent Tooling Infrastructure
- **Why it fits Sam:**
  - Affects how AI agents access skills in sandboxed environments
  - Direct OpenClaw contribution (platform Francesco uses)
  - Ties into skill-based agent work (#1236 above)
  - Regression from 2026.3.13 affecting bundled/managed skills
- **Bug details:**
  - In `workspaceAccess: "rw"` mode, agents can't read system-level skills
  - Error: "Path escapes sandbox root" for `/usr/lib/.../feishu-doc/SKILL.md`
  - Works in `workspaceAccess: "none"` mode (auto-syncs skills to workspace)
  - Missing visibility mechanism in rw mode
- **Contribution path:**
  - Review path resolver logic in rw mode
  - Propose either: (1) auto-sync skills like in "none" mode, or (2) bind mount system skills
  - Test fix with staff agent + feishu-doc skill
  - PR with regression test

---

## 📋 Other Notable Issues (Lower Priority)

### ethereum/ERCs
- **ERC-7710** and **ERC-8004** both exist as Draft standards
  - ERC-7710: Smart Contract Delegation (requires ERC-1271, ERC-7579)
  - ERC-8004: Trustless Agents (identity, reputation, validation registries)
  - **Opportunity:** Review standards, propose improvements, write reference implementations
  - Both are AI-agent-focused ERCs — perfect for Sam's expertise

### Documentation Gaps
- **MetaMask/delegation-framework:** No "good first issue" labels, but issues #164 and #32 are both approachable
- **scaffold-eth/scaffold-eth-2:** Issue #1236 explicitly calls for "executable resources" (templates/scripts) alongside skills
- **ethereum/ERCs:** Multiple build/tooling issues (#1572, #1541, #729) — less relevant to Sam's focus

---

## 🎯 Recommended Action Plan

**Week 1: Quick Win**
- Fix SE-2 bytecode prefix bug (#1246) → build contributor trust

**Week 2-3: High Impact**
- Deep dive on SE-2 skill architecture (#1236)
  - Read SkillsBench paper
  - Audit current SE-2 skills
  - Propose split/refactor plan
  - Add executable templates

**Week 4+: Standards Work**
- Investigate MetaMask delegation framework gas estimation (#164)
- Contribute to ERC-7746 / ERC-7710 / ERC-8004 discussions
- Connect delegation framework work to broader ERC ecosystem

---

## 📊 Scan Summary

| Repo | Open Issues | Good First Issue | AI/Agent Related | Sam-Relevant |
|------|-------------|------------------|------------------|--------------|
| MetaMask/delegation-framework | 3 | 0 | 3 (100%) | 2 high-priority |
| ethereum/ERCs | 11 scanned | 0 | 2 standards (7710, 8004) | 2 standards to review |
| scaffold-eth/scaffold-eth-2 | 10 | 0 | 1 major (#1236) | 2 issues |
| openclaw/openclaw | 30 | 0 | 1 (#48011) | 1 issue |

**Key insight:** No repos use "good first issue" labels, but the skill architecture issue (#1236) and gas estimation bug (#164) are both high-leverage contributions that fit Sam's expertise perfectly.

---

*Next scan scheduled: Check these repos weekly for new issues related to AI agents, ERC-7710/7702/8004, and skill/tooling improvements.*
