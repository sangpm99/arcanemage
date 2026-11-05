import type { FeatureMessages } from "./features.schema";

export default {
  "blood-moon": {
    title: "Blood Moon",
    desc: "On Blood Moon nights, regular monsters are weaker but become far more aggressive and dangerous. It's a great chance to hunt Mana Stones, but stay alert for surprises after each kill.",
    perks: {
      "hp-down": { title: "Lower HP", desc: "Regular monsters have only 50% HP." },
      "move-speed": {
        title: "Faster movement",
        desc: "Monster movement speed is increased.",
      },
      "attack-speed": {
        title: "Faster attacks",
        desc: "Monster attack speed is increased.",
      },
      "mana-stone-drop": {
        title: "Mana Stone drops",
        desc: "Monsters have a chance to drop Mana Stones.",
      },
      zombie: {
        title: "Zombie rising",
        desc: "Slain monsters may rise again as zombies.",
      },
    },
  },
  dungeon: {
    title: "Dungeon",
    desc: "The Dungeon is a structure unlocked at the Alchemy Engine. It's the best way to farm Mana Stones, but it is extremely dangerous, so explore with your teammates. The deeper you go, the harder it gets, and the more valuable the rewards.",
    perks: {
      danger: {
        title: "High danger",
        desc: "Strong monsters, many traps and special mechanics.",
      },
      team: {
        title: "Bring a team",
        desc: "Work with teammates to improve your survival odds.",
      },
      depth: {
        title: "Rising difficulty",
        desc: "The deeper you go, the greater the challenge.",
      },
      rewards: {
        title: "Rich rewards",
        desc: "Plenty of Mana Stones and many valuable items.",
      },
    },
  },
} satisfies FeatureMessages;
