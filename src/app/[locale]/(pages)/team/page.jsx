import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";

export default function page() {
  return (
    <>
      <Header />
      <main className="grow">
        <Team />
        <Partners />
        <OurServices />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
