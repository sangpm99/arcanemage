import { img } from "@/lib/cdn";
import type { ElementId } from "./elements";

/*
 * DỮ LIỆU GỐC CỦA TÍNH NĂNG (icon, màu, ảnh, liên kết).
 * Chữ (tên, mô tả) nằm ở i18n/features.vi.ts và i18n/features.en.ts.
 *
 * Ảnh minh họa: tên file theo id, ví dụ "blood-moon.webp".
 * Chưa upload lên R2 thì trang hiện ảnh thay thế theo `theme`.
 */

export const FEATURE_CATEGORIES = ["worldEvent", "pve", "companion"] as const;
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
  | "chest"
  | "paw"
  | "scroll"
  | "user"
  | "sparkle"
  | "heart"
  | "orb"
  | "cancel"
  | "food"
  | "clock";

/** Màu icon của từng ô hiệu ứng */
export type Tone = "red" | "orange" | "blue" | "green" | "purple" | "gold";

export type Perk = {
  id: string;
  icon: FeatureIconName;
  tone: Tone;
  /** bấm vào ô → mở trang khác, ví dụ "/items#mana-stone" */
  href?: string;
};

/** Thú khế ước. Ảnh theo id, ví dụ "friendly-peeper.webp" */
export type Pet = {
  id: string;
  /** tên trong game, giữ nguyên ở mọi ngôn ngữ */
  name: string;
  element: ElementId;
  /** thời gian hồi skill (phút) */
  cooldown: number;
};

/** Khối quy tắc dạng gạch đầu dòng */
export type FeatureSection = { id: string; icon: FeatureIconName; tone: Tone };

export type FeatureBase = {
  id: string;
  icon: FeatureIconName;
  category: FeatureCategory;
  /** màu ảnh thay thế khi chưa có ảnh */
  theme: "blood" | "arcane" | "wild";
  perks: readonly Perk[];
  pets?: readonly Pet[];
  sections?: readonly FeatureSection[];
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
  {
    id: "pet-contract",
    icon: "paw",
    category: "companion",
    theme: "wild",
    perks: [
      { id: "wild", icon: "paw", tone: "green" },
      { id: "sign", icon: "scroll", tone: "gold" },
      { id: "one-pet", icon: "user", tone: "blue" },
      { id: "use-skill", icon: "sparkle", tone: "purple" },
    ],
    pets: [
      { id: "broodling", name: "Broodling", element: "fire", cooldown: 4 },
      { id: "ewelet", name: "Ewelet", element: "nature", cooldown: 16 },
      { id: "glomglom", name: "Glomglom", element: "nature", cooldown: 16 },
      {
        id: "friendly-peeper",
        name: "Friendly Peeper",
        element: "dark",
        cooldown: 4,
      },
      { id: "giblet", name: "Giblet", element: "lightning", cooldown: 8 },
      { id: "kittykit", name: "Kittykit", element: "water", cooldown: 8 },
      { id: "mothling", name: "Mothling", element: "light", cooldown: 8 },
      { id: "vargling", name: "Vargling", element: "earth", cooldown: 16 },
    ],
    sections: [
      { id: "bond", icon: "heart", tone: "red" },
      { id: "assist", icon: "orb", tone: "purple" },
      { id: "cancel", icon: "cancel", tone: "orange" },
    ],
  },
] as const satisfies readonly FeatureBase[];

export type FeatureDef = (typeof features)[number];
export type FeatureId = FeatureDef["id"];

export const featureImage = (id: string) => img(`${id}.webp`);
export const petImage = featureImage;
