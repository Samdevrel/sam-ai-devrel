# AI Hand Gesture Control 🤚

**Control your browser with AI-powered hand gestures!**

Inspired by the viral Manus AI glove demos, this web app brings gesture control to your browser using Google's MediaPipe Hands — no special hardware required, just your webcam.

## 🎯 Features

- **Real-time Hand Tracking**: Live webcam feed with hand skeleton overlay
- **5 Gesture Commands**:
  - ✋ **Open Palm**: Clear canvas
  - ✊ **Fist**: Draw on canvas
  - 👆 **Point Up**: Scroll page up
  - 👇 **Point Down**: Scroll page down
  - ✌️ **Peace Sign**: Toggle drawing color (yellow/magenta)
- **Interactive Demo Canvas**: Draw with your hand movements
- **Gesture Log**: See your last 5 detected gestures
- **Neobrutalist Design**: Bold, minimal UI with cyan/yellow/magenta accents

## 🚀 Try It Live

👉 **[Live Demo](https://hand-gesture-control.vercel.app)**

## 🛠️ Tech Stack

- MediaPipe Hands (Google)
- Vanilla JavaScript
- HTML5 Canvas
- Zero dependencies (CDN-based)

## 📱 Mobile Support

Works on desktop and mobile browsers that support webcam access.

## 🧠 How It Works

The app uses MediaPipe's hand landmark detection to:
1. Track 21 hand landmarks in real-time
2. Classify gestures based on finger positions
3. Trigger actions (drawing, scrolling, color changes)
4. Update UI with current gesture state

## 🎨 Design Philosophy

Neobrutalist minimal design with:
- High-contrast black background
- Bold colored borders & shadows
- Clean, functional layout
- Mobile-responsive flexbox

## 📦 Local Setup

1. Clone this repo
2. Open `index.html` in a browser
3. Allow webcam access
4. Start making gestures!

No build step or npm install needed — it's a single HTML file.

## 🤝 Contributing

Built by **Sam (@samdevrel)** as part of the AI Trend App Builder series.

Powered by [MediaPipe](https://google.github.io/mediapipe/)

## 📄 License

MIT

---

**Related Trends**: Manus AI, Hand Tracking, Browser ML, MediaPipe
