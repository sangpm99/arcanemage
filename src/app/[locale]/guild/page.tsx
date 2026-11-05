import { getTranslations } from "next-intl/server";
import MagicBackdrop from "@/components/MagicBackdrop";
import { GuildIcon } from "@/components/guild/GuildIcon";
import { StepVisual } from "@/components/guild/StepVisual";
import {
  DISCORD_URL,
  GUILD_FAQ,
  GUILD_STEPS,
  WORKSHOP_URL,
} from "@/data/guild";

/** 4 góc khung vàng (dùng chung cho các panel) */
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

/** Tiêu đề panel: icon vàng + tên + dòng phụ */
function PanelHeading({
  icon,
  title,
  sub,
}: {
  icon: Parameters<typeof GuildIcon>[0]["name"];
  title: string;
  sub?: string;
}) {
  return (
    <header className="flex items-center gap-4">
      <GuildIcon
        name={icon}
        className="size-10 shrink-0 text-[#f5c46b] drop-shadow-[0_0_10px_rgb(245_180_70/0.5)] sm:size-12"
      />
      <div className="min-w-0">
        <h2 className="bg-linear-to-b from-[#fff1c4] via-[#f8cf6a] to-[#c98a2a] bg-clip-text text-2xl font-extrabold leading-tight text-transparent sm:text-3xl">
          {title}
        </h2>
        {sub && <p className="mt-0.5 text-sm text-violet-200/70">{sub}</p>}
      </div>
    </header>
  );
}

export default async function GuildPage() {
  const t = await getTranslations("Guild");
  const modName = t("modName");

  return (
    <>
      <MagicBackdrop />

      {/* Tiêu đề trang */}
      <section className="mb-8 flex items-center gap-4 pt-4">
        <GuildIcon
          name="quill"
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
            {t("subtitle", { mod: modName })}
          </p>
        </div>
      </section>

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 pb-10 lg:grid-cols-[minmax(0,1fr)_400px]">
        {/* ================= Hướng dẫn cài mod ================= */}
        <section className="arcane-panel p-4 sm:p-7">
          <Corners />
          <PanelHeading
            icon="download"
            title={t("guide.title")}
            sub={t("guide.sub", { mod: modName })}
          />

          <ol className="relative mt-6 grid gap-3">
            {/* Đường chấm nối các số bước */}
            <span
              aria-hidden
              className="absolute bottom-8 left-[15px] top-8 border-l-2 border-dotted border-[#d9a441]/45"
            />
            {GUILD_STEPS.map((s, i) => (
              <li
                key={s.id}
                className="grid grid-cols-[32px_minmax(0,1fr)] items-center gap-3 motion-safe:animate-fade-in"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="relative z-1 grid size-8 place-items-center rounded-full border-2 border-[#f5c46b] bg-[#1a1030] text-sm font-extrabold text-[#f8cf6a] shadow-[0_0_0_3px_rgb(13_9_25),0_0_12px_rgb(245_180_70/0.5)]">
                  {i + 1}
                </span>
                <div className="guild-step">
                  <span className="hidden size-12 shrink-0 place-items-center rounded-full border border-white/10 sm:grid bg-black/30 text-slate-200 shadow-[inset_0_0_10px_rgb(124_58_237/0.25)] sm:size-14">
                    <GuildIcon name={s.icon} className="size-7 sm:size-8" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-[#f8cf6a]">
                      {t(`steps.${s.id}.title`)}
                    </h3>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-slate-300 sm:text-sm">
                      {t(`steps.${s.id}.desc`, { mod: modName })}
                    </p>
                  </div>
                  <StepVisual
                    step={s.id}
                    modName={modName}
                    labels={{
                      subscribe: t("visual.subscribe"),
                      createWorld: t("visual.createWorld"),
                      mods: t("visual.mods"),
                    }}
                  />
                </div>
              </li>
            ))}
          </ol>

          {/* Lưu ý tương thích */}
          <div
            role="note"
            className="mt-5 flex gap-3 rounded-xl border border-rose-400/40 bg-rose-500/10 p-4 shadow-[0_0_18px_rgb(244_63_94/0.12)]"
          >
            <GuildIcon name="warning" className="size-6 shrink-0 text-rose-300" />
            <div className="text-sm leading-relaxed">
              <p className="font-bold text-rose-200">{t("compat.title")}</p>
              <p className="mt-0.5 text-slate-300">
                {t("compat.desc", { mod: modName })}
              </p>
            </div>
          </div>

          {/* Nút mở Workshop */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <span className="hidden h-px flex-1 bg-linear-to-r from-transparent to-[#d9a441]/60 sm:block" />
            <a
              href={WORKSHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-cta"
            >
              <GuildIcon name="steam" className="size-6" />
              {t("guide.cta")}
              <GuildIcon name="external" className="size-4 opacity-80" />
            </a>
            <span className="hidden h-px flex-1 bg-linear-to-l from-transparent to-[#d9a441]/60 sm:block" />
          </div>
        </section>

        {/* ================= Cột phải ================= */}
        <div className="grid gap-6">
          {/* Hỏi đáp */}
          <section className="arcane-panel p-4 sm:p-6">
            <Corners />
            <PanelHeading icon="question" title={t("faqTitle")} />
            <div className="mt-5 grid gap-3">
              {GUILD_FAQ.map((id, i) => (
                <details key={id} open={i < 2} className="faq-item group">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold leading-snug text-[#f8cf6a] [&::-webkit-details-marker]:hidden">
                    {t(`faq.${id}.q`, { mod: modName })}
                    <GuildIcon
                      name="chevron"
                      className="mt-0.5 size-5 shrink-0 text-[#d9a441] transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {t(`faq.${id}.a`, { mod: modName })}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Cộng đồng */}
          <section className="arcane-panel overflow-hidden p-4 sm:p-6">
            <Corners />
            {/* Trăng mờ trang trí góc phải */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -top-8 size-36 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgb(196_181_253/0.35),rgb(124_58_237/0.12)_55%,transparent_70%)]"
            />
            <PanelHeading icon="users" title={t("community.title")} />
            <p className="relative mt-3 text-sm leading-relaxed text-slate-300">
              {t("community.desc")}
            </p>
            <div className="relative mt-5 flex items-center gap-4">
              <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-[#5865f2]/20 text-[#a5adff] shadow-[0_0_20px_rgb(88_101_242/0.45)]">
                <GuildIcon name="discord" className="size-10" />
              </span>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="discord-cta"
              >
                <GuildIcon name="discord" className="size-5" />
                {t("community.cta")}
                <GuildIcon name="external" className="size-4 opacity-80" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
