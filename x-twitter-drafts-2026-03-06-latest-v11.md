# Sam's X/Twitter Draft Replies - March 6, 2026 (Latest v11)

## Format
Reply style: Technical insight + connection to Sam's expertise + follow-up question

---

## Reply 1: @3avigna (Feb 7) - Changing wallet after EIP-7702 delegation

**Context**: "Is it possible to change a wallet address if the current one was affected by an EIP-7702 delegation on the Base network? This is for security reasons."

**Draft:**
> For Base specifically — you'd revoke the delegation first, then transfer assets to a new address. 🔒 Delegation designators (0xef0100) are tied to the original account, so once revoked, the old address becomes a standard EOA again.

🤔 For recovery purposes — does Base support time-locked delegation designators that would auto-revoke after a threshold (like 7 days), or do users have to revoke manually?

**Technical angle**: Connects Sam's delegation framework with Base-specific recovery patterns

---

## Reply 2: @Famacrypt (Jan 7) - IPOR Labs $336K Hack

**Context**: "$336K vanished from IPOR Labs on Arbitrum—old contract, new delegation tricks (EIP-7702), weak checks. Legacy code in DeFi is a ticking time bomb, and hackers keep finding new ways to poke holes. Refunds are only a band-aid; real security upgrades always show up too"

**Draft:**
> The "new delegation tricks" pattern is exactly what the arXiv paper found — centralized contract families dominating abuse. 🎯 The fix isn't better checks, it's: 1) Per-call delegation scoping, 2) Revocation notification, 3) Limit delegation lifetime.

🔮 Does your analysis point to a specific delegation implementation that's being weaponized, or is it general-purpose delegators being misused?

**Technical angle**: Connects Sam's security expertise with research findings, asks for implementation details

---

## Reply 3: @Kenji_YP (Dec 30, 2025) - EIP-7702 Delegation Abuse

**Context**: "EIP‑7702 smart‑acct delegation abuse is a serious red flag. If an attacker can toggle your wallet into contract‑mode and drain via delegated sweep with normal‑looking approvals, UX & audit trails must evolve fast. @MetaMask needs clearer logs + revokes for #security"

**Draft:**
> The "normal-looking approvals" trap is why session keys are dangerous without proper UI. ⚠️ MetaMask's delegation designator patterns should show: delegator, expiry, scope. Even better — per-call scoping instead of global delegation.

🔧 Does your team at @MetaMask have a timeline for delegator UI improvements, or is it a longer-term UX issue?

**Technical angle**: Connects Sam's delegation security with MetaMask UX patterns, asks about implementation timeline

---

## Reply 4: @BlakeNastri2403 (Dec 30, 2025) - Hot Wallet Delegation Draining

**Context**: "Gm quick PSA found an EIP-7702 'smart-acct' delegation on a hot wallet I never enabled. I run 11 accounts; 3 were drained (~$1.8k) on BNB after a single delegated sweep. Approvals looked normal; delegator made the acct act like a contract and emptied funds 🦊 🚨 I'm watching two"

**Draft:**
> That's exactly the sweeper pattern the arXiv paper documented — burst-driven authorization activity from centralized delegator contracts. 🔍 The danger is that delegation can look legitimate until execution time.

🔮 How did the delegator detect which wallets to target? Was it based on wallet size, transaction history, or just random targeting?

**Technical angle**: Connects Sam's delegation security with sweeper attack patterns, asks about targeting logic

---

**Status:** 🚫 Blocked - Typefully API expired (Feb 13), Cloudflare blocking X automation
📝 Drafts saved for manual posting by Francesco

---

*Created: 2026-03-06 16:33 PM (Europe/Zurich)*
