import { img } from "@/lib/cdn";

export type SkillBase = {
  icon: string;
  cooldown: number;
  mana: number;
};

export type ElementBase = {
  color: string;
  icon: string;
  skills: Record<string, SkillBase>;
};

export const elements = {
  // ===== Hệ Lôi =====
  lightning: {
    color: "#f1c40f",
    icon: img("lightning-icon.webp"),
    skills: {
      // Sơ cấp
      thunderBolt: {
        icon: img("thunder-bolt-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      lightningDash: {
        icon: img("lightning-dash-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      electricShock: {
        icon: img("electric-shock-icon.webp"),
        cooldown: 10,
        mana: 10,
      },

      // Trung cấp
      lightningStrike: {
        icon: img("lightning-strike-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      magneticAura: {
        icon: img("magnetic-aura-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      chainLightning: {
        icon: img("chain-lightning-icon.webp"),
        cooldown: 30,
        mana: 20,
      },

      // Cao cấp
      thunderBlast: {
        icon: img("thunder-blast-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      thunderField: {
        icon: img("thunder-field-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      electromagneticField: {
        icon: img("electromagnetic-field-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
    },
  },

  // ===== Hệ Mộc =====
  nature: {
    color: "#2ecc71",
    icon: img("nature-icon.webp"),
    skills: {
      // Sơ cấp
      vineLash: {
        icon: img("vine-lash-icon.webp"),
        cooldown: 20,
        mana: 10,
      },
      barkArmor: {
        icon: img("bark-armor-icon.webp"),
        cooldown: 30,
        mana: 10,
      },
      sustenance: {
        icon: img("sustenance-icon.webp"),
        cooldown: 30,
        mana: 10,
      },

      // Trung cấp
      dreamscape: {
        icon: img("dreamscape-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      poisonLotus: {
        icon: img("poison-lotus-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      aromaMist: {
        icon: img("aroma-mist-icon.webp"),
        cooldown: 30,
        mana: 20,
      },

      // Cao cấp
      trinityVines: {
        icon: img("trinity-vines-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      thornShield: {
        icon: img("thorn-shield-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      springBreeze: {
        icon: img("spring-breeze-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
    },
  },

  // ===== Hệ Thủy =====
  water: {
    color: "#3498db",
    icon: img("water-icon.webp"),
    skills: {
      // Sơ cấp
      waterBall: {
        icon: img("water-ball-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      recovery: {
        icon: img("recovery-icon.webp"),
        cooldown: 15,
        mana: 10,
      },
      aquaTide: {
        icon: img("aqua-tide-icon.webp"),
        cooldown: 12,
        mana: 10,
      },

      // Trung cấp
      iceShot: {
        icon: img("ice-shot-icon.webp"),
        cooldown: 40,
        mana: 30,
      },
      frostShield: {
        icon: img("frost-shield-icon.webp"),
        cooldown: 40,
        mana: 30,
      },
      aquaBlast: {
        icon: img("aqua-blast-icon.webp"),
        cooldown: 40,
        mana: 30,
      },

      // Cao cấp
      waterSpout: {
        icon: img("water-spout-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      absoluteZeroZone: {
        icon: img("absolute-zero-zone-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      resurrection: {
        icon: img("resurrection-icon.webp"),
        cooldown: 60,
        mana: 30,
      },
    },
  },

  // ===== Hệ Hỏa =====
  fire: {
    color: "#e74c3c",
    icon: img("fire-icon.webp"),
    skills: {
      // Sơ cấp
      fireball: {
        icon: img("fireball-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      flameStrike: {
        icon: img("flame-strike-icon.webp"),
        cooldown: 30,
        mana: 10,
      },
      fireArrows: {
        icon: img("fire-arrows-icon.webp"),
        cooldown: 40,
        mana: 30,
      },
      // trung cấp
      fireMeteor: {
        icon: img("fire-meteor-icon.webp"),
        cooldown: 30,
        mana: 30,
      },
      firePatch: {
        icon: img("fire-patch-icon.webp"),
        cooldown: 40,
        mana: 30,
      },
      explosion: {
        icon: img("explosion-icon.webp"),
        cooldown: 40,
        mana: 30,
      },
      // cao cấp
      celestialFlame: {
        icon: img("celestial-flame-icon.webp"),
        cooldown: 120,
        mana: 100,
      },
      phoenixRebirth: {
        icon: img("phoenix-rebirth-icon.webp"),
        cooldown: 120,
        mana: 50,
      },
      flameSpirit: {
        icon: img("flame-spirit-icon.webp"),
        cooldown: 100,
        mana: 50,
      },
    },
  },

  // ===== Hệ Thổ =====
  earth: {
    color: "#a67c52",
    icon: img("earth-icon.webp"),
    skills: {
      // Sơ cấp
      rockThrow: {
        icon: img("rock-throw-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      stoneShield: {
        icon: img("stone-shield-icon.webp"),
        cooldown: 30,
        mana: 10,
      },
      earthquake: {
        icon: img("earthquake-icon.webp"),
        cooldown: 10,
        mana: 10,
      },

      // Trung cấp
      petrify: {
        icon: img("petrify-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      provoke: {
        icon: img("provoke-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      sandSpikes: {
        icon: img("sand-spikes-icon.webp"),
        cooldown: 30,
        mana: 20,
      },

      // Cao cấp
      sandstormDomain: {
        icon: img("sandstorm-domain-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      stoneGolem: {
        icon: img("stone-golem-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      meteorShower: {
        icon: img("meteor-shower-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
    },
  },

  // ===== Hệ Quang =====
  light: {
    color: "#f5f5f5",
    icon: img("light-icon.webp"),
    skills: {
      // Sơ cấp
      holySphere: {
        icon: img("holy-sphere-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      holyShield: {
        icon: img("holy-shield-icon.webp"),
        cooldown: 30,
        mana: 10,
      },
      purify: {
        icon: img("purify-icon.webp"),
        cooldown: 15,
        mana: 10,
      },

      // Trung cấp
      lightSprite: {
        icon: img("light-sprite-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      starlightIllumination: {
        icon: img("starlight-illumination-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      holyBarrier: {
        icon: img("holy-barrier-icon.webp"),
        cooldown: 45,
        mana: 20,
      },

      // Cao cấp
      crystalRain: {
        icon: img("crystal-rain-icon.webp"),
        cooldown: 60,
        mana: 50,
      },
      prismSweep: {
        icon: img("prism-sweep-icon.webp"),
        cooldown: 60,
        mana: 30,
      },
      holyLight: {
        icon: img("holy-light-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
    },
  },

  // ===== Hệ Ám =====
  dark: {
    color: "#8e44ad",
    icon: img("dark-icon.webp"),
    skills: {
      // Sơ cấp
      crescentBlade: {
        icon: img("crescent-blade-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      lifeDrain: {
        icon: img("life-drain-icon.webp"),
        cooldown: 10,
        mana: 10,
      },
      twilightZone: {
        icon: img("twilight-zone-icon.webp"),
        cooldown: 30,
        mana: 10,
      },

      // Trung cấp
      demonClaw: {
        icon: img("demon-claw-icon.webp"),
        cooldown: 30,
        mana: 20,
      },
      shadowStep: {
        icon: img("shadow-step-icon.webp"),
        cooldown: 15,
        mana: 10,
      },
      nightWalker: {
        icon: img("night-walker-icon.webp"),
        cooldown: 0,
        mana: 0, // Bật/tắt, tiêu hao 1 mana/giây
      },

      // Cao cấp
      gravityWell: {
        icon: img("gravity-well-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      soulCurse: {
        icon: img("soul-curse-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
      voidGaze: {
        icon: img("void-gaze-icon.webp"),
        cooldown: 120,
        mana: 80,
      },
    },
  },
} as const satisfies Record<string, ElementBase>;

export type ElementId = keyof typeof elements;
