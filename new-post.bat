@echo off
chcp 65001 > nul
set /p title=请输入文章标题: 
set /p description=请输入文章描述: 
set /p filename=请输入文件名(不含后缀): 

echo --->> src/content/blog/%filename%.mdx
echo title: '%title%'>> src/content/blog/%filename%.mdx
echo description: '%description%'>> src/content/blog/%filename%.mdx
echo pubDate: %date:~0,4%-%date:~5,2%-%date:~8,2%>> src/content/blog/%filename%.mdx
echo updatedDate: %date:~0,4%-%date:~5,2%-%date:~8,2%>> src/content/blog/%filename%.mdx
echo heroImage: '/assets/images/6.jpg'>> src/content/blog/%filename%.mdx
echo tags: ['Markdown', '指南', '教程']>> src/content/blog/%filename%.mdx
echo category: '技术'>> src/content/blog/%filename%.mdx
echo draft: false>> src/content/blog/%filename%.mdx
echo --->> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx
echo 在这里开始写文章内容...>> src/content/blog/%filename%.mdx

echo 已创建文章模板：src/content/blog/%filename%.mdx
echo 现在您可以编辑这个文件开始写博客了！
pause 