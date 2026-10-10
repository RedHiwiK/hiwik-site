import { t, href, type Lang } from '../i18n';
import type { AppConfig } from '../data/types';
import { docPaths } from './docs';

export type SectionKey = 'guide' | 'changelog' | 'support' | 'privacy' | 'terms';

const order: SectionKey[] = ['guide', 'changelog', 'support', 'privacy', 'terms'];
const icons: Record<SectionKey, string> = {
  guide: 'book-open',
  changelog: 'newspaper',
  support: 'life-buoy',
  privacy: 'shield-check',
  terms: 'scroll-text',
};

export interface Section {
  key: SectionKey;
  url: string;
  label: string;
  desc: string;
  icon: string;
}

/** 某 App 实际存在的栏目（以中文文档为准），顺序固定 */
export async function appSections(app: AppConfig, lang: Lang): Promise<Section[]> {
  const s = t(lang);
  const paths = await docPaths(app.slug);
  const has = (k: SectionKey) => (k === 'guide' ? paths.some((p) => p.startsWith('guide/')) : paths.includes(k));
  return order.filter(has).map((key) => ({
    key,
    url: href(lang, `/${app.slug}/${key}`),
    label: s.nav[key],
    desc: s.navDesc[key],
    icon: icons[key],
  }));
}
