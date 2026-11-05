import { img } from "@/lib/cdn";
import type { ItemId } from "./items";

/*
 * DỮ LIỆU GỐC CỦA CỐT TRUYỆN (giai đoạn, thử thách, phần thưởng).
 * Chữ nằm ở i18n/story.vi.ts và i18n/story.en.ts.
 *
 * Ảnh boss / thử thách: tên file theo id, ví dụ "ancient-fuelweaver.webp".
 * Chưa upload lên R2 thì hiện cảnh thay thế theo `scene`.
 * Ảnh phần thưởng lấy từ trang Vật phẩm (cursed-heart.webp...).
 */

export type StoryIconName =
  | "triad"
  | "triadOpen"
  | "star4"
  | "spider"
  | "celestial"
  | "maze";

export type Trial = {
  id: string;
  /** tên boss / thử thách (giữ tiếng Anh ở mọi ngôn ngữ) */
  name: string;
  icon: StoryIconName;
  scene: "blood" | "celestial" | "arcane";
  reward: ItemId;
};

export type ChapterBase = {
  id: string;
  emblem: StoryIconName;
  /** chưa có trong game → hiện ??? + khóa */
  locked?: boolean;
  trials?: readonly Trial[];
};

/* Thứ tự trong mảng = thứ tự giai đoạn */
export const chapters = [
  {
    id: "stage-1",
    emblem: "triad",
    trials: [
      {
        id: "ancient-fuelweaver",
        name: "Ancient Fuelweaver",
        icon: "spider",
        scene: "blood",
        reward: "cursed-heart",
      },
      {
        id: "celestial-champion",
        name: "Celestial Champion",
        icon: "celestial",
        scene: "celestial",
        reward: "cursed-mask",
      },
      {
        id: "sanctum-maze",
        name: "Sanctum Maze",
        icon: "maze",
        scene: "arcane",
        reward: "cursed-book",
      },
    ],
  },
  { id: "stage-2", emblem: "triadOpen", locked: true },
  { id: "stage-3", emblem: "star4", locked: true },
] as const satisfies readonly ChapterBase[];

export type ChapterDef = (typeof chapters)[number];
/** Giai đoạn đã mở (có thử thách) → bắt buộc có chữ */
export type OpenChapter = Extract<ChapterDef, { trials: readonly Trial[] }>;

export const trialImage = (id: string) => img(`${id}.webp`);
