/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // 启用暗色模式
  theme: {
    extend: {
      colors: {
        // 默认主题颜色 - 蓝白主题
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // 自定义扩展颜色
        'background': {
          light: '#ffffff',
          dark: '#0f172a',
        },
        'card': {
          light: '#ffffff',
          dark: '#1e293b',
        },
        'text': {
          light: '#0f172a',
          dark: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text.light'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.text.light'),
            },
            'code': {
              backgroundColor: theme('colors.gray.100'),
              borderRadius: '0.25rem',
              paddingLeft: '0.25rem',
              paddingRight: '0.25rem',
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
            },
            'pre': {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.gray.200'),
            }
          },
        },
        dark: {
          css: {
            color: theme('colors.text.dark'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.text.dark'),
            },
            'code': {
              backgroundColor: theme('colors.gray.800'),
            },
            'pre': {
              backgroundColor: theme('colors.gray.900'),
            }
          },
        },
      }),
    },
  },
  plugins: [],
}; 