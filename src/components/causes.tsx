"use client";
import { siteData } from "@/lib/site.config";
import Image from "next/image";
import React from "react";

const allcauses = [
  {
    href: "#",
    name: "Personal & Milestones",
    image: "/svg/club.svg",
  },
  {
    href: "#",
    name: "Community Relief",
    image: "/svg/disaster.svg",
  },
  {
    href: "#",
    name: "Schools & Education",
    image: "/svg/school.svg",
  },

  {
    href: "#",
    name: "Trips & Adventure",
    image: "/svg/trips.svg",
  },
];

export const Causes = () => {
  return (
    <section className="w-full flex justify-center py-[60px] bg-[#f4f4f4]">
      <div className="flex flex-col max-w-[1120px] items-center w-full px-2 lg:px-0">
        <div className="mb-[30px] w-full flex flex-col gap-2">
          <h2 className="text-3xl text-black font-semibold lg:text-4xl">
            {siteData.name} Helps
          </h2>
        </div>
        <div className="grid gap-3 lg:grid-cols-4 md:grid-cols-3">
          {allcauses.map((causeObj) => (
            <Cause key={causeObj.name} {...causeObj} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Cause({
  name,
  image,
  // href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <div
      // href={href}
      className="flex flex-col items-center rounded-xl p-[15px]"
    >
      <Image
        width={200}
        height={118}
        className="h-[118px]"
        alt=""
        src={image}
      />
      <h3 className="text-xl text-black">{name}</h3>
    </div>
  );
}
