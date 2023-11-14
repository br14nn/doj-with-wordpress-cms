"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

type TNavbarLinkProps = {
  className?: string;
  id?: string;
  href: string;
  children?: React.ReactNode;
};

export default function NavbarLink({
  className,
  id,
  href,
  children = "Link",
}: TNavbarLinkProps) {
  return (
    <Link
      className={twMerge(
        "hover:bg-blue-whale flex h-full items-center bg-white px-4 text-xl text-gray-500 transition-colors duration-300 hover:text-white",
        className,
      )}
      id={id}
      href={href}
    >
      {children}
    </Link>
  );
}
