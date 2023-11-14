"use client";

import { motion, Variants } from "framer-motion";
import { IconContext } from "react-icons";
import { BsXLg } from "react-icons/bs";
import NavCloseButton from "./NavCloseButton";

interface INavbarLinksWrapper {
  children?: React.ReactNode;
  onClickCloseNav: React.MouseEventHandler;
}

const variants: Variants = {
  close: {
    right: "-100%",
  },
  open: {
    right: "0%",
  },
};

export default function NavbarLinksWrapper(props: INavbarLinksWrapper) {
  return (
    <motion.div
      variants={variants}
      className="fixed -right-full top-0 z-[999] flex h-screen w-full flex-col bg-white py-4 sm:w-1/2 lg:static lg:flex lg:h-full lg:w-fit lg:flex-row lg:items-center lg:px-0 lg:py-0"
    >
      <NavCloseButton onClick={props.onClickCloseNav} />
      {props.children}
    </motion.div>
  );
}
