// 网站要显示的"内容"，全都集中在这里。
// 想改标题、改文案、加作品？只动这个文件，组件代码一个字都不用碰。
// 这就是"数据与界面分离"：组件只管"怎么显示"，site.js 只管"显示什么"。
//
// 埋了一颗模块 5 的种子：现在这些值写死在文件里；等后端登场，
// 它们可以改成从网络接口实时取——而组件那边照样一个字都不用动。

export const home = {
  heroTitle: "坐牢ing",
  heroSubtitle: "今日坐一宿，明日坐两宿，然后不得一夕安寝",
  featuredWork: {
    kicker: "作品",
    title: "你走了",
    copy: "我们吃什么",
    linkLabel: "是啊，吃什么",
  },
  identity: {
    motto: "来，乖乖站好~",
    learning: "零到全栈",
  },
};

export const textLab = {
  heroTitle: "地牢",
  heroSubtitle: "do you like van you see?",
};
