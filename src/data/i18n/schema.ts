import type { elements } from "../elements";
import type { CharacterId } from "../characters";

type E = typeof elements;

export type SkillText = { name: string; desc: string };

export type CharacterTextData = {
  traits: string[];
  buffs: string[];
};

export type DataMessages = {
  elements: {
    [K in keyof E]: {
      name: string;
      skills: { [S in keyof E[K]["skills"]]: SkillText };
    };
  };
  characters: Record<CharacterId, CharacterTextData>;
};
