var _=(t,e,r,n)=>{let s=t[e.name];if(!s){let a=`invalid name: ${e.name}`;n({ok:!1,data:a});return}s(r,e.args).then(a=>n({ok:!0,data:a}),a=>n({ok:!1,data:String(a)}))};var ae={get:t=>new Promise((e,r)=>{chrome.storage.local.get(t,n=>{let s=chrome.runtime.lastError;s?r(s):e(n)})}),set:t=>new Promise((e,r)=>{chrome.storage.local.set(t,()=>{let n=chrome.runtime.lastError;n?r(n):e()})})},oe={sendMessage:t=>new Promise((e,r)=>{chrome.runtime.sendMessage(t,n=>{let s=chrome.runtime.lastError;s?r(s):e(n)})})},ie={query:t=>new Promise(e=>{chrome.tabs.query(t,r=>{e(r)})}),sendMessage:(t,e)=>new Promise((r,n)=>{chrome.tabs.sendMessage(t,e,s=>{let a=chrome.runtime.lastError;a?n(a):r(s)})})},le={storage:ae,runtime:oe,tabs:ie},m=le;var L=t=>{let e=0;for(let r=0;r<t.length;r++)e=Math.imul(31,e)+t.charCodeAt(r),e=e|0;return e};var pe=()=>{let t={};return t.promise=new Promise((e,r)=>{t.resolve=e,t.reject=r}),t},x=class{constructor(){this.deferreds=[]}acquire(){let r=this.deferreds[this.deferreds.length-1]?.promise??Promise.resolve();return this.deferreds.push(pe()),r}release(){let e=this.deferreds.shift();return e&&e.resolve(),Promise.resolve()}async apply(e,r,n){await this.acquire();let s;try{s=await Reflect.apply(e,r,n??[])}finally{await this.release()}return s}wrap(e,r){return async(...n)=>await this.apply(e,r,n)}};var O=t=>{let e=0;for(let r=0;r<t.length;r++)e=Math.imul(31,e)+t.charCodeAt(r),e=e|0;return e};function z(t,e){e=e??new WeakMap;let r=typeof t;if(r==="string"||r==="number"||r==="boolean"||t===null)return t;if(r!=="object")throw`invalid type: ${r}`;if(e.has(t))throw"circular reference";if(Array.isArray(t)){e.set(t,!0);let a=t.map(o=>z(o,e));return e.delete(t),[a]}e.set(t,!0);let n=Object.keys(t).sort(),s=n.map(a=>z(t[a],e));return e.delete(t),[s,n]}var ue=async(t,e)=>{let n=await fetch(t,{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},body:e});if(n.status!==200)throw`${n.status} ${n.statusText}`;let s;try{s=await n.json()}catch{throw"invalid JSON text"}return s},ce=t=>{let e=crypto.getRandomValues(new Uint32Array(4));return e[3]=O(JSON.stringify(z([e.slice(0,3),t]))),[...e].map(n=>n.toString(16).padStart(8,"0")).join("")},A=class{constructor(e,r){this.prefix=e,this.session=r}getUrl(e){return`${this.prefix}${e}`}async service(e,r){let n=this.session,s=ce([e,r,n]),a=JSON.stringify({method:e,params:r,session:n,sign:s}),o=this.getUrl("/service"),i=await ue(o,a);if(i.code===0)return i.result;throw i.message}};var k=class{constructor(e,r){this.server=new A(e,r)}async translate(e){return await this.server.service("translate",e)}async zhtools(e){return await this.server.service("zhtools",e)}async jatools(e){return await this.server.service("jatools",e)}async heat(e){return await this.server.service("heat",e)}async check(e){return await this.server.service("check",e)}};var h=class{map;constructor(){this.map=new Map}get(e){return this.map.get(e)}set(e,r){this.map.set(e,r)}backup(){return{entries:Array.from(this.map.entries())}}restore(e){this.map=new Map(e.entries)}};var de=32e3,P=(t,e)=>{let r=JSON.stringify(e),n=L(r),a=new Uint32Array([n])[0].toString(36);return`${t}:${a}`},me=t=>{let e=[],r=0;for(let n of t.entries.reverse()){if(!n[0].startsWith("translate"))continue;let s=r+JSON.stringify(n).length;if(s>=de)break;e.push(n),r=s}return e.reverse(),{entries:e}},b=class{props;client;lock;cache;constructor(e){this.props=e,this.client=new k(...e.client),this.lock=new x,this.cache=new h,this.load()}async load(){let e=await this.props.load();e!==void 0&&this.cache.restore(e.cache)}async save(){let e=this.cache.backup(),r={cache:me(e)};await this.props.save(r)}async translateAtomic(e){let n=P("translate",e),s=this.cache.get(n);return s===void 0&&(s=await this.client.translate(e),this.cache.set(n,s),this.save()),s}async zhtoolsAtomic(e){let n=P("zhtools",e),s=this.cache.get(n);return s===void 0&&(s=await this.client.zhtools(e),this.cache.set(n,s),this.save()),s}async jatoolsAtomic(e){let n=P("jatools",e),s=this.cache.get(n);return s===void 0&&(s=await this.client.jatools(e),this.cache.set(n,s),this.save()),s}async heatAtomic(e){return await this.client.heat(e)}async checkAtomic(e){return await this.client.check(e)}async translate(e){return await this.lock.apply(this.translateAtomic,this,[e])}async zhtools(e){return await this.lock.apply(this.zhtoolsAtomic,this,[e])}async jatools(e){return await this.lock.apply(this.jatoolsAtomic,this,[e])}async heat(e){return await this.lock.apply(this.heatAtomic,this,[e])}async check(e){return await this.lock.apply(this.checkAtomic,this,[e])}};var T=()=>{let t=crypto.getRandomValues(new Uint8Array(16));t[6]=t[6]&15|64,t[8]=t[8]&63|128;let e=Array.from(t,r=>r.toString(16).padStart(2,"0"));return e.splice(4,0,"-"),e.splice(7,0,"-"),e.splice(10,0,"-"),e.splice(13,0,"-"),e.join("")};var v=(t,e)=>{let r=t.type;if(r==="string"||r==="number"||r==="boolean")return typeof e===r;if(r==="null")return e===null;if(r==="array")return Array.isArray(e);if(r==="object")return!(typeof e!="object"||e===null||Array.isArray(e));throw`invalid schema type: ${r}`},q=(t,e)=>{let r=t.type;if(r==="string"||r==="number"||r==="boolean"){t=t,e!==void 0&&t.enum!==void 0&&(t.enum.includes(e)||(e=void 0));let n=!1;if(e!==void 0&&(n=v(t,e)),n||(e=t.default,e!==void 0&&(n=v(t,e))),r==="string")return n?e:"";if(r==="number")return n?e:0;if(r==="boolean")return n?e:!1}if(r==="null")return null;if(r==="array")return[];if(r==="object")return{};throw`invalid schema type: ${r}`},ye=(t,e)=>{let r=t.type;if(r==="string"||r==="number"||r==="boolean")return q(t)===e;if(r==="null")return!0;if(r==="array")return e.length===0;if(r==="object")return Object.keys(e).length===0;throw`invalid schema type: ${r}`};function g(t,e,r){let n=e.type;if(n==="string"||n==="number"||n==="boolean")return q(e,r);if(n==="null")return null;if(n==="array"){if(e=e,e.items===void 0)return[];v(e,r)||(r=[]);let s=e.items,a=[];for(let o of r)a.push(g(t,s,o));return a}if(n==="object"){if(e=e,e.properties===void 0)return{};v(e,r)||(r={});let s=e.properties,a=e.required??[],o={};for(let[i,f]of Object.entries(s)){let S=r[i];if(t==="expand"){let d=g(t,f,S);o[i]=d;continue}if(t==="shrink"){let d=g(t,f,S);ye(f,d)||(o[i]=d);continue}if(t==="inject"){let d=S!==void 0,ne=a.includes(i);if(d||ne){let se=g(t,f,S);o[i]=se}continue}throw`invalid mode: ${t}`}return o}throw`invalid schema type: ${n}`}var N=(t,e)=>g("inject",t,e);function R(t,e){e=e??new WeakMap;let r=typeof t;if(r==="string"||r==="number"||r==="boolean"||r==="function"||t===null)return t;if(r!=="object")throw`invalid type: ${r}`;if(e.has(t))throw"circular reference";if(Array.isArray(t)){e.set(t,!0);let s=t.map(a=>R(a,e));return e.delete(t),s}e.set(t,!0);let n={};for(let[s,a]of Object.entries(t))n[s]=R(a,e);return e.delete(t),n}function M(t){let e=typeof t;if(e==="string"||e==="number"||e==="boolean")return{type:e,default:t};if(t===null)return{type:"null"};if(Array.isArray(t))return{type:typeof t[0],default:t[0],enum:t};if(e!=="object")throw`invalid value type: ${e}`;let r=t,n=r.type;if(!(n==="string"||n==="number"||n==="boolean"||n==="null")){if(n==="array"){let s=M(r.items);s!==void 0&&(r.items=s);return}if(n==="object"){let s=r.properties??{};for(let[a,o]of Object.entries(s)){let i=M(o);i!==void 0&&(s[a]=i)}r.required===!0&&(r.required=Object.keys(s)),r.required===!1&&(r.required=[]);return}throw`invalid schema type: ${n}`}}var F=t=>{let e=R(t);return M(e),e};var fe={type:"object",properties:{bottomMargin:100,baseStyle:["stroke","background","classic","none"],mouseAction:["none","text"]},required:!0},he={type:"object",properties:{subtitleCount:[2,3,4,5,6,7,8],showOnlyLanguages:""},required:!0},D={type:"object",properties:{rendering:fe,dropdown:he},required:!0};var be={type:"object",properties:{languageList:["popular","available"],translationEngine:["google","microsoft"],translationMode:["auto","enhance","normal"]},required:!0},ge={type:"object",properties:{pinyinScheme:["putonghua","guangzhouhua","jyutping"]},required:!0},we={type:"object",properties:{furiganaCharacter:["kanji","kana"]},required:!0},I={type:"object",properties:{translation:be,chinese:ge,japanese:we},required:!0};var u={type:"array",items:""},p={fontSize:100,fontColor:"#ffffff",fontOpacity:100,fontEdgeEffect:["none","shadow","raised","depressed","outline","stroke"],fontEdgeColor:"#ffffff",fontEdgeSize:0,fontBold:!0,fontItalic:!0,backgroundColor:"#ffffff",backgroundOpacity:100,backgroundEdgeEffect:["none","shadow"],backgroundEdgeColor:"#ffffff",borderSize:0,borderColor:"#ffffff"},c={display1:["true","false"],display2:["true","false","preserve"],flexAlign:["center","left","right","evenly"]},Se={flexAlign:c.flexAlign,...p},xe={...p},ze={display:c.display2,...p},Ae={display:c.display2,flexAlign:c.flexAlign,...p},ke={display:c.display2,backgroundColor:p.backgroundColor,backgroundEdgeEffect:p.backgroundEdgeEffect,backgroundEdgeColor:p.backgroundEdgeColor,borderSize:p.borderSize,borderColor:p.borderColor},y={display:c.display1,match:"",...p},w={display:c.display1,match:u,...p},l=t=>({type:"object",properties:t,required:!1}),ve={type:"object",properties:{none:null,dialogue:l(Se),contents:l(xe),readings:l(ze),grammars:l(Ae),dividers:l(ke),pinyin:l(y),hiragana:l(y),katakana:l(y),romaji:l(y),loanword:l(y),pos:l(w),form:l(w),tag:l(w),base:l(y),sense:l(w),jlpt:l(w)},required:!1},je={type:"object",properties:{text:"",hiragana:"",katakana:"",romaji:"",loanword:"",pos:u,form:u,tag:u,base:"",sense:u,jlpt:u},required:!1},Ce={type:"object",properties:{name:"",component:ve},required:!0},Ee={type:"object",properties:{name:"",genres:u,tokens:je},required:!0},Pe={type:"object",properties:{name:"",genres:u,rulers:u,toolkit:"none"},required:!0},Re={type:"array",items:Ce},Me={type:"array",items:Ee},_e={type:"array",items:Pe},G={type:"object",properties:{genres:Re,rulers:Me,themes:_e},required:!0};var Le={type:"object",properties:{name:"",type:["none","style","script","standard","simple"],code:"",urls:{type:"array",items:""}},required:!0},V={type:"object",properties:{items:{type:"array",items:Le}},required:!0};var Oe={type:"object",properties:{name:"",lang:"",code:"",urls:{type:"array",items:""}},required:!0},U={type:"object",properties:{items:{type:"array",items:Oe}},required:!0};var Te={type:"object",properties:{apiUrl:["https://api.dualsub.xyz/"],apiKey:""},required:!0},H={type:"object",properties:{server:Te},required:!0};var qe={type:"object",properties:{general:D,language:I,style:G,plugin:V,file:U,network:H},required:!0},Ne=F(qe),$=t=>N(Ne,t);function B(t){return{genres:[{name:t.largeFont,component:{dialogue:{fontSize:110}}},{name:t.smallFont,component:{dialogue:{fontSize:90}}},{name:t.showPinyin,component:{pinyin:{display:"true"}}},{name:t.showHiragana,component:{hiragana:{display:"true"}}},{name:t.showSegmentline,component:{dividers:{display:"true",backgroundColor:"#ffffff",borderSize:1,borderColor:"#000000"}}},{name:t.hideSegmentline,component:{dividers:{display:"false"}}}],rulers:[{name:t.hideSegmentline,genres:[t.hideSegmentline],tokens:{pos:["\u65E0"]}}],themes:[{name:t.firstSubtitle,genres:[t.largeFont],rulers:[],toolkit:"none"},{name:t.secondSubtitle,genres:[t.smallFont],rulers:[],toolkit:"none"},{name:t.chineseLearning,genres:[t.largeFont,t.showPinyin],rulers:[],toolkit:"zhtools"},{name:t.japaneseLearning,genres:[t.largeFont,t.showHiragana,t.showSegmentline],rulers:[t.hideSegmentline],toolkit:"jatools"}]}}var Fe=`
/* www.youtube.com */
.ytd-page-manager .dualsub-renderer .subtitles {
    font-size: 80%;
}
.ytd-page-manager[theater] .dualsub-renderer .subtitles {
    font-size: 90%;
}
.ytd-page-manager[fullscreen] .dualsub-renderer .subtitles {
    font-size: 100%;
}
.ytd-page-manager .dualsub-renderer {
    margin-bottom: -50px;
}
.ytd-page-manager[theater] .dualsub-renderer {
    margin-bottom: -40px;
}
.ytd-page-manager[fullscreen] .dualsub-renderer {
    margin-bottom: 0;
}

/* m.youtube.com */
.ytp-mweb-player .dualsub-renderer {
    font-size: 12px;
    padding: 4px 8px;
    margin-bottom: -80px;
}
.ytp-mweb-player .dualsub-renderer .subtitles {
    padding: 4px 8px;
    gap: 0;
}
.ytp-mweb-player .dualsub-renderer .contents {
    line-height: 0.8;
}
.ytp-mweb-player.ytp-large-width-mode .dualsub-renderer {
    font-size: 18px;
    margin-bottom: -70px;
}

/* watch.frndlytv.com */
.ott-main-body .dualsub-renderer .subtitles {
    font-size: 80%;
}
.ott-main-body .jw-flag-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* www.funimation.com */
.v-application .dualsub-renderer .subtitle {
    font-size: revert !important;
    font-weight: normal;
}

/* www.coursera.org */
.rc-MetatagsWrapper .dualsub-renderer .subtitles {
    font-size: 60%;
}
.rc-MetatagsWrapper #persistent_fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.rc-MetatagsWrapper .dualsub-renderer {
    margin-bottom: -60px;
}
.rc-MetatagsWrapper #persistent_fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* www.udemy.com */
div[class^="has-sidebar"] .dualsub-renderer .subtitles {
    font-size: 80%;
}
div[class^="app--no-sidebar"] button ~ .dualsub-renderer .subtitles {
    font-size: 90%;
}
div[class^="app--no-sidebar"] .dualsub-renderer .subtitles {
    font-size: 100%;
}
div[class^="has-sidebar"] .dualsub-renderer {
    margin-bottom: -50px;
}
div[class^="app--no-sidebar"] button ~ .dualsub-renderer {
    margin-bottom: -40px;
}
div[class^="app--no-sidebar"] .dualsub-renderer {
    margin-bottom: 0;
}

/* www.ted.com */
#ted-player .dualsub-renderer .subtitles {
    font-size: 70%;
}
#ted-player:fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
#ted-player .dualsub-renderer {
    margin-bottom: -40px;
}
#ted-player:fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* www.ardmediathek.de */
.ardplayer .dualsub-renderer .subtitles {
    font-size: 80%;
}
.ardplayer.ardplayer-state-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.ardplayer .dualsub-renderer {
    margin: auto;
    font-size: 36px;
}

/* www.zdf.de */
.b-zdfplayer .dualsub-renderer {
    margin: auto !important;
    padding: 8px 16px !important;
    font-size: calc(100vw / 1920 * 18 + 18px) !important;
}
.b-zdfplayer .dualsub-renderer .subtitles {
    font-size: 80%;
}
.b-zdfplayer.zdfplayer-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.b-zdfplayer .dualsub-renderer {
    margin-bottom: -30px;
}
.b-zdfplayer.zdfplayer-fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* www.itv.com */
.genie-container .dualsub-renderer .subtitles {
    font-size: 60%;
}
.genie-container.is-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.genie-container .dualsub-renderer {
    margin-bottom: -20px;
}
.genie-container.is-fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* www.channel4.com */
#html5-player .dualsub-renderer .subtitles {
    font-size: 70%;
}
#html5-player.full_screen .dualsub-renderer .subtitles {
    font-size: 100%;
}
#html5-player .dualsub-renderer {
    margin-bottom: -60px;
}
#html5-player.full_screen .dualsub-renderer {
    margin-bottom: 0;
}

/* www.channel5.com */
.jwplayer .dualsub-renderer .subtitles {
    font-size: 80%;
}
.jwplayer.jw-flag-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* www.raiplay.it */
rai-player.inline .dualsub-renderer .subtitles {
    font-size: 60%;
}
rai-player.inline .vjs-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
rai-player.inline .dualsub-renderer {
    margin-bottom: -20px;
}
rai-player.inline .vjs-fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* www.arte.tv */
.isDefaultMode .avp-captions-container {
    display: none;
}
.isDefaultMode .dualsub-renderer .subtitles {
    font-size: 70%;
}
.isDefaultMode.isFullScreen .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* vimeo.com */
.player_area .dualsub-renderer .subtitles {
    font-size: 70%;
}
.player_area.is_fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.player_area .dualsub-renderer {
    margin-bottom: -60px
}
.player_area.is_fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* viu.tv */
.VODPlayer .PlayerControls {
    margin-top: 0;
    margin-bottom: 20px;
}
.VODPlayer .slider-control > div {
    margin-top: 12px !important;
    margin-bottom: 12px !important;
}

/* www.iq.com */
.iqp-player .dualsub-renderer .subtitles {
    font-size: 70%;
}
.iqp-player.iqp-full-screen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.iqp-player .dualsub-renderer {
    margin-bottom: -50px
}
.iqp-player.iqp-full-screen .dualsub-renderer {
    margin-bottom: 0;
}

/* wetv.vip */
#player-wrapper .dualsub-renderer .subtitles {
    font-size: 80%;
}
#player-wrapper.wetv-player__page-fullscreen .dualsub-renderer .subtitles {
    font-size: 90%;
}
#player-wrapper.full-size .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* www.bilibili.com */
.bilibili-player .dualsub-renderer .subtitles {
    font-size: 70%;
}
.bilibili-player.mode-widescreen .dualsub-renderer .subtitles {
    font-size: 80%;
}
.bilibili-player.mode-webfullscreen .dualsub-renderer .subtitles {
    font-size: 90%;
}
.bilibili-player.mode-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* www.bilibili.com (bangumi) */
.bpx-player-container .dualsub-renderer .subtitles {
    font-size: 70%;
}
.bpx-player-container[data-screen="wide"] .dualsub-renderer .subtitles {
    font-size: 80%;
}
.bpx-player-container[data-screen="web"] .dualsub-renderer .subtitles {
    font-size: 90%;
}
.bpx-player-container[data-screen="full"] .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* www.magellantv.com */
.playVideo .dualsub-renderer .subtitles {
    font-size: 60%;
}
.playVideo[data-fullscreen="true"] .dualsub-renderer .subtitles {
    font-size: 100%;
}
.playVideo .dualsub-renderer {
    margin-bottom: -40px;
}
.playVideo[data-fullscreen="true"] .dualsub-renderer {
    margin-bottom: 0;
}

/* 7plus.com.au */
.Player__video .dualsub-renderer .subtitles {
    font-size: 60%;
}
.Player__video.vjs-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}

/* www.9now.com.au */
.videoPlayer .dualsub-renderer .subtitles {
    font-size: 60%;
}
.videoPlayer.vjs-fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
.videoPlayer .dualsub-renderer {
    margin-bottom: -50px;
}
.videoPlayer.vjs-fullscreen .dualsub-renderer {
    margin-bottom: 0;
}

/* 10play.com.au */
#avia-player-show .dualsub-renderer .subtitles {
    font-size: 60%;
}
#avia-player-show:fullscreen .dualsub-renderer .subtitles {
    font-size: 100%;
}
#avia-player-show .dualsub-renderer {
    margin-bottom: -40px;
}
#avia-player-show:fullscreen .dualsub-renderer {
    margin-bottom: 0;
}
`.trim(),De=`
/* www.youtube.com */
.dualsub-simple .ytp-caption-segment {
    width: 100%;
}
.dualsub-simple .caption-visual-line:nth-child(1) > span::first-line {
    font-size: 100%;
}
.dualsub-simple .caption-visual-line:nth-child(2) > span::first-line {
    font-size: 80%;
}

/* m.youtube.com */
.ytp-mweb-player .caption-window.ytp-caption-window-bottom {
    margin-bottom: 20px;
}
`.trim(),Ie=`
/* m.youtube.com */
@media (max-width: 930px) and (orientation: landscape) {

    .player-container {
        height: 100vh !important;
    }

    #player {
        padding-bottom: 100vh !important;
    }

    .html5-main-video {
        width: 100vw !important;
        height: 100vh !important;
        left: 0 !important;
        top: 0 !important;
    }

    ytm-mobile-topbar-renderer.sticky-player {
        position: absolute !important;
    }

    .mobile-topbar-header {
        box-shadow: none !important;
    }

    ytm-engagement-panel {
        top: calc(100vh + 48px) !important;
    }

    .player-size {
        padding-bottom: 100vh !important;
    }

}
`.trim(),Ge=`
const button = document.createElement('div');
button.textContent = 'FS';
button.style.fontSize = '16px';
button.style.width = '32px';
button.style.height = '32px';
button.style.lineHeight = '32px';
button.style.textAlign = 'center';
button.style.background = '#000';
button.style.color = '#fff';
button.style.position = 'fixed';
button.style.top = '40%';
button.style.right = '5%';
button.style.border = '1px solid #fff';
button.style.borderRadius = '50%';
button.style.cursor = 'pointer';
document.body.append(button);

button.addEventListener('click', (event) => {
    const node = document.querySelector('.dualsub-renderer');
    node?.parentElement?.requestFullscreen();
});
`.trim();function J(t){return{items:[{name:t.autoScaling,type:"style",code:Fe,urls:["https://www.youtube.com/","https://m.youtube.com/","https://watch.frndlytv.com/","https://www.funimation.com/","https://www.coursera.org/","https://www.udemy.com/","https://www.ted.com/","https://www.ardmediathek.de/","https://www.zdf.de/","https://www.itv.com/","https://www.channel4.com/","https://www.channel5.com/","https://www.raiplay.it/","https://www.arte.tv/","https://vimeo.com/","https://viu.tv/","https://www.iq.com/","https://wetv.vip/","https://www.bilibili.com/","https://www.magellantv.com/","https://7plus.com.au/","https://www.9now.com.au/","https://10play.com.au/"]},{name:t.simpleMode,type:"style",code:De,urls:["https://www.youtube.com/","https://m.youtube.com/"]},{name:t.pageFullscreen,type:"style",code:Ie,urls:["https://m.youtube.com/"]},{name:t.fullscreenButton,type:"script",code:Ge,urls:["https://www.bbc.co.uk/"]}]}}var Ve=`
WEBVTT

00:00.000 --> 20:00.000
How are you?

20:00.000 --> 40:00.000
I am fine, thank you, and you?
`.trim();function W(t){return{items:[{name:t.example,lang:"en",code:Ve,urls:[]}]}}var j={style:B,plugin:J,file:W};var Ue=function(t){return t=t.toLowerCase().replace("_","-").trim(),t===""?"en":t==="zh-tw"||t==="zh-hk"||t==="zh-mo"||t==="zh-hant"?"zh-hant":t.match(/^zh\b/)?"zh-hans":t.split("-")[0]},He=t=>{let e={};for(let r of t)for(let[n,s]of Object.entries(r))e[n]||(e[n]={}),Object.assign(e[n],s);return e},C=class{constructor(e){this.dataset=He(e)}get(e){return e=Ue(e),this.dataset[e]||(e="en"),this.dataset[e]}};var Z={en:{autoScaling:"Auto Scaling",chineseLearning:"Chinese Learning",example:"Example",firstSubtitle:"First Subtitle",fullscreenButton:"Fullscreen Button",hideSegmentline:"Hide Segmentline",japaneseLearning:"Japanese Learning",largeFont:"Large Font",pageFullscreen:"Page Fullscreen",secondSubtitle:"Second Subtitle",showHiragana:"Show Hiragana",showPinyin:"Show Pinyin",showSegmentline:"Show Segmentline",simpleMode:"Simple Mode",smallFont:"Small Font"}};var K={"zh-hans":{autoScaling:"\u81EA\u52A8\u7F29\u653E",chineseLearning:"\u4E2D\u6587\u5B66\u4E60",example:"\u793A\u4F8B",firstSubtitle:"\u7B2C\u4E00\u5B57\u5E55",fullscreenButton:"\u5168\u5C4F\u6309\u94AE",hideSegmentline:"\u9690\u85CF\u5206\u8BCD\u7EBF",japaneseLearning:"\u65E5\u8BED\u5B66\u4E60",largeFont:"\u5927\u53F7\u5B57\u4F53",pageFullscreen:"\u7F51\u9875\u5168\u5C4F",secondSubtitle:"\u7B2C\u4E8C\u5B57\u5E55",showHiragana:"\u663E\u793A\u5E73\u5047\u540D",showPinyin:"\u663E\u793A\u62FC\u97F3",showSegmentline:"\u663E\u793A\u5206\u8BCD\u7EBF",simpleMode:"\u7B80\u5355\u6A21\u5F0F",smallFont:"\u5C0F\u53F7\u5B57\u4F53"}};var X={"zh-hant":{autoScaling:"\u81EA\u52D5\u7E2E\u653E",chineseLearning:"\u4E2D\u6587\u5B78\u7FD2",example:"\u793A\u4F8B",firstSubtitle:"\u7B2C\u4E00\u5B57\u5E55",fullscreenButton:"\u5168\u5C4F\u6309\u9215",hideSegmentline:"\u96B1\u85CF\u5206\u8A5E\u7DDA",japaneseLearning:"\u65E5\u8A9E\u5B78\u7FD2",largeFont:"\u5927\u865F\u5B57\u9AD4",pageFullscreen:"\u7DB2\u9801\u5168\u5C4F",secondSubtitle:"\u7B2C\u4E8C\u5B57\u5E55",showHiragana:"\u986F\u793A\u5E73\u5047\u540D",showPinyin:"\u986F\u793A\u62FC\u97F3",showSegmentline:"\u986F\u793A\u5206\u8A5E\u7DDA",simpleMode:"\u7C21\u55AE\u6A21\u5F0F",smallFont:"\u5C0F\u865F\u5B57\u9AD4"}};var Y={en:{LANG_CODE:"en",LANG_NAME:"English",LANG_LOCAL:"English"},"zh-hans":{LANG_CODE:"zh-hans",LANG_NAME:"Chinese (Simplified)",LANG_LOCAL:"\u4E2D\u6587 (\u7B80\u4F53)"},"zh-hant":{LANG_CODE:"zh-hant",LANG_NAME:"Chinese (Traditional)",LANG_LOCAL:"\u4E2D\u6587 (\u7E41\u9AD4)"}};var Q=new C([Z,K,X,Y]);var ee=t=>(t=t.toLowerCase().replace("_","-").trim(),t==="zh-tw"||t==="zh-hk"||t==="zh-mo"||t==="zh-hant"?"zh-hant":t.match(/^zh\b/)?"zh-hans":"en");var Ze=ee(navigator.language),te={i18nCode:Ze};var Ke=t=>({daemon:Q.get(t)}),E=Ke(te.i18nCode);var Xe=()=>T(),Ye=()=>{let t=$();return t.style=j.style(E.daemon),t.plugin=j.plugin(E.daemon),t.file=j.file(E.daemon),t},Qe=async()=>{let t=chrome.runtime.getManifest(),e=t.permissions[0].slice(0,-2),r=t.version,n=["instance","setting"],s=await m.storage.get(n),a=s.instance??Xe(),o=s.setting??Ye(),i={};return s.instance===void 0&&(i.instance=a),s.setting===void 0&&(i.setting=o),Object.keys(i).length!==0&&await m.storage.set(i),{apiUrl:e,version:r,instance:a}},re=Qe;(async()=>{let{apiUrl:t,version:e,instance:r}=await re(),n=new b({client:[t,{version:e,instance:r}],load:async()=>{let a="backend-v2";return(await m.storage.get([a]))[a]},save:async a=>{let o="backend-v2";await m.storage.set({[o]:a})}}),s={translate:async(a,o)=>await n.translate(o),zhtools:async(a,o)=>await n.zhtools(o),jatools:async(a,o)=>await n.jatools(o),heat:async(a,o)=>await n.heat(o),check:async(a,o)=>{let i=o.apiKey;return await n.check({apiKey:i})}};chrome.runtime.onMessage.addListener((a,o,i)=>(_(s,a,o,i),!0))})();
