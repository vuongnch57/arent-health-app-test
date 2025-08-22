'use client';

import React from "react";
import Link from "next/link";

interface RecommendedCategoryProps {
  title: string;
  subtitle: string;
  href: string;
}

const RecommendedCategory: React.FC<RecommendedCategoryProps> = ({
  title,
  subtitle,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <div className="bg-dark-600 h-full py-6 flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity">
        <div className="text-2xl-tight text-primary-300 tracking-wider text-center px-4">
          {title}
        </div>
        <div className="bg-white h-[1px] w-14 my-2" />
        <div className="text-lg font-light">{subtitle}</div>
      </div>
    </Link>
  );
};

export default RecommendedCategory;
