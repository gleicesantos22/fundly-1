"use client";
import { Description } from "@/components/fundraiser-page/description";
import { Donations } from "@/components/fundraiser-page/donations";
import { Organizer } from "@/components/fundraiser-page/organizer";
import { ProgressMeterV2 } from "@/components/fundraiser-page/progress-meter";
import { Button } from "@/components/ui/button";
import { campaigns } from "@/lib/campaigns";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Details = ({
  campaignDetails,
}: {
  campaignDetails: (typeof campaigns)[0];
}) => {
  const separatedName = campaignDetails.organizer.name.split(" ");
  const initials = !separatedName?.length
    ? "A"
    : separatedName?.reduce((name, ac) => ac + name[0], "");
  return (
    <div className="flex gap-6 container mt-0 lg:mt-6">
      <div className="bg-white rounded-2xl basis-full lg:basis-2/3 shadow-[0_.3125rem_1rem_-.1875rem_#0003]">
        <Image
          className="rounded-t-2xl w-full hidden lg:block lg:mb-4"
          width={720}
          height={405}
          alt=""
          src={campaignDetails.image}
        />
        {/* <div className="pl-5 w-full flex items-center gap-4 py-6 text-sm">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt=""
            src={campaignDetails.organizer.avatar}
          />
          <p>{`${campaignDetails.organizer.name} is organizing this fundraiser.`}</p>
        </div> */}
        <div className="lg:px-5 w-full flex justify-start py-4 mt-4 border-y border-gray">
          <div className="text-green-600 text-sm font-bold bg-[#cef3bd] inline-flex items-center gap-1 border border-green-600 rounded-lg px-2 py-0.5">
            <ShieldCheck width={16} height={16} />
            <span>Donation protected</span>
          </div>
        </div>
        <Description description={campaignDetails.description} />
        <div className="flex flex-col gap-0 lg:gap-4 pt-6 border-t lg:hidden">
          <h2 className="text-xl font-semibold">
            Donations (
            <span className="underline">{campaignDetails.totalDonations}</span>)
          </h2>
          <Donations campaignDetails={campaignDetails} />
        </div>
        <Organizer organizer={campaignDetails.organizer} />

        <div className="flex lg:pl-5 items-center gap-1 py-4">
          <span className="text-base">{campaignDetails.date}</span>·
          <span className="underline">{campaignDetails.category}</span>
        </div>
      </div>

      <div className="basis-1/3 min-h-full relative hidden lg:block">
        <div className="sticky top-24 w-full p-6 border bg-white rounded-2xl hidden shadow-[0_.3125rem_1rem_-.1875rem_#0003] lg:block">
          <div className="w-full mt-1 mb-0">
            <ProgressMeterV2
              goalAmount={campaignDetails.goal}
              raisedAmount={campaignDetails.raised}
            />
          </div>
          <Link className="w-full" href={`/checkout/${campaignDetails.slug}`}>
            <Button className="mt-5" variant="primary" size="full">
              Donate now
            </Button>
          </Link>
          {/* <Donations campaignDetails={campaignDetails} /> */}
          <div className="pt-2 lg:mt-4 border-t flex flex-col">
            <div className="flex items-center gap-4">
              {campaignDetails.organizer.avatar ? (
                <Image
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt=""
                  src={campaignDetails.organizer.avatar}
                />
              ) : (
                <span className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center font-bold border text-white">
                  {initials}
                </span>
              )}
              <div className="inline-flex flex-col">
                <span className="font-semibold">
                  {campaignDetails.organizer.name}
                </span>
                <span>{campaignDetails.organizer.location}</span>
              </div>
            </div>
            {/* <div>2,930 donations</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
