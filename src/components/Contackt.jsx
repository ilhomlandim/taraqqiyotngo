import React from "react";
import LocationImg from "/public/team/location.svg";
import EmailImg from "/public/team/gmail.svg";
import PhoneImg from "/public/team/phone-call.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
function ContacktComponent() {
  const footerSection = useTranslations("callFooter");
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40 gap-8">
        <div className="rounded-2xl relative border-blue-400 h-48 border flex flex-col justify-center gap-4 items-center">
          <Image
            src={LocationImg.src}
            className="absolute"
            width={50}
            height={50}
            style={{
              objectFit: "cover",
              height: "40px",
              width: "40px",
              top: "10px",
              left: "20px",
              position: "absolute",
            }}
            alt={` picture`}
          />
          <h3 className="text-mainGray text-xl font-bold">
            {footerSection("Address")}
          </h3>
          <h4>{footerSection("st")}</h4>
        </div>
        <div className="rounded-xl pl-28 relative border-blue-700 flex flex-col items-center text-left md:text-center justify-between p-8 h-48 border">
          <Image
            src={EmailImg.src}
            className="absolute"
            width={50}
            height={50}
            style={{
              objectFit: "cover",
              height: "40px",
              width: "40px",
              top: "10px",
              left: "20px",
              position: "absolute",
            }}
            alt={` picture`}
          />
          <h3 className="text-mainGray text-xl font-bold">
            {footerSection("lookingJob")}
          </h3>
          <h2 className="text-xl text-mainGray">info@taraqqiyotngo.uz</h2>
        </div>
        <div className="rounded-2xl relative border-blue-700 flex flex-col items-center justify-between p-10 h-48 border">
          <Image
            src={PhoneImg.src}
            className="absolute"
            width={50}
            height={50}
            style={{
              objectFit: "cover",
              height: "40px",
              width: "40px",
              top: "10px",
              left: "20px",
              position: "absolute",
            }}
            alt={` picture`}
          />
          <h3 className="text-mainGray text-xl font-bold">
            {footerSection("TelephoneNumber")}
          </h3>
          <h2 className="text-xl text-mainGray">+998 90 631 65 50</h2>
        </div>
      </div>
    </div>
  );
}

export default ContacktComponent;
