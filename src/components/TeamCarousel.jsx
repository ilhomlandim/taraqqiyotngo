"use client";
import { useTranslations } from "next-intl";
import TeamCard from "./TeamCard";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import ContacktComponent from "./Contackt";
function TeamCarousel() {
  const params = useParams();

  const t = useTranslations("Team");
  const teamMembers = t.raw("members");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 2,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(autoplay, 2000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="my-10 base-container   overflow-hidden items-center">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-mainGray my-4 text-3xl sm:text-5xl text-center">
          {t("TeamTitle")}
        </h2>
        <p className="text-center text-mainGray max-w-[90%] text-sm  md:max-w-[60%]">
          {t("TeamDesc")}
        </p>
      </div>

      <div
        className="embla overflow-visible md:overflow-hidden w-full px-2 pt-20 "
        ref={emblaRef}
      >
        <div className="embla__container  gap-10 flex items-center ">
          {teamMembers.map((member, index) => {
            const cardImg = `/team/${member.img}.jpg`;

            return (
              <div key={index} className="w-[550px] min-w-[400px] ">
                <TeamCard
                  className="embla__slide h-[650px] min-h-[400px] "
                  data={{
                    title: member.name,
                    disc: member.position,
                    cardImg,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4  justify-between mt-1  ">
        <button
          onClick={scrollPrev}
          className=" text-blue flex items-center gap-2 hover:underline underline-offset-8 py-2 px-4  "
        >
          <ArrowLeftIcon />
          Prev
        </button>
        <button
          onClick={scrollNext}
          className=" text-blue flex items-center gap-2 hover:underline underline-offset-8 py-2 px-4 "
        >
          Next
          <ArrowRightIcon />
        </button>
      </div>
      <button
        onClick={() => {
          router.push(`/${params.locale}/team`);
        }}
        className="bg-purple-600 text-white py-2 px-4 rounded-2xl ml-[50%] mt-4"
      >
        Show more
      </button>
      <ContacktComponent />
    </div>
  );
}

export default TeamCarousel;
