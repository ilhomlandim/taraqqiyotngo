"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

const EmblaCarousel = (props) => {
  const { slides } = props;
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Fade(),
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ text, img }, index) => {
            return (
              <div className="embla__slide" key={index}>
                <div className="blur-sm">
                  <img
                    className="embla__slide__img"
                    src={img.src}
                    alt="Your alt text"
                  />
                </div>
                <h1 className="absolute top-40 left-40 z-50 text-5xl text-white font-bold">
                  {text}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
