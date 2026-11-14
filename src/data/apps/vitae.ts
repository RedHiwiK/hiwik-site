import type { AppConfig } from '../types';
import icon from '../../assets/icons/vitae.png';
import activityPortrait from '../../assets/activity/vitae-portrait.png';
import activityLandscape from '../../assets/activity/vitae-landscape.png';

const app: AppConfig = {
  slug: 'vitae',
  name: { zh: '平生', en: 'Vitae' },
  headline: { zh: '把日子，记成习惯', en: 'Make your days a habit' },
  tagline: {
    zh: '账单、资产、物品、健康、健身、待办、日子，一个 App 记下生活。',
    en: 'Bills, assets, belongings, health, workouts, todos and the days that matter, all in one place.',
  },
  summary: {
    zh: '平生把记账、资产、物品、健康、饮食、健身、待办和日子放在一起。付款截图丢进来，AI 帮你变成一笔账；拍一张餐盘，AI 识别食物和营养；重要的日子会倒数提醒；在自知的「此刻」看本周变化，在「回顾」回看一周或一个月，需要时再手动生成 AI 来信。',
    en: 'Vitae brings bookkeeping, assets, belongings, health, diet, workouts, todos and important days together. Drop in a payment screenshot and AI turns it into a ledger entry; snap your plate and it recognises the food and nutrition; important days get countdown reminders; see this week’s changes in Now, look back on a week or month in Reviews, and request an AI letter when you want another perspective.',
  },
  icon,
  appStoreId: '6763250273',
  features: [
    {
      icon: 'receipt',
      title: { zh: 'AI 截图记账', en: 'Screenshot-to-ledger with AI' },
      body: {
        zh: '支付宝、微信、银行账单截图交给 AI，金额、时间、分类自动填好，核对一下就能保存；配上快捷指令，不打开 App 也能一键记账。',
        en: 'Hand Alipay, WeChat or bank screenshots to AI and the amount, time and category are filled in for you. Add the Shortcut and you can log a payment without opening the app.',
      },
    },
    {
      icon: 'wallet-cards',
      title: { zh: '资产账户', en: 'Assets and accounts' },
      body: {
        zh: '银行卡、现金、信用卡等账户余额统一管理，按时间留下余额快照，用趋势图看净资产的变化。',
        en: 'Keep bank, cash and credit accounts in one place, with balance snapshots over time and a trend chart of your net worth.',
      },
    },
    {
      icon: 'salad',
      title: { zh: '食物识别与饮食记录', en: 'Meal recognition and diet log' },
      body: {
        zh: '从饮食页底部输入或说一句话、直接拍照，或打开食物库记录；AI 估算食物与营养，文字和语音记入后可撤销，每日热量与三大营养素自动汇总。',
        en: 'Type or speak a sentence, take a photo directly, or open the food library from the bottom of Diet. AI estimates foods and nutrition, text and voice logs can be undone, and daily calories and macros add up automatically.',
      },
    },
    {
      icon: 'dumbbell',
      title: { zh: '健身计划与动作库', en: 'Workout plans and exercise library' },
      body: {
        zh: '内置 110+ 训练动作，自由组合计划并设置每周、每月或指定日期的训练日；每组预填上次成绩，最近练过的计划可以一键再练。',
        en: 'Build plans from 110+ exercises and schedule training by weekday, day of the month, or specific dates. Sets are prefilled with your last results, and recent plans are ready to repeat.',
      },
    },
    {
      icon: 'list-checks',
      title: { zh: '待办', en: 'To-dos' },
      body: {
        zh: '按分类和优先级整理待办，支持语音速记；快捷指令和小组件让你一句话或一下点击就能添加任务。',
        en: 'Organise to-dos by category and priority, capture them by voice, and add tasks with a phrase or a tap from Shortcuts and widgets.',
      },
    },
    {
      icon: 'calendar-heart',
      title: { zh: '日子', en: 'Days' },
      body: {
        zh: '纪念日、生日、重要节点记在一处，倒数与正数一目了然，到日子前提醒你。',
        en: 'Anniversaries, birthdays and milestones in one place, counting down or up, with a reminder before each one arrives.',
      },
    },
    {
      icon: 'package',
      title: { zh: '物品', en: 'Belongings' },
      body: {
        zh: '拍照或识别订单截图，把家里的东西收进物柜；记下价格、位置和保修期，到期前提醒，不常用的东西还能算出每次使用成本。',
        en: 'Add the things you own from a photo or an order screenshot. Keep price, location and warranty in one place, get reminded before dates are due, and see the cost per use of things you rarely use.',
      },
    },
    {
      icon: 'sparkles',
      title: { zh: '自知：此刻与回顾', en: 'Self-Knowing: Now and Reviews' },
      body: {
        zh: '「此刻」呈现本周和平时不同的地方；「回顾」自动整理周 / 月变化和记录间的关系，不需要调用 AI。想换个角度时，再手动生成 AI 来信；旧版教练已下线。',
        en: 'Now shows how this week differs from usual. Reviews automatically brings together weekly or monthly changes and relationships without an AI request. Manually request an AI letter for another perspective; the former Coach is no longer available.',
      },
    },
  ],
  promises: [
    {
      icon: 'user-x',
      title: { zh: '不用注册账号', en: 'No account needed' },
      body: {
        zh: '打开就能用，不收集手机号、邮箱等个人身份信息。',
        en: 'Open it and start. No phone number, email or other personal details are collected.',
      },
    },
    {
      icon: 'cloud',
      title: { zh: '数据在你自己的 iCloud', en: 'Data lives in your iCloud' },
      body: {
        zh: '账单、健康、训练等数据只存在你的设备和 iCloud 私有数据库里，不存到我们的服务器。',
        en: 'Your ledger, health and workout data stay on your device and in your private iCloud database, never on our servers.',
      },
    },
    {
      icon: 'mouse-pointer-click',
      title: { zh: 'AI 由你主动触发', en: 'AI only when you ask' },
      body: {
        zh: '只有你点了识别或生成，才会发送这一次所需的内容；图片用完即弃，不做持久保留。',
        en: 'Content is sent only when you tap to recognise or generate, and only what that request needs. Images are not kept.',
      },
    },
    {
      icon: 'eye-off',
      title: { zh: '无广告，不出售数据', en: 'No ads, no data sales' },
      body: {
        zh: '不集成广告 SDK，不向任何第三方出售或分享你的数据。',
        en: 'No ad SDKs, and your data is never sold or shared with third parties.',
      },
    },
  ],
  guideGroups: [
    { key: 'basic', name: { zh: '基础操作', en: 'Basics' } },
    { key: 'finance', name: { zh: '财务', en: 'Finance' } },
    { key: 'fitness', name: { zh: '健身', en: 'Fitness' } },
    { key: 'health', name: { zh: '健康', en: 'Health' } },
    { key: 'todo', name: { zh: '待办', en: 'To-do' } },
  ],
  contactEmail: 'hongsikunjob@gmail.com',
  activity: {
    title: { zh: '记录生活，赢取 PRO 会员', en: 'Record your life, win PRO' },
    description: {
      zh: '在小红书 / 抖音发布平生记录，参与活动赢取 PRO 会员奖励。点赞越多，奖励越丰厚。',
      en: 'Share your Vitae records on Xiaohongshu or Douyin to win PRO membership. The more likes, the bigger the reward.',
    },
    poster: {
      portrait: activityPortrait,
      landscape: activityLandscape,
      alt: { zh: '记录生活，赢取 PRO 会员 — 平生活动', en: 'Record your life, win PRO — Vitae event' },
    },
    cta: {
      label: { zh: '立即参与，提交记录', en: 'Join now, submit your record' },
      url: 'https://qx5i9lhzkm6.feishu.cn/share/base/form/shrcnTXJ1MTwxrhOdq2W8xDJSuf',
    },
  },
};

export default app;
