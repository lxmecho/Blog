export interface SiteConfig {
  // 基础信息
  title: string;
  description: string;
  language: 'zh-CN' | 'en';
  
  // 作者信息
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  
  // 导航链接
  navLinks: {
    label: string;
    href: string;
    external?: boolean;
    icon?: string;
  }[];
  
  // 社交媒体链接
  socialLinks: {
    platform: string;
    href: string;
    icon: string;
  }[];
  
  // 外观和主题
  appearance: {
    defaultTheme: 'light' | 'dark';
    themeColors: {
      name: string;
      primaryColor: string;
      secondaryColor?: string;
    }[];
  };
  
  // 主页背景设置
  heroSettings: {
    backgrounds: string[];
    credits: string[];
  };
  
  // 文章分类
  categories: string[];
}

export const siteConfig: SiteConfig = {
  title: 'lxmの个人博客',
  description: '一片随手记录的空间',
  language: 'zh-CN',
  
  author: {
    name: 'lxm',
    avatar: '/assets/images/4.jpg',
    bio: '世事漫随流水，算来一梦浮生',
  },
  
  navLinks: [
    { label: '首页', href: '/' },
    { label: '归档', href: '/archive' },
    { label: '关于我', href: '/about' },
    { 
      label: 'GitHub', 
      href: 'https://github.com/lxmecho', 
      external: true,
      icon: 'github'
    },
  ],
  
  socialLinks: [
    { 
      platform: 'GitHub', 
      href: 'https://github.com/lxmecho', 
      icon: 'github'
    },
    { 
      platform: '微博', 
      href: 'https://weibo.com/yourusername', 
      icon: 'weibo'
    },
    { 
      platform: '哔哩哔哩', 
      href: 'https://space.bilibili.com/3461562350176410', 
      icon: 'bilibili'
    },
    { 
      platform: '网易云音乐', 
      href: 'https://music.163.com/#/user/home?id=1530445568', 
      icon: 'netease-music'
    },
  ],
  
  appearance: {
    defaultTheme: 'light',
    themeColors: [
      { name: '天空蓝', primaryColor: '#0ea5e9' },
      { name: '落日橙', primaryColor: '#f59e0b' },
      { name: '翠绿色', primaryColor: '#10b981' },
      { name: '梦幻紫', primaryColor: '#8b5cf6' },
    ],
  },
  
  heroSettings: {
    backgrounds: [
      '/assets/images/1.jpg',
      '/assets/images/2.jpg',
      '/assets/images/3.jpg'
    ],
    credits: []
  },
  
  categories: ['编程技术', '生活随笔', '摄影作品', '读书笔记', '旅行见闻'],
}; 