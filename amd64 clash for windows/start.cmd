cls.
@echo off
color 0a
rem %1 start "" mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
CD /D "%~dp0"
taskkill /f /t /im "clash-windows*"  >NUL 2>NUL
taskkill /f /t /im "chrome*"  >NUL 2>NUL
@echo "��ʼ��С�ϵܣ�"
@echo "��ǰĿ¼%~dp0"

rem rd /S /Q ".config\clash"
rem mkdir ".config\clash"
copy /Y Country.mmdb ".config\clash\"

@echo ˵��
@echo һ���˽ű�֧��Chrome�������������Ҫ��װChrome��������������Ȥ�����Լ�DIY����������

set choice=
set /p choice=  "1��ip1���� 2��ip2���� 3��ip3���� 4��ip4���� 5��ip5���� 6��ip6���� 7�����ִ��:"
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
echo.&echo.�Ѿ�1���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash

:ip2
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/3/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.�Ѿ�2���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash

:ip3
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/2/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.�Ѿ�3���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash

:ip4
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.�Ѿ�4���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash


:ip5
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/3/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.�Ѿ�5���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash


:ip6
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/2/config.yaml" -o ".config\clash\config.yaml"
echo.&echo.�Ѿ�6���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash

:ip7
set pmin=1
set pmax=6
set /a pmod=%pmax%-%pmin%
set /a pnum=%RANDOM% %% %pmod%+%pmin%
echo config%pnum%.yaml
copy /Y config%pnum%.yaml ".config\clash\config.yaml"
echo.&echo.�Ѿ�7���밴�س�����ո����������&pause >NUL 2>NUL
goto startclash


:startclash
start "" "%~dp0clash-windows-386.exe"  -d .config\clash\ >nul 2>&1

echo �ȴ�������������Ժ�...
IF EXIST "%~dp0Browser\chrome.exe" (
    start "%~dp0Browser\chrome.exe" --user-data-dir="%~dp0chrome-user-data" --proxy-server="http://127.0.0.1:7890" "https://www.duckduckgo.com/?q=GoClashB"
) ELSE (
	%SystemRoot%\System32\reg.exe query "HKLM\Software\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe" >nul 2>&1
	IF  not errorlevel 1 (
    start chrome.exe --user-data-dir="%~dp0Browser\chrome-user-data"  --proxy-server="http://127.0.0.1:7890" "https://www.duckduckgo.com/?q=GoClashB"
	) else (
		echo Chrome����������ڻ�û����ȷ��װ���볢�����°�װChrome�����
	)
)
rem echo.&echo.�Ѿ�ִ�У��밴�س�����ո���رմ˴��ڣ�&pause >NUL 2>NUL