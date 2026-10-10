import type { ImageMetadata } from 'astro';
import type { L } from '../i18n';

export type AppSlug = 'vitae' | 'cutepet' | 'moonlog' | 'waystub';

export interface AppConfig {
  slug: AppSlug;
  name: L;
  /** 一句话卖点，用作 App 首页大标题 */
  headline: L;
  /** 卡片和 meta description 用的短描述 */
  tagline: L;
  /** 首页大标题下的介绍段落 */
  summary: L;
  icon: ImageMetadata;
  /** App Store 上的 App ID；未上架时设 comingSoon */
  appStoreId: string;
  comingSoon?: boolean;
  /** icon 为 lucide 图标名（kebab-case），见 https://lucide.dev/icons */
  features: { icon: string; title: L; body: L }[];
  /** 数据与隐私承诺，展示在首页 */
  promises?: { icon: string; title: L; body: L }[];
  /** 使用指南的分组，顺序即展示顺序；guide 文档 frontmatter 的 group 对应 key */
  guideGroups?: { key: string; name: L }[];
  contactEmail: string;
}
