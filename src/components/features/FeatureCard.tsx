"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Feature, FeaturePet } from "@/data/features-view";
import type { FeatureBase } from "@/data/features";
import ItemArt from "@/components/items/ItemArt";
import { StoryIcon } from "@/components/story/StoryIcon";
import { FeatureIcon, TONE_CLASS } from "./FeatureIcon";

const CATEGORY_ICON = {
  worldEvent: "calendar",
  pve: "swords",
  companion: "paw",
} as const;

/** Cảnh thay thế + màu icon khi chưa có ảnh */
const SCENE: Record<FeatureBase["theme"], { bg: string; icon: string }> = {
  blood: { bg: "feature-scene-blood", icon: "text-rose-300" },
  arcane: { bg: "feature-scene-arcane", icon: "text-violet-200" },
  wild: { bg: "feature-scene-wild", icon: "text-emerald-200" },
};

/** Ảnh minh họa bên trái. Chưa có ảnh trên R2 → cảnh thay thế theo theme. */
function FeatureMedia({ feature }: { feature: Feature }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === feature.image;
  const scene = SCENE[feature.theme];

  return (
    <div className="feature-media relative aspect-[16/9] overflow-hidden rounded-xl lg:aspect-auto lg:min-h-[300px]">
      {failed ? (
        <div
          role="img"
          aria-label={feature.title}
          className={`absolute inset-0 ${scene.bg}`}
        >
          <FeatureIcon
            name={feature.icon}
            className={`absolute left-1/2 top-1/2 size-[30%] max-w-32 -translate-x-1/2 -translate-y-1/2 opacity-80 drop-shadow-[0_0_18px_currentColor] ${scene.icon}`}
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

/** Thẻ một loài thú khế ước */
function PetCard({ pet }: { pet: FeaturePet }) {
  const t = useTranslations("Features");

  return (
    <li id={pet.id} className="trial-card flex scroll-mt-24 flex-col gap-3 p-3">
      <div className="flex items-center gap-3">
        <ItemArt
          src={pet.image}
          alt={pet.name}
          fallbackIcon="paw"
          className="size-16 shrink-0"
        />
        <div className="min-w-0">
          <h4 className="text-lg font-bold leading-snug text-[#f8cf6a]">
            {pet.name}
          </h4>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span
              className="inline-flex items-center gap-1 font-semibold"
              style={{ color: pet.element.color }}
            >
              <img src={pet.element.icon} alt="" className="size-4" />
              {pet.element.name}
            </span>
            <span
              className="inline-flex items-center gap-1 text-slate-300"
              title={t("petCooldown")}
            >
              <FeatureIcon name="clock" className="size-3.5 text-sky-300" />
              <span className="sr-only">{t("petCooldown")}:</span>
              {t("minutes", { n: pet.cooldown })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <p className="text-xs font-semibold text-violet-200/70">
          {t("petSkill")}
        </p>
        <p className="mt-0.5 text-[13px] leading-relaxed text-slate-200">
          {pet.skill}
        </p>
      </div>

      <dl className="grid gap-2 border-t border-white/10 pt-3 text-xs">
        <div className="flex items-start gap-2">
          <FeatureIcon name="food" className="size-4 shrink-0 text-amber-300" />
          <div>
            <dt className="sr-only">{t("petFood")}</dt>
            <dd className="flex flex-wrap gap-1">
              {pet.foods.map((food) => (
                <span
                  key={food}
                  className="rounded-md border border-[#d9a441]/30 bg-[#d9a441]/10 px-1.5 py-0.5 leading-snug text-[#f8e3ae]"
                >
                  {food}
                </span>
              ))}
            </dd>
          </div>
        </div>
      </dl>
    </li>
  );
}

export default function FeatureCard({
  feature,
  index,
  open,
  onToggle,
}: {
  feature: Feature;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const t = useTranslations("Features");
  const bodyId = `${feature.id}-body`;

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

      {/* Đầu thẻ: bấm vào đâu cũng thu gọn / mở rộng */}
      <h2>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={bodyId}
          className="flex w-full cursor-pointer items-center gap-3 rounded-xl p-2 text-left outline-none transition-colors hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-[#d9a441]/70 sm:gap-4 sm:p-3"
        >
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#d9a441]/60 bg-[radial-gradient(circle,rgb(245_196_107/0.18),transparent_70%)] text-[#f8cf6a] shadow-[0_0_16px_rgb(245_180_70/0.3)] sm:size-14">
            <FeatureIcon name={feature.icon} className="size-7 sm:size-8" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span className="bg-linear-to-b from-[#fff1c4] via-[#f8cf6a] to-[#c98a2a] bg-clip-text text-2xl font-extrabold tracking-wide text-transparent sm:text-3xl">
                {feature.title}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-100 shadow-[0_0_10px_rgb(139_92_246/0.2)] sm:text-[13px]">
                <FeatureIcon
                  name={CATEGORY_ICON[feature.category]}
                  className="size-4 text-violet-300"
                />
                {t(`categories.${feature.category}`)}
              </span>
            </span>
            <span className="mt-1 block text-sm italic text-violet-200/70">
              {feature.tagline}
            </span>
          </span>

          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d9a441]/60 text-[#f5c46b] shadow-[0_0_10px_rgb(245_180_70/0.25)]"
          >
            <StoryIcon
              name="chevron"
              className={`size-5 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
            />
          </span>
          <span className="sr-only">{open ? t("collapse") : t("expand")}</span>
        </button>
      </h2>

      {/* Thân thẻ: mở rộng giống trang Cốt truyện */}
      <div
        id={bodyId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        {/* overflow-clip: không tạo vùng cuộn, nên link #id không cuộn nhầm bên trong thẻ */}
        <div className="min-h-0 overflow-clip" inert={!open}>
          <div className="grid gap-4 pt-2 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-6">
            <FeatureMedia feature={feature} />

            <div className="px-2 pb-3 sm:px-3 lg:py-2 lg:pl-0 lg:pr-4">
              <p className="text-[15px] leading-relaxed text-slate-300">
                {feature.desc}
              </p>

              {/* Các ô hiệu ứng */}
              <ul
                className={`mt-5 grid grid-cols-2 gap-2.5 [&>li:last-child:nth-child(odd)]:max-sm:col-span-2 ${
                  feature.pets.length > 0
                    ? "max-sm:grid-cols-1"
                    : "sm:grid-cols-[repeat(auto-fit,minmax(112px,1fr))]"
                }`}
              >
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

          {/* Danh sách thú */}
          {feature.pets.length > 0 && (
            <section className="px-2 pt-5 sm:px-3">
              <h3 className="section-title mb-4 text-lg">
                {t("petsTitle")}
                <span className="text-sm font-medium text-violet-200/50">
                  {feature.pets.length}
                </span>
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {feature.pets.map((pet) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </ul>
            </section>
          )}

          {/* Các khối quy tắc */}
          {feature.sections.length > 0 && (
            <div className="grid gap-3 px-2 pb-3 pt-5 sm:px-3 md:grid-cols-3">
              {feature.sections.map((s) => (
                <section
                  key={s.id}
                  className="rounded-xl border border-white/10 bg-black/25 p-4"
                >
                  <h3 className="flex items-center gap-2.5 font-bold text-[#f8cf6a]">
                    <FeatureIcon
                      name={s.icon}
                      className={`size-6 shrink-0 drop-shadow-[0_0_6px_currentColor] ${TONE_CLASS[s.tone]}`}
                    />
                    {s.title}
                  </h3>
                  <ul className="mt-3 grid gap-2 text-[13px] leading-relaxed text-slate-300">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span aria-hidden className="text-[#f5c46b]">
                          ✦
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
