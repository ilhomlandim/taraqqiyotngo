import Image from "next/image";
import EmbassyLogo from "/public/partners/embassy.png";
import EULogo from "/public/partners/eu.png";
import OliyMajlisLogo from "/public/partners/oliymajlis.jpg";
import RedPlusLogo from "/public/partners/red_plus.png";
import SieLogo from "/public/partners/sie.png";
import USAIDLogo from "/public/partners/usaid.png";
import UyJoyLogo from "/public/partners/uyjoy.png";
import { useTranslations } from "next-intl";

export default function Partners() {
  const t = useTranslations("Partners");
  const partners = [
    EmbassyLogo,
    EULogo,
    USAIDLogo,
    OliyMajlisLogo,
    RedPlusLogo,
    SieLogo,
    UyJoyLogo,
  ];
  return (
    <section className="py-14 md:py-20">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10">{t("title")}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-10">
          {partners.map((logo, index) => {
            return (
              <Image
                key={index}
                className="w-full place-self-center grayscale hover:grayscale-0 transition-all"
                width={200}
                priority
                height={200}
                alt={`Partner ${index + 1}`}
                src={logo.src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
