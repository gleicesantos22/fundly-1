"use client";
import { Description } from "@/components/fundraiser-page/description";
import { Donations } from "@/components/fundraiser-page/donations";
import { Organizer } from "@/components/fundraiser-page/organizer";
import { ProgressMeter } from "@/components/fundraiser-page/progress-meter";
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
  return (
    <div className="flex gap-6 container mt-6">
      <div className="basis-full lg:basis-2/3">
        <Image
          className="rounded-lg hidden lg:block"
          width={720}
          height={405}
          alt=""
          src={campaignDetails.image}
        />
        <div className="w-full flex items-center gap-4 py-6 text-sm">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt=""
            src={campaignDetails.organizer.avatar}
          />
          <p>{`${campaignDetails.organizer.name} is organizing this fundraiser.`}</p>
        </div>
        <div className="w-full flex justify-start py-4 border-y border-gray">
          <div className="text-[#008748] text-sm font-bold bg-[#cef3bd] inline-flex items-center gap-1 border border-[#008748] rounded-lg px-2 py-0.5">
            <ShieldCheck width={16} height={16} />
            <span>Donation protected</span>
          </div>
        </div>
        <Description description={campaignDetails.description} />
        <div className="flex flex-col gap-4 pt-6 border-t lg:hidden">
          <h2 className="text-xl font-semibold">
            Donations (
            <span className="underline">{campaignDetails.totalDonations}</span>)
          </h2>
          <Donations campaignDetails={campaignDetails} />
        </div>
        <Organizer />

        <div className="flex items-center gap-1 py-4 border-b">
          <span className="text-base">{campaignDetails.date}</span>·
          <span className="underline">{campaignDetails.category}</span>
        </div>
      </div>
      <div className="basis-1/3 min-h-full relative hidden lg:block">
        <div className="sticky top-4 w-full p-6 border rounded-2xl hidden shadow-[0_.3125rem_1rem_-.1875rem_#0003] lg:block">
          <div className="w-full mt-1 mb-0">
            <ProgressMeter
              goalAmount={campaignDetails.goal}
              raisedAmount={campaignDetails.raised}
            />
          </div>
          <Link href={`/checkout/${campaignDetails.slug}`}>
            <Button className="w-full mt-5 bg-black text-white">
              Donate now
            </Button>
          </Link>
          <Donations campaignDetails={campaignDetails} />
        </div>
      </div>
    </div>
  );
};
