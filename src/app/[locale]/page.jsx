import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import IndexTeam from "@/components/IndexTeam";

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
        <Gallery />
        <IndexTeam />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
