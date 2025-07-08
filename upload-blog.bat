@echo off
chcp 65001 > nul
title 博客内容上传工具

echo ===== 博客内容上传工具 =====
echo.
echo 正在检查文件变更...
git status

echo.
set /p commit_msg=请输入更新内容: 

if "%commit_msg%"=="" (
    set commit_msg=更新博客内容: %date% %time%
)

echo.
echo 开始上传...
git add .
git commit -m "%commit_msg%"
git push

if %errorlevel% equ 0 (
    echo.
    echo ===== 上传成功! =====
    echo 更新内容: %commit_msg%
) else (
    echo.
    echo ===== 上传失败，请检查错误信息 =====
)

echo.
pause 