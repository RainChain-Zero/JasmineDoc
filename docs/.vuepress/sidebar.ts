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
        children: ["introduction","interaction"]
      },
    ]
  },
  {
    text: "Mirai",
    icon: "note",
    prefix: "manual/mirai/",
    collapsable: true,
    children: [],
  },
  {
    text: "NoneBot2",
    icon: "note",
    prefix: "manual/nonebot2/",
    collapsable: true,
    children: [],
  },
  {
    text: "附录",
    icon: "note",
    prefix: "appendix",
    collapsable: true,
    children: [],
  }
]);
