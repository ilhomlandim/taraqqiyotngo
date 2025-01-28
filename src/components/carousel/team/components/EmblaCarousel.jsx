"use client";
import useEmblaCarousel from "embla-carousel-react";
import TeamCard from "./TeamCard";
import { useEffect } from "react";

export default function EmblaCarousel({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    const intervalId = setInterval(autoScroll, 5000);

    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="embla rounded-none" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((info, index) => {
          return (
            <div
              className="embla__slide"
              style={{
                "--slide-size": "33.33%",
              }}
              key={index}
            >
              <TeamCard info={info} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
