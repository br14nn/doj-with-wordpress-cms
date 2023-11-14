"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";

import DojLogo from "@/assets/images/doj-logo.png";

import NavbarLinksWrapper from "./NavbarLinksWrapper";
import NavbarSearch from "./NavbarSearch";

type TNavbarProps = {
  children: React.ReactNode;
};

export default function Navbar({ children }: TNavbarProps) {
  const [navState, setNavState] = useState<"open" | "close">("close");

  return (
    <motion.nav
      animate={navState}
      className="fixed top-0 z-[999] flex h-[70px] w-full flex-row items-center justify-between bg-white px-12"
    >
      <Image className="h-fit w-[250px]" src={DojLogo} alt="logo" />
      <NavbarLinksWrapper onClickCloseNav={() => setNavState("close")}>
        {children}
      </NavbarLinksWrapper>
      <NavbarSearch />
      <button
        className="block h-[32px] w-[32px] lg:hidden"
        onClick={() =>
          navState === "close" ? setNavState("open") : setNavState("close")
        }
      >
        <IconContext.Provider value={{ size: "32px" }}>
          <BsList />
        </IconContext.Provider>
      </button>
    </motion.nav>
  );
}
