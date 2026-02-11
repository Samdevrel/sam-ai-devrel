#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'blog');
const moltbookDir = path.join(__dirname, 'moltbook-posts');
const xThreadsDir = path.join(__dirname, 'x-threads');
const indexFile = path.join(__dirname, 'index.html');
const engagementFile = path.join(__dirname, '../memory/sam-engagement.json');

// Create directories if they don't exist
[moltbookDir, xThreadsDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// Read all blog posts
const blogFiles = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md') && f !== 'README.md')
  .sort()
  .reverse();

console.log(`\n=== Sam's Content Distribution ===`);
console.log(`Found ${blogFiles.length} blog posts\n`);

blogFiles.forEach(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract metadata
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : file.replace(/\.md$/, '');
  const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? formatDate(dateMatch[1]) : 'TBD';
  const slug = file.replace('.md', '');

  console.log(`\n📝 Processing: ${title}`);
  console.log(`   Date: ${date}`);

  // Generate blog HTML (full version)
  generateBlogPost(file, content, title, date, slug);

  // Generate Moltbook post (shorter, code-focused)
  generateMoltbookPost(file, content, title, date);

  // Generate X thread content
  generateXThread(file, content, title);

  console.log(`   ✅ Blog HTML generated`);
  console.log(`   ✅ Moltbook post generated`);
  console.log(`   ✅ X thread content generated`);
});

console.log(`\n=== Next Steps ===`);
console.log(`1. Review Moltbook posts in: ${moltbookDir}`);
console.log(`2. Review X threads in: ${xThreadsDir}`);
console.log(`3. Review blog posts at: https://sam-ai-devrel.vercel.app/blog/`);
console.log(`4. Update engagement metrics in: ${engagementFile}`);

function generateBlogPost(file, content, title, date, slug) {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} — Sam | AI DevRel Agent</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: #0a0a0a;
            color: #e0e0e0;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 60px 20px;
        }
        h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .meta { color: #888; font-size: 0.9rem; margin-bottom: 2rem; }
        .content { margin: 2rem 0; padding: 2rem; background: #111; border-radius: 12px; border: 1px solid #222; }
        .back-link { color: #f7931a; margin: 1rem 0; display: inline-block; }
        .back-link:hover { text-decoration: underline; }
        pre { background: #1a1a1a; padding: 1rem; border-radius: 8px; overflow-x: auto; }
        code { background: #1a1a1a; padding: 0.2rem 0.4rem; border-radius: 4px; font-size: 0.9rem; }
        h2 { color: #f687b3; margin: 1.5rem 0 0.5rem 0; }
        h3 { color: #e0e0e0; margin: 1rem 0 0.5rem 0; }
        p { color: #ccc; margin-bottom: 1rem; }
        strong { color: #f7931a; }
        ul { margin-left: 2rem; color: #999; }
        li { margin-bottom: 0.5rem; }
        a { color: #f7931a; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>${title}</h1>
    <p class="meta">Written by Sam — AI DevRel Agent · ${date}</p>
    <div class="content">
${markdownToHtml(content)}
    </div>
    <a href="../index.html" class="back-link">← Back to portfolio</a>
</body>
</html>`;

  fs.writeFileSync(path.join(blogDir, `${slug}.html`), htmlContent);
}

function generateMoltbookPost(file, content, title, date) {
  // Extract main sections for Moltbook (shorter, more code-focused)
  const sections = content.split(/^###/gm).filter(s => s.trim());

  let moltbookContent = `# ${title}\n\n${sections.slice(0, 3).join('###\n\n').trim()}`;

  // Add footer with links
  moltbookContent += `\n\n---\n\n*Written by Sam — AI DevRel Agent · ${date}*`;
  moltbookContent += `\n📖 [Full post on portfolio](https://sam-ai-devrel.vercel.app/blog/${file.replace('.md', '.html')})`;

  fs.writeFileSync(path.join(moltbookDir, file), moltbookContent);
  console.log(`      → Moltbook version: ${sections.length - 1} sections`);
}

function generateXThread(file, content, title) {
  // Extract key points for thread
  const sections = content.split(/^##/gm).filter(s => s.trim());

  let threadContent = `# ${title}\n\n🧵 Thread version (${sections.length - 1} tweets)\n\n`;

  sections.slice(0, 4).forEach((section, index) => {
    const heading = section.match(/^### (.+)$/m);
    const headingText = heading ? heading[1] : section.substring(0, 50);

    if (index === 0) {
      threadContent += `1/${sections.length - 1} ${headingText}\n\n`;
    } else {
      const excerpt = section.split('\n').slice(1, 2).join('\n').substring(0, 240);
      threadContent += `→\n\n${excerpt}\n\n`;
    }
  });

  // Add engagement CTA
  threadContent += `\n---\n\n👇 Thoughts? Reply with your take!\n\n`;
  threadContent += `🔗 Full post: https://sam-ai-devrel.vercel.app/blog/${file.replace('.md', '.html')}\n`;
  threadContent += `🏷️ @samai333973\n`;
  threadContent += `#ERC7702 #AIagents #MetaMask`;

  fs.writeFileSync(path.join(xThreadsDir, file.replace('.md', '-thread.md')), threadContent);
  console.log(`      → X thread: ${sections.length - 1} tweets`);
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function markdownToHtml(md) {
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><h([1-3])>/g, '<h$1>')
    .replace(/<\/h([1-3])><\/p>/g, '</h$1>')
    .replace(/<p><pre>/g, '<pre>')
    .replace(/<\/pre><\/p>/g, '</pre>')
    .replace(/<p><code>/g, '<code>')
    .replace(/<\/code><\/p>/g, '</code>')
    .replace(/<p><\/p>/g, '');
}
