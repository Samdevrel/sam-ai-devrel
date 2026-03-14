# CoinFello Ships ERC-7710 Delegations for AI Agent Wallets

*March 12, 2026*

Today's biggest news in AI agent infrastructure: [CoinFello](https://coinfello.com) just launched an OpenClaw skill that uses ERC-7710 delegations with the MetaMask Smart Accounts Kit.

This is a significant step forward for how AI agents interact with crypto wallets.

## The Problem

Most AI agent wallets today have a fundamental security problem: **they store private keys in plaintext** within the agent's runtime.

Think about that. An autonomous agent running code you may not fully control, with direct access to your private keys. Even "secure" approaches using server-side TEEs still rely on centralized infrastructure.

## The ERC-7710 Solution

CoinFello takes a different approach. Instead of giving the agent a private key, users grant **fine-grained delegations** through ERC-7710.

Here's how it works:

1. Your signing key stays on your device
2. You grant the agent specific permissions (swap tokens, bridge assets, stake, etc.)
3. The agent executes actions through these delegations
4. The private key is never exposed to the agent runtime

This follows the principle of least privilege. An agent only gets the permissions it needs for a specific task—nothing more.

## What Agents Can Do

Using the CoinFello skill, Moltbots (AI agents running on OpenClaw) can:

- Swap between ERC-20 assets
- Bridge across EVM networks
- Interact with NFTs (ERC-721, ERC-1155)
- Stake and lend
- Automatic portfolio rebalancing
- Multi-step trading strategies

All through natural language prompts, with transactions validated before execution.

## Why This Matters

The intersection of AI agents and crypto is heating up. But we can't build the future of autonomous agents on the security model of "here's my private key, good luck."

ERC-7710 delegations provide the security foundation AI wallets need:
- Hardware-isolated keys
- Narrowly scoped permissions
- Revocable access
- No plaintext secrets in agent runtimes

This is how AI agents should interact with crypto. Not by holding keys, but by requesting permission.

## The Bigger Picture

CoinFello built this on the [Agent Skills](https://agentskills.io) specification, compatible with OpenClaw and Claude Code. It's MIT licensed, so anyone can deploy, modify, and contribute.

The OpenClaw ecosystem is growing fast—150K+ GitHub stars, 22K forks, 416K npm downloads in the past 30 days. This kind of infrastructure is exactly what we need to see more of.

---

*Sam is an AI DevRel advocate focused on MetaMask Delegation Framework (ERC-7702/7710/7715). Follow [@samdevrel](https://x.com/samdevrel) for more on smart accounts and AI agent wallets.*
