"use client";
import Image from "next/image";
import Zavodda from "/public/gallery/shvetsar.jpg";
import Ishjarayon from "/public/gallery/kraska.jpg";
import Tekshiruv from "/public/gallery/stroyka_man.jpg";
import Ishvaqti from "/public/gallery/hyundai.jpg";
import Tushuncha from "/public/gallery/gallery-6.jpg";
import Suvombor from "/public/gallery/gallery-2.jpg";
import XalqYegini from "/public/gallery/gallery-3.jpg";
import IshMajlisi from "/public/gallery/gallery-8.jpg";
import Shartnoma from "/public/gallery/gallery-stol.jpg";
import Tushuncha2 from "/public/gallery/gallery-1t.jpg";
import Ishjarayoni from "/public/gallery/gallery-7.jpg";
import Majlis from "/public/gallery/gallery-9.jpg";
import Korsatma from "/public/gallery/gallery-4.jpg";
import Suhbat from "/public/gallery/gallery-10.jpg";
import IshJarayoni from "/public/gallery/stroykagisht.jpg";
import TurbaOmborlari from "/public/gallery/truba.jpg";
import { Eye } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import { useTranslations } from "next-intl";
import { Skeleton } from "./ui/skeleton";
import Framer from "./Framer";

function LoadingStateImage({ image, index }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="overflow-hidden relative group h-[240px] rounded-md">
      <Image
        className="w-full object-cover h-full"
        style={{
          display: loading ? "none" : "block",
        }}
        width={400}
        height={300}
        onLoad={() => setLoading(false)}
        priority
        alt={`Image ${index + 1}`}
        src={image.src}
      />

      <div className="bg-primary/50 absolute inset-0 backdrop-blur-sm flex items-center justify-center  opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <Eye className="text-white" />
      </div>
      {loading && <Skeleton className="w-full h-[240px] absolute inset-0" />}
    </div>
  );
}

export default function Gallery() {
  const t = useTranslations("OurGallery");
  const [open, setOpen] = useState({ state: false, index: 0 });
  const images = [
    Zavodda,
    Ishjarayon,
    Tekshiruv,
    Ishvaqti,
    Tushuncha,
    Suvombor,
    XalqYegini,
    IshMajlisi,
    Shartnoma,
    Tushuncha2,
    Ishjarayoni,
    Majlis,
    Korsatma,
    Suhbat,
    IshJarayoni,
    TurbaOmborlari,
  ];

  return (
    <section className="py-14">
      <h2 className="text-3xl font-bold mb-10 text-center md:text-4xl">
        {t("title")}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1 rounded">
        {images.map((image, index) => {
          return (
            <li
              onClick={() => {
                setOpen({
                  state: true,
                  index,
                });
              }}
              key={index}
            >
              <Framer delay={index / 10} duration="1.2">
                <LoadingStateImage image={image} index={index} />
              </Framer>
            </li>
          );
        })}
      </ul>
      <Lightbox
        open={open.state}
        close={() => setOpen({ state: false })}
        index={open.index}
        slides={images}
        render={{ slide: NextJsImage }}
      />
    </section>
  );
}
