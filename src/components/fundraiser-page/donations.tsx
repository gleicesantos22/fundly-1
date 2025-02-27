"use client"
import { campaigns } from "@/lib/campaigns";
import { ChartColumnIncreasing, HandHeart } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Donations = ({
  campaignDetails,
}: {
  campaignDetails: (typeof campaigns)[0];
}) => {
  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="flex items-center gap-4">
        <span className="rounded-full text-[#252525] p-2 bg-[#cef3bd]">
          <ChartColumnIncreasing strokeWidth={1.5} width={24} height={24} />
        </span>
        <p className="text-base font-bold text-[#02a95c]">
          {campaignDetails.totalRecentDonations} people just donated
        </p>
      </div>

      <div className="flex items-center gap-4">
        {campaignDetails.recentDonation.avatar ? (
          <Image
            width={40}
            height={40}
            src={campaignDetails.recentDonation.avatar}
            alt=""
          />
        ) : (
          <span className="rounded-full p-2 bg-[#f4f2ec] text-[#252525]">
            <HandHeart strokeWidth="1.5" width={24} height={24} />
          </span>
        )}
        <div className="flex flex-col gap-1">
          <span>{campaignDetails.recentDonation.name}</span>
          <div className="flex gap-2 itmes-center">
            <span className="text-sm font-bold">{`$${campaignDetails.recentDonation.amount}`}</span>
            ·<span className="text-sm underline">Recent donation</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {campaignDetails.topDonation.avatar ? (
          <Image
            width={40}
            height={40}
            src={campaignDetails.topDonation.avatar}
            alt=""
          />
        ) : (
          <span className="rounded-full p-2 bg-[#f4f2ec] text-[#252525]">
            <HandHeart strokeWidth="1.5" width={24} height={24} />
          </span>
        )}
        <div className="flex flex-col gap-1">
          <span>{campaignDetails.topDonation.name}</span>
          <div className="flex gap-2 itmes-center">
            <span className="text-sm font-bold">{`$${campaignDetails.topDonation.amount}`}</span>
            ·<span className="text-sm underline">Top donation</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {campaignDetails.firstDonation.avatar ? (
          <Image
            width={40}
            height={40}
            src={campaignDetails.firstDonation.avatar}
            alt=""
          />
        ) : (
          <span className="rounded-full p-2 bg-[#f4f2ec] text-[#252525]">
            <HandHeart strokeWidth="1.5" width={24} height={24} />
          </span>
        )}
        <div className="flex flex-col gap-1">
          <span>{campaignDetails.firstDonation.name}</span>
          <div className="flex gap-2 itmes-center">
            <span className="text-sm font-bold">{`$${campaignDetails.firstDonation.amount}`}</span>
            ·<span className="text-sm underline">First donation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
