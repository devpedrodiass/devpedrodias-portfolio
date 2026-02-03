"use client";

import { useState, useMemo } from "react";
import { ArticleMetadata } from "@/shared/types/article";
import { ArticlesList } from "./articles-list";
import { Badge } from "@/components/ui/badge";

interface BlogContentProps {
  articles: ArticleMetadata[];
  categories: string[];
}

export function BlogContent({ articles, categories }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = useMemo(() => {
    if (!selectedCategory) {
      return articles;
    }
    return articles.filter((article) => article.category === selectedCategory);
  }, [articles, selectedCategory]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <>
      {/* Header */}
      <div className="mb-12 text-center border-b border-dashed pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Sharing knowledge about web development, React, Next.js, and more
        </p>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-2 justify-center items-center">
          <span className="text-sm text-muted-foreground">Filter by:</span>
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="capitalize cursor-pointer transition-colors"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className="capitalize cursor-pointer  transition-colors"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      )}

      {/* Articles Grid */}
      <ArticlesList articles={filteredArticles} />

      {/* Stats */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          {selectedCategory
            ? `${filteredArticles.length} ${selectedCategory} articles`
            : `${articles.length} articles published`}
        </p>
      </div>
    </>
  );
}
