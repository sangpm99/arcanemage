import { getLocale, getTranslations } from "next-intl/server";
import Gallery from "@/components/Gallery";
import { getCharacters } from "@/data";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("Home");
  const characters = getCharacters(locale);

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
      </div>
      <Gallery items={characters} />
    </>
  );
}
