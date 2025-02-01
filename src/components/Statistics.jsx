import { useTranslations } from "next-intl";
import Framer from "./Framer";

export default function Statistics() {
  const t = useTranslations("Statistics");
  return (
    <section className="py-16 overflow-hidden md:py-20 bg-primary-foreground">
      <div className="base-container">
        <h2 className="text-3xl font-bold mb-10 text-center md:text-4xl">
          {t("title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl mx-auto gap-10 place-items-center">
          <Framer
            duration="1.2"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="text-center mx-auto w-[80%]">
              <h3 className="font-medium text-3xl">+17499</h3>
              <p>{t("box1")}</p>
            </div>
          </Framer>
          <Framer
            duration="1.2"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="text-center mx-auto w-[80%]">
              <h3 className="font-medium text-3xl">+829</h3>
              <p>{t("box2")}</p>
            </div>
          </Framer>
        </div>
      </div>
    </section>
  );
}
