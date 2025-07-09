@echo off
chcp 65001 > nul
set /p title=请输入文章标题: 
set /p description=请输入文章描述: 
set /p filename=请输入文件名(不含后缀): 
set /p useBgImage=是否添加背景图片? (y/n): 

:: 使用PowerShell获取标准格式的日期 (YYYY-MM-DD)
for /f "delims=" %%a in ('powershell -Command "Get-Date -Format 'yyyy-MM-dd'"') do set today=%%a

echo --->> src/content/blog/%filename%.mdx
echo title: '%title%'>> src/content/blog/%filename%.mdx
echo description: '%description%'>> src/content/blog/%filename%.mdx
echo pubDate: %today%>> src/content/blog/%filename%.mdx
echo updatedDate: %today%>> src/content/blog/%filename%.mdx
echo heroImage: '/assets/images/6.jpg'>> src/content/blog/%filename%.mdx

:: 如果用户选择添加背景图片，则提示选择图片
if /i "%useBgImage%"=="y" (
    echo 可用背景图片:
    echo [1] /assets/images/1.jpg
    echo [2] /assets/images/2.jpg
    echo [3] /assets/images/3.jpg
    echo [4] /assets/images/4.jpg
    echo [5] /assets/images/5.jpg
    echo [6] /assets/images/6.jpg
    echo [7] /assets/images/7.jpg
    echo [8] /assets/images/8.jpg
    set /p bgImageChoice=请选择背景图片编号: 
    echo backgroundImage: '/assets/images/%bgImageChoice%.jpg'>> src/content/blog/%filename%.mdx
)

echo tags: ['Markdown', '指南', '教程']>> src/content/blog/%filename%.mdx
echo category: '技术'>> src/content/blog/%filename%.mdx
echo draft: false>> src/content/blog/%filename%.mdx
echo --->> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx

:: 添加资源博客模板
echo # %title%>> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx
echo ## 1. 第一部分>> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx
echo ^<div class="resource-item"^>>> src/content/blog/%filename%.mdx
echo   ^<a href="https://example.com" class="resource-link"^>示例链接^</a^>>> src/content/blog/%filename%.mdx
echo   ^<div class="resource-url"^>https://example.com^</div^>>> src/content/blog/%filename%.mdx
echo   ^<div class="resource-desc"^>这是一个示例描述，请替换为实际内容^</div^>>> src/content/blog/%filename%.mdx
echo ^</div^>>> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx
echo ## 2. 第二部分>> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx
echo ^<div class="resource-item"^>>> src/content/blog/%filename%.mdx
echo   ^<a href="https://example2.com" class="resource-link"^>另一个示例^</a^>>> src/content/blog/%filename%.mdx
echo   ^<div class="resource-url"^>https://example2.com^</div^>>> src/content/blog/%filename%.mdx
echo   ^<div class="resource-desc"^>这是第二个示例描述^</div^>>> src/content/blog/%filename%.mdx
echo ^</div^>>> src/content/blog/%filename%.mdx
echo.>> src/content/blog/%filename%.mdx

echo 已创建资源博客模板：src/content/blog/%filename%.mdx
if /i "%useBgImage%"=="y" echo 已添加背景图片: /assets/images/%bgImageChoice%.jpg
echo 当前日期: %today%
echo 现在您可以编辑这个文件开始写博客了！
pause 