import { Link } from "@/i18n/routing";
import Carousel from "./carousel/team";
import { useLocale } from "next-intl";
import { buttonVariants } from "./ui/button";
import { useTranslations } from "next-intl";

export default function IndexTeam() {
  const t = useTranslations("Team");
  const tg = useTranslations("OurGallery");
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
        <h2 className="text-3xl font-bold mb-10 text-center md:text-4xl">
          {t("TeamTitle")}
        </h2>
        <div className="mb-5">
          <Carousel slides={members} />
        </div>
        <div className="flex justify-end">
          <Link className={buttonVariants()} locale={locale} href="/team">
            {tg("more")}
          </Link>
        </div>
      </div>
    </section>
  );
}
