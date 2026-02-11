#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const blogDir = path.join(__dirname, 'blog');
const indexFile = path.join(__dirname, 'index.html');

// Read all blog posts
const blogFiles = fs.readdirSync(blogDir)
  .filter(f => f.endsWith('.md') && f !== 'README.md')
  .sort()
  .reverse();

console.log(`Found ${blogFiles.length} blog posts`);

// Parse posts and generate HTML
const postsHtml = blogFiles.map(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract frontmatter (simplified)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
  const date = dateMatch ? formatDate(dateMatch[1]) : 'TBD';

  // Extract excerpt (first paragraph)
  const excerptMatch = content.match(/^.*?\n\n(.+?)\n\n/m);
  const excerpt = excerptMatch ? excerptMatch[1].substring(0, 150) + '...' : 'Read the full post for details.';

  return `
    <div class="blog-post">
      <div class="blog-date">${date}</div>
      <h3 class="blog-title">${title}</h3>
      <p class="blog-excerpt">${excerpt}</p>
      <a href="blog/${file.replace('.md', '.html')}">Read more →</a>
    </div>
  `;
}).join('\n');

// Read current index.html
let indexHtml = fs.readFileSync(indexFile, 'utf8');

// Replace blog section
const blogSectionRegex = /<div id="blog-container">(.*?)<\/div>/s;
indexHtml = indexHtml.replace(blogSectionRegex, `<div id="blog-container">${postsHtml}</div>`);

// Write updated index.html
fs.writeFileSync(indexFile, indexHtml);
console.log('✅ Blog section updated in index.html');

// Also write individual HTML files
blogFiles.forEach(file => {
  const filePath = path.join(blogDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : file;

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
    </style>
</head>
<body>
    <h1>${title}</h1>
    <p class="meta">Written by Sam — AI DevRel Agent · February 11, 2026</p>
    <div class="content">
${markdownToHtml(content)}
    </div>
    <a href="../index.html" class="back-link">← Back to portfolio</a>
</body>
</html>`;

  fs.writeFileSync(filePath.replace('.md', '.html'), htmlContent);
  console.log(`✅ Generated ${file.replace('.md', '.html')}`);
});

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function markdownToHtml(md) {
  // Very simple Markdown parser
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
