import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Framer from "./Framer";
import { getLocale, getTranslations } from "next-intl/server";
import { getProjects } from "@/request";
import { sortByYear, takeYears } from "@/lib/utils";

export default async function Projects() {
  const t = await getTranslations("header");
  const projects = await getProjects();
  const locale = await getLocale();

  const sortedProjects = sortByYear(projects, "inc");
  const sortedYears = takeYears(sortedProjects);
  const tempYears = [];

  return (
    <section className="py-14 md:py-20 min-h-screen">
      <div className="base-container">
        <h1 className="text-4xl font-bold mb-10 md:text-5xl xl:text-6xl">
          {t("Projects")}
        </h1>
        <div className="w-full flex justify-between h-full">
          <div className="w-full md:w-[70%]">
            <div className="flex flex-col gap-5">
              {sortedProjects.map(
                ({ title, description, year }, index, own) => {
                  const current = year?.split(".")[2];
                  const prev = own[index - 1]?.year?.split(".")[2];
                  const display = current === prev ? null : current;

                  return (
                    <>
                      {display && (
                        <span
                          id={display}
                          className={`${buttonVariants({
                            variant: "secondary",
                          })} sticky top-28 md:top-32 z-40 text-xs !font-bold w-min rounded-full min-w-[80px] md:-translate-x-2/4`}
                        >
                          {display}
                        </span>
                      )}
                      <div key={index}>
                        {tempYears.includes(current) === true && "salom"}
                        <Framer
                          delay={index / 10}
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          duration="1"
                        >
                          <Card className="hover:bg-primary-foreground">
                            <CardHeader>
                              <CardTitle className="line-clamp-3 md:line-clamp-4 xl:line-clamp-5">
                                {title[locale]}
                              </CardTitle>
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
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
          <div className="w-[25%] hidden md:block">
            <ul className="grid lg:grid-cols-3 gap-3 sticky top-28 md:top-32 z-40">
              {sortedYears.map((year, index) => {
                return (
                  <li key={index}>
                    <Button className="text-xs font-bold w-full" asChild>
                      <a href={`#${year}`}>{year}</a>
                    </Button>
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
