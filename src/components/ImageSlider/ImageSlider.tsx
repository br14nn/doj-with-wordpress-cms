"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import ImageSliderButtons from "./ImageSliderButtons";
import ImageSlide from "./ImageSlide";

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="relative w-full"
    >
      <SwiperSlide>
        <ImageSlide>Image 1</ImageSlide>
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlide>Image 2</ImageSlide>
      </SwiperSlide>
      <SwiperSlide>
        <ImageSlide>Image 3</ImageSlide>
      </SwiperSlide>
      <ImageSliderButtons />
    </Swiper>
  );
}
