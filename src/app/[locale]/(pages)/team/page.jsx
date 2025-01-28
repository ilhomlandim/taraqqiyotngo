import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Team from "@/components/Team";

export default function page() {
  return (
    <>
      <Header />
      <main className="grow">
        <Team />
      </main>
      <Footer />
    </>
  );
}
