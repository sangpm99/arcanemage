import { getLocale, getTranslations } from "next-intl/server";
import MagicBackdrop from "@/components/MagicBackdrop";
import FeatureList from "@/components/features/FeatureList";
import { getFeatures } from "@/data/features-view";

export default async function FeaturesPage() {
  const locale = await getLocale();
  const t = await getTranslations("Features");
  const features = getFeatures(locale);

  return (
    <>
      <MagicBackdrop />

      <FeatureList
        features={features}
        heading={
          <section>
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
          </section>
        }
      />
    </>
  );
}
