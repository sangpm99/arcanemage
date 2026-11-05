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
      className={`inline-flex shrink-0 items-center gap-[calc(0.4*var(--u))] whitespace-nowrap rounded-[calc(0.5*var(--u))] border-[length:calc(0.12*var(--u))] px-[calc(0.7*var(--u))] py-[calc(0.3*var(--u))] text-[length:calc(1*var(--u))] font-medium shadow-[inset_0_0_calc(0.6*var(--u))_rgb(0_0_0/0.6)] ${className}`}
    >
      <img
        src={icon}
        alt=""
        className="h-[calc(1.3*var(--u))] w-[calc(1.3*var(--u))] object-contain"
      />
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
      className={`shine block rounded-[calc(0.7*var(--u))] border-[length:calc(0.08*var(--u))] border-black/70 p-[calc(0.4*var(--u))] transition-[background-color,box-shadow,filter] duration-200 ${
        active
          ? "shadow-[0_0_calc(1.2*var(--u))_rgb(251_191_36/0.6)] motion-safe:before:animate-[sweep_0.9s_ease-out]"
          : "shadow-[0_calc(0.2*var(--u))_calc(0.5*var(--u))_rgb(0_0_0/0.6)]"
      } ${className}`}
      style={{ backgroundColor: color.outer }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative block aspect-square w-full rounded-[calc(0.3*var(--u))] object-cover transition-shadow duration-200"
        style={{
          boxShadow: `0 0 calc(0.35*var(--u)) calc(0.12*var(--u)) ${color.inner}, 0 0 0 calc(0.06*var(--u)) ${color.inner}`,
        }}
      />
    </span>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <>
      <h3 className="mt-[calc(1.5*var(--u))] font-semibold text-amber-200">
        {title}
      </h3>
      <ul className="mt-[calc(0.5*var(--u))] space-y-[calc(0.4*var(--u))]">
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
  const el = c.element.color;
  const rise = (i: number) => ({ "--rise-i": i }) as React.CSSProperties;

  return (
    // --u: "đơn vị" kích thước của thẻ.
    // PC: 1cqw (co giãn theo khung 16:9) · tablet: 12px · mobile: 11px
    <div className="grid grid-cols-1 gap-[calc(1.5*var(--u))] p-[calc(2.5*var(--u))] text-[length:calc(1.15*var(--u))] text-slate-200 [--u:11px] max-lg:pt-[calc(3*var(--u))] md:grid-cols-[auto_1fr] md:[--u:12px] lg:h-full lg:grid-cols-[1fr_auto_1fr] lg:[--u:1cqw]">
      {/* Thông tin */}
      <section
        data-rise
        style={rise(0)}
        className="panel flex flex-col items-center md:col-span-2 lg:col-span-1 lg:overflow-y-auto"
      >
        {/* Avatar + vòng aura phía sau */}
        {/* mask: trên rõ (opacity 1) → dưới trong suốt (opacity 0), che phần aura và avatar lòi xuống */}
        <div className="relative grid aspect-square w-[calc(16*var(--u))] shrink-0 place-items-center [mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]">
          {/* Quầng sáng theo màu hệ */}
          <span
            aria-hidden
            className="absolute inset-[20%] rounded-full blur-[calc(2*var(--u))] motion-safe:animate-pulse-glow"
            style={{ backgroundColor: `${el}55` }}
          />
          <img
            src={img("aura.webp")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-90 motion-safe:animate-[spin_40s_linear_infinite]"
          />
          <img
            src={c.avatar}
            alt={c.name}
            className="relative h-[calc(12*var(--u))] w-auto drop-shadow-[0_calc(0.4*var(--u))_calc(0.8*var(--u))_rgb(0_0_0/0.7)] motion-safe:animate-float"
          />
        </div>

        {/* Tên */}
        <h2 className="mt-[calc(0.4*var(--u))] bg-linear-to-b from-[#fff3c8] to-[#e0a845] bg-clip-text text-center text-[length:calc(2.6*var(--u))] font-extrabold leading-tight text-transparent drop-shadow-[0_0_calc(0.6*var(--u))_rgb(245_180_70/0.45)]">
          {c.name}
        </h2>

        {/* Đường trang trí dưới tên */}
        <div className="mt-[calc(0.5*var(--u))] flex w-[70%] items-center gap-[calc(0.6*var(--u))]">
          <span className="h-[calc(0.1*var(--u))] flex-1 bg-linear-to-r from-transparent to-[#d9a441]" />
          <span className="size-[calc(0.6*var(--u))] rotate-45 bg-[#f5c46b] shadow-[0_0_calc(0.5*var(--u))_rgb(245_196_107/0.9)]" />
          <span className="h-[calc(0.1*var(--u))] flex-1 bg-linear-to-l from-transparent to-[#d9a441]" />
        </div>

        {/* Hệ */}
        <p
          className="mt-[calc(0.9*var(--u))] inline-flex items-center gap-[calc(0.5*var(--u))] rounded-[calc(0.6*var(--u))] border-[length:calc(0.08*var(--u))] bg-black/40 px-[calc(1.2*var(--u))] py-[calc(0.4*var(--u))]"
          style={{
            borderColor: `${el}66`,
            boxShadow: `0 0 calc(1*var(--u)) ${el}33, inset 0 calc(0.08*var(--u)) 0 rgb(255 255 255 / 0.08)`,
          }}
        >
          <img src={c.element.icon} alt="" className="h-[calc(1.4*var(--u))]" />
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
      <section
        data-rise
        style={rise(1)}
        className="panel self-start justify-self-center md:self-center"
      >
        <div className="swiper-no-swiping grid grid-cols-[repeat(3,calc(6.5*var(--u)))] gap-[calc(1.2*var(--u))]">
          {c.skills.map((s, i) => (
            <button
              key={s.id}
              type="button"
              title={s.name}
              aria-pressed={i === idx}
              onClick={() => setIdx(i)}
              className="group transition-transform hover:-translate-y-[calc(0.15*var(--u))]"
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
        <section data-rise style={rise(2)} className="panel">
          {/* key đổi theo kỹ năng → nội dung hiện dần mỗi lần chọn kỹ năng khác */}
          <div key={skill.id} className="motion-safe:animate-fade-in">
            <div className="flex items-center gap-[calc(1.2*var(--u))]">
              <SkillFrame
                src={skill.icon}
                alt={skill.name}
                active
                className="w-[calc(7*var(--u))] shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h3
                  title={skill.name}
                  className="truncate text-[length:calc(1.75*var(--u))] font-bold leading-tight text-amber-200"
                >
                  {skill.name}
                </h3>
                <div className="mt-[calc(0.6*var(--u))] flex flex-nowrap gap-[calc(0.6*var(--u))]">
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
            <p className="mt-[calc(1.2*var(--u))] leading-snug">{skill.desc}</p>
          </div>
        </section>
      )}
    </div>
  );
}
