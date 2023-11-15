"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

type TNavbarLinkProps = {
  children?: React.ReactNode;
  className?: string;
  href: string;
};

export default function NavbarLink(props: TNavbarLinkProps) {
  return (
    <Link
      className={twMerge(
        "flex h-fit items-center bg-white px-8 py-4 text-gray-500 transition-colors duration-300 hover:bg-blue-whale hover:text-apache lg:h-full lg:px-4 lg:py-0 2xl:text-lg",
        props.className,
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
