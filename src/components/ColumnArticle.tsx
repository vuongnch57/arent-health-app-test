"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ColumnArticleProps {
  image: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
  href: string;
}

const ColumnArticle: React.FC<ColumnArticleProps> = ({
  image,
  date,
  time,
  title,
  tags,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <div className="group cursor-pointer">
        <div className="relative mb-3 overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 bg-primary-300 text-white px-3 py-1 text-sm">
            {date} {time}
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
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="text-primary-400 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ColumnArticle;
