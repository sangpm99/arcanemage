import type { Locale } from "next-intl";
import { chapters, trialImage, type ChapterBase, type StoryIconName } from "./story";
import { getItems, type ItemRef } from "./items-view";
import type { StoryMessages } from "./i18n/story.schema";
import vi from "./i18n/story.vi";
import en from "./i18n/story.en";

/* ---------- Dữ liệu đã gộp, gửi xuống giao diện ---------- */
export type StoryTrial = {
  id: string;
  name: string;
  icon: StoryIconName;
  scene: "blood" | "celestial" | "arcane";
  image: string;
  purpose: string;
  reward: ItemRef;
};

export type Chapter =
  | { id: string; emblem: StoryIconName; locked: true }
  | {
      id: string;
      emblem: StoryIconName;
      locked: false;
      title: string;
      tagline: string;
      desc: string;
      trials: StoryTrial[];
    };

const dict: Record<Locale, StoryMessages> = { vi, en };

type AnyText = {
  title: string;
  tagline: string;
  desc: string;
  trials: Record<string, { purpose: string }>;
};

export function getStory(locale: Locale): Chapter[] {
  const t = dict[locale] as Record<string, AnyText>;
  const items = new Map(getItems(locale).map((i) => [i.id, i]));

  return (chapters as readonly ChapterBase[]).map((c): Chapter => {
    if (c.locked || !c.trials)
      return { id: c.id, emblem: c.emblem, locked: true };

    const text = t[c.id];
    return {
      id: c.id,
      emblem: c.emblem,
      locked: false,
      title: text.title,
      tagline: text.tagline,
      desc: text.desc,
      trials: c.trials.map((tr) => {
        const item = items.get(tr.reward);
        if (!item) throw new Error(`[story] Không tìm thấy vật phẩm "${tr.reward}"`);
        return {
          id: tr.id,
          name: tr.name,
          icon: tr.icon,
          scene: tr.scene,
          image: trialImage(tr.id),
          purpose: text.trials[tr.id].purpose,
          reward: {
            id: item.id,
            name: item.name,
            image: item.image,
            category: item.category,
          },
        };
      }),
    };
  });
}
