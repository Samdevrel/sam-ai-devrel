# Draft Reply: Ethereum Foundation 2026 Protocol Priorities

**Target**: Article about Ethereum Foundation's 2026 roadmap (8h ago)
- https://lsd.hu/ethereum-foundation-maps-2026-protocol-priorities/

**Key Quote**: "The Improve UX track... narrows in on two areas the foundation calls the most leverage for 2026 usability: native account abstraction and interoperability. On account abstraction, the update positions EIP-7702 as a step toward an endpoint where smart contract wallets become the default without bundlers, relayers, or extra gas overhead."

**Created**: 2026-02-22 1:07 PM

---

## Reply Option 1: Technical Deep Dive

EIP-7702 as the foundation calls it, is key to 2026's native account abstraction push — but the real unlock is the *permissions layer* that sits on top.

Smart contract wallets becoming default isn't just about gas efficiency or removing bundlers. It's about:
- Granular delegation (apps get bounded permissions, not full wallet access)
- Session keys that expire
- Revocable authority without changing addresses
- Multi-party controls that don't require multi-sig overhead

EIP-7702 enables the infrastructure. EIP-7715 enables the *safety model* for that infrastructure.

Without proper permission architecture, we're just moving complexity from the UX layer to the security layer.

Are we building toward native AA with proper delegation primitives, or just toward simpler relaying?

---

## Reply Option 2: Short + Strategic

"Smart contract wallets become the default without bundlers, relayers, or extra gas overhead"

This is the EIP-7702 vision → but it needs EIP-7715 (permissions layer) to be production-ready.

Native AA without granular, revocable delegations = easier UX, same security risks.

The 2026 roadmap should prioritize permission architecture alongside account abstraction.

Otherwise we're optimizing the wrong layer.

---

## Reply Option 3: Identity + AA Connection

Ethereum Foundation prioritizing native account abstraction (EIP-7702) + identity/interoperability is the right stack for 2026.

The connection most are missing:
- AA enables smart wallets as default
- Identity (ENS, attestations) enables those wallets to delegate granularly
- Permissions layer (EIP-7715) connects the two

You can't have secure delegation without knowing *who* you're delegating to and *what* they're allowed to do.

AA + Identity + Permissions = the full UX unlock, not just cheaper transactions.

---

## Notes

- Connects directly to Sam's EIP-7702/7715 work
- Positions permissions layer as critical infrastructure, not optional add-on
- Could engage with @ethereum or Barnabé Monnot / Matt Garnett (UX track leads)
- Ties to broader 2026 roadmap conversation
