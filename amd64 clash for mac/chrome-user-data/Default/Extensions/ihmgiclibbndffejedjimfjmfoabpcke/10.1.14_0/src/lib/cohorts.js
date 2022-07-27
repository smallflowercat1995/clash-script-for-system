Cohorts=function(){var t,o={debug:!1},e={nameSpace:"cohorts",trackEvent:function(t,o,e,n){i.log("GA trackEvent: "+t+", "+o+", "+e+", "+n),"undefined"!=typeof ga&&(n?ga("send","event",t,o,e,n):ga("send","event",t,o,e))},onInitialize:function(t,o,e){t&&this.trackEvent(this.nameSpace,o,e+" | Total")},onEvent:function(t,o,e,n){this.trackEvent(this.nameSpace,t,o+" | "+e,n)}},n=((t=function(t){if(this.options=i.extend({name:null,cohorts:null,sample:1,storageAdapter:null},t),null===this.options.name)throw"A name for this test must be specified";if(null===this.options.cohorts)throw"Cohorts must be specified for this test";if(i.size(t.cohorts)<2)throw"You must specify at least 2 cohorts for a test";this.options.storageAdapter||(this.options.storageAdapter=e),this.cohorts=i.keys(this.options.cohorts),this.run()}).prototype={run:function(){var t=window.location.hash;0==t.indexOf("#")&&(t=t.slice(1,t.length));for(var o=t.split("&"),e=0;e<o.length;e++){var n=o[e].split("="),s=n[0],r=n[1];this.options.name==s&&(i.log("Forcing test "+s+" into cohort "+r),this.setCohort(r))}var h=this.inTest();if(null===h&&(h=Math.random()<=this.options.sample),h){if(this.setCookie("in_test",1),this.getCohort())c=this.getCohort();else{var a=1/i.size(this.options.cohorts),p=Math.floor(Math.random()/a),c=i.keys(this.options.cohorts)[p];this.setCohort(c)}this.options.storageAdapter.onInitialize(h,this.options.name,c),this.options.cohorts[c].onChosen&&this.options.cohorts[c].onChosen()}else this.setCookie("in_test",0)},event:function(t,o){this.inTest()&&this.options.storageAdapter.onEvent(this.options.name,this.getCohort(),t,o||"")},inTest:function(){return 1==this.getCookie("in_test")||0!=this.getCookie("in_test")&&null},inCohort:function(t){return!!this.inTest()&&this.getCohort()==t},getCohort:function(){return this.inTest()?this.getCookie("chosen_cohort"):null},setCohort:function(t){return-1!=this.cohorts.indexOf(t)&&(this.setCookie("chosen_cohort",t),!0)},setCookie:function(t,o){s.set("_cohorts_"+this.options.name+"_"+t,o)},getCookie:function(t){return s.get("_cohorts_"+this.options.name+"_"+t)}},t),i={extend:function(t,o){for(var e in o)t[e]=o[e];return t},size:function(t){var o=0;for(var e in t)o+=1;return o},keys:function(t){var o=[];for(var e in t)o.push(e);return o},log:function(t){window.console&&o.debug&&(console.log?console.log(t):alert(t))}},s=function(){var t,o,e,n,i={expiresAt:null,path:"/",domain:null,secure:!1};return t=function(t){var o,e;return"object"!=typeof t||null===t?o=i:(o={expiresAt:i.expiresAt,path:i.path,domain:i.domain,secure:i.secure},"object"==typeof t.expiresAt&&t.expiresAt instanceof Date?o.expiresAt=t.expiresAt:"number"==typeof t.hoursToLive&&0!==t.hoursToLive&&((e=new Date).setTime(e.getTime()+60*t.hoursToLive*60*1e3),o.expiresAt=e),"string"==typeof t.path&&""!==t.path&&(o.path=t.path),"string"==typeof t.domain&&""!==t.domain&&(o.domain=t.domain),!0===t.secure&&(o.secure=t.secure)),o},o=function(o){return("object"==typeof(o=t(o)).expiresAt&&o.expiresAt instanceof Date?"; expires="+o.expiresAt.toGMTString():"")+"; path="+o.path+("string"==typeof o.domain?"; domain="+o.domain:"")+(!0===o.secure?"; secure":"")},e=function(){var t,o,e,n,i,s={},r=document.cookie.split(";");for(t=0;t<r.length;t+=1){e=(o=r[t].split("="))[0].replace(/^\s*/,"").replace(/\s*$/,"");try{n=decodeURIComponent(o[1])}catch(t){n=o[1]}if("object"==typeof JSON&&null!==JSON&&"function"==typeof JSON.parse)try{i=n,n=JSON.parse(n)}catch(t){n=i}s[e]=n}return s},(n=function(){}).prototype.get=function(t){var o,n,i=e();if("string"==typeof t)o=void 0!==i[t]?i[t]:null;else if("object"==typeof t&&null!==t)for(n in o={},t)void 0!==i[t[n]]?o[t[n]]=i[t[n]]:o[t[n]]=null;else o=i;return o},n.prototype.filter=function(t){var o,n={},i=e();for(o in"string"==typeof t&&(t=new RegExp(t)),i)o.match(t)&&(n[o]=i[o]);return n},n.prototype.set=function(t,e,n){if("object"==typeof n&&null!==n||(n={}),null==e)e="",n.hoursToLive=-8760;else if("string"!=typeof e){if("object"!=typeof JSON||null===JSON||"function"!=typeof JSON.stringify)throw new Error("cookies.set() received non-string value and could not serialize.");e=JSON.stringify(e)}var i=o(n);document.cookie=t+"="+encodeURIComponent(e)+i},n.prototype.del=function(t,o){var e,n={};for(e in"object"==typeof o&&null!==o||(o={}),"boolean"==typeof t&&!0===t?n=this.get():"string"==typeof t&&(n[t]=!0),n)"string"==typeof e&&""!==e&&this.set(e,null,o)},n.prototype.test=function(){var t=!1,o="cT",e="data";return this.set(o,e),this.get(o)===e&&(this.del(o),t=!0),t},n.prototype.setOptions=function(o){"object"!=typeof o&&(o=null),i=t(o)},new n}();return{Test:n,Cookies:s,Options:o}}();