import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { getProjects } from "@/request";
import Framer from "./Framer";

export default async function Projects() {
  const t = await getTranslations("header");
  const projects = await getProjects();
  const locale = await getLocale();

  return (
    <section className="py-14 md:py-20 min-h-screen">
      <div className="base-container">
        <h1 className="text-4xl font-bold mb-10 md:text-5xl xl:text-6xl">
          {t("Projects")}
        </h1>
        <div className="w-full flex gap-10 h-full">
          <div className="w-2/3">
            <ul className="flex flex-col gap-5">
              {projects
                .sort((a, b) => {
                  const [dayA, monthA, yearA] = a.year.split(".");
                  const [dayB, monthB, yearB] = b.year.split(".");

                  // Yil, oy va kun bo'yicha solishtirish
                  if (yearA !== yearB) return yearA - yearB; // Yil bo'yicha tartiblash
                  if (monthA !== monthB) return monthA - monthB; // Oy bo'yicha tartiblash
                  return dayB - dayA; // Kun bo'yicha tartiblash
                })
                .map(({ title, description }, index) => {
                  return (
                    <li key={index}>
                      <Framer
                        delay={index / 10}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        duration="1"
                      >
                        <Card className="hover:bg-primary-foreground">
                          <CardHeader>
                            <CardTitle>{title[locale]}</CardTitle>
                            <CardDescription className="line-clamp-3">
                              {description[locale]}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button
                              className="px-0 justify-start"
                              asChild
                              variant="link"
                            >
                              <Link href={"/"}>
                                Batafsil <ExternalLink />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </Framer>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="w-1/3">
            <ul className="grid grid-cols-3 gap-5 sticky top-28 md:top-32 z-40">
              {projects
                .sort((a, b) => {
                  const [dayA, monthA, yearA] = a.year.split(".");
                  const [dayB, monthB, yearB] = b.year.split(".");

                  // Yil, oy va kun bo'yicha solishtirish
                  if (yearA !== yearB) return yearA - yearB; // Yil bo'yicha tartiblash
                  if (monthA !== monthB) return monthA - monthB; // Oy bo'yicha tartiblash
                  return dayB - dayA; // Kun bo'yicha tartiblash
                })
                .map(({ year }, index) => {
                  return (
                    <li key={index}>
                      <Button>{year.split(".")[2]}</Button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
