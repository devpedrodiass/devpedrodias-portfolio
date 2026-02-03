import { ArticleMetadata } from "@/shared/types/article";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, DotIcon } from "lucide-react";

interface ArticleHeaderProps {
  article: ArticleMetadata;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="space-y-4">
      <Badge variant="secondary" className="capitalize">
        {article.category}
      </Badge>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        {article.title}
      </h1>

      <p className="text-xl text-muted-foreground">{article.description}</p>

      <div className="flex items-center gap-1 text-sm text-muted-foreground pt-2">
        <div className="flex items-center gap-2">
          <time>{formattedDate}</time>
        </div>
        <DotIcon />
        <div className="flex items-center gap-2">
          <span>{article.duration} read</span>
        </div>
      </div>
    </header>
  );
}
