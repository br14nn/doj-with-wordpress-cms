import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface TCustomNewsCardCustomLinkProps {
  className?: string;
  href: string;
  children?: string;
}

export default function CustomNewsCardCustomLink(
  props: TCustomNewsCardCustomLinkProps,
) {
  return (
    <Link
      className={twMerge(
        "absolute bottom-0 left-0 right-0 top-0 m-auto flex h-8 w-fit items-center justify-center border-2 border-white px-2 font-semibold leading-none text-white opacity-0 transition-all duration-300 hover:bg-white hover:text-black group-hover/news:opacity-100",
        props.className,
      )}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
