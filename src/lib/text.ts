/** Bỏ dấu tiếng Việt + chữ thường: "Trượng Thần" → "truong than" (dùng cho ô tìm kiếm) */
export const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .trim();
