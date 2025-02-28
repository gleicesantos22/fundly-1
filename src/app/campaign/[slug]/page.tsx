"use client";
import { Footer } from "@/components/footer";
import { Details } from "@/components/fundraiser-page/details";
import { Features } from "@/components/fundraiser-page/features";
import { ProgressMeter } from "@/components/fundraiser-page/progress-meter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import { campaigns } from "@/lib/campaigns";
import { Navbar } from "@/components/navbar";
import Link from "next/link";

const FundraiserDetails = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const campaignDetails = campaigns.find((campaign) => campaign.slug === slug);

  if (!campaignDetails) {
    return <div>Campaign not found</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      {/* <Navbar />  */}
      <Navbar hideCampaigns={true} />
      <div className="w-full pt-32">
        <div className="flex flex-col items-center px-4">
          <div className="py-4 pb-2 lg:hidden">
            <Image
              className="rounded-lg"
              width={720}
              height={405}
              alt=""
              src={campaignDetails.image}
            />
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-semibold">{campaignDetails.title}</h1>
          </div>
          <div className="w-full border rounded-lg mt-1 mb-3 p-4 lg:hidden">
            <ProgressMeter
              goalAmount={campaignDetails.goal}
              raisedAmount={campaignDetails.raised}
            />
          </div>
          <Link className="w-full" href={`/checkout/${campaignDetails.slug}`}>
            <Button className="w-full bg-black text-white lg:hidden">
              Donate now
            </Button>
          </Link>
          <Details campaignDetails={campaignDetails} />
        </div>
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FundraiserDetails;
