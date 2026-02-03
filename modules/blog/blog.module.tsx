import { getAllArticles, getCategories } from "@/shared/lib/articles";
import { BlogContent } from "./components/blog-content";

export const BlogModulePage = () => {
  const articles = getAllArticles();
  const categories = getCategories();

  return (
    <section id="blog" className="min-h-screen pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <BlogContent articles={articles} categories={categories} />
      </div>
    </section>
  );
};
