import Carousel from "./carousel/index-hero";
import FirstImg from "/public/hero/1.jpg";
import SecondImg from "/public/hero/2.jpg";
import ThirdImg from "/public/hero/3.jpg";
export default function IndexHero() {
  const slides = [
    { text: "Lorem ipsum 2", img: FirstImg },
    { text: "Daleko-daleko 34", img: SecondImg },
    { text: "Edimmi-edimdafd 34", img: ThirdImg },
  ];

  return (
    <div className="base-container py-3">
      <Carousel slides={slides} />
    </div>
  );
}
