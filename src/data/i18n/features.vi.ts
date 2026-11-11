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
  apothecary: {
    title: "Dược sư & Đơn thuốc",
    tagline: "Làm nhiệm vụ cho bà Merlinth, mở khóa bí phương ma dược",
    desc: "Gặp gỡ Merlinth – bà dược sư của ArcaneMage. Hoàn thành nhiệm vụ, mở khóa bí phương và nấu ra những loại thuốc mạnh mẽ để hỗ trợ hành trình của bạn.",
    perks: {
      quests: {
        title: "Nhiệm vụ",
        desc: "Hoàn thành nhiệm vụ của Merlinth để mở thuốc mới.",
      },
      recipes: {
        title: "Bí phương",
        desc: "Nhận bí phương sau mỗi nhiệm vụ, cả server cùng nấu.",
      },
      cauldron: {
        title: "Vạc ma thuật",
        desc: "Dùng vạc để nấu thuốc theo công thức.",
      },
      variety: {
        title: "Đa dạng thuốc",
        desc: "Hồi máu, ma lực, hộ thể, linh tốc, tâm trí và thuốc lớn.",
      },
    },
    sections: {
      intro: {
        title: "Giới thiệu",
        points: [
          "Merlinth là bà dược sư già vui tính, chỉ có 1 người trên mỗi server.",
          "Bà trao đổi bí phương ma dược lấy nguyên liệu.",
          "Thuốc chỉ nấu được sau khi hoàn thành nhiệm vụ của bà.",
        ],
      },
      summon: {
        title: "Gọi Dược sư",
        caption: "Nhà tiên tri",
        points: [
          "Bà không có sẵn trên bản đồ.",
          'Phải xây "Nhà tiên tri": 4 Ván gỗ + 3 Đá cắt + 4 Sừng dê điện.',
          "Cần Alchemy Engine, ở tab Công trình.",
        ],
      },
      quests: {
        title: "Nhiệm vụ",
        points: [
          "Đưa đồ tận tay cho bà.",
          "Tiến độ chung cả server. Các món trong cùng một dòng được cộng dồn với nhau.",
          "Ban đầu có 5 nhiệm vụ nhỏ. Xong hết sẽ mở 4 nhiệm vụ lớn.",
        ],
      },
      rewards: {
        title: "Phần thưởng",
        points: [
          "Mỗi nhiệm vụ xong: nhận 1 Bí phương, cả server được nấu thuốc đó.",
          "Cửa hàng của bà (sau khi xong nhiệm vụ tương ứng):",
        ],
      },
      cauldron: {
        title: "Vạc ma thuật",
        caption: "Vạc ma thuật",
        points: [
          "Chế tạo: 3 Đá cắt + 2 Vàng + 3 Ma thạch.",
          "Cần Prestihatitator, ở tab Phép thuật / Nấu ăn.",
          "Sai công thức hoặc chưa mở khóa: vạc nổ, gây -10 máu trong bán kính 4, không phá công trình.",
          "Cùng lúc chỉ 1 thuốc có tác dụng.",
          "Uống thuốc mới sẽ thay thế hiệu ứng cũ.",
        ],
      },
      potions: { title: "Danh sách thuốc", points: [] },
    },
    quests: {
      heal: {
        name: "Hồi máu",
        needs: ["50 Cánh bướm", "10 hạt (Cà chua / Thanh long / Khoai tây)"],
      },
      arcane: {
        name: "Ma lực",
        needs: ["10 Cánh dơi", "20 Nhiên liệu ác mộng", "10 Cánh hoa đen"],
      },
      ward: {
        name: "Hộ thể",
        needs: ["10 Driftwood Piece", "10 Mật ong", "10 Nấm lam"],
      },
      swift: { name: "Linh tốc", needs: ["5 Thỏ", "5 Bunny Puff"] },
      mind: {
        name: "Tâm trí",
        needs: ["30 Cánh hoa", "30 Hoa cây Lune / Mourning Glory"],
      },
      "great-heal": {
        name: "Đại huyết",
        needs: ["1 Nurse Spider", "1 Trái tim mách lẻo"],
      },
      "great-arcane": {
        name: "Đại ma lực",
        needs: ["1 Bat Hat", "3 Pure Horror", "3 Pure Brilliance"],
      },
      "great-ward": {
        name: "Đại hộ thể",
        needs: ["10 Gỗ sống", "20 Mật ong", "1 Craggy Carapace"],
      },
      "great-mind": {
        name: "Đại tâm trí",
        needs: ["20 Nấm đỏ", "20 Nấm xanh", "20 Nấm lam", "20 Nấm mặt trăng"],
      },
    },
  },
} satisfies FeatureMessages;
