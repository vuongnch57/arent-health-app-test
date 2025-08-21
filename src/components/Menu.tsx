import React from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "自分の記録", href: "/my-record" },
  { label: "体重グラフ", href: "#" },
  { label: "目標", href: "#" },
  { label: "選択中のコース", href: "#" },
  { label: "コラム一覧", href: "/columns" },
  { label: "設定", href: "#" },
];

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="absolute top-[51px] right-0 z-50 w-[280px] bg-gray-400 backdrop-blur-sm shadow-lg">
      <div className="flex flex-col">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-white text-lg leading-[26px] py-6 px-10 border-b border-b-dark-600/25 border-t border-t-white/15 cursor-pointer hover:bg-gray-500/60 transition-colors block"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
