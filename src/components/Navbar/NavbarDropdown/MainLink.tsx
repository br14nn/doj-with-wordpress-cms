import Link from "next/link";
import { twMerge } from "tailwind-merge";

import NavbarLink from "../NavbarLink";

type TMainLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function MainLink({ children, className }: TMainLinkProps) {
  return (
    <Link
      className={twMerge(
        "hover:bg-blue-whale flex h-full items-center bg-white px-4 text-xl text-gray-500 transition-colors duration-300 hover:text-white",
        className,
      )}
      href="#"
    >
      {children}
    </Link>
  );
}
