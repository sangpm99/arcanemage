import type { StoryMessages } from "./story.schema";

export default {
  "stage-1": {
    title: "Gathering the Sacrifices",
    tagline: "The Three Sacrifices",
    desc: "Vesper warns that the Constant is trembling under the imbalance between Shadow and Light. To restore order, players must collect the 3 Ancient Sacrifices from the supreme beings.",
    trials: {
      "ancient-fuelweaver": { purpose: "To trace the precious bloodline." },
      "celestial-champion": { purpose: "To break the divine seal." },
      "sanctum-maze": { purpose: "To serve as a vessel of energy." },
    },
  },
} satisfies StoryMessages;
