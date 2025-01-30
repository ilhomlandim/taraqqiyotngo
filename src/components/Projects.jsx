// import { useTranslations } from "next-intl";
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

export default function Projects() {
  // const t = useTranslations("header");

  const data = [
    {
      title: "title",
      description: "description",
      id: 1,
    },
    {
      title: "title",
      description: "description",
      id: 2,
    },
    {
      title: "title",
      description: "description",
      id: 3,
    },
  ];

  return (
    <section className="py-14 md:py-20">
      <div className="base-container">
        <h1 className="text-4xl font-bold mb-10 text-center md:text-5xl xl:text-6xl">
          Tez orada ..
        </h1>
        <div className="w-full">
          <div className="w-2/3">
            <ul className="flex flex-col gap-5">
              {data.map(({ title, description }, index) => {
                return (
                  <li key={index}>
                    <Card>
                      <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
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
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </section>
  );
}
