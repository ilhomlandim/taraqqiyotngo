"use client";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "@/i18n/routing";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

export default function LanguageChanger() {
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    locale: "en",
    text: "English",
  });
  const [languages, setLanguages] = useState({
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
  });

  function handleClick(locale) {
    setOpen(false);
    setLanguages((prev) => {
      return prev[locale];
    });
    setCurrentLanguage(prev[locale]);
  }

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
                  <Button
                    onClick={() => handleClick(locale)}
                    className="w-full"
                    asChild
                    variant="outline"
                  >
                    <Link href="/" locale={locale}>
                      {text}
                    </Link>
                  </Button>
                </li>
              )
            );
          })}
        </ul>
      )}
    </div>
  );
}
