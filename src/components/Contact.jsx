import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";

export default function Contact() {
  const contact = [
    {
      title: "Address",
      description: "st. Vatan ravnaqi 18, Fergana",
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
      title: "Telephone",
      description: "+998 (90) 631-65-50",
      icon: <Phone className="mb-3" />,
      href: "tel:+998906316550",
    },
  ];
  return (
    <section className="py-14">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {contact.map(({ title, description, icon, href }, index) => {
            return (
              <li key={index}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Card className="min-h-[200px] cursor-pointer hover:bg-primary-foreground">
                    <CardHeader>
                      {icon}
                      <CardTitle>{title}</CardTitle>
                      <CardDescription>{description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
