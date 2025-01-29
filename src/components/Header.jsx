"use client";
import { Desktop, Mobile } from "./Navbar";
import { Button } from "./ui/button";
import {
  Cross2Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import LanguageChanger from "./LanguageChanger";
import Logo from "./Logo";
import PartLinker from "./PartLinker";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(null);

  function toggleTheme(theme) {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      setTheme("dark");
      localStorage?.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage?.removeItem("theme");
      setTheme("light");
    }
  }

  function handleTheme() {
    if (theme === "dark") {
      toggleTheme("light");
    } else {
      toggleTheme("dark");
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      toggleTheme(theme);
    }
  }, []);

  return (
    <header className="py-5 fixed top-0 left-0 right-0 w-full shadow-sm z-50 bg-primary-foreground">
      <div className="base-container flex justify-between items-center">
        <Logo />
        <Desktop />
        <Mobile open={open} theme={theme} handleTheme={handleTheme} />
        <PartLinker />
        <Button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          size="icon"
          className="xl:hidden"
        >
          {open ? <Cross2Icon /> : <HamburgerMenuIcon />}
        </Button>

        <div className="hidden xl:flex gap-3">
          {/* Language changer  */}
          <LanguageChanger />
          <Button onClick={handleTheme} variant="outline" size="icon">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    </header>
  );
}
