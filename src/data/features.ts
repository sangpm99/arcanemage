import { img } from "@/lib/cdn";

/*
 * DỮ LIỆU GỐC CỦA TÍNH NĂNG (icon, màu, ảnh, liên kết).
 * Chữ (tên, mô tả) nằm ở i18n/features.vi.ts và i18n/features.en.ts.
 *
 * Ảnh minh họa: tên file theo id, ví dụ "blood-moon.webp".
 * Chưa upload lên R2 thì trang hiện ảnh thay thế theo `theme`.
 */

export const FEATURE_CATEGORIES = ["worldEvent", "pve"] as const;
export type FeatureCategory = (typeof FEATURE_CATEGORIES)[number];

/** Icon vẽ sẵn trong components/features/FeatureIcon.tsx */
export type FeatureIconName =
  | "moon"
  | "gate"
  | "calendar"
  | "swords"
  | "heartDown"
  | "speed"
  | "swordFast"
  | "crystal"
  | "skull"
  | "warning"
  | "team"
  | "stairs"
  | "chest";

/** Màu icon của từng ô hiệu ứng */
export type Tone = "red" | "orange" | "blue" | "green" | "purple" | "gold";

export type Perk = {
  id: string;
  icon: FeatureIconName;
  tone: Tone;
  /** bấm vào ô → mở trang khác, ví dụ "/items#mana-stone" */
  href?: string;
};

export type FeatureBase = {
  id: string;
  icon: FeatureIconName;
  category: FeatureCategory;
  /** màu ảnh thay thế khi chưa có ảnh */
  theme: "blood" | "arcane";
  perks: readonly Perk[];
};

/* Thứ tự trong mảng = thứ tự hiển thị */
export const features = [
  {
    id: "blood-moon",
    icon: "moon",
    category: "worldEvent",
    theme: "blood",
    perks: [
      { id: "hp-down", icon: "heartDown", tone: "red" },
      { id: "move-speed", icon: "speed", tone: "orange" },
      { id: "attack-speed", icon: "swordFast", tone: "orange" },
      {
        id: "mana-stone-drop",
        icon: "crystal",
        tone: "blue",
        href: "/items#mana-stone",
      },
      { id: "zombie", icon: "skull", tone: "green" },
    ],
  },
  {
    id: "dungeon",
    icon: "gate",
    category: "pve",
    theme: "arcane",
    perks: [
      { id: "danger", icon: "warning", tone: "red" },
      { id: "team", icon: "team", tone: "blue" },
      { id: "depth", icon: "stairs", tone: "purple" },
      {
        id: "rewards",
        icon: "chest",
        tone: "gold",
        href: "/items#mana-stone",
      },
    ],
  },
] as const satisfies readonly FeatureBase[];

export type FeatureDef = (typeof features)[number];
export type FeatureId = FeatureDef["id"];

export const featureImage = (id: string) => img(`${id}.webp`);
