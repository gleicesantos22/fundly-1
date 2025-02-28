import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Online Fundraising Websites To Raise Money For Anything",
  description:
    "Raise money and accept donations online with a FREE fundraising website! Over $300M donated online with Fundly. Get started  today with your crowdfunding page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
