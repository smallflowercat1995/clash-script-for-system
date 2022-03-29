#!/usr/bin/env bash
clear
kill -9 `ps -ef | grep -v grep | grep clash-darwin-amd64-v1.8.0 | awk '{print $2}'`
kill -9 `ps -ef | grep -v grep | grep chrom* | awk '{print $2}'`
# rm -rfv ".config/clash"
rm -rfv "*.log"
echo "开始吧小老弟！"
echo "当前目录`pwd`"
mkdir -p ".config/clash"
cp -r Country.mmdb ".config/clash/"

startclash(){
echo 等待软件启动，请稍候...
nohup ./clash-darwin-amd64-v1.8.0 -d .config/clash/ > clash-darwin-amd64-v1.8.0.log 2>&1 &
if [ -e /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome ];then 
echo "true"
nohup /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=chromium-user-data --proxy-server=http://127.0.0.1:7890 https://www.duckduckgo.com/?q=GoClashB > chromium.log 2>&1 &
else 
echo Chrome浏览器不存在或没有正确安装，请尝试重新安装Chrome浏览器
fi
tail -200f clash-darwin-amd64-v1.8.0.log
}

echo 说明
echo 一、此脚本支持chromium浏览器，所以需要安装chromium浏览器，如果有兴趣可以自己DIY别的浏览器。
echo 二、是否执行IP更新？IP更新从云端更新IP配置以解决封锁问题！第一次使用务必先更新IP。
echo 三、按1选择ip1更新，以此类推一共有6个IP，若ip1不好用再按2～6选ip2～ip6更新。
echo 四、如果更新后都用不了，请自己编辑修改clash.cmd脚本。
echo 五、或者在当前目录中放置自定义的config.yaml文件，执行 7 也可以。
echo "1、ip1更新 2、ip2更新 3、ip3更新 4、ip4更新 5、ip5更新 6、ip6更新 7、config.yaml文已经放到目录表面，直接执行:"
read choice 
if [ $choice -eq 1 ];then
# wget --connect-timeout=15 --no-check-certificate "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -O ".config/clash/config.yaml"
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
