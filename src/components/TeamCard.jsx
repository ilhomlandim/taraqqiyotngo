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
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{disc}</CardDescription>
      </CardContent>
      <CardFooter className="p-0 h-[500px]  overflow-hidden object-contain w-full">
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
