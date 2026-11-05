export const CDN = "https://pub-f034c98d07384a0480c6bfadeeffa0fa.r2.dev";
export const img = (path: string) => `${CDN}/${path.replace(/^\//, "")}`;

// Icon giao diện dùng chung
export const ICONS = {
  cooldown: img("cool-down-icon.webp"),
  mana: img("magic-stone-icon.webp"),
} as const;
