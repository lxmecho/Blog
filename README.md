# Fuwari 博客主题

一个基于 Astro 和 Tailwind CSS 构建的简洁、现代的个人博客主题，灵感来源于 Fuwari 设计风格。

![Fuwari Blog Theme](./public/preview.jpg)

## ✨ 特性

- 🌓 **明暗模式切换** - 支持浅色和深色主题
- 🎨 **自定义主题颜色** - 可自定义的调色板
- 📱 **响应式设计** - 适配各种屏幕尺寸
- ✍️ **MDX 支持** - 在 Markdown 中使用 React 组件
- 🔍 **搜索功能** - 轻松查找文章内容
- 🏷️ **标签和分类** - 组织和管理文章
- 📊 **阅读时间估计** - 自动计算阅读所需时间
- 🚀 **高性能** - 使用 Astro 构建，零 JavaScript 作为默认
- 📦 **简单部署** - 部署到 GitHub Pages、Netlify、Vercel 等

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/yourusername/fuwari-blog.git my-blog
cd my-blog
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

现在，您可以在浏览器中访问 `http://localhost:4321` 来查看您的博客。

## 📝 创建内容

所有博客文章都存储在 `src/content/blog/` 目录中。您可以创建新的 `.mdx` 文件来添加文章。每篇文章需要包含 frontmatter 元数据：

```markdown
---
title: '文章标题'
description: '文章描述'
pubDate: '2024-04-01'
heroImage: '/blog/assets/images/article-cover.jpg'
tags: ['标签1', '标签2']
category: '分类'
---

文章内容...
```

## ⚙️ 个性化配置

### 配置文件

编辑 `src/config/site.ts` 文件来自定义博客的各种设置：

```typescript
export const siteConfig: SiteConfig = {
  title: 'Fuwari Blog',
  description: '一个美观、现代的个人博客',
  language: 'zh-CN',
  
  author: {
    name: '您的名字',
    avatar: '/blog/assets/images/avatar.jpg',
    bio: '您的简介',
  },
  
  // 更多配置...
};
```

### 主题配置

编辑 `tailwind.config.mjs` 文件来自定义主题颜色、字体和其他 UI 组件。

## 🚢 部署

### 部署到 GitHub Pages

1. 创建一个新的 GitHub 仓库
2. 将您的项目推送到该仓库
3. 启用 GitHub Pages 功能
4. GitHub Actions 会自动构建和部署您的博客

## 注意事项

### 中文编码

如果遇到中文显示乱码问题，请确保：

1. 所有源文件使用UTF-8编码保存
2. 项目克隆后，不要更改文件编码
3. 如果使用Windows，建议使用VS Code并设置默认编码为UTF-8

### 图片资源

所有图片应放在`public/assets/images/`目录下，然后在配置和内容中引用为`/blog/assets/images/图片名`。

## 📜 许可证

MIT 