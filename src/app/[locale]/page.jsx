import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import TeamCard from "@/components/TeamCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <IndexHero />
        <Partners />
        <Statistics />
        <OurServices />
        <TeamCard />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
