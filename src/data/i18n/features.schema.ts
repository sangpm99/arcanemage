import type { FeatureDef } from "../features";

export type PerkText = { title: string; desc: string };
export type PetText = {
  skill: string;
  /** đồ ăn ưa thích, mỗi món một phần tử */
  foods: string[];
};
export type SectionText = {
  title: string;
  points: string[];
  /** nhãn dưới ảnh nhỏ của khối (nếu có ảnh) */
  caption?: string;
};
export type QuestText = {
  name: string;
  /** đồ cần nộp, mỗi dòng một phần tử (các món trong một dòng cộng dồn) */
  needs: string[];
};

/* Chỉ tính năng có thú / khối quy tắc / nhiệm vụ mới cần chữ cho phần đó */
type PetTexts<F> = F extends { pets: readonly { id: infer P extends string }[] }
  ? { pets: Record<P, PetText> }
  : unknown;
type SectionTexts<F> = F extends {
  sections: readonly { id: infer S extends string }[];
}
  ? { sections: Record<S, SectionText> }
  : unknown;
type QuestTexts<F> = F extends {
  quests: readonly { id: infer Q extends string }[];
}
  ? { quests: Record<Q, QuestText> }
  : unknown;

/**
 * Bắt buộc có đủ chữ cho mọi tính năng, mọi ô hiệu ứng, mọi thú,
 * mọi khối quy tắc, mọi nhiệm vụ, thiếu là TypeScript báo lỗi.
 */
export type FeatureMessages = {
  [F in FeatureDef as F["id"]]: {
    title: string;
    /** dòng phụ luôn hiện ở đầu thẻ, kể cả khi thu gọn */
    tagline: string;
    desc: string;
    perks: Record<F["perks"][number]["id"], PerkText>;
  } & PetTexts<F> &
    SectionTexts<F> &
    QuestTexts<F>;
};
