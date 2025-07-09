# 我的个人博客搭建历程

## 项目简介

基于Astro框架和Tailwind CSS构建的个人博客，使用了Fuwari主题风格。博客部署在GitHub Pages上，并绑定了自定义域名。

![博客预览](./public/preview.jpg)

## 搭建过程

### 1. 技术选型

- **Astro框架**：轻量级、高性能的静态站点生成器
- **Tailwind CSS**：灵活的原子化CSS框架
- **MDX**：增强版Markdown，支持在内容中使用React组件
- **GitHub Pages**：免费、可靠的静态网站托管服务

### 2. 开发阶段

开发过程中经历了以下几个主要步骤：
- 安装Astro并配置基本项目结构
- 定制Fuwari主题样式和组件
- 实现明暗模式切换功能
- 添加文章内容管理系统
- 优化页面性能和响应式设计

### 3. 部署与域名配置

1. 将代码推送到GitHub仓库
2. 配置GitHub Pages服务
3. 购买域名121120.xyz
4. 设置DNS记录，将域名指向GitHub Pages服务器
5. 配置HTTPS证书


## 博客特性

- 🌓 明暗模式切换
- 🎨 自定义主题颜色
- 📱 响应式设计
- ✍️ MDX内容支持
- 🔍 文章搜索功能
- 🏷️ 标签和分类系统

## 写作工作流

1. 在`src/content/blog/`目录创建`.mdx`文件
2. 添加文章frontmatter元数据(标题、描述、日期等)
3. 使用Markdown编写文章内容
4. 通过Git提交并推送到GitHub
5. GitHub Actions自动构建并部署更新