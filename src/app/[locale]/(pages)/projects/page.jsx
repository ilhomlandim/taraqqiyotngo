import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurServices from "@/components/OurServices";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Statistics from "@/components/Statistics";

export default function page() {
  return (
    <>
      <Header />
      <main className="grow py-[94px] md:py-[112px]">
        <Projects />
        <Partners />
        <OurServices />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
