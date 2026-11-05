import { useTranslations } from "next-intl";

export default function EquipmentPage() {
  const t = useTranslations("Nav");
  return <h1 className="text-2xl font-bold">{t("equipment")}</h1>;
}
