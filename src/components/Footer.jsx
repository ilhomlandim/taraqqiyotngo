import { Facebook, Instagram, Send } from "lucide-react";
import { Button } from "./ui/button";
import LogoImg from "/public/logo.png";
import Link from "next/link";

export default function Footer() {
  const socials = [
    {
      path: "https://www.facebook.com/taraqqiyotngouz",
      icon: <Facebook />,
    },
    {
      path: "https://t.me/taraqqiyot_ngo_official",
      icon: <Send />,
    },
    {
      path: "https://www.instagram.com/taraqqiyot.ngo",
      icon: <Instagram />,
    },
  ];

  return (
    <footer className="py-5 bg-primary-foreground">
      <div className="base-container flex justify-between items-center">
        <Link className="font-bold text-2xl" href="/">
          <img
            className="object-contain w-[150px] md:w-[200px]"
            width={200}
            src={LogoImg.src}
          />
        </Link>
        <ul className="flex gap-3">
          {socials.map(({ icon, path }, index) => {
            return (
              <li key={index}>
                <Button asChild variant="secondary" size="icon">
                  <a href={path} target="_blank">
                    {icon}
                  </a>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
