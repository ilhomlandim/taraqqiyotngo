"use client";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 480) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

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
        <Button
          onClick={scrollToTop}
          className="fixed bottom-10  right-10 shadow-md"
          size="icon"
        >
          <ArrowUp />
        </Button>
      )}
    </>
  );
}
export default ScrollToTopButton;
