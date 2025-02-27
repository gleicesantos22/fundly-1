"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

const allcauses = [
  {
    href: "#",
    name: "Clubs & Community",
    image: "https://fundly.com/content/images/icon_vertical_club.svg",
  },
  {
    href: "#",
    name: "Disaster Relief",
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
    <section className="w-full flex justify-center py-[70px]">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl mb-[30px] lg:text-[64px]">Fundly Helps</h2>
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
      className="flex flex-col items-center rounded-xl hover:bg-[#f4f4f4] p-[15px]"
    >
      <Image width={200} height={118} className="h-[118px]" alt="" src={image} />
      <h3 className="text-2xl text-[#1c1c1c]">{name}</h3>
    </Link>
  );
}
