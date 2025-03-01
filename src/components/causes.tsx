"use client";
import { siteData } from "@/lib/site.config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const allcauses = [
  {
    href: "#",
    name: "Personal & Milestones",
    image: "https://fundly.com/content/images/icon_vertical_club.svg",
  },
  {
    href: "#",
    name: "Community Relief",
    image: "https://fundly.com/content/images/icon_vertical_%20disaster.svg",
  },
  {
    href: "#",
    name: "Schools & Education",
    image: "https://fundly.com/content/images/icon_vertical_%20school.svg",
  },

  {
    href: "#",
    name: "Trips & Adventure",
    image: "https://fundly.com/content/images/icon_vertical_%20trips.svg",
  },
];

export const Causes = () => {
  return (
    <section className="w-full flex justify-center py-[60px] bg-[#f4f4f4]">
      <div className="flex container flex-col items-center">
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
  href,
}: {
  name: string;
  image: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center rounded-xl hover:bg-[#fff] hover:shadow-[0_.3125rem_1rem_-.1875rem_#0003] p-[15px]"
    >
      <Image
        width={200}
        height={118}
        className="h-[118px]"
        alt=""
        src={image}
      />
      <h3 className="text-xl text-black">{name}</h3>
    </Link>
  );
}
