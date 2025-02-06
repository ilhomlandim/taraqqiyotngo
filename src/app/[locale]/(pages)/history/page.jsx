import Image from "next/image";
import historyimg from "/public/history/history.jpg";
import { getHistory } from "@/request";
import { getLocale, getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

async function History() {
  const history = await getHistory();
  const locale = await getLocale();
  const t = await getTranslations("OurGallery");

  return (
    <>
      <Header />
      <section className="grow py-[100px] md:py-[130px] mt-10 mx-auto container">
        <div>
          <div>
            <h2 className="text-4xl max-w-[1250px] font-bold text-center mx-auto mb-5">
              {history[0].title[locale]}
            </h2>
            <Image
              quality={100}
              className="max-w-[1200px] w-full mx-auto"
              alt="history image"
              width={400}
              height={400}
              src={historyimg}
            />
            <p className="text-base text-gray-400 mt-4 mb-8">
              {history[0].description[locale]}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default History;
