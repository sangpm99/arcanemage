import type { Locale } from "next-intl";
import {
  features,
  featureImage,
  type FeatureBase,
  type FeatureCategory,
  type FeatureIconName,
  type Perk,
} from "./features";
import type { FeatureMessages, PerkText } from "./i18n/features.schema";
import vi from "./i18n/features.vi";
import en from "./i18n/features.en";

/* ---------- Dữ liệu đã gộp, gửi xuống giao diện ---------- */
export type Feature = {
  id: string;
  title: string;
  desc: string;
  icon: FeatureIconName;
  category: FeatureCategory;
  theme: FeatureBase["theme"];
  image: string;
  perks: (Perk & PerkText)[];
};

const dict: Record<Locale, FeatureMessages> = { vi, en };

type AnyText = {
  title: string;
  desc: string;
  perks: Record<string, PerkText>;
};

export function getFeatures(locale: Locale): Feature[] {
  const t = dict[locale] as Record<string, AnyText>;

  return (features as readonly FeatureBase[]).map((base) => {
    const text = t[base.id];
    return {
      id: base.id,
      title: text.title,
      desc: text.desc,
      icon: base.icon,
      category: base.category,
      theme: base.theme,
      image: featureImage(base.id),
      perks: base.perks.map((p) => ({ ...p, ...text.perks[p.id] })),
    };
  });
}
