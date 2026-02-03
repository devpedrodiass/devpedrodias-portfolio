import { notFound } from "next/navigation";
import { findArticleBySlug, getAllArticles } from "@/shared/lib/articles";
import { ArticleHeader } from "@/modules/blog/components/article/components/article-header";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArticleContent } from "@/modules/blog/components/article/components/article-content";
import { ChevronLeftIcon } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await findArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await findArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ChevronLeftIcon className="w-4 h-4 -mb-0.5" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <ArticleHeader article={article} />

        {/* Article Content */}
        <div className="mt-12">
          <ArticleContent content={article.content} />
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Tags:</span>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
