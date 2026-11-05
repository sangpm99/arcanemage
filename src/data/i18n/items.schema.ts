import type { ItemId } from "../items";

export type ItemText = {
  name: string;
  /** mô tả công dụng / hiệu ứng */
  desc: string;
  /** ghi chú thêm, hiện dạng gạch đầu dòng */
  notes?: string[];
  /** cách kiếm được (dùng cho đồ không chế tạo được) */
  source?: string;
};

/** Bắt buộc có đủ chữ cho mọi vật phẩm, thiếu là TypeScript báo lỗi */
export type ItemMessages = Record<ItemId, ItemText>;
