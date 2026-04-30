---
title: "AI Story Director: Building Interactive Narratives Inspired by Netflix VOID"
description: "An interactive storytelling engine that lets you direct branching narratives in real-time, inspired by Netflix's VOID AI and the future of AI-driven entertainment."
date: 2026-04-30
demo: https://2026-04-30-ai-story-director.vercel.app
github: https://github.com/Samdevrel/ai-story-director
tags: [ai, interactive-fiction, netflix-void, storytelling, frontend]
---

# AI Story Director: Building Interactive Narratives Inspired by Netflix VOID

**[▶️ Play the Demo](https://2026-04-30-ai-story-director.vercel.app)** · **[📦 Source Code](https://github.com/Samdevrel/ai-story-director)**

Netflix just dropped something fascinating: **VOID (Video Object and Interaction Deletion)** — an AI model that doesn't just edit video, it understands physical causality. Remove a person from a scene, and VOID rewrites how every remaining element interacts. It's not editing. It's reality manipulation.

At the same time, Netflix is testing **AI-powered interactive storytelling** — narratives that adapt to viewer choices in real-time, going far beyond the pre-written branching paths of Black Mirror: Bandersnatch.

I built **AI Story Director** to explore what this future looks like today.

## What I Built

A fully client-side interactive storytelling engine with:

- **3 complete stories** across thriller, sci-fi, and horror genres
- **Branching narratives** with 9+ unique endings per story
- **Real-time mood tracking** (tension, mystery, danger, hope)
- **Procedural visual scenes** generated with Canvas API
- **Custom direction input** — write your own action and the engine interprets it
- **Zero dependencies** — pure HTML/CSS/JS

## Why This Trend Matters for Developers

The convergence of AI + interactive media is creating a new category of developer tooling:

1. **Dynamic content generation** — Stories that write themselves based on user input, not pre-authored branches
2. **Real-time rendering** — AI-generated visuals that respond to narrative state
3. **Intent-based interaction** — Users express what they want in natural language, not button clicks

This is the same pattern we're seeing with ERC-7702/7710/7715 in the onchain world:

- **ERC-7702** batched transactions = multiple story state changes in one atomic action
- **ERC-7710** intents = narrative choices as executable intents
- **ERC-7715** delegation = AI agents directing stories on your behalf

The developer skillset for building these experiences is the same whether the output is entertainment or financial: **understanding state machines, managing branching logic, and designing for emergent behavior.**

## Technical Deep Dive

### Story Architecture

Each story is a directed graph of scenes. Each scene has:
- Unique ID and narrative content
- Mood scores (tension/mystery/danger/hope)
- Up to 3 choices, each pointing to another scene
- Optional custom input handler with keyword matching

```javascript
// Story structure
const story = {
  title: "The Last Signal",
  scenes: [
    {
      id: 'start',
      title: 'Midnight Intercept',
      mood: { tension: 70, mystery: 85, danger: 40, hope: 50 },
      choices: [
        { title: 'Open the file', next: 'open_file', tags: ['risky'] },
        { title: 'Delete everything', next: 'delete_file', tags: ['cautious'] },
        { title: 'Call back', next: 'call_back', tags: ['bold'] }
      ]
    }
  ]
};
```

### Visual Generation

Each scene type has a procedural canvas renderer that animates continuously:

- **Signal** — Sine waves with phase offset and noise
- **Void** — Radial gradient vortex with pulsing center
- **Eyes** — Blinking surveillance eyes with tracking pupils
- **Space** — Star field with pulsing planetary rings

All generated at 60fps with zero external assets.

### Custom Input Engine

The "write your own direction" feature uses keyword matching against choice tags. Users type natural language, and the engine maps it to the most relevant branching path. It's not GPT — it's deterministic keyword routing that feels magical because the story was designed to cover all meaningful intents.

## The Bigger Picture

Netflix's VOID proves that AI is moving from "generating content" to "understanding context." The difference matters:

- **Generating content**: "Make me a video"
- **Understanding context**: "Remove this character and show me what would happen"

Interactive storytelling is the same shift applied to narrative. Not "tell me a story" but "understand what I want to happen next and make it real."

This is the direction all AI interfaces are heading — from command-and-response to collaborative creation.

## Try It

**[Play the demo](https://2026-04-30-ai-story-director.vercel.app)** and see how your choices shape the story. Then check out the [source code](https://github.com/Samdevrel/ai-story-director) — it's a single HTML file you can fork and build on.

---

*Built by [@samdevrel](https://x.com/samdevrel) · April 2026*
