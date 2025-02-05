"use client";
import { Button, buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";

export default function Menubar() {
  const [open, setOpen] = useState(false);

  const p = useTranslations("Partners");
  const t = useTranslations("Team");
  const g = useTranslations("OurGallery");
  const s = useTranslations("Services");
  const st = useTranslations("Statistics");
  const c = useTranslations("callFooter");
  const m = useTranslations("ProjectDetails");

  const menu = [
    { to: "#partners", text: p("title") },
    { to: "#indexTeam", text: t("TeamTitle") },
    { to: "#gallery", text: g("title") },
    { to: "#ourService", text: s("pageService") },
    { to: "#statistics", text: st("title") },
    { to: "#contact", text: c("Contact") },
  ];

  useEffect(() => {
    setOpen(!open);
  }, []);

  return (
    <div className="relative w-[150px]">
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        variant="ghost"
      >
        {m("menu")} {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      {open && (
        <ul className="absolute z-50">
          {menu.map((menu) => {
            return (
              <li key={menu.text}>
                <Link
                  onClick={() => setOpen(false)}
                  className={`${buttonVariants({
                    variant: "outline",
                  })} w-full`}
                  href={menu.to}
                >
                  {menu.text}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
