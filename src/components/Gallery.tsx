"use client";

import { useRef, useState } from "react";
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
  const stageRef = useRef<HTMLDivElement>(null);
  const glowColor = items[active]?.element.color ?? "#f5c46b";

  return (
    <div className="w-full">
      {/* ===== Sân khấu lớn ===== */}
      <div ref={stageRef} className="stage-frame scroll-mt-24">
        {CORNERS.map((pos) => (
          <span key={pos} className={`stage-corner ${pos}`} />
        ))}

        {/* PC: khung 16:9 cố định · mobile/tablet: cao theo nội dung thẻ */}
        <div className="@container relative w-full overflow-hidden rounded-[18px] lg:aspect-[1672/941]">
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
            autoHeight
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            onSlideChange={(s) => {
              setActive(s.activeIndex);
              // Mobile/tablet: thẻ dài, nếu đầu thẻ đã cuộn khỏi màn hình
              // thì đưa người xem về đầu thẻ nhân vật mới
              const stage = stageRef.current;
              if (
                stage &&
                window.innerWidth < 1024 &&
                stage.getBoundingClientRect().top < 0
              ) {
                stage.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                  ).matches
                    ? "auto"
                    : "smooth",
                  block: "start",
                });
              }
            }}
            className="stage-nav relative lg:!absolute lg:inset-0 lg:h-full"
          >
            {items.map((c) => (
              <SwiperSlide key={c.id} className="lg:!h-full">
                <CharacterCard character={c} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ===== Hàng thumbnail =====
          Mobile/tablet: dính ở đáy màn hình để đổi nhân vật khi đang đọc giữa thẻ */}
      <div className="thumb-rail z-30 mt-8 max-lg:sticky max-lg:bottom-3 max-lg:shadow-[0_-12px_30px_rgb(8_5_18/0.85),0_0_14px_rgb(245_180_70/0.25),inset_0_0_0_4px_rgb(17_11_32/0.95),inset_0_0_0_5px_rgb(217_164_65/0.3)]">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Thumbs]}
          spaceBetween={8}
          slidesPerView={4.5}
          breakpoints={{
            420: { slidesPerView: 5.5 },
            560: { slidesPerView: 7 },
            768: { slidesPerView: 9, spaceBetween: 10 },
            1024: { slidesPerView: 12, spaceBetween: 10 },
          }}
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
