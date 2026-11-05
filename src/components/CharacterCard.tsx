"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Character } from "@/data";
import { ICONS } from "@/lib/cdn";

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
    <div className="grid h-full grid-cols-[1fr_0.8fr_1fr] gap-[1.5cqw] p-[2.5cqw] text-[1.15cqw] text-slate-200">
      {/* Thông tin */}
      <section className="panel">
        <img src={c.avatar} alt={c.name} className="h-[12cqw] w-auto" />
        <h2 className="mt-[1cqw] text-[2.4cqw] font-bold text-amber-200">
          {c.name}
        </h2>
        <p className="mt-[0.5cqw] flex items-center gap-[0.5cqw]">
          {t("element")}:
          <img src={c.element.icon} alt="" className="h-[1.4cqw]" />
          <span style={{ color: c.element.color }}>{c.element.name}</span>
        </p>
        <InfoList title={t("traits")} items={c.traits} />
        <InfoList title={t("buffs")} items={c.buffs} />
      </section>

      {/* Lưới kỹ năng */}
      <section className="panel">
        <div className="swiper-no-swiping grid grid-cols-3 gap-[1.2cqw]">
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
