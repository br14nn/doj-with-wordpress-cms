"use client";

type TNavbarDropdownLinkProps = {
  children?: React.ReactNode;
};

export default function NavbarDropdown({ children }: TNavbarDropdownLinkProps) {
  return <div className="relative h-full">{children}</div>;
}
