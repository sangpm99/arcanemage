import type { DataMessages } from "./schema";

export default {
  elements: {
    lightning: {
      name: "Lightning",
      skills: {
        // Basic
        thunderBolt: {
          name: "Thunder Bolt",
          desc: "Strike the selected enemy with lightning that chains to nearby enemies, dealing damage and electrocuting them.",
        },
        lightningDash: {
          name: "Lightning Dash",
          desc: "Instantly dash to a target location within range.",
        },
        electricShock: {
          name: "Electric Shock",
          desc: "Fire a lightning arrow at the selected enemy, dealing damage with a 30% chance to electrocute the target.",
        },
        // Intermediate
        lightningStrike: {
          name: "Lightning Strike",
          desc: "Call down a powerful lightning bolt on the selected enemy, dealing massive damage and electrocuting the target.",
        },
        magneticAura: {
          name: "Magnetic Aura",
          desc: "Surround yourself with electricity for 15 seconds, increasing movement speed by 25%. Enemies that come into contact with you take damage and are electrocuted.",
        },
        chainLightning: {
          name: "Chain Lightning",
          desc: "Launch an electric orb at the selected enemy. The orb bounces between nearby enemies, dealing damage and electrocuting each target it hits.",
        },
        // Advanced
        thunderBlast: {
          name: "Thunder Blast",
          desc: "Call down three lightning strikes on the selected enemy, dealing heavy damage and stunning the target and nearby enemies.",
        },
        thunderField: {
          name: "Thunder Field",
          desc: "Summon a lightning storm at the target location for 20 seconds. Repeated strikes deal damage and electrocute enemies. The storm ends early if you take a hit while casting.",
        },
        electromagneticField: {
          name: "Electromagnetic Field",
          desc: "Create three layers of electrical fields around yourself for 20 seconds. The fields follow you, damaging and electrocuting enemies on contact.",
        },
      },
    },
    nature: {
      name: "Nature",
      skills: {
        // Basic
        vineLash: {
          name: "Vine Lash",
          desc: "For 10 seconds, each basic attack that hits an enemy summons thorny vines to lash the target.",
        },
        barkArmor: {
          name: "Bark Armor",
          desc: "Cover the selected player in bark armor for 20 seconds, reducing incoming damage by 80%.",
        },
        sustenance: {
          name: "Sustenance",
          desc: "Restore 5% of the selected player's maximum health and 3% of their maximum mana each second for 3 seconds, for a total of 15% health restored.",
        },
        // Intermediate
        dreamscape: {
          name: "Dreamscape",
          desc: "Create a cloud of sleep-inducing mist at the target location for 5 seconds. Enemies that enter it fall asleep for 5 seconds.",
        },
        poisonLotus: {
          name: "Poison Lotus",
          desc: "Summon a poisonous plant at the target location for 30 seconds. It remains stationary and automatically fires thorns at nearby enemies.",
        },
        aromaMist: {
          name: "Aroma Mist",
          desc: "Release a steady stream of pollen toward the cursor for 10 seconds. Enemies hit by the pollen are slowed for 3 seconds and have a 30% chance to fall asleep for 5 seconds.",
        },
        // Advanced
        trinityVines: {
          name: "Trinity Vines",
          desc: "Summon three vines at the target location for 30 seconds. They automatically attack nearby enemies.",
        },
        thornShield: {
          name: "Thorn Shield",
          desc: "Grant all nearby players a thorn shield for 30 seconds, reducing incoming damage by 95% and reflecting damage back at attackers.",
        },
        springBreeze: {
          name: "Spring Breeze",
          desc: "Create a ring of flowers at the target location for 8 seconds. Players inside recover 10% of their health each second, while enemies that enter fall asleep for 3 seconds.",
        },
      },
    },
    water: {
      name: "Water",
      skills: {
        // Basic
        waterBall: {
          name: "Water Ball",
          desc: "Launch a large water orb toward the cursor, damaging enemies along its path.",
        },
        recovery: {
          name: "Recovery",
          desc: "Instantly restore 10% of the selected player's maximum health and 5% of their maximum mana. You can target yourself.",
        },
        aquaTide: {
          name: "Aqua Tide",
          desc: "Send a massive wave toward the cursor, damaging and knocking back enemies in its path.",
        },
        // Intermediate
        iceShot: {
          name: "Ice Shot",
          desc: "Fire an ice arrow at the selected enemy, dealing damage and freezing the target for 5 seconds.",
        },
        frostShield: {
          name: "Frost Shield",
          desc: "Surround the selected player with a protective veil of water for 20 seconds, reducing incoming damage by 80%.",
        },
        aquaBlast: {
          name: "Aqua Blast",
          desc: "Unleash a powerful jet of water toward the cursor, dealing heavy damage to enemies in its path.",
        },
        // Advanced
        waterSpout: {
          name: "Water Spout",
          desc: "Summon a waterspout that follows the selected enemy for 10 seconds, continuously dealing damage and pulling nearby enemies toward its center.",
        },
        absoluteZeroZone: {
          name: "Absolute Zero Zone",
          desc: "Rain down massive chunks of ice around the target location for 10 seconds, damaging enemies with a chance to freeze them. Each chunk shatters into a piece of ice.",
        },
        resurrection: {
          name: "Resurrection",
          desc: "Resurrect a selected player's ghost.",
        },
      },
    },
    fire: {
      name: "Fire",
      skills: {
        // Basic
        fireball: {
          name: "Fireball",
          desc: "Launch a large fireball toward the cursor, damaging enemies along its path.",
        },
        flameStrike: {
          name: "Flame Strike",
          desc: "For 20 seconds, your basic attacks gain 20% range and set enemies on fire.",
        },
        fireArrows: {
          name: "Fire Arrows",
          desc: "Fire five small fireballs in a fan-shaped spread toward the cursor.",
        },
        // Intermediate
        fireMeteor: {
          name: "Fire Meteor",
          desc: "Call down a meteor that tracks the selected enemy before crashing down, dealing heavy impact damage.",
        },
        firePatch: {
          name: "Fire Patch",
          desc: "Create a patch of fire at the target location for 10 seconds. Enemies that enter are set ablaze for 20 seconds.",
        },
        explosion: {
          name: "Explosion",
          desc: "Trigger three fiery eruptions at the selected enemy's location, damaging the target and nearby enemies.",
        },
        // Advanced
        celestialFlame: {
          name: "Celestial Flame",
          desc: "Rain down meteors around the target location for 20 seconds. Some leave behind lava that burns enemies. The meteor shower ends early if you take a hit while casting.",
        },
        phoenixRebirth: {
          name: "Phoenix Rebirth",
          desc: "For 30 seconds, being defeated transforms you into a flaming egg. If the egg survives for 5 seconds, you are revived without losing any maximum health.",
        },
        flameSpirit: {
          name: "Flame Spirit",
          desc: "Summon a fire spirit at the target location for 50 seconds. It remains stationary and automatically launches fireballs at nearby enemies.",
        },
      },
    },
    earth: {
      name: "Earth",
      skills: {
        // Basic
        rockThrow: {
          name: "Rock Throw",
          desc: "Hurl a rock that homes in on the selected enemy, dealing damage on impact before shattering.",
        },
        stoneShield: {
          name: "Stone Shield",
          desc: "Surround yourself with a stone shield for 20 seconds, reducing incoming damage by 80%.",
        },
        earthquake: {
          name: "Earthquake",
          desc: "Create three sinkholes in succession at the target location. Each lasts 20 seconds, dealing damage and slowing enemies inside.",
        },
        // Intermediate
        petrify: {
          name: "Petrify",
          desc: "Turn enemies in the target area to stone, preventing them from moving or acting: 5 seconds for regular monsters, 1 second for bosses. The stone does not break when attacked.",
        },
        provoke: {
          name: "Provoke",
          desc: "Taunt nearby enemies for 10 seconds, drawing their attacks toward you.",
        },
        sandSpikes: {
          name: "Sand Spikes",
          desc: "Summon a line of sand pillars between you and the selected enemy, damaging enemies along the path and dealing heavy damage to the target.",
        },
        // Advanced
        sandstormDomain: {
          name: "Sandstorm Domain",
          desc: "Create a large sandstorm at the target location for 30 seconds, drastically slowing enemies caught inside.",
        },
        stoneGolem: {
          name: "Stone Golem",
          desc: "Summon a watchtower at the target location to fight alongside you for 60 seconds.",
        },
        meteorShower: {
          name: "Meteor Shower",
          desc: "Call down 30 meteors in rapid succession over the target area for 6 seconds, damaging enemies around each impact point.",
        },
      },
    },
    light: {
      name: "Light",
      skills: {
        // Basic
        holySphere: {
          name: "Holy Sphere",
          desc: "Launch a sphere of light toward the cursor, damaging enemies along its path and leaving behind glowing particles.",
        },
        holyShield: {
          name: "Holy Shield",
          desc: "Surround the selected player with a shield of light for 20 seconds, reducing incoming damage by 80%.",
        },
        purify: {
          name: "Purify",
          desc: "Instantly restore 10% of the selected player's maximum health and 5% of their maximum mana. You can target yourself.",
        },
        // Intermediate
        lightSprite: {
          name: "Light Sprite",
          desc: "For 10 seconds, each basic attack that hits an enemy summons a spirit of light to strike the target.",
        },
        starlightIllumination: {
          name: "Starlight Illumination",
          desc: "Create a pillar of light at the target location, illuminating the area for 2 in-game days.",
        },
        holyBarrier: {
          name: "Holy Barrier",
          desc: "Create a barrier of light around yourself for 10 seconds. It keeps enemies out and pushes those already inside away, while allies can pass through freely. The barrier has 500 health and breaks after absorbing 500 damage. Maintaining it costs 2 mana per second.",
        },
        // Advanced
        crystalRain: {
          name: "Crystal Rain",
          desc: "Call down 10 falling stars in succession on the selected enemy, tracking the target as it moves.",
        },
        prismSweep: {
          name: "Prism Sweep",
          desc: "Send out three waves of spirits toward the cursor, damaging enemies they hit and putting them to sleep for 5 seconds.",
        },
        holyLight: {
          name: "Holy Light",
          desc: "Summon a pillar of holy light at the target location, damaging enemies and healing players inside.",
        },
      },
    },
    dark: {
      name: "Dark",
      skills: {
        // Basic
        crescentBlade: {
          name: "Crescent Blade",
          desc: "Launch a crescent-shaped blade of darkness toward the cursor, damaging enemies along its path.",
        },
        lifeDrain: {
          name: "Life Drain",
          desc: "Drain the selected enemy's life, dealing heavy damage and restoring 20% of your maximum health.",
        },
        twilightZone: {
          name: "Twilight Zone",
          desc: "Create a barrier at the target location for 20 seconds, reducing damage dealt by enemies inside by 20%.",
        },
        // Intermediate
        demonClaw: {
          name: "Demon Claw",
          desc: "Bind the selected enemy with a shadowy hand, preventing it from moving for 5 seconds.",
        },
        shadowStep: {
          name: "Shadow Step",
          desc: "Melt into the shadows and instantly reappear at a target location within range.",
        },
        nightWalker: {
          name: "Night Walker",
          desc: "Can only be used at night or in caves. While active, your movement speed increases by 200%, you can see in the dark, and Charlie will not attack you. Consumes 1 mana per second; cast again to deactivate.",
        },
        // Advanced
        gravityWell: {
          name: "Gravity Well",
          desc: "Open a black hole at the target location for 10 seconds, continuously pulling enemies toward its center and dealing damage every second.",
        },
        soulCurse: {
          name: "Soul Curse",
          desc: "Launch a sphere of darkness at the selected enemy, dealing heavy damage and cursing the target for 20 seconds. The curse reduces its armor by 50% and slows its movement.",
        },
        voidGaze: {
          name: "Void Gaze",
          desc: "Mark the selected enemy with a void portal. After 5 seconds, the mark explodes, dealing devastating damage to enemies in the surrounding area.",
        },
      },
    },
  },
  characters: {
    wilson: {
      traits: [
        "Grows a beard over time that can provide warmth or store up to three food items.",
      ],
      buffs: [],
    },
    willow: {
      traits: [
        "Dislikes the cold and resists fire, but still takes damage at temperatures above 70°C.",
        "Carries a teddy bear that helps fend off monsters.",
        "Starts with a lighter.",
      ],
      buffs: ["Her teddy bear gains increased movement speed and damage."],
    },
    wolfgang: {
      traits: [
        "Builds muscle faster through strenuous work.",
        "Carries a dumbbell.",
        "Afraid of monsters and the dark.",
      ],
      buffs: [
        "Increasing muscle strength now boosts defense instead of damage.",
      ],
    },
    wendy: {
      traits: [
        "Loses Sanity slowly after spending so much time around the dead.",
        "Accompanied by her sister Abigail, who has a variety of abilities.",
      ],
      buffs: [
        "Spell damage is no longer reduced.",
        "Abigail can now benefit from two potions at once.",
      ],
    },
    wx78: {
      traits: [
        "Can be upgraded with special circuits.",
        "Can eat spoiled food as if it were fresh.",
        "Can recharge using lightning and Winona's electrical equipment, but takes damage when wet.",
      ],
      buffs: [],
    },
    wickerbottom: {
      traits: [
        "A librarian who starts with many basic crafting recipes unlocked.",
        "Can craft magical books.",
        "Dislikes spoiled food.",
        "Cannot sleep.",
      ],
      buffs: [],
    },
    woodie: {
      traits: [
        "Wields Lucy, an exceptional axe with unlimited durability.",
        "Can transform into three different creatures, but cannot use magic staves in any of those forms.",
      ],
      buffs: [],
    },
    wes: {
      traits: [
        "Deals 25% less physical damage, takes 25% more damage, and gets hungry 25% faster.",
        "Best suited for players seeking an extra challenge, not beginners.",
      ],
      buffs: ["Spell damage is unaffected by his damage penalty."],
    },
    maxwell: {
      traits: [
        "Once ruled this world as its king.",
        "Commands an army of shadows and possesses a powerful spellbook.",
      ],
      buffs: ["Can cast spells using his spellbook without needing a staff."],
    },
    wigfrid: {
      traits: [
        "A skilled warrior with a strong balance of offense and defense.",
        "Can only eat meat.",
      ],
      buffs: [],
    },
    webber: {
      traits: [
        "Considered a monster by many neutral creatures, but can befriend spiders.",
        "Can build a spider army capable of overwhelming anything, though large swarms may cause server lag.",
        "Grows a beard over time that helps keep him warm.",
      ],
      buffs: [],
    },
    winona: {
      traits: [
        "A resourceful builder who crafts faster when well fed.",
        "Has useful contraptions for both combat and everyday survival.",
        "Charlie's sister. Can block one attack from Charlie, with this protection resetting whenever she enters the light.",
      ],
      buffs: [],
    },
    warly: {
      traits: [
        "A chef with a portable crock pot and a range of unique recipes.",
        "Remembers meals he has eaten, suffering stat penalties if he eats the same dish again too soon.",
      ],
      buffs: [
        "Gains special elemental seasonings to sprinkle over his dishes.",
      ],
    },
    wortox: {
      traits: [
        "A monster with both a good and an evil skill path.",
        "The good path prevents neutral creatures from attacking and provides support for allies.",
        "The evil path focuses on self-sufficiency, survival, and powerful attacks.",
        "Gets only half the usual benefits from food, but can eat souls.",
      ],
      buffs: [],
    },
    wormwood: {
      traits: [
        "A natural-born farmer who loves plants and the outdoors.",
        "Loses Sanity when destroying plants and gains Sanity when planting them.",
        "Food that would normally restore or reduce health has no effect on his health.",
        "Catches fire easily but has strong resistance to wetness.",
      ],
      buffs: [],
    },
    wurt: {
      traits: [
        "Highly resistant to wetness, can befriend Merms, and is a sworn enemy of Pigs.",
        "Can only eat vegetables.",
        "Can raise a Merm army capable of overwhelming anything, though too many Merms may cause server lag.",
      ],
      buffs: [],
    },
    walter: {
      traits: [
        "Loses Sanity when taking damage.",
        "Travels with Woby, a helpful companion with several abilities.",
        "Afraid of bees and takes double damage from their attacks.",
      ],
      buffs: [
        "Woby can spend some of her Hunger to absorb a small portion of the damage Walter takes.",
      ],
    },
    wanda: {
      traits: [
        "Uses time instead of health.",
        "Her physical damage increases as she grows older.",
        "Too frail in old age to carry heavy objects.",
      ],
      buffs: [
        "Spell damage is unaffected by age, so staying young is the better choice for magic users.",
      ],
    },
  },
} satisfies DataMessages;
