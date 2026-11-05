import type { ItemMessages } from "./items.schema";

export default {
  /* ===== Vũ khí: Trượng ===== */
  "staff-novice": {
    name: "Trượng sơ cấp",
    desc: "Cây trượng đầu tiên của mọi pháp sư, đủ để khai mở những phép thuật cơ bản.",
  },
  "staff-adept": {
    name: "Trượng trung cấp",
    desc: "Trượng sơ cấp được truyền thêm sức mạnh từ gỗ sống và nhiên liệu ác mộng.",
  },
  "staff-light-greater": {
    name: "Trượng cao cấp Ánh sáng",
    desc: "Rèn từ tinh hoa ánh sáng, trượng tăng mạnh sát thương, xuyên giáp và tốc độ di chuyển.",
  },
  "staff-shadow-greater": {
    name: "Trượng cao cấp Bóng tối",
    desc: "Rèn từ tinh hoa bóng tối, trượng tăng mạnh sát thương, xuyên giáp và tốc độ di chuyển.",
  },
  "staff-light-supreme": {
    name: "Trượng siêu cấp Ánh sáng",
    desc: "Trượng cao cấp Ánh sáng được khảm Enlightened Shard, khai mở phép thuật cao cấp.",
  },
  "staff-shadow-supreme": {
    name: "Trượng siêu cấp Bóng tối",
    desc: "Trượng cao cấp Bóng tối được khảm Possessed Shadow Atrium, khai mở phép thuật cao cấp.",
  },
  "staff-divine": {
    name: "Trượng thần cấp",
    desc: "Trượng dung hòa giữa ánh sáng và bóng tối, kết tinh từ hai quyền năng đối lập, đại diện cho đỉnh cao của ma pháp.",
  },

  /* ===== Vũ khí: Mật Điển Hắc Ám ===== */
  "codex-dark": {
    name: "Mật Điển Hắc Ám",
    desc: "Cuốn sách phép riêng của Maxwell. Maxwell dùng được cả sách lẫn trượng.",
    notes: ["Chế tạo tốn 50 máu"],
  },
  "codex-ancient": {
    name: "Mật Điển Hắc Ám Cổ Ngữ",
    desc: "Mật Điển Hắc Ám được nâng cấp bằng cách bỏ nguyên liệu vào tủ sách Magician's Chest.",
  },
  "codex-abyss": {
    name: "Mật Điển Hắc Ám Thâm Uyên",
    desc: "Phiên bản thâm uyên của Mật Điển, sức mạnh ngang Trượng siêu cấp.",
  },
  "codex-eternal-night": {
    name: "Mật Điển Hắc Ám Vĩnh Dạ",
    desc: "Đỉnh cao của Mật Điển Hắc Ám, sức mạnh ngang Trượng thần cấp.",
  },

  /* ===== Giáp ===== */
  "quartz-armor": {
    name: "Giáp thạch anh",
    desc: "Được tôi luyện bởi ma thạch, độ bền cao hơn và không làm chậm người mặc.",
    notes: ["Chống hất tung"],
  },
  "mage-hat": {
    name: "Mũ pháp sư",
    desc: "Chiếc mũ dành cho pháp sư, độ bền cao.",
  },
  "mage-robe": {
    name: "Áo giáp pháp sư",
    desc: "Bộ giáp dành cho pháp sư, độ bền cao.",
  },

  /* ===== Phương tiện ===== */
  "broom-orb": {
    name: "Ngọc chổi",
    desc: "Dùng để cưỡi chổi bay.",
    notes: [
      "Liên tục giảm độ bền khi cưỡi, cần ma thạch để sạc lại",
      "Chỉ bay được trên mặt đất, nước nông và vực thẳm không quá 3 ô",
    ],
  },

  /* ===== Tổng hợp ===== */
  "mana-stone": {
    name: "Ma thạch",
    desc: "Nguyên liệu ma thuật dùng để chế tạo trang bị và sạc Ngọc chổi.",
    source:
      "Rơi ra khi giết miniboss, boss, quái thường vào đêm trăng máu hoặc trong hầm ngục.",
  },
  "mana-potion": {
    name: "Thuốc hồi phục mana",
    desc: "Hồi ngay một lượng mana và tăng tốc độ hồi mana trong 240 giây.",
    notes: ["Chế tạo trong tab Tinh chế của Alchemy Engine"],
  },
  "ancient-seed": {
    name: "Hạt giống cổ ngữ",
    desc: "Đem trồng sẽ mọc thành Cây cổ ngữ.",
    source: "Có tỉ lệ rơi ra khi đập hòm kho báu trục vớt được dưới biển.",
  },
  "ancient-tree": {
    name: "Cây cổ ngữ",
    desc: "Liên tục truyền mana vào cây để thu được Đá cổ ngữ.",
    source: "Trồng từ Hạt giống cổ ngữ.",
  },
  "ancient-stone": {
    name: "Đá cổ ngữ",
    desc: "Viên đá chứa sức mạnh hồi phục của cổ ngữ.",
    notes: [
      "Dùng lên Ice Box, Salt Box, Polar Bearger Bin: hồi 100% độ tươi của đồ ăn bên trong",
      "Dùng lên trang bị giáp: hồi 33% độ bền",
    ],
    source: "Thu được từ Cây cổ ngữ.",
  },
  "cursed-heart": {
    name: "Trái tim bị lời nguyền",
    desc: "Tác dụng chưa rõ.",
    source: "Đánh bại Ancient Fuelweaver.",
  },
  "cursed-mask": {
    name: "Mặt nạ bị lời nguyền",
    desc: "Tác dụng chưa rõ.",
    source: "Đánh bại Celestial Champion.",
  },
  "cursed-book": {
    name: "Sách bị lời nguyền",
    desc: "Tác dụng chưa rõ.",
    source: "Hoàn thành Sanctum Maze.",
  },
} satisfies ItemMessages;
