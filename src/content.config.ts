import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// id 形如 vitae/zh/privacy、vitae/en/guide/import
const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    /** 生效 / 更新日期，原样展示 */
    updated: z.string().optional(),
    /** 仅使用指南：所属分组与组内顺序 */
    group: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { docs };
