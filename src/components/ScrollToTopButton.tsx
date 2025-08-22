"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 left-1/2 z-50 w-full max-w-[1100px] -translate-x-1/2">
          <div className="flex justify-end">
            <button
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2"
              aria-label="Scroll to top"
            >
              <Image
                src="/images/component_scroll.png"
                alt="Scroll to top"
                width={48}
                height={48}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
