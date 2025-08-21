import Image from "next/image";
import React from "react";

const Header = () => {
  return (
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
          <button className="text-primary-300 hover:text-primary-400 transition-colors">
            <Image
              src="/images/icon_menu.png"
              alt="Menu"
              width={32}
              height={32}
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
