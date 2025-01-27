import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TeamCard(props) {
  const { title, disc, cardImg } = props.data;

  return (
    <Card className=" hover:shadow-2xl flex flex-col justify-between text-mainGray">
      <CardHeader>
        <CardTitle className="md:text-xl  text-lg font-semibold px-2">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-base w-8/12 text-justify">
          {disc}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-0 h-[300px] md:h-[500px]  overflow-hidden object-contain w-full">
        <Image
          src={cardImg}
          width={500}
          height={500}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          alt={`${title} picture`}
        />
      </CardFooter>
    </Card>
  );
}

export default TeamCard;
