# Articles Directory

This directory contains all blog articles organized by category.

## Structure

```
articles/
├── react/
│   └── what-is-react.md
├── me/
│   └── who-is-pedro-dias.md
├── backend/
│   └── your-article.md
└── [category-name]/
    └── article-slug.md
```

## Adding a New Article

1. **Choose or create a category folder**
   - Use existing categories: `react`, `me`, etc.
   - Or create a new folder for a new category

2. **Create a markdown file**
   - Use kebab-case for the filename: `my-awesome-article.md`
   - The filename (without `.md`) becomes the URL slug

3. **Add frontmatter**
   ```markdown
   ---
   title: "Your Article Title"
   description: "A brief description for SEO and preview cards"
   date: "2026-02-03"
   tags: ["react", "javascript", "tutorial"]
   duration: "5 min"
   ---

   # Your Article Content

   Write your content here using markdown...
   ```

4. **Write your content**
   - Use standard markdown syntax
   - Code blocks are automatically syntax highlighted
   - Images can be added using markdown image syntax

## Markdown Features Supported

- Headers (h1-h6)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Links
- Blockquotes
- Bold and italic text
- Tables (via GitHub Flavored Markdown)

## Example Code Block

\`\`\`tsx
export function MyComponent() {
  return <div>Hello World</div>;
}
\`\`\`

## Tips

- Use descriptive slugs for better SEO
- Keep descriptions concise (2-3 sentences)
- Use relevant tags for better categorization
- Add code examples to make articles more engaging
- Dates should be in YYYY-MM-DD format
