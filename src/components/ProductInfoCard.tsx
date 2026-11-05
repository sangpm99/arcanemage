import { useTranslations } from "next-intl";

export default function ProductInfoCard() {
  const t = useTranslations("Product");
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
      <h2 className="text-3xl font-bold">{t("name")}</h2>
      <p className="max-w-md text-center text-white/80">{t("desc")}</p>
      <button className="swiper-no-swiping rounded bg-white px-5 py-2 font-medium text-blue-700 hover:bg-blue-50">
        {t("buy")}
      </button>
    </div>
  );
}
