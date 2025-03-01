"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { siteData } from "@/lib/site.config";

export const Footer = ({
  hideSiteInfo = false,
}: {
  hideSiteInfo?: boolean;
}) => {
  return (
    <footer className="w-full flex justify-center text-[#d0d0d0] bg-footerBackground pt-12 pb-2">
      <div>
        <div className="max-w-[1140px] flex flex-col gap-y-10 justify-between mb-6 px-4 lg:flex-row">
          {hideSiteInfo ? null : (
            <div className="flex flex-col gap-2.5 basis-full lg:basis-1/4">
              <Image width={150} height={50} src={siteData.footerLogo} alt="" />
              <span>{siteData.description}</span>
            </div>
          )}
          <div className="flex flex-col gap-2.5 basis-full lg:basis-1/4">
            <h4 className="text-[22px] font-semibold text-green-600">
              About Us
            </h4>
            <div className="grid grid-cols-1 gap-3 gap-x-10">
              {siteData.footerNavLinks.map(({ text, href }) => (
                <Link key={text} target="_blank" href={href}>
                  {text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 basis-full lg:basis-1/4">
            <h4 className="text-[22px] font-semibold text-green-600">
              {siteData.footerContactUs.title}
            </h4>
            <div className="grid grid-cols-1 gap-3 gap-x-10">
              <Link target="_blank" href={siteData.footerContactUs.contactLink}>
                {siteData.footerContactUs.contactText}
              </Link>
              <div className="flex flex-col">
                <span>{siteData.footerContactUs.availabilityDays}</span>
                <span>{siteData.footerContactUs.availabilityTime}</span>
              </div>
              <Image src={siteData.footerContactUs.image} alt="" width={115} height={40} />
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t-dashed border-t-2 border-t-[#737373] pt-4">
          Copyright © {siteData.name} 2025
        </div>
      </div>
    </footer>
  );
};
