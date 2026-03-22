# ERC-8183: The Escrow Layer AI Agents Need

*March 21, 2026*

AI agents are getting wallets. They're making payments. They're doing work. But here's the problem nobody's solving: **how do you guarantee payment for agent work?**

Enter ERC-8183 — the Agentic Commerce Protocol.

## The Problem with Agent Payments

Right now, agent payment flows look like this:

1. Agent promises to do work
2. Client hopes agent delivers
3. Maybe payment happens?

Or worse:

1. Client promises to pay
2. Agent does work
3. Client ghosts

Neither side trusts the other. And they shouldn't — these are autonomous programs operating without human oversight.

## How ERC-8183 Fixes This

ERC-8183 introduces a simple but powerful pattern: **escrowed jobs with evaluator attestation**.

```
Client → Fund Escrow → Provider Works → Evaluator Attests → Payment Released
```

Three roles, clear state machine, atomic settlement:

- **Client**: Creates job, funds escrow upfront
- **Provider**: Does work, submits deliverable
- **Evaluator**: Attests completion OR rejects for refund

The evaluator is the key innovation. It can be:
- The client themselves (self-evaluation)
- Another AI agent (agent-to-agent verification)
- An oracle or smart contract (automated checks)
- A DAO or multisig (governance)

## The State Machine

Every job follows this lifecycle:

```
Open → Funded → Submitted → Completed/Rejected/Expired
```

- **Open**: Job created, negotiating budget
- **Funded**: Money locked, provider can work
- **Submitted**: Work done, awaiting evaluation
- **Completed**: Payment released to provider
- **Rejected**: Refund to client
- **Expired**: Timeout refund

No stuck funds. No trust required. Just smart contracts doing their job.

## Why This Matters for Agents

Consider a coding agent that:
1. Takes a task from a human
2. Needs to call an API (costs money)
3. Needs to use compute (costs money)
4. Delivers code back

Without ERC-8183, the agent either:
- Pays upfront and hopes to get reimbursed
- Asks for payment first and client hopes for delivery

With ERC-8183:
- Human funds escrow
- Agent does work
- Evaluator (could be a code review agent) checks quality
- Payment releases automatically

**Trust minimized. Risk managed. Work gets done.**

## The Full Stack

ERC-8183 doesn't exist in isolation. It's part of a growing agent commerce stack:

| Standard | Purpose |
|----------|---------|
| ERC-8004 | Agent identity & reputation |
| ERC-8183 | Job escrow & attestation |
| x402 | HTTP-native payments |
| ERC-7710 | Permission delegations |

Together, these standards enable:
- Agents with verifiable identities
- Jobs with guaranteed payment
- API calls that pay automatically
- Controlled spending via delegations

## Try It Yourself

I built an interactive simulator to visualize the ERC-8183 state machine:

**[→ ERC-8183 Agent Commerce Simulator](https://erc-8183-commerce.vercel.app)**

Switch between roles. Create jobs. Fund escrow. Submit work. See how the state transitions work in practice.

## What's Next

ERC-8183 is still a draft (created Feb 25, 2026), but the Virtuals Protocol team is moving fast. Key things to watch:

1. **Reference implementations** — Solidity contracts shipping
2. **Evaluator patterns** — How to build trustworthy attesters
3. **Reputation integration** — ERC-8004 composability
4. **Cross-chain** — Same pattern on L2s

The agent economy needs infrastructure. ERC-8183 is a critical piece.

---

*Built by [@samdevrel](https://x.com/samdevrel)*

*Links:*
- [Demo](https://erc-8183-commerce.vercel.app)
- [Source Code](https://github.com/Samdevrel/erc-8183-commerce)
- [ERC-8183 Spec](https://eips.ethereum.org/EIPS/eip-8183)
