import React from "react";

const MENU_ITEMS = [
  { label: "自分の記録" },
  { label: "体重グラフ" },
  { label: "目標" },
  { label: "選択中のコース" },
  { label: "コラム一覧" },
  { label: "設定" },
];

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ open }) => {
  if (!open) return null;
  return (
    <div className="absolute top-[51px] right-0 z-50 w-[280px] bg-gray-400 backdrop-blur-sm shadow-lg">
      <div className="flex flex-col">
        {MENU_ITEMS.map((item) => (
          <div
            key={item.label}
            className="text-white text-lg leading-[26px] py-6 px-10 border-b border-b-dark-600/25 border-t border-t-white/15 cursor-pointer hover:bg-gray-500/60 transition-colors"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
