import { Bolt, Puzzle, Ribbon, ScanSearch } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function OurServices() {
  const services = [
    {
      title: "Texnik loyihalash",
      description:
        "Texnik tarafdan barchasini o'zimiz qilamiz. Muammo yechish bizga ota me'ros.",
      icon: <Bolt className="mb-3" />,
    },
    {
      title: "So'rovlar va tadqiqotlar",
      description: "Aholi o'rtasida tez-tez so'rov o'tkazib turamiz.",
      icon: <ScanSearch className="mb-3" />,
    },
    {
      title: "Sifatli qismlar va materiallardan foydalanish",
      description:
        "Albatta eng so'ngi texnalogiya va materillardan foydalanamiz. Sifat birinichi o'rinda turadi biz uchun.",
      icon: <Puzzle className="mb-3" />,
    },
    {
      title: "Yoshlar va ayollarni jalb qilish",
      description: "Bizda ayol va qizlarga alohida e'tibor qaratiladi.",
      icon: <Ribbon className="mb-3" />,
    },
  ];
  return (
    <section className="py-14">
      <div className="base-container">
        <h2 className="text-4xl font-bold mb-10">Xizmatlar</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map(({ title, description, icon }, index) => {
            return (
              <li key={index}>
                <Card className="min-h-[250px] hover:bg-primary-foreground">
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
