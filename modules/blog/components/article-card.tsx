import Link from "next/link";
import { ArticleMetadata } from "@/shared/types/article";
import { Badge } from "@/components/ui/badge";

interface ArticleCardProps {
  article: ArticleMetadata;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block py-6 border-b border-dashed hover:border-primary/50 transition-colors"
    >
      <article className="flex flex-col gap-4">
        {/* Date and Category */}
        <div className="flex items-center gap-4 text-sm">
          <time className="text-muted-foreground">{formattedDate}</time>
          <Badge variant="secondary" className="uppercase">
            {article.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold leading-tight group-hover:text-primary transition-colors">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {article.description}
        </p>

        {/* Duration */}
        <p className="text-muted-foreground text-sm">{article.duration} read</p>
      </article>
    </Link>
  );
}
