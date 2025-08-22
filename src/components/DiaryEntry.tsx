'use client';

import React from "react";
import Link from "next/link";

interface DiaryEntryProps {
  date: string;
  time: string;
  label: string;
  content: string;
  href: string;
}

const DiaryEntry: React.FC<DiaryEntryProps> = ({
  date,
  time,
  label,
  content,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <div className="border-2 border-gray-border p-4 h-[231px] flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
        <div className="mb-3">
          <div className="text-lg-compact text-dark-600 mb-1">
            {date}
          </div>
          <div className="text-lg-compact text-dark-600">
            {time}
          </div>
        </div>
        <h3 className="text-base-tight text-dark-500 mb-2">
          {label}
        </h3>
        <p className="text-xs leading-[17px] text-dark-600 flex-1 overflow-hidden">
          {content}
        </p>
      </div>
    </Link>
  );
};

export default DiaryEntry;
