#!/usr/bin/env bash
IFS_BAK=$IFS
IFS=$'\n'
for i in `find . -iname "clash*.sh"`; do
echo $i
sed -i '' 's;\r;;g' $i
sed -i '' 's; 7、随机执行; 7、ip7更新 8、随机执行;g' $i
sed -i '' 's;(1 2 3 4 5 6);(1 2 3 4 5 6 7);g' $i
done
IFS=$IFS_BAK
