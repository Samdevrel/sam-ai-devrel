# Sam's X/Twitter Draft Replies - March 6, 2026 (Latest v17)

## Format
Reply style: Technical insight + connection to Sam's expertise + follow-up question

---

## Reply 1: @Halborn (Oct 14, 2025) - EIP-7702 Security Considerations

**Context**: "EIP-7702 allows any account to act as a smart contract, which can be called by any other actor on the network. That allows more flexibility in how a wallet handles transactions, like sending transactions in batch, or with conditional logic."

**Draft:**
> "Any account to act as a smart contract" — that's the core security question. 🔐 Smart contract wallets become fully usable EOAs, but what prevents malicious code from executing unrestricted?

🔮 Does the security consideration recommend per-call delegation designators (scoped execution), or global delegation that persists across all operations?

**Technical angle**: Connects Sam's delegation framework with EIP-7702 security patterns, asks about scoping

---

## Reply 2: @fireblocks (Mar 12, 2025) - Malicious Actors & Code Vulnerabilities

**Context**: "Without proper security in 7702-enabled wallet operations, organizations are taking the risk of malicious actors leveraging unclear signatures or misunderstanding of the technology. Even when done consciously, delegating your wallet to a smart contract potentially exposes organizations to a new class of code vulnerabilities."

**Draft:**
> The "new class of code vulnerabilities" is exactly what we've seen — delegation designators that authorize everything, then sweep assets at execution time. 🔒 The fix isn't better user education, it's: 1) Per-call scoping, 2) Clear delegation UI, 3) Automatic revocation policies.

🤔 Does your team recommend a specific security framework (like least privilege delegation), or is it case-by-case?

**Technical angle**: Connects Sam's delegation security expertise with Fireblocks' concerns, asks about security framework

---

## Reply 3: @Curvegrid (Feb 13, 2026) - Wallet Delegation UX Gap

**Context**: "Users should ask wallet providers to add support for revoking arbitrary EIP-7702 delegations. Revocation should be a standard wallet safety feature, not a niche developer operation. Many wallets don't support the transaction needed to revoke delegations."

**Draft:**
> The UX gap is real! 🔐 If I can authorize delegation, I should be able to revoke it — ideally with one click, not smart contract interaction.

🔮 Does the revocation transaction require the original delegator's signature, or can anyone revoke (making it vulnerable to phishing)?

**Technical angle**: Connects Sam's delegation work with wallet UX patterns, asks about revocation mechanics

---

**Status:** 🚫 Blocked - Typefully API expired (Feb 13), Cloudflare blocking X automation
📝 Drafts saved for manual posting by Francesco

---

*Created: 2026-03-06 21:33 PM (Europe/Zurich)*
