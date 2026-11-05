"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { getTranslations } from "next-intl/server";
import { FEEDBACK_MAX, MATH_PROBLEMS } from "@/data/feedback";

export type FeedbackState = {
  status: "idle" | "success" | "error";
  /** khóa chữ trong Support.errors.* hoặc "sent" */
  code?: "sent" | "email" | "content" | "math" | "rate" | "server";
  /** giữ lại dữ liệu khi lỗi để người dùng không phải gõ lại */
  values?: { email: string; content: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Giới hạn đơn giản trong bộ nhớ: tối đa 5 lần gửi / 10 phút / IP */
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const list = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (list.length >= LIMIT) return true;
  list.push(now);
  hits.set(ip, list);
  return false;
}

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!
  );

/** Khung email chung: nền tím đậm, tiêu đề vàng */
function layout(title: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#0d0919;font-family:Segoe UI,Arial,sans-serif;color:#ede7f6">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px">
    <div style="border:1px solid #d9a441;border-radius:16px;background:#1a1230;padding:28px">
      <p style="margin:0 0 6px;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#d9a441">ArcaneMage Wiki</p>
      <h1 style="margin:0 0 18px;font-size:22px;color:#f8cf6a">${title}</h1>
      ${body}
    </div>
  </div></body></html>`;
}

export async function sendFeedback(
  _prev: FeedbackState,
  formData: FormData
): Promise<FeedbackState> {
  const email = String(formData.get("email") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const values = { email, content };

  // Bẫy bot: ô ẩn, người thật không điền
  if (String(formData.get("website") ?? "")) return { status: "success", code: "sent" };

  if (!EMAIL_RE.test(email) || email.length > 200)
    return { status: "error", code: "email", values };
  if (content.length < 5 || content.length > FEEDBACK_MAX)
    return { status: "error", code: "content", values };

  const idx = Number(formData.get("mathId"));
  const answer = Number(String(formData.get("math") ?? "").trim());
  const problem = MATH_PROBLEMS[idx];
  if (!problem || answer !== problem.a)
    return { status: "error", code: "math", values };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (rateLimited(ip)) return { status: "error", code: "rate", values };

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error("[feedback] Thiếu SMTP_USER / SMTP_PASS trong .env.local");
    return { status: "error", code: "server", values };
  }
  const owner = process.env.FEEDBACK_TO || user;

  const t = await getTranslations("Support.mail");
  const safe = escapeHtml(content).replace(/\n/g, "<br>");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
    const from = `"ArcaneMage Wiki" <${user}>`;

    await Promise.all([
      // 1) Bản cho chủ wiki: chỉ email + nội dung, trả lời thẳng cho người gửi
      transporter.sendMail({
        from,
        to: owner,
        replyTo: email,
        subject: `[Góp ý] ${email}`,
        text: `Email: ${email}\n\n${content}`,
        html: layout(
          "Góp ý mới",
          `<p style="margin:0 0 8px"><b style="color:#f8cf6a">Email:</b> <a style="color:#c4b5fd" href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
           <div style="margin-top:12px;padding:14px;border-radius:10px;background:#0d0919;border:1px solid #3b2a5c;line-height:1.6">${safe}</div>`
        ),
      }),
      // 2) Bản cảm ơn cho người gửi (theo ngôn ngữ đang xem).
      //    Không chép lại nội dung để form không bị lợi dụng gửi thư rác tới người khác.
      transporter.sendMail({
        from,
        to: email,
        subject: t("subject"),
        text: `${t("hello")}\n\n${t("body1")}\n${t("body2")}\n\n${t("signature")}`,
        html: layout(
          t("title"),
          `<p style="margin:0 0 12px;line-height:1.6">${t("hello")}</p>
           <p style="margin:0 0 12px;line-height:1.6">${t("body1")}</p>
           <p style="margin:0;line-height:1.6">${t("body2")}</p>
           <p style="margin:20px 0 0;line-height:1.6;color:#c4b5fd">${t("signature").replaceAll("\n", "<br>")}</p>`
        ),
      }),
    ]);
    return { status: "success", code: "sent" };
  } catch (err) {
    console.error("[feedback] Gửi email lỗi:", err);
    return { status: "error", code: "server", values };
  }
}
