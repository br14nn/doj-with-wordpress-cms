import { useSwiper } from "swiper/react";

import { IconContext } from "react-icons";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export default function ImageSliderButtons() {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute bottom-0 right-4 top-0 z-[999] my-auto h-fit w-fit rounded p-2 transition-colors duration-300 hover:bg-blue-whale"
        onClick={() => swiper.slideNext()}
      >
        <IconContext.Provider value={{ size: "32px", color: "#ffffff" }}>
          <BsCaretRightFill />
        </IconContext.Provider>
      </button>
      <button
        className="absolute bottom-0 left-4 top-0 z-[999] my-auto h-fit w-fit rounded p-2 transition-colors duration-300 hover:bg-blue-whale"
        onClick={() => swiper.slidePrev()}
      >
        <IconContext.Provider value={{ size: "32px", color: "#ffffff" }}>
          <BsCaretLeftFill />
        </IconContext.Provider>
      </button>
    </>
  );
}
