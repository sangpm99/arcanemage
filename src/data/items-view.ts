import type { Locale } from "next-intl";
import {
  items,
  itemImage,
  materials,
  stations,
  type ItemBase,
  type ItemCategory,
  type ItemStats,
  type MaterialId,
  type Recipe,
} from "./items";
import { characters } from "./characters";
import type { ItemMessages } from "./i18n/items.schema";
import vi from "./i18n/items.vi";
import en from "./i18n/items.en";
import { img } from "@/lib/cdn";

/* ---------- Dữ liệu đã gộp, gửi xuống giao diện ---------- */
export type ItemRef = {
  id: string;
  name: string;
  image: string;
  /** chỉ có với vật phẩm trong wiki (không có với nguyên liệu, trạm) */
  category?: ItemCategory;
};

export type ResolvedIngredient =
  | ({ type: "item"; qty?: number } & ItemRef)
  | ({ type: "material"; qty: number } & ItemRef)
  | { type: "anyOf"; qty: number; options: ItemRef[] }
  | { type: "hp"; qty: number };

export type Item = ItemRef & {
  category: ItemCategory;
  desc: string;
  notes: string[];
  source?: string;
  stats: ItemStats;
  recipe?: {
    kind: Recipe["kind"];
    stations: ItemRef[];
    ingredients: ResolvedIngredient[];
    /** số lượng thu được mỗi lần làm, chỉ có khi > 1 */
    yield?: number;
  };
  unlocksSkills?: ItemBase["unlocksSkills"];
  exclusiveTo?: ItemRef;
  /** các vật phẩm dùng món này làm nguyên liệu (tự tính) */
  usedIn: ItemRef[];
  /** vật phẩm này là trạm: các món làm ra tại đây (tự tính) */
  makes: ItemRef[];
};

const dict: Record<Locale, ItemMessages> = { vi, en };

const materialRef = (id: MaterialId): ItemRef => ({
  id,
  name: materials[id],
  image: img(`${id}.webp`),
});

export function getItems(locale: Locale): Item[] {
  const t = dict[locale] as Record<string, ItemMessages[keyof ItemMessages]>;
  const list = items as readonly ItemBase[];

  const ref = (id: string): ItemRef => {
    const text = t[id];
    const base = list.find((b) => b.id === id);
    if (!text || !base)
      throw new Error(`[items] Không tìm thấy vật phẩm "${id}"`);
    return {
      id,
      name: text.name,
      image: itemImage(id),
      category: base.category,
    };
  };

  return list.map((base) => {
    const text = t[base.id];
    const recipe = base.recipe;

    return {
      ...ref(base.id),
      category: base.category,
      desc: text.desc,
      notes: text.notes ?? [],
      source: text.source,
      stats: base.stats ?? {},
      unlocksSkills: base.unlocksSkills,
      recipe: recipe && {
        kind: recipe.kind,
        stations: [
          ...(recipe.stations ?? []).map((id) => ({
            id,
            name: stations[id],
            image: img(`${id}.webp`),
          })),
          ...(recipe.stationItems ?? []).map(ref),
        ],
        ingredients: recipe.ingredients.map((ing): ResolvedIngredient => {
          if ("hp" in ing) return { type: "hp", qty: ing.hp };
          if ("material" in ing)
            return { type: "material", qty: ing.qty, ...materialRef(ing.material) };
          if ("anyOf" in ing)
            return {
              type: "anyOf",
              qty: ing.qty,
              options: ing.anyOf.map(materialRef),
            };
          return { type: "item", qty: ing.qty, ...ref(ing.item) };
        }),
        ...(recipe.yield && recipe.yield > 1 && { yield: recipe.yield }),
      },
      exclusiveTo: base.exclusiveTo && exclusiveRef(base.exclusiveTo),
      usedIn: list
        .filter((other) =>
          other.recipe?.ingredients.some(
            (ing) => "item" in ing && ing.item === base.id
          )
        )
        .map((other) => ref(other.id)),
      makes: list
        .filter((other) => other.recipe?.stationItems?.includes(base.id))
        .map((other) => ref(other.id)),
    };
  });
}

function exclusiveRef(id: string): ItemRef | undefined {
  const c = characters.find((ch) => ch.id === id);
  return c && { id: c.id, name: c.name, image: c.avatar };
}
