import { getLocale, getTranslations } from "next-intl/server";
import Gallery from "@/components/Gallery";
import MagicBackdrop from "@/components/MagicBackdrop";
import { getCharacters } from "@/data";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const characters = getCharacters(locale);

  return (
    <>
      <MagicBackdrop />

      {/* Tiêu đề trang */}
      <section className="mb-8 pt-4">
        <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9a441]/90">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-[#d9a441]" />
          {t("eyebrow")}
        </p>
        <h1 className="title-shimmer text-4xl font-extrabold leading-tight motion-safe:animate-shimmer md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-violet-200/70 md:text-base">
          {t("subtitle", { count: characters.length })}
        </p>
      </section>

      <Gallery items={characters} />
    </>
  );
}
