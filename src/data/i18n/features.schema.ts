import type { FeatureDef } from "../features";

export type PerkText = { title: string; desc: string };

/**
 * Bắt buộc có đủ chữ cho mọi tính năng VÀ mọi ô hiệu ứng của nó,
 * thiếu là TypeScript báo lỗi.
 */
export type FeatureMessages = {
  [F in FeatureDef as F["id"]]: {
    title: string;
    desc: string;
    perks: Record<F["perks"][number]["id"], PerkText>;
  };
};
