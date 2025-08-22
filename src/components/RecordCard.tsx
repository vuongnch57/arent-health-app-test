'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RecordCardProps {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
}

const RecordCard: React.FC<RecordCardProps> = ({
  image,
  alt,
  title,
  subtitle,
  href,
}) => {
  return (
    <Link href={href} className="block">
      <div className="relative group cursor-pointer border-[24px] border-primary-300">
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
          />
          <div className="bg-dark-600/85 absolute top-0 left-0 right-0 bottom-0" />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h3 className="text-primary-400 text-3xl-tight font-light mb-2 tracking-[2.5px]">
              {title}
            </h3>
            <div className="bg-primary-400 text-white px-4 py-2 text-base-tight font-light">
              {subtitle}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecordCard;
