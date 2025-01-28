"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function LoadingStateImage({ img, title }) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="overflow-hidden w-full relative group h-[500px] rounded-md">
      <Image
        className={`!w-full h-full min-h-[500px] max-h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all ${
          loading ? "hidden" : "block"
        }`}
        onLoadingComplete={() => setLoading(false)}
        priority
        src={`/team/${img}.jpg`}
        width={600}
        height={600}
        alt={`${title} picture`}
      />
      {loading && <Skeleton className="w-full h-[500px] absolute inset-0" />}
    </div>
  );
}

function TeamCard({ info: { title, description, img } }) {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:bg-primary-foreground transition-all">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="!line-clamp-1">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-0">
        <LoadingStateImage img={img} title={title} />
      </CardFooter>
    </Card>
  );
}

export default TeamCard;
