import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  {
    text: "总论",
    icon: "creative",
    link: "/manual",
  },
  {
    text: "Dice!",
    icon: "note",
    prefix: "manual/dice!/",
    collapsable: true,
    children: [
      {
        text: "好感组件",
        icon: "note",
        collapsable: true,
        prefix: "favorsystem/",
        children: ["introduction", "interaction", "sidestory", "itemsystem", "tradesystem", "worksystem"]
      },
      {
        text: "明日方舟泰拉TRPG",
        icon: "note",
        collapsable: true,
        prefix: "ark/",
        children: ["ark", "rk", "ac"]
      },
      {
        text: "其他",
        icon: "note",
        collapsable: true,
        prefix: "other/",
        children: ["searchmodule", "picture", "TTS", "truth", "whateat"]
      }
    ]
  },
  {
    text: "Mirai",
    icon: "note",
    prefix: "manual/mirai/",
    collapsable: true,
    children: ["weather", "calculator", "music", "makepic", "bottle", "steam", "nkgame"],
  },
  {
    text: "NoneBot2",
    icon: "note",
    prefix: "manual/nonebot2/",
    collapsable: true,
    children: ["nbnhhsh", "drawcard", "guessoperator", "setu", "tarot", "shindanmaker",
      "petpet", "ygo", "picsearcher", "caiyun", "oddtext", "drawimage", "rebuildimg",
      "wiki", "kfc", "pokemon", 'bilibili'],
  },
  {
    text: "Koishi",
    icon: "note",
    prefix: "manual/koishi/",
    collapsable: true,
    children: ["api", "novelai", "deepdanbooru", "youdao", "chatGPT"],
  },
  {
    text: "附录",
    icon: "note",
    collapsable: true,
    children: ["appendix/item", "diary/", "promise/", "developer/", "appendix/nsfw", "appendix/favormechanism", 'appendix/moodmechanism'],
  }
]);
