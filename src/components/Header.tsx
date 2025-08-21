"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Menu = dynamic(() => import("./Menu"), { ssr: false });

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (menuOpen && !target.closest('.menu-container')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="bg-dark-500 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={144} height={64} />
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-8">
            {/* My Records */}
            <div className="flex items-center space-x-2 text-white hover:text-primary-400 cursor-pointer transition-colors">
              <Image
                src="/images/icon_memo.png"
                alt="My Records"
                width={32}
                height={32}
              />
              <span className="text-base">自分の記録</span>
            </div>

            {/* Challenge */}
            <div className="flex items-center space-x-2 text-white hover:text-primary-400 cursor-pointer transition-colors">
              <Image
                src="/images/icon_challenge.png"
                alt="Challenge"
                width={32}
                height={32}
              />
              <span className="text-base">チャレンジ</span>
            </div>

            {/* Notifications */}
            <div className="flex items-center space-x-2 text-white hover:text-primary-400 cursor-pointer transition-colors relative">
              <div className="relative">
                <Image
                  src="/images/icon_info.png"
                  alt="Notifications"
                  width={32}
                  height={32}
                />
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  1
                </span>
              </div>
              <span className="text-base">お知らせ</span>
            </div>
            <div className="relative menu-container">
              <button
                className="text-primary-300 hover:text-primary-400 transition-colors cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                <Image
                  src={menuOpen ? "/images/icon_close.png" : "/images/icon_menu.png"}
                  alt={menuOpen ? "Close" : "Menu"}
                  width={32}
                  height={32}
                />
              </button>
              <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
