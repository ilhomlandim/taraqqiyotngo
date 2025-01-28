import { useTranslations } from "next-intl";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export default function Team() {
  const t = useTranslations("Team");

  const members = [
    {
      title: t("Feruza"),
      description: t("FeruzaWork"),
      img: "feruzamadalieva",
    },
    {
      title: t("Nurbek"),
      description: t("NurbekWork"),
      img: "nurbekpulatov",
    },
    {
      title: t("Shuhrat"),
      description: t("ShuhratWork"),
      img: "shuhratazizov",
    },
    {
      title: t("Fatima"),
      description: t("FatimaWork"),
      img: "fatimaabduvohobova",
    },
    {
      title: t("Dilshod"),
      description: t("DilshodWork"),
      img: "dilshodmusaev",
    },
    {
      title: t("Sherzod"),
      description: t("SherzodWork"),
      img: "sherzodamirov",
    },
    {
      title: t("Furqat"),
      description: t("FurqatWork"),
      img: "furkatusmonov",
    },
    {
      title: t("Alisher"),
      description: t("AlisherWork"),
      img: "alisherorziboev",
    },
    {
      title: t("Nargiza"),
      description: t("NargizaWork"),
      img: "nargizakhudoynazarova",
    },
    {
      title: t("Shahnoza"),
      description: t("ShahnozaWork"),
      img: "shahnozanabieva",
    },
    {
      title: t("Saida"),
      description: t("SaidaWork"),
      img: "saidagozieva",
    },
    {
      title: t("Javohir"),
      description: t("JavohirWork"),
      img: "javohirshamsutdinov",
    },
    {
      title: t("DilshodT"),
      description: t("DilshodTWork"),
      img: "dilshodtoshtemirov",
    },
    {
      title: t("Dildora"),
      description: t("DildoraWork"),
      img: "dildoramirzaeva",
    },
    {
      title: t("DilshodA"),
      description: t("DilshodAWork"),
      img: "akhmedovdilshod",
    },
  ];

  return (
    <section className="py-14">
      <div className="base-container">
        <h1 className="text-6xl font-bold mb-10">{t("TeamTitle")}</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {members.map(({ description, img, title }, index) => {
            return (
              <li key={index}>
                <Card className="hover:bg-primary-foreground transition">
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="!line-clamp-1">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="p-0">
                    <Image
                      className="w-full object-cover h-[500px]"
                      width={300}
                      height={300}
                      src={`/team/${img}.jpg`}
                      alt={img}
                    />
                  </CardFooter>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
