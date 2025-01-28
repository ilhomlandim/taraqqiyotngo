"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

const EmblaCarousel = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Fade(),
    Autoplay({ delay: 6000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla relative rounded-sm">
      <div className="embla__viewport mb-5" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ text, img }, index) => (
            <div className="embla__slide" key={index}>
              <div>
                <Image
                  className="embla__slide__img h-44 sm:h-60 xl:h-96"
                  width={700}
                  height={300}
                  priority
                  src={img.src}
                  alt={`Image ${index + 1}`}
                />
              </div>
              <div className="absolute z-50 top-5 left-10 bg-primary/40 backdrop-blur-md rounded-md overflow-hidden p-1 sm:top-10 sm:left-10 md:top-16 md:left-16 max-w-[80%] md:max-w-[50%]">
                <div className="rounded w-full">
                  <h1 className="text-xl text-white font-bold sm:text-2xl md:text-3xl xl:text-4xl">
                    {text}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button size="icon" onClick={scrollPrev}>
          <ChevronLeftIcon />
        </Button>
        <Button size="icon" onClick={scrollNext}>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
