import type { FeatureDef } from "../features";

export type PerkText = { title: string; desc: string };
export type PetText = {
  skill: string;
  /** đồ ăn ưa thích, mỗi món một phần tử */
  foods: string[];
};
export type SectionText = { title: string; points: string[] };

/** Chỉ tính năng có thú mới cần chữ cho thú + khối quy tắc */
type PetTexts<F> = F extends {
  pets: readonly { id: infer P extends string }[];
  sections: readonly { id: infer S extends string }[];
}
  ? { pets: Record<P, PetText>; sections: Record<S, SectionText> }
  : unknown;

/**
 * Bắt buộc có đủ chữ cho mọi tính năng, mọi ô hiệu ứng, mọi thú,
 * thiếu là TypeScript báo lỗi.
 */
export type FeatureMessages = {
  [F in FeatureDef as F["id"]]: {
    title: string;
    /** dòng phụ luôn hiện ở đầu thẻ, kể cả khi thu gọn */
    tagline: string;
    desc: string;
    perks: Record<F["perks"][number]["id"], PerkText>;
  } & PetTexts<F>;
};
