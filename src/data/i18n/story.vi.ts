import type { StoryMessages } from "./story.schema";

export default {
  "stage-1": {
    title: "Thu thập Vật Tế Phẩm",
    tagline: "The Three Sacrifices",
    desc: "Vesper thông báo rằng thế giới Constant đang bị lung lay bởi sự mất cân bằng giữa Bóng tối và Ánh sáng. Để lập lại trật tự, người chơi cần thu thập 3 Vật Tế Phẩm Cổ Đại từ các thực thể tối cao.",
    trials: {
      "ancient-fuelweaver": { purpose: "Để định vị dòng máu quý." },
      "celestial-champion": { purpose: "Để phá vỡ phong ấn thần thánh." },
      "sanctum-maze": { purpose: "Để làm vật chứa năng lượng." },
    },
  },
} satisfies StoryMessages;
