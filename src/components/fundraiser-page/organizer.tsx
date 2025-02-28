"use client";
import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Organizer = ({
  organizer,
}: {
  organizer: {
    name: string;
    avatar: string;
    location: string;
    contactPageLink: string;
  };
}) => {
  return (
    <div className="border-y lg:pl-5 pb-5 pt-3 flex flex-col gap-2">
      <h2 className="text-xl font-semibold">Organizer</h2>

      <div className="flex gap-4 pt-3">
        {organizer.avatar ? (
          <Image
            className="w-10 h-10 rounded-full"
            src={organizer.avatar}
            width={40}
            height={40}
            alt=""
          />
        ) : (
          <span className="rounded-full p-2 bg-[#f4f2ec] text-[#252525]">
            <HandHeart width={24} height={24} />
          </span>
        )}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold">{organizer.name}</h3>
            <p className="text-sm">Organizer</p>
            <p className="text-sm">{organizer.location}</p>
          </div>
          <Link href={organizer.contactPageLink}>
            <Button variant="outline">Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
