"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Framer from "./Framer";
// import { getLocale, getTranslations } from "next-intl/server";
// import { getProjects } from "@/request";

// export default async function Projects() {
//   // const t = await getTranslations("header");
//   // const projects = await getProjects();
//   // const locale = await getLocale();

//   return (
//     <section className="py-14 md:py-20 min-h-screen">
//       <div className="base-container">
//         <h1 className="text-4xl font-bold mb-10 md:text-5xl xl:text-6xl">
//           {/* {t("Projects")} */}
//           Test Project
//         </h1>
//         <div className="w-full flex gap-10 h-full">
//           <div className="w-2/3">
//             <ul className="flex flex-col gap-5">
//               {/* {projects
//                 .sort((a, b) => {
//                   const [dayA, monthA, yearA] = a.year.split(".");
//                   const [dayB, monthB, yearB] = b.year.split(".");

//                   // Yil, oy va kun bo'yicha solishtirish
//                   if (yearA !== yearB) return yearA - yearB; // Yil bo'yicha tartiblash
//                   if (monthA !== monthB) return monthA - monthB; // Oy bo'yicha tartiblash
//                   return dayB - dayA; // Kun bo'yicha tartiblash
//                 })
//                 .map(({ title, description }, index) => { */}
//               {/* return ( */}
//               <li
//               // key={index}
//               >
//                 <Framer
//                   // delay={index / 10}
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   duration="1"
//                 >
//                   <Card className="hover:bg-primary-foreground">
//                     <CardHeader>
//                       <CardTitle>
//                         {/* {title[locale]} */}
//                         Test Title
//                       </CardTitle>
//                       <CardDescription className="line-clamp-3">
//                         {/* {description[locale]} */}
//                         Test Description
//                       </CardDescription>
//                     </CardHeader>
//                     <CardFooter>
//                       <Button
//                         className="px-0 justify-start"
//                         asChild
//                         variant="link"
//                       >
//                         <Link href={"/"}>
//                           Batafsil <ExternalLink />
//                         </Link>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </Framer>
//               </li>
//               {/* ); */}
//               {/* })} */}
//               <li>
//                 <Framer
//                   // delay={index / 10}
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   duration="1"
//                 >
//                   <Card className="hover:bg-primary-foreground">
//                     <CardHeader>
//                       <CardTitle>
//                         {/* {title[locale]} */}
//                         Test Title
//                       </CardTitle>
//                       <CardDescription className="line-clamp-3">
//                         {/* {description[locale]} */}
//                         Test Description
//                       </CardDescription>
//                     </CardHeader>
//                     <CardFooter>
//                       <Button
//                         className="px-0 justify-start"
//                         asChild
//                         variant="link"
//                       >
//                         <Link href={"/"}>
//                           Batafsil <ExternalLink />
//                         </Link>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </Framer>
//               </li>

//               <li>
//                 <Framer
//                   // delay={index / 10}
//                   initial={{ scale: 0.5, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   duration="1"
//                 >
//                   <Card className="hover:bg-primary-foreground">
//                     <CardHeader>
//                       <CardTitle>
//                         {/* {title[locale]} */}
//                         Test Title
//                       </CardTitle>
//                       <CardDescription className="line-clamp-3">
//                         {/* {description[locale]} */}
//                         Test Description
//                       </CardDescription>
//                     </CardHeader>
//                     <CardFooter>
//                       <Button
//                         className="px-0 justify-start"
//                         asChild
//                         variant="link"
//                       >
//                         <Link href={"/"}>
//                           Batafsil <ExternalLink />
//                         </Link>
//                       </Button>
//                     </CardFooter>
//                   </Card>
//                 </Framer>
//               </li>
//             </ul>
//           </div>
//           <div className="w-1/3">
//             <ul className="grid grid-cols-1 lg:grid-cols-3 gap-5 sticky top-28 md:top-32 z-40">
//               {/* {projects
//                 .sort((a, b) => {
//                   const [dayA, monthA, yearA] = a.year.split(".");
//                   const [dayB, monthB, yearB] = b.year.split(".");

//                   // Yil, oy va kun bo'yicha solishtirish
//                   if (yearA !== yearB) return yearA - yearB; // Yil bo'yicha tartiblash
//                   if (monthA !== monthB) return monthA - monthB; // Oy bo'yicha tartiblash
//                   return dayB - dayA; // Kun bo'yicha tartiblash
//                 })
//                 .map(({ year }, index) => { */}
//               {/* return ( */}
//               <li
//               //  key={index}
//               >
//                 <Button>
//                   {/* {year.split(".")[2]} */}
//                   Test Years
//                 </Button>
//               </li>
//               {/* ); */}
//               {/* })} */}
//               <li>
//                 <Button>
//                   {/* {year.split(".")[2]} */}
//                   Test Years
//                 </Button>
//               </li>
//               <li>
//                 <Button>
//                   {/* {year.split(".")[2]} */}
//                   Test Years
//                 </Button>
//               </li>
//               <li>
//                 <Button>
//                   {/* {year.split(".")[2]} */}
//                   Test Years
//                 </Button>
//               </li>
//               <li>
//                 <Button>
//                   {/* {year.split(".")[2]} */}
//                   Test Years
//                 </Button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Button } from "./ui/button";
// import Link from "next/link";
// import { ExternalLink } from "lucide-react";
// import Framer from "./Framer";
import { useEffect, useState } from "react";

export default function Projects() {
  const data = [
    {
      id: 1,
      title: "test1",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2019,
    },
    {
      id: 2,
      title: "test2",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2019,
    },
    {
      id: 3,
      title: "test3",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2020,
    },
    {
      id: 4,
      title: "test4",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2021,
    },
    {
      id: 5,
      title: "test5",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2021,
    },
    {
      id: 6,
      title: "test6",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2021,
    },
    {
      id: 7,
      title: "test7",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      year: 2022,
    },
  ];
  const [years, setYears] = useState([]);

  useEffect(() => {
    const uniqueYears = [...new Set(data.map((item) => item.year))];
    setYears(uniqueYears);
  }, []);

  return (
    <>
      <div className="p-4 hidden md:block">
        <section className="py-14 md:py-20 min-h-screen">
          <div className="base-container">
            <h1 className="text-4xl font-bold mb-10 md:text-5xl xl:text-6xl">
              Test Mode
            </h1>
            <div className="w-full flex gap-10 h-full">
              <div className="w-2/3">
                <ul className="flex flex-col gap-5">
                  {data.map((p, index) => (
                    <li key={index + 1}>
                      <Framer
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        duration="1"
                      >
                        <Card className="hover:bg-primary-foreground">
                          <CardHeader>
                            <CardTitle>{p.title}</CardTitle>
                            <CardDescription className="line-clamp-2">
                              {p.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter>
                            <Button
                              className="px-0 justify-start"
                              asChild
                              variant="link"
                            >
                              <Link href={"/"}>
                                Batafsil <ExternalLink />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </Framer>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/3">
                <ul className="grid grid-cols-2 lg:grid-cols-3 gap-5 sticky top-28 md:top-32 z-40">
                  {data.map((p) => (
                    <li>
                      <Button>{p.year}</Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" md:hidden p-4">
        <section className="p-6 max-w-2xl mx-auto min-h-screen">
          {years.map((year) => (
            <div key={year} className="relative">
              <div className="w-[85px] px-5 sticky top-36 flex justify-center mt-5  backdrop-filter rounded-3xl backdrop-blur-md text-xl font-bold py-2 border-b border border-gray-300">
                {year}
              </div>
              <div className="space-y-2 mt-2">
                {data
                  .filter((item) => item.year === year)
                  .map((item, index) => (
                    <div key={index} className="p-3 border-b rounded-lg shadow">
                      <h4 className="font-bold text-2xl mb-3">{item.title}</h4>
                      <p className="line-clamp-3">{item.description}</p>
                      <Button variant="link">
                        <Link href={"/"} className="flex items-center p-0">
                          Batafsil <ExternalLink className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
