import { ArticleMetadata } from "@/shared/types/article";
import { ArticleCard } from "./article-card";
import { EmptyWarn } from "@/shared/components/empty-warn";
import { FileText } from "lucide-react";

interface ArticlesListProps {
  articles: ArticleMetadata[];
}

export function ArticlesList({ articles }: ArticlesListProps) {
  if (articles.length === 0) {
    return (
      <EmptyWarn
        icon={<FileText className="w-12 h-12" />}
        title="No articles found"
        description="There are no articles in this category yet. Check back soon for new content!"
      />
    );
  }

  return (
    <div className="divide-y divide-border">
      {articles.map((article) => (
        <ArticleCard
          key={`${article.category}-${article.slug}`}
          article={article}
        />
      ))}
    </div>
  );
}
