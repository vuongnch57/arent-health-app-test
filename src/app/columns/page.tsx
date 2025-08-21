import React from "react";
import Image from "next/image";
import ViewMoreButton from "@/components/ViewMoreButton";

const RECOMMENDED_CATEGORIES = [
  {
    title: "RECOMMENDED COLUMN",
    subtitle: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    subtitle: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    subtitle: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    subtitle: "健康",
  },
];

const COLUMN_ARTICLES = [
  {
    id: 1,
    image: "/images/column-1.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 2,
    image: "/images/column-2.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 3,
    image: "/images/column-3.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 4,
    image: "/images/column-4.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 5,
    image: "/images/column-5.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 6,
    image: "/images/column-6.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 7,
    image: "/images/column-7.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    id: 8,
    image: "/images/column-8.jpg",
    date: "2021.05.17",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット...",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
];

const ColumnsPage = () => {
  return (
    <div className="container page bg-white">
      {/* Recommended Categories */}
      <div className="grid grid-cols-4 gap-5 mb-16">
        {RECOMMENDED_CATEGORIES.map((category, index) => (
          <div
            key={index}
            className={`bg-dark-600 py-6 flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div className="text-[22px] leading-[27px] text-primary-300 tracking-wider text-center px-4">
              {category.title}
            </div>
            <div className="bg-white h-[1px] w-14 my-2" />
            <div className="text-lg font-light">{category.subtitle}</div>
          </div>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-4 gap-y-6 gap-x-4 mb-12">
        {COLUMN_ARTICLES.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <div className="relative mb-3 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-primary-300 text-white px-3 py-1 text-sm">
                {article.date} {article.time}
              </div>
            </div>
            <h3
              className="text-dark-500 text-sm leading-relaxed mb-2 overflow-hidden"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {article.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="text-primary-400 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
