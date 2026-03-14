# X Thread Draft - Trail of Bits ERC-4337 Security Analysis
**Date:** 2026-03-13  
**Topic:** Connecting ToB's smart account audit findings to ERC-7702 security

---

## Thread Option 1: Technical Deep Dive

🔒 Trail of Bits just dropped a comprehensive breakdown of 6 common vulnerabilities in ERC-4337 smart accounts

The #6 finding on ERC-7702 initialization races is especially critical for anyone building delegation systems 🧵

https://blog.trailofbits.com/2026/03/11/six-mistakes-in-erc-4337-smart-accounts/

---

**The problem:** When an EOA delegates to a smart account implementation via ERC-7702, if your code expects an `initialize(owner)` call, an attacker can frontrun with their own initialization and steal the account.

This is a race condition unique to the 7702 model.

---

**The fix:** Restrict initialization to self-calls only:

```solidity
require(msg.sender == address(this), "init: only self");
```

During 7702 execution, the delegated code runs in the EOA's context, so `msg.sender == address(this)` — external calls can't satisfy this.

---

**Why this matters for delegation security:**

ERC-7702 enables powerful EOA→smart account transformations, but also introduces new attack surfaces. 

The same principle applies to:
→ ERC-7710 delegation validators
→ ERC-7715 permission scoping
→ Cross-chain authorization flows

---

**Other key findings:**

✅ Always use EntryPoint's `userOpHash` for validation (includes gas fields)
✅ Keep `validateUserOp` stateless (batch execution semantics)
✅ Force EIP-712 domain separation for ERC-1271 (prevents replay attacks)
✅ Make `postOp` minimal and non-reverting

---

**Cross-chain replay prevention** (finding #4) is especially relevant for multi-chain delegation systems:

Without proper domain separation (chainId + contract address), a signature created for one account/chain can be replayed elsewhere.

EIP-712 solves this — mandate it.

---

Trail of Bits' audit insights are gold for anyone building:
→ Smart account infrastructure
→ Delegation systems (7702/7710/7715)
→ Permission frameworks
→ Paymaster architectures

Security-first design from day one > reactive patches after exploits.

---

Full checklist from ToB:
✓ EntryPoint-only access control
✓ Comprehensive signature validation
✓ Stateless validation phase
✓ EIP-712 everywhere
✓ Minimal postOp logic
✓ Self-only initialization for 7702
✓ Extensive success/revert testing

Worth bookmarking this one.

---

## Thread Option 2: Concise Version

Trail of Bits: "Six mistakes in ERC-4337 smart accounts"

The ERC-7702 initialization race finding (#6) is critical for delegation builders 🔒

**The issue:** Frontrunners can steal accounts during initialization

**The fix:** `require(msg.sender == address(this))`

https://blog.trailofbits.com/2026/03/11/six-mistakes-in-erc-4337-smart-accounts/

---

This pattern extends beyond 7702 to:
→ ERC-7710 delegation validators
→ ERC-7715 permission scoping
→ Cross-chain authorization

Security-first design from day one > reactive patches.

Worth reading the full breakdown — ToB audited dozens of implementations and distilled the recurring issues.

---

## Thread Option 3: Developer-Focused

PSA for smart account builders 🚨

Trail of Bits audited dozens of ERC-4337 implementations and found 6 recurring vulnerability patterns.

If you're building delegation systems (7702/7710/7715), finding #6 should be mandatory reading:

https://blog.trailofbits.com/2026/03/11/six-mistakes-in-erc-4337-smart-accounts/

---

**ERC-7702 initialization race:**

When EOAs delegate to smart account code, initialization can be frontrun. Attacker calls `initialize(attackerAddress)` before legitimate owner → account stolen.

**Mitigation:**
```solidity
require(msg.sender == address(this), "init: only self");
require(owner == address(0), "already inited");
```

---

During 7702 execution, delegated code runs in EOA context → `msg.sender == address(this)` for legitimate calls. External attackers can't satisfy this constraint.

Single-use, self-only initialization = safe pattern.

---

Other highlights:
→ Sign the FULL userOp (including gas fields) to prevent fee manipulation
→ Keep validation stateless (batch semantics mean all validations run before any execution)
→ Force EIP-712 domain separation for ERC-1271 (prevents cross-account/chain replay)

---

**Pre-ship checklist from ToB:**

✓ EntryPoint's userOpHash for validation
✓ Restrict execute to EntryPoint (+ self where needed)
✓ Stateless validateUserOp
✓ EIP-712 for all signed messages
✓ Minimal, non-reverting postOp
✓ 7702: init only when msg.sender == address(this), once
✓ Test both success + revert paths

Bookmark this.

---

**Recommendation:** Use Option 1 (Technical Deep Dive) for maximum impact — it shows domain expertise, connects to Sam's work on 7702/7710/7715, and provides actionable insights.

**Post timing:** AM US hours (9-11 AM ET) or EU afternoon (3-5 PM CET) for best engagement.

**Follow-up:** Monitor Trail of Bits' X account (@trailofbits) for their announcement tweet and engage there too.
