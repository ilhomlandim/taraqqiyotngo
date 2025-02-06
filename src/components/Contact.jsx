import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Framer from "./Framer";

export default function Contact() {
  const t = useTranslations("callFooter");
  const contact = [
    {
      title: t("Address"),
      description: t("st"),
      icon: <MapPin className="mb-3" />,
      href: "https://www.google.ru/maps/place/Vatan+ravnaqi+ko%E2%80%98chasi+K.+Niyoziy/@40.3907928,71.7829515,16.79z/data=!4m10!1m2!2m1!1z0LMuINCk0LXRgNCz0LDQvdCwINGD0LsuINCS0LDRgtCw0L0g0YDQsNCy0L3QsNC60LggMTg!3m6!1s0x38bb831cbb0c903b:0x7c70b4d7f1101f62!8m2!3d40.3905784!4d71.7858359!15sCjXQsy4g0KTQtdGA0LPQsNC90LAg0YPQuy4g0JLQsNGC0LDQvSDRgNCw0LLQvdCw0LrQuCAxOJIBCnVuaXZlcnNpdHngAQA!16s%2Fg%2F11v0zwkvdh?hl=ru&entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      title: "Email",
      description: "info@taraqqiyotngo.uz",
      icon: <Mail className="mb-3" />,
      href: "mailto:taraqqiyotngo.uz",
    },
    {
      title: t("TelephoneNumber"),
      description: "+998 (90) 631-65-50",
      icon: <Phone className="mb-3" />,
      href: "tel:+998906316550",
    },
  ];
  return (
    <section id="contact" className="py-14 md:py-20 scroll-mt-20">
      <div className="base-container">
        <h2 className="text-3xl font-bold mb-10 md:text-4xl">{t("Contact")}</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {contact.map(({ title, description, icon, href }, index) => {
            return (
              <li key={index}>
                <Framer duration="1" delay={index / 10}>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    <Card className="min-h-[200px] cursor-pointer hover:bg-primary-foreground">
                      <CardHeader>
                        {icon}
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                </Framer>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
