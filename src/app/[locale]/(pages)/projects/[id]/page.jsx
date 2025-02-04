import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProjectsDetails } from "@/request/projectsDetail";
import { getLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const Details = async ({ params }) => {
  const { id } = await params;
  const f = await getProjectsDetails(id);

  const locale = await getLocale();
  return (
    <>
      <Header />
      <main className="grow py-[94px] md:py-[112px]">
        <div className="container mx-auto mt-10 max-w-[900px] px-8">
          <Card>
            <CardHeader className="gap-2">
              <CardTitle className="max-w-[1080px] text-[11px] text-center md:text-3xl md:text-left font-bold">{`${f.title[locale]}`}</CardTitle>
              <CardDescription className="text-[9px] text-center md:text-base md:text-left max-w-[1250px]">{`${f.description[locale]}`}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <Image src={`${f.logo}`} width={400} height={400} alt="Logo" /> */}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="font-bold text-sm md:text-md text-gray-200 rounded-full">
                <Link
                  href={`/${locale}/projects`}
                  className="font-bold text-sm md:text-md text-gray-200 rounded-full flex items-center px-3"
                >
                  <ArrowBigLeft />
                  Back
                </Link>
              </Button>

              <Button className="font-bold text-sm md:text-md text-gray-200 rounded-full">{`${f.year}`}</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Details;
