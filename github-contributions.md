# GitHub Contribution Opportunities - Sam's Portfolio
*Scan Date: Monday, March 2nd, 2026 — 9:01 AM*

## Top Opportunities

### 🥇 #1: ERC-8004 Onchain Metadata Extension (ethereum/ERCs)
- **PR:** [#1532](https://github.com/ethereum/ERCs/pull/1532) - "Add ERC: Agent Onchain Metadata Extension (ERC-8004 Compatible)"
- **Author:** nxt3d
- **Status:** Open (draft stage)
- **Why it fits:**
  - Directly related to ERC-8004 (Sam's specialty)
  - Defines onchain metadata standards for AI agent registries
  - Introduces snake_case key standards (name, description, image, agent_account, x402_support, endpoint/\<name\>)
  - Compatible with existing ERC-8004 getMetadata/setMetadata functions
  - Perfect overlap with Sam's AI agent work

**Suggested contribution:** Review the PR, test implementations, suggest improvements to the metadata schema, contribute reference implementations

---

### 🥈 #2: Delegation Framework Gas Efficiency Crisis (MetaMask/delegation-framework)
- **Issue:** [#164](https://github.com/MetaMask/delegation-framework/issues/164) - "Gas estimation producing 20x oversized limits (4.18% efficiency)"
- **Status:** Open, needs investigation
- **Why it fits:**
  - Critical performance issue affecting agent wallets on Base
  - 258 failed transactions analyzed showing 95.82% gas waste
  - Costs ~$71.35/month per agent in wasted gas
  - Real-world data: wallet `0x464fc339add314932920d3e060745bd7ea3e92ad`
  - Ties into ERC-7702 account abstraction + delegation primitives

**Suggested contribution:** Investigate gas estimation code, propose fixes, benchmark improvements, document gas optimization patterns for delegated accounts

---

### 🥉 #3: ERC-7710 Spec Cleanup (ethereum/ERCs)
- **PR:** [#1535](https://github.com/ethereum/ERCs/pull/1535) - "Update ERC-7710: Remove unused _action param from redeemDelegations NatSpec comment"
- **Status:** Open, small documentation fix
- **Why it fits:**
  - ERC-7710 is MetaMask's delegation framework standard
  - Low-effort, high-impact documentation improvement
  - Good first contribution to ethereum/ERCs repo
  - Shows attention to detail in spec work

**Suggested contribution:** Review PR, verify against reference implementation, suggest additional doc improvements if needed

---

### 🎯 #4: Skills Architecture Improvements (scaffold-eth/scaffold-eth-2)
- **Issue:** [#1236](https://github.com/scaffold-eth/scaffold-eth-2/issues/1236) - "Improve skill architecture based on SkillsBench findings"
- **Status:** Open, research-backed improvement proposal
- **Why it fits:**
  - AI agent skill optimization based on SkillsBench paper (86 real-world tasks, 7,308 trajectories)
  - Key finding: Smaller models + good skills beat larger models without
  - Proposes splitting large skills (solidity-security: 533 lines, defi-protocol-templates: 443 lines)
  - Adding executable templates alongside SKILL.md files
  - Direct overlap with Sam's AI agent + Ethereum work

**Suggested contribution:** Design new skill architecture, create focused security skill modules (reentrancy, access control, gas optimization), build template .sol files + deploy scripts

---

### 🔧 #5: OpenClaw Sub-Agent Access Inheritance (openclaw/openclaw)
- **Issue:** [#31416](https://github.com/openclaw/openclaw/issues/31416) - "Feature: agents.defaults.subagents.allowAgents for inherited sub-agent access"
- **Status:** Open, architectural improvement
- **Why it fits:**
  - Multi-agent orchestration patterns
  - Config inheritance for shared utility agents
  - Scales to 12+ agent deployments
  - Improves developer experience for agent ecosystems

**Suggested contribution:** Implement `agents.defaults.subagents.allowAgents` with additive merge behavior, add tests, document usage patterns

---

## Additional Interesting Issues

### MetaMask/delegation-framework
- **#88** - "Source files have Solidity version locked to 0.8.23, limiting extensibility" (April 2025)
- **#32** - "Use ERC-7746 for middleware hooks" (Nov 2024) - potential cross-ERC integration work

### scaffold-eth/scaffold-eth-2
- **#1198** - Address component crashes on invalid input (needs UX fix)
- **#1206** - Improve test coverage for YourContract (testing expertise)
- **#807** - Vercel CLI gives gated link instead of public URL (deployment issue)

### openclaw/openclaw
- **#31449** - HTTP API should return full execution details (reasoning, tool I/O) for parity with web UI
- **#31416** - Sub-agent access inheritance (multi-agent orchestration)
- **#31397** - Webchat/TUI propagate thread metadata for ACP session-mode context

---

## Strategic Value

**Why these repos matter:**

1. **MetaMask/delegation-framework** → Core infrastructure for ERC-7702 account abstraction + delegated execution
2. **ethereum/ERCs** → Where standards get written (ERC-8004, ERC-7710, ERC-7702)
3. **scaffold-eth/scaffold-eth-2** → Most popular Ethereum dApp starter kit, huge adoption
4. **openclaw/openclaw** → AI agent platform (meta: using AI to contribute to AI tooling)

**Impact areas:**
- Standards authorship (ERC-8004 metadata extension)
- Performance optimization (gas efficiency for agent wallets)
- Developer experience (skills architecture, sub-agent orchestration)
- Documentation quality (spec cleanup, implementation guides)

---

## Next Steps

1. **Priority 1:** Review + contribute to PR #1532 (ERC-8004 metadata extension)
2. **Priority 2:** Investigate + fix issue #164 (delegation gas efficiency)
3. **Priority 3:** Pick one scaffold-eth skill improvement from #1236
4. **Build portfolio:** Document contributions in sam-portfolio/contributions.md
5. **Network:** Engage with MetaMask delegation team (Dan Finlay, Ryan McPeck, Dylan DesRosier)

---

*Generated by GitHub Repo Scanner cron job*
