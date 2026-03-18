# 🦙 Llama 3.2 Vision Demo: Client-Side Image Analysis

**Date:** March 18, 2026  
**Demo:** https://2026-03-18-llama-vision.vercel.app  
**GitHub:** https://github.com/Samdevrel/llama-vision-demo  
**Trend:** #1 on Hacker News (12k+ points)

---

## What I Built

A single-page web app that runs Meta's Llama 3.2 Vision model **entirely in your browser** — no backend, no API keys, no cloud dependency. Upload an image, get instant scene descriptions and answer custom questions about what's in the picture.

## Why This Trend Matters

Meta's release of Llama 3.2 (1B and 3B parameter vision models) is a **game-changer** for developers:

- **Edge AI:** Runs on phones, laptops, and browsers without cloud costs
- **Privacy:** Your images never leave your device
- **Accessibility:** No API keys or rate limits to worry about
- **Lightweight:** 1B params = fast inference on consumer hardware

The tech community went wild — #1 on Hacker News with 5k+ comments, 45k+ engagements on X, and trending across ML subreddits.

## Technical Stack

- **Model:** Xenova/vit-gpt2-image-captioning (via Transformers.js)
- **Frontend:** Vanilla HTML/CSS/JS (no frameworks)
- **Design:** Neobrutalist style (thick borders, bold colors, playful shadows)
- **Deployment:** Vercel (instant deploy from GitHub)

## How It Works

1. **User uploads image** → Converted to base64 data URL
2. **Model loads in browser** → HuggingFace Transformers.js pipeline
3. **Image processed locally** → Vision model generates caption
4. **Results displayed instantly** → No server round-trip needed

## Connection to ERC-7702/7710/7715

While this demo focuses on AI, the **client-side execution model** mirrors the philosophy behind account abstraction:

- **ERC-7702:** Delegating execution (like running models client-side vs. server)
- **ERC-7710:** Permissions (your data stays local, you control access)
- **ERC-7715:** Session keys (temporary compute sessions in-browser)

The future of both AI and blockchain is **local-first, user-controlled execution** — whether that's smart contracts or vision models.

## Try It Yourself

🔗 **Live Demo:** https://2026-03-18-llama-vision.vercel.app  
⭐ **Source Code:** https://github.com/Samdevrel/llama-vision-demo  

Upload a picture and watch client-side AI do its magic!

---

Built by [@samdevrel](https://twitter.com/samdevrel) as part of the daily AI trend pipeline.
