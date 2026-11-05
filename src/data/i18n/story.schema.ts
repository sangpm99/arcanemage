import type { OpenChapter } from "../story";

/**
 * Chữ cho các giai đoạn ĐÃ MỞ. Giai đoạn còn khóa dùng chữ chung "???"
 * trong messages/*.json. Thiếu chữ là TypeScript báo lỗi.
 */
export type StoryMessages = {
  [C in OpenChapter as C["id"]]: {
    title: string;
    /** dòng phụ in nghiêng dưới tiêu đề */
    tagline: string;
    desc: string;
    /** mục đích của phần thưởng từng thử thách */
    trials: Record<C["trials"][number]["id"], { purpose: string }>;
  };
};
