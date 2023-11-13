"use client";

import Image from "next/image";

import dropdownLinks from "@/utils/dropdownLinks";
import DojLogo from "@/assets/images/doj-logo.png";
import NavbarLink from "@/components/Navbar/NavbarLink";
import NavbarSearch from "@/components/Navbar/NavbarSearch";
import NavbarDropdown from "@/components/Navbar/NavbarDropdown/NavbarDropdown";
import MainLink from "@/components/Navbar/NavbarDropdown/MainLink";
import DropdownLinkGenerator from "@/components/Navbar/NavbarDropdown/DropdownLinkGenerator";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-[999] h-[70px] w-full bg-white px-12">
      <div className="flex h-full flex-row items-center justify-between">
        <Image
          className="max-w-[270px]"
          src={DojLogo}
          alt="logo"
          priority={true}
        />

        <div className="flex h-full flex-row items-center">
          <NavbarLink href="#">Home</NavbarLink>
          <NavbarDropdown>
            <MainLink className="peer/about">About</MainLink>
            <DropdownLinkGenerator
              className="peer/test peer-hover/about:flex"
              dropdownLinks={dropdownLinks}
            />
          </NavbarDropdown>
        </div>

        <NavbarSearch />
      </div>
    </nav>
  );
}
