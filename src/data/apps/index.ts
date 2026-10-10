import vitae from './vitae';
import cutepet from './cutepet';
import moonlog from './moonlog';
import waystub from './waystub';
import type { AppConfig } from '../types';

export const apps: AppConfig[] = [vitae, cutepet, moonlog, waystub];
export const appBySlug = (slug: string) => apps.find((a) => a.slug === slug);
export const appStoreUrl = (app: AppConfig) => `https://apps.apple.com/app/id${app.appStoreId}`;
