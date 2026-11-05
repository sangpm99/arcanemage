"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Feature } from "@/data/features-view";
import { FeatureIcon, TONE_CLASS } from "./FeatureIcon";

const CATEGORY_ICON = { worldEvent: "calendar", pve: "swords" } as const;

/** Ảnh minh họa bên trái. Chưa có ảnh trên R2 → cảnh thay thế theo theme. */
function FeatureMedia({ feature }: { feature: Feature }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === feature.image;

  return (
    <div className="feature-media relative aspect-[16/9] overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[300px]">
      {failed ? (
        <div
          role="img"
          aria-label={feature.title}
          className={`absolute inset-0 ${feature.theme === "blood" ? "feature-scene-blood" : "feature-scene-arcane"}`}
        >
          <FeatureIcon
            name={feature.icon}
            className={`absolute left-1/2 top-1/2 size-[30%] max-w-32 -translate-x-1/2 -translate-y-1/2 opacity-80 drop-shadow-[0_0_18px_currentColor] ${feature.theme === "blood" ? "text-rose-300" : "text-violet-200"}`}
          />
        </div>
      ) : (
        <img
          src={feature.image}
          alt={feature.title}
          loading="lazy"
          onError={() => setFailedSrc(feature.image)}
          // Ảnh lỗi trước khi React kịp gắn onError (lúc tải trang) → kiểm tra lại
          ref={(el) => {
            if (el?.complete && el.naturalWidth === 0)
              setFailedSrc(feature.image);
          }}
          className="absolute inset-0 size-full object-cover transition-transform duration-[1.6s] ease-out group-hover/card:scale-105"
        />
      )}
      {/* Viền sáng + bóng tối mép trong */}
      <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_0_40px_rgb(0_0_0/0.6)] ring-1 ring-inset ring-[#d9a441]/35" />
    </div>
  );
}

export default function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const t = useTranslations("Features");

  return (
    <article
      id={feature.id}
      className="arcane-panel group/card scroll-mt-24 p-2.5 motion-safe:animate-fade-in sm:p-3"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Hoa văn khung: 4 góc + viên ngọc giữa cạnh trên */}
      <span className="stage-corner -left-px -top-px scale-75" />
      <span className="stage-corner -right-px -top-px rotate-90 scale-75" />
      <span className="stage-corner -bottom-px -right-px rotate-180 scale-75" />
      <span className="stage-corner -bottom-px -left-px -rotate-90 scale-75" />
      <span className="feature-gem" aria-hidden />

      <div className="grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-6">
        <FeatureMedia feature={feature} />

        <div className="px-2 pb-3 sm:px-3 lg:py-4 lg:pl-0 lg:pr-4">
          {/* Tiêu đề + nhãn nhóm */}
          <header className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#d9a441]/60 bg-[radial-gradient(circle,rgb(245_196_107/0.18),transparent_70%)] text-[#f8cf6a] shadow-[0_0_16px_rgb(245_180_70/0.3)] sm:size-14">
              <FeatureIcon name={feature.icon} className="size-7 sm:size-8" />
            </span>
            <h2 className="bg-linear-to-b from-[#fff1c4] via-[#f8cf6a] to-[#c98a2a] bg-clip-text text-3xl font-extrabold tracking-wide text-transparent drop-shadow-[0_2px_8px_rgb(245_180_70/0.25)] sm:text-4xl">
              {feature.title}
            </h2>
            <span className="inline-flex items-center gap-2 rounded-lg border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100 shadow-[0_0_10px_rgb(139_92_246/0.2)] sm:text-[13px]">
              <FeatureIcon
                name={CATEGORY_ICON[feature.category]}
                className="size-4 text-violet-300"
              />
              {t(`categories.${feature.category}`)}
            </span>
          </header>

          <p className="mt-3 text-[15px] leading-relaxed text-slate-300">
            {feature.desc}
          </p>

          {/* Các ô hiệu ứng */}
          <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-[repeat(auto-fit,minmax(112px,1fr))] [&>li:last-child:nth-child(odd)]:max-sm:col-span-2">
            {feature.perks.map((perk) => {
              const body = (
                <>
                  <FeatureIcon
                    name={perk.icon}
                    className={`mx-auto size-9 drop-shadow-[0_0_8px_currentColor] transition-transform duration-300 group-hover/perk:-translate-y-0.5 group-hover/perk:scale-110 ${TONE_CLASS[perk.tone]}`}
                  />
                  <span className="mt-2 block text-[13px] font-bold leading-snug text-[#f8cf6a]">
                    {perk.title}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-slate-400">
                    {perk.desc}
                  </span>
                </>
              );
              return (
                <li key={perk.id}>
                  {perk.href ? (
                    <Link
                      href={perk.href}
                      title={t("viewItem")}
                      className="perk-tile group/perk"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="perk-tile group/perk">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
