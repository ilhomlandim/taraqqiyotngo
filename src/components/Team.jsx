import { Link } from "@/i18n/routing";
import Carousel from "./carousel/team";
import { useLocale } from "next-intl";
import { buttonVariants } from "./ui/button";

export default function Team() {
  const { locale } = useLocale();
  const members = [
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
    {
      title: "Nurbek Pulatov",
      description:
        "Imkoniyatlarni oshirish bo'yicha mutaxassis / CD mutaxassisi",
      img: "nurbekpulatov",
    },
  ];
  return (
    <section className="py-14">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10">Bizning jamoa</h2>
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
