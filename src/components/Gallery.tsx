"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  FreeMode,
  Keyboard,
  Navigation,
  Thumbs,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import type { Character } from "@/data";

import CharacterCard from "@/components/CharacterCard";

import { img } from "@/lib/cdn";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type GalleryProps = {
  items: Character[];
};

const CORNERS = [
  "left-2 top-2",
  "right-2 top-2 rotate-90",
  "right-2 bottom-2 rotate-180",
  "left-2 bottom-2 -rotate-90",
];

export default function Gallery({ items }: GalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [active, setActive] = useState(0);
  const glowColor = items[active]?.element.color ?? "#f5c46b";

  return (
    <div className="w-full">
      {/* ===== Sân khấu lớn ===== */}
      <div className="stage-frame">
        {CORNERS.map((pos) => (
          <span key={pos} className={`stage-corner ${pos}`} />
        ))}

        <div className="@container relative aspect-[1672/941] w-full overflow-hidden rounded-[18px]">
          {/* Ảnh nền, zoom chậm qua lại */}
          <div
            className="absolute inset-0 bg-cover bg-center motion-safe:animate-ken-burns"
            style={{
              backgroundImage: `url("${img("character-background-slide.webp")}")`,
            }}
          />
          {/* Quầng sáng ma pháp ở chân sân khấu, đổi màu theo hệ nhân vật */}
          <div
            className="pointer-events-none absolute bottom-[-18%] left-1/2 h-[55%] w-[70%] -translate-x-1/2 rounded-full blur-3xl transition-[background-color] duration-700 motion-safe:animate-pulse-glow"
            style={{ backgroundColor: `${glowColor}40` }}
          />
          {/* Viền tối quanh sân khấu */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgb(8_5_18/0.75)_100%)]" />

          <Swiper
            modules={[Navigation, Thumbs, EffectFade, Keyboard]}
            navigation
            keyboard={{ enabled: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(s) => setActive(s.activeIndex)}
            className="stage-nav !absolute inset-0 h-full"
          >
            {items.map((c) => (
              <SwiperSlide key={c.id} className="h-full">
                <CharacterCard character={c} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ===== Hàng thumbnail ===== */}
      <div className="thumb-rail mt-8">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          spaceBetween={10}
          slidesPerView={12}
          freeMode
          watchSlidesProgress
          // chừa chỗ để quầng sáng của ô active không bị cắt
          className="!px-1 !py-2"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="thumb-glass shine">
              <img
                src={item.portrait}
                alt={item.name}
                className="aspect-square w-full object-cover"
              />
              {/* Icon hệ ở góc */}
              <span
                className="absolute bottom-1 right-1 z-[3] grid size-5 place-items-center rounded-full border bg-[#120b22]/90"
                style={{ borderColor: `${item.element.color}99` }}
              >
                <img
                  src={item.element.icon}
                  alt={item.element.name}
                  className="size-3 object-contain"
                />
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
