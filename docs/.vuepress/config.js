module.exports = {
  title: "Terry的学习笔记",
  //   description: "Terry的前后端学习笔记",
  head: [["link", { rel: "icon", href: "./public/logo.png" }]],

  themeConfig: {
    activeHeaderLinks: false, // 默认值：true
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    logo: "./assets/img/logo.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "前端笔记",
        items: [
          { text: "vuepress", link: "/vuepress/" },
          { text: "nodejs", link: "/nodejs/" },
          { text: "json-server", link: "/json-server/" },
        ],
      },
      {
        text: "后端笔记",
        items: [{ text: "myfavorite", link: "/myfavorite/" }],
      },
      {
        text: "常用网址",
        items: [
          {
            text: "设计素材网站",
            items: [
              {
                text: "青年帮设计导航",
                link: "https://www.qingnian8.com/",
                target: "_blank",
              },
              {
                text: "iconfont",
                link: "https://www.iconfont.cn/",
                target: "_blank",
              },
              {
                text: "colordrop",
                link: "https://colordrop.io/",
                target: "_blank",
              },
              {
                text: "在线转换器-2ico",
                link: "https://cdkm.com/cn/",
                target: "_blank",
              },
            ],
          },
          {
            text: "架构网站",
            items: [
              {
                text: "uviewui",
                link: "https://www.uviewui.com/",
                target: "_blank",
              },
              {
                text: "vuepress",
                link: "https://vuepress.vuejs.org",
                target: "_blank",
              },
              {
                text: "Hbuilder",
                link: "https://ext.dcloud.net.cn/",
                target: "_blank",
              },
              {
                text: "uniapp",
                link: "https://uniapp.dcloud.net.cn/",
                target: "_blank",
              },
              {
                text: "element",
                link: "https://element.eleme.cn/#/zh-CN",
                target: "_blank",
              },              
            ],
          },
          {
            text: "vue相关",
            items: [
              {
                text: "vue",
                link: "https://cn.vuejs.org/",
                target: "_blank",
              },
              {
                text: "vuepress",
                link: "https://vuepress.vuejs.org",
                target: "_blank",
              },
            ],
          },
          {
            text: "nodejs",
            items: [
              {
                text: "nodejs",
                link: "http://nodejs.cn/",
                target: "_blank",
              },
              {
                text: "yarn",
                link: "https://blog.csdn.net/wz_coming/article/details/118325585",
                target: "_blank",
              },
            ],
          },
        ],
      },
    ],
  },
};
