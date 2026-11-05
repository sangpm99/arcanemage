"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Chapter, StoryTrial } from "@/data/story-view";
import ItemArt from "@/components/items/ItemArt";
import { CATEGORY_ICON } from "@/components/items/icons";
import { StoryIcon } from "./StoryIcon";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const SCENE = {
  blood: "feature-scene-blood",
  celestial: "scene-celestial",
  arcane: "feature-scene-arcane",
} as const;

/** Ảnh boss. Chưa có trên R2 → cảnh thay thế + icon boss */
function TrialMedia({ trial }: { trial: StoryTrial }) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = failedSrc === trial.image;

  return (
    <div className="relative aspect-[16/9] overflow-hidden">
      {failed ? (
        <div role="img" aria-label={trial.name} className={`absolute inset-0 ${SCENE[trial.scene]}`}>
          <StoryIcon
            name={trial.icon}
            className="absolute left-1/2 top-[45%] size-[34%] -translate-x-1/2 -translate-y-1/2 text-white/70 drop-shadow-[0_0_14px_currentColor]"
          />
        </div>
      ) : (
        <img
          src={trial.image}
          alt={trial.name}
          loading="lazy"
          onError={() => setFailedSrc(trial.image)}
          ref={(el) => {
            if (el?.complete && el.naturalWidth === 0) setFailedSrc(trial.image);
          }}
          className="absolute inset-0 size-full object-cover transition-transform duration-[1.6s] ease-out group-hover/trial:scale-105"
        />
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#140d26] to-transparent" />
    </div>
  );
}

function TrialCard({ trial, index }: { trial: StoryTrial; index: number }) {
  const t = useTranslations("Story");
  return (
    <li
      className="trial-card group/trial motion-safe:animate-fade-in"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <TrialMedia trial={trial} />

      <div className="relative -mt-7 px-3 pb-3">
        <h3 className="flex items-center gap-2 text-lg font-bold text-[#f8cf6a] drop-shadow-[0_2px_4px_rgb(0_0_0/0.8)]">
          <StoryIcon name={trial.icon} className="size-6 shrink-0 text-sky-300 drop-shadow-[0_0_6px_currentColor]" />
          {trial.name}
        </h3>

        {/* Phần thưởng → bấm mở trang Vật phẩm */}
        <Link
          href={`/items#${trial.reward.id}`}
          title={t("viewReward")}
          className="mt-3 flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 p-2 transition-colors hover:border-[#d9a441]/60 hover:bg-[#d9a441]/5"
        >
          <ItemArt
            src={trial.reward.image}
            alt={trial.reward.name}
            fallbackIcon={CATEGORY_ICON[trial.reward.category ?? "general"]}
            className="size-14 shrink-0"
          />
          <span className="min-w-0">
            <span className="block text-xs text-slate-400">{t("reward")}</span>
            <span className="block font-bold leading-snug text-[#f8cf6a]">
              {trial.reward.name}
            </span>
          </span>
        </Link>

        <p className="mt-2.5 flex items-start gap-2 text-[13px] italic text-slate-300">
          <span className="mt-0.5 text-[#f5c46b]">✦</span>
          {trial.purpose}
        </p>
      </div>
    </li>
  );
}

export default function StoryTimeline({ chapters }: { chapters: Chapter[] }) {
  const t = useTranslations("Story");
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  return (
    <ol className="relative grid gap-6 pb-10">
      {/* Trục dọc nối các huy hiệu La Mã */}
      <span
        aria-hidden
        className="absolute bottom-10 left-[23px] top-8 w-px bg-linear-to-b from-[#f5c46b] via-[#d9a441]/50 to-transparent sm:left-[27px]"
      />

      {chapters.map((c, i) => {
        const label = t("stage", { n: i + 1 });
        const open = !c.locked && !collapsed.has(c.id);

        return (
          <li
            key={c.id}
            id={c.id}
            className="relative grid scroll-mt-24 grid-cols-[48px_minmax(0,1fr)] gap-3 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-5"
          >
            {/* Huy hiệu số La Mã */}
            <div className="relative mt-5 flex flex-col items-center">
              <span
                className={`story-medal ${c.locked ? "story-medal-locked" : ""}`}
              >
                {ROMAN[i] ?? i + 1}
              </span>
              {c.locked && (
                <StoryIcon name="lock" className="mt-1 size-4 text-violet-300/70" />
              )}
            </div>

            {c.locked ? (
              /* ---------- Giai đoạn chưa mở ---------- */
              <article className="arcane-panel story-locked flex min-h-28 flex-wrap items-center gap-x-5 gap-y-3 overflow-hidden p-4 sm:p-6">
                <span aria-hidden className="story-question motion-safe:animate-pulse-glow">?</span>
                <StoryIcon
                  name={c.emblem}
                  className="relative hidden size-14 shrink-0 text-[#d9a441]/70 sm:block"
                />
                <div className="relative min-w-0 flex-1">
                  <h2 className="text-xl font-extrabold text-[#f8cf6a]/85 sm:text-2xl">
                    {label}: ???
                  </h2>
                  <p className="mt-0.5 text-sm italic text-violet-200/60">
                    {t("lockedTagline")}
                  </p>
                </div>
                <span className="relative inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-black/40 px-4 py-1.5 text-[13px] text-slate-200">
                  <StoryIcon name="lock" className="size-4 text-[#f5c46b]" />
                  {t("locked")}
                </span>
              </article>
            ) : (
              /* ---------- Giai đoạn đã mở ---------- */
              <article className="arcane-panel overflow-hidden">
                <span className="stage-corner -left-px -top-px scale-75" />
                <span className="stage-corner -right-px -top-px rotate-90 scale-75" />
                <span className="stage-corner -bottom-px -right-px rotate-180 scale-75" />
                <span className="stage-corner -bottom-px -left-px -rotate-90 scale-75" />

                <header className="flex items-start gap-4 p-4 sm:p-6">
                  <StoryIcon
                    name={c.emblem}
                    className="hidden size-16 shrink-0 text-[#f5c46b] drop-shadow-[0_0_10px_rgb(245_180_70/0.5)] sm:block"
                  />
                  <div className="min-w-0 flex-1">
                    <h2 className="bg-linear-to-b from-[#fff1c4] via-[#f8cf6a] to-[#c98a2a] bg-clip-text text-xl font-extrabold leading-tight text-transparent sm:text-3xl">
                      {label}: {c.title}
                    </h2>
                    <p className="mt-1 text-sm italic tracking-wide text-violet-200/70">
                      {c.tagline}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggle(c.id)}
                    aria-expanded={open}
                    aria-controls={`${c.id}-body`}
                    aria-label={open ? t("collapse") : t("expand")}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-[#d9a441]/60 text-[#f5c46b] shadow-[0_0_10px_rgb(245_180_70/0.25)] transition-colors hover:bg-[#d9a441]/10"
                  >
                    <StoryIcon
                      name="chevron"
                      className={`size-5 transition-transform duration-300 ${open ? "" : "rotate-180"}`}
                    />
                  </button>
                </header>

                {/* Thân: mô tả + 3 thử thách (thu gọn được) */}
                <div
                  id={`${c.id}-body`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden" inert={!open}>
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <p className="-mt-1 text-[15px] leading-relaxed text-slate-300 sm:pl-20">
                        {c.desc}
                      </p>
                      <ul className="mt-5 grid gap-4 md:grid-cols-3">
                        {c.trials.map((tr, j) => (
                          <TrialCard key={tr.id} trial={tr} index={j} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            )}
          </li>
        );
      })}
    </ol>
  );
}
