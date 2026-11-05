import type { FeatureMessages } from "./features.schema";

export default {
  "blood-moon": {
    title: "Trăng máu",
    desc: "Vào những ngày Trăng máu, quái thường sẽ yếu hơn nhưng trở nên hung hãn và nguy hiểm hơn. Đây là cơ hội tốt để săn Ma thạch, nhưng cũng cần cẩn trọng trước những bất ngờ sau khi tiêu diệt quái.",
    perks: {
      "hp-down": { title: "HP giảm", desc: "Quái thường chỉ còn 50% HP." },
      "move-speed": {
        title: "Tăng tốc chạy",
        desc: "Tốc độ di chuyển được tăng lên.",
      },
      "attack-speed": {
        title: "Tăng tốc đánh",
        desc: "Tốc độ tấn công được tăng lên.",
      },
      "mana-stone-drop": {
        title: "Rơi Ma thạch",
        desc: "Có tỷ lệ rơi Ma thạch.",
      },
      zombie: {
        title: "Biến thành zombie",
        desc: "Khi bị tiêu diệt, có tỷ lệ hóa thành zombie.",
      },
    },
  },
  dungeon: {
    title: "Hầm ngục",
    desc: "Hầm ngục là một công trình được mở khóa tại Lò Luyện Kim. Đây là cách tốt nhất để farm Ma thạch, nhưng cũng vô cùng nguy hiểm. Nên thám hiểm cùng đồng đội. Càng xuống sâu, độ khó càng tăng, nhưng phần thưởng cũng càng giá trị.",
    perks: {
      danger: {
        title: "Nguy hiểm cao",
        desc: "Quái mạnh, nhiều bẫy và cơ chế đặc biệt.",
      },
      team: {
        title: "Nên đi theo đội",
        desc: "Hợp tác cùng đồng đội để tăng khả năng sống sót.",
      },
      depth: {
        title: "Độ khó tăng dần",
        desc: "Càng xuống sâu, thử thách càng lớn.",
      },
      rewards: {
        title: "Phần thưởng phong phú",
        desc: "Nguồn Ma thạch dồi dào và nhiều vật phẩm giá trị.",
      },
    },
  },
} satisfies FeatureMessages;
