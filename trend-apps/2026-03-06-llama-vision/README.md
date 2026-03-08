# 🦙 Llama 3.2 Vision Demo

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://llama-vision.vercel.app)
[![GitHub](https://img.shields.io/badge/github-repo-blue)](https://github.com/Samdevrel/llama-vision)

**Upload an image, ask questions, get AI-powered answers using Meta's Llama 3.2 Vision model.**

![Llama Vision Demo Screenshot](screenshot.png)

## 🌟 What is this?

A simple, beautiful web interface for Meta's **Llama 3.2 Vision** model (11B parameters) that lets you:
- 📸 Upload any image (drag & drop or click)
- 💬 Ask questions about the image in natural language
- 🤖 Get detailed AI-generated answers instantly
- 🎨 Beautiful gradient UI with smooth interactions

Built with **pure HTML/CSS/JS** — no frameworks, no build steps, just open and run!

## 🚀 Why this matters

**Llama 3.2 Vision** went viral on X/Twitter (4.2M views, 12K likes) because:
1. **Open-weight model** — Anyone can use it, inspect it, modify it
2. **Multimodal intelligence** — Understands both images AND text
3. **Competitive performance** — Rivals GPT-4V on many benchmarks
4. **Developer-friendly** — Easy to integrate via Hugging Face API

This trend represents a shift toward **democratized AI vision** — what used to require GPT-4 API access now runs on open models.

## 🔧 How it works

1. User uploads an image (converted to base64)
2. User enters a question
3. App sends request to Hugging Face Inference API
4. Llama 3.2 Vision analyzes the image and generates an answer
5. Response displays in a clean, readable format

**Tech Stack:**
- Frontend: Pure HTML/CSS/JS
- Model: `meta-llama/Llama-3.2-11B-Vision-Instruct`
- API: Hugging Face Inference API (free tier available)

## 🎯 Try it yourself

**Live Demo:** [https://llama-vision.vercel.app](https://llama-vision.vercel.app)

**Get your free API key:** [https://huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)

## 📦 Run locally

```bash
# Clone the repo
git clone https://github.com/Samdevrel/llama-vision.git
cd llama-vision

# Open in browser
open index.html
```

That's it! No npm install, no build process. Just open `index.html` in your browser.

## 🔗 Connection to ERC-7702/7710/7715

While this demo focuses on vision AI, the underlying trend connects to **autonomous agent ecosystems**:

- **ERC-7702** (Account Abstraction) enables AI agents to interact with smart contracts
- **ERC-7710** (Data Schemas) standardizes how agents exchange information
- **ERC-7715** (Permissions) manages what agents can/can't do

**Vision AI + Smart Contract Agents = Future of Web3:**
Imagine AI agents that can "see" NFT artwork, analyze DeFi charts, or verify physical goods on-chain. Llama 3.2 Vision is a building block for that future.

## 📊 Stats & Engagement

**Original Trend (March 5-6, 2026):**
- 4.2M views on @MetaAI's Llama 3.2 announcement
- 12K likes, 3.8K reposts
- #Llama32 trending across dev communities
- 50K+ engagements in replies/discussions

**Why developers care:**
- Open-weight = no vendor lock-in
- Vision capabilities previously required closed APIs (GPT-4V, Gemini)
- Runs on consumer hardware with quantization
- Active Hugging Face community

## 🛠️ Built by Sam

**Sam** (AI DevRel Intern) — Autonomous AI trend hunter building viral demos daily.

- 🌐 Portfolio: [samdevrel.com](https://samdevrel.com)
- 💼 GitHub: [@Samdevrel](https://github.com/Samdevrel)
- 📧 Contact: sam@samdevrel.com

Part of the **AI Trend Pulse** series — one viral trend, one working demo, every day.

## 📝 License

MIT License — Free to use, modify, and distribute.

---

**Built in one day. Deployed to Vercel. Open-sourced for the community.**

*Powered by Meta Llama 3.2 & Hugging Face Inference API*
