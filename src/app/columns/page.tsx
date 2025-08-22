import React from "react";
import ViewMoreButton from "@/components/ViewMoreButton";
import RecommendedCategory from "@/components/RecommendedCategory";
import ColumnArticle from "@/components/ColumnArticle";
import { COLUMN_ARTICLES, RECOMMENDED_CATEGORIES } from "@/data/columnData";

const ColumnsPage = () => {
  return (
    <div className="container page bg-white">
      {/* Recommended Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
        {RECOMMENDED_CATEGORIES.map((category, index) => (
          <RecommendedCategory
            key={index}
            title={category.title}
            subtitle={category.subtitle}
            href={category.href}
          />
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 mb-12">
        {COLUMN_ARTICLES.map((article) => (
          <ColumnArticle
            key={article.id}
            image={article.image}
            date={article.date}
            time={article.time}
            title={article.title}
            tags={article.tags}
            href={article.href}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <ViewMoreButton>記録をもっと見る</ViewMoreButton>
      </div>
    </div>
  );
};

export default ColumnsPage;
