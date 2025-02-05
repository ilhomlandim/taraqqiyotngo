import Image from "next/image";
import EmbassyLogo from "/public/partners/embassy.png";
import EULogo from "/public/partners/eu.png";
import OliyMajlisLogo from "/public/partners/oliymajlis.jpg";
import RedPlusLogo from "/public/partners/red_plus.png";
import SieLogo from "/public/partners/sie.png";
import USAIDLogo from "/public/partners/usaid.png";
import UyJoyLogo from "/public/partners/uyjoy.png";
import { useTranslations } from "next-intl";
import Framer from "./Framer";

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
        <h2 className="text-3xl font-bold mb-10 md:text-4xl">{t("title")}</h2>
        <div className="grid grid-cols-2 items-center sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-10">
          {partners.map((logo, index) => {
            return (
              <Framer
                key={index}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                initial={{ y: 100, opacity: 0, scale: 0.5 }}
                duration="1"
                delay={index / 10}
              >
                <Image
                  className="w-full place-self-center transition-all"
                  width={200}
                  priority
                  height={200}
                  alt={`Partner ${index + 1}`}
                  src={logo.src}
                />
              </Framer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
