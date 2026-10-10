import type { AppConfig } from '../types';
import icon from '../../assets/icons/moonlog.png';

const app: AppConfig = {
  slug: 'moonlog',
  name: { zh: 'MoonLog', en: 'MoonLog' },
  headline: { zh: '每一笔交易，都值得被复盘', en: 'Every trade deserves a review' },
  tagline: {
    zh: 'AI 交易复盘日志。不荐股，只帮你守纪律。',
    en: "An AI trading journal. It won't pick stocks; it keeps you disciplined.",
  },
  summary: {
    zh: 'MoonLog 是交易者的纪律教练。不连接券商，也不推荐股票：你记录计划和每一笔交易，AI 从收益、策略、纪律、心理四个维度复盘，用月相纪律评分告诉你执行得怎么样。',
    en: 'MoonLog is a discipline coach for traders. No broker connection, no stock tips: you log plans and trades, and AI reviews them across returns, strategy, discipline and psychology, scoring your execution with a moon-phase rating.',
  },
  icon,
  appStoreId: '6758563196',
  features: [
    {
      icon: 'notebook-pen',
      title: { zh: '交易记录', en: 'Trade log' },
      body: {
        zh: '快速记录每一笔买入卖出，支持买入计划与策略标注；交易截图可以直接识别录入。',
        en: 'Log every buy and sell in seconds, with trade plans and strategy notes. Trade screenshots can be recognised and filled in for you.',
      },
    },
    {
      icon: 'brain-circuit',
      title: { zh: 'AI 四维复盘', en: 'Four-angle AI review' },
      body: {
        zh: '从收益、策略、纪律、心理四个维度复盘，指出做得好和需要改的地方。',
        en: 'Reviews across returns, strategy, discipline and psychology, pointing out what went well and what to change.',
      },
    },
    {
      icon: 'moon-star',
      title: { zh: '月相纪律评分', en: 'Moon-phase discipline score' },
      body: {
        zh: '用 7 大核心指标衡量执行力，从新月到满月，一眼看出这段时间守没守住纪律。',
        en: 'Seven core metrics measure execution, from new moon to full moon, so you can see at a glance whether you kept to your rules.',
      },
    },
    {
      icon: 'chart-candlestick',
      title: { zh: '股票与 CME 期货', en: 'Stocks and CME futures' },
      body: {
        zh: '同时支持股票和 CME 期货，持仓周期可以按自己的交易风格自定义。',
        en: 'Works with both stocks and CME futures, with holding periods you can set to match your style.',
      },
    },
  ],
  promises: [
    {
      icon: 'cloud',
      title: { zh: '数据在你自己的 iCloud', en: 'Data lives in your iCloud' },
      body: {
        zh: '交易记录、持仓和复盘只存在你的设备和个人 iCloud 里，我们看不到。',
        en: 'Trades, holdings and reviews stay on your device and in your own iCloud. We cannot see them.',
      },
    },
    {
      icon: 'shield-check',
      title: { zh: '不连券商，不荐股', en: 'No broker, no tips' },
      body: {
        zh: '不需要券商账号授权，也不会给你任何买卖建议。',
        en: 'No broker login required, and no buy or sell recommendations, ever.',
      },
    },
    {
      icon: 'eye-off',
      title: { zh: '无广告，无追踪', en: 'No ads, no tracking' },
      body: {
        zh: '不接入广告 SDK 和第三方追踪，数据永不出售。',
        en: 'No ad SDKs or third-party trackers, and your data is never sold.',
      },
    },
  ],
  contactEmail: 'hongsikunjob@gmail.com',
};

export default app;
