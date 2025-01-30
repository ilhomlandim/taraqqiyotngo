import { Bolt, Puzzle, Ribbon, ScanSearch } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from "next-intl";
import Framer from "./Framer";

export default function OurServices() {
  const t = useTranslations("Services");
  const services = [
    {
      title: t("box1"),
      description: t("box1Desc"),
      icon: <Bolt className="mb-3" />,
    },
    {
      title: t("box2"),
      description: t("box2Desc"),
      icon: <ScanSearch className="mb-3" />,
    },
    {
      title: t("box3"),
      description: t("box3Desc"),
      icon: <Puzzle className="mb-3" />,
    },
    {
      title: t("box4"),
      description: t("box4Desc"),
      icon: <Ribbon className="mb-3" />,
    },
  ];
  return (
    <section className="py-14">
      <div className="base-container">
        <h2 className="text-3xl font-bold mb-10 md:text-4xl">
          {t("pageService")}
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map(({ title, description, icon }, index) => {
            return (
              <li key={index}>
                <Framer duration="1" delay={index / 10}>
                  <Card className="min-h-[250px] hover:bg-primary-foreground">
                    <CardHeader>
                      {icon}
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Framer>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
