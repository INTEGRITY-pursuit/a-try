export const babel = {
  archiveId: "BABEL // ARCHIVE 07",
  accessStatus: "检索状态：允许访问",
  completionRate: "档案完整度：67.2%",
  heroTitle: "慈悲灯塔",
  heroTagline: "在无人应答的旷野上，仍有人试图为后来者留下方向。",
  ctaLabel: "进入档案",

  lore: [
    {
      id: "LOG-001",
      label: "矿石病",
      text: "源石能量驱动文明，亦侵蚀血肉。感染者失去家园，被恐惧的人类放逐至流浪都市的边缘。",
    },
    {
      id: "LOG-002",
      label: "战争",
      text: "萨卡兹内战将卡兹戴尔撕裂。军事委员会的号令与女王的愿景之间，横亘着无法弥合的断层。",
    },
    {
      id: "LOG-003",
      label: "理想",
      text: "特蕾西娅相信所有的分裂终将走向统一。她建立巴别塔，以教育、医疗与和平对抗恐惧与偏见。",
    },
    {
      id: "LOG-004",
      label: "代价",
      text: "1094年秋，石棺锁闭。灯塔熄灭的那一刻，也是它作为遗泽永久燃亮的那一刻。",
    },
  ],

  timeline: [
    {
      era: "旧日之梦",
      year: "BC 898",
      accentVar: "--accent-blue",
      events: [
        "卡兹戴尔再度陷落，双王降生",
        "特雷西斯亲手为特蕾西娅加冕",
        "兄妹二人对萨卡兹未来产生根本分歧",
      ],
    },
    {
      era: "王的遗愿",
      year: "约 1030",
      accentVar: "--brand",
      events: [
        "特蕾西娅创立巴别塔，收容流亡者",
        "凯尔希加入，成为巴别塔高层",
        "巴别塔在莱姆比顿发掘罗德岛陆艇",
        "博士从石棺中苏醒，成为特蕾西娅的左膀右臂",
      ],
    },
    {
      era: "石棺长眠",
      year: "1086–1094",
      accentVar: "--accent-red",
      events: [
        "1086：军事委员会政变，巴别塔被迫流亡",
        "1091：萨卡兹内战爆发，巴别塔局势扭转",
        "1094秋：博士解除陆艇防御，特雷西斯刺客入侵",
        "特蕾西娅于书房中被杀，临死前抹去博士记忆",
        "博士被封入石棺，阿米娅继承女王冠冕",
      ],
    },
    {
      era: "灯塔未熄",
      year: "后 1094",
      accentVar: "--brand",
      events: [
        "巴别塔解散，凯尔希重建为罗德岛制药",
        "阿米娅带着特蕾西娅的理想踏上新的旅途",
        "博士于多年后再度苏醒，记忆仍是空白",
        "慈悲灯塔——关于文明与代价的漫长追问",
      ],
    },
  ],

  characters: [
    {
      id: "TERESA",
      name: "特蕾西娅",
      title: "巴别塔创始人 · 萨卡兹正统女王",
      status: "档案状态：石棺封存",
      statusType: "sealed",
      summary:
        "相信和平可以超越种族与力量的桎梏。她用一生建造的灯塔，在她倒下后依然燃烧。",
      quote:
        "为了所有人的生存，我坚信所有的分裂终将走向统一，所有的民族终将融合为一体。",
      tags: ["萨卡兹", "巴别塔", "罗德岛起源", "牺牲"],
      accentColor: "#C8A85A",
    },
    {
      id: "DOCTOR",
      name: "博士",
      title: "巴别塔首席研究员 · 前任",
      status: "档案状态：记忆重置中",
      statusType: "classified",
      summary:
        "来自更古老文明的研究者。曾以自身为试验体对抗源石病。背叛与被遗忘之间，横亘着他自己都不再记得的选择。",
      quote: "你所忘记的，仍然存在于世界之中。",
      tags: ["博士", "罗德岛", "矿石病研究", "背叛"],
      accentColor: "#7A7E7C",
    },
    {
      id: "KALT",
      name: "凯尔希",
      title: "巴别塔高层 · 罗德岛制药创始人",
      status: "档案状态：允许访问",
      statusType: "open",
      summary:
        "见证了巴别塔的诞生与消亡。她的信任被打碎过一次，但她依然在废墟上重建了新的灯塔。",
      quote: "我不会再相信任何人了——但这不妨碍我继续做该做的事。",
      tags: ["凯尔希", "巴别塔", "罗德岛", "Mon3tr"],
      accentColor: "#5496A8",
    },
    {
      id: "THERESIS",
      name: "特雷西斯",
      title: "萨卡兹军事委员会 · 特蕾西娅之兄",
      status: "档案状态：权限受限",
      statusType: "restricted",
      summary:
        "他认为只有力量才能拯救萨卡兹。他亲手为妹妹加冕，也亲手命人刺杀了她。",
      quote: "慈悲是奢侈品。而我的人民，买不起奢侈品。",
      tags: ["萨卡兹", "军事委员会", "对立面"],
      accentColor: "#8C3636",
    },
    {
      id: "AMIYA",
      name: "阿米娅",
      title: "卡西米尔 · 女王冠冕继承者",
      status: "档案状态：现役",
      statusType: "active",
      summary:
        "在特蕾西娅怀中长大的孩子，承载着一位母亲留给整个世界的遗愿与温柔。",
      quote: "我会记住你告诉我的一切——即使你自己已经忘记了。",
      tags: ["阿米娅", "罗德岛", "继承者", "希望"],
      accentColor: "#B89A50",
    },
  ],

  quote: {
    text: "为了所有人的生存，我坚信所有的分裂终将走向统一，所有的民族终将融合为一体。在我所设想的未来，整个大地将成为一个整体。",
    attribution: "— 特蕾西娅",
    footnote: "SideStory《巴别塔》",
  },
};

export const terminal = {
  archiveId: "RHD-TERMINAL // 解析系统 v4.5",
  heroTitle: "罗德岛终端",
  heroSubtitle: "文本解析系统 · 权限等级：博士",
  inputKicker: "终端输入接口",
  inputHeading: "输入待解析文本",
  inputPlaceholder:
    "粘贴剧情文本、档案摘要或任意内容……\n例：「在无人应答的旷野上，仍有人试图为后来者留下方向。」",
  ctaLabel: "启动解析 ▶",
  resultKicker: "解析输出",
  resultHeading: "终端报告",
  resultFields: {
    original: "原始文本",
    translation: "语义转译",
    score: "感染指数",
    mood: "叙事倾向",
  },
};
