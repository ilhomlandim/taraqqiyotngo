import Carousel from "./carousel/index-hero";
import FirstImg from "/public/hero/1.jpg";
import SecondImg from "/public/hero/2.jpg";
import ThirdImg from "/public/hero/3.jpg";
import FourthImg from "/public/hero/4.jpg";
import { useTranslations } from "next-intl";
export default function IndexHero() {
  const t = useTranslations("indexHero");
  const slides = [
    {
      text: t("first"),
      img: FirstImg,
    },
    {
      text: t("second"),
      img: SecondImg,
    },
    {
      text: t("third"),
      img: ThirdImg,
    },
    {
      text: t("fourth"),
      img: FourthImg,
    },
  ];

  return (
    <div className="base-container py-3">
      <Carousel slides={slides} />
    </div>
  );
}
