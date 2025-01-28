import Link from "next/link";
import { Button } from "./ui/button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import LanguageChanger from "./LanguageChanger";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const links = [
  {
    text: "Main",
    path: "/",
  },
  // {
  //   text: "News",
  //   path: "/news",
  // },
  // {
  //   text: "Projects",
  //   path: "/projects",
  // },
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
      </ul>
    </nav>
  );
}

export function Mobile({ open, theme, handleTheme }) {
  const { localePrefix } = routing;
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
                    <Link href={`/${pathaname}/${path}`}>{text}</Link>
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
