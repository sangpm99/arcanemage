import type { ItemMessages } from "./items.schema";

export default {
  /* ===== Weapons: Staves ===== */
  "staff-novice": {
    name: "Novice Staff",
    desc: "Every mage's first staff, enough to awaken the basic spells.",
  },
  "staff-adept": {
    name: "Adept Staff",
    desc: "A Novice Staff empowered with living logs and nightmare fuel.",
  },
  "staff-light-greater": {
    name: "Greater Staff of Light",
    desc: "Forged from the essence of light, it greatly boosts damage, armor penetration and movement speed.",
  },
  "staff-shadow-greater": {
    name: "Greater Staff of Shadow",
    desc: "Forged from the essence of shadow, it greatly boosts damage, armor penetration and movement speed.",
  },
  "staff-light-supreme": {
    name: "Supreme Staff of Light",
    desc: "A Greater Staff of Light inlaid with an Enlightened Shard, unlocking advanced spells.",
  },
  "staff-shadow-supreme": {
    name: "Supreme Staff of Shadow",
    desc: "A Greater Staff of Shadow inlaid with a Possessed Shadow Atrium, unlocking advanced spells.",
  },
  "staff-divine": {
    name: "Divine Staff",
    desc: "A staff balancing light and shadow, born from two opposing powers: the pinnacle of magic.",
  },

  /* ===== Weapons: Dark Codex ===== */
  "codex-dark": {
    name: "Dark Codex",
    desc: "Maxwell's own spellbook. Maxwell can use both codices and staves.",
    notes: ["Costs 50 HP to craft"],
  },
  "codex-ancient": {
    name: "Ancient Dark Codex",
    desc: "A Dark Codex upgraded by placing the materials into the Magician's Chest.",
  },
  "codex-abyss": {
    name: "Abyssal Dark Codex",
    desc: "The abyssal form of the Codex, as strong as a Supreme Staff.",
  },
  "codex-eternal-night": {
    name: "Eternal Night Codex",
    desc: "The pinnacle of the Dark Codex, as strong as the Divine Staff.",
  },

  /* ===== Armor ===== */
  "quartz-armor": {
    name: "Quartz Armor",
    desc: "Tempered with mana stone: more durable and does not slow its wearer.",
    notes: ["Knockback immunity"],
  },
  "mage-hat": {
    name: "Mage Hat",
    desc: "A hat made for mages, with high durability.",
  },
  "mage-robe": {
    name: "Mage Robe",
    desc: "Armor made for mages, with high durability.",
  },

  /* ===== Vehicles ===== */
  "broom-orb": {
    name: "Broom Orb",
    desc: "Lets you ride a flying broom.",
    notes: [
      "Loses durability while riding; recharge it with mana stones",
      "Can only fly over land, shallow water and chasms up to 3 tiles wide",
    ],
  },

  /* ===== Potions ===== */
  "mana-potion": {
    name: "Mana Restoration Potion",
    desc: "Instantly restores some mana and boosts mana regeneration for 240 seconds.",
    notes: ["Crafted in the Refine tab of the Alchemy Engine"],
  },
  "health-potion": {
    name: "Healing Potion",
    desc: "Instantly restores 40 health, then 1 more health per second for 20 seconds.",
  },
  "arcane-elixir": {
    name: "Arcane Elixir",
    desc: "Increases magic damage by 20% for 120 seconds.",
  },
  "warding-elixir": {
    name: "Warding Elixir",
    desc: "Reduces damage taken by 15% for 120 seconds.",
  },
  "swiftness-elixir": {
    name: "Swiftness Elixir",
    desc: "Increases movement speed by 15% for 120 seconds.",
  },
  "sanity-elixir": {
    name: "Sanity Elixir",
    desc: "Instantly restores 50 sanity.",
  },
  "greater-health-potion": {
    name: "Greater Healing Elixir",
    desc: "Instantly restores 80 health, then 2 more health per second for 60 seconds.",
  },
  "greater-arcane-elixir": {
    name: "Greater Arcane Elixir",
    desc: "Increases magic damage by 35% for 180 seconds.",
  },
  "greater-warding-elixir": {
    name: "Greater Warding Elixir",
    desc: "Reduces damage taken by 25% for 180 seconds.",
  },
  "greater-sanity-elixir": {
    name: "Greater Sanity Elixir",
    desc: "Instantly restores 100 sanity, then 2 more sanity per second for 20 seconds.",
  },

  /* ===== General ===== */
  "mana-stone": {
    name: "Mana Stone",
    desc: "A magical material used to craft gear, brew potions and recharge the Broom Orb.",
    source:
      "Dropped by minibosses, bosses, regular monsters during a blood moon, and in dungeons.",
  },
  "ancient-seed": {
    name: "Ancient Seed",
    desc: "Plant it to grow an Ancient Tree.",
    source: "Has a chance to drop when cracking open salvaged sunken treasure.",
  },
  "ancient-tree": {
    name: "Ancient Tree",
    desc: "Keep channeling mana into the tree to harvest Ancient Stones.",
    source: "Grown from an Ancient Seed.",
  },
  "ancient-stone": {
    name: "Ancient Stone",
    desc: "A stone holding the restorative power of the ancients.",
    notes: [
      "Use on an Ice Box, Salt Box or Polar Bearger Bin: restores 100% freshness of the food inside",
      "Use on armor: restores 33% durability",
    ],
    source: "Harvested from an Ancient Tree.",
  },
  "cursed-heart": {
    name: "Cursed Heart",
    desc: "Effect unknown.",
    source: "Defeat the Ancient Fuelweaver.",
  },
  "cursed-mask": {
    name: "Cursed Mask",
    desc: "Effect unknown.",
    source: "Defeat the Celestial Champion.",
  },
  "cursed-book": {
    name: "Cursed Book",
    desc: "Effect unknown.",
    source: "Complete the Sanctum Maze.",
  },
} satisfies ItemMessages;
