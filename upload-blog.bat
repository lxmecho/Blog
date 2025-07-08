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

echo.
echo 正在推送到远程仓库...
echo 如果长时间无响应，请按Ctrl+C中断，然后重试

set retry_count=0
:push_retry
git push
if %errorlevel% neq 0 (
    set /a retry_count+=1
    if %retry_count% lss 3 (
        echo.
        echo 推送失败，3秒后尝试第%retry_count%次重试...
        timeout /t 3 > nul
        goto push_retry
    ) else (
        echo.
        echo ===== 上传失败，请检查网络连接或尝试以下解决方法: =====
        echo 1. 检查网络连接是否稳定
        echo 2. 可能需要配置代理: git config --global http.proxy http://yourproxy:port
        echo 3. 或者尝试使用SSH连接: git remote set-url origin git@github.com:lxmecho/Blog.git
        echo.
    )
) else (
    echo.
    echo ===== 上传成功! =====
    echo 更新内容: %commit_msg%
)

echo.
pause 