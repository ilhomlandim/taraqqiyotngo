import { useTranslations } from "next-intl";

export default function Statistics() {
  const t = useTranslations("Statistics");
  return (
    <section className="py-16 md:py-20 bg-primary-foreground">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10 text-center">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl mx-auto gap-10">
          <div className="place-items-center text-center w-[80%]">
            <h3 className="font-medium text-3xl">+17499</h3>
            <p>{t("box1")}</p>
          </div>
          <div className="place-items-center text-center w-[80%]">
            <h3 className="font-medium text-3xl">+829</h3>
            <p>{t("box2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
