import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import History from "@/components/History";
import IndexHero from "@/components/IndexHero";
import IndexTeam from "@/components/IndexTeam";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow py-[94px] md:py-[112px]">
        <IndexHero />
        <Partners />
        <IndexTeam />
        <Gallery />
        <History />
        <OurServices />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
