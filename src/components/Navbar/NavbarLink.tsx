"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

interface INavbarLinkProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function NavbarLink(props: INavbarLinkProps) {
  return (
    <Link
      className={twMerge(
        "flex h-fit items-center bg-white px-4 py-4 text-gray-500 transition-colors duration-300 hover:bg-blue-whale hover:text-apache lg:h-full lg:py-0 2xl:text-lg",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
}
