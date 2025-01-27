import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <IndexHero />
        <Partners />
        <Statistics />
        <OurServices />
      </main>
      <Footer />
    </>
  );
}
