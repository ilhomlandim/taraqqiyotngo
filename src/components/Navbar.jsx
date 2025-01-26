import Link from "next/link";
import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";

const links = [
  {
    text: "Main",
    path: "/",
  },
  {
    text: "News",
    path: "/news",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Services",
    path: "/services",
  },
  {
    text: "About us",
    path: "/about",
  },
  {
    text: "History",
    path: "/history",
  },
  {
    text: "Team",
    path: "/team",
  },
  {
    text: "Work environment",
    path: "/job",
  },
  {
    text: "Contact us",
    path: "/contact",
  },
];

export function Desktop() {
  const t = useTranslations("header");
  return (
    <nav className="hidden xl:block">
      <ul className="flex">
        {links.map(({ text, path }, index) => {
          return (
            <li key={index}>
              <Button variant="ghost" asChild>
                <Link href={path}>{t(text)}</Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Mobile({ open, theme, handleTheme }) {
  return (
    open && (
      <div className="absolute top-[95px] md:top-[112px] left-0 right-0 bg-primary-foreground p-5 border xl:hidden">
        <nav className="base-container">
          <ul className="grid grid-cols-2 mb-5">
            {links.map(({ text, path }, index) => {
              return (
                <li className="w-full" key={index}>
                  <Button
                    className="w-full justify-start"
                    variant="ghost"
                    asChild
                  >
                    <Link href={path}>{text}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="base-container flex gap-3">
          <LanguageChanger />
          <Button onClick={handleTheme} variant="outline">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    )
  );
}
