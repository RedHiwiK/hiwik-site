import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';
import type { AppSlug } from '../data/types';

export type DocName = 'privacy' | 'terms' | 'support' | 'changelog';
export const docNames: DocName[] = ['support', 'changelog', 'privacy', 'terms'];

export type Doc = CollectionEntry<'docs'> & { app: AppSlug; lang: Lang; path: string };

let cache: Doc[] | undefined;
async function all(): Promise<Doc[]> {
  cache ??= (await getCollection('docs')).map((e) => {
    const [app, lang, ...rest] = e.id.split('/');
    return Object.assign(e, { app: app as AppSlug, lang: lang as Lang, path: rest.join('/') });
  });
  return cache;
}

/** 取某页文档；英文缺失时回落到中文，fallback 标记用于提示 */
export async function getDoc(app: AppSlug, lang: Lang, path: string) {
  const docs = await all();
  const own = docs.find((d) => d.app === app && d.lang === lang && d.path === path);
  if (own) return { doc: own, fallback: false };
  const zh = docs.find((d) => d.app === app && d.lang === 'zh' && d.path === path);
  return zh ? { doc: zh, fallback: lang !== 'zh' } : undefined;
}

/** 以中文版为准列出某 App 有哪些页面 */
export async function docPaths(app: AppSlug) {
  return (await all()).filter((d) => d.app === app && d.lang === 'zh').map((d) => d.path);
}

export async function guideSlugs(app: AppSlug) {
  return (await docPaths(app)).filter((p) => p.startsWith('guide/')).map((p) => p.slice('guide/'.length));
}

export async function guidesFor(app: AppSlug, lang: Lang) {
  const slugs = await guideSlugs(app);
  const list = await Promise.all(slugs.map(async (slug) => ({ slug, ...(await getDoc(app, lang, `guide/${slug}`))! })));
  return list.sort((a, b) => a.doc.data.order - b.doc.data.order);
}
