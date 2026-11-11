import { img } from "@/lib/cdn";
import type { CharacterId } from "./characters";

/*
 * DỮ LIỆU GỐC CỦA VẬT PHẨM (số liệu, ảnh, công thức).
 * Chữ (tên, mô tả) nằm ở i18n/items.vi.ts và i18n/items.en.ts.
 *
 * Ảnh: tạm dùng tên file dạng gạch ngang theo id, ví dụ "staff-divine.webp".
 * Khi có ảnh thật, upload lên R2 đúng tên đó là tự hiện.
 */

/* ---------- Nguyên liệu trong game (tên tiếng Anh, giữ nguyên ở mọi ngôn ngữ) ---------- */
export const materials = {
  twigs: "Twigs",
  flint: "Flint",
  "living-log": "Living Log",
  "nightmare-fuel": "Nightmare Fuel",
  "pure-brilliance": "Pure Brilliance",
  "brightshade-husk": "Brightshade Husk",
  "walrus-tusk": "Walrus Tusk",
  "dark-tatters": "Dark Tatters",
  "pure-horror": "Pure Horror",
  "enlightened-shard": "Enlightened Shard",
  "possessed-shadow-atrium": "Possessed Shadow Atrium",
  papyrus: "Papyrus",
  marble: "Marble",
  rope: "Rope",
  "cut-grass": "Cut Grass",
  silk: "Silk",
  "butterfly-wings": "Butterfly Wings",
  "toma-root": "Toma Root",
  "dragon-fruit": "Dragon Fruit",
  potato: "Potato",
  "batilisk-wing": "Batilisk Wing",
  honey: "Honey",
  "blue-cap": "Blue Cap",
  "green-cap": "Green Cap",
  "moon-shroom": "Moon Shroom",
  "hounds-tooth": "Hound's Tooth",
  "bunny-puff": "Bunny Puff",
  petals: "Petals",
  "telltale-heart": "Telltale Heart",
} as const;
export type MaterialId = keyof typeof materials;

/* ---------- Trạm chế tạo ---------- */
export const stations = {
  "alchemy-engine": "Alchemy Engine",
  brightsmithy: "Brightsmithy",
  "shadowcraft-plinth": "Shadowcraft Plinth",
  "shadow-manipulator": "Shadow Manipulator",
  "magicians-chest": "Magician's Chest",
} as const;
export type StationId = keyof typeof stations;

/* ---------- Nhóm vật phẩm ---------- */
export const ITEM_CATEGORIES = [
  "weapon",
  "armor",
  "vehicle",
  "potion",
  "general",
] as const;
export type ItemCategory = (typeof ITEM_CATEGORIES)[number];

/* ---------- Kiểu dữ liệu ---------- */
export type Ingredient =
  | { item: string; qty?: number } // vật phẩm trong wiki (bấm vào được)
  | { material: MaterialId; qty: number } // nguyên liệu game
  | { anyOf: MaterialId[]; qty: number } // chọn 1 trong các nguyên liệu ("hoặc")
  | { hp: number }; // tốn máu

export type Recipe = {
  /**
   * craft: chế tạo · upgrade: nâng cấp trong trạm · apply: dùng vật phẩm lên đồ
   * · brew: nấu thuốc
   */
  kind: "craft" | "upgrade" | "apply" | "brew";
  /** nhiều trạm = chọn 1 trong các trạm ("hoặc") */
  stations?: StationId[];
  ingredients: Ingredient[];
  /** số lượng thu được mỗi lần làm (bỏ trống = 1) */
  yield?: number;
};

export type ItemStats = {
  attack?: number;
  armorPen?: number; // %
  moveSpeed?: number; // %
  damageResist?: number; // %
};

export type ItemBase = {
  id: string;
  category: ItemCategory;
  stats?: ItemStats;
  recipe?: Recipe;
  /** mở khóa 3 kỹ năng của bậc này */
  unlocksSkills?: "basic" | "intermediate" | "advanced";
  /** chỉ nhân vật này dùng được */
  exclusiveTo?: CharacterId;
};

const STAFF_HIGH = { attack: 136, armorPen: 45, moveSpeed: 25 };
const STAFF_SUPER = { attack: 158, armorPen: 45, moveSpeed: 25 };
const STAFF_DIVINE = { attack: 200, armorPen: 45, moveSpeed: 35 };

/* Thứ tự trong mảng = thứ tự hiển thị trên lưới */
export const items = [
  /* ===== Vũ khí: Trượng ===== */
  {
    id: "staff-novice",
    category: "weapon",
    stats: { attack: 68 },
    recipe: {
      kind: "craft",
      stations: ["alchemy-engine"],
      ingredients: [
        { material: "twigs", qty: 5 },
        { material: "flint", qty: 3 },
      ],
    },
    unlocksSkills: "basic",
  },
  {
    id: "staff-adept",
    category: "weapon",
    stats: { attack: 82 },
    recipe: {
      kind: "craft",
      stations: ["alchemy-engine"],
      ingredients: [
        { item: "staff-novice" },
        { material: "living-log", qty: 3 },
        { material: "nightmare-fuel", qty: 10 },
      ],
    },
    unlocksSkills: "intermediate",
  },
  {
    id: "staff-light-greater",
    category: "weapon",
    stats: STAFF_HIGH,
    recipe: {
      kind: "craft",
      stations: ["brightsmithy"],
      ingredients: [
        { item: "staff-adept" },
        { material: "pure-brilliance", qty: 3 },
        { material: "brightshade-husk", qty: 4 },
        { material: "walrus-tusk", qty: 1 },
      ],
    },
  },
  {
    id: "staff-shadow-greater",
    category: "weapon",
    stats: STAFF_HIGH,
    recipe: {
      kind: "craft",
      stations: ["shadowcraft-plinth"],
      ingredients: [
        { item: "staff-adept" },
        { material: "dark-tatters", qty: 3 },
        { material: "pure-horror", qty: 4 },
        { material: "walrus-tusk", qty: 1 },
      ],
    },
  },
  {
    id: "staff-light-supreme",
    category: "weapon",
    stats: STAFF_SUPER,
    recipe: {
      kind: "apply",
      ingredients: [
        { material: "enlightened-shard", qty: 1 },
        { item: "staff-light-greater" },
      ],
    },
    unlocksSkills: "advanced",
  },
  {
    id: "staff-shadow-supreme",
    category: "weapon",
    stats: STAFF_SUPER,
    recipe: {
      kind: "apply",
      ingredients: [
        { material: "possessed-shadow-atrium", qty: 1 },
        { item: "staff-shadow-greater" },
      ],
    },
    unlocksSkills: "advanced",
  },
  {
    id: "staff-divine",
    category: "weapon",
    stats: STAFF_DIVINE,
    recipe: {
      kind: "craft",
      stations: ["brightsmithy", "shadowcraft-plinth"],
      ingredients: [
        { item: "staff-light-supreme" },
        { item: "staff-shadow-supreme" },
      ],
    },
  },

  /* ===== Vũ khí: Mật Điển Hắc Ám (riêng Maxwell) ===== */
  {
    id: "codex-dark",
    category: "weapon",
    stats: { attack: 68 },
    recipe: {
      kind: "craft",
      ingredients: [
        { material: "papyrus", qty: 2 },
        { material: "nightmare-fuel", qty: 2 },
        { hp: 50 },
      ],
    },
    unlocksSkills: "basic",
    exclusiveTo: "maxwell",
  },
  {
    id: "codex-ancient",
    category: "weapon",
    stats: { attack: 82 },
    recipe: {
      kind: "upgrade",
      stations: ["magicians-chest"],
      ingredients: [
        { item: "codex-dark" },
        { material: "living-log", qty: 3 },
        { material: "nightmare-fuel", qty: 10 },
      ],
    },
    unlocksSkills: "intermediate",
    exclusiveTo: "maxwell",
  },
  {
    id: "codex-abyss",
    category: "weapon",
    stats: STAFF_SUPER,
    recipe: {
      kind: "upgrade",
      stations: ["magicians-chest"],
      ingredients: [
        { item: "codex-ancient" },
        { material: "dark-tatters", qty: 3 },
        { material: "pure-horror", qty: 4 },
        { material: "walrus-tusk", qty: 1 },
      ],
    },
    unlocksSkills: "advanced",
    exclusiveTo: "maxwell",
  },
  {
    id: "codex-eternal-night",
    category: "weapon",
    stats: STAFF_DIVINE,
    recipe: {
      kind: "upgrade",
      stations: ["magicians-chest"],
      ingredients: [
        { item: "codex-abyss" },
        { material: "possessed-shadow-atrium", qty: 1 },
      ],
    },
    exclusiveTo: "maxwell",
  },

  /* ===== Giáp ===== */
  {
    id: "quartz-armor",
    category: "armor",
    stats: { damageResist: 95 },
    recipe: {
      kind: "craft",
      stations: ["alchemy-engine"],
      ingredients: [
        { material: "marble", qty: 6 },
        { material: "rope", qty: 2 },
        { item: "mana-stone", qty: 1 },
      ],
    },
  },
  {
    id: "mage-hat",
    category: "armor",
    stats: { damageResist: 90 },
    recipe: {
      kind: "craft",
      stations: ["shadow-manipulator"],
      ingredients: [],
    },
  },
  {
    id: "mage-robe",
    category: "armor",
    stats: { damageResist: 90 },
    recipe: {
      kind: "craft",
      stations: ["shadow-manipulator"],
      ingredients: [],
    },
  },

  /* ===== Phương tiện ===== */
  {
    id: "broom-orb",
    category: "vehicle",
    recipe: {
      kind: "craft",
      stations: ["shadow-manipulator"],
      ingredients: [
        { material: "living-log", qty: 3 },
        { item: "mana-stone", qty: 2 },
        { material: "cut-grass", qty: 3 },
        { material: "silk", qty: 2 },
      ],
    },
  },

  /* ===== Dược phẩm ===== */
  {
    id: "mana-potion",
    category: "potion",
    recipe: { kind: "craft", stations: ["alchemy-engine"], ingredients: [] },
  },
  {
    id: "health-potion",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 3,
      ingredients: [
        { item: "mana-stone", qty: 1 },
        { material: "butterfly-wings", qty: 1 },
        { anyOf: ["toma-root", "dragon-fruit", "potato"], qty: 2 },
      ],
    },
  },
  {
    id: "arcane-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 3,
      ingredients: [
        { item: "mana-stone", qty: 1 },
        { material: "batilisk-wing", qty: 1 },
        { material: "nightmare-fuel", qty: 2 },
      ],
    },
  },
  {
    id: "warding-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 3,
      ingredients: [
        { item: "mana-stone", qty: 1 },
        { material: "honey", qty: 1 },
        { material: "blue-cap", qty: 2 },
      ],
    },
  },
  {
    id: "swiftness-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 5,
      ingredients: [
        { item: "ancient-stone", qty: 1 },
        { material: "hounds-tooth", qty: 2 },
        { material: "bunny-puff", qty: 1 },
      ],
    },
  },
  {
    id: "sanity-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      ingredients: [
        { material: "green-cap", qty: 2 },
        { material: "petals", qty: 2 },
      ],
    },
  },
  {
    id: "greater-health-potion",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 5,
      ingredients: [
        { item: "ancient-stone", qty: 1 },
        { material: "telltale-heart", qty: 1 },
        { material: "butterfly-wings", qty: 2 },
      ],
    },
  },
  {
    id: "greater-arcane-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 5,
      ingredients: [
        { item: "ancient-stone", qty: 1 },
        { material: "batilisk-wing", qty: 1 },
        { material: "pure-horror", qty: 1 },
        { material: "pure-brilliance", qty: 1 },
      ],
    },
  },
  {
    id: "greater-warding-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 5,
      ingredients: [
        { item: "ancient-stone", qty: 1 },
        { material: "honey", qty: 1 },
        { material: "blue-cap", qty: 1 },
        { material: "moon-shroom", qty: 1 },
      ],
    },
  },
  {
    id: "greater-sanity-elixir",
    category: "potion",
    recipe: {
      kind: "brew",
      yield: 5,
      ingredients: [
        { item: "ancient-stone", qty: 1 },
        { material: "green-cap", qty: 2 },
        { material: "petals", qty: 1 },
      ],
    },
  },

  /* ===== Tổng hợp ===== */
  { id: "mana-stone", category: "general" },
  { id: "ancient-seed", category: "general" },
  { id: "ancient-tree", category: "general" },
  { id: "ancient-stone", category: "general" },
  { id: "cursed-heart", category: "general" },
  { id: "cursed-mask", category: "general" },
  { id: "cursed-book", category: "general" },
] as const satisfies readonly ItemBase[];

export type ItemId = (typeof items)[number]["id"];

/** Ảnh theo quy ước tên gạch ngang + .webp */
export const itemImage = (id: string) => img(`${id}.webp`);
