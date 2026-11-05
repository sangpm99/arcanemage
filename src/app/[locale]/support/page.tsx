import { getTranslations } from "next-intl/server";
import MagicBackdrop from "@/components/MagicBackdrop";
import FeedbackForm from "@/components/support/FeedbackForm";
import QrImage from "@/components/support/QrImage";
import { SupportIcon, type SupportIconName } from "@/components/support/SupportIcon";
import { DONATE_QR } from "@/data/feedback";
import { img } from "@/lib/cdn";

function Corners() {
  return (
    <>
      <span className="stage-corner -left-px -top-px scale-75" />
      <span className="stage-corner -right-px -top-px rotate-90 scale-75" />
      <span className="stage-corner -bottom-px -right-px rotate-180 scale-75" />
      <span className="stage-corner -bottom-px -left-px -rotate-90 scale-75" />
    </>
  );
}

function PanelHeading({
  icon,
  title,
  sub,
}: {
  icon: SupportIconName;
  title: string;
  sub?: string;
}) {
  return (
    <header className="flex items-center gap-4">
      <SupportIcon
        name={icon}
        className="size-11 shrink-0 text-[#f5c46b] drop-shadow-[0_0_10px_rgb(245_180_70/0.5)] sm:size-12"
      />
      <div className="min-w-0">
        <h2 className="bg-linear-to-b from-[#fff1c4] via-[#f8cf6a] to-[#c98a2a] bg-clip-text text-2xl font-extrabold leading-tight text-transparent sm:text-3xl">
          {title}
        </h2>
        {sub && <p className="mt-1 text-sm text-violet-200/70">{sub}</p>}
      </div>
    </header>
  );
}

export default async function SupportPage() {
  const t = await getTranslations("Support");

  return (
    <>
      <MagicBackdrop />

      <section className="mb-8 flex items-center gap-4 pt-4">
        <SupportIcon
          name="letter"
          className="hidden size-16 shrink-0 text-[#f5c46b] drop-shadow-[0_0_14px_rgb(245_180_70/0.55)] motion-safe:animate-float sm:block"
        />
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9a441]/90">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-[#d9a441]" />
            {t("eyebrow")}
          </p>
          <h1 className="title-shimmer text-4xl font-extrabold leading-tight motion-safe:animate-shimmer md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-2 text-sm text-violet-200/70 md:text-base">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
        {/* ================= Góp ý & Báo lỗi ================= */}
        <section className="arcane-panel p-4 sm:p-7">
          <Corners />
          <PanelHeading icon="chat" title={t("feedbackTitle")} sub={t("feedbackSub")} />
          <FeedbackForm />
        </section>

        {/* ================= Ủng hộ tác giả ================= */}
        <section className="arcane-panel overflow-hidden p-4 sm:p-7">
          <Corners />
          <PanelHeading icon="heart" title={t("donateTitle")} />
          <p className="mt-4 leading-relaxed text-slate-300">{t("donateDesc")}</p>

          <p className="mt-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/70 bg-[#d9a441]/10 px-4 py-1.5 text-sm font-semibold text-[#f8cf6a] shadow-[0_0_14px_rgb(245_180_70/0.25)]">
              <SupportIcon name="info" className="size-4" />
              {t("voluntary")}
            </span>
          </p>

          {/* Mã QR trong vòng phép thuật */}
          <div className="relative mx-auto mt-8 grid w-full max-w-72 place-items-center">
            <span
              aria-hidden
              className="arcane-ring absolute -inset-10 rounded-full motion-safe:animate-[spin_24s_linear_infinite]"
            />
            <SupportIcon
              name="sparkle"
              className="absolute -left-6 top-1/2 size-6 -translate-y-1/2 text-[#f5c46b] motion-safe:animate-twinkle"
            />
            <SupportIcon
              name="sparkle"
              className="absolute -right-6 top-1/2 size-6 -translate-y-1/2 text-[#f5c46b] motion-safe:animate-twinkle [animation-delay:1.5s]"
            />
            <div className="relative w-full rounded-2xl border-2 border-violet-300/70 bg-[#1a1030] p-3 shadow-[0_0_30px_rgb(167_139_250/0.55)]">
              <QrImage src={img(DONATE_QR)} alt={t("qrAlt")} pendingText={t("qrPending")} />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-violet-200/60">{t("thanks")}</p>
        </section>
      </div>
    </>
  );
}
