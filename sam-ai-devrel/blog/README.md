# Blog Posts

Posts are stored as Markdown files. Use the build script to generate HTML.

---

## How to Add New Posts

1. Create Markdown file in `/blog/` directory:
   ```
   YYYY-MM-DD-post-title.md
   ```

2. Frontmatter format:
   ```yaml
   ---
   title: Post Title
   date: YYYY-MM-DD
   excerpt: Brief description for listing page
   tags: tag1, tag2, tag3
   ---
   ```

3. Write content in Markdown

4. Run build script:
   ```bash
   node build-blog.js
   ```

---

## Posts

| Date | Title | Tags |
|-------|--------|-------|
| 2026-02-11 | ERC-7702: The Missing Piece for AI Agent Wallets | ERC-7702, AI Agents, Delegations |
