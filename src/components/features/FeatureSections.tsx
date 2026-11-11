"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Feature, FeatureQuest } from "@/data/features-view";
import ItemArt from "@/components/items/ItemArt";
import { FeatureIcon, TONE_CLASS } from "./FeatureIcon";

type Section = Feature["sections"][number];

/* Lưới 2 cột chỉ bật từ xl: bảng nhiệm vụ cần đủ rộng để cột "Cần nộp" không bị bẻ dòng */
const SPAN: Record<NonNullable<Section["span"]>, string> = {
  tall: "xl:row-span-2",
  full: "md:col-span-full",
};

/** Ô ngăn đầu bảng, chỉ hiện trên màn rộng (mobile hiện dạng thẻ) */
const headCell =
  "text-[11px] font-semibold uppercase tracking-wider text-[#f5c46b]/80";

/** Các khối quy tắc ở cuối thẻ tính năng */
export default function FeatureSections({ feature }: { feature: Feature }) {
  if (feature.sections.length === 0) return null;

  return (
    <div
      className={`grid gap-3 px-2 pb-3 pt-5 sm:px-3 ${
        feature.sectionCols === 2 ? "xl:grid-cols-2" : "md:grid-cols-3"
      }`}
    >
      {feature.sections.map((s) => (
        <section
          key={s.id}
          className={`rounded-xl border border-white/10 bg-black/25 p-4 ${s.span ? SPAN[s.span] : ""}`}
        >
          <h3 className="flex items-center gap-2.5 font-bold text-[#f8cf6a]">
            <FeatureIcon
              name={s.icon}
              className={`size-6 shrink-0 drop-shadow-[0_0_6px_currentColor] ${TONE_CLASS[s.tone]}`}
            />
            {s.title}
          </h3>

          <div className="flex items-start gap-4">
            {s.points.length > 0 && (
              <ul className="mt-3 grid flex-1 gap-2 text-[13px] leading-relaxed text-slate-300">
                {s.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span aria-hidden className="text-[#f5c46b]">
                      ✦
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
            {s.image && (
              <figure className="mt-3 w-24 shrink-0 sm:w-28">
                <ItemArt
                  src={s.image}
                  alt={s.caption ?? s.title}
                  fallbackIcon="sparkle"
                  className="w-full"
                />
                {s.caption && (
                  <figcaption className="mt-2 rounded-md border border-[#d9a441]/40 bg-black/40 px-1.5 py-0.5 text-center text-[11px] font-semibold text-[#f8cf6a]">
                    {s.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>

          {s.block === "quests" && <QuestTables quests={feature.quests} />}
          {s.block === "shop" && <Shop shop={feature.shop} />}
          {s.block === "potions" && <PotionTable potions={feature.potions} />}
        </section>
      ))}
    </div>
  );
}

/** Ảnh nhỏ + tên thuốc, bấm vào mở trang Vật phẩm */
function PotionLink({
  item,
  className = "",
  children,
}: {
  item: { id: string; name: string; image: string };
  className?: string;
  children?: React.ReactNode;
}) {
  const t = useTranslations("Features");
  return (
    <Link
      href={`/items#${item.id}`}
      title={t("viewItem")}
      className={`group/link flex min-w-0 items-center gap-2 ${className}`}
    >
      <ItemArt
        src={item.image}
        alt=""
        fallbackIcon="potion"
        className="w-8 shrink-0"
      />
      <span className="min-w-0 underline-offset-2 group-hover/link:underline">
        {item.name}
      </span>
      {children}
    </Link>
  );
}

function QuestTables({ quests }: { quests: FeatureQuest[] }) {
  const t = useTranslations("Features");
  const tiers = (["minor", "major"] as const)
    .map((tier) => ({ tier, list: quests.filter((q) => q.tier === tier) }))
    .filter((g) => g.list.length > 0);

  return tiers.map(({ tier, list }) => (
    <div key={tier} className="mt-5">
      <h4 className="flex items-center gap-2 text-sm font-bold text-[#f8cf6a]">
        <span aria-hidden className="size-2 rotate-45 bg-[#f5c46b]" />
        {t(tier === "minor" ? "questMinor" : "questMajor")}
      </h4>
      {/* subgrid: cột tên + cột thuốc co theo nội dung, cột "Cần nộp" lấy phần còn lại */}
      <ul className="mt-2 overflow-hidden rounded-lg border border-[#d9a441]/25 bg-black/20 sm:grid sm:grid-cols-[auto_1fr_auto]">
        <li
          aria-hidden
          className={`hidden bg-[#d9a441]/10 px-3 py-1.5 sm:col-span-3 sm:grid sm:grid-cols-subgrid sm:gap-x-4 ${headCell}`}
        >
          <span>{t("colQuest")}</span>
          <span>{t("colNeeds")}</span>
          <span>{t("colUnlocks")}</span>
        </li>
        {list.map((q) => (
          <li
            key={q.id}
            className="grid gap-1.5 border-t border-white/5 px-3 py-2.5 text-[13px] max-sm:[&:nth-child(2)]:border-t-0 sm:col-span-3 sm:grid-cols-subgrid sm:items-center sm:gap-x-4 sm:py-2"
          >
            <span className="flex items-center gap-2 whitespace-nowrap font-bold text-[#f8cf6a]">
              <FeatureIcon
                name={q.icon}
                className={`size-5 shrink-0 ${TONE_CLASS[q.tone]}`}
              />
              {q.name}
            </span>
            <span className="leading-snug text-slate-300">
              <span className="sr-only">{t("colNeeds")}: </span>
              {q.needs.join("; ")}
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              {/* Mobile: nhãn hiện ra · màn rộng: đã có đầu bảng, chỉ để trình đọc màn hình */}
              <span className="shrink-0 text-xs text-violet-200/60 sm:sr-only">
                {t("colUnlocks")}:
              </span>
              <PotionLink item={q.reward} className="text-[13px]" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  ));
}

function Shop({ shop }: { shop: Feature["shop"] }) {
  const t = useTranslations("Features");
  return (
    <ul className="mt-3 grid gap-2 pl-5 text-[13px]">
      {shop.map((s) => (
        <li key={s.item.id} className="flex flex-wrap items-center gap-x-2">
          <PotionLink item={s.item} className="font-bold text-[#f8cf6a]" />
          <span className="text-slate-300">
            — {t("pricePerBottle", { n: s.price })}
          </span>
        </li>
      ))}
    </ul>
  );
}

function PotionTable({ potions }: { potions: Feature["potions"] }) {
  const t = useTranslations("Features");
  const cols = "lg:grid-cols-[13rem_1fr_3rem_minmax(0,17rem)]";

  return (
    <ul className="mt-3 overflow-hidden rounded-lg border border-[#d9a441]/25 bg-black/20">
      <li
        aria-hidden
        className={`hidden bg-[#d9a441]/10 px-3 py-2 lg:grid lg:gap-4 ${cols} ${headCell}`}
      >
        <span>{t("colPotion")}</span>
        <span>{t("colRecipe")}</span>
        <span className="text-center">{t("colYield")}</span>
        <span>{t("colEffect")}</span>
      </li>
      {potions.map((p) => (
        <li
          key={p.id}
          className={`grid gap-1.5 border-t border-white/5 px-3 py-2.5 text-[13px] max-lg:[&:nth-child(2)]:border-t-0 lg:items-center lg:gap-4 lg:py-1.5 ${cols}`}
        >
          <PotionLink item={p} className="font-bold text-[#f8cf6a]">
            {/* Mobile: số lượng thu được nằm cạnh tên */}
            <span className="ml-auto shrink-0 rounded-md border border-[#d9a441]/50 bg-[#160e2a] px-1.5 text-[11px] font-bold leading-5 text-amber-100 lg:hidden">
              ×{p.yield}
            </span>
          </PotionLink>
          <span className="leading-snug text-slate-300">
            <span className="sr-only">{t("colRecipe")}: </span>
            {p.recipe}
          </span>
          <span className="hidden text-center font-bold text-amber-100 lg:block">
            <span className="sr-only">{t("colYield")}: </span>
            {p.yield}
          </span>
          <span className="leading-snug text-slate-400 lg:text-slate-300">
            <span className="sr-only">{t("colEffect")}: </span>
            {p.effect}
          </span>
        </li>
      ))}
    </ul>
  );
}
