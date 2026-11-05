"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Character } from "@/data";
import { ICONS, img } from "@/lib/cdn";

function StatChip({
  icon,
  label,
  value,
  className,
}: {
  icon: string;
  label: string;
  value: string;
  className: string;
}) {
  return (
    <span
      title={label}
      className={`inline-flex shrink-0 items-center gap-[0.4cqw] whitespace-nowrap rounded-[0.5cqw] border-[0.12cqw] px-[0.7cqw] py-[0.3cqw] text-[1cqw] font-medium shadow-[inset_0_0_0.6cqw_rgb(0_0_0/0.6)] ${className}`}
    >
      <img src={icon} alt="" className="h-[1.3cqw] w-[1.3cqw] object-contain" />
      {value}
    </span>
  );
}

/**
 * Ô icon kỹ năng có khung chuyển màu từ trong ra ngoài.
 * Cách làm: khung ngoài là màu tối (padding = độ dày khung), ảnh bên trong
 * có box-shadow màu sáng tỏa ra ngoài, bị khung cắt lại (overflow-hidden)
 * nên tạo thành dải gradient: sát ảnh sáng, ra mép ngoài tối dần.
 */
const FRAME_COLORS = {
  normal: { outer: "#2e1b12", inner: "#b48a64" }, // nâu đậm → nâu nhạt
  active: { outer: "#7a4a10", inner: "#ffe08a" }, // vàng đồng → vàng sáng
};

function SkillFrame({
  src,
  alt,
  active,
  className = "",
}: {
  src: string;
  alt: string;
  active: boolean;
  className?: string;
}) {
  const color = active ? FRAME_COLORS.active : FRAME_COLORS.normal;

  return (
    <span
      className={`block overflow-hidden rounded-[0.7cqw] border-[0.08cqw] border-black/70 p-[0.4cqw] transition-[background-color,box-shadow,filter] duration-200 ${
        active
          ? "shadow-[0_0_1.2cqw_rgb(251_191_36/0.6)]"
          : "shadow-[0_0.2cqw_0.5cqw_rgb(0_0_0/0.6)]"
      } ${className}`}
      style={{ backgroundColor: color.outer }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative block aspect-square w-full rounded-[0.3cqw] object-cover transition-shadow duration-200"
        style={{
          boxShadow: `0 0 0.35cqw 0.12cqw ${color.inner}, 0 0 0 0.06cqw ${color.inner}`,
        }}
      />
    </span>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <>
      <h3 className="mt-[1.5cqw] font-semibold text-amber-200">{title}</h3>
      <ul className="mt-[0.5cqw] space-y-[0.4cqw]">
        {items.map((item) => (
          <li key={item}>✦ {item}</li>
        ))}
      </ul>
    </>
  );
}

export default function CharacterCard({
  character: c,
}: {
  character: Character;
}) {
  const t = useTranslations("Character");
  const [idx, setIdx] = useState(0);
  const skill = c.skills[idx];

  return (
    <div className="grid h-full grid-cols-[1fr_auto_1fr] gap-[1.5cqw] p-[2.5cqw] text-[1.15cqw] text-slate-200">
      {/* Thông tin */}
      <section className="panel flex flex-col items-center overflow-y-auto">
        {/* Avatar + vòng aura phía sau */}
        {/* mask: trên rõ (opacity 1) → dưới trong suốt (opacity 0), che phần aura và avatar lòi xuống */}
        <div className="relative grid aspect-square w-[16cqw] shrink-0 place-items-center [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]">
          <img
            src={img("aura.webp")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-90 motion-safe:animate-[spin_40s_linear_infinite]"
          />
          <img
            src={c.avatar}
            alt={c.name}
            className="relative h-[12cqw] w-auto drop-shadow-[0_0.4cqw_0.8cqw_rgb(0_0_0/0.7)]"
          />
        </div>

        {/* Tên */}
        <h2 className="mt-[0.4cqw] bg-linear-to-b from-[#fff3c8] to-[#e0a845] bg-clip-text text-center text-[2.6cqw] font-extrabold leading-tight text-transparent drop-shadow-[0_0_0.6cqw_rgb(245_180_70/0.45)]">
          {c.name}
        </h2>

        {/* Đường trang trí dưới tên */}
        <div className="mt-[0.5cqw] flex w-[70%] items-center gap-[0.6cqw]">
          <span className="h-[0.1cqw] flex-1 bg-linear-to-r from-transparent to-[#d9a441]" />
          <span className="size-[0.6cqw] rotate-45 bg-[#f5c46b] shadow-[0_0_0.5cqw_rgb(245_196_107/0.9)]" />
          <span className="h-[0.1cqw] flex-1 bg-linear-to-l from-transparent to-[#d9a441]" />
        </div>

        {/* Hệ */}
        <p className="mt-[0.9cqw] inline-flex items-center gap-[0.5cqw] rounded-[0.6cqw] border-[0.08cqw] border-white/15 bg-black/40 px-[1.2cqw] py-[0.4cqw] shadow-[inset_0_0.08cqw_0_rgb(255_255_255/0.08)]">
          <img src={c.element.icon} alt="" className="h-[1.4cqw]" />
          {t("element")}:
          <span className="font-semibold" style={{ color: c.element.color }}>
            {c.element.name}
          </span>
        </p>

        {/* Đặc tính, buff: căn trái */}
        <div className="w-full">
          <InfoList title={t("traits")} items={c.traits} />
          <InfoList title={t("buffs")} items={c.buffs} />
        </div>
      </section>

      {/* Lưới kỹ năng */}
      <section className="panel self-center">
        <div className="swiper-no-swiping grid grid-cols-[repeat(3,6.5cqw)] gap-[1.2cqw]">
          {c.skills.map((s, i) => (
            <button
              key={s.id}
              type="button"
              title={s.name}
              aria-pressed={i === idx}
              onClick={() => setIdx(i)}
              className="group transition-transform hover:-translate-y-[0.15cqw]"
            >
              <SkillFrame
                src={s.icon}
                alt={s.name}
                active={i === idx}
                className={i === idx ? "" : "group-hover:brightness-125"}
              />
            </button>
          ))}
        </div>
      </section>

      {/* Chi tiết kỹ năng */}
      {skill && (
        <section className="panel">
          <div className="flex items-center gap-[1.2cqw]">
            <SkillFrame
              src={skill.icon}
              alt={skill.name}
              active
              className="w-[7cqw] shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h3
                title={skill.name}
                className="truncate text-[1.75cqw] font-bold leading-tight text-amber-200"
              >
                {skill.name}
              </h3>
              <div className="mt-[0.6cqw] flex flex-nowrap gap-[0.6cqw]">
                <StatChip
                  icon={ICONS.cooldown}
                  label={t("cooldown")}
                  value={`${t("cooldownShort")}: ${skill.cooldown}s`}
                  className="border-fuchsia-300/40 bg-fuchsia-950/70 text-fuchsia-100"
                />
                <StatChip
                  icon={ICONS.mana}
                  label={t("mana")}
                  value={`${t("mana")}: ${skill.mana}`}
                  className="border-sky-300/40 bg-sky-950/70 text-sky-100"
                />
              </div>
            </div>
          </div>
          <p className="mt-[1.2cqw] leading-snug">{skill.desc}</p>
        </section>
      )}
    </div>
  );
}
