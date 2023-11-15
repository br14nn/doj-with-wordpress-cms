import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { BsTwitter, BsFacebook } from "react-icons/bs";

import Navbar from "@/components/Navbar/Navbar";
import { IconContext } from "react-icons";
import TwitterIcon from "@/components/TwitterIcon";
import FacebookIcon from "@/components/FacebookIcon";

const merriweather = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Welcome to the Department of Justice",
  description: "Department of Justice Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarLinks = [
    {
      href: "#",
      title: "Home",
    },
    {
      href: "#",
      title: "About",
    },
    {
      href: "#",
      title: "News",
    },
    {
      href: "#",
      title: "Programs",
    },
    {
      href: "#",
      title: "Resources",
    },
    {
      href: "#",
      title: "Careers",
    },
    {
      href: "#",
      title: "Contact Us",
    },
  ];

  return (
    <html lang="en">
      <body className={`${merriweather.className} bg-slate-100`}>
        <Navbar navbarLinks={navbarLinks} />

        {children}

        <footer className="flex w-full flex-row items-center justify-between bg-gray-400 p-5">
          <p className="leading-none">
            © 2018 Department of Justice. All Rights Reserved :: Sitemap :: DOJ
            Action Center - Email: dojac@doj.gov.ph
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <TwitterIcon />
            <FacebookIcon />
          </div>
        </footer>
      </body>
    </html>
  );
}
