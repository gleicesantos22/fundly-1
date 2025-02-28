"use client";
import { Progress } from "@/components/ui/progress";
import { campaigns } from "@/lib/campaigns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const campaigns = [
//   {
//     name: "Sudani Refugee Relief",
//     image:
//       "https://images.fundly.com/uploads/d6e8b679-1590-47d8-908f-1c1b2b304e0e.png?h=275",
//     raised: 9188,
//     goal: 10000,
//     location: "Oakland, CA",
//     cause: "Disaster Relief",
//   },
//   {
//     name: "Mike & Amy McClenahan Retirement Fund",
//     image:
//       "https://images.fundly.com/uploads/6c664359-6621-4195-a814-f914a84b3fb0.jpeg?h=275",
//     raised: 5675,
//     goal: 10000,
//     location: "Solana Beach, CA",
//     cause: "Trips & Adventures",
//   },
//   {
//     name: "Health Expenses",
//     image:
//       "https://images.fundly.com/uploads/21a29006-ef9c-45f5-a6bf-20146cdbd292.jpg?h=275",
//     raised: 460,
//     goal: 2000,
//     location: "Hockley, TX",
//     cause: "Medical & Health",
//   },
// ];

export const TrendingCampaigns = () => {
  return (
    <section
      // id="campaigns"
      className="scroll-pt-20 w-full flex justify-center bg-[#f4f4f4] py-[70px] text-main-text"
    >
      <div id="campaigns" className="w-full max-w-[1140px] flex flex-col">
        <div className="flex flex-col text-center items-center gap-4 lg:flex-row lg:justify-between">
          <h5 className="text-5xl lg:text-[64px]">Trending Campaigns</h5>
        </div>
        <div className="w-full grid md:grid-cols-3 pt-12 px-2 gap-7 lg:flex-row">
          {campaigns.map((campaign, idx) => (
            <CampaignCard
              key={campaign.title + idx}
              {...campaign}
              // location={campaign.organizer.location}
            />
          ))}
        </div>
      </div>
      ˝
    </section>
  );
};

function formatRaisedFund(raisedFund: number): string {
  return raisedFund.toLocaleString();
}

function CampaignCard({
  title,
  image,
  raised,
  goal,
  // location,
  // category,
  slug,
}: {
  title: string;
  image: string;
  raised: number;
  goal: number;
  // location: string;
  // category: string;
  slug: string;
}) {
  const progress = Math.ceil((raised * 100) / goal);
  return (
    <Link href={`/campaign/${slug}`}>
      <article className="p-3 flex flex-col gap-3 bg-white basis-full rounded-lg lg:basis-1/3 hover:shadow-[4px_4px_10px_0px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col gap-2">
          <Image
            className="rounded-lg"
            width={720}
            height={405}
            alt=""
            src={image}
          />
          <h6 className="text-lg text-left font-semibold">{title}</h6>
        </div>
        <div className="flex gap-2 flex-col">
          <div>
            <Progress value={progress} />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold">{`$${formatRaisedFund(
              raised
            )}`}</span>
            <span className="text-sm">{`${progress}%`}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
