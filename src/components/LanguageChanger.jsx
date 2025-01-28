"use client";
import { Button, buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useParams } from "next/navigation";

export default function LanguageChanger() {
  const { locale } = useParams();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const languages = {
    uz: {
      locale: "uz",
      text: "O'zbek",
    },
    en: {
      locale: "en",
      text: "English",
    },
    ru: {
      locale: "ru",
      text: "Русский",
    },
  };

  const [currentLanguage, setCurrentLanguage] = useState(languages.en);

  useEffect(() => {
    setOpen(false);
    setCurrentLanguage(languages[locale]);
  }, [locale]);

  return (
    <div className="relative w-[150px]">
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full"
        variant="outline"
      >
        {currentLanguage.text} {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      {open && (
        <ul className="w-full absolute z-50">
          {Object.values(languages).map(({ locale, text }, index) => {
            return (
              currentLanguage.locale !== locale && (
                <li key={index}>
                  <Link
                    className={`${buttonVariants({
                      variant: "outline",
                    })} w-full`}
                    href={pathname}
                    locale={locale}
                  >
                    {text}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      )}
    </div>
  );
}
