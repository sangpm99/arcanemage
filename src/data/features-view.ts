import type { Locale } from "next-intl";
import {
  features,
  featureImage,
  petImage,
  type FeatureBase,
  type FeatureCategory,
  type FeatureIconName,
  type FeatureSection,
  type Perk,
  type Pet,
} from "./features";
import { elements } from "./elements";
import type {
  FeatureMessages,
  PerkText,
  PetText,
  SectionText,
} from "./i18n/features.schema";
import vi from "./i18n/features.vi";
import en from "./i18n/features.en";
import dataVi from "./i18n/vi";
import dataEn from "./i18n/en";

/* ---------- Dữ liệu đã gộp, gửi xuống giao diện ---------- */
export type FeaturePet = Omit<Pet, "element"> &
  PetText & {
    image: string;
    element: { id: Pet["element"]; name: string; color: string; icon: string };
  };

export type Feature = {
  id: string;
  title: string;
  tagline: string;
  desc: string;
  icon: FeatureIconName;
  category: FeatureCategory;
  theme: FeatureBase["theme"];
  image: string;
  perks: (Perk & PerkText)[];
  pets: FeaturePet[];
  sections: (FeatureSection & SectionText)[];
};

const dict: Record<Locale, FeatureMessages> = { vi, en };
const elementNames = { vi: dataVi.elements, en: dataEn.elements };

type AnyText = {
  title: string;
  tagline: string;
  desc: string;
  perks: Record<string, PerkText>;
  pets?: Record<string, PetText>;
  sections?: Record<string, SectionText>;
};

export function getFeatures(locale: Locale): Feature[] {
  const t = dict[locale] as Record<string, AnyText>;

  return (features as readonly FeatureBase[]).map((base) => {
    const text = t[base.id];
    return {
      id: base.id,
      title: text.title,
      tagline: text.tagline,
      desc: text.desc,
      icon: base.icon,
      category: base.category,
      theme: base.theme,
      image: featureImage(base.id),
      perks: base.perks.map((p) => ({ ...p, ...text.perks[p.id] })),
      pets: (base.pets ?? []).map((p) => ({
        ...p,
        ...text.pets![p.id],
        image: petImage(p.id),
        element: {
          id: p.element,
          name: elementNames[locale][p.element].name,
          color: elements[p.element].color,
          icon: elements[p.element].icon,
        },
      })),
      sections: (base.sections ?? []).map((s) => ({
        ...s,
        ...text.sections![s.id],
      })),
    };
  });
}
