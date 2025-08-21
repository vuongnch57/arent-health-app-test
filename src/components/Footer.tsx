import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark-500 px-6 py-14">
      <div className="container mx-auto">
        <nav className="flex flex-wrap items-center gap-8">
          <a
            href="#"
            className="text-white hover:text-primary-400 transition-colors text-sm"
          >
            会員登録
          </a>
          <a
            href="#"
            className="text-white hover:text-primary-400 transition-colors text-sm"
          >
            運営会社
          </a>
          <a
            href="#"
            className="text-white hover:text-primary-400 transition-colors text-sm"
          >
            利用規約
          </a>
          <a
            href="#"
            className="text-white hover:text-primary-400 transition-colors text-sm"
          >
            個人情報の取扱について
          </a>
          <a
            href="#"
            className="text-white hover:text-primary-400 transition-colors text-sm"
          >
            特定商取引法に基づく表記
          </a>
          <a
            href="#"
            className="text-white hover:text-primary-400 transition-colors text-sm"
          >
            お問い合わせ
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
