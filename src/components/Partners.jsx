import EmbassyLogo from "/public/partners/embassy.png";
import EULogo from "/public/partners/eu.png";
import OliyMajlisLogo from "/public/partners/oliymajlis.jpg";
import RedPlusLogo from "/public/partners/red_plus.png";
import SieLogo from "/public/partners/sie.png";
import USAIDLogo from "/public/partners/usaid.png";
import UyJoyLogo from "/public/partners/uyjoy.png";

export default function Partners() {
  const partners = [
    EmbassyLogo,
    EULogo,
    USAIDLogo,
    OliyMajlisLogo,
    RedPlusLogo,
    SieLogo,
    UyJoyLogo,
  ];
  return (
    <section className="py-14">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10">Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 gap-10">
          {partners.map((logo) => {
            return (
              <img
                key={logo}
                className="w-full place-self-center grayscale hover:grayscale-0 transition-all duration-500"
                width={200}
                src={logo.src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
