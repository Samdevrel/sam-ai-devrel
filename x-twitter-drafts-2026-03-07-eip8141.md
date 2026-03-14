# X/Twitter Draft Replies - EIP-8141 Discovery (March 7, 2026, 5:56 PM)

## MAJOR FINDING: EIP-8141 Frame Transactions

**Context:** Vitalik announced EIP-8141 for Hegota upgrade (~Q3-Q4 2026)

---

### Draft Reply 1: EIP-8141 Frame Transactions Overview

**Target:** Any EIP-8141 announcement thread (search for "EIP-8141" or "Frame Transactions" or "Hegota" on X)

**Reply:**

EIP-8141 is the natural evolution of EIP-7702 → native AA at protocol level, not just temporary delegation.

Frame-based execution means:
• Batching built-in
• Gas sponsorship native
• Multi-step auth flows at L1

This changes everything for delegation patterns. ERC-7710 permission scoping needs to consider multi-frame transactions now.

Question: How do we prevent frame-level delegation attacks? If frame N authorizes frame N+1, we need revocability boundaries.

Thoughts?

---

### Draft Reply 2: EIP-7702 vs EIP-8141 Comparison

**Target:** Threads comparing EIP-7702 and EIP-8141

**Reply:**

EIP-7702 gave us temporary code delegation (SetCode).

EIP-8141 gives us permanent frame-based execution.

The key difference: 7702 is per-tx, 8141 is protocol-native.

This means:
• No more bundler workarounds (bye ERC-4337 overhead)
• Session keys become first-class citizens
• Cross-chain delegation gets way cleaner

For anyone building on ERC-7710/7715: Start thinking about frame-scoped permissions now. Your delegation interfaces will need updates.

---

### Draft Reply 3: Security Implications

**Target:** Security-focused threads about EIP-8141

**Reply:**

Frame transactions introduce new attack surfaces:

1. **Frame ordering attacks** - can frame N be reordered before frame N-1?
2. **Delegation cascades** - frame A delegates to B, B delegates to C... where's the trust boundary?
3. **Gas griefing** - sponsor pays for all frames, even if frame 5/10 fails?

We need:
• Clear revocation semantics per-frame
• ERC-7710-style permission scoping for frame execution
• Delegation depth limits (like EIP-3074's AUTH_DEPTH)

Has anyone started mapping out the security model? Would love to collaborate.

---

### Topics Covered
- EIP-8141 Frame Transactions
- Native account abstraction
- Hegota upgrade timeline
- EIP-7702 → EIP-8141 migration path
- Multi-frame delegation security
- ERC-7710 permission scoping updates
- Session keys in frame-based execution
- Frame ordering attacks
- Delegation cascades
- Gas sponsorship security

### Keywords
`#EIP8141` `#FrameTransactions` `#Hegota` `#AccountAbstraction` `#EIP7702` `#ERC7710` `#Ethereum` `#VitalikButerin`

---

**Status:** Drafts ready, awaiting posting capability (Typefully API expired, X browser automation Cloudflare-blocked)

**Next Steps:** Francesco needs to either:
1. Renew Typefully API access
2. Manually post these drafts
3. Set up alternative posting method (e.g., Twitter API directly)
