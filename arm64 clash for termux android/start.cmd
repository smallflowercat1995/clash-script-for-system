cls.
@echo off
color 0a
%1 start "" mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
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
@echo 二、或者想要折腾一下，也可以右键点桌面的Google Chrome图标，再点属性，找到chrome.exe文件的路径，然后打开那个目录，把chrome.exe 同目录下的所有子文件夹和文件，一起拷贝到ChromeGo文件夹下的Browser目录里面，然后重新启动ChromeGo的脚本。
@echo 二、是否执行IP更新？IP更新从云端更新IP配置以解决封锁问题！第一次使用务必先更新IP。
@echo 三、按1选择ip1更新，以此类推一共有6个IP，若ip1不好用再按2～6选ip2～ip6更新。
@echo 四、如果更新后都用不了，请自己编辑修改clash.cmd脚本。
@echo 五、或者在当前目录中放置自定义的config.yaml文件，执行 7 也可以。

set choice=
set /p choice=  "1、ip1更新 2、ip2更新 3、ip3更新 4、ip4更新 5、ip5更新 6、ip6更新 7、config.yaml文已经放到目录表面，直接执行:"
IF NOT "%Choice%"=="" SET Choice=%Choice:~0,1%
if /i "%choice%"=="1" goto ip1
if /i "%choice%"=="2" goto ip2
if /i "%choice%"=="3" goto ip3
if /i "%choice%"=="4" goto ip4
if /i "%choice%"=="5" goto ip5
if /i "%choice%"=="6" goto ip6
if /i "%choice%"=="7" goto ip7
if /i "%choice%"=="?" echo.&echo."** what's up? **" &pause >NUL 2>NUL

rem wget --connect-timeout=5 --no-check-certificate 
:ip1
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经1，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip2
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/3/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经2，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip3
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/2/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经3，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip4
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经4，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash


:ip5
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/3/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经5，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash


:ip6
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/2/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.已经6，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash

:ip7
set pmin=1
set pmax=6
set /a pmod=%pmax%-%pmin%+1
set /a pnum=%RANDOM% %% %pmod%+%pmin%
echo config%pnum%.yaml
copy /Y config%pn%.yaml ".config\clash\config.yaml"
echo.&echo.已经7，请按回车键或空格键启动程序！&pause >NUL 2>NUL
goto startclash


:startclash
start "" "%~dp0clash-windows-386.exe"  -d .config\clash\ >nul 2>&1

echo 等待软件启动，请稍候...
IF EXIST %~dp0Browser\chrome.exe (
    start %~dp0Browser\chrome.exe --user-data-dir=%~dp0chrome-user-data --proxy-server=http://127.0.0.1:7890 https://www.duckduckgo.com/?q=GoClashB
) ELSE (
	%SystemRoot%\System32\reg.exe query "HKLM\Software\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" >nul 2>&1
	IF  not errorlevel 1 (
    start chrome.exe --user-data-dir=%~dp0Browser\chrome-user-data  --proxy-server=http://127.0.0.1:7890 https://www.duckduckgo.com/?q=GoClashB
	) else (
		echo Chrome浏览器不存在或没有正确安装，请尝试重新安装Chrome浏览器
	)
)
rem echo.&echo.已经执行，请按回车键或空格键关闭此窗口！&pause >NUL 2>NUL