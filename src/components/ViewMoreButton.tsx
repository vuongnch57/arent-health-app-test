'use client';

import React from 'react';

interface ViewMoreButtonProps {
  children: React.ReactNode;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ children }) => {
  const handleClick = () => {
    console.log('View more clicked');
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-primary-500 hover:bg-primary-400 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200"
    >
      {children}
    </button>
  );
};

export default ViewMoreButton;
