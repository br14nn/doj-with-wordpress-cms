import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/Navbar";

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
  return (
    <html lang="en">
      <body className={`${merriweather.className} bg-slate-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
