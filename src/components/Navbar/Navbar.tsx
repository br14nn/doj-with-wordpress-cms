"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { BsList } from "react-icons/bs";
import { nanoid } from "nanoid";

import DojLogo from "@/assets/images/doj-logo.png";

import NavbarLinksWrapper from "./NavbarLinksWrapper";
import NavbarSearch from "./NavbarSearch";
import NavbarLink from "./NavbarLink";
import NavOpenButton from "./NavOpenButton";
import NavBackground from "./NavBackground";

interface INavbarProps {
  navbarLinks?: INavbarLink[];
}

export default function Navbar(props: INavbarProps) {
  const [navState, setNavState] = useState<"open" | "close">("close");

  return (
    <>
      <motion.nav
        animate={navState}
        className="fixed top-0 z-[980] flex h-[70px] w-full flex-row items-center justify-between bg-white px-12"
      >
        <Image className="h-fit w-[250px]" src={DojLogo} alt="logo" />
        <NavbarLinksWrapper onClickCloseNav={() => setNavState("close")}>
          {props.navbarLinks &&
            props.navbarLinks.map((link) => (
              <NavbarLink key={nanoid()} href={link.href}>
                {link.title}
              </NavbarLink>
            ))}
        </NavbarLinksWrapper>
        <NavbarSearch />
        <NavOpenButton onClick={() => setNavState("open")} />
        {navState === "open" && (
          <NavBackground onClick={() => setNavState("close")} />
        )}
      </motion.nav>
    </>
  );
}
