interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article
      className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold dark:prose-code:bg-accent dark:prose-pre:bg-accent prose-pre:border prose-pre:border-border "
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
