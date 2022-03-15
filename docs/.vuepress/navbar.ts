import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  {text:"开始吧",icon:"play",link:"/"},
  { text: "调教手册", icon: "creative", link: "/manual" },
  {
    text: "成长日记",
    icon: "script",
    link:"/diary"
  },
  {
    text: "我们的约定",
    icon: "info",
    link: "/promise",
  },
  {
    text:"调戏开发者",
    icon:"operate",
    link:"/developer"
  }
]);
