"use client";

import { Fragment } from "react";
import { useTranslations } from "next-intl";
import type { Item, ItemRef, ResolvedIngredient } from "@/data/items-view";
import type { ItemStats } from "@/data/items";
import ItemArt from "./ItemArt";
import { CATEGORY_ICON, Icon, type IconName } from "./icons";

const STAT_ORDER: {
  key: keyof ItemStats;
  icon: IconName;
  unit: string;
  max: number;
}[] = [
  { key: "attack", icon: "attack", unit: "", max: 200 },
  { key: "armorPen", icon: "armorPen", unit: "%", max: 100 },
  { key: "moveSpeed", icon: "moveSpeed", unit: "%", max: 50 },
  { key: "damageResist", icon: "damageResist", unit: "%", max: 100 },
];

type Props = {
  item: Item;
  /** chọn vật phẩm khác (bấm vào nguyên liệu / "dùng để chế tạo") */
  onSelect: (id: string) => void;
};

export default function ItemDetail({ item, onSelect }: Props) {
  const t = useTranslations("Items");
  const stats = STAT_ORDER.filter((s) => item.stats[s.key] !== undefined);
  const recipe = item.recipe;
  const fallback = CATEGORY_ICON[item.category];

  return (
    // key = id → mỗi lần đổi vật phẩm nội dung hiện dần lại từ đầu
    <article key={item.id} className="motion-safe:animate-fade-in [--u:12px]">
      {/* ===== Đầu panel: ảnh lớn + tên ===== */}
      <header className="flex items-center gap-5">
        <div className="relative grid size-32 shrink-0 place-items-center sm:size-36">
          <span className="arcane-ring absolute -inset-3 rounded-full motion-safe:animate-[spin_14s_linear_infinite]" />
          <span className="absolute inset-2 rounded-full bg-[#f5c46b]/20 blur-2xl motion-safe:animate-pulse-glow" />
          <ItemArt
            src={item.image}
            alt={item.name}
            fallbackIcon={fallback}
            active
            lazy={false}
            className="relative w-28 sm:w-32"
          />
        </div>

        <div className="min-w-0">
          <h2 className="title-shimmer text-2xl font-extrabold leading-tight motion-safe:animate-shimmer sm:text-[1.7rem]">
            {item.name}
          </h2>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-300/30 bg-violet-950/60 px-2.5 py-0.5 text-xs font-medium text-violet-100">
              <Icon name={fallback} className="size-3.5" />
              {t(`categories.${item.category}`)}
            </span>
            {item.exclusiveTo && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-300/40 bg-fuchsia-950/60 py-0.5 pl-0.5 pr-2.5 text-xs font-medium text-fuchsia-100">
                <img
                  src={item.exclusiveTo.image}
                  alt=""
                  className="size-5 rounded-full bg-black/40 object-cover"
                />
                {t("exclusive", { name: item.exclusiveTo.name })}
              </span>
            )}
          </div>
          {item.unlocksSkills && (
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200">
              <Icon name="sparkle" className="size-3.5 text-[#f5c46b]" />
              {t(`unlocksSkills.${item.unlocksSkills}`)}
            </p>
          )}
        </div>
      </header>

      <p className="mt-5 text-sm leading-relaxed text-slate-200/90">
        {item.desc}
      </p>

      {/* ===== Chỉ số ===== */}
      {stats.length > 0 && (
        <Section title={t("stats")}>
          <ul className="space-y-1.5">
            {stats.map((s, i) => {
              const value = item.stats[s.key]!;
              return (
                <li
                  key={s.key}
                  className="relative overflow-hidden rounded-lg bg-white/[0.03] px-3 py-2"
                >
                  {/* thanh chỉ số chạy dài theo giá trị */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-[#f5c46b]/15 to-transparent motion-safe:animate-[grow_0.8s_ease-out_both]"
                    style={{
                      width: `${Math.min(100, (value / s.max) * 100)}%`,
                      animationDelay: `${i * 90}ms`,
                    }}
                  />
                  <span className="relative flex items-center gap-3 text-sm">
                    <Icon name={s.icon} className="size-4 text-[#d9a441]" />
                    <span className="flex-1 text-slate-300">
                      {t(`stat.${s.key}`)}
                    </span>
                    <span className="font-bold tabular-nums text-amber-100">
                      {s.unit ? `+${value}${s.unit}` : value}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </Section>
      )}

      {/* ===== Công thức ===== */}
      {recipe && recipe.ingredients.length > 0 && (
        <Section title={t(`recipe.${recipe.kind}`)}>
          <div className="flex flex-wrap items-start gap-x-1.5 gap-y-3">
            {recipe.ingredients.map((ing, i) => (
              <Fragment key={i}>
                {i > 0 && <Operator icon="plus" />}
                <Ingredient ing={ing} onSelect={onSelect} />
              </Fragment>
            ))}
            <Operator icon="arrow" highlight />
            <Tile
              entry={{ id: item.id, name: item.name, image: item.image }}
              fallback={fallback}
              qty={recipe.yield}
              active
            />
          </div>
        </Section>
      )}

      {/* ===== Trạm ===== */}
      {recipe && recipe.stations.length > 0 && (
        <Section title={t(`station.${recipe.kind}`)}>
          <div className="flex flex-wrap items-center gap-3">
            {recipe.stations.map((st, i) => (
              <Fragment key={st.id}>
                {i > 0 && (
                  <span className="text-xs uppercase tracking-wider text-violet-200/60">
                    {t("or")}
                  </span>
                )}
                <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3.5">
                  <ItemArt
                    src={st.image}
                    alt={st.name}
                    fallbackIcon="sparkle"
                    className="w-11"
                  />
                  <span className="text-sm font-semibold text-slate-100">
                    {st.name}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </Section>
      )}

      {/* ===== Ghi chú ===== */}
      {item.notes.length > 0 && (
        <Section title={t("notes")}>
          <ul className="space-y-1.5 text-sm text-slate-200/90">
            {item.notes.map((n) => (
              <li key={n} className="flex gap-2">
                <span className="mt-[7px] size-1.5 shrink-0 rotate-45 bg-[#f5c46b]" />
                {n}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* ===== Cách kiếm ===== */}
      {item.source && (
        <Section title={t("source")}>
          <p className="rounded-lg border-l-2 border-[#d9a441]/70 bg-white/[0.03] px-3 py-2 text-sm text-slate-200/90">
            {item.source}
          </p>
        </Section>
      )}

      {/* ===== Dùng để chế tạo (tự tính) ===== */}
      {item.usedIn.length > 0 && (
        <Section title={t("usedIn")}>
          <div className="flex flex-wrap gap-3">
            {item.usedIn.map((u) => (
              <Tile
                key={u.id}
                entry={u}
                fallback={iconOf(u)}
                onClick={() => onSelect(u.id)}
              />
            ))}
          </div>
        </Section>
      )}
    </article>
  );
}

/* ---------- Thành phần nhỏ ---------- */

const iconOf = (ref: ItemRef): IconName =>
  ref.category ? CATEGORY_ICON[ref.category] : "sparkle";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-6">
      <h3 className="section-title mb-3 text-[15px]">
        <span className="grid size-5 place-items-center">
          <span className="size-2.5 rotate-45 border border-[#f5c46b] shadow-[0_0_6px_rgb(245_196_107/0.8)]" />
        </span>
        {title}
      </h3>
      {children}
    </section>
  );
}

function Operator({
  icon,
  highlight = false,
}: {
  icon: IconName;
  highlight?: boolean;
}) {
  return (
    <span
      className={`grid h-[60px] place-items-center ${highlight ? "text-[#f5c46b] drop-shadow-[0_0_6px_rgb(245_196_107/0.8)]" : "text-violet-200/60"}`}
    >
      <Icon name={icon} className="size-4" />
    </span>
  );
}

function Tile({
  entry,
  fallback,
  qty,
  active = false,
  onClick,
}: {
  entry: ItemRef;
  fallback: IconName;
  qty?: number;
  active?: boolean;
  onClick?: () => void;
}) {
  const content = (
    <>
      <span className="relative block">
        <ItemArt
          src={entry.image}
          alt={entry.name}
          fallbackIcon={fallback}
          active={active}
          className="w-[60px]"
        />
        {qty !== undefined && (
          <span className="absolute -bottom-1.5 -right-1.5 z-10 rounded-md border border-[#d9a441]/70 bg-[#160e2a] px-1.5 text-[11px] font-bold leading-5 text-amber-100 shadow">
            ×{qty}
          </span>
        )}
      </span>
      <span className="mt-1.5 line-clamp-2 w-[72px] text-center text-[11px] leading-tight text-slate-300">
        {entry.name}
      </span>
    </>
  );

  return onClick ? (
    <button
      type="button"
      onClick={onClick}
      title={entry.name}
      className="flex flex-col items-center transition-transform hover:-translate-y-0.5 hover:[&_.item-frame]:brightness-125"
    >
      {content}
    </button>
  ) : (
    <div className="flex flex-col items-center" title={entry.name}>
      {content}
    </div>
  );
}

function Ingredient({
  ing,
  onSelect,
}: {
  ing: ResolvedIngredient;
  onSelect: (id: string) => void;
}) {
  const hpLabel = useTranslations("Items");
  if (ing.type === "hp") {
    return (
      <div
        className="flex flex-col items-center"
        title={hpLabel("hpCost", { qty: ing.qty })}
      >
        <span className="item-frame grid w-[60px] place-items-center">
          <span className="item-art grid size-full place-items-center bg-linear-to-b from-rose-900 to-rose-950 text-rose-300">
            <Icon name="heart" className="size-6" />
          </span>
        </span>
        <span className="mt-1.5 w-[72px] text-center text-[11px] font-semibold leading-tight text-rose-300">
          −{hpLabel("hpCost", { qty: ing.qty })}
        </span>
      </div>
    );
  }

  // Chọn 1 trong các nguyên liệu: gom vào một khung viền đứt, ngăn bằng "hoặc"
  if (ing.type === "anyOf") {
    return (
      <div className="flex items-start gap-1 rounded-xl border border-dashed border-[#d9a441]/45 bg-white/[0.02] px-1.5 pb-1 pt-1.5">
        {ing.options.map((opt, i) => (
          <Fragment key={opt.id}>
            {i > 0 && (
              <span className="grid h-[60px] place-items-center px-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200/60">
                {hpLabel("or")}
              </span>
            )}
            <Tile entry={opt} fallback="sparkle" qty={ing.qty} />
          </Fragment>
        ))}
      </div>
    );
  }

  if (ing.type === "item") {
    return (
      <Tile
        entry={ing}
        fallback={iconOf(ing)}
        qty={ing.qty}
        onClick={() => onSelect(ing.id)}
      />
    );
  }

  return <Tile entry={ing} fallback="sparkle" qty={ing.qty} />;
}
