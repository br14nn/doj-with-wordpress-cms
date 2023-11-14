import { twMerge } from "tailwind-merge";
import { nanoid } from "nanoid";

import DropdownLink from "./DropdownLink";

type TNavbarDropdownLinkWrapperProps = {
  className?: string;
  dropdownLinks: TDropdownLink[];
  children?: React.ReactNode;
};

export default function DropdownLinkWrapper({
  className,
  dropdownLinks,
  children,
}: TNavbarDropdownLinkWrapperProps) {
  return (
    <div
      className={twMerge(
        "bg-blue-whale absolute hidden w-[350px] flex-col hover:flex",
        className,
      )}
    >
      {dropdownLinks.map((link) => (
        <DropdownLink key={nanoid()}>{link.title}</DropdownLink>
      ))}
    </div>
  );
}
