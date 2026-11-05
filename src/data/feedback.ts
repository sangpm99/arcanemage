/*
 * Bài toán chống spam thay cho reCAPTCHA.
 * Client hiển thị 1 bài ngẫu nhiên, server kiểm tra lại đáp án theo chỉ số.
 */
export const MATH_PROBLEMS = [
  { q: "3 + 5", a: 8 },
  { q: "12 − 4", a: 8 },
  { q: "6 × 2", a: 12 },
  { q: "15 ÷ 3", a: 5 },
  { q: "9 + 7", a: 16 },
  { q: "20 − 11", a: 9 },
  { q: "4 × 3", a: 12 },
  { q: "18 ÷ 2", a: 9 },
  { q: "7 + 8", a: 15 },
  { q: "5 × 5", a: 25 },
] as const;

export const FEEDBACK_MAX = 5000;

/** Mã QR ủng hộ trên R2 */
export const DONATE_QR = "qr.webp";
