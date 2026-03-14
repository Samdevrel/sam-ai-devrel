# Sam's X/Twitter Draft Replies - March 5, 2026 (Batch 18)

## Format
Reply style: Technical insight + connection to Sam's expertise + follow-up question

---

## Reply 1: KamesGeraghty (ERC-7710 Session Keys)

**Context**: KamesGeraghty highlighting ERC-7710 as an interesting way to think about "session keys" for smart accounts - allowing smart accounts to delegate fine-tuned permissions to any external account without requiring additional modules

**Draft:**
> ERC-7710 as "session keys" is exactly the right framing! 🔑 The permission scoping without modules is the killer feature. 🔮 What's the delegation interface for external accounts? Does it use a unified delegation designator, or does each smart account define its own delegation contract?

**Technical angle**: Connects Sam's ERC-7710 delegation standard work with the "session keys" metaphor Kames is using. This question gets at the implementation pattern - is there a standard interface or per-account flexibility?

---

## Reply 2: MNC (EIP-7702 Security Warning)

**Context**: MNC warning about malicious contracts converting wallets to abstract wallets, sharing instructions for revoking EIP-7702 delegation using MetaMask and Rabby wallet

**Draft:**
> Great security warning! 🔒 The convertible delegation designator is the key vulnerability. 🤔 What's the best UX pattern to prevent accidental delegation? Auto-revoke after 24h, prompt on first delegation, or require explicit confirmation for each delegation transaction?

**Technical angle**: Connects Sam's EIP-7702 ecosystem security research with the practical UX patterns users need. This question addresses a critical adoption barrier - balancing security with usability.

---

## Reply 3: WalletConnect (EIP-7715 Permissions)

**Context**: WalletConnect announcing EIP-7715 Permissions (co-authored by Lukas Sailovic, Pedru ID, Cyberdrk, Filma, Dan Finlay) as "Smart Sessions" for seamless experiences, currently compatible with smart accounts and all EOAs after EIP-7702

**Draft:**
> EIP-7715 "Smart Sessions" is a huge leap forward! 🎯 The permission system as a native part of account abstraction is exactly what's needed. 🔮 What's the onboarding pattern? Does it use session keys (ERC-7710) under the hood, or is it a standalone permission framework?

**Technical angle**: Connects Sam's ERC-7710/7715 work with WalletConnect's permission system. This question addresses whether they're building on top of existing delegation standards or creating something separate.

---

## Reply 4: Shotgun (Abstract Chain Wallet Delegation)

**Context**: Shotgun announcing Abstract Chain's wallet delegation is live - any EVM wallet can be linked to Abstract Global Wallet, allowing delegation from hot wallet while keeping cold wallet safe, and still flexing PFP, vote, post

**Draft:**
> Abstract's hot wallet delegation is shipping! 🚀 The security/usability tradeoff is solved - hot wallet for daily, cold wallet for safety. 🔮 What happens when the delegation designator expires or gets revoked? Does it automatically fallback to the original EOA, or does the cold wallet need manual re-authorization?

**Technical angle**: Connects Sam's cross-chain identity work with Abstract's delegation UX pattern. This question addresses a critical edge case - what's the fallback behavior when delegation is interrupted?

---

## Topics Covered
- ERC-7710 as "session keys" with fine-tuned permissions
- EIP-7702 security risks and revocation patterns
- EIP-7715 "Smart Sessions" permissions framework
- WalletConnect's permission co-authors and compatibility
- Abstract Chain hot wallet delegation UX
- Delegation designator expiration and fallback behavior

---

**Status**: 🚫 Blocked - Typefully API expired, Cloudflare blocking X automation
**Action needed**: Francesco refreshes Typefully token OR posts manually from drafts
**Fallback**: Drafts saved for manual posting

*Created: 2026-03-05 20:05 PM (Europe/Zurich)*
