import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <IndexHero />
        <Partners />
        <Statistics />
        <OurServices />
        <Gallery />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
