"use client";
import { siteData } from "@/lib/site.config";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <header className="relative">
      <div
        style={{
          background: `url('${siteData.heroImage}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full bg-center h-screen bg-cover"
      >
        <div className="bg-[#3D231C4D] w-full h-full flex flex-col gap-8 md:gap-12 items-center justify-center text-white text-center">
          <h1 className="mt-5 text-5xl md:text-[80px]">
            A Little Care Can Change the World
          </h1>
          <Link
            className="rounded-[40px] py-[6px] px-10 text-[32px] block text-secondary-text bg-fundly-green md:px-20 md:text-[40px]"
            href="#"
          >
            Start a Fundraiser!
          </Link>
          <p className="text-[22px]">
            For Individuals and charities. No startup fees. No hidden fees.
          </p>
        </div>
      </div>
    </header>
  );
};
