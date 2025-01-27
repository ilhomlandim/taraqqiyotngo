"use client";
import TeamCard from "@/components/TeamCard";
import { useTranslations } from "next-intl";

function Team() {
  const t = useTranslations("Team");
  const footerSection = useTranslations("callFooter");
  const teamMembers = t.raw("members");

  return (
    <div className="my-10 base-container mx-auto  py-20">
      <div className="flex flex-col items-center gap-4 mb-10">
        <h1 className="text-mainGray my-4 text-3xl sm:text-5xl text-center">
          {t("TeamTitle")}
        </h1>
        <p className=" text-center text-mainGray whitespace-normal max-w-[90%] text-sm  md:max-w-[60%]">
          {t("TeamPageDesc")}
          <br />
          <br />
          {t("TeamPageBottomDesc")}
        </p>
      </div>

      <div className=" grid md:grid-cols-2  grid-cols-1 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => {
          const cardImg = `/team/${member.img}.jpg`;

          return (
            <div className="grayscale hover:grayscale-0 transition-all duration-500">
              <TeamCard
                className="embla__slide w-full "
                key={index}
                data={{
                  title: member.name,
                  disc: member.position,
                  cardImg,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-3 mt-40 gap-10">
        <div className="rounded-2xl border-blue-400 h-40 border p-10">
          <h3 className="text-mainGray text-xl font-bold">
            {footerSection("Address")}
          </h3>
          <h4>{footerSection("st")}</h4>
        </div>
        <div className="rounded-2xl border-blue-700 flex flex-col items-center justify-between p-8 h-40 border">
          <h3 className="text-mainGray text-xl font-bold">
            {footerSection("lookingJob")}
          </h3>
          <h2 className="text-xl text-mainGray">info@taraqqiyotngo.uz</h2>
        </div>
        <div className="rounded-2xl border-blue-700 flex flex-col items-center justify-between p-10 h-40 border">
          <h3 className="text-mainGray text-xl font-bold">
            {footerSection("TelephoneNumber")}
          </h3>
          <h2 className="text-xl text-mainGray">+998 90 631 65 50</h2>
        </div>
      </div>
    </div>
  );
}

export default Team;
