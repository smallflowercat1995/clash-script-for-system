cls.
@echo off
color 0a
rem %1 start "" mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
CD /D "%~dp0"
taskkill /f /t /im "clash-windows*"  >NUL 2>NUL
taskkill /f /t /im "chrome*"  >NUL 2>NUL
@echo "开始吧小老弟！"
@echo "当前目录%~dp0"

rem rd /S /Q ".config\clash"
rem mkdir ".config\clash"
copy /Y Country.mmdb ".config\clash\"

@echo 说明
@echo 一、此脚本支持Chrome浏览器，所以需要安装Chrome浏览器，如果有兴趣可以自己DIY别的浏览器。
@echo 二、使用时请将防火墙关闭，并允许专用网络和公用网络
@echo 三、也可以将谷歌浏览器程序放到 Google\Chrome\Application\ 路径中，这样即使没有安装 chrome 也可以直接使用，自行意会吧

set choice=
set /p choice=  "1、ip1更新 2、ip2更新 3、ip3更新 4、ip4更新 5、ip5更新 6、ip6更新 7、ip7更新 8、随机执行:"
IF NOT "%Choice%"=="" SET Choice=%Choice:~0,1%
if /i "%choice%"=="1" goto ip1
if /i "%choice%"=="2" goto ip2
if /i "%choice%"=="3" goto ip3
if /i "%choice%"=="4" goto ip4
if /i "%choice%"=="5" goto ip5
if /i "%choice%"=="6" goto ip6
if /i "%choice%"=="7" goto ip7
if /i "%choice%"=="8" goto ip8
if /i "%choice%"=="?" echo.&echo."** what's up? **" &pause >NUL 2>NUL

rem wget --connect-timeout=5 --no-check-certificate 
:ip1
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经1，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip2
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/3/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经2，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip3
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/2/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经3，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip4
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经4，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash


:ip5
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/3/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经5，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash


:ip6
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/2/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经6，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip7
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/jsvpn/jsproxy@dev/baitai/20200329/1302338.md" -o ".config\clash\config.yaml"
echo.&echo.已经7，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip8
set pmin=1
set pmax=7
set /a pmod=%pmax%-%pmin%
set /a pnum=%RANDOM% %% %pmod%+%pmin%
echo config%pnum%.yaml
copy /Y config%pnum%.yaml ".config\clash\config.yaml"
echo.&echo.已经8，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash


:startclash
start "" "%~dp0clash-windows-amd64-v3.exe"  -d .config\clash\ >nul 2>&1

echo 等待软件启动，请稍候...
IF EXIST "%~dp0Google\Chrome\Application\chrome.exe" (
    start Google\Chrome\Application\chrome.exe --user-data-dir=..\..\..\chrome-user-data --proxy-server="http://127.0.0.1:7890" "https://www.duckduckgo.com/?q=GoClashB"
) ELSE (
	echo Chrome浏览器不在 Google\Chrome\Application\ 中，检查系统中是否安装Chrome
	%SystemRoot%\System32\reg.exe query "HKLM\Software\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" >nul 2>&1
	IF  not errorlevel 1 (
    start chrome.exe --user-data-dir=..\..\..\chrome-user-data  --proxy-server="http://127.0.0.1:7890" "https://www.duckduckgo.com/?q=GoClashB"
	) else (
		echo Chrome浏览器不存在或没有正确安装，请尝试重新安装Chrome浏览器
	)
)
rem echo.&echo.已经执行，请按回车键或空格键关闭此窗口！&pause >NUL 2>NUL