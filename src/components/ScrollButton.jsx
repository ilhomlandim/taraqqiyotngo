"use client";
import { ArrowUpCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";
function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.screenY);

      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40  right-8  text-black  z-50 p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          <ArrowUpCircleIcon width={20} height={20} />
        </button>
      )}
    </>
  );
}
export default ScrollToTopButton;
