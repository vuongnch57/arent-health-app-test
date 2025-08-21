"use client";

import React from "react";

interface ViewMoreButtonProps {
  children: React.ReactNode;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ children }) => {
  const handleClick = () => {
    console.log("View more clicked");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-gradient-to-r from-[#FFCC21] to-[#FF963C] text-white text-lg leading-[26px] py-3 px-14 rounded-md font-medium transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF963C] cursor-pointer"
    >
      {children}
    </button>
  );
};

export default ViewMoreButton;
