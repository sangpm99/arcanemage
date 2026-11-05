/* Dữ liệu trang Hội quán. Chữ nằm trong messages/*.json (namespace "Guild"). */

export const WORKSHOP_URL =
  "https://steamcommunity.com/sharedfiles/filedetails/?id=3814992771";
export const DISCORD_URL = "https://discord.gg/cU4Z6p3neH";

/** Các bước cài mod (thứ tự hiển thị). Chữ: Guild.steps.<id>.title/desc */
export const GUILD_STEPS = [
  { id: "subscribe", icon: "steam" },
  { id: "enable", icon: "puzzle" },
  { id: "world", icon: "globe" },
  { id: "friends", icon: "users" },
] as const;
export type GuildStepId = (typeof GUILD_STEPS)[number]["id"];

/** Câu hỏi thường gặp. Chữ: Guild.faq.<id>.q/a */
export const GUILD_FAQ = ["autoDownload", "notShowing", "otherCharacters"] as const;
