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
import LogoImg from "/public/logo.png";
import { useRouter } from "next/router";
import { Link } from "@/i18n/routing";
import LanguageChanger from "./LanguageChanger";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme(theme) {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.removeItem("theme");
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

  function changeLanguage(locale) {
    const router = useRouter();

    router.push(router.pathname, router.asPath, { locale });
  }

  useEffect(() => {
    toggleTheme(theme);
  }, []);

  return (
    <header className="py-5 sticky top-0 left-0 right-0 w-full shadow-sm z-50 bg-primary-foreground">
      <div className="base-container flex justify-between items-center">
        <Link className="font-bold text-2xl" href="/">
          <img
            className="object-contain w-[150px] md:w-[200px]"
            width={200}
            src={LogoImg.src}
          />
        </Link>

        <Desktop />
        <Mobile open={open} theme={theme} handleTheme={handleTheme} />
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
