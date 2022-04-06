#!/usr/bin/env bash
clear
# kill -9 `ps -ef | grep -v grep | grep clash-linux-amd64-v1.8.0 | awk '{print $2}'`
killall clash-linux-amd64-v1.8.0
# kill -9 `ps -ef | grep -v grep | grep chrom* | awk '{print $2}'`
killall chrome
killall tail
# rm -rfv ".config/clash"
rm -rfv "*.log"
echo "开始吧小老弟！"
echo "当前目录`pwd`"
mkdir -p ".config/clash"
cp -r Country.mmdb ".config/clash/"

startclash(){
echo 等待软件启动，请稍候...
nohup ./clash-linux-amd64-v1.8.0 -d .config/clash/ > clash-linux-amd64-v1.8.0.log 2>&1 &
if [ -e /usr/bin/chrome ];then 
echo "true"
nohup /usr/bin/chrome --user-data-dir=chrome-user-data --proxy-server=http://127.0.0.1:7890 https://www.duckduckgo.com/?q=GoClashB > chrome.log 2>&1 &
elif [ -e /snap/bin/chrome ];then
echo "true"
nohup snap run chrome --user-data-dir=chrome-user-data --proxy-server=http://127.0.0.1:7890 https://www.duckduckgo.com/?q=GoClashB > chrome.log 2>&1 &
else 
echo Chrome浏览器不存在或没有正确安装，请尝试重新安装Chrome浏览器
fi
tail -200f clash-linux-amd64-v1.8.0.log
}

echo 说明
echo 一、此脚本支持chrome浏览器，所以需要安装chrome浏览器，如果有兴趣可以自己DIY别的浏览器。
echo "1、ip1更新 2、ip2更新 3、ip3更新 4、ip4更新 5、ip5更新 6、ip6更新 7、随机执行:"
read choice 
if [ $choice -eq 1 ];then
# ./wget --connect-timeout=15 --no-check-certificate "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -O ".config/clash/config.yaml"
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -o ".config/clash/config.yaml"
echo 已经1启动程序！
startclash
elif [ $choice -eq 2 ];then
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/3/config.yaml" -o ".config/clash/config.yaml"
echo 已经2启动程序！
startclash
elif [ $choice -eq 3 ];then
curl "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/2/config.yaml" -o ".config/clash/config.yaml"
echo 已经3启动程序！
startclash
elif [ $choice -eq 4 ];then
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/config.yaml" -o ".config/clash/config.yaml"
echo 已经4启动程序！
startclash
elif [ $choice -eq 5 ];then
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/3/config.yaml" -o ".config/clash/config.yaml"
echo 已经5启动程序！
startclash
elif [ $choice -eq 6 ];then
curl "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/2/config.yaml" -o ".config/clash/config.yaml"
echo 已经6启动程序！
startclash
elif [ $choice -eq 7 ];then
pool=(1 2 3 4 5 6)
num=${#pool[*]}
pn=${pool[$((RANDOM%num+1))]}
echo $pn
if [ "$pn" = "" ]; then
	cp -r -v config1.yaml ".config/clash/config.yaml"
else
	cp -r -v config$pn.yaml ".config/clash/config.yaml"
fi
echo 已经7启动程序！
startclash
else
echo "what's up?"
fi
