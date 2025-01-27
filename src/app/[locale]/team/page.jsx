"use client";
import ContacktComponent from "@/components/Contackt";
import TeamCard from "@/components/TeamCard";
import { useTranslations } from "next-intl";

function Team() {
  const t = useTranslations("Team");
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
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-500"
            >
              <TeamCard
                className="embla__slide w-full "
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
      <ContacktComponent />
    </div>
  );
}

export default Team;
