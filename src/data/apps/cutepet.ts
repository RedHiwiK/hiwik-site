import type { AppConfig } from '../types';
import icon from '../../assets/icons/cutepet.png';

const app: AppConfig = {
  slug: 'cutepet',
  name: { zh: '萌宠日记', en: 'Tailbook' },
  headline: { zh: '记录每一个温暖瞬间', en: 'Every little milestone, remembered' },
  tagline: {
    zh: '给猫猫狗狗的成长本，日常、健康、花费都记下。',
    en: 'A growth journal for your pets: daily moments, health and spending.',
  },
  summary: {
    zh: '每一次撒娇、每一口零食、每一个小里程碑，都值得被用心珍藏。萌宠日记是为铲屎官打造的私密成长记录工具，猫咪、狗狗、兔子还是仓鼠，都能在这里拥有专属的成长档案。',
    en: "Every cuddle, every treat, every little milestone deserves to be remembered. Tailbook is a private journal for your pet's life: cats, dogs, rabbits, hamsters and more each get their own growth story.",
  },
  icon,
  appStoreId: '6759037476',
  features: [
    {
      icon: 'images',
      title: { zh: '全能日记', en: 'Diary in every format' },
      body: {
        zh: '文字、照片、视频、Live Photo 多维度记录。内置日常、饮食、体重、疫苗驱虫、就医、玩耍、洗护等类型，也可以创建自定义类型。',
        en: 'Capture moments with text, photos, videos and Live Photos. Built-in types like Daily, Diet, Weight, Vaccines & Deworming, Vet Visits, Play and Grooming, or create your own.',
      },
    },
    {
      icon: 'star',
      title: { zh: '高光印记', en: 'Highlights' },
      body: {
        zh: '为重要里程碑创建高光时刻：陪伴 100 天、第一个生日，精美卡片一键生成专属纪念。',
        en: 'Turn big moments into Highlights: first day home, 100 days together, birthdays, each with a hand-drawn keepsake card.',
      },
    },
    {
      icon: 'heart-pulse',
      title: { zh: '健康管家', en: 'Health records' },
      body: {
        zh: '记录体重变化，查看趋势曲线；管理疫苗和驱虫记录，掌握健康状况。',
        en: 'Log weight and see the trend at a glance. Keep vaccine and deworming records organised.',
      },
    },
    {
      icon: 'bell-ring',
      title: { zh: '贴心提醒', en: 'Gentle reminders' },
      body: {
        zh: '设置周期提醒，疫苗驱虫、喂食洗护不再遗漏。通知在本地调度，不依赖任何服务器。',
        en: 'Repeating reminders for vaccines, meals, grooming and more. Notifications run locally, with no server involved.',
      },
    },
    {
      icon: 'package',
      title: { zh: '萌宠物品管理', en: 'Pet supplies' },
      body: {
        zh: '集中管理猫粮、零食、药品、护理用品、玩具和外出用品，记录数量、存放位置、所属萌宠与保质期，支持临期提醒。',
        en: 'Keep food, treats, medicine, care products, toys and travel gear in order, with quantity, storage location, owner pet, expiry dates and alerts.',
      },
    },
    {
      icon: 'piggy-bank',
      title: { zh: '花费账本', en: 'Expenses' },
      body: {
        zh: '每一笔宠物开销随手记录，按月查看花费统计和分类占比，轻松掌握养宠成本。',
        en: 'Jot down every pet expense and see monthly totals and category breakdowns.',
      },
    },
    {
      icon: 'image',
      title: { zh: '自由定制分享图', en: 'Share cards' },
      body: {
        zh: '多款主题与纸张背景，文字、布局、气泡和萌宠贴纸自由搭配，可切换画布比例，一键保存或分享。',
        en: 'Design share images with themes, paper styles, text bubbles, layouts and stickers, in several canvas ratios. Save or share in a tap.',
      },
    },
    {
      icon: 'gem',
      title: { zh: '一次买断', en: 'One-time purchase' },
      body: {
        zh: 'Pro 一次性买断，无订阅、无续费。免费版即可使用全部核心功能，记录较多时再升级解锁无限记录。',
        en: 'Pro is a one-time purchase with no subscriptions or renewals. All core features are free; upgrade only when you want unlimited entries.',
      },
    },
  ],
  promises: [
    {
      icon: 'lock',
      title: { zh: '内容只在你自己手里', en: 'Your content stays yours' },
      body: {
        zh: '宠物档案、日记、照片、视频只存在你的设备和你自己的 iCloud 私有空间，开发者无法访问。',
        en: 'Pet profiles, entries, photos and videos live only on your device and in your own private iCloud. We cannot access them.',
      },
    },
    {
      icon: 'user-x',
      title: { zh: '没有账号', en: 'No account' },
      body: {
        zh: '不用注册登录，不收集姓名、手机号、邮箱等身份信息。',
        en: 'No sign-up or login, and no names, phone numbers or emails collected.',
      },
    },
    {
      icon: 'eye-off',
      title: { zh: '无广告，无追踪', en: 'No ads, no tracking' },
      body: {
        zh: '不接入广告和第三方 SDK，不做跨 App 追踪，只有不含内容的匿名使用统计。',
        en: 'No ads or third-party SDKs and no cross-app tracking, only anonymous usage statistics that never include your content.',
      },
    },
  ],
  contactEmail: 'hongsikunjob@gmail.com',
};

export default app;
