"use client";
import { Navbar } from "@/components/navbar";
import React from "react";
import { useParams } from "next/navigation";
import { campaigns } from "@/lib/campaigns";
import Link from "next/link";
import { siteData } from "@/lib/site.config";
import { Footer } from "@/components/footer";

const donationAmounts = siteData.donationAmounts;

const Checkout = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const campaignDetails = campaigns.find((campaign) => campaign.slug === slug);

  if (!campaignDetails) {
    return <div>Campaign not found</div>;
  }

  return (
    <main className="bg-white lg:bg-transparent flex flex-col min-h-screen lg:min-h-fit">
      <Navbar hideCampaigns={true} centerLogo={true} hideAll />
      <div className="flex justify-center w-full py-[86px] lg:py-20 pb-20 lg:pb-20">
        <div className="rounded-[2.5rem] px-4 py-0 lg:p-12 max-w-[700px] bg-white flex flex-col">
          <div className="flex flex-col">
            <div className="text-base font-semibold">
              <span className="font-normal">You’re supporting:</span>{" "}
              {campaignDetails.title}
            </div>
            <div className="text-[0.875rem] text-[#6f6f6f]">
              Your donation will benefit:{" "}
              <span className="font-bold text-[#333333]">
                {campaignDetails.organizer.name}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col border-b py-4 gap-4">
            <span className="text-base font-semibold">Enter your donation</span>
            <div className="grid grid-cols-3 lg:flex lg:flex-wrap gap-3 pb-3">
              {donationAmounts.map(({ donation, isSuggested, href }) => (
                <Link key={donation} href={href} className="block">
                  <button className="relative text-[#252525] rounded-xl w-[100px] lg:max-w-[90px] h-[56px] font-bold border border-[#c0bdb8] flex items-center justify-center">
                    {`$${donation}`}
                    {isSuggested ? (
                      <span className="bg-[#cef3bd] flex items-center gap-1 absolute -bottom-1 px-1 py-0.5 rounded-xl min-h-4 text-[0.625rem]">
                        💚 SUGGESTED
                      </span>
                    ) : null}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="py-5 border-y flex flex-col gap-0.5 text-sm text-[#6f6f6f]">
            <span>
              {`By choosing the payment method above, you agree to the ${siteData.name}`}{" "}
              <Link className="underline" href="/terms-and-conditions">
                {" "}
                Terms of Service
              </Link>
            </span>
            <span>
              and acknowledge the{" "}
              <Link className="underline" href="/privacy-policy">
                Privacy Notice.
              </Link>
            </span>{" "}
            <span>
              Learn more about{" "}
              <Link className="underline" href="/refund-policy">
                {" "}
                Refund policy.
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Footer hideSiteInfo />
      </div>
      <div className="hidden lg:block">
        <Footer />
      </div>
    </main>
  );
};

export default Checkout;
