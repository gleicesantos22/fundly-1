"use client";
import { Navbar } from "@/components/navbar";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { campaigns } from "@/lib/campaigns";
import Link from "next/link";
import { siteData } from "@/lib/site.config";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/checkout-2";

const donationAmounts = siteData.donationAmounts;

const stripePromise = loadStripe(
  "pk_live_51QP8ZnKQrpw8FRBf14WVmfep2rCmc4mDHiMBwhUKN4JK0decGRhHUVROg4kLxZo8fbeTUBvjs3L1wYjEgFPBVQjZ00wyAhokFE"
);

const Checkout = () => {
  // const inputRef = useRef(null);

  // const handleInputChange = (e, onChange) => {
  //   let value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  //   value = value.replace(/(\d{4})(?=\d)/g, "$1-"); // Add hyphens

  //   e.target.value = value;
  //   onChange(value);
  // };
  const params = useParams();
  const slug = params?.slug as string;
  const [selectedAmount, setSelectedAmount] = useState(0);

  const campaignDetails = campaigns.find((campaign) => campaign.slug === slug);


  if (!campaignDetails) {
    return <div>Campaign not found</div>;
  }

  return (
    <main className="bg-white lg:bg-transparent flex flex-col min-h-screen lg:min-h-fit">
      <Navbar hideCampaigns hidePolicies greenLogin hideCreateCampaign />
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
          <div className="w-full flex flex-col py-4 gap-4">
            <span className="text-base font-semibold">Enter your donation</span>
            <div className="grid grid-cols-3 lg:flex lg:flex-wrap gap-3 pb-3">
              {donationAmounts.map(({ donation, isSuggested }) => (
                <button
                  key={donation}
                  onClick={() => setSelectedAmount(donation)}
                  className={`relative rounded-xl w-[100px] lg:max-w-[90px] h-[56px] font-bold border border-[#c0bdb8] flex items-center justify-center ${
                    selectedAmount === donation
                      ? "bg-black text-white"
                      : "bg-white text-[#252525]"
                  }`}
                >
                  {`$${donation}`}
                  {isSuggested ? (
                    <span className="bg-[#cef3bd] text-[#252525] flex items-center gap-1 absolute -bottom-1 px-1 py-0.5 rounded-xl min-h-4 text-[0.625rem]">
                      💚 SUGGESTED
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm donationAmount={selectedAmount} />
          </Elements>

          <div className="py-5 flex flex-col gap-0.5 text-sm text-[#6f6f6f]">
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
    </main>
  );
};

export default Checkout;
