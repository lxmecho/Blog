import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  // 设置为你的GitHub Pages基本路径，例如 '/blog'
  base: '/Blog',
  integrations: [
    mdx({
      // 配置MDX
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append' }],
        [rehypePrettyCode, { 
          theme: 'github-dark',
          onVisitLine(node) {
            // 防止空行的崩溃
            if (node.children.length === 0) {
              node.children = [{type: 'text', value: ' '}];
            }
          },
        }],
      ],
    }),
    react(),
    tailwind(),
  ],
  // 内容集合
  content: {
    collections: [
      {
        name: 'blog',
        directory: 'src/content/blog',
      },
    ],
  },
}); 