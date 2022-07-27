"use strict";var e=e||navigator.userAgent.includes("Chrome")?chrome:browser,t=(t,a)=>e.runtime.sendMessage({method:t+"@ui",data:a}),a=(t,a)=>e.runtime.onMessage.addListener((function(e,n){if(e.method===t+"@ui"&&(!n.url||-1!==n.url.indexOf("background")))return a(e.data),!0}));function n(e){if(0===e)return"0 Byte";let t=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,t)).toFixed(t?1:0)+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}var i,r,d=function(e,t,a,n){let i=function(){};return t.addEventListener("click",(function(){e.dataset.visible=!1,i()})),a.addEventListener("click",(function(){e.dataset.visible=!1})),(t,a)=>{n.textContent=t,e.dataset.visible=!0,i=a||i}}(document.getElementById("confirm"),document.querySelector("#confirm input"),document.querySelector("#confirm input:last-child"),document.querySelector("#confirm span")),s=(i=document.getElementById("notify"),r=document.querySelector("#notify span:nth-child(2)"),document.querySelector("#notify input").addEventListener("click",(()=>i.dataset.visible=!1)),function(e){r.textContent=e,i.dataset.visible=!0});a("notify",s);var o,c,l,u=function(a){var i=document.querySelector('.item[data-id="'+a+'"]');if(!i)return null;var r=i.querySelector("[data-type=overal]>div"),d=i.querySelector("[data-type=percent]"),s=i.querySelector("[data-type=size]"),o=i.querySelector("[data-type=speed]"),c=i.querySelector("[data-type=time]"),l=i.querySelector("[data-type=name]"),u=i.querySelector("[data-type=threads]"),m=i.querySelector("[data-type=retries]"),y=i.querySelector('[data-type="cachedone"]'),f=i.querySelector('[data-type="incache"]'),p=i.querySelector('[data-type="temporay-pause"]'),h=document.querySelector('.ctl-area[data-id="'+a+'"]'),v=h.querySelector("[data-ctlcmd=flushfile]"),g=h.querySelector("[data-ctlcmd=save2gdrive]"),S=h.querySelector("[data-ctltype=autosave]"),b=h.querySelector("[data-ctltype=directlySave]");b&&(function(e,t){if(typeof e+typeof t!="stringstring")return!1;for(var a=e.split("."),n=t.split("."),i=0,r=Math.max(a.length,n.length);i<r;i++){if(a[i]&&!n[i]&&parseInt(a[i])>0||parseInt(a[i])>parseInt(n[i]))return 1;if(n[i]&&!a[i]&&parseInt(n[i])>0||parseInt(a[i])<parseInt(n[i]))return-1}return 0}(e.runtime.getManifest().version,"2.3.7")&&(b.parentElement.style.display="inline",b.addEventListener("click",(function(){b.checked&&t("cmd",{cmd:"setDirectlySave"})}))));if(S){var k={};localStorage.getItem("cococutDlSettings")&&(k=JSON.parse(localStorage.getItem("cococutDlSettings"))),S&&(S.checked=k.setAutoSave),S.addEventListener("click",(function(){k.setAutoSave=S.checked,localStorage.setItem("cococutDlSettings",JSON.stringify(k))}))}var q=h.querySelector("[data-ctltype=filesaved]");return{set percent(e){e=Math.min(100,Math.abs(e)||0),r.style.width=e+"%",d.textContent=e.toFixed(1)+"%"},set size(e){s.textContent=n(e)},get name(){return l.textContent},set name(e){l.textContent=e||l.textContent},set mime(e){i.dataset.mime=e.split("/")[0]},set threads(e){u.textContent=e},set retries(e){m.textContent=e},set speed(e){o.textContent=n(e)+"/s"},set time(e){c.textContent=e},partial:function(e,t,a,n){let r=i.querySelector("[data-type=partial]"),d=r.querySelector('div[data-id="'+e+'"]');d||(d=document.createElement("div"),r.appendChild(d),d.dataset.id=e),d.style.left=t+"%",d.style.width=a?a+"%":"2px",d.style.backgroundColor=n},clear:function(){i.querySelector("[data-type=partial]").innerHTML=""},set status(e){i.dataset.type=e},get chunkable(){return i.dataset.chunkable},set chunkable(e){i.dataset.chunkable=e},showFlushfileBtn:function(){v.style.display="inline",y.style.display="inline",g&&(g.style.display="inline"),f.style.display="none",S&&(S.parentElement.style.display="block")},get autoSaveCheck(){return S},showFilesaved:function(){q.style.display="block"},showErr:function(e){q.innerHTML=e,q.style.display="block",q.style.color="red"},get temporayPause(){return p},get inCache(){return f}}},m=(o=document.getElementById("loader"),c=document.querySelector("#loader iframe"),l=function(){"true"===o.dataset.visible&&(o.dataset.visible=!1,c.src="about:blank")},o.addEventListener("click",(function(e){e.target===this&&l()})),a("hide",l,!1),window.top.document.addEventListener("backbutton",(e=>{e.preventDefault(),l()}),!1),document.addEventListener("keyup",(function(e){27===e.keyCode&&l()}),!1),a("info",(function(e){o.dataset.visible=!0,c.src="https://cococut.net/dlm/info/index.html?id="+e.id})),a("modify",(function(e){o.dataset.visible=!0,c.src="https://cococut.net/dlm/modify/index.html?id="+e.id})),void a("job",(e=>m.add(e))));function y(e){let t=document.querySelector('.item[data-id="-1"]').cloneNode(!0),a=document.querySelector(".item");t.dataset.id=e,document.getElementById("dlmList").insertBefore(t,a);let n=document.querySelector('.ctl-area[data-id="-1"]').cloneNode(!0);return n.dataset.id=e,document.getElementById("dlmList").insertBefore(n,t.nextSibling),u(e)}function f(e){var t=document.querySelector('.item[data-id="'+e+'"]');t&&t.parentNode.removeChild(t);let a=document.querySelector('.ctl-area[data-id="'+e+'"]');a&&a.parentNode.removeChild(a)}a("remove",f),a("add",(function(e){let t=u(e.id);if(!t){t=y(e.id),t.percent=e.percent||0,t.size=e.size,t.threads=e.threads,t.name=e.name,t.mime=e.mime,t.status=e.status,t.speed=e.speed,t.retries=e.retries,t.chunkable=e.chunkable;for(let a in e.stats){let n=e.stats[a];t.partial(a,100*n.start,100*n.width,a)}}"done"===e.status&&t.showFlushfileBtn()})),a("new",(e=>{y(e.id)})),a("percent",(function(e){let t=u(e.id);t&&(t.percent=e.percent)})),a("speed",(function(e){let t=u(e.id);t&&(t.speed=e.speed,t.time=function(e){if(isNaN(e)||!isFinite(e))return"--:--:--:--";let t=e,a=("00"+parseInt(t%60)).substr(-2);t/=60;let n=("00"+parseInt(t%60)).substr(-2);t/=60;let i=("00"+parseInt(t%24)).substr(-2);return t/=24,[("00"+parseInt(t)).substr(-2),i,n,a].join(":")}(e.time))})),a("name",(function(e){let t=u(e.id);t&&(t.name=e.name)})),a("mime",(function(e){let t=u(e.id);t&&(t.mime=e.mime)})),a("size",(function(e){let t=u(e.id);t&&(t.size=e.size)})),a("chunkable",(function(e){let t=u(e.id);t&&(t.chunkable=e.chunkable)})),a("status",(function(e){let a=u(e.id);if(a)switch(a.status=e.status,e.status){case"done":a.clear(),a.showFlushfileBtn(),a.autoSaveCheck&&a.autoSaveCheck.checked&&t("cmd",{cmd:"flushfile",id:e.id});break;case"error":a.clear();break;case"pause":e.extraStatus["temporary-pause"]&&(a.temporayPause.style.display="inline",a.inCache.style.display="none");break;case"download":a.temporayPause.style.display="none",a.inCache.style.display="inline"}})),a("count",(function(e){let t=u(e.id);t&&(t.threads=e.count)})),a("retries",(function(e){let t=u(e.id);t&&(t.retries=e.retries)})),a("progress",(function(e){let t=u(e.id);if(t){let a=e.stat;t.partial(a.id,100*a.start,100*a.width,a.id)}})),t("init"),a("save2driveData",(function(e){fetch(e.fileDataURL).then((e=>e.arrayBuffer())).then((e=>{window.postMessage({type:"webResVideoFile",videoFile:e},location.href,[e])}))})),a("willDelFile",(function(e){let t=u(e.id);t&&t.showFilesaved()})),a("bgError",(function(e){let t=u(e.id);t&&t.showErr(e.errMsg)})),document.addEventListener("click",(function(e){let a=e.target;a.dataset.cmd?[].filter.call(document.querySelectorAll(".item"),(e=>e.contains(a))).forEach((function(e){if("pause"===a.dataset.cmd){let a="download"===e.dataset.type?"pause":"resume";"pause"===a&&"false"===e.dataset.chunkable?d("Download is not resumable. Pausing will result in termination. Proceed?",(()=>t("cmd",{id:e.dataset.id,cmd:a}))):t("cmd",{id:e.dataset.id,cmd:a})}else"trash"===a.dataset.cmd?(t("cmd",{id:e.dataset.id,cmd:a.dataset.cmd}),f(e.dataset.id)):t("cmd",{id:e.dataset.id,cmd:a.dataset.cmd})})):a.dataset.ctlcmd&&[].filter.call(document.querySelectorAll(".ctl-area"),(e=>e.contains(a))).forEach((function(e){t("cmd",{id:e.dataset.id,cmd:a.dataset.ctlcmd})}))})),a("confirm",(e=>{d(e.msg,(()=>e.cmd&&t(e.cmd)))})),e=e||navigator.userAgent.includes("Chrome")?chrome:browser;var p=(t,a)=>e.runtime.sendMessage({method:t+"@ad",data:a}),h=(t,a)=>e.runtime.sendMessage({method:t+"@myAd",data:a}),v=(t,a)=>e.runtime.onMessage.addListener((function(e,n){if(e.method===t+"@myAd"&&(!n.url||-1!==n.url.indexOf("background")))return a(e.data),!0})),g=Math.random().toString(36).substring(7);v("download",(e=>{return t=e.targetUrl,a=e.threads,n=e.dlmPageId,void(g===n&&p("download",{url:t,timeout:30,threads:a}));var t,a,n})),h("newDlMContentOk",g);