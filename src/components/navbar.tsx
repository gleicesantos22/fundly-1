"use client";
import { NavItems } from "@/components/nav-items";
import { siteData } from "@/lib/site.config";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = ({
  hideCampaigns,
  centerLogo = false,
  removeBlueBorder = false,
}: {
  hideCampaigns?: boolean;
  centerLogo?: boolean;
  removeBlueBorder?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={`z-50 fixed top-0 flex flex-col items-center w-full bg-white p-5 px-2.5 md:px-0 ${
        removeBlueBorder ? "" : "border-b-[16px] border-b-nav-blue"
      }`}
    >
      <div
        className={`w-full relative max-w-[1140px] flex items-center ${
          centerLogo ? "justify-end" : "justify-between"
        }`}
      >
        <Link
          className={centerLogo ? "absolute left-1/2 -translate-x-1/2" : ""}
          href="/"
        >
          <Image width={105} height={36} src={siteData.logo} alt="" />
        </Link>
        <button
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="border-2 border-black/10 rounded p-3 py-1 flex items-center justify-center lg:hidden"
        >
          <Image src="/svg/hamburger-menu.svg" width={30} height={30} alt="" />
        </button>
        <div className="hidden lg:block">
          <NavItems hideCampaigns={hideCampaigns} />
        </div>
      </div>
      {isMenuOpen ? (
        <div className="flex w-full">
          <NavItems variant="mobile" hideCampaigns={hideCampaigns} />
        </div>
      ) : null}
    </nav>
  );
};
