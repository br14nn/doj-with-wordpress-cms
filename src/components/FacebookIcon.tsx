"use client";

import { IconContext } from "react-icons";
import { BsFacebook } from "react-icons/bs";

export default function FacebookIcon() {
  return (
    <IconContext.Provider value={{ size: "32px" }}>
      <BsFacebook />
    </IconContext.Provider>
  );
}
