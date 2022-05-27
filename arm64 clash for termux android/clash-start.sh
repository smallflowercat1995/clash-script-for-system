#!$PREFIX/bin/env bash
clear

killall clash-linux-armv8
killall tail

rm -rfv "*.log"
echo "开始吧小老弟！"
echo "当前目录`pwd`"
mkdir -p ".config/clash"
cp -r -v Country.mmdb ".config/clash/"

startclash(){
echo 等待软件启动，请稍候...
nohup ./clash-linux-armv8 -d .config/clash/ > clash-linux-armv8.log 2>&1 &
echo '正在清理网络环境' && \
        sudo settings delete global http_proxy && \
        sudo settings delete global global_http_proxy_host && \
        sudo settings delete global global_http_proxy_port
sudo settings put global http_proxy 127.0.0.1:7890
nohup am start -a android.intent.action.VIEW -d https://www.google.com > intent.log 2>&1 &
trap "echo '正在终止。。。' && \
        sudo settings delete global http_proxy && \
        sudo settings delete global global_http_proxy_host && \
        sudo settings delete global global_http_proxy_port && \
        trap INT" INT
tail -200f clash-linux-armv8.log
}

echo 说明
echo 一、此脚本支持 android OS 需要配合 termux 使用
echo "1、ip1更新 2、ip2更新 3、ip3更新 4、ip4更新 5、ip5更新 6、ip6更新 7、ip7更新 8、随机执行："
read choice
if [ $choice -eq 1 ];then
# ./wget --connect-timeout=15 --no-check-certificate "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml"-O ".config/clash/config.yaml"
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/3/config.yaml" -o ".config/clash/config.yaml"
echo 已经1启动程序！
startclash
elif [ $choice -eq 2 ];then
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -o ".config/clash/config.yaml"
echo 已经2启动程序！
startclash
elif [ $choice -eq 3 ];then
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/2/config.yaml" -o ".config/clash/config.yaml"
echo 已经3启动程序！
startclash
elif [ $choice -eq 4 ];then
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/3/config.yaml" -o ".config/clash/config.yaml"
echo 已经4启动程序！
startclash
elif [ $choice -eq 5 ];then
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/config.yaml" -o ".config/clash/config.yaml"
echo 已经5启动程序！
startclash
elif [ $choice -eq 6 ];then
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/2/config.yaml" -o ".config/clash/config.yaml"
echo 已经6启动程序！
startclash
elif [ $choice -eq 7 ];then
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/jsvpn/jsproxy@dev/baitai/20200329/1302338.md" -o ".config/clash/config.yaml"
echo 已经7启动程序！
startclash
elif [ $choice -eq 8 ];then
pool=(1 2 3 4 5 6 7)
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
