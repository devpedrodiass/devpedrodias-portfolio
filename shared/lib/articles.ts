import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { Article, ArticleMetadata } from "@/shared/types/article";

const articlesDirectory = path.join(process.cwd(), "shared/data/articles");

/**
 * Get all categories from the articles directory
 */
export function getCategories(): string[] {
  const categories = fs.readdirSync(articlesDirectory);
  return categories.filter((category) => {
    const categoryPath = path.join(articlesDirectory, category);
    return fs.statSync(categoryPath).isDirectory();
  });
}

/**
 * Get all article files from all categories
 */
function getAllArticleFiles(): { category: string; filename: string }[] {
  const categories = getCategories();
  const allArticles: { category: string; filename: string }[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(articlesDirectory, category);
    const files = fs.readdirSync(categoryPath);
    const mdFiles = files.filter((file) => file.endsWith(".md"));

    mdFiles.forEach((filename) => {
      allArticles.push({ category, filename });
    });
  });

  return allArticles;
}

/**
 * Get article metadata without content
 */
export function getArticleMetadata(
  category: string,
  filename: string,
): ArticleMetadata {
  const slug = filename.replace(/\.md$/, "");
  const filePath = path.join(articlesDirectory, category, filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    duration: data.duration,
    slug,
    category,
  };
}

/**
 * Get all articles metadata sorted by date (newest first)
 */
export function getAllArticles(): ArticleMetadata[] {
  const articleFiles = getAllArticleFiles();
  const articles = articleFiles.map(({ category, filename }) =>
    getArticleMetadata(category, filename),
  );

  // Sort by date, newest first
  return articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: string): ArticleMetadata[] {
  const allArticles = getAllArticles();
  return allArticles.filter((article) => article.category === category);
}

/**
 * Get articles by tag
 */
export function getArticlesByTag(tag: string): ArticleMetadata[] {
  const allArticles = getAllArticles();
  return allArticles.filter((article) => article.tags.includes(tag));
}

/**
 * Get a single article with full content (converted to HTML)
 */
export async function getArticle(
  category: string,
  slug: string,
): Promise<Article | null> {
  try {
    const filePath = path.join(articlesDirectory, category, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Convert markdown to HTML with syntax highlighting
    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypePrettyCode, {
        theme: "vesper",
        keepBackground: false,
        filterMetaString: (string) => string.replace(/filename="[^"]*"/, ''),
      })
      .use(rehypeStringify, { allowDangerousHtml: true })
      .process(content);

    const htmlContent = String(processedContent);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      duration: data.duration,
      slug,
      category,
      content: htmlContent,
    };
  } catch (error) {
    return null;
  }
}

/**
 * Get all unique tags from all articles
 */
export function getAllTags(): string[] {
  const allArticles = getAllArticles();
  const tags = allArticles.flatMap((article) => article.tags);
  return Array.from(new Set(tags)).sort();
}

/**
 * Find article by slug across all categories
 */
export async function findArticleBySlug(slug: string): Promise<Article | null> {
  const categories = getCategories();

  for (const category of categories) {
    const article = await getArticle(category, slug);
    if (article) {
      return article;
    }
  }

  return null;
}
