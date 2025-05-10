import Image from "next/image";
import historyimg from "/public/history/history.jpg";
import { getHistory } from "@/request";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

async function History() {
  const history = await getHistory();
  const locale = await getLocale();
  const t = await getTranslations("OurGallery");

  return (
    <>
      <section className="mx-auto container">
        <div>
          <h2 className="text-3xl font-bold mb-10 md:text-4xl xl:text-5xl text-center">
            История
          </h2>
          <div>
            <h2 className="text-3xl font-bold text-center mx-auto">
              {history[0].title[locale]}
            </h2>
            <p className="line-clamp-6 text-base text-center text-gray-400 mt-4 mb-8 max-w-[1300px] mx-auto">
              {history[0].description[locale]}
            </p>
            <Image
              quality={100}
              className="max-w-[1200px] w-full mx-auto"
              alt="history image"
              width={400}
              height={400}
              src={historyimg}
            />
          </div>
          <div className="flex justify-end mt-10">
            <Button className="w-20 mr-40">
              <Link
                href={"/history"}
                className="cursor-pointer"
                variant="outline"
              >
                {t("more")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default History;
