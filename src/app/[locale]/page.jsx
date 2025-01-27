import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import TeamCarousel from "@/components/TeamCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <IndexHero />
        <Partners />
        <Statistics />
        <TeamCarousel />
      </main>
      <Footer />
    </>
  );
}
