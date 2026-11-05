import { img } from "@/lib/cdn";
import type { ElementId } from "./elements";

export type CharacterBase = {
  id: string;
  name: string;
  element: ElementId;
  avatar: string; // ảnh nhỏ ở thumbnail
  portrait: string; // ảnh lớn trong CharacterCard
};

export const characters = [
  {
    id: "wilson",
    name: "Wilson",
    element: "lightning",
    avatar: img("wilson.webp"),
    portrait: img("wilson-portrait.webp"),
  },
  {
    id: "willow",
    name: "Willow",
    element: "fire",
    avatar: img("willow.webp"),
    portrait: img("willow-portrait.webp"),
  },
  {
    id: "wolfgang",
    name: "Wolfgang",
    element: "earth",
    avatar: img("wolfgang.webp"),
    portrait: img("wolfgang-portrait.webp"),
  },
  {
    id: "wendy",
    name: "Wendy",
    element: "dark",
    avatar: img("wendy.webp"),
    portrait: img("wendy-portrait.webp"),
  },
  {
    id: "wx78",
    name: "WX-78",
    element: "lightning",
    avatar: img("wx78.webp"),
    portrait: img("wx78-portrait.webp"),
  },
  {
    id: "wickerbottom",
    name: "Wickerbottom",
    element: "nature",
    avatar: img("wickerbottom.webp"),
    portrait: img("wickerbottom-portrait.webp"),
  },
  {
    id: "woodie",
    name: "Woodie",
    element: "nature",
    avatar: img("woodie.webp"),
    portrait: img("woodie-portrait.webp"),
  },
  {
    id: "wes",
    name: "Wes",
    element: "water",
    avatar: img("wes.webp"),
    portrait: img("wes-portrait.webp"),
  },
  {
    id: "maxwell",
    name: "Maxwell",
    element: "dark",
    avatar: img("maxwell.webp"),
    portrait: img("maxwell-portrait.webp"),
  },
  {
    id: "wigfrid",
    name: "Wigfrid",
    element: "lightning",
    avatar: img("wigfrid.webp"),
    portrait: img("wigfrid-portrait.webp"),
  },
  {
    id: "webber",
    name: "Webber",
    element: "fire",
    avatar: img("webber.webp"),
    portrait: img("webber-portrait.webp"),
  },
  {
    id: "winona",
    name: "Winona",
    element: "fire",
    avatar: img("winona.webp"),
    portrait: img("winona-portrait.webp"),
  },
  {
    id: "warly",
    name: "Warly",
    element: "water",
    avatar: img("warly.webp"),
    portrait: img("warly-portrait.webp"),
  },
  {
    id: "wortox",
    name: "Wortox",
    element: "earth",
    avatar: img("wortox.webp"),
    portrait: img("wortox-portrait.webp"),
  },
  {
    id: "wormwood",
    name: "Wormwood",
    element: "light",
    avatar: img("wormwood.webp"),
    portrait: img("wormwood-portrait.webp"),
  },
  {
    id: "wurt",
    name: "Wurt",
    element: "water",
    avatar: img("wurt.webp"),
    portrait: img("wurt-portrait.webp"),
  },
  {
    id: "walter",
    name: "Walter",
    element: "nature",
    avatar: img("walter.webp"),
    portrait: img("walter-portrait.webp"),
  },
  {
    id: "wanda",
    name: "Wanda",
    element: "dark",
    avatar: img("wanda.webp"),
    portrait: img("wanda-portrait.webp"),
  },
] as const satisfies readonly CharacterBase[];

export type CharacterId = (typeof characters)[number]["id"];
