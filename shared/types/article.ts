export interface ArticleMetadata {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  category: string;
  duration: string;
}

export interface Article extends ArticleMetadata {
  content: string;
}
