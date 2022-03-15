import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/JasmineDoc/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      {
        rel: 'icon', 
        href: '/images/favicon.ico' 
      }
    ]
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "茉莉酱养成手册",
      description: "茉莉酱の集成养成方案",
    },
  },

  themeConfig,
});
