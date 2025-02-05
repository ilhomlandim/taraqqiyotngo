import Link from "next/link";
import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Menubar from "./MenuBtn";

const links = [
  {
    text: "Main",
    path: "/",
  },
  {
    text: "Projects",
    path: "/projects",
  },
  {
    text: "Team",
    path: "/team",
  },
];

export function Desktop() {
  const t = useTranslations("header");
  const { locale } = useParams();

  return (
    <nav className="hidden xl:block">
      <ul className="flex">
        {links.map(({ text, path }, index) => {
          return (
            <li key={index}>
              <Button variant="ghost" asChild>
                <Link href={`/${locale}/${path}`}>{t(text)}</Link>
              </Button>
            </li>
          );
        })}

        <Menubar />

        {/* <div className="relative">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer gap-2 text-gray-950 dark:text-white px-4 py-2 rounded-lg flex"
            variant="ghost"
          >
            Menu
            <ChevronDown />
          </label>
          <ul className="absolute left-0 mt-2 hidden peer-checked:flex flex-col bg-slate-300 dark:bg-gray-950 px-6 py-2 text-center rounded-lg shadow-lg">
            {[
              "Partners",
              "Team",
              "Gallery",
              "Service",
              "Statistic",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="py-1">
                <Link
                  href={"/"}
                  className="block text-white w-full mx-1 hover:bg-gray-400"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </ul>
    </nav>
  );
}

export function Mobile({ open, theme, handleTheme }) {
  const { locale } = useParams();
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
                    <Link href={`/${locale}/${path}`}>{text}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="base-container flex gap-3 justify-center">
          <LanguageChanger />
          <Button onClick={handleTheme} variant="outline">
            {theme === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </div>
      </div>
    )
  );
}
