import { Link } from "@/i18n/routing";
import Carousel from "./carousel/team";
import { useLocale } from "next-intl";
import { buttonVariants } from "./ui/button";
import { useTranslations } from "next-intl";
import feruza from "/public/team/feruzamadalieva.jpg";
import nurbek from "/public/team/nurbekpulatov.jpg";
import shuhrat from "/public/team/shuhratazizov.jpg";
import fatima from "/public/team/fatimaabduvohobova.jpg";
import sherzod from "/public/team/sherzodamirov.jpg";
import furkat from "/public/team/furkatusmonov.jpg";
import alisher from "/public/team/alisherorziboev.jpg";
import nargiza from "/public/team/nargizakhudoynazarova.jpg";
import shahnoza from "/public/team/shahnozanabieva.jpg";
import saida from "/public/team/saidagozieva.jpg";
import dilshodm from "/public/team/dilshodmusaev.jpg";
import javohir from "/public/team/javohirshamsutdinov.jpg";
import dilshodt from "/public/team/dilshodtoshtemirov.jpg";
import dildora from "/public/team/dildoramirzaeva.jpg";
import dilshoda from "/public/team/akhmedovdilshod.jpg";

export default function Team() {
  const t = useTranslations("Team");
  const { locale } = useLocale();

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
        <h2 className="text-4xl font-bold mb-10">{t("TeamTitle")}</h2>
        <div className="mb-5">
          <Carousel slides={members} />
        </div>
        <div className="flex justify-end">
          <Link className={buttonVariants()} locale={locale} href="/team">
            Ko'proq
          </Link>
        </div>
      </div>
    </section>
  );
}
