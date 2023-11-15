"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { nanoid } from "nanoid";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

import ImageSliderButtons from "./ImageSliderButtons";
import ImageSlide from "./ImageSlide";
import fetchImageSlidersPosts from "@/libs/fetchers/fetchImageSlidersPosts";

type TPosts = {
  data: any[];
  ok: boolean;
};

export default function ImageSlider() {
  const [posts, setPosts] = useState<TPosts>();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetchImageSlidersPosts();

    setPosts(res);
  }

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
      {posts?.data.map((post) => (
        <SwiperSlide key={nanoid()}>
          <ImageSlide
            src={
              post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
                "full"
              ].source_url
            }
            alt={post._embedded["wp:featuredmedia"][0].alt_text}
            width={
              post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
                "full"
              ].width
            }
            height={
              post._embedded["wp:featuredmedia"][0]["media_details"]["sizes"][
                "full"
              ].height
            }
          />
        </SwiperSlide>
      ))}

      <ImageSliderButtons />
    </Swiper>
  );
}
