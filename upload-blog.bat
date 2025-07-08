@echo off
chcp 65001 > nul
echo ===== 开始上传博客内容 =====
git add .
git commit -m "更新博客内容: %date% %time%"
git push
echo ===== 博客内容已上传 =====
pause 