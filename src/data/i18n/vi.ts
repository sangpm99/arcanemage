import type { DataMessages } from "./schema";

export default {
  elements: {
    lightning: {
      name: "Lôi",
      skills: {
        // Sơ cấp
        thunderBolt: {
          name: "Thunder Bolt",
          desc: "Giáng sét xuống quái được chọn. Tia sét lan sang các quái gần đó, gây sát thương và khiến chúng bị giật điện.",
        },
        lightningDash: {
          name: "Lightning Dash",
          desc: "Lướt tức thời đến vị trí chỉ định trong phạm vi cho phép.",
        },
        electricShock: {
          name: "Electric Shock",
          desc: "Bắn mũi tên sét về phía quái được chọn, gây sát thương và có 30% cơ hội khiến mục tiêu bị giật điện.",
        },
        // Trung cấp
        lightningStrike: {
          name: "Lightning Strike",
          desc: "Giáng một tia sét lớn xuống quái được chọn, gây sát thương rất lớn và khiến mục tiêu bị giật điện.",
        },
        magneticAura: {
          name: "Magnetic Aura",
          desc: "Bao quanh bạn bằng luồng điện trong 15 giây, tăng 25% tốc độ chạy. Quái va chạm với bạn sẽ bị giật điện và chịu sát thương.",
        },
        chainLightning: {
          name: "Chain Lightning",
          desc: "Phóng quả cầu điện vào quái được chọn. Cầu nảy giữa các quái gần nhau, gây sát thương và khiến chúng bị giật điện mỗi lần trúng.",
        },
        // Cao cấp
        thunderBlast: {
          name: "Thunder Blast",
          desc: "Dậm sét 3 lần tại vị trí quái được chọn, gây sát thương lớn lên mục tiêu và quái xung quanh, đồng thời làm chúng choáng.",
        },
        thunderField: {
          name: "Thunder Field",
          desc: "Tạo bão sét quanh vị trí chỉ định trong 20 giây, liên tục giáng sét gây sát thương và khiến quái bị giật điện. Nếu bạn bị đánh trúng khi đang dùng chiêu, sấm sét sẽ ngừng giáng xuống.",
        },
        electromagneticField: {
          name: "Electromagnetic Field",
          desc: "Tạo 3 lớp điện trường quanh bạn trong 20 giây. Điện trường di chuyển theo bạn, gây sát thương và khiến quái bị giật điện khi chạm vào.",
        },
      },
    },
    nature: {
      name: "Mộc",
      skills: {
        // Sơ cấp
        vineLash: {
          name: "Vine Lash",
          desc: "Trong 10 giây, mỗi đòn đánh thường trúng quái sẽ gọi dây leo gai quất vào mục tiêu.",
        },
        barkArmor: {
          name: "Bark Armor",
          desc: "Bao bọc người chơi được chọn bằng lớp giáp cây trong 20 giây, giảm 80% sát thương phải nhận.",
        },
        sustenance: {
          name: "Sustenance",
          desc: "Chọn một người chơi để hồi tổng cộng 15% máu tối đa (5% mỗi giây) và 3% mana tối đa mỗi giây trong 3 giây.",
        },
        // Trung cấp
        dreamscape: {
          name: "Dreamscape",
          desc: "Tạo một đám mây ngủ tại vị trí chỉ định trong 5 giây. Quái bước vào sẽ ngủ trong 5 giây.",
        },
        poisonLotus: {
          name: "Poison Lotus",
          desc: "Triệu hồi một cây độc tại vị trí chỉ định trong 30 giây. Cây đứng yên và tự bắn gai vào quái gần đó.",
        },
        aromaMist: {
          name: "Aroma Mist",
          desc: "Trong 10 giây, liên tục phát tán phấn hoa theo hướng con trỏ. Quái trúng phấn hoa bị chậm trong 3 giây và có 30% cơ hội ngủ trong 5 giây.",
        },
        // Cao cấp
        trinityVines: {
          name: "Trinity Vines",
          desc: "Triệu hồi 3 cây dây leo tại vị trí chỉ định trong 30 giây. Chúng tự tấn công các quái ở gần.",
        },
        thornShield: {
          name: "Thorn Shield",
          desc: "Tạo khiên gai cho tất cả người chơi ở gần trong 30 giây, giảm 95% sát thương phải nhận và phản đòn quái tấn công.",
        },
        springBreeze: {
          name: "Spring Breeze",
          desc: "Tạo vòng hoa tại vị trí chỉ định trong 8 giây. Người chơi bên trong được hồi 10% máu mỗi giây, còn quái bước vào sẽ ngủ trong 3 giây.",
        },
      },
    },
    water: {
      name: "Thủy",
      skills: {
        // Sơ cấp
        waterBall: {
          name: "Water Ball",
          desc: "Bắn một quả cầu nước lớn theo hướng con trỏ, gây sát thương lên các quái trên đường bay.",
        },
        recovery: {
          name: "Recovery",
          desc: "Chọn một người chơi, kể cả bản thân, để hồi ngay 10% máu tối đa và 5% mana tối đa.",
        },
        aquaTide: {
          name: "Aqua Tide",
          desc: "Phóng một con sóng lớn theo hướng con trỏ, gây sát thương và đẩy lùi quái trên đường đi.",
        },
        // Trung cấp
        iceShot: {
          name: "Ice Shot",
          desc: "Bắn mũi tên băng vào quái được chọn, gây sát thương và đóng băng mục tiêu trong 5 giây.",
        },
        frostShield: {
          name: "Frost Shield",
          desc: "Bao phủ người chơi được chọn bằng màn nước trong 20 giây, giảm 80% sát thương phải nhận.",
        },
        aquaBlast: {
          name: "Aqua Blast",
          desc: "Phun cột nước dọc theo hướng con trỏ, gây sát thương lớn lên quái trên đường đi.",
        },
        // Cao cấp
        waterSpout: {
          name: "Water Spout",
          desc: "Tạo vòi rồng bám theo quái được chọn trong 10 giây, liên tục gây sát thương và hút các quái xung quanh vào tâm.",
        },
        absoluteZeroZone: {
          name: "Absolute Zero Zone",
          desc: "Gọi các tảng băng lớn rơi quanh vị trí chỉ định trong 10 giây, gây sát thương và có cơ hội đóng băng quái. Mỗi tảng băng vỡ ra một viên đá băng.",
        },
        resurrection: {
          name: "Resurrection",
          desc: "Chọn hồn ma của một người chơi để hồi sinh.",
        },
      },
    },
    fire: {
      name: "Hỏa",
      skills: {
        // Sơ cấp
        fireball: {
          name: "Fireball",
          desc: "Bắn một quả cầu lửa lớn theo hướng con trỏ, gây sát thương lên các quái trên đường bay.",
        },
        flameStrike: {
          name: "Flame Strike",
          desc: "Trong 20 giây, đòn đánh thường của bạn có tầm xa hơn 20% và khiến quái trúng đòn bốc cháy.",
        },
        fireArrows: {
          name: "Fire Arrows",
          desc: "Bắn 5 quả cầu lửa nhỏ tỏa ra hình quạt về phía con trỏ.",
        },
        // Trung cấp
        fireMeteor: {
          name: "Fire Meteor",
          desc: "Thiên thạch bám theo quái được chọn rồi rơi xuống, gây sát thương lớn khi va chạm.",
        },
        firePatch: {
          name: "Fire Patch",
          desc: "Tạo thảm lửa tại vị trí chỉ định trong 10 giây. Quái bước vào sẽ bị thiêu đốt trong 20 giây.",
        },
        explosion: {
          name: "Explosion",
          desc: "Dậm lửa 3 lần tại vị trí quái được chọn, gây sát thương lên mục tiêu và những quái xung quanh.",
        },
        // Cao cấp
        celestialFlame: {
          name: "Celestial Flame",
          desc: "Gọi thiên thạch rơi liên tục quanh vị trí chỉ định trong 20 giây. Một số thiên thạch để lại dung nham gây bỏng cho quái. Nếu bạn bị đánh trúng khi đang dùng chiêu, thiên thạch sẽ ngừng rơi.",
        },
        phoenixRebirth: {
          name: "Phoenix Rebirth",
          desc: "Trong 30 giây, nếu bị hạ gục, bạn sẽ hóa thành trứng lửa. Nếu trứng không bị phá trong 5 giây, bạn sẽ hồi sinh mà không mất máu tối đa.",
        },
        flameSpirit: {
          name: "Flame Spirit",
          desc: "Triệu hồi một tinh linh lửa tại vị trí chỉ định. Tinh linh đứng yên và tự bắn cầu lửa vào quái gần đó trong 50 giây.",
        },
      },
    },
    earth: {
      name: "Thổ",
      skills: {
        // Sơ cấp
        rockThrow: {
          name: "Rock Throw",
          desc: "Ném một tảng đá bám theo quái được chọn, gây sát thương khi trúng rồi vỡ ra.",
        },
        stoneShield: {
          name: "Stone Shield",
          desc: "Tạo khiên đá bao quanh bản thân trong 20 giây, giảm 80% sát thương phải nhận.",
        },
        earthquake: {
          name: "Earthquake",
          desc: "Tạo 3 hố lún liên tiếp tại vị trí chỉ định. Hố tồn tại 20 giây, gây sát thương và làm chậm quái đứng bên trong.",
        },
        // Trung cấp
        petrify: {
          name: "Petrify",
          desc: "Biến quái trong khu vực chỉ định thành đá trong 5 giây, khiến chúng không thể di chuyển hay hành động. Đá không vỡ khi bị tấn công.",
        },
        provoke: {
          name: "Provoke",
          desc: "Thu hút sự chú ý của quái trong khu vực xung quanh trong 10 giây, khiến chúng tập trung tấn công bạn.",
        },
        sandSpikes: {
          name: "Sand Spikes",
          desc: "Gọi một hàng cột cát trồi lên giữa bạn và quái được chọn, gây sát thương dọc đường và sát thương lớn lên mục tiêu.",
        },
        // Cao cấp
        sandstormDomain: {
          name: "Sandstorm Domain",
          desc: "Tạo một vùng bão cát rộng tại vị trí chỉ định trong 30 giây, khiến quái bên trong di chuyển rất chậm.",
        },
        stoneGolem: {
          name: "Stone Golem",
          desc: "Triệu hồi một tháp canh tại vị trí chỉ định để chiến đấu cùng bạn trong 60 giây.",
        },
        meteorShower: {
          name: "Meteor Shower",
          desc: "Gọi 30 thiên thạch liên tiếp rơi xuống khu vực chỉ định trong 6 giây, gây sát thương lên quái xung quanh mỗi điểm va chạm.",
        },
      },
    },
    light: {
      name: "Quang",
      skills: {
        // Sơ cấp
        holySphere: {
          name: "Holy Sphere",
          desc: "Bắn quả cầu ánh sáng theo hướng con trỏ, gây sát thương lên các quái trên đường bay và để lại những hạt sáng.",
        },
        holyShield: {
          name: "Holy Shield",
          desc: "Bao bọc người chơi được chọn bằng khiên ánh sáng trong 20 giây, giảm 80% sát thương phải nhận.",
        },
        purify: {
          name: "Purify",
          desc: "Chọn một người chơi, kể cả bản thân, để hồi ngay 10% máu tối đa và 5% mana tối đa.",
        },
        // Trung cấp
        lightSprite: {
          name: "Light Sprite",
          desc: "Trong 10 giây, mỗi đòn đánh thường trúng quái sẽ gọi thêm một linh hồn ánh sáng lao vào tấn công mục tiêu.",
        },
        starlightIllumination: {
          name: "Starlight Illumination",
          desc: "Tạo cột sáng tại vị trí chỉ định, chiếu sáng khu vực trong 2 ngày trong game.",
        },
        holyBarrier: {
          name: "Holy Barrier",
          desc: "Tạo kết giới ánh sáng quanh bạn trong 10 giây, ngăn quái tiến vào và đẩy những quái ở bên trong ra ngoài. Đồng minh vẫn có thể ra vào tự do. Kết giới có 500 máu (vỡ khi đỡ đủ 500 sát thương) và tốn 2 mana mỗi giây để duy trì.",
        },
        // Cao cấp
        crystalRain: {
          name: "Crystal Rain",
          desc: "Gọi mưa sao băng gồm 10 viên rơi liên tiếp xuống quái được chọn, bám theo mục tiêu khi nó di chuyển.",
        },
        prismSweep: {
          name: "Prism Sweep",
          desc: "Phóng 3 đợt linh hồn theo hướng con trỏ, gây sát thương cho quái trúng phải và khiến chúng ngủ trong 5 giây.",
        },
        holyLight: {
          name: "Holy Light",
          desc: "Tạo cột thánh quang tại vị trí chỉ định, gây sát thương lên quái và hồi máu cho người chơi bên trong.",
        },
      },
    },
    dark: {
      name: "Ám",
      skills: {
        // Sơ cấp
        crescentBlade: {
          name: "Crescent Blade",
          desc: "Phóng lưỡi liềm bóng tối theo hướng con trỏ, gây sát thương lên các quái trên đường bay.",
        },
        lifeDrain: {
          name: "Life Drain",
          desc: "Hút máu quái được chọn, gây sát thương lớn và hồi cho bạn 20% máu tối đa.",
        },
        twilightZone: {
          name: "Twilight Zone",
          desc: "Tạo kết giới tại vị trí chỉ định trong 20 giây, khiến quái bên trong gây ít hơn 20% sát thương.",
        },
        // Trung cấp
        demonClaw: {
          name: "Demon Claw",
          desc: "Dùng bàn tay bóng tối giữ chặt quái được chọn, khiến nó không thể di chuyển trong 5 giây.",
        },
        shadowStep: {
          name: "Shadow Step",
          desc: "Tan vào bóng tối rồi xuất hiện ngay tại vị trí chỉ định trong phạm vi cho phép.",
        },
        nightWalker: {
          name: "Night Walker",
          desc: "Chỉ dùng được vào ban đêm hoặc trong hang. Khi kích hoạt, bạn chạy nhanh hơn 200%, nhìn rõ trong bóng tối và Charlie sẽ không tấn công. Kỹ năng tiêu hao 1 mana mỗi giây; dùng lại để tắt.",
        },
        // Cao cấp
        gravityWell: {
          name: "Gravity Well",
          desc: "Mở một lỗ đen tại vị trí chỉ định trong 10 giây, liên tục hút quái vào tâm và gây sát thương mỗi giây.",
        },
        soulCurse: {
          name: "Soul Curse",
          desc: "Bắn quả cầu bóng tối vào quái được chọn, gây sát thương lớn và nguyền rủa mục tiêu trong 20 giây, khiến nó giảm 50% giáp và di chuyển chậm hơn.",
        },
        voidGaze: {
          name: "Void Gaze",
          desc: "Đánh dấu quái được chọn bằng cổng hư vô. Sau 5 giây, dấu ấn phát nổ, gây sát thương cực lớn lên khu vực xung quanh.",
        },
      },
    },
  },
  characters: {
    wilson: {
      traits: [
        "Mang một bộ râu mọc dần theo thời gian, có thể giữ ấm hoặc để 3 slot đồ ăn",
      ],
      buffs: [],
    },
    willow: {
      traits: [
        "Ghét lạnh, khả năng kháng lửa nhưng vẫn mất máu nếu quá 70 độ",
        "Mang một gấu bông nhỏ chống lại quái vật",
        "Mang một chiếc bật lửa",
      ],
      buffs: [],
    },
    wolfgang: {
      traits: [
        "Làm việc nặng sẽ nhanh lên cơ bắp",
        "Mang một chiếc tạ",
        "Sợ quái vật và bóng tối",
      ],
      buffs: [
        "Không còn tăng dame khi cơ bắp tăng nữa mà thay vào đó là tăng độ phòng thủ",
      ],
    },
    wendy: {
      traits: [
        "Khả năng giảm tinh thần thấp do quanh năm sống cùng người âm",
        "Có chị gái abigail với nhiều kĩ năng",
      ],
      buffs: [
        "Không bị giảm dame khi dùng phép",
        "Abigal giờ đây có thể dùng 2 thuốc cùng lúc",
      ],
    },
    wx78: {
      traits: [
        "Có thể nâng cấp với các bộ mạch",
        "Có thể ăn đồ thiu như đồ tươi",
        "Sạc điện bằng sấm sét, đồ điện của winona, nhưng sẽ bị sát thương khi bị ướt",
      ],
      buffs: [],
    },
    wickerbottom: {
      traits: [
        "Là người quản lý thư viện, nhiều công thức thấp được mở khóa sẵn",
        "Có thể chế tạo sách",
        "Ghét đồ ăn ôi thiu",
        "Không thể ngủ",
      ],
      buffs: [],
    },
    woodie: {
      traits: [
        "Có một chiếc rìu xịn lucy vô hạn độ bền",
        "Có 3 dạng biến hình quái vật nhưng không loại nào dùng được trượng phép",
      ],
      buffs: [],
    },
    wes: {
      traits: [
        "-25% dame vật lý, +25% sát thương nhận vào, +25% đói nhanh",
        "Chỉ phù hợp với người muốn tăng độ thử thách của game, không phù hợp với người mới",
      ],
      buffs: ["Dame phép không bị giảm"],
    },
    maxwell: {
      traits: [
        "Từng là vị vua của thế giới này",
        "Sở hữu đội quân bóng tối và quyển sách quyền năng",
      ],
      buffs: [
        "Sở hữu quyển sách quyền năng để dùng phép mà không cần dùng trượng",
      ],
    },
    wigfrid: {
      traits: [
        "Là chiến binh có khả năng chiến đấu tốt, công thủ toàn diện",
        "Nhược điểm chỉ ăn thịt",
      ],
      buffs: [],
    },
    webber: {
      traits: [
        "Là một loại quái vật, dễ bị sinh vật trung lập thù ghét, có thể kết bạn với nhện",
        "Xây dựng một đế chế nhện càn quét mọi thứ nhưng dễ bị ghét vì gây lag server",
        "Có một bộ râu lớn dần theo thời gian để giữ ấm",
      ],
      buffs: [],
    },
    winona: {
      traits: [
        "Thợ công trình, có khả năng chế tạo nhanh khi no",
        "Bộ công trình hữu dụng cho tấn công và sinh hoạt",
        "Là chị em của charlie, có khả năng chống lại 1 lần tấn công của charlie và được reset khả năng này mỗi khi có ánh sáng",
      ],
      buffs: [],
    },
    warly: {
      traits: [
        "Đầu bếp có công trình đặc biệt là nồi hầm di động, nấu được nhiều món ăn đặc biệt",
        "Khả năng ghi nhớ món ăn khiến ông bị giảm chỉ số khi ăn lại cùng một món trong một khoảng thời gian",
      ],
      buffs: ["Bổ xung các bột hệ phép thuật riêng để rắc lên món ăn"],
    },
    wortox: {
      traits: [
        "Là một dạng quái vật, có nhánh thiện và ác",
        "Nhánh thiện không bị sinh vật trung lập tấn công và hữu dụng cho đồng đội",
        "Nhánh ác khả năng sinh tồn cao, tự lập và tấn công mạnh mẽ",
        "Giảm một nửa hiệu quả đồ ăn, nhưng có thể ăn hồn",
      ],
      buffs: [],
    },
    wormwood: {
      traits: [
        "Farmer chính hiệu, yêu thiên nhiên cây cỏ",
        "Mất tinh thần khi phá hủy cây, tăng khi trồng cây",
        "Đồ ăn hồi/mất máu không có tác dụng,",
        "Dễ bén lửa, kháng nước tốt",
      ],
      buffs: [],
    },
    wurt: {
      traits: [
        "Khả năng kháng nước tốt, kết bạn được với người cá, kẻ thù truyền kiếp với heo",
        "Chỉ ăn rau",
        "Có thể xây dựng đội quân người cá càn quét mọi thứ, nhưng cũng có thể gây lag server nếu quá nhiều",
      ],
      buffs: [],
    },
    walter: {
      traits: [
        "Khi bị tổn thương sẽ bị trừ tinh thần",
        "Có chú chó worby hữu dụng với nhiều skill",
        "Sợ ong, x2 dame khi bị ong tấn công",
      ],
      buffs: [
        "Worby sẵn sàng chia sẻ độ no của bản thân để đỡ một phần nhỏ sát thương cho walter",
      ],
    },
    wanda: {
      traits: [
        "Dùng thời gian thay cho máu",
        "Gừng càng già càng cay, dame vật lý tỉ lệ với tuổi già",
        "Tuổi cao sức yếu không vác được đồ nặng",
      ],
      buffs: [
        "Dame phép không bị phụ thuộc vào tuổi tác nên hãy giữ thanh xuân trẻ nhất",
      ],
    },
  },
} satisfies DataMessages;
