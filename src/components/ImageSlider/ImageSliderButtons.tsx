import { useSwiper } from "swiper/react";

import { IconContext } from "react-icons";
import { BsCaretRight } from "react-icons/bs";

export default function ImageSliderButtons() {
  const swiper = useSwiper();

  return (
    <div className="index-[999] absolute w-full bg-black">
      <button
        className="h-[32px] w-[32px] bg-black"
        onClick={() => swiper.slideNext()}
      >
        <BsCaretRight />
      </button>
    </div>
  );
}
