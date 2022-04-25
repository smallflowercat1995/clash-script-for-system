cls.
@echo off
color 0a
rem %1 start "" mshta vbscript:CreateObject("Shell.Application").ShellExecute("cmd.exe","/c %~s0 ::","","runas",1)(window.close)&&exit
CD /D "%~dp0"
taskkill /f /t /im "clash-windows*"  >NUL 2>NUL
taskkill /f /t /im "chrome*"  >NUL 2>NUL
