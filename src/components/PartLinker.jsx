"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function PartLinker() {
  const pathname = usePathname();
  console.log(pathname);

  const [open, setOpen] = useState(false);
  const parts = [
    {
      locations: ["/", "team"],
      title: "partners",
    },
    {
      locations: ["/", "team"],
      title: "team",
    },
    {
      locations: ["/"],
      title: "gallery",
    },
    {
      locations: ["/", "team"],
      title: "services",
    },
    {
      locations: ["/", "team"],
      title: "statistics",
    },
    {
      locations: ["/", "team"],
      title: "contact",
    },
  ];
  return (
    <div className="relative">
      <ul></ul>
    </div>
  );
}
