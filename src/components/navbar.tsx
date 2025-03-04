"use client";
import { Button } from "@/components/ui/button";
// import { NavItems } from "@/components/nav-items";
import { siteData } from "@/lib/site.config";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = ({
  hideCampaigns = false,
  centerLogo = false,
  hideCreateCampaign = false,
  showContactUs = false,
  hidePolicies = false,
  greenLogin = false,
  hideLogin = false,
}: {
  hideCampaigns?: boolean;
  centerLogo?: boolean;
  hideCreateCampaign?: boolean;
  showContactUs?: boolean;
  hidePolicies?: boolean;
  greenLogin?: boolean;
  hideLogin?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // console.log({ isOpen, showContactUs, hideHome, hideCampaigns });

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent) {
  //     if (
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(event.target as Node)
  //     ) {
  //       setIsOpen(false);
  //     }
  //   }

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [dropdownRef]);
  return (
    <nav
      className={`z-50 sticky top-0 flex flex-col items-center w-full bg-white shadow p-5 px-2.5 md:px-0 min-h-[76px]`}
    >
      <div
        className={`w-full relative container flex items-center ${
          centerLogo ? "justify-end" : "justify-between lg:gap-10"
        }`}
      >
        <div className="flex items-center gap-10">
          <Link
            className={
              centerLogo
                ? "h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                : ""
            }
            href="/"
          >
            <Image width={140} height={40} src={siteData.logo} alt="" />
          </Link>

          {hideCampaigns ? null : (
            <Link href="#campaigns" className="hidden lg:block hover:underline">
              Campaigns
            </Link>
          )}
          {hidePolicies ? null : (
            <div className="relative hidden lg:block group">
              <div className="inline-flex gap-1 items-center cursor-pointer">
                <span>Our Policies</span>{" "}
                <span className="not-group-hover:inline group-hover:hidden">
                  <ChevronDown width={20} height={20} />
                </span>
                <span className="hidden group-hover:inline">
                  <ChevronUp width={20} height={20} />
                </span>
              </div>
              <div className="absolute top-4 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <Link
                  href="/terms-and-conditions"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Terms and conditions
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/refund-policy"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          )}
          {showContactUs ? (
            <Link
              className="hover:underline hidden lg:block"
              href={siteData.footerContactUs.contactLink}
            >
              Contact us
            </Link>
          ) : null}
        </div>

        <div className="lg:flex items-center hidden gap-5">
          {greenLogin ? (
            <Link className="w-full hover:underline block" href="/login">
              <Button className="bg-green-600 text-white">Log in</Button>
            </Link>
          ) : hideLogin ? null : (
            <Link className="w-full hover:underline block" href="/login">
              Log in
            </Link>
          )}

          {hideCreateCampaign ? null : (
            <Link className="w-full block" href="/create-a-fundraiser">
              <Button
                // variant="primary"
                className="hover:underline w-full lg:w-max bg-green-600 text-white"
              >
                Create a campaign
              </Button>
            </Link>
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="border-2 border-black/10 rounded p-3 py-1 flex items-center justify-center lg:hidden"
        >
          <Image src="/svg/hamburger-menu.svg" width={30} height={30} alt="" />
        </button>
        {/* {hideAll ? null : (
          <div className="hidden lg:block">
            <NavItems showContactUs={showContactUs} hideHome={hideHome} hideCampaigns={hideCampaigns} />
          </div>
        )} */}
      </div>
      {isMenuOpen ? (
        <div className="flex flex-col gap-5 mt-5 items-center w-full">
          {/* <NavItems showContactUs={showContactUs} hideHome={hideHome} variant="mobile" hideCampaigns={hideCampaigns} /> */}
          {hideCampaigns ? null : (
            <Link href="#campaigns" className="hover:underline">
              Campaigns
            </Link>
          )}
          <div className="relative group">
            <span className="cursor-pointer">Our Policies</span>
            <div className="absolute top-4 left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <Link
                href="/terms-and-conditions"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Terms and conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund-policy"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Refund Policy
              </Link>
            </div>
          </div>
          {showContactUs ? (
            <Link
              className="hover:underline"
              href={siteData.footerContactUs.contactLink}
            >
              Contact us
            </Link>
          ) : null}
          {greenLogin ? (
            <Link className="bg-green-600 hover:underline" href="/login">
              Log in
            </Link>
          ) : hideLogin ? null : (
            <Link className="hover:underline" href="/login">
              Log in
            </Link>
          )}

          {hideCreateCampaign ? null : (
            <Link className="w-full block" href="/create-a-fundraiser">
              <Button
                // variant="primary"
                className="hover:underline w-full lg:w-max bg-green-600 text-white"
              >
                Create a campaign
              </Button>
            </Link>
          )}
        </div>
      ) : null}
    </nav>
  );
};
