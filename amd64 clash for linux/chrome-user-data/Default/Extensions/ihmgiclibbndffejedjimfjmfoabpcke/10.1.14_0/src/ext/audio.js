!function(e){const n=["ar","bn","zh-CN","zh-TW","cs","da","nl","en","en-US","et","tl","fi","fr","de","hi","id","it","ja","ko","la","pl","pt","ru","sr","si","sk","es","su","sv","th","uk","vi","cy"],o=[],i=["af","sq","hy","bs","ca","hr","eo","el","hu","is","jw","km","lv","mk","ml","mr","my","ne","no","ro","sw","ta","te","tr"],t=[];pl.extend(ke.ext.audio,{player:null,isPlaying:!1,preventLoading:!1,get MAX_TTS_LEN(){return 160},loadAudio:function(e,n){if(ke.IS_SAFARI&&!chrome.utils.isGlobalPage())return chrome.runtime.sendMessage({action:ke.processCall("app","audio","load"),link:e},n);var o=new XMLHttpRequest;o.open("GET",e,!0),o.responseType="blob",o.setRequestHeader("Content-type","application/json; charset=utf-8"),o.onload=function(e){if(200===this.status){var o=new Blob([this.response],{type:"audio/mpeg"}),i=new FileReader;i.addEventListener("loadend",(function(){n(i.result)})),i.readAsDataURL(o)}else console.error("Unable to download audio chunk")},o.send()},isUtterable:function(e){return n.indexOf(e)>-1||o.indexOf(e)>-1||i.indexOf(e)>-1||t.indexOf(e)>-1},playAudio:function(e,n){ke.ext.audio.player=new Audio(e),ke.ext.audio.player.onerror=function(){console.log("playback error:",arguments)},ke.ext.audio.player.onended=function(){n(),ke.ext.audio.player=null},ke.ext.audio.player.play()},playText:function(e,a,l){ke.ext.audio.isPlaying&&ke.ext.audio.stop();var u=ke.ext.string.chunkate(e,ke.ext.audio.MAX_TTS_LEN),d=[],s=function(e){if(e>=u.length)l();else if(ke.ext.audio.isPlaying){for(;e>=d.length;);ke.ext.audio.playAudio(d[e],(function(){s(e+1)}))}else console.log("abort?")},r=function(e){var p;e>=u.length||(n.indexOf(a)>-1?p=ke.ext.googleApi.getAudioFileLink(a,u[e]):o.indexOf(a)>-1||t.indexOf(a)>-1?p=ke.ext.googleApi.getBingAudioFileLink(ke.ext.googleApi.googleLangsToBingLangs(a),u[e]):i.indexOf(a)>-1&&(p=ke.ext.googleApi.getAudioFileLink(a,u[e])),p?ke.ext.audio.loadAudio(p,(function(n){d.push(n),0===e&&(ke.ext.audio.isPlaying=!0,s(0)),r(e+1)})):l())};r(0)},stop:function(){ke.ext.audio.isPlaying=!1,null!=ke.ext.audio.player&&(ke.ext.audio.player.pause(),ke.ext.audio.player=null)}})}();