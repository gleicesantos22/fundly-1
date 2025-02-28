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
        <div className="max-w-[1140px] flex flex-col gap-2 gap-y-10 justify-between mb-6 px-4 lg:flex-row">
          {hideSiteInfo ? null : (
            <div className="flex flex-col gap-6 basis-full lg:basis-1/3">
              <Image width={105} height={36} src={siteData.logo} alt="" />
              <span>{siteData.description}</span>
            </div>
          )}
          <div className="flex flex-col gap-2.5 basis-full lg:basis-1/3">
            <h4 className="text-[22px] font-semibold text-green-600">
              About Us
            </h4>
            <div className="grid grid-cols-2 gap-4 gap-x-10">
              {siteData.footerNavLinks.map(({ text, href }) => (
                <Link key={text} target="_blank" href={href}>
                  {text}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 basis-full lg:basis-1/3">
            <h4 className="text-[22px] font-semibold text-green-600">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-4 gap-x-10">
              {siteData.footerSocialLinks.map(({ text, href, icon: Icon }) => (
                <Link
                  className="flex gap-2 items-center"
                  target="_blank"
                  key={text}
                  href={href}
                >
                  <div className="border p-1 border-currentColor rounded-full">
                    <Icon />
                  </div>
                  <span>{text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center border-t-dashed border-t-2 border-t-[#737373] pt-4">
          Copyright © {siteData.name} 2026
        </div>
      </div>
    </footer>
  );
};
