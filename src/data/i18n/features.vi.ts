import type { FeatureMessages } from "./features.schema";

export default {
  "blood-moon": {
    title: "Trăng máu",
    tagline: "Đêm quái hung hãn, cơ hội săn Ma thạch",
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
    tagline: "Càng xuống sâu, phần thưởng càng giá trị",
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
  "pet-contract": {
    title: "Khế ước thú",
    tagline: "8 loài thú đồng hành, mỗi loài một skill đặc biệt",
    desc: "Ký khế ước với thú hoang để có một người bạn đồng hành. Thú đánh phụ cùng bạn bằng cầu phép theo hệ của nó, và có một skill đặc biệt riêng của từng loài.",
    perks: {
      wild: {
        title: "Thú hoang",
        desc: "Mỗi thế giới mặt đất có tối đa 1 con hoang dã mỗi loài, lang thang quanh nơi sinh ra của nó. Bị ký khế ước thì một con hoang dã mới sẽ mọc lại.",
      },
      sign: {
        title: "Ký khế ước",
        desc: 'Cầm đồ ăn ưa thích của thú trên chuột rồi đưa cho thú hoang để "Ký khế ước".',
      },
      "one-pet": {
        title: "Mỗi người 1 thú",
        desc: "Mỗi người chỉ có 1 thú khế ước.",
      },
      "use-skill": {
        title: "Dùng skill",
        desc: "Xoa đầu (Pet) thú của mình. Skill chỉ dùng được khi thú khế ước với chính người đó.",
      },
    },
    pets: {
      broodling: {
        skill: "Tạo 1 quả cầu lửa tại chỗ thú, tồn tại 60 giây.",
        foods: ["Charcoal"],
      },
      ewelet: {
        skill:
          "Mọi cây trong phạm vi 1 ô đất quanh thú lớn ngay (cây trồng ở ruộng, bụi, cỏ, cây non, nấm ở Mushroom Planter...).",
        foods: ["Honey"],
      },
      glomglom: {
        skill:
          "Mọi cây trong phạm vi 1 ô đất quanh thú lớn ngay (cây trồng ở ruộng, bụi, cỏ, cây non, nấm ở Mushroom Planter...).",
        foods: ["Honey"],
      },
      "friendly-peeper": {
        skill: "Chặn 1 lần Charlie tấn công trong bóng tối.",
        foods: ["Monster Meat"],
      },
      giblet: {
        skill:
          "Phóng 1 cầu điện xuống ao gần nhất (ao cá, ao đầm lầy, ao lươn trong hang), 10 con cá / lươn bay ra phía chủ.",
        foods: [
          "Volt Goat Horn",
          "Electric Milk",
          "Hạt giống của mọi loại cây trồng",
        ],
      },
      kittykit: {
        skill:
          "Đổ đầy 1 bình tưới (Watering Can / Waterfowl Can) chưa đầy ở gần thú.",
        foods: ["Fish Morsel", "Fish (sống / nướng / khô)"],
      },
      mothling: {
        skill: "Mọc 5 cây Lesser Glow Berry đã ra quả quanh thú, tồn tại 20 giây.",
        foods: ["Light Bulb", "Moon Shroom"],
      },
      vargling: {
        skill: "Nhả ra 1 viên ngọc ngẫu nhiên: Red Gem hoặc Blue Gem.",
        foods: ["Rocks", "Flint", "Gold Nugget"],
      },
    },
    sections: {
      bond: {
        title: "Độ no và độ gắn kết",
        points: [
          "Độ no tối đa 240, cứ 10 giây giảm 5. Cho ăn: đưa đồ ăn ưa thích cho thú của mình.",
          "Độ gắn kết tăng 5% mỗi ngày nếu thú no (20 ngày đạt 100%). Gắn kết 100% thì không cần cho ăn nữa.",
          "Đói (độ no = 0, chưa gắn kết 100%) thì thú không đánh phụ.",
        ],
      },
      assist: {
        title: "Đánh phụ",
        points: [
          "Thú bắn cầu phép theo hệ của nó, 1 phát / giây, tầm 24.",
          "Chỉ đánh con quái mà chủ vừa đánh trúng (chủ phải ra tay trước).",
          "Sát thương = 1/2 sát thương cơ bản của trượng cuối cùng chủ cầm.",
        ],
      },
      cancel: {
        title: "Hủy khế ước",
        points: [
          'Cầm Wet Goop trên chuột rồi đưa cho thú của mình, sẽ hiện bảng hỏi "Bạn có muốn hủy khế ước không?".',
          "Sau khi hủy phải đợi 8 phút mới ký khế ước mới được.",
        ],
      },
    },
  },
} satisfies FeatureMessages;
