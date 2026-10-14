export type Lang = 'zh' | 'en';
export const langs: Lang[] = ['zh', 'en'];

export type L = { zh: string; en: string };
export const pick = (v: L, lang: Lang) => v[lang] || v.zh;

export const ui = {
  zh: {
    brand: 'KunKunRed',
    hubTitle: 'KunKunRed 的 App · 为日常生活认真打磨',
    hubDescription: 'KunKunRed 出品的 iPhone App：平生、萌宠日记、MoonLog、一票一程。',
    hubEyebrow: 'Apps by KunKunRed',
    hubStatement: '为日常生活，\n认真打磨每一款 App。',
    hubLead: '记账与健康、毛孩子的成长、交易复盘、一路走过的车票。',
    hubApps: '全部 App',
    aboutAuthor: '关于作者',
    authorUrl: 'https://kunkunred.hiwik.cn/',
    nav: { home: '概览', guide: '使用指南', changelog: '更新日志', support: '支持', privacy: '隐私政策', terms: '用户协议' },
    navDesc: {
      guide: '图文与视频教程，按模块整理',
      changelog: '每个版本新增了什么',
      support: '常见问题与反馈渠道',
      privacy: '我们收集什么、不收集什么',
      terms: '使用本 App 的约定',
    },
    langSwitch: 'EN',
    langSwitchLabel: 'Switch to English',
    themeLabel: '切换浅色 / 深色',
    download: '在 App Store 下载',
    comingSoon: '即将上架 App Store',
    forIphone: '适用于 iPhone',
    features: '功能',
    promises: '关于你的数据',
    resources: '资料与条款',
    resourcesLead: '使用帮助、版本记录，以及隐私政策和用户协议都在这里。',
    moreApps: 'KunKunRed 的其他 App',
    visit: '了解更多',
    contact: '联系我们',
    guideLead: '按模块整理的图文与视频教程。',
    guideSearch: '搜索教程',
    guideEmpty: '没有找到相关教程。',
    updated: '更新于',
    onThisPage: '本页',
    prev: '上一篇',
    next: '下一篇',
    backToGuide: '全部教程',
    related: '其他资料',
    zhOnlyNotice: 'This page is currently available in Chinese only.',
    footProduct: '产品',
    footHelp: '帮助',
    footLegal: '条款',
  },
  en: {
    brand: 'KunKunRed',
    hubTitle: 'Apps by KunKunRed · crafted for everyday life',
    hubDescription: 'iPhone apps by KunKunRed: Vitae, Tailbook, MoonLog and Waystub.',
    hubEyebrow: 'Apps by KunKunRed',
    hubStatement: 'Apps for everyday life,\neach one crafted with care.',
    hubLead: 'Money and health, your pet growing up, reviewing trades, and every ticket you have travelled on.',
    hubApps: 'All apps',
    aboutAuthor: 'About the author',
    authorUrl: 'https://kunkunred.hiwik.cn/en/',
    nav: { home: 'Overview', guide: 'Guide', changelog: "What's New", support: 'Support', privacy: 'Privacy', terms: 'Terms' },
    navDesc: {
      guide: 'Tutorials with pictures and video',
      changelog: 'What each version added',
      support: 'FAQ and ways to reach us',
      privacy: 'What we collect, and what we never do',
      terms: 'The terms for using this app',
    },
    langSwitch: '中',
    langSwitchLabel: '切换到中文',
    themeLabel: 'Toggle light / dark',
    download: 'Download on the App Store',
    comingSoon: 'Coming soon to the App Store',
    forIphone: 'For iPhone',
    features: 'Features',
    promises: 'About your data',
    resources: 'Help and legal',
    resourcesLead: 'Guides, release notes, the privacy policy and the terms of use, all in one place.',
    moreApps: 'More apps by KunKunRed',
    visit: 'Learn more',
    contact: 'Contact',
    guideLead: 'Step-by-step tutorials with pictures and video, grouped by module.',
    guideSearch: 'Search tutorials',
    guideEmpty: 'No matching tutorials.',
    updated: 'Updated',
    onThisPage: 'On this page',
    prev: 'Previous',
    next: 'Next',
    backToGuide: 'All tutorials',
    related: 'More resources',
    zhOnlyNotice: 'This page is currently available in Chinese only.',
    footProduct: 'Product',
    footHelp: 'Help',
    footLegal: 'Legal',
  },
} as const;

export const t = (lang: Lang) => ui[lang];

/** 站内路径一律写成 `/a/b/` 形式，英文页加 `/en` 前缀 */
export const href = (lang: Lang, path: string) => {
  const p = path.startsWith('/') ? path : `/${path}`;
  const withSlash = p.endsWith('/') || /\.[a-z0-9]+$/i.test(p) ? p : `${p}/`;
  return lang === 'en' ? `/en${withSlash === '/' ? '/' : withSlash}` : withSlash;
};

export const stripLang = (pathname: string) => pathname.replace(/^\/en(\/|$)/, '/');
export const altHref = (lang: Lang, pathname: string) => href(lang === 'zh' ? 'en' : 'zh', stripLang(pathname));
