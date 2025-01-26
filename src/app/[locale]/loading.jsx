import LogoImg from "/public/logo.png";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
      <Image
        className="w-[200px] animate-pulse"
        width={200}
        src={LogoImg}
        alt="Logo for loading"
      />
    </div>
  );
}
