import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import ScrollToTopButton from "@/components/ScrollButton";
import Statistics from "@/components/Statistics";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home(params) {
  return (
    <>
      {JSON.stringify(params)}
      <Header />
      <main className="grow">
        <IndexHero />
        <Partners />
        <Statistics />
        <OurServices />
        <TeamCarousel />
        <Gallery />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
}
