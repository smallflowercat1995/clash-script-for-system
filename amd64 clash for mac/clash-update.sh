#!/usr/bin/env bash
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7891
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/config.yaml" -o "config1.yaml"
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/3/config.yaml" -o "config2.yaml"
curl -H "Connection: keep-alive" -L -k "https://gitlab.com/free9999/ipupdate/-/raw/master/clash/2/config.yaml" -o "config3.yaml"
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/config.yaml" -o "config4.yaml"
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/3/config.yaml" -o "config5.yaml"
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/Alvin9999/pac2@latest/clash/2/config.yaml" -o "config6.yaml"
curl -H "Connection: keep-alive" -L -k "https://cdn.jsdelivr.net/gh/jsvpn/jsproxy@dev/baitai/20200329/1302338.md" -o "config7.yaml"
unset https_proxy http_proxy all_proxy
