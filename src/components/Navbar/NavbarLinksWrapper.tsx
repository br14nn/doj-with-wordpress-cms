"use client";

import { motion, Variants } from "framer-motion";
import { IconContext } from "react-icons";
import { BsXLg } from "react-icons/bs";

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
      className="fixed -right-full top-0 z-[999] flex h-screen w-1/2 flex-col bg-white py-4 lg:static lg:flex lg:h-full lg:w-fit lg:flex-row lg:items-center lg:px-0 lg:py-0"
    >
      <button
        className="mx-4 h-[32px] w-[32px] self-end lg:hidden"
        onClick={props.onClickCloseNav}
      >
        <IconContext.Provider value={{ size: "32px" }}>
          <BsXLg />
        </IconContext.Provider>
      </button>
      {props.children}
    </motion.div>
  );
}
