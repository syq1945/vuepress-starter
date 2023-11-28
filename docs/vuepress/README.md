## 快速上手
::: warning  前提条件
 
VuePress 需要 [Node.js (opens new window)](https://nodejs.org/en/)>= 8.6
:::
 
本文会帮助你从头搭建一个简单的 VuePress 文档。如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。
 
### 1.  创建并进入一个新目录
``` bash
mkdir vuepress-starter && cd vuepress-starter 
```

### 2.  使用你喜欢的包管理器进行初始化
``` bash
yarn init 
```

### 3.  将 VuePress 安装为本地依赖
 
我们已经不再推荐全局安装 VuePress
``` bash
yarn add -D vuepress 
```
::: warning 注意

如果你的现有项目依赖了 webpack 3.x，我们推荐使用 [Yarn (opens new window)](https://classic.yarnpkg.com/zh-Hans/)而不是 npm 来安装 VuePress。因为在这种情形下，npm 会生成错误的依赖树。
:::
 
### 4.  创建你的第一篇文档
``` bash
mkdir docs && echo '# Hello VuePress' > docs/README.md 
```

### 5.  在 `package.json` 中添加一些 [scripts(opens new window)](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)
 
这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些 scripts 已经被添加。
 ``` js
{
    "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
    }
} 
```
 
### 6.  在本地启动服务器
``` bash 
yarn docs:dev # npm run docs:dev 
```

VuePress 会在 [http://localhost:8080 (opens new window)](http://localhost:8080/)启动一个热重载的开发服务器。
 
现在，你应该已经有了一个简单可用的 VuePress 文档。接下来，了解一下推荐的 [目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html) 和VuePress 中的 [基本配置](https://vuepress.vuejs.org/zh/guide/basic-config.html)。
 
等你了解完上文介绍的基础概念，再去学习一下如何使用 [静态资源](https://vuepress.vuejs.org/zh/guide/assets.html)，[Markdown 拓展](https://vuepress.vuejs.org/zh/guide/markdown.html) 和 [在Markdown 中使用 Vue](https://vuepress.vuejs.org/zh/guide/using-vue.html) 来丰富你的文档内容。
 
当你的文档逐渐成型的时候，不要忘记 VuePress 的 [多语言支持](https://vuepress.vuejs.org/zh/guide/i18n.html) 并了解一下如何将你的文档 [部署](https://vuepress.vuejs.org/zh/guide/deploy.html) 到任意静态文件服务器上
 
### 6.  安装依赖文件 C:\Live-Coding\study-notes>
``` bash 
cnpm install  依据package.json文件安装依赖文件
```
 
### 7.  在本地启动服务器, C:\Live-Coding\study-notes>
``` bash 
yarn docs:dev      (测试服务器)
yarn docs:build    (打包正式代码)
```

VuePress 会在 [http://localhost:8080 (opens new window)](http://localhost:8080 )启动一个热重载的开发服务器。


::: tip 上线一个项目, 撒花!! 
    已经上线, 网址:
    http://xxxxxx:8077/
:::
 
## 目录结构
 
VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：
 
    .
    ├── docs
    │   ├── .vuepress (可选的)
    │   │   ├── components (可选的)
    │   │   ├── theme (可选的)
    │   │   │   └── Layout.vue
    │   │   ├── public (可选的)
    │   │   ├── styles (可选的)
    │   │   │   ├── index.styl
    │   │   │   └── palette.styl
    │   │   ├── templates (可选的, 谨慎配置)
    │   │   │   ├── dev.html
    │   │   │   └── ssr.html
    │   │   ├── config.js (可选的)
    │   │   └── enhanceApp.js (可选的)
    │   │ 
    │   ├── README.md
    │   ├── guide
    │   │   └── README.md
    │   └── config.md
    │ 
    └── package.json
 
::: warning 注意
 
请留意目录名的大写。
:::
*   `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
*   `docs/.vuepress/components`: 该目录中的 Vue 组件将会被自动注册为全局组件。
*   `docs/.vuepress/theme`: 用于存放本地主题。
*   `docs/.vuepress/styles`: 用于存放样式相关的文件。
*   `docs/.vuepress/styles/index.styl`: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
*   `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
*   `docs/.vuepress/public`: 静态资源目录。
*   `docs/.vuepress/templates`: 存储 HTML 模板文件。
*   `docs/.vuepress/templates/dev.html`: 用于开发环境的 HTML 模板文件。
*   `docs/.vuepress/templates/ssr.html`: 构建时基于 Vue SSR 的HTML 模板文件。
*   `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是 `YML` 或 `toml`。
*   `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。
 
::: warning 注意
 
当你想要去自定义 `templates/ssr.html` 或 `templates/dev.html` 时，最好基于 [默认的模板文件 (opens new window)](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html)来修改，否则可能会导致构建出错。
:::
 
**同时阅读:**
 
*   [配置](https://vuepress.vuejs.org/zh/config/)
*   [主题](https://vuepress.vuejs.org/zh/theme/)
*   [默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

###  在 .vuepress 文件夹下新建 config.js
```js
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


```
 
## 默认的页面路由
 
此处我们把 `docs` 目录作为 `targetDir` （参考 [命令行接口](https://vuepress.vuejs.org/zh/api/cli.html#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)），下面所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 
``` js
`scripts` ：
 
 {
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
} 
```
 
对于上述的目录结构，默认页面路由地址如下：
 
| 文件的相对路径 | 页面路由地址 |
| --- | --- |
| `/README.md` | `/` |
| `/guide/README.md` | `/guide/` |
| `/config.md` | `/config.html` |
 
# 基本配置
 
## 配置文件
 
如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 `.vuepress` 目录，所有VuePress 相关的文件都将会被放在这里。你的项目结构可能是这样：
 
    .
    ├─ docs
    │  ├─ README.md
    │  └─ .vuepress
    │     └─ config.js
    └─ package.json 
 
一个 VuePress 网站必要的配置文件是 `.vuepress/config.js`，它应该导出一个 JavaScript 对象：
``` js
module.exports = {
title: 'Hello VuePress',
description: 'Just playing around'
} 
```
 
对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题和一个搜索框。VuePress 内置了基于 headers 的搜索 —— 它会自动为所有页面的标题、`h2` 和 `h3` 构建起一个简单的搜索索引。
 
参见 [配置](https://vuepress.vuejs.org/zh/config/) 来查看所有可配置的选项。
 
其他配置格式
 
你也可以使用 YAML (`.vuepress/config.yml`) 或是 TOML (`.vuepress/config.toml`) 格式的配置文件。
 
## 主题配置
 
一个 VuePress 主题应该负责整个网站的布局和交互细节。在VuePress 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 [默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html) 。
 
如果你想开发一个自定义主题，可以参考 [自定义主题](https://vuepress.vuejs.org/zh/theme/)。
 
## 应用级别的配置
 
由于 VuePress 是一个标准的 Vue 应用，你可以通过创建一个 `.vuepress/enhanceApp.js` 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。`enhanceApp.js` 应该 `export default` 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：
 
``` js
// 使用异步函数也是可以的
export default ({
Vue, // VuePress 正在使用的 Vue 构造函数
options, // 附加到根实例的一些选项
router, // 当前应用的路由实例
siteData, // 站点元数据
isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
// ...做一些其他的应用级别的优化
} 
```
 
**相关阅读：**
 
*   [插件 API 中的 enhanceApp](https://vuepress.vuejs.org/zh/plugin/option-api.html#enhanceappfiles)
 
 
## 自定义容器 默认主题
 
**输入**
 
    ::: tip
    这是一个提示
    :::
 
    ::: warning
    这是一个警告
    :::
 
    ::: danger
    这是一个危险警告
    :::
 
    ::: details
    这是一个详情块，在 IE / Edge 中不生效
    ::: 
 
**输出**
 
::: tip
这是一个提示
:::
 
::: warning
这是一个警告
:::
 
::: danger
这是一个危险警告
:::
 
::: details
这是一个详情块，在 IE / Edge 中不生效
:::
 
你也可以自定义块中的标题：
 
    ::: danger STOP
    危险区域，禁止通行
    :::
 
    ::: details 点击查看代码
    ```js
    console.log('你好，VuePress！')
    ```
    ::: 
 
::: danger STOP
危险区域，禁止通行
:::
 
::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
::: 
 
**参考:**
 
*   [vuepress-plugin-container(opens new window)](https://vuepress-community.netlify.app/en/plugins/container/#vuepress-plugin-container)
 