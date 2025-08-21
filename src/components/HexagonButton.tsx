"use client";

import Image from "next/image";
import React from "react";

interface HexagonButtonProps {
  icon: string;
  label: string;
}

const HexagonButton: React.FC<HexagonButtonProps> = ({ icon, label }) => {
  const handleClick = () => {
    console.log(`${label} clicked`);
  };
  console.log(icon);
  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={handleClick}
        className="relative w-20 h-20 bg-primary-500 hover:bg-primary-400 transition-colors duration-200 flex flex-col items-center justify-center group"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <Image src={icon} alt={label} width={32} height={32} className="mb-1" />
        <span className="text-white text-xl font-medium">{label}</span>
      </button>
    </div>
  );
};

export default HexagonButton;
