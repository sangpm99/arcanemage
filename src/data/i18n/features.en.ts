import type { FeatureMessages } from "./features.schema";

export default {
  "blood-moon": {
    title: "Blood Moon",
    tagline: "A night of fierce monsters and a chance to hunt Mana Stones",
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
    tagline: "The deeper you go, the better the rewards",
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
  "pet-contract": {
    title: "Pet Contract",
    tagline: "8 companions, each with its own special skill",
    desc: "Sign a contract with a wild pet to gain a companion. It fights alongside you with magic orbs of its element, and each species has its own special skill.",
    perks: {
      wild: {
        title: "Wild pets",
        desc: "Each surface world has at most 1 wild pet of each species, roaming near its birthplace. Once one is contracted, a new wild one respawns.",
      },
      sign: {
        title: "Signing",
        desc: 'Hold the pet\'s favorite food on your cursor and give it to the wild pet to "Sign Contract".',
      },
      "one-pet": {
        title: "One per player",
        desc: "Each player can only have 1 contracted pet.",
      },
      "use-skill": {
        title: "Using the skill",
        desc: "Pet your companion to use its skill. The skill only works for the player the pet is contracted to.",
      },
    },
    pets: {
      broodling: {
        skill: "Creates a fireball where the pet stands, lasting 60 seconds.",
        foods: ["Charcoal"],
      },
      ewelet: {
        skill:
          "Every plant within 1 turf around the pet grows instantly (farm crops, bushes, grass, saplings, mushrooms in a Mushroom Planter...).",
        foods: ["Honey"],
      },
      glomglom: {
        skill:
          "Every plant within 1 turf around the pet grows instantly (farm crops, bushes, grass, saplings, mushrooms in a Mushroom Planter...).",
        foods: ["Honey"],
      },
      "friendly-peeper": {
        skill: "Blocks one of Charlie's attacks in the dark.",
        foods: ["Monster Meat"],
      },
      giblet: {
        skill:
          "Fires an electric orb into the nearest pond (fish pond, swamp pond, cave eel pond), sending 10 fish / eels flying toward its owner.",
        foods: ["Volt Goat Horn", "Electric Milk", "Seeds of any crop"],
      },
      kittykit: {
        skill:
          "Refills one nearby Watering Can / Waterfowl Can that isn't full.",
        foods: ["Fish Morsel", "Fish (raw / cooked / dried)"],
      },
      mothling: {
        skill:
          "Grows 5 fruiting Lesser Glow Berry plants around the pet, lasting 20 seconds.",
        foods: ["Light Bulb", "Moon Shroom"],
      },
      vargling: {
        skill: "Spits out one random gem: a Red Gem or a Blue Gem.",
        foods: ["Rocks", "Flint", "Gold Nugget"],
      },
    },
    sections: {
      bond: {
        title: "Fullness and bond",
        points: [
          "Maximum fullness is 240 and drops by 5 every 10 seconds. To feed: give your pet its favorite food.",
          "Bond rises 5% per day while the pet is full (100% after 20 days). At 100% bond it no longer needs feeding.",
          "A hungry pet (0 fullness, bond below 100%) won't assist in combat.",
        ],
      },
      assist: {
        title: "Combat assist",
        points: [
          "The pet fires magic orbs of its element: 1 shot per second, range 24.",
          "It only attacks the monster its owner just hit (the owner must strike first).",
          "Damage = 1/2 of the base damage of the last staff its owner held.",
        ],
      },
      cancel: {
        title: "Ending a contract",
        points: [
          'Hold Wet Goop on your cursor and give it to your pet, and a prompt asks "Do you want to end the contract?".',
          "After ending it, you must wait 8 minutes before signing a new contract.",
        ],
      },
    },
  },
} satisfies FeatureMessages;
