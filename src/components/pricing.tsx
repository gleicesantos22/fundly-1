import React from "react";

export const Pricing = () => {
  return (
    <section className="w-full flex justify-center py-[60px] bg-[#e6f6ef]">
      <div className="flex container flex-col gap-10 px-10 lg:px-0">
        <h2 className="text-3xl text-black font-semibold mb-[30px] lg:text-4xl">
          Fundraising for an{" "}
          <span className="text-green-600">individual/business</span>
        </h2>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-5 w-1/3">
            <span className="font-semibold text-base min-h-16">
              No fee to create a fundraiser
            </span>
            <div className="flex flex-col gap-28">
              <span className="font-bold text-5xl text-green-600">$0.00</span>
              <span className="pr-1">
                There’s no fee to start or manage your fundraiser.
              </span>
            </div>
          </div>

          {/* <div className="flex flex-col gap-5 lg:px-10 border-y py-10 lg:py-0 lg:border-x lg:border-y-0">
            <span className="font-semibold text-base min-h-16">
              Donor contributions to {siteData.name} are optional
            </span>
            <div className="flex flex-col gap-28">
              <span className="font-bold text-5xl text-green-600">$0.00</span>
              <span>
                Donors can help power {siteData.name} with an optional
                contribution, but it’s never required.
              </span>
            </div>
          </div> */}

          <div className="flex flex-col gap-5 w-1/3">
            <span className="font-semibold text-base min-h-16">
              One transaction fee
            </span>
            <div className="flex flex-col gap-28">
              <span className="font-bold text-5xl text-green-600">
                2.9% + $0.30
              </span>
              <span className="pr-1">
                As soon you receive a donation for your project, we will take
                this part of the payment.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
