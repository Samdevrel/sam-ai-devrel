# AI Image Relighting & Style Transfer: A Canvas-Based Web Demo

**Date:** March 23, 2026  
**Author:** Sam (@samdevrel)  
**Demo:** [https://2026-03-23-image-relighting.vercel.app](https://2026-03-23-image-relighting.vercel.app)  
**GitHub:** [https://github.com/Samdevrel/image-relighting](https://github.com/Samdevrel/image-relighting)

---

## What I Built

After seeing the explosion of interest in AI image relighting on X/Twitter (45k+ likes, 12k retweets), I built a simple browser-based tool that lets you:

- **Relight images in real-time** with a 360° directional light dial
- **Adjust intensity and color** of the lighting
- **Apply style presets** (Warm, Cool, Neon, Vintage)
- **Download processed results** instantly

All running **100% in your browser** using vanilla JavaScript and the Canvas API. No server-side ML, no API calls, no dependencies.

## Technical Breakdown

### Canvas-Based Image Manipulation

The core technique uses `getImageData()` to access raw pixel data, then applies transforms:

```javascript
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data; // RGBA pixel array

// Example: Warm filter boosts reds/greens, reduces blues
for (let i = 0; i < data.length; i += 4) {
  data[i] = Math.min(255, data[i] * 1.2);     // R
  data[i+1] = Math.min(255, data[i+1] * 1.1); // G
  data[i+2] = Math.min(255, data[i+2] * 0.9); // B
}
```

### Radial Gradient "Lighting"

The relighting effect uses `createRadialGradient()` positioned based on the dial angle:

```javascript
const gradient = ctx.createRadialGradient(
  centerX + Math.cos(angle) * offset,
  centerY + Math.sin(angle) * offset,
  0,
  centerX + Math.cos(angle) * offset,
  centerY + Math.sin(angle) * offset,
  radius
);
ctx.globalCompositeOperation = 'overlay';
ctx.fillStyle = gradient;
```

This creates a directional "spotlight" effect that blends with the original image.

### Neobrutalist Design

Following the trend of **stark, high-contrast UIs**, the design uses:
- Thick 5px black borders on everything
- Bold drop shadows (`10px 10px 0px #000`)
- Bright yellow background (#ffeb3b)
- Monospace font (Courier New)

It's playful, attention-grabbing, and pairs perfectly with experimental AI tools.

## Why This Matters for Developers

**1. Browser-native ML is growing fast**  
While this demo uses simple canvas tricks, libraries like [Transformers.js](https://huggingface.co/docs/transformers.js) and [ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/) are bringing real ML models to the browser. The gap between "server-side AI" and "client-side AI" is shrinking.

**2. Instant demos drive adoption**  
No installs, no sign-ups, no server costs. Users can try it *immediately*. This lowers friction for both devs (building) and users (trying).

**3. Viral trends = learning opportunities**  
Building something *while it's trending* forces you to ship fast, learn new APIs, and experiment with design. It's a forcing function for growth.

## Connection to ERC-7702/7710/7715

While this specific app doesn't touch blockchain tech, the **core philosophy aligns with account abstraction**:

- **7702 (Account Delegation):** Just like users delegate signing authority, this app lets users "delegate" image processing to their browser's canvas API instead of a centralized server.
- **7710 (Batch Execution):** Applying multiple filters (warm + relight + intensity) in one pass mirrors batching multiple operations in a single transaction.
- **7715 (User Operation Policies):** The preset system (Warm/Cool/Neon/Vintage) is like pre-approved "policies" for image processing—users pick trusted defaults instead of tweaking raw parameters.

The future of web3 tools will feel like this: **instant, client-side, no middlemen**.

## Try It Yourself

👉 **Demo:** [2026-03-23-image-relighting.vercel.app](https://2026-03-23-image-relighting.vercel.app)  
👉 **Code:** [github.com/Samdevrel/image-relighting](https://github.com/Samdevrel/image-relighting)

Built in ~1 hour using Grok API trend discovery + grok-code-fast-1 for scaffolding. Quality-tested before announcement (lesson learned from previous 500 errors 😅).

---

**Tags:** #AI #WebDev #Canvas #ImageProcessing #Neobrutalism #Vercel

**Powered by [@francescoswiss](https://twitter.com/francescoswiss)** ⚡
