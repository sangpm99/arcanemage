import type { Locale } from "next-intl";
import {
  features,
  featureImage,
  petImage,
  type FeatureBase,
  type FeatureCategory,
  type FeatureIconName,
  type FeatureSection,
  type Perk,
  type Pet,
  type Quest,
} from "./features";
import { elements } from "./elements";
import { img } from "@/lib/cdn";
import { getItems, type ItemRef, type ResolvedIngredient } from "./items-view";
import type {
  FeatureMessages,
  PerkText,
  PetText,
  QuestText,
  SectionText,
} from "./i18n/features.schema";
import vi from "./i18n/features.vi";
import en from "./i18n/features.en";
import dataVi from "./i18n/vi";
import dataEn from "./i18n/en";

/* ---------- Dữ liệu đã gộp, gửi xuống giao diện ---------- */
export type FeaturePet = Omit<Pet, "element"> &
  PetText & {
    image: string;
    element: { id: Pet["element"]; name: string; color: string; icon: string };
  };

export type FeatureQuest = Omit<Quest, "reward"> &
  QuestText & { reward: ItemRef };

/** Một dòng trong bảng thuốc, lấy từ công thức nấu ở trang Vật phẩm */
export type FeaturePotion = ItemRef & {
  /** công thức dạng chữ, ví dụ "1 Ma thạch + 2 (Toma Root / Potato)" */
  recipe: string;
  yield: number;
  effect: string;
};

export type Feature = {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  icon: FeatureIconName;
  category: FeatureCategory;
  theme: FeatureBase["theme"];
  image: string;
  perks: (Perk & PerkText)[];
  pets: FeaturePet[];
  sections: (Omit<FeatureSection, "image"> &
    SectionText & { image?: string })[];
  sectionCols: 2 | 3;
  quests: FeatureQuest[];
  shop: { item: ItemRef; price: number }[];
  potions: FeaturePotion[];
};

const dict: Record<Locale, FeatureMessages> = { vi, en };
const elementNames = { vi: dataVi.elements, en: dataEn.elements };

type AnyText = {
  title: string;
  tagline: string;
  desc: string;
  perks: Record<string, PerkText>;
  pets?: Record<string, PetText>;
  sections?: Record<string, SectionText>;
  quests?: Record<string, QuestText>;
};

const ingredientText = (ing: ResolvedIngredient) => {
  if (ing.type === "hp") return "";
  if (ing.type === "anyOf")
    return `${ing.qty} (${ing.options.map((o) => o.name).join(" / ")})`;
  return `${ing.qty ?? 1} ${ing.name}`;
};

/** Chỉ giữ phần ItemRef (không gửi cả dữ liệu vật phẩm xuống trình duyệt) */
const toRef = ({ id, name, image, category }: ItemRef): ItemRef => ({
  id,
  name,
  image,
  category,
});

export function getFeatures(locale: Locale): Feature[] {
  const t = dict[locale] as Record<string, AnyText>;
  const items = getItems(locale);
  const itemById = new Map(items.map((i) => [i.id, i]));
  const itemRef = (id: string) => {
    const item = itemById.get(id);
    if (!item) throw new Error(`[features] Không tìm thấy vật phẩm "${id}"`);
    return toRef(item);
  };

  // Bảng thuốc: mọi vật phẩm có công thức nấu, theo thứ tự trang Vật phẩm
  const potions: FeaturePotion[] = items
    .filter((i) => i.recipe?.kind === "brew")
    .map((i) => ({
      ...toRef(i),
      recipe: i
        .recipe!.ingredients.map(ingredientText)
        .filter(Boolean)
        .join(" + "),
      yield: i.recipe!.yield ?? 1,
      effect: i.desc,
    }));

  return (features as readonly FeatureBase[]).map((base) => {
    const text = t[base.id];
    const sections = base.sections ?? [];
    return {
      id: base.id,
      title: text.title,
      tagline: text.tagline,
      desc: text.desc,
      icon: base.icon,
      category: base.category,
      theme: base.theme,
      image: featureImage(base.id),
      perks: base.perks.map((p) => ({ ...p, ...text.perks[p.id] })),
      pets: (base.pets ?? []).map((p) => ({
        ...p,
        ...text.pets![p.id],
        image: petImage(p.id),
        element: {
          id: p.element,
          name: elementNames[locale][p.element].name,
          color: elements[p.element].color,
          icon: elements[p.element].icon,
        },
      })),
      sections: sections.map((s) => ({
        ...s,
        ...text.sections![s.id],
        image: s.image && img(`${s.image}.webp`),
      })),
      sectionCols: base.sectionCols ?? 3,
      quests: (base.quests ?? []).map((q) => ({
        ...q,
        ...text.quests![q.id],
        reward: itemRef(q.reward),
      })),
      shop: (base.shop ?? []).map((s) => ({
        item: itemRef(s.item),
        price: s.price,
      })),
      potions: sections.some((s) => s.block === "potions") ? potions : [],
    };
  });
}
