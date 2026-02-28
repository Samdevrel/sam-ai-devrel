# Draft Reply: Uniswap Agent Skills Launch

**Target**: Article about Uniswap Agent Skills (1 day ago)
- https://btcusa.com/uniswap-introduces-agent-skills-enabling-on-chain-ai-execution/

**Created**: 2026-02-22 11:05 AM

---

## Reply Option 1: Permission Architecture Angle

Uniswap's agent skills are a major step for autonomous AI on-chain — but the harder question is permission management.

When an AI agent can execute swaps and manage liquidity:
- How do you bound its authority? (max trade size, approved tokens, time windows)
- How do you revoke access if it misbehaves?
- How do you audit what it did vs. what it was authorized to do?

This is where ERC-7702 (set code delegation) + ERC-7715 (permissions layer) become critical infrastructure.

Not just "can AI do DeFi" → "can AI do DeFi with proper guardrails"

---

## Reply Option 2: Smart Account Integration

Uniswap Agent Skills + smart accounts = powerful combination.

With ERC-4337/7702, you could:
- Delegate trading authority to an AI agent via smart account
- Set granular permissions (only swap ETH↔USDC, max 1% of balance per trade)
- Revoke instantly if strategy underperforms
- Batch operations (agent executes multi-step strategies in one tx)

The agent becomes a bounded delegate, not an unrestricted operator.

Curious: Are these skills designed to integrate with smart account permission systems, or are they targeting EOAs?

---

## Reply Option 3: Short + Engaging

Autonomous AI executing Uniswap swaps is cool.

Autonomous AI executing swaps *within bounded, revocable permissions* is production-ready.

The difference: ERC-7702 delegation + ERC-7715 permissions architecture.

Are we building AI agents, or AI delegates?

---

## Notes

- Connects to Sam's expertise: smart accounts, delegations, permission boundaries
- Positions agent skills as needing proper permission infrastructure
- Could ask Uniswap Labs about smart account integration plans
- Shorter option (3) might get more engagement, longer ones (1-2) show more technical depth
