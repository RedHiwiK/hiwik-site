# hiwik-site 项目规范

KunKunRed 所有 App 的官方站点合集：总览页 + 每个 App 一套独立子站（概览、使用指南、更新日志、支持、隐私政策、用户协议）。Astro 静态站，中英双语（中文无前缀，英文在 `/en/`）。

## 结构
- 所有路由由 `src/pages/[...path].astro` 的路由表生成，不另建页面文件。
- App 配置：`src/data/apps/<slug>.ts`（类型见 `src/data/types.ts`），在 `src/data/apps/index.ts` 注册。
- 文档：`src/content/docs/<slug>/<zh|en>/<privacy|terms|support|changelog>.md`，使用指南放 `guide/<名称>.md`（frontmatter 写 `group`、`order`、`description`）。页面是否存在以中文版为准；英文缺失时回落中文并提示。
- 栏目（指南 / 更新日志 / 支持 / 隐私 / 协议）由 `src/lib/sections.ts` 统一算出，导航、首页"资料与条款"、文档页"其他资料"、总览卡片都从这里取。
- 文档内的图片和视频放 `public/<slug>/`，Markdown 里用 `/<slug>/...` 绝对路径。
- 图标用 lucide（`src/components/Icon.astro`，传 kebab-case 名称）。
- 每个 App 的子站互相独立，只通过页脚和"其他 App"链接到总览页。

## 内容
- 出品署名是 KunKunRed（个人 IP），不用 Hiwik；hiwik 只是域名和 Bundle ID 前缀。
- 文案不要把 App 称作"小 App"。
- App 首页不放 App Store 营销截图，靠图标、主题色和功能卡片表达。
- 每个 App 的隐私政策、用户协议必须有显眼入口（顶部导航、首页"资料与条款"、总览卡片），不能只藏在页脚。
- 所有 App 目前只支持 iPhone，不要写 iPad / Mac。
- App 介绍只写 App Store 官方描述、商店元数据或用户确认过的功能，不要从代码或设计文档推测功能。
- 隐私政策 / 用户协议属于法律文本：迁移时只改格式，不改实质内容；新写或改动的条款要让用户审核。

## 设计
- 颜色只用 `src/styles/global.css` 里的 token；App 主题色是 `--app-<slug>`，页面里统一用 `--accent`（由 `<html data-app>` 决定）。
- UI 中不用 emoji。
- 尊重"减弱动态效果"。深浅色默认跟随系统，页头按钮可手动切换（`<html data-theme>`，选择存在 localStorage 的 `theme`）；深色 token 在 global.css 里媒体查询和 `[data-theme=dark]` 各一份，改时两处同步。

## 验证
- 改完运行 `pnpm build`，通过后再报告完成。本地预览 `pnpm dev`。

## 部署
- 仓库 `RedHiwiK/hiwik-site`（public），push 到 `main` 后由 GitHub Actions 部署到 GitHub Pages，域名 https://apps.hiwik.cn/ （阿里云解析 `apps` CNAME → `redhiwik.github.io`；Pages 用 Actions 构建时自定义域名以仓库 Pages 设置为准，`public/CNAME` 只做记录）。
- 根域名 `hiwik.cn` 留作他用，不要把本站绑到根域名。
