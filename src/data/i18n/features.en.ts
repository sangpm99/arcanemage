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
  apothecary: {
    title: "Apothecary & Potions",
    tagline: "Run errands for Merlinth to unlock secret potion recipes",
    desc: "Meet Merlinth, the apothecary of ArcaneMage. Complete her quests, unlock secret recipes and brew powerful potions to support your journey.",
    perks: {
      quests: {
        title: "Quests",
        desc: "Complete Merlinth's quests to unlock new potions.",
      },
      recipes: {
        title: "Secret recipes",
        desc: "Earn a secret recipe from each quest, brewable server-wide.",
      },
      cauldron: {
        title: "Magic Cauldron",
        desc: "Use the cauldron to brew potions from recipes.",
      },
      variety: {
        title: "Many potions",
        desc: "Healing, arcane, warding, swiftness, sanity and greater potions.",
      },
    },
    sections: {
      intro: {
        title: "Introduction",
        points: [
          "Merlinth is a cheerful old apothecary. There is only 1 of her per server.",
          "She trades secret potion recipes for ingredients.",
          "Potions can only be brewed after completing her quests.",
        ],
      },
      summon: {
        title: "Summoning the Apothecary",
        caption: "Seer's Hut",
        points: [
          "She is not on the map by default.",
          'Build a "Seer\'s Hut": 4 Boards + 3 Cut Stone + 4 Volt Goat Horns.',
          "Requires the Alchemy Engine, in the Structures tab.",
        ],
      },
      quests: {
        title: "Quests",
        points: [
          "Hand the items to her directly.",
          "Progress is shared by the whole server. Items on the same line count toward the same total.",
          "There are 5 minor quests at first. Finishing them all unlocks 4 major quests.",
        ],
      },
      rewards: {
        title: "Rewards",
        points: [
          "Each completed quest: earn 1 Secret Recipe, and the whole server can brew that potion.",
          "Her shop (after finishing the matching quest):",
        ],
      },
      cauldron: {
        title: "Magic Cauldron",
        caption: "Magic Cauldron",
        points: [
          "Recipe: 3 Cut Stone + 2 Gold Nuggets + 3 Mana Stones.",
          "Requires the Prestihatitator, in the Magic / Cooking tab.",
          "Wrong recipe or a locked potion: the cauldron explodes for -10 health within a radius of 4, without destroying structures.",
          "Only 1 potion can be active at a time.",
          "Drinking a new potion replaces the previous effect.",
        ],
      },
      potions: { title: "Potion list", points: [] },
    },
    quests: {
      heal: {
        name: "Healing",
        needs: [
          "50 Butterfly Wings",
          "10 seeds (Toma Root / Dragon Fruit / Potato)",
        ],
      },
      arcane: {
        name: "Arcane",
        needs: ["10 Batilisk Wings", "20 Nightmare Fuel", "10 Dark Petals"],
      },
      ward: {
        name: "Warding",
        needs: ["10 Driftwood Pieces", "10 Honey", "10 Blue Caps"],
      },
      swift: { name: "Swiftness", needs: ["5 Rabbits", "5 Bunny Puffs"] },
      mind: {
        name: "Sanity",
        needs: ["30 Petals", "30 Lune Tree Blossoms / Mourning Glory"],
      },
      "great-heal": {
        name: "Greater Healing",
        needs: ["1 Nurse Spider", "1 Telltale Heart"],
      },
      "great-arcane": {
        name: "Greater Arcane",
        needs: ["1 Bat Hat", "3 Pure Horror", "3 Pure Brilliance"],
      },
      "great-ward": {
        name: "Greater Warding",
        needs: ["10 Living Logs", "20 Honey", "1 Craggy Carapace"],
      },
      "great-mind": {
        name: "Greater Sanity",
        needs: ["20 Red Caps", "20 Green Caps", "20 Blue Caps", "20 Moon Shrooms"],
      },
    },
  },
} satisfies FeatureMessages;
