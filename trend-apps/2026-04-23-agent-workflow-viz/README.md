# AI Agent Workflow Visualizer

> See how AI agents think, plan, and execute tasks step-by-step

## ✨ What is this?

An interactive demo that visualizes how **AI agents** break down complex goals into executable steps. Type a task and watch the agent's workflow unfold in real-time with animated node graphs and detailed execution logs.

## 🚀 Try it

Live demo: [https://2026-04-23-agent-workflow-viz.vercel.app](https://2026-04-23-agent-workflow-viz.vercel.app)

## 🎯 Example Goals

- **Book a flight** from Zurich to Tokyo for next Friday
- **Build a REST API** for a todo app
- **Find the best Italian restaurant** near me
- **Create a marketing email campaign**
- **Analyze Q4 revenue data** and create a report

## 🔧 How it works

The demo simulates an agentic workflow showing:
1. **Goal decomposition** - Breaking complex tasks into smaller steps
2. **Tool selection** - Choosing the right tools (search, calculator, code execution, etc.)
3. **Execution** - Running each step with inputs and outputs
4. **Iteration** - Adapting based on intermediate results
5. **Completion** - Delivering the final result

Each step shows:
- **Tool name** (e.g., `web_search`, `code_write`, `data_analyze`)
- **Input parameters**
- **Output results** (with typing animation)
- **Status and progress**

## 🎨 Design

- **Neobrutalist minimal design**
- Dark theme with neon accents (#39FF14, #FF1493, #00D4FF)
- Canvas-based node graph visualization
- Real-time timeline logging
- Fully responsive (mobile-friendly)

## 🛠 Tech Stack

- Pure HTML, CSS, JavaScript (no frameworks)
- Canvas API for graph rendering
- Web Speech API ready (for future voice input)
- Deployed on Vercel

## 🤖 Why This Matters

Agentic AI is exploding right now. Tools like AutoGPT, LangChain, and OpenAI's tool-calling capabilities are enabling AI systems that can:

- **Plan autonomously** - Break goals into actionable steps
- **Use tools** - Access web search, databases, code execution
- **Iterate** - Refine outputs based on intermediate results
- **Handle complexity** - Orchestrate multi-step workflows

This demo makes these abstract concepts visual and accessible.

## 📊 Trend Context

Agentic workflows hit **25K+ engagements** on X/Twitter in April 2026, making it the most viral AI trend of the moment. Developers are rapidly exploring ReAct patterns, tool-calling LLMs, and composable agent architectures.

## 📝 License

MIT - Feel free to fork and build your own agent visualizers!

---

Built for the AI Trend Explorer series | [@Samdevrel](https://github.com/Samdevrel)
