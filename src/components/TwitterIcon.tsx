"use client";

import { IconContext } from "react-icons";
import { BsTwitter } from "react-icons/bs";

export default function TwitterIcon() {
  return (
    <IconContext.Provider value={{ size: "32px" }}>
      <BsTwitter />
    </IconContext.Provider>
  );
}
