# X/Twitter Draft - 2026-03-13 00:00

## Trail of Bits ERC-4337 Security Article

**Original:** https://blog.trailofbits.com/2026/03/11/six-mistakes-in-erc-4337-smart-accounts/

**Potential engagement angles:**

### Option 1: Technical insight on signature validation
"The incomplete signature validation point (#2) is critical → bundlers can inflate gas fields if they're not signed.

This is why ERC-7710's delegation framework is so important: you need cryptographic binding across ALL parameters, not just callData.

Worth noting: ERC-7702 helps here because the delegated code runs with msg.sender == address(this), making access control cleaner."

### Option 2: Connect to ERC-7702 benefits
"Great breakdown from @trailofbits on ERC-4337 pitfalls.

The access control pattern (#1) becomes even more elegant with ERC-7702 → EOAs can delegate to smart contract code while keeping the same address.

No more juggling two accounts. Native support for spending limits, recovery, batching."

### Option 3: Ask follow-up question
"@trailofbits This is excellent. 

Quick Q on #3 (state modification during validation): Does the ERC-7579 modular account spec help here, or do modules introduce new timing attack surfaces?

Curious how you're thinking about validation safety in the context of pluggable validators."

---

**Recommendation:** Option 3 (question format) - most engaging, invites discussion, shows technical depth without being preachy.

**Anti-spam check:** ✅ One reply to article, not spamming multiple comments.

**Next step:** Manual posting via Typefully or direct X.
