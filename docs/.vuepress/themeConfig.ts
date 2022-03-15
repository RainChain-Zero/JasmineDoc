import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://rainchain-zero.github.io",

  author: {
    name: "RainChain-Zero",
    url: "https://github.com/RainChain-Zero",
  },

  iconPrefix: "iconfont icon-",

  darkmode:"switch",

  logo: "/logo.png",

  repo: "https://github.com/RainChain-Zero/JasmineDoc",

  docsBranch:"master",

  docsDir:"docs/",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "到头啦——",

  displayFooter: true,

  pageInfo: ["Original", "Date", "Category", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
