"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Character } from "@/data";

import CharacterCard from "@/components/CharacterCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type GalleryProps = {
  items: Character[];
};

export default function Gallery({ items }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="w-full">
      {/* Khung lớn */}
      <div
        className="@container relative mb-3 aspect-[1672/941] w-full overflow-hidden rounded-lg bg-cover bg-center"
        style={{ backgroundImage: "url(/character-background-slide.webp)" }}
      >
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="h-full [--swiper-navigation-color:#fbbf24] [--swiper-navigation-size:28px]"
        >
          {items.map((c) => (
            <SwiperSlide key={c.id} className="h-full">
              <CharacterCard character={c} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hàng thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        spaceBetween={8}
        slidesPerView={12}
        freeMode
        watchSlidesProgress
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="cursor-pointer overflow-hidden rounded opacity-40 transition-opacity hover:opacity-80 [&.swiper-slide-thumb-active]:opacity-100 [&.swiper-slide-thumb-active]:ring-2 [&.swiper-slide-thumb-active]:ring-amber-400 [&.swiper-slide-thumb-active]:ring-inset"
          >
            <img
              src={item.portrait}
              alt={item.name}
              className="aspect-square w-full bg-gray-500 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
