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
    <div className="flex flex-col items-center space-y-2 m-0">
      <button
        onClick={handleClick}
        className="hexagon-button w-[136px] h-[136px] [clip-path:polygon(25%_6.7%,75%_6.7%,100%_50%,75%_93.3%,25%_93.3%,0%_50%)] bg-gradient-to-r from-[#FFCC21] to-[#FF963C] flex flex-col items-center justify-center border-0 cursor-pointer focus:outline-none"
      >
        <Image src={icon} alt={label} width={56} height={56} className="max-h-14" />
        <span className="text-center text-xl font-medium mt-1">{label}</span>
      </button>
    </div>
  );
};

export default HexagonButton;
