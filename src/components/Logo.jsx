import { Link } from "@/i18n/routing";
import LogoImg from "/public/logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="object-contain w-[150px] md:w-[200px]"
        width={200}
        height={70}
        priority
        alt="Taraqqiyot NGO logo"
        src={LogoImg.src}
      />
    </Link>
  );
}
