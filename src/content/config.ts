import { defineCollection, z } from 'astro:content';

// 博客文章的集合schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    author: z.string().default('山鬼'),
  }),
});

// 导出所有集合配置
export const collections = {
  'blog': blogCollection,
}; 