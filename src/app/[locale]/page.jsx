import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexHero from "@/components/IndexHero";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <IndexHero />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
