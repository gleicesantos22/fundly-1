import { Facebook, Instagram, LucideMessageSquare } from "lucide-react";

export const siteData = {
  name: "QuickFund",
  logo: "/images/logo.svg",
  description:
    "QuickFund is dedicated to providing you with the tools you need to raise money for whatever your cause may be.",
  footerNavLinks: [
    { text: "Terms and Conditions", href: "/terms-and-conditions" },
    { text: "Refund policy", href: "refund-policy" },
    { text: "Privacy Policy", href: "privacy-policy" },
  ],
  footerSocialLinks: [
    { text: "Facebook", href: "", icon: Facebook },
    { text: "Instagram", href: "", icon: Instagram },
    { text: "Pinterest", href: "", icon: LucideMessageSquare },
  ],
  // add a new image in public > images folder and use the file name below - if filename is xyz.jpg then put "/images/xyz.jpg"
  heroImage: "/images/banner-min.jpg",

  heroTitle :"A Little Care Can Change the World",

  heroSubTitle: "For Individuals and charities. No startup fees. No hidden fees.",

  heroCTAText: "Start a Fundraise!",

  donationAmounts: [
    {
      donation: 25,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 50,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 100,
      isSuggested: true,
      // add stripe link
      href: "#"
    },
    {
      donation: 300,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 500,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 750,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 1000,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 1500,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
    {
      donation: 2000,
      isSuggested: false,
      // add stripe link
      href: "#"
    },
  ],
};
