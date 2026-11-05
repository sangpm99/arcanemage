"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import type { Item } from "@/data/items-view";
import { ITEM_CATEGORIES, type ItemCategory } from "@/data/items";
import ItemArt from "./ItemArt";
import ItemDetail from "./ItemDetail";
import { CATEGORY_ICON, Icon } from "./icons";
import { normalize } from "@/lib/text";

type Filter = "all" | ItemCategory;

const isMobile = () => window.matchMedia("(width < 64rem)").matches;

export default function ItemBrowser({ items }: { items: Item[] }) {
  const t = useTranslations("Items");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const [sheetOpen, setSheetOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const byId = useMemo(() => new Map(items.map((i) => [i.id, i])), [items]);
  const selected = (selectedId && byId.get(selectedId)) || items[0];

  /* ----- Lọc + tìm kiếm ----- */
  const q = normalize(query);
  const matches = useMemo(
    () =>
      items.filter(
        (i) => !q || normalize(i.name).includes(q) || i.id.includes(q)
      ),
    [items, q]
  );
  const counts = useMemo(() => {
    const c: Record<Filter, number> = {
      all: matches.length,
      weapon: 0,
      armor: 0,
      vehicle: 0,
      general: 0,
    };
    matches.forEach((i) => c[i.category]++);
    return c;
  }, [matches]);
  const groups = ITEM_CATEGORIES.filter(
    (cat) => filter === "all" || filter === cat
  )
    .map((cat) => ({ cat, list: matches.filter((i) => i.category === cat) }))
    .filter((g) => g.list.length > 0);

  /* ----- Chọn vật phẩm: lưu vào #hash để chia sẻ link ----- */
  const select = (id: string, openSheet = true) => {
    setSelectedId(id);
    window.history.replaceState(null, "", `#${id}`);
    if (openSheet && isMobile()) setSheetOpen(true);
  };

  // Mở trang với #id sẵn (link chia sẻ) → chọn vật phẩm đó
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || !byId.has(id)) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- đọc hash 1 lần sau khi hydrate
    setSelectedId(id);
    if (isMobile()) setSheetOpen(true);
  }, [byId]);

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

  // Bottom sheet (mobile): khóa cuộn trang + đóng bằng Esc
  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setSheetOpen(false);
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [sheetOpen]);

  const filters: Filter[] = ["all", ...ITEM_CATEGORIES];
  // đổi key → lưới chạy lại hiệu ứng hiện dần khi lọc / tìm
  const gridKey = `${filter}|${q}`;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_420px]">
      {/* ================= Cột trái: tìm kiếm + lưới ================= */}
      <section className="arcane-panel p-4 sm:p-6">
        {/* Ô tìm kiếm */}
        <label className="group relative block">
          <span className="sr-only">{t("searchPlaceholder")}</span>
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-violet-200/50 transition-colors group-focus-within:text-[#f5c46b]"
          />
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setQuery("")}
            placeholder={t("searchPlaceholder")}
            className="w-full rounded-xl border border-white/10 bg-black/30 py-3 pl-11 pr-20 text-[15px] text-slate-100 placeholder:text-violet-200/40 shadow-[inset_0_2px_8px_rgb(0_0_0/0.4)] outline-none transition-[border-color,box-shadow] focus:border-[#d9a441]/70 focus:shadow-[0_0_0_3px_rgb(217_164_65/0.15),inset_0_2px_8px_rgb(0_0_0/0.4)] [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                searchRef.current?.focus();
              }}
              aria-label={t("clearSearch")}
              className="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-md text-violet-200/70 hover:bg-white/10 hover:text-white"
            >
              <Icon name="close" className="size-4" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/15 bg-white/5 px-2 py-0.5 font-sans text-xs text-violet-200/60 sm:block">
              /
            </kbd>
          )}
        </label>

        {/* Lọc theo nhóm */}
        <div className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className="filter-pill"
            >
              <Icon name={f === "all" ? "all" : CATEGORY_ICON[f]} />
              {f === "all" ? t("all") : t(`categories.${f}`)}
              <span className="rounded-full bg-white/10 px-1.5 text-[11px] leading-5 tabular-nums">
                {counts[f]}
              </span>
            </button>
          ))}
        </div>

        {/* Lưới vật phẩm theo nhóm */}
        <div key={gridKey} className="mt-2">
          {groups.length === 0 && (
            <p className="py-16 text-center text-violet-200/60">
              {t("noResults", { query })}
            </p>
          )}

          {groups.map(({ cat, list }) => (
            <section key={cat} className="mt-6">
              <h2 className="section-title mb-4 text-lg">
                <span className="grid size-8 place-items-center rounded-lg border border-[#d9a441]/50 bg-[#d9a441]/10 text-[#f5c46b] shadow-[0_0_10px_rgb(245_180_70/0.25)]">
                  <Icon name={CATEGORY_ICON[cat]} className="size-[18px]" />
                </span>
                {t(`categories.${cat}`)}
                <span className="text-sm font-medium text-violet-200/50">
                  {list.length}
                </span>
              </h2>

              <ul className="grid grid-cols-[repeat(auto-fill,minmax(84px,1fr))] gap-x-3 gap-y-4 sm:grid-cols-[repeat(auto-fill,minmax(96px,1fr))]">
                {list.map((item, i) => {
                  const active = item.id === selected?.id;
                  return (
                    <li
                      key={item.id}
                      className="motion-safe:animate-fade-in"
                      style={{ animationDelay: `${Math.min(i, 16) * 30}ms` }}
                    >
                      <button
                        type="button"
                        onClick={() => select(item.id)}
                        aria-pressed={active}
                        aria-label={`${item.name} – ${t("viewDetail")}`}
                        className="group flex w-full flex-col items-center gap-2 outline-none"
                      >
                        <span className="relative w-full max-w-[88px] transition-transform duration-200 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
                          <ItemArt
                            src={item.image}
                            alt=""
                            fallbackIcon={CATEGORY_ICON[item.category]}
                            active={active}
                            className={`w-full ${active ? "" : "group-hover:brightness-125 group-focus-visible:brightness-125"}`}
                          />
                          {item.exclusiveTo && (
                            <img
                              src={item.exclusiveTo.image}
                              alt=""
                              title={t("exclusive", {
                                name: item.exclusiveTo.name,
                              })}
                              className="absolute -right-1.5 -top-1.5 z-10 size-6 rounded-full border border-fuchsia-300/60 bg-[#1a1030] object-cover shadow"
                            />
                          )}
                        </span>
                        <span
                          className={`line-clamp-2 text-center text-xs leading-snug transition-colors ${active ? "font-semibold text-[#f8cf6a]" : "text-slate-300 group-hover:text-white"}`}
                        >
                          {item.name}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>

      {/* ================= Cột phải (PC): chi tiết, dính khi cuộn ================= */}
      {selected && (
        <aside className="arcane-panel arcane-scroll sticky top-24 hidden max-h-[calc(100dvh-7.5rem)] overflow-y-auto p-6 lg:block">
          <ItemDetail item={selected} onSelect={(id) => select(id, false)} />
        </aside>
      )}

      {/* ================= Mobile/tablet: bottom sheet ================= */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${sheetOpen ? "" : "pointer-events-none"}`}
        inert={!sheetOpen}
      >
        <div
          onClick={() => setSheetOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${sheetOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected?.name}
          className={`arcane-panel arcane-scroll absolute inset-x-0 bottom-0 max-h-[88dvh] overflow-y-auto rounded-b-none px-5 pb-8 pt-3 transition-transform duration-300 ease-out ${sheetOpen ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="sticky -top-3 z-10 -mx-5 mb-3 flex items-center justify-center bg-linear-to-b from-[#1a1230] via-[#1a1230]/95 to-transparent px-5 pb-3 pt-3">
            <span className="h-1.5 w-12 rounded-full bg-white/25" />
            <button
              type="button"
              onClick={() => setSheetOpen(false)}
              aria-label={t("close")}
              className="absolute right-3 top-2 grid size-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200"
            >
              <Icon name="close" className="size-4" />
            </button>
          </div>
          {selected && (
            <ItemDetail item={selected} onSelect={(id) => select(id, false)} />
          )}
        </div>
      </div>
    </div>
  );
}
