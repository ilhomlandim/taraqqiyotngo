import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TeamCard({ info: { title, description, img } }) {
  return (
    <Card className="overflow-hidden group cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="p-0">
        <Image
          className="w-full h-full min-h-[500px] max-h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all"
          src={`/team/${img}.jpg`}
          width={600}
          height={600}
          alt={`${title} picture`}
        />
      </CardFooter>
    </Card>
  );
}

export default TeamCard;
