"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

type TNavbarLinkProps = {
  className?: string;
  id?: string;
  href?: string;
  children?: React.ReactNode;
};

export default function NavbarLink({
  className,
  id,
  href = "#",
  children = "Link",
}: TNavbarLinkProps) {
  return (
    <Link
      className={twMerge(
        "flex h-fit items-center bg-white px-4 py-4 text-lg text-gray-500 transition-colors duration-300 hover:bg-blue-whale hover:text-white lg:h-full lg:py-0",
        className,
      )}
      id={id}
      href={href}
    >
      {children}
    </Link>
  );
}
