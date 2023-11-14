import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";
import NavbarLink from "@/components/Navbar/NavbarLink";
import { nanoid } from "nanoid";

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
        <Navbar>
          {navbarLinks.map((link) => (
            <NavbarLink key={nanoid()} href={link.href}>
              {link.title}
            </NavbarLink>
          ))}
        </Navbar>
        {children}
      </body>
    </html>
  );
}
