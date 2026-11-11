"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import type { Feature } from "@/data/features-view";
import { normalize } from "@/lib/text";
import { Icon } from "@/components/items/icons";
import FeatureCard from "./FeatureCard";

/** Tiêu đề trang (server render) bên trái, ô tìm kiếm bên phải + danh sách tính năng */
export default function FeatureList({
  features,
  heading,
}: {
  features: Feature[];
  heading: React.ReactNode;
}) {
  const t = useTranslations("Features");
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  // Thẻ đang mở: mặc định mở thẻ đầu tiên, các thẻ khác bấm vào mới mở
  const [openIds, setOpenIds] = useState(
    () => new Set(features.slice(0, 1).map((f) => f.id))
  );

  // Tìm trong tên, mô tả, ô hiệu ứng, thú và các khối quy tắc
  const haystacks = useMemo(
    () =>
      features.map((f) =>
        normalize(
          [
            f.title,
            f.tagline,
            f.desc,
            ...f.perks.flatMap((p) => [p.title, p.desc]),
            ...f.pets.flatMap((p) => [
              p.name,
              p.element.name,
              p.skill,
              ...p.foods,
            ]),
            ...f.sections.flatMap((s) => [s.title, s.caption, ...s.points]),
            ...f.quests.flatMap((q) => [q.name, q.reward.name, ...q.needs]),
            ...f.potions.flatMap((p) => [p.name, p.recipe, p.effect]),
          ].join(" ")
        )
      ),
    [features]
  );
  const matches = (raw: string) => {
    const nq = normalize(raw);
    return features.filter((_, i) => !nq || haystacks[i].includes(nq));
  };
  const q = normalize(query);
  const shown = matches(query);

  const toggle = (id: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // Gõ tìm kiếm → tự mở các thẻ khớp để thấy nội dung bên trong
  const onSearch = (value: string) => {
    setQuery(value);
    if (!normalize(value)) return;
    setOpenIds((prev) => {
      const next = new Set(prev);
      matches(value).forEach((f) => next.add(f.id));
      return next;
    });
  };

  // Mở trang với #id sẵn (link chia sẻ) → mở thẻ đó, kể cả #id của một loài thú
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    const owner = features.find(
      (f) => f.id === id || f.pets.some((p) => p.id === id)
    );
    if (!owner) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- đọc hash 1 lần sau khi hydrate
    setOpenIds((prev) => new Set(prev).add(owner.id));
    // Thẻ mở xong vị trí mới đúng → cuộn lại tới mục tiêu
    const timer = setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ block: "start" }),
      500
    );
    return () => clearTimeout(timer);
  }, [features]);

  // Phím "/" để tìm nhanh
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = (e.target as HTMLElement)?.closest("input, textarea");
      if (e.key === "/" && !typing) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mb-8 flex flex-col gap-5 pt-4 lg:flex-row lg:items-end lg:justify-between">
        {heading}

        <label className="group relative block w-full lg:w-80">
          <span className="sr-only">{t("searchPlaceholder")}</span>
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-violet-200/50 transition-colors group-focus-within:text-[#f5c46b]"
          />
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-full border border-[#d9a441]/40 bg-black/35 py-2.5 pl-11 pr-12 text-[15px] text-slate-100 placeholder:text-violet-200/40 shadow-[0_0_14px_rgb(245_180_70/0.08),inset_0_2px_8px_rgb(0_0_0/0.4)] outline-none backdrop-blur transition-[border-color,box-shadow] focus:border-[#d9a441]/80 focus:shadow-[0_0_0_3px_rgb(217_164_65/0.15),inset_0_2px_8px_rgb(0_0_0/0.4)] [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                searchRef.current?.focus();
              }}
              aria-label={t("clearSearch")}
              className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-violet-200/70 hover:bg-white/10 hover:text-white"
            >
              <Icon name="close" className="size-4" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/15 bg-white/5 px-2 py-0.5 font-sans text-xs text-violet-200/60 sm:block">
              /
            </kbd>
          )}
        </label>
      </div>

      <div key={q} className="flex flex-col gap-8 pb-10">
        {shown.length === 0 && (
          <p className="arcane-panel py-16 text-center text-violet-200/60">
            {t("noResults", { query })}
          </p>
        )}
        {shown.map((f, i) => (
          <FeatureCard
            key={f.id}
            feature={f}
            index={i}
            open={openIds.has(f.id)}
            onToggle={() => toggle(f.id)}
          />
        ))}
      </div>
    </>
  );
}
