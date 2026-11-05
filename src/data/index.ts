import type { Locale } from "next-intl";
import { elements, type ElementBase, type ElementId } from "./elements";
import { characters } from "./characters";
import type { DataMessages, SkillText } from "./i18n/schema";
import vi from "./i18n/vi";
import en from "./i18n/en";

export type { Locale };

export type Skill = {
  id: string;
  name: string;
  desc: string;
  icon: string;
  cooldown: number;
  mana: number;
};

export type Character = {
  id: string;
  name: string;
  avatar: string;
  portrait: string;
  traits: string[];
  buffs: string[];
  element: { id: ElementId; name: string; color: string; icon: string };
  skills: Skill[];
};

const dict: Record<Locale, DataMessages> = { vi, en };

export function getCharacters(locale: Locale): Character[] {
  const t = dict[locale];

  return characters.map((c) => {
    const el: ElementBase = elements[c.element];
    const elText = t.elements[c.element] as {
      name: string;
      skills: Record<string, SkillText>;
    };

    return {
      id: c.id,
      name: c.name,
      avatar: c.avatar,
      portrait: c.portrait,
      ...t.characters[c.id], // traits + buffs
      element: {
        id: c.element,
        name: elText.name,
        color: el.color,
        icon: el.icon,
      },
      skills: Object.entries(el.skills).map(([id, s]) => ({
        id,
        ...s,
        ...elText.skills[id],
      })),
    };
  });
}

export function getCharacter(locale: Locale, id: string) {
  return getCharacters(locale).find((c) => c.id === id);
}
