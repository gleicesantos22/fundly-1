import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";
import { siteData } from "@/lib/site.config";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteData.name,
  description: siteData.description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: siteData.name,
    description: siteData.description,
    url: "https://quickfund.co",
    siteName: siteData.name,
    images: [
      {
        url: "https://quickfund.co/images/og-banner.webp",
        width: 1200,
        height: 630,
        alt: "QuickFund",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.description,
    images: ["https://quickfund.co/images/x-banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased lg:bg-[#f9f9f9]`}
      >
        {children}
      </body>
    </html>
  );
}
