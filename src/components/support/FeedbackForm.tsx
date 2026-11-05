"use client";

import { useActionState, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { sendFeedback, type FeedbackState } from "@/app/[locale]/support/actions";
import { FEEDBACK_MAX, MATH_PROBLEMS } from "@/data/feedback";
import { SupportIcon } from "./SupportIcon";

const initial: FeedbackState = { status: "idle" };

const pickOther = (cur: number) => {
  let n = cur;
  while (n === cur) n = Math.floor(Math.random() * MATH_PROBLEMS.length);
  return n;
};

const fieldBase =
  "rounded-xl border border-white/12 bg-black/35 px-4 py-3 text-[15px] text-slate-100 placeholder:text-violet-200/35 shadow-[inset_0_2px_8px_rgb(0_0_0/0.4)] outline-none transition-[border-color,box-shadow] focus:border-[#d9a441]/70 focus:shadow-[0_0_0_3px_rgb(217_164_65/0.15),inset_0_2px_8px_rgb(0_0_0/0.4)] aria-invalid:border-rose-400/70";
const fieldClass = `w-full ${fieldBase}`;

export default function FeedbackForm() {
  const t = useTranslations("Support");
  const locale = useLocale();
  const [state, action, pending] = useActionState(
    sendFeedback.bind(null, locale),
    initial
  );
  const [mathId, setMathId] = useState(0);
  const [formKey, setFormKey] = useState(0);
  const [length, setLength] = useState(0);

  // Chọn bài toán ngẫu nhiên sau khi hydrate (tránh lệch HTML server/client)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- random chỉ chạy ở client
    setMathId(Math.floor(Math.random() * MATH_PROBLEMS.length));
  }, []);

  // Gửi xong / sai đáp án → đổi bài toán khác
  useEffect(() => {
    if (state.status === "idle") return;
    /* eslint-disable react-hooks/set-state-in-effect -- phản hồi kết quả action */
    if (state.status === "success" || state.code === "math")
      setMathId((cur) => pickOther(cur));
    // React tự reset form sau action → mount lại form để điền lại dữ liệu khi lỗi
    setFormKey((k) => k + 1);
    setLength(state.values?.content.length ?? 0);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [state]);

  const err = state.status === "error" ? state.code : undefined;
  const values = state.status === "error" ? state.values : undefined;

  return (
    <form key={formKey} action={action} className="mt-6 grid gap-5">
      {/* Bẫy bot: ẩn với người dùng */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] size-px opacity-0"
      />

      <label className="grid gap-2">
        <span className="flex items-center gap-2.5 font-semibold text-[#f8cf6a]">
          <SupportIcon name="mail" className="size-5" />
          {t("form.email")} <span className="text-rose-400">*</span>
        </span>
        <input
          type="email"
          name="email"
          required
          maxLength={200}
          autoComplete="email"
          defaultValue={values?.email}
          placeholder={t("form.emailPlaceholder")}
          aria-invalid={err === "email" || undefined}
          className={fieldClass}
        />
      </label>

      <label className="grid gap-2">
        <span className="flex items-center gap-2.5 font-semibold text-[#f8cf6a]">
          <SupportIcon name="doc" className="size-5" />
          {t("form.content")} <span className="text-rose-400">*</span>
          <span className="ml-auto text-xs font-normal tabular-nums text-violet-200/50">
            {length}/{FEEDBACK_MAX}
          </span>
        </span>
        <textarea
          name="content"
          required
          minLength={5}
          maxLength={FEEDBACK_MAX}
          rows={5}
          defaultValue={values?.content}
          onChange={(e) => setLength(e.target.value.length)}
          placeholder={t("form.contentPlaceholder")}
          aria-invalid={err === "content" || undefined}
          className={`${fieldClass} arcane-scroll min-h-32 resize-y`}
        />
      </label>

      {/* Bài toán chống spam (thay reCAPTCHA) */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-3 sm:p-4">
        <SupportIcon name="calc" className="size-7 shrink-0 text-violet-300" />
        <div className="min-w-0 flex-1">
          <p className="text-xs text-violet-200/60">{t("form.mathLabel")}</p>
          <p className="text-lg font-bold tabular-nums text-slate-100">
            {MATH_PROBLEMS[mathId].q} = ?
          </p>
        </div>
        <input type="hidden" name="mathId" value={mathId} />
        <input
          name="math"
          inputMode="numeric"
          pattern="[0-9]*"
          required
          maxLength={4}
          autoComplete="off"
          aria-label={t("form.mathLabel")}
          aria-invalid={err === "math" || undefined}
          key={mathId}
          className={`${fieldBase} w-24 shrink-0 text-center text-lg font-bold`}
        />
        <button
          type="button"
          onClick={() => setMathId((cur) => pickOther(cur))}
          aria-label={t("form.mathNew")}
          title={t("form.mathNew")}
          className="grid size-10 place-items-center rounded-full border border-white/10 text-violet-200 transition-colors hover:border-[#d9a441]/60 hover:text-[#f8cf6a]"
        >
          <SupportIcon name="refresh" className="size-5" />
        </button>
      </div>

      {/* Thông báo kết quả */}
      <div aria-live="polite">
        {state.status === "success" && (
          <p className="flex items-start gap-2.5 rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-3 text-sm text-emerald-100 motion-safe:animate-fade-in">
            <SupportIcon name="check" className="size-5 shrink-0 text-emerald-300" />
            {t("form.sent")}
          </p>
        )}
        {err && (
          <p className="flex items-start gap-2.5 rounded-xl border border-rose-400/40 bg-rose-500/10 p-3 text-sm text-rose-100 motion-safe:animate-fade-in">
            <SupportIcon name="alert" className="size-5 shrink-0 text-rose-300" />
            {t(`errors.${err as Exclude<typeof err, "sent">}`)}
          </p>
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <span className="hidden h-px flex-1 bg-linear-to-r from-transparent to-[#d9a441]/60 sm:block" />
        <button type="submit" disabled={pending} className="gold-cta disabled:cursor-wait disabled:opacity-70">
          <SupportIcon
            name="send"
            className={`size-5 ${pending ? "motion-safe:animate-pulse" : ""}`}
          />
          {pending ? t("form.sending") : t("form.submit")}
        </button>
        <span className="hidden h-px flex-1 bg-linear-to-l from-transparent to-[#d9a441]/60 sm:block" />
      </div>
    </form>
  );
}
