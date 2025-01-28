import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Contact() {
  const contact = [
    {
      title: "Address",
      description: "st. Vatan ravnaqi 18, Fergana",
      icon: <MapPin className="mb-3" />,
    },
    {
      title: "Email",
      description: "info@taraqqiyotngo.uz",
      icon: <Mail className="mb-3" />,
    },
    {
      title: "Telephone",
      description: "+998 (90) 631-65-50",
      icon: <Phone className="mb-3" />,
    },
  ];
  return (
    <section className="py-14">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {contact.map(({ title, description, icon }, index) => {
            return (
              <li key={index}>
                <Card className="min-h-[200px] hover:bg-primary-foreground">
                  <CardHeader>
                    {icon}
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
