"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import ImageSliderButtons from "./ImageSliderButtons";

export default function ImageSlider() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-[400px] w-full 3xl:h-[800px]"
    >
      <SwiperSlide className="bg-red-500 ">Image 1</SwiperSlide>
      <SwiperSlide className="bg-green-500">Image 2</SwiperSlide>
      <SwiperSlide className="bg-blue-500">Image 3</SwiperSlide>
    </Swiper>
  );
}
