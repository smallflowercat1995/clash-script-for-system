!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ExtfansGa=t()}(this,function(){"use strict";var r=(new Date).valueOf();function i(e){var t,n=[];for(t in e){var o=e[t];null!=o&&!1!==o&&(!0===o&&(o=1),n.push(encodeURIComponent(t)+"="+encodeURIComponent(o)))}return n.join("&")}var e=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e=(t.getClientId=async function(){var n,e=(await chrome.storage.local.get("ga:clientId"))["ga:clientId"];return e||(n=Date.now()+performance.now(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)}),await chrome.storage.local.set({"ga:clientId":e})),e},e(t,[{key:"getEventUrl",value:function(e){return this.getSendUrl("event",{ec:e.category,ea:e.action,el:e.label,ev:e.value,ni:!0===e.nonInteraction})}},{key:"setSystemInfo",value:function(e){this.systemInfo=e}},{key:"event",value:function(e){return this.send("event",{ec:e.category,ea:e.action,el:e.label,ev:e.value,ni:!0===e.nonInteraction})}},{key:"getPageviewUrl",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.getSendUrl("pageview",{dl:e.location,dh:e.host,dp:e.page,dt:e.title||""})}},{key:"pageview",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.send("pageview",{dl:e.location,dh:e.host,dp:e.page,dt:e.title||""})}},{key:"send",value:function(e,t){var n,o=l({_t:r++,t:e},this.baseInfo,this.systemInfo,t),a=this.extraInfo;for(n in a)null==o[n]&&(o[n]=a[n]);e="https://www.google-analytics.com/collect?"+i(o);return fetch(e),e}},{key:"getSendUrl",value:function(e,t){var n,o=l({_t:r++,t:e},this.baseInfo,this.systemInfo,t),a=this.extraInfo;for(n in a)null==o[n]&&(o[n]=a[n]);return"https://www.google-analytics.com/collect?"+i(o)}}]),t);function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function");this.baseInfo={v:1,tid:e.trackingId,uid:e.userId,cid:e.clientId};this.extraInfo={dl:location.href.split("#")[0]}}return e.version="1.0.2",e});