var clienttelemetry_build;!function(e){e.version="2.7.1"}(clienttelemetry_build||(clienttelemetry_build={}));var Microsoft;!function(e){var t;!function(e){!function(e){e[e.BT_STOP=0]="BT_STOP",e[e.BT_STOP_BASE=1]="BT_STOP_BASE",e[e.BT_BOOL=2]="BT_BOOL",e[e.BT_UINT8=3]="BT_UINT8",e[e.BT_UINT16=4]="BT_UINT16",e[e.BT_UINT32=5]="BT_UINT32",e[e.BT_UINT64=6]="BT_UINT64",e[e.BT_FLOAT=7]="BT_FLOAT",e[e.BT_DOUBLE=8]="BT_DOUBLE",e[e.BT_STRING=9]="BT_STRING",e[e.BT_STRUCT=10]="BT_STRUCT",e[e.BT_LIST=11]="BT_LIST",e[e.BT_SET=12]="BT_SET",e[e.BT_MAP=13]="BT_MAP",e[e.BT_INT8=14]="BT_INT8",e[e.BT_INT16=15]="BT_INT16",e[e.BT_INT32=16]="BT_INT32",e[e.BT_INT64=17]="BT_INT64",e[e.BT_WSTRING=18]="BT_WSTRING",e[e.BT_UNAVAILABLE=127]="BT_UNAVAILABLE"}(e.BondDataType||(e.BondDataType={}));e.BondDataType;!function(e){e[e.MARSHALED_PROTOCOL=0]="MARSHALED_PROTOCOL",e[e.MAFIA_PROTOCOL=17997]="MAFIA_PROTOCOL",e[e.COMPACT_PROTOCOL=16963]="COMPACT_PROTOCOL",e[e.JSON_PROTOCOL=21322]="JSON_PROTOCOL",e[e.PRETTY_JSON_PROTOCOL=20554]="PRETTY_JSON_PROTOCOL",e[e.SIMPLE_PROTOCOL=20563]="SIMPLE_PROTOCOL"}(e.ProtocolType||(e.ProtocolType={}));e.ProtocolType}(t=e.Bond||(e.Bond={}))}(Microsoft||(Microsoft={}));var Microsoft;!function(e){var t;!function(e){var t;!function(e){var t=function(){function e(){this._buffer=[]}return e.prototype.Add=function(e){for(var t=0;t<this._buffer.length&&this._buffer[t]!=e;++t);t==this._buffer.length&&this._buffer.push(e)},e.prototype.Count=function(){return this._buffer.length},e.prototype.GetBuffer=function(){return this._buffer},e}();e.Set=t;var n=function(){function e(){this._buffer=[]}return e.prototype.Add=function(e,t){this._getIndex(e)==-1&&this._buffer.push({Key:e,Value:t})},e.prototype.AddOrReplace=function(e,t){var n=this._getIndex(e);n>=0?this._buffer[n]={Key:e,Value:t}:this._buffer.push({Key:e,Value:t})},e.prototype.Remove=function(e){var t=this._getIndex(e);t>=0&&this._buffer.splice(t,1)},e.prototype.Count=function(){return this._buffer.length},e.prototype.GetBuffer=function(){return this._buffer},e.prototype.ContainsKey=function(e){return this._getIndex(e)>=0},e.prototype.Get=function(e){var t=this._getIndex(e);return t>=0?this._buffer[t].Value:null},e.prototype._getIndex=function(e){for(var t=0,n=-1;t<this._buffer.length;++t)if(this._buffer[t].Key==e){n=t;break}return n},e}();e.Map=n}(t=e.Collections||(e.Collections={}))}(t=e.Bond||(e.Bond={}))}(Microsoft||(Microsoft={}));var Microsoft;!function(e){var t;!function(t){var n;!function(e){var n=function(){function e(){}return e.GetBytes=function(e){for(var t=[],n=0;n<e.length;++n){var i=e.charCodeAt(n);i<128?t.push(i):i<2048?t.push(192|i>>6,128|63&i):i<55296||i>=57344?t.push(224|i>>12,128|i>>6&63,128|63&i):(i=65536+((1023&i)<<10|1023&e.charCodeAt(++n)),t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i))}return t},e}();e.Utf8=n;var i=function(){function e(){}return e.GetString=function(e){var t,n,i,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=[],s=e.length%3,a=function(e){return[r.charAt(e>>18&63),r.charAt(e>>12&63),r.charAt(e>>6&63),r.charAt(63&e)].join("")};for(t=0,i=e.length-s;t<i;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],o.push(a(n));switch(s){case 1:n=e[e.length-1],o.push(r.charAt(n>>2)),o.push(r.charAt(n<<4&63)),o.push("==");break;case 2:n=(e[e.length-2]<<8)+e[e.length-1],o.push(r.charAt(n>>10)),o.push(r.charAt(n>>4&63)),o.push(r.charAt(n<<2&63)),o.push("=")}return o.join("")},e}();e.Base64=i;var o=function(){function e(){}return e.GetBytes=function(e){for(var t=[];4294967168&e;)t.push(127&e|128),e>>>=7;return t.push(127&e),t},e}();e.Varint=o;var s=function(){function e(){}return e.GetBytes=function(e){for(var t=e.low,n=e.high,i=[];n||4294967168&t;)i.push(127&t|128),t=(127&n)<<25|t>>>7,n>>>=7;return i.push(127&t),i},e}();e.Varint64=s;var a=function(){function e(){}return e.GetBytes=function(e){if(t.BrowserChecker.IsDataViewSupport()){var n=new DataView(new ArrayBuffer(4));n.setFloat32(0,e,!0);for(var i=[],o=0;o<4;++o)i.push(n.getUint8(o));return i}return r.ConvertNumberToArray(e,!1)},e}();e.Float=a;var u=function(){function e(){}return e.GetBytes=function(e){if(t.BrowserChecker.IsDataViewSupport()){var n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e,!0);for(var i=[],o=0;o<8;++o)i.push(n.getUint8(o));return i}return r.ConvertNumberToArray(e,!0)},e}();e.Double=u;var d=function(){function e(){}return e.EncodeZigzag16=function(e){return e=t.Number.ToInt16(e),e<<1^e>>15},e.EncodeZigzag32=function(e){return e=t.Number.ToInt32(e),e<<1^e>>31},e.EncodeZigzag64=function(e){var n=e.low,i=e.high,r=i<<1|n>>>31,o=n<<1;2147483648&i&&(r=~r,o=~o);var s=new t.UInt64("0");return s.low=o,s.high=r,s},e}();e.Zigzag=d}(n=t.Encoding||(t.Encoding={}));var i;!function(n){var i=function(){function e(){}return e.GetString=function(e){for(var t=[],n=0;n<e.length;++n){var i=e[n];if(i<=191)t.push(String.fromCharCode(i));else if(i<=223){var r=e[++n];t.push(String.fromCharCode((31&i)<<6|63&r))}else if(i<=239){var r=e[++n],o=e[++n];t.push(String.fromCharCode((15&i)<<12|(63&r)<<6|63&o))}else{var r=e[++n],o=e[++n],s=e[++n];i=(7&i)<<18|(63&r)<<12|(63&o)<<6|63&s,i-=65536,t.push(String.fromCharCode(55296|i>>10&1023)),t.push(String.fromCharCode(56320|1023&i))}}return t.join("")},e}();n.Utf8=i;var o=function(){function e(){}return e.GetBytes=function(e){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n=[],i=0;i<e.length;++i){var r=t.indexOf(e.charAt(i++)),o=t.indexOf(e.charAt(i++)),s=t.indexOf(e.charAt(i++)),a=t.indexOf(e.charAt(i));n.push(r<<2|o>>4),s>=0&&(n.push(o<<4&240|s>>2),a>=0&&n.push(s<<6&192|a))}return n},e}();n.Base64=o;var s=function(){function t(){}return t.GetInt64=function(t){var n=new e.Bond.Int64("0"),i=this._Read(t);return n.low=i[0],i.length>1&&(n.high=i[1]),n},t.GetNumber=function(e){return this._Read(e)[0]},t._Read=function(e){for(var t=[],n=0,i=!0,r=0;i;){var o=e.shift();if(i=0!=(128&o),o=127&o,!(r<28)){n|=o<<r,t.push(n),n=o>>4,r=3;break}n|=o<<r,r+=7}for(;i;){var o=e.shift();if(i=0!=(128&o),o=127&o,n|=o<<r,r+=7,r>=32)break}return t.push(n),t},t}();n.Varint=s;var a=function(){function e(){}return e.GetNumber=function(e){if(t.BrowserChecker.IsDataViewSupport()){for(var n=new DataView(new ArrayBuffer(4)),i=0;i<4;++i)n.setUint8(i,e[i]);return n.getFloat32(0,!0)}return r.ConvertArrayToNumber(e,!1)},e}();n.Float=a;var u=function(){function e(){}return e.GetNumber=function(e){if(t.BrowserChecker.IsDataViewSupport()){for(var n=new DataView(new ArrayBuffer(8)),i=0;i<8;++i)n.setUint8(i,e[i]);return n.getFloat64(0,!0)}return r.ConvertArrayToNumber(e,!0)},e}();n.Double=u;var d=function(){function t(){}return t.DecodeZigzag16=function(e){return((65535&e)>>>1^-(1&e))<<16>>16},t.DecodeZigzag32=function(e){return e>>>1^-(1&e)},t.DecodeZigzag64=function(t){var n=1&t.high,i=t.high>>>1,r=1&t.low,o=t.low>>>1;o=n<<31|o,r&&(o^=4294967295,i^=4294967295);var s=new e.Bond.UInt64("0");return s.low=o,s.high=i,s},t}();n.Zigzag=d}(i=t.Decoding||(t.Decoding={}));var r=function(){function e(){}return e.ConvertNumberToArray=function(e,t){if(!e)return t?this._doubleZero:this._floatZero;var n=t?11:8,i=t?52:23,r=(1<<n-1)-1,o=1-r,s=r,a=e<0?1:0;e=Math.abs(e);for(var u=Math.floor(e),d=e-u,c=2*(r+2)+i,l=new Array(c),_=0;_<c;)l[_++]=0;for(_=r+2;_&&u;)l[--_]=u%2,u=Math.floor(u/2);for(_=r+1;_<c-1&&d>0;)d*=2,d>=1?(l[++_]=1,--d):l[++_]=0;for(var f=0;f<c&&!l[f];++f);var h=r+1-f,p=f+i;if(l[p+1]){for(_=p;_>f&&!(l[_]=1-l[_]);--_);_==f&&++h}if(h>s||u)return a?t?this._doubleNegInifinity:this._floatNegInifinity:t?this._doubleInifinity:this._floatInifinity;if(h<o)return t?this._doubleZero:this._floatZero;if(t){var I=0;for(_=0;_<20;++_)I=I<<1|l[++f];for(var T=0;_<52;++_)T=T<<1|l[++f];I|=h+r<<20,I=a<<31|2147483647&I;var S=[255&T,T>>8&255,T>>16&255,T>>>24,255&I,I>>8&255,I>>16&255,I>>>24];return S}var g=0;for(_=0;_<23;++_)g=g<<1|l[++f];g|=h+r<<23,g=a<<31|2147483647&g;var S=[255&g,g>>8&255,g>>16&255,g>>>24];return S},e.ConvertArrayToNumber=function(e,n){var i=n?11:8,r=(1<<i-1)-1,o=0!=(128&e[n?7:3]),s=n?(127&e[7])<<4|(240&e[6])>>4:(127&e[3])<<1|(128&e[2])>>7;if(255==s)throw new t.Exception("Not a valid float/double buffer.");var a=1,u=1;if(n){var d=(15&e[6])<<28|(255&e[5])<<20|(255&e[4])<<12,c=e[3]<<24|(255&e[2])<<16|(255&e[1])<<8|255&e[0];if(!s&&!d&&!c)return 0;for(var l=0;l<20;++l)u/=2,d<0&&(a+=u),d<<=1;for(var l=0;l<32;++l)u/=2,c<0&&(a+=u),c<<=1}else{var _=(127&e[2])<<25|(255&e[1])<<17|(255&e[0])<<9;if(!s&&!_)return 0;for(var l=0;l<23;++l)u/=2,_<0&&(a+=u),_<<=1}return a*=Math.pow(2,s-r),o?0-a:a},e._floatZero=[0,0,0,0],e._doubleZero=[0,0,0,0,0,0,0,0],e._floatInifinity=[0,0,128,127],e._floatNegInifinity=[0,0,128,255],e._doubleInifinity=[0,0,0,0,0,0,240,127],e._doubleNegInifinity=[0,0,0,0,0,0,240,255],e}()}(t=e.Bond||(e.Bond={}))}(Microsoft||(Microsoft={}));var Microsoft;!function(e){var t;!function(e){var t;!function(t){var n=function(){function t(){this._buffer=[]}return t.prototype.WriteByte=function(t){this._buffer.push(e.Number.ToByte(t))},t.prototype.Write=function(e,t,n){for(;n--;)this.WriteByte(e[t++])},t.prototype.GetBuffer=function(){return this._buffer},t}();t.MemoryStream=n}(t=e.IO||(e.IO={}))}(t=e.Bond||(e.Bond={}))}(Microsoft||(Microsoft={}));var Microsoft;!function(e){var t;!function(e){var t=function(){function e(e,t){this.Type=e,this.Id=t}return e}();e.FieldTag=t;var n=function(){function e(e,t){this.ElementType=e,this.Size=t}return e}();e.ContainerTag=n;var i=function(){function e(e,t,n){this.KeyType=e,this.ValueType=t,this.Size=n}return e}();e.KeyValueContainerTag=i;var r=function(){function e(){}return e}();e.Bonded=r;var o=function(){function e(e){this.low=0,this.high=0,this.low=parseInt(e),this.low<0&&(this.high=-1)}return e.prototype.Equals=function(t){var n=new e(t);return this.low==n.low&&this.high==n.high},e}();e.Int64=o;var s=function(){function e(e){this.low=0,this.high=0,this.low=parseInt(e)}return e.prototype.Equals=function(t){var n=new e(t);return this.low==n.low&&this.high==n.high},e}();e.UInt64=s;var a=function(){function e(){}return e.ToByte=function(e){return this.ToUInt8(e)},e.ToInt8=function(e){var t=(128&e)<<24>>24;return 127&e|t},e.ToInt16=function(e){var t=(32768&e)<<16>>16;return 32767&e|t},e.ToInt32=function(e){var t=2147483648&e;return 2147483647&e|t},e.ToUInt8=function(e){return 255&e},e.ToUInt16=function(e){return 65535&e},e.ToUInt32=function(e){return 4294967295&e},e}();e.Number=a;var u=function(){function e(e){this.Message=e}return e}();e.Exception=u;var d=function(){function e(){}return e}();e.KeyValuePair=d;var c=function(){function e(){}return e.IsDataViewSupport=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},e}();e.BrowserChecker=c}(t=e.Bond||(e.Bond={}))}(Microsoft||(Microsoft={}));var Microsoft;!function(e){var t;!function(e){var t=function(){function t(e){this._stream=e}return t.prototype.WriteBlob=function(e){this._stream.Write(e,0,e.length)},t.prototype.WriteBool=function(e){this._stream.WriteByte(e?1:0)},t.prototype.WriteContainerBegin=function(e,t){this.WriteUInt8(t),this.WriteUInt32(e)},t.prototype.WriteMapContainerBegin=function(e,t,n){this.WriteUInt8(t),this.WriteUInt8(n),this.WriteUInt32(e)},t.prototype.WriteContainerEnd=function(){},t.prototype.WriteDouble=function(t){var n=e.Encoding.Double.GetBytes(t);this._stream.Write(n,0,n.length)},t.prototype.WriteFloat=function(t){var n=e.Encoding.Float.GetBytes(t);this._stream.Write(n,0,n.length)},t.prototype.WriteFieldBegin=function(e,t,n){t<=5?this._stream.WriteByte(e|t<<5):t<=255?(this._stream.WriteByte(192|e),this._stream.WriteByte(t)):(this._stream.WriteByte(224|e),this._stream.WriteByte(t),this._stream.WriteByte(t>>8))},t.prototype.WriteFieldEnd=function(){},t.prototype.WriteFieldOmitted=function(e,t,n){},t.prototype.WriteInt16=function(t){t=e.Encoding.Zigzag.EncodeZigzag16(t),this.WriteUInt16(t)},t.prototype.WriteInt32=function(t){t=e.Encoding.Zigzag.EncodeZigzag32(t),this.WriteUInt32(t)},t.prototype.WriteInt64=function(t){this.WriteUInt64(e.Encoding.Zigzag.EncodeZigzag64(t))},t.prototype.WriteInt8=function(t){this._stream.WriteByte(e.Number.ToInt8(t))},t.prototype.WriteString=function(t){if(""==t)this.WriteUInt32(0);else{var n=e.Encoding.Utf8.GetBytes(t);this.WriteUInt32(n.length),this._stream.Write(n,0,n.length)}},t.prototype.WriteStructBegin=function(e,t){},t.prototype.WriteStructEnd=function(t){this.WriteUInt8(t?e.BondDataType.BT_STOP_BASE:e.BondDataType.BT_STOP)},t.prototype.WriteUInt16=function(t){var n=e.Encoding.Varint.GetBytes(e.Number.ToUInt16(t));this._stream.Write(n,0,n.length)},t.prototype.WriteUInt32=function(t){var n=e.Encoding.Varint.GetBytes(e.Number.ToUInt32(t));this._stream.Write(n,0,n.length)},t.prototype.WriteUInt64=function(t){var n=e.Encoding.Varint64.GetBytes(t);this._stream.Write(n,0,n.length)},t.prototype.WriteUInt8=function(t){this._stream.WriteByte(e.Number.ToUInt8(t))},t.prototype.WriteWString=function(e){this.WriteUInt32(e.length);for(var t=0;t<e.length;++t){var n=e.charCodeAt(t);this._stream.WriteByte(n),this._stream.WriteByte(n>>>8)}},t}();e.CompactBinaryProtocolWriter=t;var n=function(){function e(){}return e}();e.CompactBinaryProtocolReader=n}(t=e.Bond||(e.Bond={}))}(Microsoft||(Microsoft={}));var sct;!function(e){var t=function(){function t(){}return t.IsSafari=function(){if(null===t._isSafari)if("undefined"!=typeof navigator&&navigator.userAgent){var e=navigator.userAgent.toLowerCase();e.indexOf("safari")>=0&&e.indexOf("chrome")<0?t._isSafari=!0:t._isSafari=!1}else t._isSafari=!1;return t._isSafari},t.IsReactNative=function(){return null===t._isReactNative&&("undefined"!=typeof navigator&&navigator.product?t._isReactNative="ReactNative"===navigator.product:t._isReactNative=!1),t._isReactNative},t.IsUint8ArrSupported=function(){return!e.Utils.IsSafari()&&"undefined"!=typeof Uint8Array&&!e.Utils.IsReactNative()},t.ajax=function(e,n){var i=t._createConnection();if(e.headers){var r="qsp=true";for(var o in e.headers)r+="&",r+=encodeURIComponent(o),r+="=",r+=encodeURIComponent(e.headers[o]);e.url.indexOf("?")<0?e.url+="?":e.url+="&",e.url+=r}i.open(e.type,e.url,!n),e.complete&&(i.onload=function(){"undefined"==typeof i.status&&(i.status=200),e.complete(i)},i.ontimeout=function(){"undefined"==typeof i.status&&(i.status=500),e.complete(i)},i.onerror=function(){e.complete(i)}),i.send(e.data)},t.keys=function(e){if(Object.keys)return Object.keys(e);var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},t.IsUsingXDomainRequest=function(){if(null==t._usingXDomainRequest){var e=new XMLHttpRequest;"undefined"==typeof e.withCredentials&&"undefined"!=typeof XDomainRequest?t._usingXDomainRequest=!0:t._usingXDomainRequest=!1}return t._usingXDomainRequest},t._createConnection=function(){var e=new XMLHttpRequest;return t.IsUsingXDomainRequest()?new XDomainRequest:e},t._isSafari=null,t._isReactNative=null,t._usingXDomainRequest=null,t}();e.Utils=t}(sct||(sct={}));var microsoft;!function(e){var t;!function(e){var t;!function(e){var t;!function(t){var n=function(){function e(){}return e.GetGuid=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1,5)};return[e(),e(),"-",e(),"-",e(),"-",e(),"-",e(),e(),e()].join("")},e.GetTimeStamp=function(){var e=(new Date).getTime(),t=new Microsoft.Bond.Int64("0");return t.low=4294967295&e,t.high=Math.floor(e/4294967296),t},e.GetTimeStampWithValue=function(e){var t=new Microsoft.Bond.Int64("0");return t.low=4294967295&e,t.high=Math.floor(e/4294967296),t},e}();t.utils=n,function(e){e[e.NotSet=0]="NotSet",e[e.Event=1]="Event",e[e.PerformanceCounter=2]="PerformanceCounter",e[e.Anomaly=3]="Anomaly",e[e.Prediction=4]="Prediction",e[e.TraceLog=5]="TraceLog",e[e.EventSourceLog=6]="EventSourceLog",e[e.HttpLog=7]="HttpLog",e[e.PerformanceCounterAzure=8]="PerformanceCounterAzure",e[e.PerformanceCounterGfs=9]="PerformanceCounterGfs"}(t.RecordType||(t.RecordType={}));t.RecordType;!function(e){e[e.NotSet=0]="NotSet",e[e.O365=1]="O365",e[e.SkypeBI=2]="SkypeBI",e[e.SkypeData=3]="SkypeData"}(t.PIIScrubber||(t.PIIScrubber={}));t.PIIScrubber;!function(e){e[e.NotSet=0]="NotSet",e[e.DistinguishedName=1]="DistinguishedName",e[e.GenericData=2]="GenericData",e[e.IPV4Address=3]="IPV4Address",e[e.IPv6Address=4]="IPv6Address",e[e.MailSubject=5]="MailSubject",e[e.PhoneNumber=6]="PhoneNumber",e[e.QueryString=7]="QueryString",e[e.SipAddress=8]="SipAddress",e[e.SmtpAddress=9]="SmtpAddress",e[e.Identity=10]="Identity",e[e.Uri=11]="Uri",e[e.Fqdn=12]="Fqdn",e[e.IPV4AddressLegacy=13]="IPV4AddressLegacy"}(t.PIIKind||(t.PIIKind={}));t.PIIKind;!function(e){e[e.Unknown=0]="Unknown",e[e.MSACID=1]="MSACID",e[e.MSAPUID=2]="MSAPUID",e[e.ANID=3]="ANID",e[e.OrgIdCID=4]="OrgIdCID",e[e.OrgIdPUID=5]="OrgIdPUID",e[e.UserObjectId=6]="UserObjectId",e[e.Skype=7]="Skype",e[e.Yammer=8]="Yammer",e[e.EmailAddress=9]="EmailAddress",e[e.PhoneNumber=10]="PhoneNumber",e[e.SipAddress=11]="SipAddress",e[e.MUID=12]="MUID"}(t.UserIdType||(t.UserIdType={}));var i=(t.UserIdType,function(){function t(){this.ScrubType=e.datamodels.PIIScrubber.NotSet,this.Kind=e.datamodels.PIIKind.NotSet,this.RawContent=""}return t.prototype.Write=function(e){this.WriteImpl(e,!1)},t.prototype.WriteImpl=function(t,n){t.WriteStructBegin(null,n),this.ScrubType!=e.datamodels.PIIScrubber.NotSet?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32,1,null),t.WriteInt32(this.ScrubType),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32,1,null),this.Kind!=e.datamodels.PIIKind.NotSet?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32,2,null),t.WriteInt32(this.Kind),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32,2,null),""!=this.RawContent?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING,3,null),t.WriteString(this.RawContent),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING,3,null),t.WriteStructEnd(n)},t.prototype.Read=function(e){this.ReadImpl(e,!1)},t.prototype.ReadImpl=function(e,t){},t}());t.PII=i;var r=function(){function t(){this.Id=n.GetGuid(),this.Timestamp=n.GetTimeStamp(),this.Type="",this.EventType="",this.Extension=new Microsoft.Bond.Collections.Map,this.RecordType=e.datamodels.RecordType.NotSet,this.PIIExtensions=new Microsoft.Bond.Collections.Map}return t.prototype.AddOrReplacePII=function(t,n,i){var r=new e.datamodels.PII;r.RawContent=n,r.Kind=i,r.ScrubType=e.datamodels.PIIScrubber.O365,this.PIIExtensions.AddOrReplace(t,r)},t.prototype.Write=function(e){this.WriteImpl(e,!1)},t.prototype.WriteImpl=function(t,n){if(t.WriteStructBegin(null,n),""!=this.Id?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING,1,null),t.WriteString(this.Id),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING,1,null),this.Timestamp.Equals("0")?t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT64,3,null):(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT64,3,null),t.WriteInt64(this.Timestamp),t.WriteFieldEnd()),""!=this.Type?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING,5,null),t.WriteString(this.Type),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING,5,null),""!=this.EventType?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING,6,null),t.WriteString(this.EventType),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING,6,null),this.Extension.Count()){t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_MAP,13,null),t.WriteMapContainerBegin(this.Extension.Count(),Microsoft.Bond.BondDataType.BT_STRING,Microsoft.Bond.BondDataType.BT_STRING);for(var i=0;i<this.Extension.GetBuffer().length;++i)t.WriteString(this.Extension.GetBuffer()[i].Key),t.WriteString(this.Extension.GetBuffer()[i].Value);t.WriteContainerEnd(),t.WriteFieldEnd()}else t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_MAP,13,null);if(this.RecordType!=e.datamodels.RecordType.NotSet?(t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32,24,null),t.WriteInt32(this.RecordType),t.WriteFieldEnd()):t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32,24,null),this.PIIExtensions.Count()){t.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_MAP,30,null),t.WriteMapContainerBegin(this.PIIExtensions.Count(),Microsoft.Bond.BondDataType.BT_STRING,Microsoft.Bond.BondDataType.BT_STRUCT);for(var r=0;r<this.PIIExtensions.GetBuffer().length;++r)t.WriteString(this.PIIExtensions.GetBuffer()[r].Key),this.PIIExtensions.GetBuffer()[r].Value.WriteImpl(t,!1);t.WriteContainerEnd(),t.WriteFieldEnd()}else t.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_MAP,30,null);t.WriteStructEnd(n)},t.prototype.Read=function(e){this.ReadImpl(e,!1)},t.prototype.ReadImpl=function(e,t){},t}();t.Record=r;var o=function(){function e(){this.Source="",this.DataPackageId="",this.Timestamp=new Microsoft.Bond.Int64("0"),this.Records=[]}return e.prototype.Write=function(e){this.WriteImpl(e,!1)},e.prototype.WriteImpl=function(e,t){if(e.WriteStructBegin(null,t),""!=this.Source?(e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING,2,null),e.WriteString(this.Source),e.WriteFieldEnd()):e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING,2,null),""!=this.DataPackageId?(e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_STRING,5,null),e.WriteString(this.DataPackageId),e.WriteFieldEnd()):e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_STRING,5,null),this.Timestamp.Equals("0")?e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT64,6,null):(e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT64,6,null),e.WriteInt64(this.Timestamp),e.WriteFieldEnd()),this.Records.length){e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_LIST,8,null),e.WriteContainerBegin(this.Records.length,Microsoft.Bond.BondDataType.BT_STRUCT);for(var n=0;n<this.Records.length;++n)this.Records[n].WriteImpl(e,!1);e.WriteContainerEnd(),e.WriteFieldEnd()}else e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_LIST,8,null);e.WriteStructEnd(t)},e.prototype.Read=function(e){this.ReadImpl(e,!1)},e.prototype.ReadImpl=function(e,t){},e}();t.DataPackage=o;var s=function(){function e(){this.DataPackages=[],this.RequestRetryCount=0}return e.prototype.Write=function(e){this.WriteImpl(e,!1)},e.prototype.WriteImpl=function(e,t){if(e.WriteStructBegin(null,t),this.DataPackages.length){e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_LIST,1,null),e.WriteContainerBegin(this.DataPackages.length,Microsoft.Bond.BondDataType.BT_STRUCT);for(var n=0;n<this.DataPackages.length;++n)this.DataPackages[n].WriteImpl(e,!1);e.WriteContainerEnd(),e.WriteFieldEnd()}else e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_LIST,1,null);0!=this.RequestRetryCount?(e.WriteFieldBegin(Microsoft.Bond.BondDataType.BT_INT32,2,null),e.WriteInt32(this.RequestRetryCount),e.WriteFieldEnd()):e.WriteFieldOmitted(Microsoft.Bond.BondDataType.BT_INT32,2,null),e.WriteStructEnd(t)},e.prototype.Read=function(e){this.ReadImpl(e,!1)},e.prototype.ReadImpl=function(e,t){},e}();t.ClientToCollectorRequest=s}(t=e.datamodels||(e.datamodels={}))}(t=e.telemetry||(e.telemetry={}))}(t=e.applications||(e.applications={}))}(microsoft||(microsoft={}));var microsoft;!function(e){var t;!function(e){var t;!function(e){var t;!function(t){!function(e){e[e.SENT=0]="SENT",e[e.SEND_FAILED=1]="SEND_FAILED"}(t.CallbackEventType||(t.CallbackEventType={}));var n=t.CallbackEventType;!function(e){e[e.DATARV_ERROR_OK=0]="DATARV_ERROR_OK",e[e.DATARV_ERROR_INVALID_EVENT=1]="DATARV_ERROR_INVALID_EVENT",e[e.DATARV_ERROR_INVALID_CONFIG=2]="DATARV_ERROR_INVALID_CONFIG",e[e.DATARV_ERROR_INVALID_DEPENDENCIES=3]="DATARV_ERROR_INVALID_DEPENDENCIES",e[e.DATARV_ERROR_INVALID_STATUS=4]="DATARV_ERROR_INVALID_STATUS",e[e.DATARV_ERROR_INVALID_ARG=5]="DATARV_ERROR_INVALID_ARG"}(t.DATARV_ERROR||(t.DATARV_ERROR={}));var i=t.DATARV_ERROR,r=function(){function e(e){this._errorCode=i.DATARV_ERROR_OK,this._errorCode=e}return e.prototype.ErrorCode=function(){return this._errorCode},e.prototype.toString=function(){switch(this._errorCode){case i.DATARV_ERROR_OK:return"DATARV_ERROR_OK";case i.DATARV_ERROR_INVALID_EVENT:return"Event is invalid. Either event.Id is empty, or event.Timestamp is empty, or event.EventType is empty.";case i.DATARV_ERROR_INVALID_CONFIG:return"Invalid configuration. CollectorUrl is missing.";case i.DATARV_ERROR_INVALID_DEPENDENCIES:return"DATARV_ERROR_INVALID_DEPENDENCIES";case i.DATARV_ERROR_INVALID_STATUS:return"Telemetry Manager is not initialized.";case i.DATARV_ERROR_INVALID_ARG:return"TenantToken is null or empty, or events is null.";default:return"Unknown error"}},e}();t.Exception=r;var o=function(){function e(){}return e}();t.TelemetryConfig=o;var s=function(){function e(){}return e.CreateTelemetryManager=function(){return new d},e}();t.TelemetryManagerFactory=s;var a,u=function(){function e(){}return e.MaxPackageSizeInBytes=function(){return 3e6},e.TimeIntervalForNextSendInMS=function(){return 1e3},e}();!function(e){e[e.Created=0]="Created",e[e.Initialized=1]="Initialized",e[e.Started=2]="Started"}(a||(a={}));var d=function(){function t(){this._MaxPackageSizeInBytes=u.MaxPackageSizeInBytes(),this._listeners=[],this._status=a.Created,this._etag=null,this._testServerResponseHook=null,this._isPaused=!1}return t.prototype.Initialize=function(e){if(this._status!=a.Created)throw new r(i.DATARV_ERROR_INVALID_STATUS);if(!e||!e.collectorUrl)throw new r(i.DATARV_ERROR_INVALID_CONFIG);this._config=e,this._Reset(),this._status=a.Initialized,this._Verbose("Initialize() done")},t.prototype.AddListener=function(e){if(this._status<a.Initialized)throw new r(i.DATARV_ERROR_INVALID_STATUS);this._Verbose(["AddListener(), status: ",this._status," old length: ",this._listeners.length," func: ",e].join(""));for(var t=0;t<this._listeners.length;++t)if(this._listeners[t]==e)return void this._Verbose("the listener has been added already, index: "+t);this._listeners.push(e),this._Verbose("AddListener() done, the new length: "+this._listeners.length)},t.prototype.RemoveListener=function(e){if(this._status<a.Initialized)throw new r(i.DATARV_ERROR_INVALID_STATUS);this._Verbose(["RemoveListener(), status: ",this._status," old length: ",this._listeners.length," func: ",e].join(""));for(var t=0;t<this._listeners.length;++t)if(this._listeners[t]==e)return 1==this._listeners.length?this._listeners=[]:t==this._listeners.length-1?this._listeners.pop():this._listeners[t]=this._listeners.pop(),void this._Verbose(["this listener has been found, index: ",t,"new length: ",this._listeners.length].join(""));this._Verbose("listener isn't been found, new length"+this._listeners.length)},t.prototype.Start=function(){if(this._status<a.Initialized)throw new r(i.DATARV_ERROR_INVALID_STATUS);this._Verbose(["Start(), status:",this._status,"tag:",t._tag].join(" ")),this._status>=a.Started&&this._Verbose("Start() already, ignore"),++t._tag,this._status=a.Started,this._Verbose(["Start() done, status: ",this._status,"tag: ",t._tag].join(""))},t.prototype.Stop=function(){if(this._status<a.Initialized)throw new r(i.DATARV_ERROR_INVALID_STATUS);return this._Verbose("Stop(), status: "+this._status),this._status==a.Initialized?void this._Verbose("Stop() already, ignore"):(this._Reset(),this._status=a.Initialized,void this._Verbose("Stop() done, status: "+this._status))},t.prototype.Pause=function(){this._isPaused=!0,this._CleanTimer()},t.prototype.Resume=function(){this._isPaused=!1,this._eventsCache.IsEmpty()||this._timer||this._ScheduleTimer(!1)},t.prototype.Flush=function(e){this._eventsCache.IsEmpty()||this._WorkThread(e,!0)},t.prototype.SendAsync=function(e,n){if(this._status<a.Initialized)throw new r(i.DATARV_ERROR_INVALID_STATUS);if(this._Verbose(["SendAsync(), status:",this._status,"tenantToken:",e,"count:",n.length].join(" ")),this._status<a.Started)return this._Info("SendAsync(), not started, ignore, return false"),!1;if(!e||!n)throw this._Error("SendAsync(), tenantToken or events is null or empty"),new r(i.DATARV_ERROR_INVALID_ARG);for(var o=0;o<n.length;++o)if(!n[o].Id||!t._eventTypeRegex.test(n[o].EventType)||n[o].Timestamp.Equals("0"))throw this._Error(["eventId:",n[o].Id,"eventType:",n[o].EventType,"timestamp high:",n[o].Timestamp.high,"timestamp low:",n[o].Timestamp.low].join("")),new r(i.DATARV_ERROR_INVALID_EVENT);return this._eventsCache.AddEvents(e,n),this._Verbose(["SendAsync(), currentTimer: ",this._timer,"eventsCacheIsEmpty",this._eventsCache.IsEmpty()].join(" ")),this._eventsCache.IsEmpty()||this._timer||this._ScheduleTimer(!1),this._Verbose("SendAsync() done"),!0},t.prototype._WorkThread=function(e,n){var i=this;try{if(this._Verbose("_WorkThread, status: "+this._status),this._status<a.Started)return void this._Verbose("_WorkThread, status is not started, return");var r=this._eventsCache.DequeuEvents();if(null==r)return this._Verbose("_WorkThread, No events found, return"),void this._CleanTimer();var o=this._PackEvents(r.tenantToken,r.events);if(this._eventsCache.AddEvents(r.tenantToken,o.remainedEvents),null==o.buffer||0==o.buffer.length)return void(this._eventsCache.IsEmpty()?(this._Verbose("eventsCache is empty, stop schedule"),this._CleanTimer()):(this._Verbose("eventsCache is not empty, schedule for next run"),this._ScheduleTimer(!1)));if(this._testServerResponseHook){var s=this._testServerResponseHook();return void setTimeout(this._SendCallback(d,r.tenantToken,o.sendEvents,s,!1,null),100)}var u={type:"POST",url:this._config.collectorUrl,processData:!1,headers:{"content-type":"application/bond-compact-binary","client-id":"NO_AUTH","sdk-version":"ACT-Web-JS-"+clienttelemetry_build.version},complete:function(t){return i._SendCallback(d,r.tenantToken,o.sendEvents,t,n,e)}};sct.Utils.IsUint8ArrSupported()?(this._Verbose("Uint8Array is defined, send with binary format directly."),u.data=new Uint8Array(o.buffer)):(this._Verbose("Uint8Array is undefined, send with base64 encode."),u.data=Microsoft.Bond.Encoding.Base64.GetString(o.buffer),u.headers["content-encoding"]="base64"),r.tenantToken&&(u.headers["x-apikey"]=r.tenantToken);var d=t._tag;this._lastActiveTime=(new Date).getTime(),sct.Utils.ajax(u,n),this._Verbose("_Workthread, send via jquery, tag: "+d)}catch(e){this._Error("_WorkThread, exception: "+e)}},t.prototype._PackEvents=function(t,n){this._Verbose("_PackageEvents, total Count: "+n.length);var i=new e.datamodels.ClientToCollectorRequest,r=new e.datamodels.DataPackage;r.Source="JS_default_source",r.DataPackageId=e.datamodels.utils.GetGuid(),r.Timestamp=e.datamodels.utils.GetTimeStamp();var o,s=n;for(n=[];;){if(r.Records=[],r.Records.push.apply(r.Records,s),i.DataPackages=[],i.DataPackages.push(r),o=this._Serialize(i),this._Verbose(["_PackageEvents, sendEvents.length:",s.length,"buffer.length:",o.length,"MaxPackageSize:",this._MaxPackageSizeInBytes].join("")),o.length<this._MaxPackageSizeInBytes)break;if(1==s.length){s=[],o=null;break}var a=s.splice(0,Math.floor(s.length/2));this._Verbose("_PackageEvents, too large, package again"),n.push.apply(n,s),s=a}return this._Verbose(["_PakcageEvents done, sendEventsCount:",s.length,"buffer.length:",null==o?0:o.length,"remained events:",n.length].join("")),{buffer:o,sendEvents:s,remainedEvents:n}},t.prototype._Serialize=function(e){var t=new Microsoft.Bond.IO.MemoryStream,n=new Microsoft.Bond.CompactBinaryProtocolWriter(t);return e.Write(n),t.GetBuffer()},t.prototype._SendCallback=function(e,i,r,o,s,u){if(this._Verbose(["_SendCallback","tag:",e,"current tag:",t._tag,"tenantToken:",i,"events count:",r.length,"jqXHR:",o].join("")),u&&u(o?o.status:0,i,r),!s){var d=null!=o&&o.status>=200&&o.status<300;if(this._status<a.Started||e<t._tag)return void this._Verbose("_SendCallback, is not started, or tag is not the same, return");if(!d&&(!o||o.status&&400!=o.status))return this._Verbose("retry statusCode: "+(o?o.status:0)),this._eventsCache.AddEvents(i,r),void this._ScheduleTimer(!0);for(var c=0;c<this._listeners.length;++c)this._listeners[c](d?n.SENT:n.SEND_FAILED,o?o.status:0,i,r);this._eventsCache.IsEmpty()?(this._Verbose("eventsCache is empty, stop schedule"),this._CleanTimer()):(this._Verbose("eventsCache is not empty, schedule for next run"),this._ScheduleTimer(!1))}},t.prototype._CleanTimer=function(){
this._Verbose("_CleanTimer(), timer: "+this._timer),this._timer&&(clearTimeout(this._timer),this._timer=null)},t.prototype._ScheduleTimer=function(e){var t=this;if(!this._isPaused)if(this._Verbose("_ScheduleTimer: isRetry: "+e),this._CleanTimer(),e){this._Verbose("_ScheduleTimer, current factor: "+this._rescheduleFactor);var n=Math.floor(5*this._rescheduleFactor*(1+Math.random()));this._timer=setTimeout(function(){return t._WorkThread(null,!1)},1e3*n),this._Verbose("_ScheduleTimer, next try (s): "+n),this._rescheduleFactor<<=1,this._rescheduleFactor>64&&(this._rescheduleFactor=1)}else{var n=0,i=(new Date).getTime(),r=i-this._lastActiveTime;n=r>u.TimeIntervalForNextSendInMS()?0:u.TimeIntervalForNextSendInMS()-r,this._timer=setTimeout(function(){return t._WorkThread(null,!1)},n),this._Verbose("_ScheduleTimer, next try: "+n),this._rescheduleFactor=1}},t.prototype._Verbose=function(e){this._config.log&&this._config.log.Verbose("[TelemetryManagerImpl]: "+e)},t.prototype._Info=function(e){this._config.log&&this._config.log.Info("[TelemetryManagerImpl]: "+e)},t.prototype._Error=function(e){this._config.log&&this._config.log.Error("[TelemetryManagerImpl]: "+e)},t.prototype._Reset=function(){this._Verbose("Reset()"),this._CleanTimer(),this._lastActiveTime=0,this._rescheduleFactor=1,this._sendingEvents=[],this._eventsCache=new c},t.prototype.__GetListenerArray=function(){return this._listeners},t.prototype.__GetTotalEventsCount=function(){return this._eventsCache.GetTotalEventsCount()},t.prototype.__IsScheduled=function(){return null!=this._timer},t.prototype.__ChageMaxPackageSizeInKB=function(e){this._MaxPackageSizeInBytes=1024*e},t.prototype.__SetTestServerResponseHook=function(e){this._testServerResponseHook=e},t._eventTypeRegex=/^[a-zA-Z0-9]([a-zA-Z0-9]|_){2,98}[a-zA-Z0-9]$/,t._tag=0,t}(),c=function(){function e(){this._events={},this._tokens=[]}return e.prototype.AddEvents=function(e,t){t.length&&(this._events[e]||(this._events[e]=[],this._tokens.push(e)),this._events[e].push.apply(this._events[e],t))},e.prototype.IsEmpty=function(){return 0==this._tokens.length},e.prototype.DequeuEvents=function(){if(0==this._tokens.length)return null;var e=this._tokens.shift(),t=this._events[e];return delete this._events[e],{tenantToken:e,events:t}},e.prototype.GetTotalEventsCount=function(){var e=0;for(var t in this._events)e+=this._events[t].length;return e},e}()}(t=e._sender||(e._sender={}))}(t=e.telemetry||(e.telemetry={}))}(t=e.applications||(e.applications={}))}(microsoft||(microsoft={}));var microsoft;!function(e){var t;!function(t){var n;!function(t){var n=t._sender.TelemetryManagerFactory.CreateTelemetryManager(),i=function(){function e(){this.collectorUrl=null,this.enableAutoUserSession=!1,this.browserOverrides=new r}return e}();t.LogConfiguration=i;var r=function(){function e(){this.onSaveData=null,this.onGetData=null}return e}();t.LogConfigurationBrowserOverrides=r;var o=function(){function e(){this.value=null,this.pii=null}return e._isPii=function(e){return null!==e&&void 0!==e&&e!==t.datamodels.PIIKind.NotSet&&!isNaN(e)&&void 0!==t.datamodels.PIIKind[e]},e}(),s=function(){function e(){this.name=null,this.timestamp=null,this.properties={},this.eventType=null}return e.prototype.setProperty=function(n,i,r){if(!n||!e._propertyNameRegex.test(n))throw new u(a.INVALID_PROPERTY_NAME);r?this.properties[n]={value:i,pii:r!=t.datamodels.PIIKind.NotSet?r:null}:this.properties[n]={value:i,pii:null}},e._propertyNameRegex=/^[a-zA-Z0-9](([a-zA-Z0-9|_|\.]){0,98}[a-zA-Z0-9])?$/,e}();t.EventProperties=s,function(e){e[e.INVALID_TENANT_TOKEN=1]="INVALID_TENANT_TOKEN",e[e.MISSING_EVENT_PROPERTIES_NAME=2]="MISSING_EVENT_PROPERTIES_NAME",e[e.INVALID_PROPERTY_NAME=3]="INVALID_PROPERTY_NAME",e[e.MISSING_FAILURE_SIGNATURE=5]="MISSING_FAILURE_SIGNATURE",e[e.MISSING_FAILURE_DETAIL=6]="MISSING_FAILURE_DETAIL",e[e.MISSING_PAGEVIEW_ID=7]="MISSING_PAGEVIEW_ID",e[e.MISSING_PAGEVIEW_NAME=8]="MISSING_PAGEVIEW_NAME",e[e.INVALID_SESSION_STATE=9]="INVALID_SESSION_STATE",e[e.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET=10]="INVALID_CONFIGURATION_USE_CUSTOM_GET_SET"}(t.TelemetryError||(t.TelemetryError={}));var a=t.TelemetryError,u=function(){function e(e){this.errorCode=null,this.errorCode=e}return e.prototype.ErrorCode=function(){return this.errorCode},e.prototype.toString=function(){switch(this.errorCode){case a.INVALID_TENANT_TOKEN:return"Invalid tenant token";case a.MISSING_EVENT_PROPERTIES_NAME:return"Eventproperties.name can not be null or empty";case a.INVALID_PROPERTY_NAME:return"Invalid Key. Key does not conform to regular expression ^[a-zA-Z0-9](([a-zA-Z0-9|_|.]){0,98}[a-zA-Z0-9])?$";case a.MISSING_FAILURE_SIGNATURE:return"Failure signature can't be null or empty.";case a.MISSING_FAILURE_DETAIL:return"Failure detail can't be null or empty.";case a.MISSING_PAGEVIEW_ID:return"Pageview id can't be null or empty.";case a.MISSING_PAGEVIEW_NAME:return"Pageview name can't be null or empty.";case a.INVALID_SESSION_STATE:return"Session state has to be a value from the SessionState enum.";case a.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET:return"Invalid configuration provided during initialization. Both onGetConfigData and onSaveConfigData must be provided together.  These are manditory when running in a non-brower enviornment";default:return"Unknown error"}},e}();t.Exception=u;var d=function(){function n(e){this.contextMap={},this.piiKind=t.datamodels.PIIKind.NotSet,this._allowDeviceInfoFields=!1,this._allowDeviceInfoFields=e}return n.prototype.setAppId=function(e){e&&(this.contextMap["AppInfo.Id"]=e)},n.prototype.setAppVersion=function(e){e&&(this.contextMap["AppInfo.Version"]=e)},n.prototype.setAppLanguage=function(e){e&&(this.contextMap["AppInfo.Language"]=e)},n.prototype.setDeviceId=function(e){e&&this._allowDeviceInfoFields&&(this.contextMap["DeviceInfo.Id"]=e,c.checkAndUpdateDeviceId(e))},n.prototype.setDeviceOsName=function(e){e&&this._allowDeviceInfoFields&&(this.contextMap["DeviceInfo.OsName"]=e)},n.prototype.setDeviceOsVersion=function(e){e&&this._allowDeviceInfoFields&&(this.contextMap["DeviceInfo.OsVersion"]=e)},n.prototype.setDeviceBrowserName=function(e){e&&this._allowDeviceInfoFields&&(this.contextMap["DeviceInfo.BrowserName"]=e)},n.prototype.setDeviceBrowserVersion=function(e){e&&this._allowDeviceInfoFields&&(this.contextMap["DeviceInfo.BrowserVersion"]=e)},n.prototype.setUserId=function(t,n,i){if(t&&(this.contextMap["UserInfo.Id"]=t),i)this.contextMap["UserInfo.IdType"]=i;else{var r;switch(n){case e.applications.telemetry.datamodels.PIIKind.SipAddress:r=e.applications.telemetry.datamodels.UserIdType.SipAddress;break;case e.applications.telemetry.datamodels.PIIKind.PhoneNumber:r=e.applications.telemetry.datamodels.UserIdType.PhoneNumber;break;case e.applications.telemetry.datamodels.PIIKind.SmtpAddress:r=e.applications.telemetry.datamodels.UserIdType.EmailAddress;break;default:r=e.applications.telemetry.datamodels.UserIdType.Unknown}this.contextMap["UserInfo.IdType"]=r}if(n)o._isPii(n)&&(this.piiKind=n);else{var s;switch(i){case e.applications.telemetry.datamodels.UserIdType.Skype:s=e.applications.telemetry.datamodels.PIIKind.Identity;break;case e.applications.telemetry.datamodels.UserIdType.EmailAddress:s=e.applications.telemetry.datamodels.PIIKind.SmtpAddress;break;case e.applications.telemetry.datamodels.UserIdType.PhoneNumber:s=e.applications.telemetry.datamodels.PIIKind.PhoneNumber;break;case e.applications.telemetry.datamodels.UserIdType.SipAddress:s=e.applications.telemetry.datamodels.PIIKind.SipAddress;break;default:s=e.applications.telemetry.datamodels.PIIKind.NotSet}o._isPii(s)&&(this.piiKind=s)}},n.prototype.setUserMsaId=function(e){e&&(this.contextMap["UserInfo.MsaId"]=e)},n.prototype.setUserANID=function(e){e&&(this.contextMap["UserInfo.ANID"]=e)},n.prototype.setUserAdvertisingId=function(e){e&&(this.contextMap["UserInfo.AdvertisingId"]=e)},n.prototype.setUserTimeZone=function(e){e&&(this.contextMap["UserInfo.TimeZone"]=e)},n.prototype.setUserLanguage=function(e){e&&(this.contextMap["UserInfo.Language"]=e)},n}();t.SemanticContext=d;var c=function(){function e(){}return e.initialize=function(n){this._overrides=n;var i=e._getAppLanguage();i&&e.semanticContext.setAppLanguage(i);var r=e._getUserLanguage();r&&e.semanticContext.setUserLanguage(r);var o=(new Date).getTimezoneOffset(),s=o%60,a=(o-s)/60,u="+";a>0&&(u="-"),a=Math.abs(a),s=Math.abs(s),e.semanticContext.setUserTimeZone(u+(a<10?"0"+a:a.toString())+":"+(s<10?"0"+s:s.toString()));var d=e._getUserAgent();d&&(e.semanticContext.setDeviceBrowserName(e._getBrowserName()),e.semanticContext.setDeviceBrowserVersion(e._getBrowserVersion()),e.semanticContext.setDeviceOsName(e._getOsName()),e.semanticContext.setDeviceOsVersion(e._getOsVersion()));var c=e._getData(e.DEVICE_ID_COOKIE);c&&""!=c||(c=t.datamodels.utils.GetGuid()),e.semanticContext.setDeviceId(c)},e.checkAndUpdateDeviceId=function(t){var n=e._getData(e.DEVICE_ID_COOKIE);n!=t&&(e._saveData(e.DEVICE_ID_COOKIE,t),e._saveData(e.FIRST_LAUNCH_TIME_COOKIE,(new Date).getTime().toString()));var i=e._getData(e.FIRST_LAUNCH_TIME_COOKIE);e.firstLaunchTime=parseInt(i)},e._saveData=function(e,t){if(this._overrides.onSaveData)this._overrides.onSaveData(e,t);else if("undefined"!=typeof document&&document.cookie){var n="expires=Mon, 31 Dec 2029 23:59:59 GMT";document.cookie=e+"="+t+"; "+n}},e._getData=function(e){if(this._overrides.onGetData)return this._overrides.onGetData(e)||"";if("undefined"!=typeof document&&document.cookie)for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var r=n[i],o=0;" "==r.charAt(o);)o++;if(r=r.substring(o),0==r.indexOf(t))return r.substring(t.length,r.length)}return""},e._getUserAgent=function(){return"undefined"!=typeof navigator?navigator.userAgent||"":""},e._getAppLanguage=function(){return"undefined"!=typeof document&&document.documentElement?document.documentElement.lang:null},e._getUserLanguage=function(){return"undefined"!=typeof navigator?navigator.userLanguage||navigator.language:null},e._userAgentContainsString=function(t){return e._getUserAgent().indexOf(t)>-1},e._isIe=function(){return e._userAgentContainsString("Trident")},e._isEdge=function(){return e._userAgentContainsString(e.BROWSERS.EDGE)},e._isOpera=function(){return e._userAgentContainsString("OPR/")},e._getBrowserName=function(){return e._isOpera()?e.BROWSERS.UNKNOWN:e._userAgentContainsString(e.BROWSERS.PHANTOMJS)?e.BROWSERS.PHANTOMJS:e._isEdge()?e.BROWSERS.EDGE:e._userAgentContainsString(e.BROWSERS.ELECTRON)?e.BROWSERS.ELECTRON:e._userAgentContainsString(e.BROWSERS.CHROME)?e.BROWSERS.CHROME:e._userAgentContainsString(e.BROWSERS.FIREFOX)?e.BROWSERS.FIREFOX:e._userAgentContainsString(e.BROWSERS.SAFARI)?e.BROWSERS.SAFARI:e._userAgentContainsString(e.BROWSERS.SKYPE_SHELL)?e.BROWSERS.SKYPE_SHELL:e._isIe()?e.BROWSERS.MSIE:e.BROWSERS.UNKNOWN},e._getBrowserVersion=function(){function t(){var t,n=e._getUserAgent(),i=n.match(new RegExp(e.BROWSERS.MSIE+" "+e.REGEX_VERSION));return i?i[1]:(t=n.match(new RegExp("rv:"+e.REGEX_VERSION)))?t[1]:void 0}function n(t){var n;return t===e.BROWSERS.SAFARI&&(t="Version"),n=e._getUserAgent().match(new RegExp(t+"/"+e.REGEX_VERSION)),n?n[1]:e.UNKNOWN_VERSION}return e._isIe()?t():n(e._getBrowserName())},e._getOsName=function(){var t=/(windows|win32)/i,n=/ arm;/i,i=/windows\sphone\s\d+\.\d+/i,r=/(macintosh|mac os x)/i,o=/(iPad|iPhone|iPod)(?=.*like Mac OS X)/i,s=/(linux|joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)/i,a=/android/i;return e._getUserAgent().match(i)?e.OPERATING_SYSTEMS.WINDOWS_PHONE:e._getUserAgent().match(n)?e.OPERATING_SYSTEMS.WINDOWS_RT:e._getUserAgent().match(o)?e.OPERATING_SYSTEMS.IOS:e._getUserAgent().match(a)?e.OPERATING_SYSTEMS.ANDROID:e._getUserAgent().match(s)?e.OPERATING_SYSTEMS.LINUX:e._getUserAgent().match(r)?e.OPERATING_SYSTEMS.MACOSX:e._getUserAgent().match(t)?e.OPERATING_SYSTEMS.WINDOWS:e.OPERATING_SYSTEMS.UNKNOWN},e._getOsVersion=function(){function t(){var t=e._getUserAgent().match(new RegExp("Windows NT "+e.REGEX_VERSION));return t&&e.VERSION_MAPPINGS[t[1]]?e.VERSION_MAPPINGS[t[1]]:e.UNKNOWN_VERSION}function n(){var t=e._getUserAgent().match(new RegExp(e.OPERATING_SYSTEMS.MACOSX+" "+e.REGEX_VERSION_MAC));if(t){var n=t[1].replace(/_/g,"."),r=[];if(n){var o=i(n);return o?(r=n.split(o),r[0]):n}}return e.UNKNOWN_VERSION}function i(e){return e.indexOf(".")>-1?".":e.indexOf("_")>-1?"_":null}return e._getOsName()===e.OPERATING_SYSTEMS.WINDOWS?t():e._getOsName()===e.OPERATING_SYSTEMS.MACOSX?n():e.UNKNOWN_VERSION},e.semanticContext=new d((!0)),e.firstLaunchTime=-1,e.BROWSERS={MSIE:"MSIE",CHROME:"Chrome",FIREFOX:"Firefox",SAFARI:"Safari",EDGE:"Edge",ELECTRON:"Electron",SKYPE_SHELL:"SkypeShell",PHANTOMJS:"PhantomJS",UNKNOWN:"Unknown"},e.OPERATING_SYSTEMS={WINDOWS:"Windows",MACOSX:"Mac OS X",WINDOWS_PHONE:"Windows Phone",WINDOWS_RT:"Windows RT",IOS:"iOS",ANDROID:"Android",LINUX:"Linux",UNKNOWN:"Unknown"},e.VERSION_MAPPINGS={5.1:"XP","6.0":"Vista",6.1:"7",6.2:"8",6.3:"8.1","10.0":"10"},e.REGEX_VERSION="([\\d,.]+)",e.REGEX_VERSION_MAC="([\\d,_,.]+)",e.UNKNOWN_VERSION="Unknown",e.DEVICE_ID_COOKIE="MicrosoftApplicationsTelemetryDeviceId",e.FIRST_LAUNCH_TIME_COOKIE="MicrosoftApplicationsTelemetryFirstLaunchTime",e}();!function(e){e[e.STARTED=0]="STARTED",e[e.ENDED=1]="ENDED"}(t.SessionState||(t.SessionState={}));var l=t.SessionState,_=function(){function e(){}return e.initialize=function(t,i){if(!e._initialized){if(!t)throw new u(a.INVALID_TENANT_TOKEN);if(e._defaultToken=t,e._tmConfig.collectorUrl="https://browser.pipe.aria.microsoft.com/Collector/3.0/",e._configuration=i,!("undefined"!=typeof window||i&&i.browserOverrides&&i.browserOverrides.onGetData))throw new u(a.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);var o=new r;if(i&&(i.collectorUrl&&(e._tmConfig.collectorUrl=i.collectorUrl),i.browserOverrides)){if(i.browserOverrides.onGetData?!i.browserOverrides.onSaveData:!!i.browserOverrides.onSaveData)throw new u(a.INVALID_CONFIGURATION_USE_CUSTOM_GET_SET);o.onGetData=i.browserOverrides.onGetData,o.onSaveData=i.browserOverrides.onSaveData}n.Initialize(e._tmConfig),n.Start(),c.initialize(o),e._initialized=!0,"undefined"!=typeof window&&window.addEventListener&&(i&&i.enableAutoUserSession&&(e._logger=new f,e._logger.logSession(l.STARTED)),window.addEventListener("beforeunload",e._teardown))}},e.pauseTransmission=function(){n.Pause()},e.resumeTransmission=function(){n.Resume()},e.flush=function(e){n.Flush(e)},e.addCallbackListener=function(t){e._initialized&&n.AddListener(t)},e.setContext=function(t,n,i){e._contextProperties.setProperty(t,n,i)},e.isInitialized=function(){return e._initialized},e.getDefaultToken=function(){return e._defaultToken},e.getSemanticContext=function(){return e._semanticContext},e._getInitIdForToken=function(n){return e._initIdMap[n]||(e._initIdMap[n]=t.datamodels.utils.GetGuid()),e._initIdMap[n]},e._getSequenceForToken=function(t){return e._sequenceMap[t]||(e._sequenceMap[t]=0),e._sequenceMap[t]++,e._sequenceMap[t]},e._teardown=function(){e._logger&&e._logger.logSession(l.ENDED),e.flush()},e.__backToUninitialized=function(){e._tmConfig=new t._sender.TelemetryConfig,e._semanticContext=new d((!0)),e._contextProperties=new s,e._configuration=null,n=t._sender.TelemetryManagerFactory.CreateTelemetryManager(),e._initialized=!1,e._initIdMap={},e._sequenceMap={}},e._initialized=!1,e._defaultToken=null,e._tmConfig=new t._sender.TelemetryConfig,e._logger=null,e._initIdMap={},e._sequenceMap={},e._configuration=null,e._contextProperties=new s,e._semanticContext=new d((!0)),e}();t.LogManager=_;var f=function(){function e(e){this._initId=null,this._tenantToken=null,this._contextProperties=new s,this._semanticContext=new d((!1)),this._sessionStartTime=0,this._sessionId=null,e?this._tenantToken=e:this._tenantToken=_.getDefaultToken(),this._initId=_._getInitIdForToken(this._tenantToken)}return e.prototype.logEvent=function(e){if(!e.name)throw new u(a.MISSING_EVENT_PROPERTIES_NAME);var t=this._createEventRecord(e.name,e.eventType);this._addPropertiesAndSendEvent(t,e)},e.prototype.logFailure=function(e,t,n,i,r){if(!e)throw new u(a.MISSING_FAILURE_SIGNATURE);if(!t)throw new u(a.MISSING_FAILURE_DETAIL);var o=this._createEventRecord("failure","failure");o.Extension.Add("Failure.Signature",e),o.Extension.Add("Failure.Detail",t),n&&o.Extension.Add("Failure.Category",n),i&&o.Extension.Add("Failure.Id",i),this._addPropertiesAndSendEvent(o,r)},e.prototype.logPageView=function(e,t,n,i,r,o){if(!e)throw new u(a.MISSING_PAGEVIEW_ID);if(!t)throw new u(a.MISSING_PAGEVIEW_NAME);var s=this._createEventRecord("pageview","pageview");s.Extension.Add("PageView.Id",e),s.Extension.Add("PageView.Name",t),n&&s.Extension.Add("PageView.Category",n),i&&s.Extension.Add("PageView.Uri",i),r&&s.Extension.Add("PageView.ReferrerUri",r),this._addPropertiesAndSendEvent(s,o)},e.prototype.logSession=function(e,n){if(e!==l.STARTED&&e!==l.ENDED)throw new u(a.INVALID_SESSION_STATE);var i=this._createEventRecord("session","session");if(e===l.STARTED){if(this._sessionStartTime>0)return;this._sessionStartTime=(new Date).getTime(),this._sessionId=t.datamodels.utils.GetGuid(),i.Extension.Add("Session.Id",this._sessionId),i.Extension.Add("Session.State","Started")}else if(e===l.ENDED){if(0==this._sessionStartTime)return;var r=Math.floor(((new Date).getTime()-this._sessionStartTime)/1e3);i.Extension.Add("Session.Duration",r.toString()),i.Extension.Add("Session.DurationBucket",this._getSessionDurationFromTime(r)),i.Extension.Add("Session.Id",this._sessionId),i.Extension.Add("Session.State","Ended"),this._sessionId=null,this._sessionStartTime=0}i.Extension.Add("Session.FirstLaunchTime",this._getISOString(new Date(c.firstLaunchTime))),this._addPropertiesAndSendEvent(i,n)},e.prototype.getSessionId=function(){return this._sessionId},e.prototype.setContext=function(e,t,n){this._contextProperties.setProperty(e,t,n)},e.prototype.getSemanticContext=function(){return this._semanticContext},e.prototype._getSessionDurationFromTime=function(e){return e<0?"Undefined":e<=3?"UpTo3Sec":e<=10?"UpTo10Sec":e<=30?"UpTo30Sec":e<=60?"UpTo60Sec":e<=180?"UpTo3Min":e<=600?"UpTo10Min":e<=1800?"UpTo30Min":"Above30Min"},e.prototype._createEventRecord=function(e,n){var i=new t.datamodels.Record;n||(n="custom"),i.EventType=e.toLowerCase(),i.Type=n.toLowerCase(),i.Extension.Add("EventInfo.Source","JS_default_source"),i.Extension.Add("EventInfo.InitId",this._initId),i.Extension.Add("EventInfo.Sequence",_._getSequenceForToken(this._tenantToken).toString()),i.Extension.Add("EventInfo.Name",e.toLowerCase());var r=new Date;return i.Timestamp=t.datamodels.utils.GetTimeStampWithValue(r.getTime()),i.Extension.Add("EventInfo.Time",this._getISOString(r)),i.Extension.Add("EventInfo.SdkVersion","ACT-Web-JS-"+clienttelemetry_build.version),i},e.prototype._getISOString=function(e){function t(e){return e<10?"0"+e:e.toString()}function n(e){return e<10?"00"+e:e<100?"0"+e:e.toString()}return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+n(e.getUTCMilliseconds())+"Z"},e.prototype._addCustomPropertiesToEvent=function(e,t){this._addSemanticContext(e,c.semanticContext),this._addSemanticContext(e,_._semanticContext),this._addSemanticContext(e,this._semanticContext),this._sessionId&&e.Extension.Add("Session.Id",this._sessionId),this._addEventPropertiesToEvent(e,_._contextProperties),this._addEventPropertiesToEvent(e,this._contextProperties),this._addEventPropertiesToEvent(e,t)},e.prototype._addSemanticContext=function(e,n){if(n&&n.contextMap){var i=n.contextMap;for(var r in n.contextMap)"UserInfo.Id"==r&&n.piiKind!=t.datamodels.PIIKind.NotSet?e.AddOrReplacePII(r,i[r],n.piiKind):e.Extension.AddOrReplace(r,i[r])}},e.prototype._addEventPropertiesToEvent=function(e,n){if(n){n.timestamp&&n.timestamp>=new Date("1/1/2000").getTime()&&(e.Timestamp=t.datamodels.utils.GetTimeStampWithValue(n.timestamp),e.Extension.AddOrReplace("EventInfo.Time",this._getISOString(new Date(n.timestamp)))),n.name&&(e.EventType=n.name.toLowerCase(),e.Extension.AddOrReplace("EventInfo.Name",n.name.toLowerCase()));var i=n.properties;if(i)for(var r in i)r&&(i[r].value||i[r].value===!1||0==i[r].value||""==i[r].value)&&(o._isPii(i[r].pii)?(e.AddOrReplacePII(r,i[r].value.toString(),i[r].pii),e.Extension.Remove(r)):(e.Extension.AddOrReplace(r,i[r].value.toString()),e.PIIExtensions.Remove(r)))}},e.prototype._addPropertiesAndSendEvent=function(e,t){this._addCustomPropertiesToEvent(e,t),_.isInitialized()&&(this._sanitizeName(e),n.SendAsync(this._tenantToken,[e]))},e.prototype._sanitizeName=function(e){var t=e.EventType.replace(/\./g,"_");e.EventType=t,e.Extension.AddOrReplace("EventInfo.Name",t)},e}();t.Logger=f}(n=t.telemetry||(t.telemetry={}))}(t=e.applications||(e.applications={}))}(microsoft||(microsoft={})),"undefined"!=typeof module&&(module.exports=microsoft.applications.telemetry);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.LogManager=e()}}(function(){var e;return function(){function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}return e}()({1:[function(e,t,n){"use strict";var r;!function(e){e[e.Bookmarklet=0]="Bookmarklet",e[e.ChromeExtension=1]="ChromeExtension",e[e.EdgeExtension=2]="EdgeExtension",e[e.FirefoxExtension=3]="FirefoxExtension",e[e.SafariExtension=4]="SafariExtension"}(r=n.ClientType||(n.ClientType={}))},{}],2:[function(e,t,n){"use strict";var r,o=e("../extensions/invokeSource");!function(e){e[e.ChangeLog=0]="ChangeLog",e[e.Pdf=1]="Pdf",e[e.Product=2]="Product",e[e.Recipe=3]="Recipe",e[e.Video=4]="Video",e[e.WhatsNew=5]="WhatsNew"}(r=n.TooltipType||(n.TooltipType={}));var i;!function(e){function t(e){switch(e){case r.Pdf:return o.InvokeSource.PdfTooltip;case r.Product:return o.InvokeSource.ProductTooltip;case r.Recipe:return o.InvokeSource.RecipeTooltip;case r.Video:return o.InvokeSource.VideoTooltip;case r.WhatsNew:return o.InvokeSource.WhatsNewTooltip;default:throw Error("Invalid TooltipType passed in TooltipType.toInvokeSource")}}e.toInvokeSource=t}(i=n.TooltipTypeUtils||(n.TooltipTypeUtils={}))},{"../extensions/invokeSource":5}],3:[function(e,t,n){"use strict";var r=function(){function e(e){this.subscriptions=[],this.t=e}return e.prototype.subscribe=function(e,t){void 0===t&&(t={}),void 0===t.times&&(t.times=1/0),void 0===t.callOnSubscribe&&(t.callOnSubscribe=!0),t.callOnSubscribe&&e(this.t),t.times>0&&this.subscriptions.push({func:e,times:t.times})},e.prototype.unsubscribe=function(e){for(var t=0;t<this.subscriptions.length;t++)if(e===this.subscriptions[t].func)return void this.subscriptions.splice(t,1)},e.prototype.set=function(e){return this.t!==e&&(this.t=e,this.notifySubscribers()),this},e.prototype.get=function(){return this.t},e.prototype.forceUpdate=function(){this.notifySubscribers()},e.prototype.equals=function(e){return this.t===e},e.prototype.toString=function(){return this.t?this.t.toString():"undefined"},e.prototype.notifySubscribers=function(){for(var e=this.subscriptions.length,t=0;t<e;t++){this.subscriptions[t].times--,this.subscriptions[t].func(this.t);var n=this.subscriptions[t]&&0===this.subscriptions[t].times;n&&this.subscriptions.splice(t,1),this.subscriptions[t]&&!n||(e--,t--)}},e.subscribe=function(e,t){for(var n=0;n<e.length;n++)e[n].subscribe(function(){for(var n=[],r=0;r<e.length;r++)n.push(e[r].get());t.apply(this,n)})},e}();n.SmartValue=r},{}],4:[function(e,t,n){"use strict";var r;!function(e){var t;!function(e){e.heightAnimator="height-animator",e.panelAnimator="panel-animator",e.clearfix="clearfix",e.change="change",e.changes="changes",e.changeBody="change-body",e.changeDescription="change-description",e.changeImage="change-image",e.changeTitle="change-title",e.checkboxCheck="checkboxCheck",e.textAreaInput="textAreaInput",e.textAreaInputMirror="textAreaInputMirror",e.popover="popover",e.popoverArrow="popover-arrow",e.deleteHighlightButton="delete-highlight",e.highlightable="highlightable",e.highlighted="highlighted",e.regionSelection="region-selection",e.regionSelectionImage="region-selection-image",e.regionSelectionRemoveButton="region-selection-remove-button",e.attachmentOverlay="attachment-overlay",e.centeredInCanvas="centered-in-canvas",e.overlay="overlay",e.overlayHidden="overlay-hidden",e.overlayNumber="overlay-number",e.pdfPreviewImage="pdf-preview-image",e.pdfPreviewImageCanvas="pdf-preview-image-canvas",e.unselected="unselected",e.localPdfPanelTitle="local-pdf-panel-title",e.localPdfPanelSubtitle="local-pdf-panel-subtitle",e.radioIndicatorFill="radio-indicator-fill",e.spinner="spinner",e.srOnly="sr-only",e.tooltip="tooltip",e.centeredInPreview="centered-in-preview"}(t=e.Classes||(e.Classes={}));var n;!function(e){e.clipperInfo="ClipperInfo"}(n=e.Cookies||(e.Cookies={}));var r;!function(e){var t;!function(e){e.conflictingExtension="conflictingExtension"}(t=e.NotificationIds||(e.NotificationIds={}))}(r=e.Extension||(e.Extension={}));var o;!function(e){e.annotationContainer="annotationContainer",e.annotationField="annotationField",e.annotationFieldMirror="annotationFieldMirror",e.annotationPlaceholder="annotationPlaceholder",e.bookmarkThumbnail="bookmarkThumbnail",e.bookmarkPreviewContentContainer="bookmarkPreviewContentContainer",e.bookmarkPreviewInnerContainer="bookmarkPreviewInnerContainer",e.clipperApiProgressContainer="clipperApiProgressContainer",e.clipProgressDelayedMessage="clipProgressDelayedMessage",e.clipProgressIndicatorMessage="clipProgressIndicatorMessage",e.dialogBackButton="dialogBackButton",e.dialogButtonContainer="dialogButtonContainer",e.dialogDebugMessageContainer="dialogDebugMessageContainer",e.dialogMessageContainer="dialogMessageContainer",e.dialogContentContainer="dialogContentContainer",e.dialogMessage="dialogMessage",e.dialogSignOutButton="dialogSignoutButton",e.dialogTryAgainButton="dialogTryAgainButton",e.highlightablePreviewBody="highlightablePreviewBody",e.apiErrorMessage="apiErrorMessage",e.backToHomeButton="backToHomeButton",e.clipperFailureContainer="clipperFailureContainer",e.refreshPageButton="refreshPageButton",e.tryAgainButton="tryAgainButton",e.clipperFooterContainer="clipperFooterContainer",e.currentUserControl="currentUserControl",e.currentUserDetails="currentUserDetails",e.currentUserEmail="currentUserEmail",e.currentUserId="currentUserId",e.currentUserName="currentUserName",e.feedbackButton="feedbackButton",e.feedbackImage="feedbackImage",e.signOutButton="signOutButton",e.userDropdownArrow="userDropdownArrow",e.userSettingsContainer="userSettingsContainer",e.feedbackLabel="feedbackLabel",e.footerButtonsContainer="footerButtonsContainer",e.clipperLoadingContainer="clipperLoadingContainer",e.closeButton="closeButton",e.closeButtonContainer="closeButtonContainer",e.mainController="mainController",e.saveToLocationContainer="saveToLocationContainer",e.clipButton="clipButton",e.clipButtonContainer="clipButtonContainer",e.optionLabel="optionLabel",e.radioAllPagesLabel="radioAllPagesLabel",e.radioPageRangeLabel="radioPageRangeLabel",e.rangeInput="rangeInput",e.previewBody="previewBody",e.previewContentContainer="previewContentContainer",e.previewHeader="previewHeader",e.previewHeaderContainer="previewHeaderContainer",e.previewHeaderInput="previewHeaderInput",e.previewHeaderInputMirror="previewHeaderInputMirror",e.previewTitleContainer="previewTitleContainer",e.previewSubtitleContainer="previewSubtitleContainer",e.previewInnerContainer="previewInnerContainer",e.previewAriaLiveDiv="previewAriaLiveDiv",e.previewOptionsContainer="previewOptionsContainer",e.previewInnerWrapper="previewInnerWrapper",e.previewOuterContainer="previewOuterContainer",e.previewUrlContainer="previewUrlContainer",e.previewNotesContainer="previewNotesContainer",e.fullPageControl="fullPageControl",e.fullPageHeaderTitle="fullPageHeaderTitle",e.localPdfFileTitle="localPdfFileTitle",e.pdfControl="pdfControl",e.pdfHeaderTitle="pdfHeaderTitle",e.pageRangeControl="pageRangeControl",e.checkboxToDistributePages="checkboxToDistributePages",e.pdfIsTooLargeToAttachIndicator="pdfIsTooLargeToAttachIndicator",e.checkboxToAttachPdf="checkboxToAttachPdf",e.moreClipOptions="moreClipOptions",e.addAnotherRegionButton="addAnotherRegionButton",e.addRegionControl="addRegionControl",e.regionControl="regionControl",e.regionHeaderTitle="regionHeaderTitle",e.decrementFontSize="decrementFontSize",e.fontSizeControl="fontSizeControl",e.highlightButton="highlightButton",e.highlightControl="highlightControl",e.incrementFontSize="incrementFontSize",e.serifControl="serifControl",e.sansSerif="sansSerif",e.serif="serif",e.bookmarkControl="bookmarkControl",e.bookmarkHeaderTitle="bookmarkHeaderTitle",e.ratingsButtonFeedbackNo="ratingsButtonFeedbackNo",e.ratingsButtonFeedbackYes="ratingsButtonFeedbackYes",e.ratingsButtonInitNo="ratingsButtonInitNo",e.ratingsButtonInitYes="ratingsButtonInitYes",e.ratingsButtonRateNo="ratingsButtonRateNo",e.ratingsButtonRateYes="ratingsButtonRateYes",e.ratingsPromptContainer="ratingsPromptContainer",e.regionInstructionsContainer="regionInstructionsContainer",e.regionClipCancelButton="regionClipCancelButton",e.innerFrame="innerFrame",e.outerFrame="outerFrame",e.regionSelectorContainer="regionSelectorContainer",e.spinnerText="spinnerText",e.locationPickerContainer="locationPickerContainer",e.sectionLocationContainer="sectionLocationContainer",e.signInButtonMsa="signInButtonMsa",e.signInButtonOrgId="signInButtonOrgId",e.signInContainer="signInContainer",e.signInErrorCookieInformation="signInErrorCookieInformation",e.signInErrorDebugInformation="signInErrorDebugInformation",e.signInErrorDebugInformationDescription="signInErrorDebugInformationDescription",e.signInErrorDebugInformationContainer="signInErrorDebugInformationContainer",e.signInErrorDebugInformationList="signInErrorDebugInformationList",e.signInErrorDescription="signInErrorDescription",e.signInErrorDescriptionContainer="signInErrorDescriptionContainer",e.signInErrorMoreInformation="signInErrorMoreInformation",e.signInLogo="signInLogo",e.signInMessageLabelContainer="signInMessageLabelContainer",e.signInText="signInText",e.signInToggleErrorDropdownArrow="signInToggleErrorDropdownArrow",e.signInToggleErrorInformationText="signInToggleErrorInformationText",e.clipperSuccessContainer="clipperSuccessContainer",e.launchOneNoteButton="launchOneNoteButton",e.pageNavAnimatedTooltip="pageNavAnimatedTooltip",e.unsupportedBrowserContainer="unsupportedBrowserContainer",e.unsupportedBrowserPanel="unsupportedBrowserPanel",e.changeLogSubPanel="changeLogSubPanel",e.checkOutWhatsNewButton="checkOutWhatsNewButton",e.proceedToWebClipperButton="proceedToWebClipperButton",e.whatsNewTitleSubPanel="whatsNewTitleSubPanel",e.clipperRootScript="oneNoteCaptureRootScript",e.clipperUiFrame="oneNoteWebClipper",e.clipperPageNavFrame="oneNoteWebClipperPageNav",e.clipperExtFrame="oneNoteWebClipperExtension",e.brandingContainer="brandingContainer"}(o=e.Ids||(e.Ids={}));var i;!function(e){e.accept="Accept",e.appIdKey="MS-Int-AppId",e.correlationId="X-CorrelationId",e.noAuthKey="X-NoAuth",e.userSessionIdKey="X-UserSessionId"}(i=e.HeaderValues||(e.HeaderValues={}));var a;!function(e){e.debugLoggingInjectedAndExtension="DEBUGLOGGINGINJECTED_AND_EXTENSION",e.extensionAndUi="EXTENSION_AND_UI",e.injectedAndUi="INJECTED_AND_UI",e.injectedAndExtension="INJECTED_AND_EXTENSION",e.extensionAndPageNavUi="EXTENSION_AND_PAGENAVUI",e.pageNavInjectedAndPageNavUi="PAGENAVINJECTED_AND_PAGENAVUI",e.pageNavInjectedAndExtension="PAGENAVINJECTED_AND_EXTENSION"}(a=e.CommunicationChannels||(e.CommunicationChannels={}));var s;!function(e){e.clipperStrings="CLIPPER_STRINGS",e.clipperStringsFrontLoaded="CLIPPER_STRINGS_FRONT_LOADED",e.closePageNavTooltip="CLOSE_PAGE_NAV_TOOLTIP",e.createHiddenIFrame="CREATE_HIDDEN_IFRAME",e.ensureFreshUserBeforeClip="ENSURE_FRESH_USER_BEFORE_CLIP",e.escHandler="ESC_HANDLER",e.getInitialUser="GET_INITIAL_USER",e.getPageNavTooltipProps="GET_PAGE_NAV_TOOLTIP_PROPS",e.getStorageValue="GET_STORAGE_VALUE",e.getMultipleStorageValues="GET_MULTIPLE_STORAGE_VALUES",e.getTooltipToRenderInPageNav="GET_TOOLTIP_TO_RENDER_IN_PAGE_NAV",e.hideUi="HIDE_UI",e.invokeClipper="INVOKE_CLIPPER",e.invokeClipperFromPageNav="INVOKE_CLIPPER_FROM_PAGE_NAV",e.invokeDebugLogging="INVOKE_DEBUG_LOGGING",e.invokePageNav="INVOKE_PAGE_NAV",e.extensionNotAllowedToAccessLocalFiles="EXTENSION_NOT_ALLOWED_TO_ACCESS_LOCAL_FILES",e.noOpTracker="NO_OP_TRACKER",e.onSpaNavigate="ON_SPA_NAVIGATE",e.refreshPage="REFRESH_PAGE",e.showRefreshClipperMessage="SHOW_REFRESH_CLIPPER_MESSAGE",e.setInjectOptions="SET_INJECT_OPTIONS",e.setInvokeOptions="SET_INVOKE_OPTIONS",e.setStorageValue="SET_STORAGE_VALUE",e.signInUser="SIGN_IN_USER",e.signOutUser="SIGN_OUT_USER",e.tabToLowestIndexedElement="TAB_TO_LOWEST_INDEXED_ELEMENT",e.takeTabScreenshot="TAKE_TAB_SCREENSHOT",e.telemetry="TELEMETRY",e.toggleClipper="TOGGLE_CLIPPER",e.unloadHandler="UNLOAD_HANDLER",e.updateFrameHeight="UPDATE_FRAME_HEIGHT",e.updatePageInfoIfUrlChanged="UPDATE_PAGE_INFO_IF_URL_CHANGED"}(s=e.FunctionKeys||(e.FunctionKeys={}));var u;!function(e){e.tab=9,e.enter=13,e.esc=27,e.c=67,e.down=40,e.up=38,e.left=37,e.right=39,e.space=32,e.home=36,e.end=35}(u=e.KeyCodes||(e.KeyCodes={}));var l;!function(e){e.c="KeyC"}(l=e.StringKeyCodes||(e.StringKeyCodes={}));var c;!function(e){e.clientInfo="CLIENT_INFO",e.isFullScreen="IS_FULL_SCREEN",e.pageInfo="PAGE_INFO",e.sessionId="SESSION_ID",e.user="USER"}(c=e.SmartValueKeys||(e.SmartValueKeys={}));var p;!function(e){e.sectionPickerContainerHeight=280,e.clipperUiWidth=322,e.customCursorSize=20,e.clipperUiTopRightOffset=20,e.clipperUiDropShadowBuffer=7,e.clipperUiInnerPadding=30;var t;!function(e){e.oneNoteHighlightColor="#fefe56"}(t=e.Colors||(e.Colors={}))}(p=e.Styles||(e.Styles={}));var f;!function(e){e.serviceDomain="https://www.onenote.com",e.augmentationApiUrl=e.serviceDomain+"/onaugmentation/clipperextract/v1.0/",e.changelogUrl=e.serviceDomain+"/whatsnext/webclipper",e.clipperFeedbackUrl=e.serviceDomain+"/feedback",e.clipperInstallPageUrl=e.serviceDomain+"/clipper/installed",e.fullPageScreenshotUrl=e.serviceDomain+"/onaugmentation/clipperDomEnhancer/v1.0/",e.localizedStringsUrlBase=e.serviceDomain+"/strings?ids=WebClipper.",e.msaDomain="https://login.live.com",e.orgIdDomain="https://login.microsoftonline.com";var t;!function(t){t.authRedirectUrl=e.serviceDomain+"/webclipper/auth",t.signInUrl=e.serviceDomain+"/webclipper/signin",t.signOutUrl=e.serviceDomain+"/webclipper/signout",t.userInformationUrl=e.serviceDomain+"/webclipper/userinfo"}(t=e.Authentication||(e.Authentication={}));var n;!function(e){e.authType="authType",e.category="category",e.changelogLocale="omkt",e.channel="channel",e.clientType="clientType",e.clipperId="clipperId",e.clipperVersion="clipperVersion",e.correlationId="correlationId",e.error="error",e.errorDescription="error_?description",e.event="event",e.eventName="eventName",e.failureId="failureId",e.failureInfo="failureInfo",e.failureType="failureType",e.inlineInstall="inlineInstall",e.label="label",e.noOpType="noOpType",e.stackTrace="stackTrace",e.timeoutInMs="timeoutInMs",e.url="url",e.userSessionId="userSessionId",e.wdFromClipper="wdfromclipper"}(n=e.QueryParams||(e.QueryParams={}))}(f=e.Urls||(e.Urls={}));var g;!function(e){e.oneNoteClipperUsage="OneNoteClipperUsage"}(g=e.LogCategories||(e.LogCategories={}));var h;!function(e){e.fontSizeStep=2,e.maxClipSuccessForRatingsPrompt=12,e.maximumJSTimeValue=864e13,e.maximumFontSize=72,e.maximumNumberOfTimesToShowTooltips=3,e.maximumMimeSizeLimit=249e5,e.minClipSuccessForRatingsPrompt=4,e.minimumFontSize=8,e.minTimeBetweenBadRatings=6048e6,e.noOpTrackerTimeoutDuration=2e4,e.numRetriesPerPatchRequest=3,e.pdfCheckCreatePageInterval=2e3,e.pdfClippingMessageDelay=5e3,e.pdfExtraPageLoadEachSide=1,e.pdfInitialPageLoadCount=3,e.timeBetweenDifferentTooltips=6048e5,e.timeBetweenSameTooltip=18144e5,e.timeBetweenTooltips=18144e5,e.timeUntilPdfPageNumbersFadeOutAfterScroll=1e3}(h=e.Settings||(e.Settings={}));var d;!function(e){e.setNameForArrowKeyNav="setnameforarrowkeynav"}(d=e.CustomHtmlAttributes||(e.CustomHtmlAttributes={}));var v;!function(e){e.modeButtonSet="ariaModeButtonSet",e.pdfPageSelection="pdfPageSelection",e.serifGroupSet="serifGroupSet"}(v=e.AriaSet||(e.AriaSet={}))}(r=n.Constants||(n.Constants={}))},{}],5:[function(e,t,n){"use strict";var r;!function(e){e[e.Bookmarklet=0]="Bookmarklet",e[e.ContextMenu=1]="ContextMenu",e[e.ExtensionButton=2]="ExtensionButton",e[e.WhatsNewTooltip=3]="WhatsNewTooltip",e[e.PdfTooltip=4]="PdfTooltip",e[e.ProductTooltip=5]="ProductTooltip",e[e.RecipeTooltip=6]="RecipeTooltip",e[e.VideoTooltip=7]="VideoTooltip"}(r=n.InvokeSource||(n.InvokeSource={}))},{}],6:[function(e,t,n){"use strict";var r;!function(t){function n(e){if(!e)throw new Error("stringId must be a non-empty string, but was: "+e);if(u){var t=u[e];if(t)return t}var n=c[e];if(n)return n;throw new Error("getLocalizedString could not find a localized or fallback string: "+e)}function r(e){u=e}function o(e){return"font-family: "+i(e)+";"}function i(e){if(l[e])return l[e];var t="WebClipper.FontFamily."+s[e].toString(),r=n(t);return l[e]=a(r),l[e]}function a(e){if(!e)return"";for(var t=e.split(","),n=0;n<t.length;n++)t[n]=t[n].trim(),t[n].length>0&&t[n].indexOf(" ")>=0&&"'"!==t[n][0]&&"'"!==t[n][t.length-1]&&(t[n]="'"+t[n]+"'");return t.join(",")}var s;!function(e){e[e.Regular=0]="Regular",e[e.Bold=1]="Bold",e[e.Light=2]="Light",e[e.Semibold=3]="Semibold",e[e.Semilight=4]="Semilight"}(s=t.FontFamily||(t.FontFamily={}));var u,l={},c=e("../../strings.json");t.getLocalizedString=n,t.setLocalizedStrings=r,t.getFontFamilyAsStyle=o,t.getFontFamily=i,t.formatFontFamily=a}(r=n.Localization||(n.Localization={}))},{"../../strings.json":40}],7:[function(e,t,n){"use strict";var r=e("./log"),o=function(){function e(){}return e.prototype.logJsonParseUnexpected=function(e){this.logFailure(r.Failure.Label.JsonParse,r.Failure.Type.Unexpected,void 0,e)},e}();n.Logger=o},{"./log":15}],8:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../objectUtils"),i=e("../settings"),a=e("./log"),s=e("./loggerDecorator"),u=e("./logHelpers"),l=microsoft.applications.telemetry.EventProperties,c=function(e){function t(t,n){var r=e.call(this,n)||this;microsoft.applications.telemetry.LogManager.getDefaultToken()||microsoft.applications.telemetry.LogManager.initialize(t),r.logger=new microsoft.applications.telemetry.Logger,r.semanticContext=r.logger.getSemanticContext();var o="Debug console logger is ON - now logging to both Aria ("+i.Settings.getSetting("Misc_Data_Endpoint_Id").toUpperCase()+") and console.";return e.prototype.logTrace.call(r,a.Trace.Label.DebugMode,a.Trace.Level.Information,o),r}return r(t,e),t.prototype.generateSessionId=function(){return this.logger.getSessionId()},t.prototype.outputClickEvent=function(e){var t=u.LogHelpers.createClickEventAsJson(e),n=this.createEventProperties(t);this.logger.logEvent(n)},t.prototype.outputEvent=function(e){var t=u.LogHelpers.createLogEventAsJson(e),n=this.createEventProperties(t);this.logger.logEvent(n)},t.prototype.outputSessionStart=function(){var e=u.LogHelpers.createSessionStartEventAsJson(),t=this.createEventProperties(e);this.logger.logSession(a.Session.State.Started,t)},t.prototype.outputSessionEnd=function(e){var t=u.LogHelpers.createSessionEndEventAsJson(e),n=this.createEventProperties(t);this.logger.logSession(a.Session.State.Ended,n)},t.prototype.outputFailure=function(e,t,n,r){var o=u.LogHelpers.createFailureEventAsJson(e,t,n,r),i=this.createEventProperties(o);this.logger.logEvent(i)},t.prototype.outputUserFunnel=function(e){var t=u.LogHelpers.createFunnelEventAsJson(e),n=this.createEventProperties(t);this.logger.logEvent(n)},t.prototype.outputTrace=function(e,t,n){var r=u.LogHelpers.createTraceEventAsJson(e,t,n),o=this.createEventProperties(r);this.logger.logEvent(o)},t.prototype.outputSetContext=function(e,t){switch(e){case a.Context.Custom.AppInfoId:this.semanticContext.setAppId(t);break;case a.Context.Custom.AppInfoVersion:this.semanticContext.setAppVersion(t);break;case a.Context.Custom.DeviceInfoId:microsoft.applications.telemetry.LogManager.getSemanticContext().setDeviceId(t);break;case a.Context.Custom.UserInfoId:this.semanticContext.setUserId(t,0);break;case a.Context.Custom.UserInfoLanguage:this.semanticContext.setUserLanguage(t);break;case a.Context.Custom.SessionId:break;default:this.logger.setContext(a.Context.toString(e),t)}},t.prototype.onNavigateAway=function(){microsoft.applications.telemetry.LogManager.flush()},t.prototype.createEventProperties=function(e){var t=new l;for(var n in e)if(e.hasOwnProperty(n)){if(n===a.PropertyName.Reserved.EventType){t.name=e[n].toString();continue}var r=o.ObjectUtils.isNullOrUndefined(e[n])?a.unknownValue:e[n].toString();t.setProperty(n,r)}return t},t.prototype.formatUserLanguage=function(e){return e?e.replace("_","-"):void 0},t}(s.LoggerDecorator);n.AriaLoggerDecorator=c},{"../objectUtils":34,"../settings":36,"./log":15,"./logHelpers":16,"./loggerDecorator":19}],9:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./communicatorLoggerPure"),i=e("./loggerDecorator"),a=function(e){function t(t,n){var r=e.call(this,{component:n})||this;return r.pureLogger=new o.CommunicatorLoggerPure(t),r}return r(t,e),t.prototype.outputEvent=function(e){this.pureLogger.logEvent(e)},t.prototype.outputFailure=function(e,t,n,r){this.pureLogger.logFailure(e,t,n,r)},t.prototype.outputUserFunnel=function(e){this.pureLogger.logUserFunnel(e)},t.prototype.outputSessionStart=function(){this.pureLogger.logSessionStart()},t.prototype.outputSessionEnd=function(e){this.pureLogger.logSessionEnd(e)},t.prototype.outputTrace=function(e,t,n){this.pureLogger.logTrace(e,t,n)},t.prototype.outputClickEvent=function(e){this.pureLogger.logClickEvent(e)},t.prototype.outputSetContext=function(e,t){this.pureLogger.setContextProperty(e,t)},t}(i.LoggerDecorator);n.CommunicatorLoggerDecorator=a},{"./communicatorLoggerPure":10,"./loggerDecorator":19}],10:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../constants"),i=e("./log"),a=e("./logger"),s=function(e){function t(t){var n=e.call(this)||this;return n.communicator=t,n}return r(t,e),t.prototype.logEvent=function(e){e.timerWasStopped()||e.stopTimer(),this.sendDataPackage(i.LogMethods.LogEvent,[e.getEventCategory(),e.getEventData()])},t.prototype.logFailure=function(e,t,n,r){this.sendDataPackage(i.LogMethods.LogFailure,arguments)},t.prototype.logUserFunnel=function(e){this.sendDataPackage(i.LogMethods.LogFunnel,arguments)},t.prototype.logSessionStart=function(){this.sendDataPackage(i.LogMethods.LogSessionStart,arguments)},t.prototype.logSessionEnd=function(e){this.sendDataPackage(i.LogMethods.LogSessionEnd,arguments)},t.prototype.logTrace=function(e,t,n){n?this.sendDataPackage(i.LogMethods.LogTrace,[e,t,n]):this.sendDataPackage(i.LogMethods.LogTrace,[e,t])},t.prototype.pushToStream=function(e,t){this.sendDataPackage(i.LogMethods.PushToStream,arguments)},t.prototype.logClickEvent=function(e){this.sendDataPackage(i.LogMethods.LogClickEvent,arguments)},t.prototype.setContextProperty=function(e,t){this.sendDataPackage(i.LogMethods.SetContextProperty,arguments)},t.prototype.sendDataPackage=function(e,t){var n={methodName:e,methodArgs:Object.keys(t).map(function(e){return t[e]})};this.communicator.callRemoteFunction(o.Constants.FunctionKeys.telemetry,{param:n})},t}(a.Logger);n.CommunicatorLoggerPure=s},{"../constants":4,"./log":15,"./logger":18}],11:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./consoleLoggerPure"),i=e("./loggerDecorator"),a=function(e){function t(t,n){var r=e.call(this,n)||this;return r.pureConsoleLogger=new o.ConsoleLoggerPure(t),r}return r(t,e),t.prototype.outputEvent=function(e){this.pureConsoleLogger.logEvent(e)},t.prototype.outputFailure=function(e,t,n,r){this.pureConsoleLogger.logFailure(e,t,n,r)},t.prototype.outputUserFunnel=function(e){this.pureConsoleLogger.logUserFunnel(e)},t.prototype.outputSessionStart=function(){this.pureConsoleLogger.logSessionStart()},t.prototype.outputSessionEnd=function(e){this.pureConsoleLogger.logSessionEnd(e)},t.prototype.outputTrace=function(e,t,n){this.pureConsoleLogger.logTrace(e,t,n)},t.prototype.outputClickEvent=function(e){this.pureConsoleLogger.logClickEvent(e)},t.prototype.outputSetContext=function(e,t){this.pureConsoleLogger.setContextProperty(e,t)},t}(i.LoggerDecorator);n.ConsoleLoggerDecorator=a},{"./consoleLoggerPure":12,"./loggerDecorator":19}],12:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./log"),i=e("./consoleLoggerShell"),a=e("./Logger"),s=e("./logHelpers"),u=function(e){function t(t){var n=e.call(this)||this;return n.consoleShell=new i.ConsoleLoggerShell(t),n}return r(t,e),t.prototype.logEvent=function(e){var t=s.LogHelpers.createLogEventAsJson(e);this.consoleShell.logToConsole(t)},t.prototype.logFailure=function(e,t,n,r){var o=s.LogHelpers.createFailureEventAsJson(e,t,n,r);this.consoleShell.logToConsole(o)},t.prototype.logUserFunnel=function(e){var t=s.LogHelpers.createFunnelEventAsJson(e);this.consoleShell.logToConsole(t)},t.prototype.logSessionStart=function(){var e=s.LogHelpers.createSessionStartEventAsJson();this.consoleShell.logToConsole(e)},t.prototype.logSessionEnd=function(e){var t=s.LogHelpers.createSessionEndEventAsJson(e);this.consoleShell.logToConsole(t)},t.prototype.logTrace=function(e,t,n){var r=s.LogHelpers.createTraceEventAsJson(e,t,n);this.consoleShell.logToConsole(r)},t.prototype.pushToStream=function(e,t){},t.prototype.logClickEvent=function(e){var t=s.LogHelpers.createClickEventAsJson(e);this.consoleShell.logToConsole(t)},t.prototype.setContextProperty=function(e,t){this.consoleShell.setContextProperty(o.Context.toString(e),t)},t}(a.Logger);n.ConsoleLoggerPure=u},{"./Logger":7,"./consoleLoggerShell":13,"./log":15,"./logHelpers":16}],13:[function(e,t,n){"use strict";var r=e("./log"),o=function(){function e(e){this.context={},this.consoleOutput=e}return e.prototype.logToConsole=function(e){if(!e)throw new Error("'event' argument to logToConsole was: "+e);var t=e[r.PropertyName.Reserved.Level];e[r.PropertyName.Reserved.Status]!==r.Status[r.Status.Failed]&&e[r.PropertyName.Reserved.Category]!==r.PropertyName.Reserved.WebClipper+"."+r.Failure.category||(t=r.Trace.Level[r.Trace.Level.Error]);var n=this.consoleOutput,o="";o+="["+e[r.PropertyName.Reserved.EventName]+"]",o+=t?" ["+t+"]":"",o+=r.PropertyName.Reserved.Message in e?" "+e[r.PropertyName.Reserved.Message]:"";var i=this.combineContextAndEvent(e);switch(r.Trace.Level[t]){case r.Trace.Level.Warning:n.warn(o,i);break;case r.Trace.Level.Error:n.error(o,i);break;case r.Trace.Level.Verbose:case r.Trace.Level.Information:n.info(o,i);break;default:n.log(o,i)}},e.prototype.setContextProperty=function(e,t){this.context[e]=t},e.prototype.combineContextAndEvent=function(e){var t={};for(var n in this.context)this.context.hasOwnProperty(n)&&(t[n]=this.context[n]);for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e}();n.ConsoleLoggerShell=o},{"./log":15}],14:[function(e,t,n){"use strict";var r=e("../objectUtils"),o=e("./log"),i=function(){function e(){}return e.prototype.requirementsAreMet=function(e){return!0},e}();n.NoRequirements=i;var a=function(){function e(e){this.prodProperties=[o.Context.toString(o.Context.Custom.AppInfoId),o.Context.toString(o.Context.Custom.AppInfoVersion),o.Context.toString(o.Context.Custom.BrowserLanguage),o.Context.toString(o.Context.Custom.ExtensionLifecycleId),o.Context.toString(o.Context.Custom.ClipperType),o.Context.toString(o.Context.Custom.DeviceInfoId),o.Context.toString(o.Context.Custom.FlightInfo),o.Context.toString(o.Context.Custom.InPrivateBrowsing)],this.requiredProperties=e?e:this.prodProperties}return e.prototype.requirementsAreMet=function(e){if(r.ObjectUtils.isNullOrUndefined(e))return!1;for(var t=0;t<this.requiredProperties.length;++t){var n=this.requiredProperties[t];if(!e.hasOwnProperty(n))return!1}return!0},e}();n.ProductionRequirements=a},{"../objectUtils":34,"./log":15}],15:[function(e,t,n){"use strict";function r(e,t){switch(e.methodName){case i.LogMethods.LogEvent:var n=e.methodArgs[0],r=e.methodArgs[1];t.logEvent.apply(t,[o.Event.createEvent(n,r)]);break;case i.LogMethods.LogFailure:t.logFailure.apply(t,e.methodArgs);break;case i.LogMethods.PushToStream:t.pushToStream.apply(t,e.methodArgs);break;case i.LogMethods.LogFunnel:t.logUserFunnel.apply(t,e.methodArgs);break;case i.LogMethods.LogSessionStart:t.logSessionStart.apply(t,e.methodArgs);break;case i.LogMethods.LogSessionEnd:t.logSessionEnd.apply(t,e.methodArgs);break;case i.LogMethods.LogClickEvent:t.logClickEvent.apply(t,e.methodArgs);break;case i.LogMethods.SetContextProperty:t.setContextProperty.apply(t,e.methodArgs);break;case i.LogMethods.LogTrace:default:t.logTrace.apply(t,e.methodArgs)}}var o=e("./submodules/event"),i=e("./submodules/logMethods");n.contextPropertyNameRegex=/^[a-zA-Z0-9](([a-zA-Z0-9|_]){0,98}[a-zA-Z0-9])?$/,n.enableConsoleLogging="enable_console_logging",n.reportData="ReportData",n.unknownValue="unknown",n.parseAndLogDataPackage=r;var a=e("./submodules/click");n.Click=a.Click;var s=e("./submodules/context");n.Context=s.Context;var u=e("./submodules/errorUtils");n.ErrorUtils=u.ErrorUtils;var l=e("./submodules/event");n.Event=l.Event;var c=e("./submodules/failure");n.Failure=c.Failure;var p=e("./submodules/funnel");n.Funnel=p.Funnel;var f=e("./submodules/logMethods");n.LogMethods=f.LogMethods;var g=e("./submodules/noop");n.NoOp=g.NoOp;var h=e("./submodules/propertyName");n.PropertyName=h.PropertyName;var d=e("./submodules/session");n.Session=d.Session;var v=e("./submodules/status");n.Status=v.Status;var m=e("./submodules/trace");n.Trace=m.Trace},{"./submodules/click":21,"./submodules/context":22,"./submodules/errorUtils":23,"./submodules/event":24,"./submodules/failure":25,"./submodules/funnel":26,"./submodules/logMethods":27,"./submodules/noop":28,"./submodules/propertyName":29,"./submodules/session":30,"./submodules/status":31,"./submodules/trace":32}],16:[function(e,t,n){"use strict";var r,o=e("./log");!function(e){function t(e,t){var n={};n[o.PropertyName.Reserved.EventType]=o.reportData,n[o.PropertyName.Reserved.Label]=t;var r=o.PropertyName.Reserved.WebClipper+"."+e;return n[o.PropertyName.Reserved.Category]=r,n[o.PropertyName.Reserved.EventName]=r+"."+t,n}function n(t){if(!t)throw new Error("Button clicked without an ID! Logged with ID "+JSON.stringify(t));var n=e.createBaseEventAsJson(o.Click.category,t);return n}function r(t){t.timerWasStopped()||t.stopTimer();var n=t.getEventCategory(),r=e.createBaseEventAsJson(o.Event.Category[n],t.getLabel());switch(r[o.PropertyName.Reserved.Duration]=t.getDuration(),g(r,t.getCustomProperties()),n){case o.Event.Category.BaseEvent:break;case o.Event.Category.PromiseEvent:i(r,t);break;case o.Event.Category.StreamEvent:a(r,t);break;default:throw new Error("createLogEvent does not specify a case for event category: "+o.Event.Category[n])}return r}function i(e,t){var n=t.getStatus();e[o.PropertyName.Reserved.Status]=n,n===o.Status[o.Status.Failed]&&(e[o.PropertyName.Reserved.FailureInfo]=t.getFailureInfo(),e[o.PropertyName.Reserved.FailureType]=t.getFailureType())}function a(e,t){e[o.PropertyName.Reserved.Stream]=JSON.stringify(t.getEventData().Stream)}function s(t,n){var r=new o.Event.BaseEvent(o.Event.Label.SetContextProperty),i=e.createBaseEventAsJson(o.Event.Category[r.getEventCategory()],r.getLabel()),a=o.Context.toString(t);return i[o.PropertyName.Custom[o.PropertyName.Custom.Key]]=a,i[o.PropertyName.Custom[o.PropertyName.Custom.Value]]=n,
i}function u(t,n,r,i){var a=e.createBaseEventAsJson(o.Failure.category,o.Failure.Label[t]);return a[o.PropertyName.Reserved.FailureType]=o.Failure.Type[n],r&&(a[o.PropertyName.Reserved.FailureInfo]=o.ErrorUtils.toString(r)),i&&(a[o.PropertyName.Reserved.Id]=i),a[o.PropertyName.Reserved.StackTrace]=o.Failure.getStackTrace(),a}function l(t){var n=e.createBaseEventAsJson(o.Funnel.category,o.Funnel.Label[t]);return n}function c(){var t=e.createBaseEventAsJson(o.Session.category,o.Session.State[o.Session.State.Started]);return t}function p(t){var n=e.createBaseEventAsJson(o.Session.category,o.Session.State[o.Session.State.Ended]);return n[o.PropertyName.Reserved.Trigger]=o.Session.EndTrigger[t],n}function f(t,n,r){var i=e.createBaseEventAsJson(o.Trace.category,o.Trace.Label[t]);switch(r&&(i[o.PropertyName.Reserved.Message]=r),i[o.PropertyName.Reserved.Level]=o.Trace.Level[n],n){case o.Trace.Level.Warning:i[o.PropertyName.Reserved.StackTrace]=o.Failure.getStackTrace()}return i}function g(e,t){if(e[o.PropertyName.Reserved.Status]===o.Status[o.Status.Failed]&&(e[o.PropertyName.Reserved.StackTrace]=o.Failure.getStackTrace()),t)for(var n in t)if(t.hasOwnProperty(n)){var r=void 0;r="object"==typeof t[n]?JSON.stringify(t[n]):t[n],e[n]=r}}function h(){try{if(localStorage.getItem(o.enableConsoleLogging))return!0}catch(e){}return!1}e.createBaseEventAsJson=t,e.createClickEventAsJson=n,e.createLogEventAsJson=r,e.createSetContextEventAsJson=s,e.createFailureEventAsJson=u,e.createFunnelEventAsJson=l,e.createSessionStartEventAsJson=c,e.createSessionEndEventAsJson=p,e.createTraceEventAsJson=f,e.addToLogEvent=g,e.isConsoleOutputEnabled=h}(r=n.LogHelpers||(n.LogHelpers={}))},{"./log":15}],17:[function(e,t,n){"use strict";function r(e,t){var n=a.Settings.getSetting("Aria_Token"),r=new h.ProductionRequirements;return t?o(n,r,t,e):new p.AriaLoggerDecorator(n,{contextStrategy:r,sessionId:e})}function o(e,t,n,r){var o=n?new l.CommunicatorLoggerDecorator(n):void 0,i=g.LogHelpers.isConsoleOutputEnabled()?new d.WebConsole:void 0,a=new f.ConsoleLoggerDecorator(i,{component:o});return new p.AriaLoggerDecorator(e,{contextStrategy:t,component:a,sessionId:r})}function i(e,t){var n=new XMLHttpRequest,r=c.PropertyName.Reserved.WebClipper+"."+e.category,o=a.Settings.getSetting("Misc_Data_Endpoint_Id"),i="https://www.onenote.com/webclipper/data/"+o;i=u.UrlUtils.addUrlQueryValue(i,s.Constants.Urls.QueryParams.event,c.reportData,t),i=u.UrlUtils.addUrlQueryValue(i,s.Constants.Urls.QueryParams.label,e.label,t),i=u.UrlUtils.addUrlQueryValue(i,s.Constants.Urls.QueryParams.category,r,t),i=u.UrlUtils.addUrlQueryValue(i,s.Constants.Urls.QueryParams.eventName,r+"."+e.label,t),i=u.UrlUtils.addUrlQueryValue(i,s.Constants.HeaderValues.appIdKey.replace(/-/g,""),a.Settings.getSetting("App_Id"),t);for(var l in e.properties)e.properties.hasOwnProperty(l)&&(i=u.UrlUtils.addUrlQueryValue(i,l,e.properties[l],t));n.open("GET",i),n.send()}var a=e("../settings"),s=e("../constants"),u=e("../urlUtils"),l=e("../logging/communicatorLoggerDecorator"),c=e("../logging/log"),p=e("../logging/ariaLoggerDecorator_internal"),f=e("../logging/consoleLoggerDecorator"),g=e("../logging/logHelpers"),h=e("../logging/context"),d=e("../logging/webConsole");n.createExtLogger=r,n.sendMiscLogRequest=i},{"../constants":4,"../logging/ariaLoggerDecorator_internal":8,"../logging/communicatorLoggerDecorator":9,"../logging/consoleLoggerDecorator":11,"../logging/context":14,"../logging/log":15,"../logging/logHelpers":16,"../logging/webConsole":33,"../settings":36,"../urlUtils":38}],18:[function(e,t,n){arguments[4][7][0].apply(n,arguments)},{"./log":15,dup:7}],19:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../stringUtils"),i=e("./log"),a=e("./sessionLogger"),s=function(e){function t(t){var n=this,r=t&&t.contextStrategy?t.contextStrategy:void 0,o=t&&t.sessionId?t.sessionId:void 0;return n=e.call(this,{contextStrategy:r,sessionId:o})||this,n.component=t?t.component:void 0,n}return r(t,e),t.prototype.generateSessionId=function(){},t.prototype.handleSetUserSessionId=function(e){var t,n=this.sessionId.get(),r=this.generateSessionId();return n?t=n:e?t=e:r&&(t=r),this.component&&t?this.component.handleSetUserSessionId(t):this.component&&!t?t=this.component.handleSetUserSessionId():this.component||t||(t=this.currentSessionState===i.Session.State.Started?"cccccccc-"+o.StringUtils.generateGuid().substring(9):void 0),this.sessionId.set(t),this.setContextPropertyPure(i.Context.Custom.SessionId,t),this.outputSetContext(i.Context.Custom.SessionId,t),t},t.prototype.handleClickEvent=function(e){this.outputClickEvent(e),this.component&&this.component.executeClickEvent(e)},t.prototype.handleEvent=function(e){this.handleEventPure(e),this.component&&this.component.logEvent(e)},t.prototype.handleEventPure=function(e){this.outputEvent(e)},t.prototype.handleSessionStart=function(){this.outputSessionStart(),this.component&&this.component.executeSessionStart()},t.prototype.handleSessionEnd=function(e){this.outputSessionEnd(e),this.component&&this.component.executeSessionEnd(e)},t.prototype.handleFailure=function(e,t,n,r){this.outputFailure(e,t,n,r),this.component&&this.component.logFailure(e,t,n,r)},t.prototype.handleUserFunnel=function(e){this.outputUserFunnel(e),this.component&&this.component.logUserFunnel(e)},t.prototype.handleTrace=function(e,t,n){this.outputTrace(e,t,n),this.component&&this.component.logTrace(e,t,n)},t.prototype.handleSetContext=function(e,t){this.outputSetContext(e,t),this.component&&this.component.setContextProperty(e,t)},t}(a.SessionLogger);n.LoggerDecorator=s},{"../stringUtils":37,"./log":15,"./sessionLogger":20}],20:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../communicator/smartValue"),i=e("../constants"),a=e("../objectUtils"),s=e("./log"),u=e("./logger"),l=function(e){function t(t){var n=e.call(this)||this;return n.contextProperties={},n.currentSessionState=s.Session.State.Ended,n.logQueue=[],n.streams={},n.userHasInteracted=!1,n.sessionId=void 0,n.sessionId=t&&t.sessionId?t.sessionId:new o.SmartValue,n.contextStrategy=t?t.contextStrategy:void 0,n}return r(t,e),t.prototype.hasUserInteracted=function(){return this.userHasInteracted},t.prototype.getUserSessionId=function(e){return this.sessionId.get()},t.prototype.sendFunnelInteractionEvent=function(e){var t=[i.Constants.Ids.signInButtonMsa,i.Constants.Ids.signInButtonOrgId,i.Constants.Ids.signOutButton,i.Constants.Ids.closeButton,i.Constants.Ids.clipButton,i.Constants.Ids.launchOneNoteButton,i.Constants.Ids.checkOutWhatsNewButton,i.Constants.Ids.proceedToWebClipperButton];this.hasUserInteracted()||t.indexOf(e)!==-1||(this.userHasInteracted=!0,this.logUserFunnel(s.Funnel.Label.Interact))},t.prototype.logEvent=function(e){return a.ObjectUtils.isNullOrUndefined(e)?void this.logFailure(s.Failure.Label.InvalidArgument,s.Failure.Type.Unexpected):this.areContextRequirementsMet()?void this.handleEvent(e):void this.pushDataPackage(s.LogMethods.LogEvent,arguments)},t.prototype.logFailure=function(e,t,n,r){return a.ObjectUtils.isNullOrUndefined(e)||a.ObjectUtils.isNullOrUndefined(t)?void this.logFailure(s.Failure.Label.InvalidArgument,s.Failure.Type.Unexpected):this.areContextRequirementsMet()?void this.handleFailure(e,t,n,r):void this.pushDataPackage(s.LogMethods.LogFailure,arguments)},t.prototype.logUserFunnel=function(e){return a.ObjectUtils.isNullOrUndefined(e)?void this.logFailure(s.Failure.Label.InvalidArgument,s.Failure.Type.Unexpected):this.areContextRequirementsMet()?void this.handleUserFunnel(e):void this.pushDataPackage(s.LogMethods.LogFunnel,arguments)},t.prototype.logSessionStart=function(){return this.areContextRequirementsMet()?(this.executeSessionStart(),void this.handleSetUserSessionId()):void this.pushDataPackage(s.LogMethods.LogSessionStart,arguments)},t.prototype.executeSessionStart=function(){if(this.currentSessionState===s.Session.State.Started){var e="Session already STARTED";return void this.logFailure(s.Failure.Label.SessionAlreadySet,s.Failure.Type.Unexpected,{error:e})}this.streams={},this.currentSessionState=s.Session.State.Started,this.handleSessionStart()},t.prototype.logSessionEnd=function(e){return this.areContextRequirementsMet()?(this.executeSessionEnd(e),void this.handleSetUserSessionId()):void this.pushDataPackage(s.LogMethods.LogSessionEnd,arguments)},t.prototype.executeSessionEnd=function(e){if(this.currentSessionState===s.Session.State.Ended){var t="Session already ENDED";return a.ObjectUtils.isNullOrUndefined(e)||(t+=". EndTrigger: "+s.Session.EndTrigger[e]),void this.logFailure(s.Failure.Label.SessionAlreadySet,s.Failure.Type.Unexpected,{error:t})}this.logAllStreams(),this.sessionId.set(void 0),this.userHasInteracted=!1,this.currentSessionState=s.Session.State.Ended,this.handleSessionEnd(e)},t.prototype.logTrace=function(e,t,n){return a.ObjectUtils.isNullOrUndefined(e)||a.ObjectUtils.isNullOrUndefined(t)?void this.logFailure(s.Failure.Label.InvalidArgument,s.Failure.Type.Unexpected):this.areContextRequirementsMet()?void this.handleTrace(e,t,n):void this.pushDataPackage(s.LogMethods.LogTrace,arguments)},t.prototype.pushToStream=function(e,t){if(a.ObjectUtils.isNullOrUndefined(e))return void this.logFailure(s.Failure.Label.InvalidArgument,s.Failure.Type.Unexpected);var n=s.Event.Label[e];t&&(this.streams[n]||(this.streams[n]=[]),this.streams[n].push(t))},t.prototype.logClickEvent=function(e){return this.areContextRequirementsMet()?(this.sendFunnelInteractionEvent(e),void this.executeClickEvent(e)):void this.pushDataPackage(s.LogMethods.LogClickEvent,arguments)},t.prototype.executeClickEvent=function(e){return e?(this.pushToStream(s.Event.Label.Click,e),void this.handleClickEvent(e)):void this.logFailure(s.Failure.Label.InvalidArgument,s.Failure.Type.Unexpected,{error:"Button clicked without an ID! Logged with ID "+JSON.stringify(e)})},t.prototype.setContextProperty=function(e,t){this.setContextPropertyPure(e,t),this.handleSetContext(e,t),this.areContextRequirementsMet()&&this.flushEventQueue()},t.prototype.setContextPropertyPure=function(e,t){var n=s.Context.toString(e);this.contextProperties[n]=t},t.prototype.areContextRequirementsMet=function(){return!this.contextStrategy||this.contextStrategy.requirementsAreMet(this.contextProperties)},t.prototype.flushEventQueue=function(){var e=this;this.isQueueFlushing||this.isQueueFlushed||(this.isQueueFlushing=!0,this.logQueue.forEach(function(t){switch(t.methodName){case s.LogMethods.LogEvent:e.logEvent.apply(e,t.methodArgs);break;case s.LogMethods.LogFailure:e.logFailure.apply(e,t.methodArgs);break;case s.LogMethods.PushToStream:e.pushToStream.apply(e,t.methodArgs);break;case s.LogMethods.LogFunnel:e.logUserFunnel.apply(e,t.methodArgs);break;case s.LogMethods.LogSessionStart:e.logSessionStart.apply(e,t.methodArgs);break;case s.LogMethods.LogSessionEnd:e.logSessionEnd.apply(e,t.methodArgs);break;case s.LogMethods.LogClickEvent:e.logClickEvent.apply(e,t.methodArgs);break;case s.LogMethods.SetContextProperty:e.setContextProperty.apply(e,t.methodArgs);break;case s.LogMethods.LogTrace:default:e.logTrace.apply(e,t.methodArgs)}}),this.isQueueFlushing=!1,this.isQueueFlushed=!0)},t.prototype.logAllStreams=function(){for(var e in this.streams)if(this.streams.hasOwnProperty(e)){for(var t=new s.Event.StreamEvent(s.Event.Label[e]),n=this.streams[e],r=0;r<n.length;r++)t.append(n[r]);this.handleEventPure(t)}},t.prototype.pushDataPackage=function(e,t){this.logQueue.push({methodName:e,methodArgs:t})},t}(u.Logger);n.SessionLogger=l},{"../communicator/smartValue":3,"../constants":4,"../objectUtils":34,"./log":15,"./logger":18}],21:[function(e,t,n){"use strict";var r;!function(e){e.category="Click";var t;!function(e){e.regionSelectionRemoveButton="RegionSelectionRemoveButton",e.sectionComponent="SectionComponent",e.sectionPickerLocationContainer="SectionPickerLocationContainer"}(t=e.Label||(e.Label={}))}(r=n.Click||(n.Click={}))},{}],22:[function(e,t,n){"use strict";var r;!function(e){function t(e){return r[n[e]]}var n,r={AppInfoId:"AppInfo.Id",AppInfoVersion:"AppInfo.Version",DeviceInfoId:"DeviceInfo.Id",ExtensionLifecycleId:"ExtensionLifecycle.Id",SessionId:"Session.Id",UserInfoId:"UserInfo.Id",UserInfoLanguage:"UserInfo.Language",AuthType:"AuthType",BrowserLanguage:"BrowserLanguage",ClipperType:"ClipperType",ContentType:"ContentType",FlightInfo:"FlightInfo",InPrivateBrowsing:"InPrivateBrowsing",PageLanguage:"PageLanguage"};!function(e){e[e.AppInfoId=0]="AppInfoId",e[e.AppInfoVersion=1]="AppInfoVersion",e[e.ExtensionLifecycleId=2]="ExtensionLifecycleId",e[e.DeviceInfoId=3]="DeviceInfoId",e[e.SessionId=4]="SessionId",e[e.UserInfoId=5]="UserInfoId",e[e.UserInfoLanguage=6]="UserInfoLanguage",e[e.AuthType=7]="AuthType",e[e.BrowserLanguage=8]="BrowserLanguage",e[e.ClipperType=9]="ClipperType",e[e.ContentType=10]="ContentType",e[e.FlightInfo=11]="FlightInfo",e[e.InPrivateBrowsing=12]="InPrivateBrowsing",e[e.PageLanguage=13]="PageLanguage"}(n=e.Custom||(e.Custom={})),e.toString=t}(r=n.Context||(n.Context={}))},{}],23:[function(e,t,n){"use strict";var r,o=e("../../clientType"),i=e("../../constants"),a=e("../../objectUtils"),s=e("../../localization/localization"),u=e("../log");!function(e){function t(e){if(e){var t={};t[g[g.Error].toLowerCase()]=e.error;var n=e;return n&&void 0!==n.statusCode&&(t[g[g.StatusCode].toLowerCase()]=n.statusCode,t[g[g.Response].toLowerCase()]=n.response,t[g[g.ResponseHeaders].toLowerCase()]=n.responseHeaders,void 0!==n.timeout&&(t[g[g.Timeout].toLowerCase()]=n.timeout)),JSON.stringify(t)}}function n(e){if(e){var t=e;return t&&void 0!==t.statusCode?void 0!==t.timeout?{error:t.error,statusCode:t.statusCode,response:t.response,responseHeaders:t.responseHeaders,timeout:t.timeout}:{error:t.error,statusCode:t.statusCode,response:t.response,responseHeaders:t.responseHeaders}:{error:e.error}}}function r(t){var n={};n[i.Constants.Urls.QueryParams.failureType]=u.Failure.Type[t.properties.failureType],n[i.Constants.Urls.QueryParams.failureInfo]=e.toString(t.properties.failureInfo),n[i.Constants.Urls.QueryParams.stackTrace]=t.properties.stackTrace,a.ObjectUtils.isNullOrUndefined(t.properties.failureId)||(n[i.Constants.Urls.QueryParams.failureId]=t.properties.failureId);var r=t.clientInfo;f(n,r),LogManager.sendMiscLogRequest({label:u.Failure.Label[t.label],category:u.Failure.category,properties:n},!0)}function l(t,n,r,o){var i;throw i=o?JSON.stringify({message:o,error:n.toString()}):n.toString(),e.sendFailureLogRequest({label:u.Failure.Label.UnhandledExceptionThrown,properties:{failureType:u.Failure.Type.Unexpected,failureInfo:{error:i},failureId:"Channel "+t,stackTrace:u.Failure.getStackTrace(n)},clientInfo:r}),n}function c(e,t){void 0===t&&(t=!1);var n={};n[i.Constants.Urls.QueryParams.channel]=e.channel,n[i.Constants.Urls.QueryParams.timeoutInMs]=i.Constants.Settings.noOpTrackerTimeoutDuration.toString();var r=e.clientInfo;f(n,r),LogManager.sendMiscLogRequest({label:u.NoOp.Label[e.label],category:u.NoOp.category,properties:n},!0),t&&window&&window.alert(s.Localization.getLocalizedString("WebClipper.Error.NoOpError"))}function p(e,t){return void 0===t&&(t=!1),setTimeout(function(){c(e,t)},i.Constants.Settings.noOpTrackerTimeoutDuration)}function f(e,t){t&&(e[i.Constants.Urls.QueryParams.clientType]=a.ObjectUtils.isNullOrUndefined(t.get())?u.unknownValue:o.ClientType[t.get().clipperType],e[i.Constants.Urls.QueryParams.clipperVersion]=a.ObjectUtils.isNullOrUndefined(t.get())?u.unknownValue:t.get().clipperVersion,e[i.Constants.Urls.QueryParams.clipperId]=a.ObjectUtils.isNullOrUndefined(t.get())?u.unknownValue:t.get().clipperId)}var g;!function(e){e[e.Error=0]="Error",e[e.StatusCode=1]="StatusCode",e[e.Response=2]="Response",e[e.ResponseHeaders=3]="ResponseHeaders",e[e.Timeout=4]="Timeout"}(g||(g={})),e.toString=t,e.clone=n,e.sendFailureLogRequest=r,e.handleCommunicatorError=l,e.sendNoOpTrackerRequest=c,e.setNoOpTrackerRequestTimeout=p}(r=n.ErrorUtils||(n.ErrorUtils={}))},{"../../clientType":1,"../../constants":4,"../../localization/localization":6,"../../objectUtils":34,"../log":15}],24:[function(e,t,n){"use strict";var r,o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=e("../log"),a=e("../../objectUtils");!function(e){function t(t,n){switch(t){default:case e.Category.BaseEvent:return new e.BaseEvent(n);case e.Category.PromiseEvent:return new e.PromiseEvent(n);case e.Category.StreamEvent:return new e.StreamEvent(n)}}var n;!function(e){e[e.BaseEvent=0]="BaseEvent",e[e.PromiseEvent=1]="PromiseEvent",e[e.StreamEvent=2]="StreamEvent"}(n=e.Category||(e.Category={}));var r;!function(e){e[e.AddEmbeddedVideo=0]="AddEmbeddedVideo",e[e.AugmentationApiCall=1]="AugmentationApiCall",e[e.BookmarkPage=2]="BookmarkPage",e[e.CompressRegionSelection=3]="CompressRegionSelection",e[e.ClearNoOpTracker=4]="ClearNoOpTracker",e[e.Click=5]="Click",e[e.ClipAugmentationOptions=6]="ClipAugmentationOptions",e[e.ClipCommonOptions=7]="ClipCommonOptions",e[e.ClipPdfOptions=8]="ClipPdfOptions",e[e.ClipRegionOptions=9]="ClipRegionOptions",e[e.ClipSelectionOptions=10]="ClipSelectionOptions",e[e.ClipToOneNoteAction=11]="ClipToOneNoteAction",e[e.CloseClipper=12]="CloseClipper",e[e.ClosePageNavTooltip=13]="ClosePageNavTooltip",e[e.CreateNotebook=14]="CreateNotebook",e[e.CreatePage=15]="CreatePage",e[e.CreateSection=16]="CreateSection",e[e.DebugFeedback=17]="DebugFeedback",e[e.DeviceIdMap=18]="DeviceIdMap",e[e.FetchNonLocalData=19]="FetchNonLocalData",e[e.FullPageScreenshotCall=20]="FullPageScreenshotCall",e[e.GetBinaryRequest=21]="GetBinaryRequest",e[e.GetCleanDom=22]="GetCleanDom",e[e.GetExistingUserInformation=23]="GetExistingUserInformation",e[e.GetFlightingAssignments=24]="GetFlightingAssignments",e[e.GetLocale=25]="GetLocale",e[e.GetLocalizedStrings=26]="GetLocalizedStrings",e[e.GetNotebookByName=27]="GetNotebookByName",e[e.GetNotebooks=28]="GetNotebooks",e[e.GetPage=29]="GetPage",e[e.GetPageContent=30]="GetPageContent",e[e.GetPages=31]="GetPages",e[e.HandleSignInEvent=32]="HandleSignInEvent",e[e.HideClipperDueToSpaNavigate=33]="HideClipperDueToSpaNavigate",e[e.InvokeClipper=34]="InvokeClipper",e[e.InvokeTooltip=35]="InvokeTooltip",e[e.InvokeWhatsNew=36]="InvokeWhatsNew",e[e.LocalFilesNotAllowedPanelShown=37]="LocalFilesNotAllowedPanelShown",e[e.PagesSearch=38]="PagesSearch",e[e.PdfByteMetadata=39]="PdfByteMetadata",e[e.PdfDataUrlMetadata=40]="PdfDataUrlMetadata",e[e.ProcessPdfIntoDataUrls=41]="ProcessPdfIntoDataUrls",e[e.RegionSelectionCapturing=42]="RegionSelectionCapturing",e[e.RegionSelectionLoading=43]="RegionSelectionLoading",e[e.RegionSelectionProcessing=44]="RegionSelectionProcessing",e[e.RetrieveUserInformation=45]="RetrieveUserInformation",e[e.SendBatchRequest=46]="SendBatchRequest",e[e.SetContextProperty=47]="SetContextProperty",e[e.SetDoNotPromptRatings=48]="SetDoNotPromptRatings",e[e.ShouldShowRatingsPrompt=49]="ShouldShowRatingsPrompt",e[e.TooltipImpression=50]="TooltipImpression",e[e.UpdatePage=51]="UpdatePage",e[e.UserInfoUpdated=52]="UserInfoUpdated",e[e.WhatsNewImpression=53]="WhatsNewImpression"}(r=e.Label||(e.Label={}));var s=function(){function t(e){if(this._timerWasStopped=!1,this.isEventData(e)){var t=e;this._label=t.Label,this._duration=t.Duration,this._properties=t.Properties?JSON.parse(JSON.stringify(t.Properties)):void 0}else{var n=e;this._label=n,this.startTimer()}}return t.prototype.getDuration=function(){return this._duration},t.prototype.getEventCategory=function(){return e.Category.BaseEvent},t.prototype.getEventData=function(){return{Label:this._label,Duration:this._duration,Properties:this.getCustomProperties()}},t.prototype.getLabel=function(){return e.Label[this._label]},t.prototype.getCustomProperties=function(){return this._properties?JSON.parse(JSON.stringify(this._properties)):void 0},t.prototype.setCustomProperty=function(e,t){if(this.isReservedPropertyName(e))throw new Error("Tried to overwrite key '"+i.PropertyName.Custom[e]+"' with value of "+JSON.stringify(t));this._properties||(this._properties={}),this._properties[i.PropertyName.Custom[e]]=t},t.prototype.startTimer=function(){this._startTime=(new Date).getTime()},t.prototype.stopTimer=function(){return!!this._startTime&&(this._duration=(new Date).getTime()-this._startTime,this._timerWasStopped=!0,!0)},t.prototype.timerWasStopped=function(){return this._timerWasStopped},t.prototype.isEventData=function(e){var t=e;return!(!t||a.ObjectUtils.isNullOrUndefined(t.Label))},t.prototype.isReservedPropertyName=function(e){for(var t in i.PropertyName.Reserved)if(i.PropertyName.Custom[e].toLowerCase()===t.toLowerCase())return!0;return!1},t}();e.BaseEvent=s;var u=function(t){function n(e){var n=t.call(this,e)||this;if(n._logStatus=i.Status.Succeeded,n._failureType=i.Failure.Type.Unexpected,n.isEventData(e)){var r=e;n._logStatus=r.LogStatus,n._failureType=r.FailureType,n._failureInfo=i.ErrorUtils.clone(r.FailureInfo)}return n}return o(n,t),n.prototype.getEventCategory=function(){return e.Category.PromiseEvent},n.prototype.getEventData=function(){return{Label:this._label,Duration:this._duration,Properties:this.getCustomProperties(),LogStatus:this._logStatus,FailureType:this._failureType,FailureInfo:i.ErrorUtils.clone(this._failureInfo)}},n.prototype.getStatus=function(){return i.Status[this._logStatus]},n.prototype.setStatus=function(e){this._logStatus=e,this._timerWasStopped||this.stopTimer()},n.prototype.getFailureInfo=function(){return i.ErrorUtils.toString(this._failureInfo)},n.prototype.setFailureInfo=function(e){this._failureInfo=i.ErrorUtils.clone(e)},n.prototype.getFailureType=function(){return i.Failure.Type[this._failureType]},n.prototype.setFailureType=function(e){this._failureType=e},n}(s);e.PromiseEvent=u;var l=function(t){function n(e){var n=t.call(this,e)||this;if(n._stream=[],n.isEventData(e)){var r=e;n._stream=r.Stream}return n}return o(n,t),n.prototype.getEventCategory=function(){return e.Category.StreamEvent},n.prototype.getEventData=function(){return{Label:this._label,Duration:this._duration,Properties:this.getCustomProperties(),Stream:this._stream}},n.prototype.append=function(e){this._stream.push(e)},n}(s);e.StreamEvent=l,e.createEvent=t}(r=n.Event||(n.Event={}))},{"../../objectUtils":34,"../log":15}],25:[function(e,t,n){"use strict";var r;!function(e){function t(e){return e||(e=new Error),e.stack}e.category="Failure";var n;!function(e){e[e.Unexpected=0]="Unexpected",e[e.Expected=1]="Expected"}(n=e.Type||(e.Type={})),e.getStackTrace=t;var r;!function(e){e[e.ClickedButtonWithNoId=0]="ClickedButtonWithNoId",e[e.EndSessionWithoutTrigger=1]="EndSessionWithoutTrigger",e[e.GetChangeLog=2]="GetChangeLog",e[e.GetComputedStyle=3]="GetComputedStyle",e[e.GetLocalizedString=4]="GetLocalizedString",e[e.GetSetting=5]="GetSetting",e[e.IFrameMessageHandlerHasNoOtherWindow=6]="IFrameMessageHandlerHasNoOtherWindow",e[e.InvalidArgument=7]="InvalidArgument",e[e.IsFeatureEnabled=8]="IsFeatureEnabled",e[e.JsonParse=9]="JsonParse",e[e.NotImplemented=10]="NotImplemented",e[e.OnLaunchOneNoteButton=11]="OnLaunchOneNoteButton",e[e.OrphanedWebClippersDueToExtensionRefresh=12]="OrphanedWebClippersDueToExtensionRefresh",e[e.RegionSelectionProcessing=13]="RegionSelectionProcessing",e[e.RenderFailurePanel=14]="RenderFailurePanel",e[e.ReservedPropertyOverwriteAttempted=15]="ReservedPropertyOverwriteAttempted",e[e.SessionAlreadySet=16]="SessionAlreadySet",e[e.SetLoggerNoop=17]="SetLoggerNoop",e[e.SetUndefinedLocalizedStrings=18]="SetUndefinedLocalizedStrings",e[e.TraceLevelErrorWarningMessage=19]="TraceLevelErrorWarningMessage",e[e.UnhandledApiCode=20]="UnhandledApiCode",e[e.UnhandledExceptionThrown=21]="UnhandledExceptionThrown",e[e.UserSetWithInvalidExpiredData=22]="UserSetWithInvalidExpiredData",e[e.WebExtensionWindowCreate=23]="WebExtensionWindowCreate",e[e.UnclippablePage=24]="UnclippablePage",e[e.UnsupportedBrowser=25]="UnsupportedBrowser"}(r=e.Label||(e.Label={}))}(r=n.Failure||(n.Failure={}))},{}],26:[function(e,t,n){"use strict";var r;!function(e){e.category="Funnel";var t;!function(e){e[e.Invoke=0]="Invoke",e[e.AuthAlreadySignedIn=1]="AuthAlreadySignedIn",e[e.AuthAttempted=2]="AuthAttempted",e[e.AuthSignInCompleted=3]="AuthSignInCompleted",e[e.AuthSignInFailed=4]="AuthSignInFailed",e[e.ClipAttempted=5]="ClipAttempted",e[e.Interact=6]="Interact",e[e.ViewInWac=7]="ViewInWac",e[e.SignOut=8]="SignOut"}(t=e.Label||(e.Label={}))}(r=n.Funnel||(n.Funnel={}))},{}],27:[function(e,t,n){"use strict";var r;!function(e){e[e.LogEvent=0]="LogEvent",e[e.LogFailure=1]="LogFailure",e[e.PushToStream=2]="PushToStream",e[e.LogFunnel=3]="LogFunnel",e[e.LogSession=4]="LogSession",e[e.LogSessionStart=5]="LogSessionStart",e[e.LogSessionEnd=6]="LogSessionEnd",e[e.LogTrace=7]="LogTrace",e[e.LogClickEvent=8]="LogClickEvent",e[e.SetContextProperty=9]="SetContextProperty"}(r=n.LogMethods||(n.LogMethods={}))},{}],28:[function(e,t,n){"use strict";var r;!function(e){e.category="NoOp";var t;!function(e){e[e.InitializeCommunicator=0]="InitializeCommunicator",e[e.WebClipperUiFrameDidNotExist=1]="WebClipperUiFrameDidNotExist",e[e.WebClipperUiFrameIsNotVisible=2]="WebClipperUiFrameIsNotVisible"}(t=e.Label||(e.Label={}))}(r=n.NoOp||(n.NoOp={}))},{}],29:[function(e,t,n){"use strict";var r;!function(e){var t;!function(e){e[e.AnnotationAdded=0]="AnnotationAdded",e[e.AugmentationModel=1]="AugmentationModel",e[e.AverageProcessingDurationPerPage=2]="AverageProcessingDurationPerPage",e[e.ByteLength=3]="ByteLength",e[e.BytesPerPdfPage=4]="BytesPerPdfPage",e[e.BytesTrimmed=5]="BytesTrimmed",e[e.Channel=6]="Channel",e[e.ClipMode=7]="ClipMode",e[e.CloseReason=8]="CloseReason",e[e.ContainsAtLeastOneHighlight=9]="ContainsAtLeastOneHighlight",e[e.ContentType=10]="ContentType",e[e.CorrelationId=11]="CorrelationId",e[e.CurrentPanel=12]="CurrentPanel",e[e.CurrentSectionStillExists=13]="CurrentSectionStillExists",e[e.DeviceIdInStorage=14]="DeviceIdInStorage",e[e.DeviceIdInCookie=15]="DeviceIdInCookie",e[e.DomSizeInBytes=16]="DomSizeInBytes",e[e.FeatureEnabled=17]="FeatureEnabled",e[e.FinalDataUrlLength=18]="FinalDataUrlLength",e[e.FontSize=19]="FontSize",e[e.ForceRetrieveFreshLocStrings=20]="ForceRetrieveFreshLocStrings",e[e.FreshUserInfoAvailable=21]="FreshUserInfoAvailable",e[e.FullPageScreenshotContentFound=22]="FullPageScreenshotContentFound",e[e.Height=23]="Height",e[e.InitialDataUrlLength=24]="InitialDataUrlLength",e[e.InvokeMode=25]="InvokeMode",e[e.InvokeSource=26]="InvokeSource",e[e.IsHighDpiScreen=27]="IsHighDpiScreen",e[e.IsRetryable=28]="IsRetryable",e[e.IsSerif=29]="IsSerif",e[e.Key=30]="Key",e[e.LastSeenTooltipTime=31]="LastSeenTooltipTime",e[e.LastUpdated=32]="LastUpdated",e[e.MaxDepth=33]="MaxDepth",e[e.NumPages=34]="NumPages",e[e.NumRegions=35]="NumRegions",e[e.NumTimesTooltipHasBeenSeen=36]="NumTimesTooltipHasBeenSeen",e[e.PageNavTooltipType=37]="PageNavTooltipType",e[e.PageTitleModified=38]="PageTitleModified",e[e.PdfAllPagesClipped=39]="PdfAllPagesClipped",e[e.PdfAttachmentClipped=40]="PdfAttachmentClipped",e[e.PdfFileSelectedPageCount=41]="PdfFileSelectedPageCount",e[e.PdfFileTotalPageCount=42]="PdfFileTotalPageCount",e[e.PdfIsBatched=43]="PdfIsBatched",e[e.PdfIsLocalFile=44]="PdfIsLocalFile",e[e.RatingsInfo=45]="RatingsInfo",e[e.ShouldShowRatingsPrompt=46]="ShouldShowRatingsPrompt",e[e.SignInCancelled=47]="SignInCancelled",e[e.StoredLocaleDifferentThanRequested=48]="StoredLocaleDifferentThanRequested",e[e.TimeToClearNoOpTracker=49]="TimeToClearNoOpTracker",e[e.TooltipType=50]="TooltipType",e[e.UpdateInterval=51]="UpdateInterval",e[e.UserInformationReturned=52]="UserInformationReturned",e[e.UserInformationStored=53]="UserInformationStored",e[e.UserUpdateReason=54]="UserUpdateReason",e[e.Value=55]="Value",e[e.Width=56]="Width",e[e.WriteableCookies=57]="WriteableCookies"}(t=e.Custom||(e.Custom={}));var n;!function(e){e.Category="Category",e.Duration="Duration",e.EventName="EventName",e.EventType="EventType",e.FailureInfo="FailureInfo",e.FailureType="FailureType",e.Id="Id",e.Label="Label",e.Level="Level",e.Message="Message",e.Properties="Properties",e.StackTrace="StackTrace",e.Status="Status",e.Stream="Stream",e.Trigger="Trigger",e.WebClipper="WebClipper"}(n=e.Reserved||(e.Reserved={}))}(r=n.PropertyName||(n.PropertyName={}))},{}],30:[function(e,t,n){"use strict";var r;!function(e){e.category="Session";var t;!function(e){e[e.SignOut=0]="SignOut",e[e.Unload=1]="Unload"}(t=e.EndTrigger||(e.EndTrigger={}));var n;!function(e){e[e.Started=0]="Started",e[e.Ended=1]="Ended"}(n=e.State||(e.State={}))}(r=n.Session||(n.Session={}))},{}],31:[function(e,t,n){"use strict";var r;!function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed"}(r=n.Status||(n.Status={}))},{}],32:[function(e,t,n){"use strict";var r;!function(e){e.category="Trace";var t;!function(e){e[e.DefaultingToConsoleLogger=0]="DefaultingToConsoleLogger",e[e.DebugMode=1]="DebugMode",e[e.RequestForClipperInstalledPageUrl=2]="RequestForClipperInstalledPageUrl",e[e.General=3]="General"}(t=e.Label||(e.Label={}));var n;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Information=3]="Information",e[e.Verbose=4]="Verbose"}(n=e.Level||(e.Level={}))}(r=n.Trace||(n.Trace={}))},{}],33:[function(e,t,n){"use strict";var r=function(){function e(){}return e.prototype.warn=function(e,t){console.warn(e,t)},e.prototype.error=function(e,t){console.error(e,t)},e.prototype.info=function(e,t){console.info(e,t)},e.prototype.log=function(e,t){console.log(e,t)},e}();n.WebConsole=r},{}],34:[function(e,t,n){"use strict";var r;!function(e){function t(e){return"number"==typeof e&&!isNaN(e)}function n(e){return null===e||void 0===e}e.isNumeric=t,e.isNullOrUndefined=n}(r=n.ObjectUtils||(n.ObjectUtils={}))},{}],35:[function(e,t,n){"use strict";var r;!function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed"}(r=n.OperationResult||(n.OperationResult={}))},{}],36:[function(e,t,n){"use strict";var r,o=e("../settings.json");!function(t){function n(e){var t=o[e];if(t&&t.Value)return t.Value}function r(t){o=t?t:e("../settings.json")}t.getSetting=n,t.setSettingsJsonForTesting=r}(r=n.Settings||(n.Settings={}))},{"../settings.json":39}],37:[function(e,t,n){"use strict";var r,o=e("./objectUtils"),i=e("./operationResult"),a=e("./localization/localization"),s=e("lodash");!function(e){function t(e,t){if(o.ObjectUtils.isNullOrUndefined(e))return r("");if(e=e.trim(),""===e)return r("");for(var i=e.split(","),a=[],u=0;u<i.length;++u){var l=[],c=void 0,p=i[u].trim();if(""!==p){if(/^\d+$/.test(p)){var f=parseInt(p,10);if(0===f||!o.ObjectUtils.isNullOrUndefined(t)&&f>t)return r(p);l=[f]}else{if(!(c=/^(\d+)\s*-\s*(\d+)$/.exec(p)))return r(p);var g=parseInt(c[1],10),h=parseInt(c[2],10),d=4294967295;if(g>=h||0===g||0===h||g>=d||h>=d||h-g+1>d||!o.ObjectUtils.isNullOrUndefined(t)&&h>t)return r(p);l=s.range(g,h+1)}a=a.concat(l)}}var v=s(a).sortBy().sortedUniq().value();if(0===v.length)return r(e);var m=s.last(v);return!o.ObjectUtils.isNullOrUndefined(t)&&m>t?r(m.toString()):n(v)}function n(e){return{status:i.OperationResult.Succeeded,result:e}}function r(e){return{status:i.OperationResult.Failed,result:e}}function u(e){var n=t(e);if(n.status!==i.OperationResult.Succeeded)return 0;var r=n.result;return r?r.length:0}function l(e,t){var n=(t+1).toString();return e+": "+a.Localization.getLocalizedString("WebClipper.Label.Page")+" "+n}function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}e.parsePageRange=t,e.countPageRange=u,e.getBatchedPageTitle=l,e.generateGuid=c}(r=n.StringUtils||(n.StringUtils={}))},{"./localization/localization":6,
"./objectUtils":34,"./operationResult":35,lodash:41}],38:[function(e,t,n){"use strict";var r,o=e("./objectUtils"),i=e("./settings"),a=e("./clipperUI/tooltipType");!function(e){function t(e,t){for(var n=0;n<t.length;++n){var r=t[n],o=a.TooltipType[r],s=i.Settings.getSetting(o+"Domains"),u=new RegExp(s.join("|"),"i");if(u.test(e))return r}}function n(e,t){if(!e)return t;var n=/\/(?=[^\/]+\.\w{3,4}$).+/g.exec(e);return n&&n[0]?n[0].slice(1):t}function r(e){var t=document.createElement("a");return t.href=e,t.protocol+"//"+t.host+"/"}function s(e){var t=document.createElement("a");t.href=e;var n=t.pathname;return u(n)}function u(e){return e=o.ObjectUtils.isNullOrUndefined(e)?"/":e,e.length>0&&"/"===e.charAt(0)?e:"/"+e}function l(e,t){if(e&&t){var n=t.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)","i"),o=r.exec(e);if(o)return o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):""}}function c(e,t,n,r){if(void 0===r&&(r=!1),!e||!t||!n)return e;r&&(t=t.charAt(0).toUpperCase()+t.slice(1));var o=e.match(/^([^#]*)(#.*)?$/),i=o[1],a=o[2]?o[2]:"",s=i.indexOf("?");if(s===-1)return i+"?"+t+"="+n+a;if(s===i.length-1)return i+t+"="+n+a;for(var u=i.substring(s+1).split("&"),l=0;l<u.length;l++){var c=u[l].split("=");if(c[0]===t)return u[l]=c[0]+"="+n,i.substring(0,s+1)+u.join("&")+a}return i+"&"+t+"="+n+a}function p(e){return g(e,["PageNav_BlacklistedDomains"])}function f(e){return g(e,["AugmentationDefault_WhitelistedDomains","ProductDomains","RecipeDomains"])}function g(e,t){if(!e)return!1;var n=[];t.forEach(function(e){n=n.concat(i.Settings.getSetting(e))});for(var r=0,o=n;r<o.length;r++){var a=o[r];if(new RegExp(a).test(e))return!0}return!1}e.checkIfUrlMatchesAContentType=t,e.getFileNameFromUrl=n,e.getHostname=r,e.getPathname=s,e.getQueryValue=l,e.addUrlQueryValue=c,e.onBlacklistedDomain=p,e.onWhitelistedDomain=f}(r=n.UrlUtils||(n.UrlUtils={}))},{"./clipperUI/tooltipType":2,"./objectUtils":34,"./settings":36}],39:[function(e,t,n){t.exports={DummyObjectForTestingPurposes:{Description:"Do not remove under any circumstances!",Value:"Testing."},AugmentationDefault_WhitelistedDomains:{Description:"The set of domains on which we are changing the default clip mode to Augmentation.",Value:["^https?:\\/\\/www\\.onenote\\.com","[^\\w]wikipedia","[^\\w]nytimes","[^\\w]lifehacker","[^\\w]msn","[^\\w]theguardian","[^\\w]forbes","[^\\w]bbc","[^\\w]huffingtonpost","[^\\w]businessinsider","[^\\w]washingtonpost","[^\\w]medium","[^\\w]buzzfeed","[^\\w]bbc","[^\\w]theverge","[^\\w]techcrunch","[^\\w]amazon","[^\\w]allrecipes","[^\\w]foodnetwork","[^\\w]seriouseats","[^\\w]epicurious","[^\\w]support.office.com","[^\\w]blogs.office.com","[^\\w]blogs.technet.com","[^\\w]youtube\\.com\\/watch(\\?v=(\\w+)|.*\\&v=(\\w+))","[^\\w]youtube\\.com\\/embed\\/(\\w+)","[^\\w]vimeo\\.com.*?\\/(\\d+)($|\\?|\\#|\\/$)","[^\\w]vimeo\\.com.*?\\/(\\d+)\\/\\w+:\\w+(\\/|$)","[^\\w]vimeo\\.com.*?\\/ondemand\\/\\w+$","[^\\w]khanacademy\\.org(.*)/v/(.*)","\\/(\\d{2}|\\d{4})\\/\\d{1,2}\\/","\\/(\\d{2}|\\d{4})-\\d{1,2}-\\d{1,2}\\/"]},PageNav_BlacklistedDomains:{Description:"The set of domains where we do not want to show any PageNav tooltip experience",Value:["^(http(s)?)://(login\\.live\\.com)","^(http(s)?)://(login\\.microsoftonline\\.com)"]},PdfDomains:{Description:"PDF regexes",Value:["^.*(\\.pdf)$"]},RecipeDomains:{Description:"The set of domains where we want to show a Recipe tooltip",Value:["^(http(s)?)://(12tomatoes\\.com/)()([^/]*-[^/]*)/$","^(http(s)?)://(abc\\.go\\.com/shows/the-chew/recipes/)([^/]*-[^/]*)$","^(http(s)?)://(([^ ]{1,18})?)(allrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://((\\.{1,18}\\.)?)(allrecipes\\.)(com)/(recipe/[^/]+(/)?(/detail\\.aspx\\??)?)$","^(http(s)?)://()(allrecipes\\.com)()/([r|R]ecipe/[^/]+/Detail\\.aspx)$","^(http(s)?)://()(allrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://(cookieandkate\\.com)()/(\\d{4})/(.+)$","^(http(s)?)://(cooking\\.)(nytimes\\.com)()/(recipes/(.*))$","^(http(s)?)://()(cookpad\\.com)()/(recipe/[0-9]+$)$","^(http(s)?)://()(damndelicious\\.net)()/\\d+/\\d+/\\d+/.+/$","^(http(s)?)://(food52\\.com)()/recipes/[0-9]+-.+$","^(http(s)?)://(minimalistbaker.com)/([^/]*-[^/]*)/$","^(http(s)?)://(paleoleap.com)/([^/]*-[^/]*)/$","^(http(s)?)://(pinchofyum.com)/([^/]*-[^/]*)$","^(http(s)?)://(recipe\\.rakuten\\.co\\.jp)()/recipe/[0-9]+/$","^(http(s)?)://()(thepioneerwoman\\.com)()/(cooking/.+/)$","^(http(s)?)://((www\\.)?)(allrecipes\\.com)()/([r|R]ecipe/[^/]+/(Detail\\.aspx)?)$","^(http(s)?)://((www\\.)?)(allrecipes\\.com)()/([R|r]ecipe/.*)$","^(http(s)?)://(www\\.)(bbc\\.co\\.uk/food/recipes/[^/]*_\\d+)$","^(http(s)?)://(www\\.)(bbcgoodfood\\.com)()/(recipes/[0-9]+/(.*))$","^(http(s)?)://(www\\.)(bbcgoodfood\\.com)/recipes/([^/]*-[^/]*)$","^(http(s)?)://(www\\.)(bettycrocker\\.com)()/(recipes/[^\\/]+/[0-9a-f-]{36}/?)$","^(http(s)?)://(www\\.)(bonappetit\\.com)()/(recipe/(.*))$","^(http(s)?)://(www\\.budgetbytes\\.com)/\\d{4}/\\d{2}/(.*)/","^(http(s)?)://((www\\.)?)(chowhound\\.com)()/(recipes/.*)$","^(http(s)?)://(www\\.cookingclassy\\.com)/\\d{4}/\\d{2}/(.*)/","^(http(s)?)://(www\\.delish\\.com)/cooking/recipe-ideas/recipes/a\\d+/[^/]*-[^/]*/","^(http(s)?)://(www\\.)(eatingwell\\.com)()/(recipe/\\d+/.+/)$","^(http(s)?)://(www\\.)(epicurious\\.com)()/(recipes/food/views/.*)$","^(http(s)?)://(www\\.)(food\\.com)()/(recipe/.*)$","^(http(s)?)://(www\\.)(foodandwine\\.com)()/(recipes\\/.+)$","^(http(s)?)://(www\\.)(foodnetwork)(\\.ca)/(recipe/(.*))$","^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipe-collections/.*)$","^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipes.*)$","^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipes/.*)$","^(http(s)?)://(www\\.)(marthastewart\\.com)()/(([0-9]+|recipe)/.*)$","^(http(s)?)://(www\\.)(marthastewart\\.com)()/([0-9]+/[^/]+)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*-[0-9]*/)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/[^/]+.*)$","^(http(s)?)://(www\\.)(realsimple\\.com)()/(food-recipes/browse-all-recipes/[^\\/]+/index\\.html)$","^(http(s)?)://((www)?\\.)(seriouseats\\.com)()/([Rr]ecipes\\/.*\\.(html|HTML)(.*)?)$","^(http(s)?)://(www\\.)(simplyrecipes\\.com)()/(recipes/[^/]*/)$","^(http(s)?)://((www\\.)?)(simplyrecipes\\.com)()/(recipes/[^/]*/)$","^(http(s)?)://((www\\.)?)(simplyrecipes\\.com)()/(recipes/.*)$","^(http(s)?)://(www\\.)(tasteofhome\\.com)()/([R|r]ecipes/[^/]+$)$","^(http(s)?)://(www\\.)(tasteofhome\\.com)()/(recipes/[^/]*/?)$","^(http(s)?)://(www\\.)(tasteofhome\\.com)()/(recipes/[^\\/]+/?)$","^(http(s)?)://(www\\.)(yummly\\.com)()/(recipe/[^/]+)$","^(http(s)?)://((www\\.)?)(yummly\\.com)()/(recipe/.*)$","^(http(s)?)://(.*)(yummly\\.com)()/(recipe/.+)$"]},ProductDomains:{Description:"The set of domains where we want to show a Product tooltip",Value:["^(http(s)?)://store\\.steampowered.com/app/\\d+/.*$","^(http(s)?)://(www\\.)(amazon\\.com)()/(gp/product/[^/]+/.*)$","^(http(s)?)://(www\\.)(amazon\\.com)()/(dp/[^/]+.*)$","^(http(s)?)://(www\\.)(amazon\\.com)()/([^/]+/dp/[^/]+)$","^(http(s)?)://(www\\.)(amazon\\.in)()/((.+/)?(dp|gp/product)\\/\\w{10,13}([^\\w].*)?)$","^(http(s)?)://(www\\.)(amazon\\.)([a-zA-Z\\.]+)/([^/]+/dp/.*)$","^(http(s)?)://(www\\.)(bedbathandbeyond\\.com)(/store/product/)([^/]*-[^/]*/)(\\d+.*)","^(http(s)?)://(www\\.)(ebay\\.com)()/(itm/[^/]+/.*)$","^(http(s)?)://(www\\.)(etsy\\.com)()/(listing)/(\\d+/.*)$","^(http(s)?)://(www\\.)(homedepot\\.com)()/(p/[^/]+/.*)$","^(http(s)?)://(www\\.)(newegg\\.com)()/(Product/Product\\.aspx\\?Item=.+)$","^(http(s)?)://(www\\.)(overstock\\.com)()/(.+/.+/[0-9]+/product\\.html.*)$","^(http(s)?)://(www\\.)(staples\\.com)()/(.*/product_[^/]+)$","^(http(s)?)://(www\\.)(target\\.com)()/(p/.+)$","^(http(s)?)://(www\\.)(walmart\\.com)()/(ip/.*)$"]},App_Id:{Description:"For identifying the Web Clipper during interaction with external services",Value:"OneNote Web Clipper"},Misc_Data_Endpoint_Id:{Description:"The id of the data endpoint used for miscellaneous logging",Value:"production"},Aria_Token:{Description:"For sending log events to the Aria production tenant 'OneNote Web Clipper (production)'",Value:"c7f3f24bc5f746d7b9d8f8e422fdd8a5-1cb58166-2598-485f-897c-1d3c8e62d30e-7560"},LogCategory_RatingsPrompt:{Description:"OFeedback log category for the ratings prompt feature",Value:"OneNoteClipperRatingsPrompt"},Bookmarklet_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the bookmarklet",Value:"false"},ChromeExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Chrome extension",Value:"true"},EdgeExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Edge extension",Value:"false"},FirefoxExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Firefox extension",Value:"true"},SafariExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Safari extension",Value:"false"},ChromeExtension_RatingUrl:{Description:"URL for the Web Clipper in the Chrome Web Store; used to direct users to leave ratings and reviews",Value:"https://chrome.google.com/webstore/detail/onenote-web-clipper/gojbdfnpnhogfdgjbigejoaolejmgdhk/reviews"},EdgeExtension_RatingUrl:{Description:"URL for the Web Clipper in the Windows Store; used to direct users to leave ratings and reviews",Value:"https://www.microsoft.com/en-us/store/p/onenote-web-clipper/9nblggh4r01n#ratings-reviews"},FirefoxExtension_RatingUrl:{Description:"URL for the Web Clipper in Firefox Add-ons; used to direct users to leave ratings and reviews",Value:"https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/reviews/add"}}},{}],40:[function(e,t,n){t.exports={"WebClipper.Accessibility.ScreenReader.CurrentModeHasChanged":"The current clipping mode is now '{0}'","WebClipper.Accessibility.ScreenReader.ClippingPageToOneNote":"Clipping the current page to OneNote","WebClipper.Accessibility.ScreenReader.ChangeFontToSansSerif":"Change font to Sans-Serif","WebClipper.Accessibility.ScreenReader.ChangeFontToSerif":"Change font to Serif","WebClipper.Accessibility.ScreenReader.DecreaseFontSize":"Decrease font size","WebClipper.Accessibility.ScreenReader.IncreaseFontSize":"Increase font size","WebClipper.Accessibility.ScreenReader.ToggleHighlighterModeForArticle":"Toggle Highlighter Mode For Article. To highlight using keyboard, enter Caret Mode using F7","WebClipper.Accessibility.ScreenReader.InputBoxToChangeTitleOfOneNotePage":"Text input to edit the title of the page you want to save","WebClipper.Accessibility.ScreenReader.InputBoxToChangeNotesToAddToPage":"Text input to edit the notes to save along with this page","WebClipper.Accessibility.ScreenReader.PagePreview":"Page Preview","WebClipper.Accessibility.ScreenReader.Footer":"User details","WebClipper.Accessibility.ScreenReader.Loading":"Loading...","WebClipper.Accessibility.ScreenReader.RegionSelectionCanvas":"Selection canvas","WebClipper.Action.BackToHome":"Back","WebClipper.Action.Cancel":"Cancel","WebClipper.Action.Clip":"Clip","WebClipper.Action.CloseTheClipper":"Close the Clipper","WebClipper.Action.Feedback":"Feedback?","WebClipper.Action.RefreshPage":"Refresh Page","WebClipper.Action.Signin":"Sign In","WebClipper.Action.SigninMsa":"Sign in with a Microsoft account","WebClipper.Action.SigninOrgId":"Sign in with a work or school account","WebClipper.Action.SignOut":"Sign Out","WebClipper.Action.TryAgain":"Try Again","WebClipper.Action.ViewInOneNote":"View in OneNote","WebClipper.Action.Less":"Less","WebClipper.Action.More":"More","WebClipper.BetaTag":"beta","WebClipper.ClipType.Article.Button":"Article","WebClipper.ClipType.Article.ProgressLabel":"Clipping Article","WebClipper.ClipType.Bookmark.Button":"Bookmark","WebClipper.ClipType.Bookmark.Button.Tooltip":"Clip just the title, thumbnail, synopsis, and link.","WebClipper.ClipType.Bookmark.ProgressLabel":"Clipping Bookmark","WebClipper.ClipType.Button.Tooltip":"Clip just the {0} in an easy-to-read format.","WebClipper.ClipType.Image.Button":"Image","WebClipper.ClipType.ImageSnippet.Button":"Image Snippet","WebClipper.ClipType.MultipleRegions.Button.Tooltip":"Take screenshots of parts of the page you'll select.","WebClipper.ClipType.Pdf.Button":"PDF Document","WebClipper.ClipType.Pdf.AskPermissionToClipLocalFile":"We need your permission to clip PDF files stored on your computer","WebClipper.ClipType.Pdf.InstructionsForClippingLocalFiles":"In Chrome, right-click the OneNote icon in the toolbar and choose \"Manage Extension'. Then, for OneNote Web Clipper, check 'Allow access to file URLs.'","WebClipper.ClipType.Pdf.ProgressLabel":"Clipping PDF File","WebClipper.ClipType.Pdf.ProgressLabelDelay":"PDFs can take a little while to upload. Still clipping.”","WebClipper.ClipType.Pdf.IncrementalProgressMessage":"Clipping page {0} of {1}...","WebClipper.ClipType.Pdf.Button.Tooltip":"Take a screenshot of the whole PDF file and save a copy of the attachment.","WebClipper.ClipType.Product.Button":"Product","WebClipper.ClipType.Product.ProgressLabel":"Clipping Product","WebClipper.ClipType.Recipe.Button":"Recipe","WebClipper.ClipType.Recipe.ProgressLabel":"Clipping Recipe","WebClipper.ClipType.Region.Button":"Region","WebClipper.ClipType.Region.Button.Tooltip":"Take a screenshot of the part of the page you'll select.","WebClipper.ClipType.Region.ProgressLabel":"Clipping Region","WebClipper.ClipType.ScreenShot.Button":"Full Page","WebClipper.ClipType.ScreenShot.Button.Tooltip":"Take a screenshot of the whole page, just like you see it.","WebClipper.ClipType.ScreenShot.ProgressLabel":"Clipping Page","WebClipper.ClipType.Selection.Button":"Selection","WebClipper.ClipType.Selection.Button.Tooltip":"Clip the selection you made on the web page.","WebClipper.ClipType.Selection.ProgressLabel":"Clipping Selection","WebClipper.Error.ConflictingExtension":"Your PDF viewer or another extension might be blocking the OneNote Web Clipper. You could temporarily disable the following extension and try clipping again.","WebClipper.Error.CannotClipPage":"Sorry, this type of page can't be clipped.","WebClipper.Error.CookiesDisabled.Line1":"Cookies must be enabled in order for OneNote Web Clipper to work correctly.","WebClipper.Error.CookiesDisabled.Line2":"Please allow third-party cookies in your browser or add the onenote.com and live.com domains as an exception.","WebClipper.Error.CookiesDisabled.Chrome":"Please allow third-party cookies in your browser or add the [*.]onenote.com and [*.]live.com domains as an exception.","WebClipper.Error.CookiesDisabled.Edge":"Please allow third-party cookies in your browser.","WebClipper.Error.CookiesDisabled.Firefox":"Please allow third-party cookies in your browser or add the https://onenote.com and https://live.com domains as an exception.","WebClipper.Error.CorruptedSection":"Your clip can't be saved here because the section is corrupt.","WebClipper.Error.GenericError":"Something went wrong. Please try clipping the page again.","WebClipper.Error.GenericExpiredTokenRefreshError":"Your login session has ended and we were unable to clip the page. Please sign in again.","WebClipper.Error.NoOpError":"Sorry, we can't clip this page right now","WebClipper.Error.NotProvisioned":"Your clip can't be saved because your OneDrive for Business account isn't set up.","WebClipper.Error.OrphanedWebClipperDetected":"Something went wrong. Please refresh this page, and try to clip again.","WebClipper.Error.PasswordProtected":"Your clip can't be saved here because the section is password protected.","WebClipper.Error.QuotaExceeded":"Your clip can't be saved because your OneDrive account has reached its size limit.","WebClipper.Error.ResourceDoesNotExist":"Your clip can't be saved here because the location no longer exists. Please try clipping to another location.","WebClipper.Error.SectionTooLarge":"Your clip can't be saved here because the section has reached its size limit.","WebClipper.Error.SignInUnsuccessful":"We couldn't sign you in. Please try again.","WebClipper.Error.ThirdPartyCookiesDisabled":"For OneNote Web Clipper to work correctly, please allow third-party cookies in your browser, or add the onenote.com domain as an exception.","WebClipper.Error.UserAccountSuspended":"Your clip can't be saved because your Microsoft account has been suspended.","WebClipper.Error.UserAccountSuspendedResetText":"Reset Your Account","WebClipper.Error.UserDoesNotHaveUpdatePermission":"We've added features to the Web Clipper that require new permissions. To accept them, please sign out and sign back in.","WebClipper.Extension.RefreshTab":"Please refresh this page, and try to clip again.","WebClipper.FromCitation":"Clipped from: {0}","WebClipper.Label.Annotation":"Note","WebClipper.Label.AnnotationPlaceholder":"Add a note...","WebClipper.Label.PageTitlePlaceholder":"Add a page title...","WebClipper.Label.AttachPdfFile":"Attach PDF file","WebClipper.Label.AttachPdfFileSubText":"(all pages)","WebClipper.Label.ClipImageToOneNote":"Clip Image to OneNote","WebClipper.Label.ClipLocation":"Location","WebClipper.Label.ClipSelectionToOneNote":"Clip Selection to OneNote","WebClipper.Label.ClipSuccessful":"Clip Successful!","WebClipper.Label.DragAndRelease":"Drag and release to capture a screenshot","WebClipper.Label.RegionSelectionMouseInstruction":"Drag a selection with the mouse, and then release to capture.","WebClipper.Label.RegionSelectionKeyboardInstruction":"To select with the keyboard, press the arrow keys, and then press Enter.","WebClipper.Label.OneNoteClipper":"OneNote Clipper","WebClipper.Label.OneNoteWebClipper":"OneNote Web Clipper","WebClipper.Label.OpenChangeLogFromTooltip":"Check out what's new","WebClipper.Label.Page":"Page","WebClipper.Label.PdfAllPagesRadioButton":"All pages","WebClipper.Label.PdfDistributePagesCheckbox":"New note for each PDF page","WebClipper.Label.PdfOptions":"PDF Options","WebClipper.Label.PdfTooLargeToAttach":"PDF too large to attach","WebClipper.Label.PdfTooltip":"Clip this PDF to OneNote, and read it later","WebClipper.Label.ProceedToWebClipper":"Proceed to the Web Clipper","WebClipper.Label.ProceedToWebClipperFun":"Try it out!","WebClipper.Label.ProductTooltip":"Clip and save product details like this to OneNote","WebClipper.Label.Ratings.Message.End":"Thanks for your feedback!","WebClipper.Label.Ratings.Message.Feedback":"Help us improve","WebClipper.Label.Ratings.Message.Init":"Enjoying the Web Clipper?","WebClipper.Label.Ratings.Message.Rate":"Glad you like it!","WebClipper.Label.Ratings.Button.Feedback":"Provide feedback","WebClipper.Label.Ratings.Button.Init.Positive":"Yes, it's great!","WebClipper.Label.Ratings.Button.Init.Negative":"Not really...","WebClipper.Label.Ratings.Button.NoThanks":"No thanks","WebClipper.Label.Ratings.Button.Rate":"Rate us 5 stars","WebClipper.Label.RecipeTooltip":"Save clutter-free recipes right to OneNote","WebClipper.Label.SignedIn":"Signed in","WebClipper.Label.SignInDescription":"Save anything on the web to OneNote in one click","WebClipper.Label.SignInUnsuccessfulMoreInformation":"More information","WebClipper.Label.SignInUnsuccessfulLessInformation":"Less information","WebClipper.Label.UnsupportedBrowser":"Sorry, your browser version is unsupported.","WebClipper.Label.WebClipper":"Web Clipper","WebClipper.Label.WebClipperWasUpdated":"OneNote Web Clipper has been updated","WebClipper.Label.WebClipperWasUpdatedFun":"OneNote Web Clipper is now better than ever!","WebClipper.Label.WhatsNew":"What's New","WebClipper.Label.VideoTooltip":"Clip this video and watch it anytime in OneNote","WebClipper.Popover.PdfInvalidPageRange":"We couldn't find page '{0}'","WebClipper.Preview.AugmentationModeGenericError":"Something went wrong creating the preview. Try again, or choose a different clipping mode.","WebClipper.Preview.BookmarkModeGenericError":"Something went wrong creating the bookmark. Try again, or choose a different clipping mode.","WebClipper.Preview.FullPageModeGenericError":"A preview isn't available, but you can still clip your page.","WebClipper.Preview.FullPageModeScreenshotDescription":"A full page screenshot of '{0}'","WebClipper.Preview.LoadingMessage":"Loading preview...","WebClipper.Preview.NoFullPageScreenshotFound":"No content found. Try another clipping mode.","WebClipper.Preview.NoContentFound":"No article found. Try another clipping mode.","WebClipper.Preview.UnableToClipLocalFile":"Local files can only be clipped using Region mode.","WebClipper.Preview.RemoveSelectedRegion":"Remove selected region","WebClipper.Preview.SelectedRegion":"Selected region","WebClipper.Preview.Header.AddAnotherRegionButtonLabel":"Add another region","WebClipper.Preview.Header.SansSerifButtonLabel":"Sans-serif","WebClipper.Preview.Header.SerifButtonLabel":"Serif","WebClipper.Preview.Spinner.ClipAnyTimeInFullPage":"In a hurry? You can clip any time in Full Page mode!","WebClipper.SectionPicker.DefaultLocation":"Default location","WebClipper.SectionPicker.LoadingNotebooks":"Loading notebooks...","WebClipper.SectionPicker.NoNotebooksFound":"You don't have any notebooks yet, so we'll create your default notebook when you clip this page.","WebClipper.SectionPicker.NotebookLoadFailureMessage":"OneNote couldn't load your notebooks. Please try again later.","WebClipper.SectionPicker.NotebookLoadUnretryableFailureMessage":"OneNote couldn't load your notebooks.","WebClipper.SectionPicker.NotebookLoadUnretryableFailureMessageWithExplanation":"We couldn't load your notebooks because a list limit was exceeded in OneDrive.","WebClipper.SectionPicker.NotebookLoadUnretryableFailureLinkMessage":"Learn more","WebClipper.FontFamily.Regular":"Segoe UI Regular,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Bold":"Segoe UI Bold,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Light":"Segoe UI Light,Segoe WP Light,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Preview.SerifDefault":"Georgia","WebClipper.FontFamily.Preview.SansSerifDefault":"Verdana","WebClipper.FontFamily.Semibold":"Segoe UI Semibold,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Semilight":"Segoe UI Semilight,Segoe UI Light,Segoe WP Light,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontSize.Preview.SerifDefault":"16px","WebClipper.FontSize.Preview.SansSerifDefault":"16px"}},{}],41:[function(t,n,r){(function(t){(function(){(function(){function o(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function i(e,t,n,r){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(r,a,n(a),e)}return r}function a(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function s(e,t){for(var n=null==e?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function u(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function l(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function c(e,t){var n=null==e?0:e.length;return!!n&&S(e,t,0)>-1}function p(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}function f(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}function g(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function h(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}function d(e,t,n,r){var o=null==e?0:e.length;for(r&&o&&(n=e[--o]);o--;)n=t(n,e[o],o,e);return n}function v(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function m(e){return e.split("")}function y(e){return e.match(jt)||[]}function b(e,t,n){var r;return n(e,function(e,n,o){if(t(e,n,o))return r=n,!1}),r}function C(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function S(e,t,n){return t===t?Q(e,t,n):C(e,_,n)}function w(e,t,n,r){for(var o=n-1,i=e.length;++o<i;)if(r(e[o],t))return o;return-1}function _(e){return e!==e}function I(e,t){var n=null==e?0:e.length;return n?x(e,t)/n:De}function P(e){return function(t){return null==t?re:t[e]}}function E(e){return function(t){return null==e?re:e[t]}}function L(e,t,n,r,o){return o(e,function(e,o,i){n=r?(r=!1,e):t(n,e,o,i)}),n}function T(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function x(e,t){for(var n,r=-1,o=e.length;++r<o;){var i=t(e[r]);i!==re&&(n=n===re?i:n+i)}return n}function A(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function k(e,t){return f(t,function(t){return[t,e[t]]})}function N(e){return e?e.slice(0,X(e)+1).replace(Ot,""):e}function U(e){return function(t){return e(t)}}function F(e,t){return f(t,function(t){return e[t]})}function R(e,t){return e.has(t)}function O(e,t){for(var n=-1,r=e.length;++n<r&&S(t,e[n],0)>-1;);return n}function D(e,t){for(var n=e.length;n--&&S(t,e[n],0)>-1;);return n}function W(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}function B(e){return"\\"+tr[e]}function M(e,t){return null==e?re:e[t]}function j(e){return Gn.test(e)}function H(e){return qn.test(e)}function z(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function V(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function $(e,t){return function(n){return e(t(n))}}function G(e,t){for(var n=-1,r=e.length,o=0,i=[];++n<r;){var a=e[n];a!==t&&a!==pe||(e[n]=pe,i[o++]=n)}return i}function q(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function J(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function Q(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}function K(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function Y(e){return j(e)?ee(e):yr(e)}function Z(e){return j(e)?te(e):m(e)}function X(e){for(var t=e.length;t--&&Dt.test(e.charAt(t)););return t}function ee(e){for(var t=Vn.lastIndex=0;Vn.test(e);)++t;return t}function te(e){return e.match(Vn)||[]}function ne(e){return e.match($n)||[]}var re,oe="4.17.21",ie=200,ae="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",se="Expected a function",ue="Invalid `variable` option passed into `_.template`",le="__lodash_hash_undefined__",ce=500,pe="__lodash_placeholder__",fe=1,ge=2,he=4,de=1,ve=2,me=1,ye=2,be=4,Ce=8,Se=16,we=32,_e=64,Ie=128,Pe=256,Ee=512,Le=30,Te="...",xe=800,Ae=16,ke=1,Ne=2,Ue=3,Fe=1/0,Re=9007199254740991,Oe=1.7976931348623157e308,De=NaN,We=4294967295,Be=We-1,Me=We>>>1,je=[["ary",Ie],["bind",me],["bindKey",ye],["curry",Ce],["curryRight",Se],["flip",Ee],["partial",we],["partialRight",_e],["rearg",Pe]],He="[object Arguments]",ze="[object Array]",Ve="[object AsyncFunction]",$e="[object Boolean]",Ge="[object Date]",qe="[object DOMException]",Je="[object Error]",Qe="[object Function]",Ke="[object GeneratorFunction]",Ye="[object Map]",Ze="[object Number]",Xe="[object Null]",et="[object Object]",tt="[object Promise]",nt="[object Proxy]",rt="[object RegExp]",ot="[object Set]",it="[object String]",at="[object Symbol]",st="[object Undefined]",ut="[object WeakMap]",lt="[object WeakSet]",ct="[object ArrayBuffer]",pt="[object DataView]",ft="[object Float32Array]",gt="[object Float64Array]",ht="[object Int8Array]",dt="[object Int16Array]",vt="[object Int32Array]",mt="[object Uint8Array]",yt="[object Uint8ClampedArray]",bt="[object Uint16Array]",Ct="[object Uint32Array]",St=/\b__p \+= '';/g,wt=/\b(__p \+=) '' \+/g,_t=/(__e\(.*?\)|\b__t\)) \+\n'';/g,It=/&(?:amp|lt|gt|quot|#39);/g,Pt=/[&<>"']/g,Et=RegExp(It.source),Lt=RegExp(Pt.source),Tt=/<%-([\s\S]+?)%>/g,xt=/<%([\s\S]+?)%>/g,At=/<%=([\s\S]+?)%>/g,kt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nt=/^\w*$/,Ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ft=/[\\^$.*+?()[\]{}|]/g,Rt=RegExp(Ft.source),Ot=/^\s+/,Dt=/\s/,Wt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Bt=/\{\n\/\* \[wrapped with (.+)\] \*/,Mt=/,? & /,jt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ht=/[()=,{}\[\]\/\s]/,zt=/\\(\\)?/g,Vt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,$t=/\w*$/,Gt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Jt=/^\[object .+?Constructor\]$/,Qt=/^0o[0-7]+$/i,Kt=/^(?:0|[1-9]\d*)$/,Yt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt=/($^)/,Xt=/['\n\r\u2028\u2029\\]/g,en="\\ud800-\\udfff",tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",on=tn+nn+rn,an="\\u2700-\\u27bf",sn="a-z\\xdf-\\xf6\\xf8-\\xff",un="\\xac\\xb1\\xd7\\xf7",ln="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",cn="\\u2000-\\u206f",pn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",fn="A-Z\\xc0-\\xd6\\xd8-\\xde",gn="\\ufe0e\\ufe0f",hn=un+ln+cn+pn,dn="['’]",vn="["+en+"]",mn="["+hn+"]",yn="["+on+"]",bn="\\d+",Cn="["+an+"]",Sn="["+sn+"]",wn="[^"+en+hn+bn+an+sn+fn+"]",_n="\\ud83c[\\udffb-\\udfff]",In="(?:"+yn+"|"+_n+")",Pn="[^"+en+"]",En="(?:\\ud83c[\\udde6-\\uddff]){2}",Ln="[\\ud800-\\udbff][\\udc00-\\udfff]",Tn="["+fn+"]",xn="\\u200d",An="(?:"+Sn+"|"+wn+")",kn="(?:"+Tn+"|"+wn+")",Nn="(?:"+dn+"(?:d|ll|m|re|s|t|ve))?",Un="(?:"+dn+"(?:D|LL|M|RE|S|T|VE))?",Fn=In+"?",Rn="["+gn+"]?",On="(?:"+xn+"(?:"+[Pn,En,Ln].join("|")+")"+Rn+Fn+")*",Dn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Wn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bn=Rn+Fn+On,Mn="(?:"+[Cn,En,Ln].join("|")+")"+Bn,jn="(?:"+[Pn+yn+"?",yn,En,Ln,vn].join("|")+")",Hn=RegExp(dn,"g"),zn=RegExp(yn,"g"),Vn=RegExp(_n+"(?="+_n+")|"+jn+Bn,"g"),$n=RegExp([Tn+"?"+Sn+"+"+Nn+"(?="+[mn,Tn,"$"].join("|")+")",kn+"+"+Un+"(?="+[mn,Tn+An,"$"].join("|")+")",Tn+"?"+An+"+"+Nn,Tn+"+"+Un,Wn,Dn,bn,Mn].join("|"),"g"),Gn=RegExp("["+xn+en+on+gn+"]"),qn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Jn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qn=-1,Kn={};Kn[ft]=Kn[gt]=Kn[ht]=Kn[dt]=Kn[vt]=Kn[mt]=Kn[yt]=Kn[bt]=Kn[Ct]=!0,Kn[He]=Kn[ze]=Kn[ct]=Kn[$e]=Kn[pt]=Kn[Ge]=Kn[Je]=Kn[Qe]=Kn[Ye]=Kn[Ze]=Kn[et]=Kn[rt]=Kn[ot]=Kn[it]=Kn[ut]=!1;var Yn={};Yn[He]=Yn[ze]=Yn[ct]=Yn[pt]=Yn[$e]=Yn[Ge]=Yn[ft]=Yn[gt]=Yn[ht]=Yn[dt]=Yn[vt]=Yn[Ye]=Yn[Ze]=Yn[et]=Yn[rt]=Yn[ot]=Yn[it]=Yn[at]=Yn[mt]=Yn[yt]=Yn[bt]=Yn[Ct]=!0,Yn[Je]=Yn[Qe]=Yn[ut]=!1;var Zn={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r",
"Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Xn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},er={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},tr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nr=parseFloat,rr=parseInt,or="object"==typeof t&&t&&t.Object===Object&&t,ir="object"==typeof self&&self&&self.Object===Object&&self,ar=or||ir||Function("return this")(),sr="object"==typeof r&&r&&!r.nodeType&&r,ur=sr&&"object"==typeof n&&n&&!n.nodeType&&n,lr=ur&&ur.exports===sr,cr=lr&&or.process,pr=function(){try{var e=ur&&ur.require&&ur.require("util").types;return e?e:cr&&cr.binding&&cr.binding("util")}catch(e){}}(),fr=pr&&pr.isArrayBuffer,gr=pr&&pr.isDate,hr=pr&&pr.isMap,dr=pr&&pr.isRegExp,vr=pr&&pr.isSet,mr=pr&&pr.isTypedArray,yr=P("length"),br=E(Zn),Cr=E(Xn),Sr=E(er),wr=function e(t){function n(e){if(su(e)&&!bf(e)&&!(e instanceof E)){if(e instanceof m)return e;if(yc.call(e,"__wrapped__"))return oa(e)}return new m(e)}function r(){}function m(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=re}function E(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=We,this.__views__=[]}function Q(){var e=new E(this.__wrapped__);return e.__actions__=Wo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Wo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Wo(this.__views__),e}function ee(){if(this.__filtered__){var e=new E(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function te(){var e=this.__wrapped__.value(),t=this.__dir__,n=bf(e),r=t<0,o=n?e.length:0,i=Li(0,o,this.__views__),a=i.start,s=i.end,u=s-a,l=r?s:a-1,c=this.__iteratees__,p=c.length,f=0,g=Jc(u,this.__takeCount__);if(!n||!r&&o==u&&g==u)return So(e,this.__actions__);var h=[];e:for(;u--&&f<g;){l+=t;for(var d=-1,v=e[l];++d<p;){var m=c[d],y=m.iteratee,b=m.type,C=y(v);if(b==Ne)v=C;else if(!C){if(b==ke)continue e;break e}}h[f++]=v}return h}function Dt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function jt(){this.__data__=op?op(null):{},this.size=0}function en(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function tn(e){var t=this.__data__;if(op){var n=t[e];return n===le?re:n}return yc.call(t,e)?t[e]:re}function nn(e){var t=this.__data__;return op?t[e]!==re:yc.call(t,e)}function rn(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=op&&t===re?le:t,this}function on(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function an(){this.__data__=[],this.size=0}function sn(e){var t=this.__data__,n=Nn(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Nc.call(t,n,1),--this.size,!0}function un(e){var t=this.__data__,n=Nn(t,e);return n<0?re:t[n][1]}function ln(e){return Nn(this.__data__,e)>-1}function cn(e,t){var n=this.__data__,r=Nn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function pn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function fn(){this.size=0,this.__data__={hash:new Dt,map:new(ep||on),string:new Dt}}function gn(e){var t=_i(this,e).delete(e);return this.size-=t?1:0,t}function hn(e){return _i(this,e).get(e)}function dn(e){return _i(this,e).has(e)}function vn(e,t){var n=_i(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function mn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new pn;++t<n;)this.add(e[t])}function yn(e){return this.__data__.set(e,le),this}function bn(e){return this.__data__.has(e)}function Cn(e){var t=this.__data__=new on(e);this.size=t.size}function Sn(){this.__data__=new on,this.size=0}function wn(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function _n(e){return this.__data__.get(e)}function In(e){return this.__data__.has(e)}function Pn(e,t){var n=this.__data__;if(n instanceof on){var r=n.__data__;if(!ep||r.length<ie-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pn(r)}return n.set(e,t),this.size=n.size,this}function En(e,t){var n=bf(e),r=!n&&yf(e),o=!n&&!r&&Sf(e),i=!n&&!r&&!o&&Ef(e),a=n||r||o||i,s=a?A(e.length,pc):[],u=s.length;for(var l in e)!t&&!yc.call(e,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Ri(l,u))||s.push(l);return s}function Ln(e){var t=e.length;return t?e[to(0,t-1)]:re}function Tn(e,t){return ea(Wo(e),Wn(t,0,e.length))}function xn(e){return ea(Wo(e))}function An(e,t,n){(n===re||qs(e[t],n))&&(n!==re||t in e)||On(e,t,n)}function kn(e,t,n){var r=e[t];yc.call(e,t)&&qs(r,n)&&(n!==re||t in e)||On(e,t,n)}function Nn(e,t){for(var n=e.length;n--;)if(qs(e[n][0],t))return n;return-1}function Un(e,t,n,r){return vp(e,function(e,o,i){t(r,e,n(e),i)}),r}function Fn(e,t){return e&&Bo(t,Hu(t),e)}function Rn(e,t){return e&&Bo(t,zu(t),e)}function On(e,t,n){"__proto__"==t&&Oc?Oc(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Dn(e,t){for(var n=-1,r=t.length,o=oc(r),i=null==e;++n<r;)o[n]=i?re:Bu(e,t[n]);return o}function Wn(e,t,n){return e===e&&(n!==re&&(e=e<=n?e:n),t!==re&&(e=e>=t?e:t)),e}function Bn(e,t,n,r,o,i){var s,u=t&fe,l=t&ge,c=t&he;if(n&&(s=o?n(e,r,o,i):n(e)),s!==re)return s;if(!au(e))return e;var p=bf(e);if(p){if(s=Ai(e),!u)return Wo(e,s)}else{var f=Tp(e),g=f==Qe||f==Ke;if(Sf(e))return To(e,u);if(f==et||f==He||g&&!o){if(s=l||g?{}:ki(e),!u)return l?jo(e,Rn(s,e)):Mo(e,Fn(s,e))}else{if(!Yn[f])return o?e:{};s=Ni(e,f,u)}}i||(i=new Cn);var h=i.get(e);if(h)return h;i.set(e,s),Pf(e)?e.forEach(function(r){s.add(Bn(r,t,n,r,e,i))}):_f(e)&&e.forEach(function(r,o){s.set(o,Bn(r,t,n,o,e,i))});var d=c?l?bi:yi:l?zu:Hu,v=p?re:d(e);return a(v||e,function(r,o){v&&(o=r,r=e[o]),kn(s,o,Bn(r,t,n,o,e,i))}),s}function Mn(e){var t=Hu(e);return function(n){return jn(n,e,t)}}function jn(e,t,n){var r=n.length;if(null==e)return!r;for(e=lc(e);r--;){var o=n[r],i=t[o],a=e[o];if(a===re&&!(o in e)||!i(a))return!1}return!0}function Vn(e,t,n){if("function"!=typeof e)throw new fc(se);return kp(function(){e.apply(re,n)},t)}function $n(e,t,n,r){var o=-1,i=c,a=!0,s=e.length,u=[],l=t.length;if(!s)return u;n&&(t=f(t,U(n))),r?(i=p,a=!1):t.length>=ie&&(i=R,a=!1,t=new mn(t));e:for(;++o<s;){var g=e[o],h=null==n?g:n(g);if(g=r||0!==g?g:0,a&&h===h){for(var d=l;d--;)if(t[d]===h)continue e;u.push(g)}else i(t,h,r)||u.push(g)}return u}function Gn(e,t){var n=!0;return vp(e,function(e,r,o){return n=!!t(e,r,o)}),n}function qn(e,t,n){for(var r=-1,o=e.length;++r<o;){var i=e[r],a=t(i);if(null!=a&&(s===re?a===a&&!yu(a):n(a,s)))var s=a,u=i}return u}function Zn(e,t,n,r){var o=e.length;for(n=Iu(n),n<0&&(n=-n>o?0:o+n),r=r===re||r>o?o:Iu(r),r<0&&(r+=o),r=n>r?0:Pu(r);n<r;)e[n++]=t;return e}function Xn(e,t){var n=[];return vp(e,function(e,r,o){t(e,r,o)&&n.push(e)}),n}function er(e,t,n,r,o){var i=-1,a=e.length;for(n||(n=Fi),o||(o=[]);++i<a;){var s=e[i];t>0&&n(s)?t>1?er(s,t-1,n,r,o):g(o,s):r||(o[o.length]=s)}return o}function tr(e,t){return e&&yp(e,t,Hu)}function or(e,t){return e&&bp(e,t,Hu)}function ir(e,t){return l(t,function(t){return ru(e[t])})}function sr(e,t){t=Eo(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[ta(t[n++])];return n&&n==r?e:re}function ur(e,t,n){var r=t(e);return bf(e)?r:g(r,n(e))}function cr(e){return null==e?e===re?st:Xe:Rc&&Rc in lc(e)?Ei(e):qi(e)}function pr(e,t){return e>t}function yr(e,t){return null!=e&&yc.call(e,t)}function wr(e,t){return null!=e&&t in lc(e)}function Ir(e,t,n){return e>=Jc(t,n)&&e<qc(t,n)}function Pr(e,t,n){for(var r=n?p:c,o=e[0].length,i=e.length,a=i,s=oc(i),u=1/0,l=[];a--;){var g=e[a];a&&t&&(g=f(g,U(t))),u=Jc(g.length,u),s[a]=!n&&(t||o>=120&&g.length>=120)?new mn(a&&g):re}g=e[0];var h=-1,d=s[0];e:for(;++h<o&&l.length<u;){var v=g[h],m=t?t(v):v;if(v=n||0!==v?v:0,!(d?R(d,m):r(l,m,n))){for(a=i;--a;){var y=s[a];if(!(y?R(y,m):r(e[a],m,n)))continue e}d&&d.push(m),l.push(v)}}return l}function Er(e,t,n,r){return tr(e,function(e,o,i){t(r,n(e),o,i)}),r}function Lr(e,t,n){t=Eo(t,e),e=Qi(e,t);var r=null==e?e:e[ta(_a(t))];return null==r?re:o(r,e,n)}function Tr(e){return su(e)&&cr(e)==He}function xr(e){return su(e)&&cr(e)==ct}function Ar(e){return su(e)&&cr(e)==Ge}function kr(e,t,n,r,o){return e===t||(null==e||null==t||!su(e)&&!su(t)?e!==e&&t!==t:Nr(e,t,n,r,kr,o))}function Nr(e,t,n,r,o,i){var a=bf(e),s=bf(t),u=a?ze:Tp(e),l=s?ze:Tp(t);u=u==He?et:u,l=l==He?et:l;var c=u==et,p=l==et,f=u==l;if(f&&Sf(e)){if(!Sf(t))return!1;a=!0,c=!1}if(f&&!c)return i||(i=new Cn),a||Ef(e)?hi(e,t,n,r,o,i):di(e,t,u,n,r,o,i);if(!(n&de)){var g=c&&yc.call(e,"__wrapped__"),h=p&&yc.call(t,"__wrapped__");if(g||h){var d=g?e.value():e,v=h?t.value():t;return i||(i=new Cn),o(d,v,n,r,i)}}return!!f&&(i||(i=new Cn),vi(e,t,n,r,o,i))}function Ur(e){return su(e)&&Tp(e)==Ye}function Fr(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=lc(e);o--;){var s=n[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){s=n[o];var u=s[0],l=e[u],c=s[1];if(a&&s[2]){if(l===re&&!(u in e))return!1}else{var p=new Cn;if(r)var f=r(l,c,u,e,t,p);if(!(f===re?kr(c,l,de|ve,r,p):f))return!1}}return!0}function Rr(e){if(!au(e)||Mi(e))return!1;var t=ru(e)?Ic:Jt;return t.test(na(e))}function Or(e){return su(e)&&cr(e)==rt}function Dr(e){return su(e)&&Tp(e)==ot}function Wr(e){return su(e)&&iu(e.length)&&!!Kn[cr(e)]}function Br(e){return"function"==typeof e?e:null==e?Nl:"object"==typeof e?bf(e)?$r(e[0],e[1]):Vr(e):Ml(e)}function Mr(e){if(!ji(e))return Gc(e);var t=[];for(var n in lc(e))yc.call(e,n)&&"constructor"!=n&&t.push(n);return t}function jr(e){if(!au(e))return Gi(e);var t=ji(e),n=[];for(var r in e)("constructor"!=r||!t&&yc.call(e,r))&&n.push(r);return n}function Hr(e,t){return e<t}function zr(e,t){var n=-1,r=Js(e)?oc(e.length):[];return vp(e,function(e,o,i){r[++n]=t(e,o,i)}),r}function Vr(e){var t=Ii(e);return 1==t.length&&t[0][2]?zi(t[0][0],t[0][1]):function(n){return n===e||Fr(n,e,t)}}function $r(e,t){return Di(e)&&Hi(t)?zi(ta(e),t):function(n){var r=Bu(n,e);return r===re&&r===t?ju(n,e):kr(t,r,de|ve)}}function Gr(e,t,n,r,o){e!==t&&yp(t,function(i,a){if(o||(o=new Cn),au(i))qr(e,t,a,n,Gr,r,o);else{var s=r?r(Yi(e,a),i,a+"",e,t,o):re;s===re&&(s=i),An(e,a,s)}},zu)}function qr(e,t,n,r,o,i,a){var s=Yi(e,n),u=Yi(t,n),l=a.get(u);if(l)return void An(e,n,l);var c=i?i(s,u,n+"",e,t,a):re,p=c===re;if(p){var f=bf(u),g=!f&&Sf(u),h=!f&&!g&&Ef(u);c=u,f||g||h?bf(s)?c=s:Qs(s)?c=Wo(s):g?(p=!1,c=To(u,!0)):h?(p=!1,c=Uo(u,!0)):c=[]:du(u)||yf(u)?(c=s,yf(s)?c=Lu(s):au(s)&&!ru(s)||(c=ki(u))):p=!1}p&&(a.set(u,c),o(c,u,r,i,a),a.delete(u)),An(e,n,c)}function Jr(e,t){var n=e.length;if(n)return t+=t<0?n:0,Ri(t,n)?e[t]:re}function Qr(e,t,n){t=t.length?f(t,function(e){return bf(e)?function(t){return sr(t,1===e.length?e[0]:e)}:e}):[Nl];var r=-1;t=f(t,U(wi()));var o=zr(e,function(e,n,o){var i=f(t,function(t){return t(e)});return{criteria:i,index:++r,value:e}});return T(o,function(e,t){return Ro(e,t,n)})}function Kr(e,t){return Yr(e,t,function(t,n){return ju(e,n)})}function Yr(e,t,n){for(var r=-1,o=t.length,i={};++r<o;){var a=t[r],s=sr(e,a);n(s,a)&&so(i,Eo(a,e),s)}return i}function Zr(e){return function(t){return sr(t,e)}}function Xr(e,t,n,r){var o=r?w:S,i=-1,a=t.length,s=e;for(e===t&&(t=Wo(t)),n&&(s=f(e,U(n)));++i<a;)for(var u=0,l=t[i],c=n?n(l):l;(u=o(s,c,u,r))>-1;)s!==e&&Nc.call(s,u,1),Nc.call(e,u,1);return e}function eo(e,t){for(var n=e?t.length:0,r=n-1;n--;){var o=t[n];if(n==r||o!==i){var i=o;Ri(o)?Nc.call(e,o,1):yo(e,o)}}return e}function to(e,t){return e+jc(Yc()*(t-e+1))}function no(e,t,n,r){for(var o=-1,i=qc(Mc((t-e)/(n||1)),0),a=oc(i);i--;)a[r?i:++o]=e,e+=n;return a}function ro(e,t){var n="";if(!e||t<1||t>Re)return n;do t%2&&(n+=e),t=jc(t/2),t&&(e+=e);while(t);return n}function oo(e,t){return Np(Ji(e,t,Nl),e+"")}function io(e){return Ln(tl(e))}function ao(e,t){var n=tl(e);return ea(n,Wn(t,0,n.length))}function so(e,t,n,r){if(!au(e))return e;t=Eo(t,e);for(var o=-1,i=t.length,a=i-1,s=e;null!=s&&++o<i;){var u=ta(t[o]),l=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(o!=a){var c=s[u];l=r?r(c,u,s):re,l===re&&(l=au(c)?c:Ri(t[o+1])?[]:{})}kn(s,u,l),s=s[u]}return e}function uo(e){return ea(tl(e))}function lo(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=oc(o);++r<o;)i[r]=e[r+t];return i}function co(e,t){var n;return vp(e,function(e,r,o){return n=t(e,r,o),!n}),!!n}function po(e,t,n){var r=0,o=null==e?r:e.length;if("number"==typeof t&&t===t&&o<=Me){for(;r<o;){var i=r+o>>>1,a=e[i];null!==a&&!yu(a)&&(n?a<=t:a<t)?r=i+1:o=i}return o}return fo(e,t,Nl,n)}function fo(e,t,n,r){var o=0,i=null==e?0:e.length;if(0===i)return 0;t=n(t);for(var a=t!==t,s=null===t,u=yu(t),l=t===re;o<i;){var c=jc((o+i)/2),p=n(e[c]),f=p!==re,g=null===p,h=p===p,d=yu(p);if(a)var v=r||h;else v=l?h&&(r||f):s?h&&f&&(r||!g):u?h&&f&&!g&&(r||!d):!g&&!d&&(r?p<=t:p<t);v?o=c+1:i=c}return Jc(i,Be)}function go(e,t){for(var n=-1,r=e.length,o=0,i=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!qs(s,u)){var u=s;i[o++]=0===a?0:a}}return i}function ho(e){return"number"==typeof e?e:yu(e)?De:+e}function vo(e){if("string"==typeof e)return e;if(bf(e))return f(e,vo)+"";if(yu(e))return hp?hp.call(e):"";var t=e+"";return"0"==t&&1/e==-Fe?"-0":t}function mo(e,t,n){var r=-1,o=c,i=e.length,a=!0,s=[],u=s;if(n)a=!1,o=p;else if(i>=ie){var l=t?null:Ip(e);if(l)return q(l);a=!1,o=R,u=new mn}else u=t?[]:s;e:for(;++r<i;){var f=e[r],g=t?t(f):f;if(f=n||0!==f?f:0,a&&g===g){for(var h=u.length;h--;)if(u[h]===g)continue e;t&&u.push(g),s.push(f)}else o(u,g,n)||(u!==s&&u.push(g),s.push(f))}return s}function yo(e,t){return t=Eo(t,e),e=Qi(e,t),null==e||delete e[ta(_a(t))]}function bo(e,t,n,r){return so(e,t,n(sr(e,t)),r)}function Co(e,t,n,r){for(var o=e.length,i=r?o:-1;(r?i--:++i<o)&&t(e[i],i,e););return n?lo(e,r?0:i,r?i+1:o):lo(e,r?i+1:0,r?o:i)}function So(e,t){var n=e;return n instanceof E&&(n=n.value()),h(t,function(e,t){return t.func.apply(t.thisArg,g([e],t.args))},n)}function wo(e,t,n){var r=e.length;if(r<2)return r?mo(e[0]):[];for(var o=-1,i=oc(r);++o<r;)for(var a=e[o],s=-1;++s<r;)s!=o&&(i[o]=$n(i[o]||a,e[s],t,n));return mo(er(i,1),t,n)}function _o(e,t,n){for(var r=-1,o=e.length,i=t.length,a={};++r<o;){var s=r<i?t[r]:re;n(a,e[r],s)}return a}function Io(e){return Qs(e)?e:[]}function Po(e){return"function"==typeof e?e:Nl}function Eo(e,t){return bf(e)?e:Di(e,t)?[e]:Up(xu(e))}function Lo(e,t,n){var r=e.length;return n=n===re?r:n,!t&&n>=r?e:lo(e,t,n)}function To(e,t){if(t)return e.slice();var n=e.length,r=Tc?Tc(n):new e.constructor(n);return e.copy(r),r}function xo(e){var t=new e.constructor(e.byteLength);return new Lc(t).set(new Lc(e)),t}function Ao(e,t){var n=t?xo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function ko(e){var t=new e.constructor(e.source,$t.exec(e));return t.lastIndex=e.lastIndex,t}function No(e){return gp?lc(gp.call(e)):{}}function Uo(e,t){var n=t?xo(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Fo(e,t){if(e!==t){var n=e!==re,r=null===e,o=e===e,i=yu(e),a=t!==re,s=null===t,u=t===t,l=yu(t);if(!s&&!l&&!i&&e>t||i&&a&&u&&!s&&!l||r&&a&&u||!n&&u||!o)return 1;if(!r&&!i&&!l&&e<t||l&&n&&o&&!r&&!i||s&&n&&o||!a&&o||!u)return-1}return 0}function Ro(e,t,n){for(var r=-1,o=e.criteria,i=t.criteria,a=o.length,s=n.length;++r<a;){var u=Fo(o[r],i[r]);if(u){if(r>=s)return u;var l=n[r];return u*("desc"==l?-1:1)}}return e.index-t.index}function Oo(e,t,n,r){for(var o=-1,i=e.length,a=n.length,s=-1,u=t.length,l=qc(i-a,0),c=oc(u+l),p=!r;++s<u;)c[s]=t[s];for(;++o<a;)(p||o<i)&&(c[n[o]]=e[o]);for(;l--;)c[s++]=e[o++];return c}function Do(e,t,n,r){for(var o=-1,i=e.length,a=-1,s=n.length,u=-1,l=t.length,c=qc(i-s,0),p=oc(c+l),f=!r;++o<c;)p[o]=e[o];for(var g=o;++u<l;)p[g+u]=t[u];for(;++a<s;)(f||o<i)&&(p[g+n[a]]=e[o++]);return p}function Wo(e,t){var n=-1,r=e.length;for(t||(t=oc(r));++n<r;)t[n]=e[n];return t}function Bo(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=r?r(n[s],e[s],s,n,e):re;u===re&&(u=e[s]),o?On(n,s,u):kn(n,s,u)}return n}function Mo(e,t){return Bo(e,Ep(e),t)}function jo(e,t){return Bo(e,Lp(e),t)}function Ho(e,t){return function(n,r){var o=bf(n)?i:Un,a=t?t():{};return o(n,e,wi(r,2),a)}}function zo(e){return oo(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:re,a=o>2?n[2]:re;for(i=e.length>3&&"function"==typeof i?(o--,i):re,a&&Oi(n[0],n[1],a)&&(i=o<3?re:i,o=1),t=lc(t);++r<o;){var s=n[r];s&&e(t,s,r,i)}return t})}function Vo(e,t){return function(n,r){if(null==n)return n;if(!Js(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=lc(n);(t?i--:++i<o)&&r(a[i],i,a)!==!1;);return n}}function $o(e){return function(t,n,r){for(var o=-1,i=lc(t),a=r(t),s=a.length;s--;){var u=a[e?s:++o];if(n(i[u],u,i)===!1)break}return t}}function Go(e,t,n){function r(){var t=this&&this!==ar&&this instanceof r?i:e;return t.apply(o?n:this,arguments)}var o=t&me,i=Qo(e);return r}function qo(e){return function(t){t=xu(t);var n=j(t)?Z(t):re,r=n?n[0]:t.charAt(0),o=n?Lo(n,1).join(""):t.slice(1);return r[e]()+o}}function Jo(e){return function(t){return h(Ll(sl(t).replace(Hn,"")),e,"")}}function Qo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=dp(e.prototype),r=e.apply(n,t);return au(r)?r:n}}function Ko(e,t,n){function r(){for(var a=arguments.length,s=oc(a),u=a,l=Si(r);u--;)s[u]=arguments[u];var c=a<3&&s[0]!==l&&s[a-1]!==l?[]:G(s,l);if(a-=c.length,a<n)return si(e,t,Xo,r.placeholder,re,s,c,re,re,n-a);var p=this&&this!==ar&&this instanceof r?i:e;return o(p,this,s)}var i=Qo(e);return r}function Yo(e){return function(t,n,r){var o=lc(t);if(!Js(t)){var i=wi(n,3);t=Hu(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:re}}function Zo(e){return mi(function(t){var n=t.length,r=n,o=m.prototype.thru;for(e&&t.reverse();r--;){var i=t[r];if("function"!=typeof i)throw new fc(se);if(o&&!a&&"wrapper"==Ci(i))var a=new m([],!0)}for(r=a?r:n;++r<n;){i=t[r];var s=Ci(i),u="wrapper"==s?Pp(i):re;a=u&&Bi(u[0])&&u[1]==(Ie|Ce|we|Pe)&&!u[4].length&&1==u[9]?a[Ci(u[0])].apply(a,u[3]):1==i.length&&Bi(i)?a[s]():a.thru(i)}return function(){var e=arguments,r=e[0];if(a&&1==e.length&&bf(r))return a.plant(r).value();for(var o=0,i=n?t[o].apply(this,e):r;++o<n;)i=t[o].call(this,i);return i}})}function Xo(e,t,n,r,o,i,a,s,u,l){function c(){for(var m=arguments.length,y=oc(m),b=m;b--;)y[b]=arguments[b];if(h)var C=Si(c),S=W(y,C);if(r&&(y=Oo(y,r,o,h)),i&&(y=Do(y,i,a,h)),m-=S,h&&m<l){var w=G(y,C);return si(e,t,Xo,c.placeholder,n,y,w,s,u,l-m)}var _=f?n:this,I=g?_[e]:e;return m=y.length,s?y=Ki(y,s):d&&m>1&&y.reverse(),p&&u<m&&(y.length=u),this&&this!==ar&&this instanceof c&&(I=v||Qo(I)),I.apply(_,y)}var p=t&Ie,f=t&me,g=t&ye,h=t&(Ce|Se),d=t&Ee,v=g?re:Qo(e);return c}function ei(e,t){return function(n,r){return Er(n,e,t(r),{})}}function ti(e,t){return function(n,r){var o;if(n===re&&r===re)return t;if(n!==re&&(o=n),r!==re){if(o===re)return r;"string"==typeof n||"string"==typeof r?(n=vo(n),r=vo(r)):(n=ho(n),r=ho(r)),o=e(n,r)}return o}}function ni(e){return mi(function(t){return t=f(t,U(wi())),oo(function(n){var r=this;return e(t,function(e){return o(e,r,n)})})})}function ri(e,t){t=t===re?" ":vo(t);var n=t.length;if(n<2)return n?ro(t,e):t;var r=ro(t,Mc(e/Y(t)));return j(t)?Lo(Z(r),0,e).join(""):r.slice(0,e)}function oi(e,t,n,r){function i(){for(var t=-1,u=arguments.length,l=-1,c=r.length,p=oc(c+u),f=this&&this!==ar&&this instanceof i?s:e;++l<c;)p[l]=r[l];for(;u--;)p[l++]=arguments[++t];return o(f,a?n:this,p)}var a=t&me,s=Qo(e);return i}function ii(e){return function(t,n,r){return r&&"number"!=typeof r&&Oi(t,n,r)&&(n=r=re),t=_u(t),n===re?(n=t,t=0):n=_u(n),r=r===re?t<n?1:-1:_u(r),no(t,n,r,e)}}function ai(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Eu(t),n=Eu(n)),e(t,n)}}function si(e,t,n,r,o,i,a,s,u,l){var c=t&Ce,p=c?a:re,f=c?re:a,g=c?i:re,h=c?re:i;t|=c?we:_e,t&=~(c?_e:we),t&be||(t&=~(me|ye));var d=[e,t,o,g,p,h,f,s,u,l],v=n.apply(re,d);return Bi(e)&&Ap(v,d),v.placeholder=r,Zi(v,e,t)}function ui(e){var t=uc[e];return function(e,n){if(e=Eu(e),n=null==n?0:Jc(Iu(n),292),n&&Vc(e)){var r=(xu(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return r=(xu(o)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}function li(e){return function(t){var n=Tp(t);return n==Ye?V(t):n==ot?J(t):k(t,e(t))}}function ci(e,t,n,r,o,i,a,s){var u=t&ye;if(!u&&"function"!=typeof e)throw new fc(se);var l=r?r.length:0;if(l||(t&=~(we|_e),r=o=re),a=a===re?a:qc(Iu(a),0),s=s===re?s:Iu(s),l-=o?o.length:0,t&_e){var c=r,p=o;r=o=re}var f=u?re:Pp(e),g=[e,t,n,r,o,c,p,i,a,s];if(f&&$i(g,f),e=g[0],t=g[1],n=g[2],r=g[3],o=g[4],s=g[9]=g[9]===re?u?0:e.length:qc(g[9]-l,0),!s&&t&(Ce|Se)&&(t&=~(Ce|Se)),t&&t!=me)h=t==Ce||t==Se?Ko(e,t,s):t!=we&&t!=(me|we)||o.length?Xo.apply(re,g):oi(e,t,n,r);else var h=Go(e,t,n);var d=f?Cp:Ap;return Zi(d(h,g),e,t)}function pi(e,t,n,r){return e===re||qs(e,dc[n])&&!yc.call(r,n)?t:e}function fi(e,t,n,r,o,i){return au(e)&&au(t)&&(i.set(t,e),Gr(e,t,re,fi,i),i.delete(t)),e}function gi(e){return du(e)?re:e}function hi(e,t,n,r,o,i){var a=n&de,s=e.length,u=t.length;if(s!=u&&!(a&&u>s))return!1;var l=i.get(e),c=i.get(t);if(l&&c)return l==t&&c==e;var p=-1,f=!0,g=n&ve?new mn:re;for(i.set(e,t),i.set(t,e);++p<s;){var h=e[p],d=t[p];if(r)var m=a?r(d,h,p,t,e,i):r(h,d,p,e,t,i);if(m!==re){if(m)continue;f=!1;break}if(g){if(!v(t,function(e,t){if(!R(g,t)&&(h===e||o(h,e,n,r,i)))return g.push(t)})){f=!1;break}}else if(h!==d&&!o(h,d,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f}function di(e,t,n,r,o,i,a){switch(n){case pt:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ct:return!(e.byteLength!=t.byteLength||!i(new Lc(e),new Lc(t)));case $e:case Ge:case Ze:return qs(+e,+t);case Je:return e.name==t.name&&e.message==t.message;case rt:case it:return e==t+"";case Ye:var s=V;case ot:var u=r&de;if(s||(s=q),e.size!=t.size&&!u)return!1;var l=a.get(e);if(l)return l==t;r|=ve,a.set(e,t);var c=hi(s(e),s(t),r,o,i,a);return a.delete(e),c;case at:if(gp)return gp.call(e)==gp.call(t)}return!1}function vi(e,t,n,r,o,i){var a=n&de,s=yi(e),u=s.length,l=yi(t),c=l.length;if(u!=c&&!a)return!1;for(var p=u;p--;){var f=s[p];if(!(a?f in t:yc.call(t,f)))return!1}var g=i.get(e),h=i.get(t);if(g&&h)return g==t&&h==e;var d=!0;i.set(e,t),i.set(t,e);for(var v=a;++p<u;){f=s[p];var m=e[f],y=t[f];if(r)var b=a?r(y,m,f,t,e,i):r(m,y,f,e,t,i);if(!(b===re?m===y||o(m,y,n,r,i):b)){d=!1;break}v||(v="constructor"==f)}if(d&&!v){var C=e.constructor,S=t.constructor;C!=S&&"constructor"in e&&"constructor"in t&&!("function"==typeof C&&C instanceof C&&"function"==typeof S&&S instanceof S)&&(d=!1)}return i.delete(e),i.delete(t),d}function mi(e){return Np(Ji(e,re,da),e+"")}function yi(e){return ur(e,Hu,Ep)}function bi(e){return ur(e,zu,Lp)}function Ci(e){for(var t=e.name+"",n=ap[t],r=yc.call(ap,t)?n.length:0;r--;){var o=n[r],i=o.func;if(null==i||i==e)return o.name}return t}function Si(e){var t=yc.call(n,"placeholder")?n:e;return t.placeholder}function wi(){var e=n.iteratee||Ul;return e=e===Ul?Br:e,arguments.length?e(arguments[0],arguments[1]):e}function _i(e,t){var n=e.__data__;return Wi(t)?n["string"==typeof t?"string":"hash"]:n.map}function Ii(e){for(var t=Hu(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Hi(o)]}return t}function Pi(e,t){var n=M(e,t);return Rr(n)?n:re}function Ei(e){var t=yc.call(e,Rc),n=e[Rc];try{e[Rc]=re;var r=!0}catch(e){}var o=Sc.call(e);return r&&(t?e[Rc]=n:delete e[Rc]),o}function Li(e,t,n){for(var r=-1,o=n.length;++r<o;){var i=n[r],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=Jc(t,e+a);break;case"takeRight":e=qc(e,t-a)}}return{start:e,end:t}}function Ti(e){var t=e.match(Bt);return t?t[1].split(Mt):[]}function xi(e,t,n){t=Eo(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=ta(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=null==e?0:e.length,!!o&&iu(o)&&Ri(a,o)&&(bf(e)||yf(e)))}function Ai(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&yc.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ki(e){return"function"!=typeof e.constructor||ji(e)?{}:dp(xc(e))}function Ni(e,t,n){var r=e.constructor;switch(t){case ct:return xo(e);case $e:case Ge:return new r(+e);case pt:return Ao(e,n);case ft:case gt:case ht:case dt:case vt:case mt:case yt:case bt:case Ct:return Uo(e,n);case Ye:return new r;case Ze:case it:return new r(e);case rt:return ko(e);case ot:return new r;case at:return No(e)}}function Ui(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(Wt,"{\n/* [wrapped with "+t+"] */\n")}function Fi(e){return bf(e)||yf(e)||!!(Uc&&e&&e[Uc])}function Ri(e,t){var n=typeof e;return t=null==t?Re:t,!!t&&("number"==n||"symbol"!=n&&Kt.test(e))&&e>-1&&e%1==0&&e<t}function Oi(e,t,n){if(!au(n))return!1;var r=typeof t;return!!("number"==r?Js(n)&&Ri(t,n.length):"string"==r&&t in n)&&qs(n[t],e)}function Di(e,t){if(bf(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!yu(e))||(Nt.test(e)||!kt.test(e)||null!=t&&e in lc(t))}function Wi(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function Bi(e){var t=Ci(e),r=n[t];if("function"!=typeof r||!(t in E.prototype))return!1;if(e===r)return!0;var o=Pp(r);return!!o&&e===o[0]}function Mi(e){return!!Cc&&Cc in e}function ji(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||dc;return e===n}function Hi(e){return e===e&&!au(e)}function zi(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==re||e in lc(n)))}}function Vi(e){var t=Us(e,function(e){return n.size===ce&&n.clear(),e}),n=t.cache;return t}function $i(e,t){var n=e[1],r=t[1],o=n|r,i=o<(me|ye|Ie),a=r==Ie&&n==Ce||r==Ie&&n==Pe&&e[7].length<=t[8]||r==(Ie|Pe)&&t[7].length<=t[8]&&n==Ce;if(!i&&!a)return e;r&me&&(e[2]=t[2],o|=n&me?0:be);var s=t[3];if(s){var u=e[3];e[3]=u?Oo(u,s,t[4]):s,e[4]=u?G(e[3],pe):t[4]}return s=t[5],s&&(u=e[5],e[5]=u?Do(u,s,t[6]):s,e[6]=u?G(e[5],pe):t[6]),s=t[7],s&&(e[7]=s),r&Ie&&(e[8]=null==e[8]?t[8]:Jc(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o,e}function Gi(e){var t=[];if(null!=e)for(var n in lc(e))t.push(n);return t}function qi(e){return Sc.call(e)}function Ji(e,t,n){return t=qc(t===re?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=qc(r.length-t,0),s=oc(a);++i<a;)s[i]=r[t+i];i=-1;for(var u=oc(t+1);++i<t;)u[i]=r[i];return u[t]=n(s),o(e,this,u)}}function Qi(e,t){return t.length<2?e:sr(e,lo(t,0,-1))}function Ki(e,t){for(var n=e.length,r=Jc(t.length,n),o=Wo(e);r--;){var i=t[r];e[r]=Ri(i,n)?o[i]:re}return e}function Yi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}function Zi(e,t,n){var r=t+"";return Np(e,Ui(r,ra(Ti(r),n)))}function Xi(e){var t=0,n=0;return function(){var r=Qc(),o=Ae-(r-n);if(n=r,o>0){if(++t>=xe)return arguments[0]}else t=0;return e.apply(re,arguments)}}function ea(e,t){var n=-1,r=e.length,o=r-1;for(t=t===re?r:t;++n<t;){var i=to(n,o),a=e[i];e[i]=e[n],e[n]=a}return e.length=t,e}function ta(e){if("string"==typeof e||yu(e))return e;var t=e+"";return"0"==t&&1/e==-Fe?"-0":t}function na(e){if(null!=e){try{return mc.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function ra(e,t){return a(je,function(n){var r="_."+n[0];t&n[1]&&!c(e,r)&&e.push(r)}),e.sort()}function oa(e){if(e instanceof E)return e.clone();var t=new m(e.__wrapped__,e.__chain__);return t.__actions__=Wo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function ia(e,t,n){t=(n?Oi(e,t,n):t===re)?1:qc(Iu(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var o=0,i=0,a=oc(Mc(r/t));o<r;)a[i++]=lo(e,o,o+=t);return a}function aa(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o}function sa(){var e=arguments.length;if(!e)return[];for(var t=oc(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return g(bf(n)?Wo(n):[n],er(t,1))}function ua(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===re?1:Iu(t),lo(e,t<0?0:t,r)):[]}function la(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===re?1:Iu(t),t=r-t,lo(e,0,t<0?0:t)):[]}function ca(e,t){return e&&e.length?Co(e,wi(t,3),!0,!0):[]}function pa(e,t){return e&&e.length?Co(e,wi(t,3),!0):[]}function fa(e,t,n,r){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&Oi(e,t,n)&&(n=0,r=o),Zn(e,t,n,r)):[]}function ga(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:Iu(n);return o<0&&(o=qc(r+o,0)),C(e,wi(t,3),o)}function ha(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return n!==re&&(o=Iu(n),o=n<0?qc(r+o,0):Jc(o,r-1)),C(e,wi(t,3),o,!0)}function da(e){var t=null==e?0:e.length;return t?er(e,1):[]}function va(e){var t=null==e?0:e.length;return t?er(e,Fe):[]}function ma(e,t){var n=null==e?0:e.length;return n?(t=t===re?1:Iu(t),er(e,t)):[]}function ya(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var o=e[t];r[o[0]]=o[1]}return r}function ba(e){return e&&e.length?e[0]:re}function Ca(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:Iu(n);return o<0&&(o=qc(r+o,0)),S(e,t,o)}function Sa(e){var t=null==e?0:e.length;return t?lo(e,0,-1):[]}function wa(e,t){return null==e?"":$c.call(e,t)}function _a(e){var t=null==e?0:e.length;return t?e[t-1]:re}function Ia(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r;return n!==re&&(o=Iu(n),o=o<0?qc(r+o,0):Jc(o,r-1)),t===t?K(e,t,o):C(e,_,o,!0)}function Pa(e,t){return e&&e.length?Jr(e,Iu(t)):re}function Ea(e,t){return e&&e.length&&t&&t.length?Xr(e,t):e}function La(e,t,n){return e&&e.length&&t&&t.length?Xr(e,t,wi(n,2)):e}function Ta(e,t,n){return e&&e.length&&t&&t.length?Xr(e,t,re,n):e}function xa(e,t){var n=[];if(!e||!e.length)return n;var r=-1,o=[],i=e.length;for(t=wi(t,3);++r<i;){var a=e[r];t(a,r,e)&&(n.push(a),o.push(r))}return eo(e,o),n}function Aa(e){return null==e?e:Zc.call(e)}function ka(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&Oi(e,t,n)?(t=0,n=r):(t=null==t?0:Iu(t),n=n===re?r:Iu(n)),lo(e,t,n)):[]}function Na(e,t){return po(e,t)}function Ua(e,t,n){return fo(e,t,wi(n,2))}function Fa(e,t){var n=null==e?0:e.length;if(n){var r=po(e,t);if(r<n&&qs(e[r],t))return r}return-1}function Ra(e,t){return po(e,t,!0)}function Oa(e,t,n){return fo(e,t,wi(n,2),!0)}function Da(e,t){var n=null==e?0:e.length;if(n){var r=po(e,t,!0)-1;if(qs(e[r],t))return r}return-1}function Wa(e){return e&&e.length?go(e):[]}function Ba(e,t){return e&&e.length?go(e,wi(t,2)):[]}function Ma(e){var t=null==e?0:e.length;return t?lo(e,1,t):[]}function ja(e,t,n){return e&&e.length?(t=n||t===re?1:Iu(t),lo(e,0,t<0?0:t)):[]}function Ha(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===re?1:Iu(t),t=r-t,lo(e,t<0?0:t,r)):[]}function za(e,t){return e&&e.length?Co(e,wi(t,3),!1,!0):[]}function Va(e,t){return e&&e.length?Co(e,wi(t,3)):[]}function $a(e){return e&&e.length?mo(e):[]}function Ga(e,t){return e&&e.length?mo(e,wi(t,2)):[]}function qa(e,t){return t="function"==typeof t?t:re,e&&e.length?mo(e,re,t):[]}function Ja(e){if(!e||!e.length)return[];var t=0;return e=l(e,function(e){if(Qs(e))return t=qc(e.length,t),!0}),A(t,function(t){return f(e,P(t))})}function Qa(e,t){if(!e||!e.length)return[];var n=Ja(e);return null==t?n:f(n,function(e){return o(t,re,e)})}function Ka(e,t){return _o(e||[],t||[],kn)}function Ya(e,t){return _o(e||[],t||[],so)}function Za(e){var t=n(e);return t.__chain__=!0,t}function Xa(e,t){return t(e),e}function es(e,t){return t(e)}function ts(){return Za(this)}function ns(){return new m(this.value(),this.__chain__)}function rs(){this.__values__===re&&(this.__values__=wu(this.value()));
var e=this.__index__>=this.__values__.length,t=e?re:this.__values__[this.__index__++];return{done:e,value:t}}function os(){return this}function is(e){for(var t,n=this;n instanceof r;){var o=oa(n);o.__index__=0,o.__values__=re,t?i.__wrapped__=o:t=o;var i=o;n=n.__wrapped__}return i.__wrapped__=e,t}function as(){var e=this.__wrapped__;if(e instanceof E){var t=e;return this.__actions__.length&&(t=new E(this)),t=t.reverse(),t.__actions__.push({func:es,args:[Aa],thisArg:re}),new m(t,this.__chain__)}return this.thru(Aa)}function ss(){return So(this.__wrapped__,this.__actions__)}function us(e,t,n){var r=bf(e)?u:Gn;return n&&Oi(e,t,n)&&(t=re),r(e,wi(t,3))}function ls(e,t){var n=bf(e)?l:Xn;return n(e,wi(t,3))}function cs(e,t){return er(vs(e,t),1)}function ps(e,t){return er(vs(e,t),Fe)}function fs(e,t,n){return n=n===re?1:Iu(n),er(vs(e,t),n)}function gs(e,t){var n=bf(e)?a:vp;return n(e,wi(t,3))}function hs(e,t){var n=bf(e)?s:mp;return n(e,wi(t,3))}function ds(e,t,n,r){e=Js(e)?e:tl(e),n=n&&!r?Iu(n):0;var o=e.length;return n<0&&(n=qc(o+n,0)),mu(e)?n<=o&&e.indexOf(t,n)>-1:!!o&&S(e,t,n)>-1}function vs(e,t){var n=bf(e)?f:zr;return n(e,wi(t,3))}function ms(e,t,n,r){return null==e?[]:(bf(t)||(t=null==t?[]:[t]),n=r?re:n,bf(n)||(n=null==n?[]:[n]),Qr(e,t,n))}function ys(e,t,n){var r=bf(e)?h:L,o=arguments.length<3;return r(e,wi(t,4),n,o,vp)}function bs(e,t,n){var r=bf(e)?d:L,o=arguments.length<3;return r(e,wi(t,4),n,o,mp)}function Cs(e,t){var n=bf(e)?l:Xn;return n(e,Fs(wi(t,3)))}function Ss(e){var t=bf(e)?Ln:io;return t(e)}function ws(e,t,n){t=(n?Oi(e,t,n):t===re)?1:Iu(t);var r=bf(e)?Tn:ao;return r(e,t)}function _s(e){var t=bf(e)?xn:uo;return t(e)}function Is(e){if(null==e)return 0;if(Js(e))return mu(e)?Y(e):e.length;var t=Tp(e);return t==Ye||t==ot?e.size:Mr(e).length}function Ps(e,t,n){var r=bf(e)?v:co;return n&&Oi(e,t,n)&&(t=re),r(e,wi(t,3))}function Es(e,t){if("function"!=typeof t)throw new fc(se);return e=Iu(e),function(){if(--e<1)return t.apply(this,arguments)}}function Ls(e,t,n){return t=n?re:t,t=e&&null==t?e.length:t,ci(e,Ie,re,re,re,re,t)}function Ts(e,t){var n;if("function"!=typeof t)throw new fc(se);return e=Iu(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=re),n}}function xs(e,t,n){t=n?re:t;var r=ci(e,Ce,re,re,re,re,re,t);return r.placeholder=xs.placeholder,r}function As(e,t,n){t=n?re:t;var r=ci(e,Se,re,re,re,re,re,t);return r.placeholder=As.placeholder,r}function ks(e,t,n){function r(t){var n=f,r=g;return f=g=re,y=t,d=e.apply(r,n)}function o(e){return y=e,v=kp(s,t),b?r(e):d}function i(e){var n=e-m,r=e-y,o=t-n;return C?Jc(o,h-r):o}function a(e){var n=e-m,r=e-y;return m===re||n>=t||n<0||C&&r>=h}function s(){var e=sf();return a(e)?u(e):void(v=kp(s,i(e)))}function u(e){return v=re,S&&f?r(e):(f=g=re,d)}function l(){v!==re&&_p(v),y=0,f=m=g=v=re}function c(){return v===re?d:u(sf())}function p(){var e=sf(),n=a(e);if(f=arguments,g=this,m=e,n){if(v===re)return o(m);if(C)return _p(v),v=kp(s,t),r(m)}return v===re&&(v=kp(s,t)),d}var f,g,h,d,v,m,y=0,b=!1,C=!1,S=!0;if("function"!=typeof e)throw new fc(se);return t=Eu(t)||0,au(n)&&(b=!!n.leading,C="maxWait"in n,h=C?qc(Eu(n.maxWait)||0,t):h,S="trailing"in n?!!n.trailing:S),p.cancel=l,p.flush=c,p}function Ns(e){return ci(e,Ee)}function Us(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new fc(se);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(Us.Cache||pn),n}function Fs(e){if("function"!=typeof e)throw new fc(se);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Rs(e){return Ts(2,e)}function Os(e,t){if("function"!=typeof e)throw new fc(se);return t=t===re?t:Iu(t),oo(e,t)}function Ds(e,t){if("function"!=typeof e)throw new fc(se);return t=null==t?0:qc(Iu(t),0),oo(function(n){var r=n[t],i=Lo(n,0,t);return r&&g(i,r),o(e,this,i)})}function Ws(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new fc(se);return au(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ks(e,t,{leading:r,maxWait:t,trailing:o})}function Bs(e){return Ls(e,1)}function Ms(e,t){return gf(Po(t),e)}function js(){if(!arguments.length)return[];var e=arguments[0];return bf(e)?e:[e]}function Hs(e){return Bn(e,he)}function zs(e,t){return t="function"==typeof t?t:re,Bn(e,he,t)}function Vs(e){return Bn(e,fe|he)}function $s(e,t){return t="function"==typeof t?t:re,Bn(e,fe|he,t)}function Gs(e,t){return null==t||jn(e,t,Hu(t))}function qs(e,t){return e===t||e!==e&&t!==t}function Js(e){return null!=e&&iu(e.length)&&!ru(e)}function Qs(e){return su(e)&&Js(e)}function Ks(e){return e===!0||e===!1||su(e)&&cr(e)==$e}function Ys(e){return su(e)&&1===e.nodeType&&!du(e)}function Zs(e){if(null==e)return!0;if(Js(e)&&(bf(e)||"string"==typeof e||"function"==typeof e.splice||Sf(e)||Ef(e)||yf(e)))return!e.length;var t=Tp(e);if(t==Ye||t==ot)return!e.size;if(ji(e))return!Mr(e).length;for(var n in e)if(yc.call(e,n))return!1;return!0}function Xs(e,t){return kr(e,t)}function eu(e,t,n){n="function"==typeof n?n:re;var r=n?n(e,t):re;return r===re?kr(e,t,re,n):!!r}function tu(e){if(!su(e))return!1;var t=cr(e);return t==Je||t==qe||"string"==typeof e.message&&"string"==typeof e.name&&!du(e)}function nu(e){return"number"==typeof e&&Vc(e)}function ru(e){if(!au(e))return!1;var t=cr(e);return t==Qe||t==Ke||t==Ve||t==nt}function ou(e){return"number"==typeof e&&e==Iu(e)}function iu(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Re}function au(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function su(e){return null!=e&&"object"==typeof e}function uu(e,t){return e===t||Fr(e,t,Ii(t))}function lu(e,t,n){return n="function"==typeof n?n:re,Fr(e,t,Ii(t),n)}function cu(e){return hu(e)&&e!=+e}function pu(e){if(xp(e))throw new ac(ae);return Rr(e)}function fu(e){return null===e}function gu(e){return null==e}function hu(e){return"number"==typeof e||su(e)&&cr(e)==Ze}function du(e){if(!su(e)||cr(e)!=et)return!1;var t=xc(e);if(null===t)return!0;var n=yc.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&mc.call(n)==wc}function vu(e){return ou(e)&&e>=-Re&&e<=Re}function mu(e){return"string"==typeof e||!bf(e)&&su(e)&&cr(e)==it}function yu(e){return"symbol"==typeof e||su(e)&&cr(e)==at}function bu(e){return e===re}function Cu(e){return su(e)&&Tp(e)==ut}function Su(e){return su(e)&&cr(e)==lt}function wu(e){if(!e)return[];if(Js(e))return mu(e)?Z(e):Wo(e);if(Fc&&e[Fc])return z(e[Fc]());var t=Tp(e),n=t==Ye?V:t==ot?q:tl;return n(e)}function _u(e){if(!e)return 0===e?e:0;if(e=Eu(e),e===Fe||e===-Fe){var t=e<0?-1:1;return t*Oe}return e===e?e:0}function Iu(e){var t=_u(e),n=t%1;return t===t?n?t-n:t:0}function Pu(e){return e?Wn(Iu(e),0,We):0}function Eu(e){if("number"==typeof e)return e;if(yu(e))return De;if(au(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=au(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=N(e);var n=qt.test(e);return n||Qt.test(e)?rr(e.slice(2),n?2:8):Gt.test(e)?De:+e}function Lu(e){return Bo(e,zu(e))}function Tu(e){return e?Wn(Iu(e),-Re,Re):0===e?e:0}function xu(e){return null==e?"":vo(e)}function Au(e,t){var n=dp(e);return null==t?n:Fn(n,t)}function ku(e,t){return b(e,wi(t,3),tr)}function Nu(e,t){return b(e,wi(t,3),or)}function Uu(e,t){return null==e?e:yp(e,wi(t,3),zu)}function Fu(e,t){return null==e?e:bp(e,wi(t,3),zu)}function Ru(e,t){return e&&tr(e,wi(t,3))}function Ou(e,t){return e&&or(e,wi(t,3))}function Du(e){return null==e?[]:ir(e,Hu(e))}function Wu(e){return null==e?[]:ir(e,zu(e))}function Bu(e,t,n){var r=null==e?re:sr(e,t);return r===re?n:r}function Mu(e,t){return null!=e&&xi(e,t,yr)}function ju(e,t){return null!=e&&xi(e,t,wr)}function Hu(e){return Js(e)?En(e):Mr(e)}function zu(e){return Js(e)?En(e,!0):jr(e)}function Vu(e,t){var n={};return t=wi(t,3),tr(e,function(e,r,o){On(n,t(e,r,o),e)}),n}function $u(e,t){var n={};return t=wi(t,3),tr(e,function(e,r,o){On(n,r,t(e,r,o))}),n}function Gu(e,t){return qu(e,Fs(wi(t)))}function qu(e,t){if(null==e)return{};var n=f(bi(e),function(e){return[e]});return t=wi(t),Yr(e,n,function(e,n){return t(e,n[0])})}function Ju(e,t,n){t=Eo(t,e);var r=-1,o=t.length;for(o||(o=1,e=re);++r<o;){var i=null==e?re:e[ta(t[r])];i===re&&(r=o,i=n),e=ru(i)?i.call(e):i}return e}function Qu(e,t,n){return null==e?e:so(e,t,n)}function Ku(e,t,n,r){return r="function"==typeof r?r:re,null==e?e:so(e,t,n,r)}function Yu(e,t,n){var r=bf(e),o=r||Sf(e)||Ef(e);if(t=wi(t,4),null==n){var i=e&&e.constructor;n=o?r?new i:[]:au(e)&&ru(i)?dp(xc(e)):{}}return(o?a:tr)(e,function(e,r,o){return t(n,e,r,o)}),n}function Zu(e,t){return null==e||yo(e,t)}function Xu(e,t,n){return null==e?e:bo(e,t,Po(n))}function el(e,t,n,r){return r="function"==typeof r?r:re,null==e?e:bo(e,t,Po(n),r)}function tl(e){return null==e?[]:F(e,Hu(e))}function nl(e){return null==e?[]:F(e,zu(e))}function rl(e,t,n){return n===re&&(n=t,t=re),n!==re&&(n=Eu(n),n=n===n?n:0),t!==re&&(t=Eu(t),t=t===t?t:0),Wn(Eu(e),t,n)}function ol(e,t,n){return t=_u(t),n===re?(n=t,t=0):n=_u(n),e=Eu(e),Ir(e,t,n)}function il(e,t,n){if(n&&"boolean"!=typeof n&&Oi(e,t,n)&&(t=n=re),n===re&&("boolean"==typeof t?(n=t,t=re):"boolean"==typeof e&&(n=e,e=re)),e===re&&t===re?(e=0,t=1):(e=_u(e),t===re?(t=e,e=0):t=_u(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var o=Yc();return Jc(e+o*(t-e+nr("1e-"+((o+"").length-1))),t)}return to(e,t)}function al(e){return Zf(xu(e).toLowerCase())}function sl(e){return e=xu(e),e&&e.replace(Yt,br).replace(zn,"")}function ul(e,t,n){e=xu(e),t=vo(t);var r=e.length;n=n===re?r:Wn(Iu(n),0,r);var o=n;return n-=t.length,n>=0&&e.slice(n,o)==t}function ll(e){return e=xu(e),e&&Lt.test(e)?e.replace(Pt,Cr):e}function cl(e){return e=xu(e),e&&Rt.test(e)?e.replace(Ft,"\\$&"):e}function pl(e,t,n){e=xu(e),t=Iu(t);var r=t?Y(e):0;if(!t||r>=t)return e;var o=(t-r)/2;return ri(jc(o),n)+e+ri(Mc(o),n)}function fl(e,t,n){e=xu(e),t=Iu(t);var r=t?Y(e):0;return t&&r<t?e+ri(t-r,n):e}function gl(e,t,n){e=xu(e),t=Iu(t);var r=t?Y(e):0;return t&&r<t?ri(t-r,n)+e:e}function hl(e,t,n){return n||null==t?t=0:t&&(t=+t),Kc(xu(e).replace(Ot,""),t||0)}function dl(e,t,n){return t=(n?Oi(e,t,n):t===re)?1:Iu(t),ro(xu(e),t)}function vl(){var e=arguments,t=xu(e[0]);return e.length<3?t:t.replace(e[1],e[2])}function ml(e,t,n){return n&&"number"!=typeof n&&Oi(e,t,n)&&(t=n=re),(n=n===re?We:n>>>0)?(e=xu(e),e&&("string"==typeof t||null!=t&&!If(t))&&(t=vo(t),!t&&j(e))?Lo(Z(e),0,n):e.split(t,n)):[]}function yl(e,t,n){return e=xu(e),n=null==n?0:Wn(Iu(n),0,e.length),t=vo(t),e.slice(n,n+t.length)==t}function bl(e,t,r){var o=n.templateSettings;r&&Oi(e,t,r)&&(t=re),e=xu(e),t=kf({},t,o,pi);var i,a,s=kf({},t.imports,o.imports,pi),u=Hu(s),l=F(s,u),c=0,p=t.interpolate||Zt,f="__p += '",g=cc((t.escape||Zt).source+"|"+p.source+"|"+(p===At?Vt:Zt).source+"|"+(t.evaluate||Zt).source+"|$","g"),h="//# sourceURL="+(yc.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Qn+"]")+"\n";e.replace(g,function(t,n,r,o,s,u){return r||(r=o),f+=e.slice(c,u).replace(Xt,B),n&&(i=!0,f+="' +\n__e("+n+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+t.length,t}),f+="';\n";var d=yc.call(t,"variable")&&t.variable;if(d){if(Ht.test(d))throw new ac(ue)}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(St,""):f).replace(wt,"$1").replace(_t,"$1;"),f="function("+(d||"obj")+") {\n"+(d?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var v=Xf(function(){return sc(u,h+"return "+f).apply(re,l)});if(v.source=f,tu(v))throw v;return v}function Cl(e){return xu(e).toLowerCase()}function Sl(e){return xu(e).toUpperCase()}function wl(e,t,n){if(e=xu(e),e&&(n||t===re))return N(e);if(!e||!(t=vo(t)))return e;var r=Z(e),o=Z(t),i=O(r,o),a=D(r,o)+1;return Lo(r,i,a).join("")}function _l(e,t,n){if(e=xu(e),e&&(n||t===re))return e.slice(0,X(e)+1);if(!e||!(t=vo(t)))return e;var r=Z(e),o=D(r,Z(t))+1;return Lo(r,0,o).join("")}function Il(e,t,n){if(e=xu(e),e&&(n||t===re))return e.replace(Ot,"");if(!e||!(t=vo(t)))return e;var r=Z(e),o=O(r,Z(t));return Lo(r,o).join("")}function Pl(e,t){var n=Le,r=Te;if(au(t)){var o="separator"in t?t.separator:o;n="length"in t?Iu(t.length):n,r="omission"in t?vo(t.omission):r}e=xu(e);var i=e.length;if(j(e)){var a=Z(e);i=a.length}if(n>=i)return e;var s=n-Y(r);if(s<1)return r;var u=a?Lo(a,0,s).join(""):e.slice(0,s);if(o===re)return u+r;if(a&&(s+=u.length-s),If(o)){if(e.slice(s).search(o)){var l,c=u;for(o.global||(o=cc(o.source,xu($t.exec(o))+"g")),o.lastIndex=0;l=o.exec(c);)var p=l.index;u=u.slice(0,p===re?s:p)}}else if(e.indexOf(vo(o),s)!=s){var f=u.lastIndexOf(o);f>-1&&(u=u.slice(0,f))}return u+r}function El(e){return e=xu(e),e&&Et.test(e)?e.replace(It,Sr):e}function Ll(e,t,n){return e=xu(e),t=n?re:t,t===re?H(e)?ne(e):y(e):e.match(t)||[]}function Tl(e){var t=null==e?0:e.length,n=wi();return e=t?f(e,function(e){if("function"!=typeof e[1])throw new fc(se);return[n(e[0]),e[1]]}):[],oo(function(n){for(var r=-1;++r<t;){var i=e[r];if(o(i[0],this,n))return o(i[1],this,n)}})}function xl(e){return Mn(Bn(e,fe))}function Al(e){return function(){return e}}function kl(e,t){return null==e||e!==e?t:e}function Nl(e){return e}function Ul(e){return Br("function"==typeof e?e:Bn(e,fe))}function Fl(e){return Vr(Bn(e,fe))}function Rl(e,t){return $r(e,Bn(t,fe))}function Ol(e,t,n){var r=Hu(t),o=ir(t,r);null!=n||au(t)&&(o.length||!r.length)||(n=t,t=e,e=this,o=ir(t,Hu(t)));var i=!(au(n)&&"chain"in n&&!n.chain),s=ru(e);return a(o,function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(i||t){var n=e(this.__wrapped__),o=n.__actions__=Wo(this.__actions__);return o.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,g([this.value()],arguments))})}),e}function Dl(){return ar._===this&&(ar._=_c),this}function Wl(){}function Bl(e){return e=Iu(e),oo(function(t){return Jr(t,e)})}function Ml(e){return Di(e)?P(ta(e)):Zr(e)}function jl(e){return function(t){return null==e?re:sr(e,t)}}function Hl(){return[]}function zl(){return!1}function Vl(){return{}}function $l(){return""}function Gl(){return!0}function ql(e,t){if(e=Iu(e),e<1||e>Re)return[];var n=We,r=Jc(e,We);t=wi(t),e-=We;for(var o=A(r,t);++n<e;)t(n);return o}function Jl(e){return bf(e)?f(e,ta):yu(e)?[e]:Wo(Up(xu(e)))}function Ql(e){var t=++bc;return xu(e)+t}function Kl(e){return e&&e.length?qn(e,Nl,pr):re}function Yl(e,t){return e&&e.length?qn(e,wi(t,2),pr):re}function Zl(e){return I(e,Nl)}function Xl(e,t){return I(e,wi(t,2))}function ec(e){return e&&e.length?qn(e,Nl,Hr):re}function tc(e,t){return e&&e.length?qn(e,wi(t,2),Hr):re}function nc(e){return e&&e.length?x(e,Nl):0}function rc(e,t){return e&&e.length?x(e,wi(t,2)):0}t=null==t?ar:_r.defaults(ar.Object(),t,_r.pick(ar,Jn));var oc=t.Array,ic=t.Date,ac=t.Error,sc=t.Function,uc=t.Math,lc=t.Object,cc=t.RegExp,pc=t.String,fc=t.TypeError,gc=oc.prototype,hc=sc.prototype,dc=lc.prototype,vc=t["__core-js_shared__"],mc=hc.toString,yc=dc.hasOwnProperty,bc=0,Cc=function(){var e=/[^.]+$/.exec(vc&&vc.keys&&vc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Sc=dc.toString,wc=mc.call(lc),_c=ar._,Ic=cc("^"+mc.call(yc).replace(Ft,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Pc=lr?t.Buffer:re,Ec=t.Symbol,Lc=t.Uint8Array,Tc=Pc?Pc.allocUnsafe:re,xc=$(lc.getPrototypeOf,lc),Ac=lc.create,kc=dc.propertyIsEnumerable,Nc=gc.splice,Uc=Ec?Ec.isConcatSpreadable:re,Fc=Ec?Ec.iterator:re,Rc=Ec?Ec.toStringTag:re,Oc=function(){try{var e=Pi(lc,"defineProperty");return e({},"",{}),e}catch(e){}}(),Dc=t.clearTimeout!==ar.clearTimeout&&t.clearTimeout,Wc=ic&&ic.now!==ar.Date.now&&ic.now,Bc=t.setTimeout!==ar.setTimeout&&t.setTimeout,Mc=uc.ceil,jc=uc.floor,Hc=lc.getOwnPropertySymbols,zc=Pc?Pc.isBuffer:re,Vc=t.isFinite,$c=gc.join,Gc=$(lc.keys,lc),qc=uc.max,Jc=uc.min,Qc=ic.now,Kc=t.parseInt,Yc=uc.random,Zc=gc.reverse,Xc=Pi(t,"DataView"),ep=Pi(t,"Map"),tp=Pi(t,"Promise"),np=Pi(t,"Set"),rp=Pi(t,"WeakMap"),op=Pi(lc,"create"),ip=rp&&new rp,ap={},sp=na(Xc),up=na(ep),lp=na(tp),cp=na(np),pp=na(rp),fp=Ec?Ec.prototype:re,gp=fp?fp.valueOf:re,hp=fp?fp.toString:re,dp=function(){function e(){}return function(t){if(!au(t))return{};if(Ac)return Ac(t);e.prototype=t;var n=new e;return e.prototype=re,n}}();n.templateSettings={escape:Tt,evaluate:xt,interpolate:At,variable:"",imports:{_:n}},n.prototype=r.prototype,n.prototype.constructor=n,m.prototype=dp(r.prototype),m.prototype.constructor=m,E.prototype=dp(r.prototype),E.prototype.constructor=E,Dt.prototype.clear=jt,Dt.prototype.delete=en,Dt.prototype.get=tn,Dt.prototype.has=nn,Dt.prototype.set=rn,on.prototype.clear=an,on.prototype.delete=sn,on.prototype.get=un,on.prototype.has=ln,on.prototype.set=cn,pn.prototype.clear=fn,pn.prototype.delete=gn,pn.prototype.get=hn,pn.prototype.has=dn,pn.prototype.set=vn,mn.prototype.add=mn.prototype.push=yn,mn.prototype.has=bn,Cn.prototype.clear=Sn,Cn.prototype.delete=wn,Cn.prototype.get=_n,Cn.prototype.has=In,Cn.prototype.set=Pn;var vp=Vo(tr),mp=Vo(or,!0),yp=$o(),bp=$o(!0),Cp=ip?function(e,t){return ip.set(e,t),e}:Nl,Sp=Oc?function(e,t){return Oc(e,"toString",{configurable:!0,enumerable:!1,value:Al(t),writable:!0})}:Nl,wp=oo,_p=Dc||function(e){return ar.clearTimeout(e)},Ip=np&&1/q(new np([,-0]))[1]==Fe?function(e){return new np(e)}:Wl,Pp=ip?function(e){return ip.get(e)}:Wl,Ep=Hc?function(e){return null==e?[]:(e=lc(e),l(Hc(e),function(t){return kc.call(e,t)}))}:Hl,Lp=Hc?function(e){for(var t=[];e;)g(t,Ep(e)),e=xc(e);return t}:Hl,Tp=cr;(Xc&&Tp(new Xc(new ArrayBuffer(1)))!=pt||ep&&Tp(new ep)!=Ye||tp&&Tp(tp.resolve())!=tt||np&&Tp(new np)!=ot||rp&&Tp(new rp)!=ut)&&(Tp=function(e){var t=cr(e),n=t==et?e.constructor:re,r=n?na(n):"";if(r)switch(r){case sp:return pt;case up:return Ye;case lp:return tt;case cp:return ot;case pp:return ut}return t});var xp=vc?ru:zl,Ap=Xi(Cp),kp=Bc||function(e,t){return ar.setTimeout(e,t)},Np=Xi(Sp),Up=Vi(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ut,function(e,n,r,o){t.push(r?o.replace(zt,"$1"):n||e)}),t}),Fp=oo(function(e,t){return Qs(e)?$n(e,er(t,1,Qs,!0)):[]}),Rp=oo(function(e,t){var n=_a(t);return Qs(n)&&(n=re),Qs(e)?$n(e,er(t,1,Qs,!0),wi(n,2)):[]}),Op=oo(function(e,t){var n=_a(t);return Qs(n)&&(n=re),Qs(e)?$n(e,er(t,1,Qs,!0),re,n):[]}),Dp=oo(function(e){var t=f(e,Io);return t.length&&t[0]===e[0]?Pr(t):[]}),Wp=oo(function(e){var t=_a(e),n=f(e,Io);return t===_a(n)?t=re:n.pop(),n.length&&n[0]===e[0]?Pr(n,wi(t,2)):[]}),Bp=oo(function(e){var t=_a(e),n=f(e,Io);return t="function"==typeof t?t:re,t&&n.pop(),n.length&&n[0]===e[0]?Pr(n,re,t):[]}),Mp=oo(Ea),jp=mi(function(e,t){var n=null==e?0:e.length,r=Dn(e,t);return eo(e,f(t,function(e){return Ri(e,n)?+e:e}).sort(Fo)),r}),Hp=oo(function(e){return mo(er(e,1,Qs,!0))}),zp=oo(function(e){var t=_a(e);return Qs(t)&&(t=re),mo(er(e,1,Qs,!0),wi(t,2))}),Vp=oo(function(e){var t=_a(e);return t="function"==typeof t?t:re,mo(er(e,1,Qs,!0),re,t)}),$p=oo(function(e,t){return Qs(e)?$n(e,t):[]}),Gp=oo(function(e){return wo(l(e,Qs))}),qp=oo(function(e){var t=_a(e);return Qs(t)&&(t=re),wo(l(e,Qs),wi(t,2))}),Jp=oo(function(e){var t=_a(e);return t="function"==typeof t?t:re,wo(l(e,Qs),re,t)}),Qp=oo(Ja),Kp=oo(function(e){var t=e.length,n=t>1?e[t-1]:re;return n="function"==typeof n?(e.pop(),n):re,Qa(e,n)}),Yp=mi(function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return Dn(t,e)};return!(t>1||this.__actions__.length)&&r instanceof E&&Ri(n)?(r=r.slice(n,+n+(t?1:0)),r.__actions__.push({func:es,args:[o],thisArg:re}),new m(r,this.__chain__).thru(function(e){return t&&!e.length&&e.push(re),e})):this.thru(o)}),Zp=Ho(function(e,t,n){yc.call(e,n)?++e[n]:On(e,n,1)}),Xp=Yo(ga),ef=Yo(ha),tf=Ho(function(e,t,n){yc.call(e,n)?e[n].push(t):On(e,n,[t])}),nf=oo(function(e,t,n){var r=-1,i="function"==typeof t,a=Js(e)?oc(e.length):[];return vp(e,function(e){a[++r]=i?o(t,e,n):Lr(e,t,n)}),a}),rf=Ho(function(e,t,n){On(e,n,t)}),of=Ho(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),af=oo(function(e,t){if(null==e)return[];var n=t.length;return n>1&&Oi(e,t[0],t[1])?t=[]:n>2&&Oi(t[0],t[1],t[2])&&(t=[t[0]]),Qr(e,er(t,1),[])}),sf=Wc||function(){return ar.Date.now()},uf=oo(function(e,t,n){var r=me;if(n.length){var o=G(n,Si(uf));r|=we}return ci(e,r,t,n,o)}),lf=oo(function(e,t,n){var r=me|ye;if(n.length){var o=G(n,Si(lf));r|=we}return ci(t,r,e,n,o)}),cf=oo(function(e,t){return Vn(e,1,t)}),pf=oo(function(e,t,n){return Vn(e,Eu(t)||0,n)});Us.Cache=pn;var ff=wp(function(e,t){t=1==t.length&&bf(t[0])?f(t[0],U(wi())):f(er(t,1),U(wi()));var n=t.length;return oo(function(r){for(var i=-1,a=Jc(r.length,n);++i<a;)r[i]=t[i].call(this,r[i]);return o(e,this,r)})}),gf=oo(function(e,t){var n=G(t,Si(gf));return ci(e,we,re,t,n)}),hf=oo(function(e,t){var n=G(t,Si(hf));return ci(e,_e,re,t,n)}),df=mi(function(e,t){return ci(e,Pe,re,re,re,t)}),vf=ai(pr),mf=ai(function(e,t){return e>=t}),yf=Tr(function(){return arguments}())?Tr:function(e){return su(e)&&yc.call(e,"callee")&&!kc.call(e,"callee")},bf=oc.isArray,Cf=fr?U(fr):xr,Sf=zc||zl,wf=gr?U(gr):Ar,_f=hr?U(hr):Ur,If=dr?U(dr):Or,Pf=vr?U(vr):Dr,Ef=mr?U(mr):Wr,Lf=ai(Hr),Tf=ai(function(e,t){return e<=t}),xf=zo(function(e,t){if(ji(t)||Js(t))return void Bo(t,Hu(t),e);for(var n in t)yc.call(t,n)&&kn(e,n,t[n])}),Af=zo(function(e,t){Bo(t,zu(t),e)}),kf=zo(function(e,t,n,r){Bo(t,zu(t),e,r)}),Nf=zo(function(e,t,n,r){Bo(t,Hu(t),e,r)}),Uf=mi(Dn),Ff=oo(function(e,t){e=lc(e);var n=-1,r=t.length,o=r>2?t[2]:re;for(o&&Oi(t[0],t[1],o)&&(r=1);++n<r;)for(var i=t[n],a=zu(i),s=-1,u=a.length;++s<u;){var l=a[s],c=e[l];(c===re||qs(c,dc[l])&&!yc.call(e,l))&&(e[l]=i[l])}return e}),Rf=oo(function(e){return e.push(re,fi),o(Mf,re,e)}),Of=ei(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Sc.call(t)),e[t]=n},Al(Nl)),Df=ei(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=Sc.call(t)),yc.call(e,t)?e[t].push(n):e[t]=[n]},wi),Wf=oo(Lr),Bf=zo(function(e,t,n){Gr(e,t,n)}),Mf=zo(function(e,t,n,r){Gr(e,t,n,r)}),jf=mi(function(e,t){var n={};if(null==e)return n;var r=!1;t=f(t,function(t){return t=Eo(t,e),r||(r=t.length>1),t}),Bo(e,bi(e),n),r&&(n=Bn(n,fe|ge|he,gi));for(var o=t.length;o--;)yo(n,t[o]);return n}),Hf=mi(function(e,t){return null==e?{}:Kr(e,t)}),zf=li(Hu),Vf=li(zu),$f=Jo(function(e,t,n){return t=t.toLowerCase(),e+(n?al(t):t)}),Gf=Jo(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),qf=Jo(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),Jf=qo("toLowerCase"),Qf=Jo(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),Kf=Jo(function(e,t,n){return e+(n?" ":"")+Zf(t)}),Yf=Jo(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),Zf=qo("toUpperCase"),Xf=oo(function(e,t){try{return o(e,re,t)}catch(e){return tu(e)?e:new ac(e)}}),eg=mi(function(e,t){return a(t,function(t){t=ta(t),On(e,t,uf(e[t],e))}),e}),tg=Zo(),ng=Zo(!0),rg=oo(function(e,t){return function(n){return Lr(n,e,t)}}),og=oo(function(e,t){return function(n){return Lr(e,n,t)}}),ig=ni(f),ag=ni(u),sg=ni(v),ug=ii(),lg=ii(!0),cg=ti(function(e,t){return e+t},0),pg=ui("ceil"),fg=ti(function(e,t){return e/t},1),gg=ui("floor"),hg=ti(function(e,t){return e*t},1),dg=ui("round"),vg=ti(function(e,t){return e-t},0);return n.after=Es,n.ary=Ls,n.assign=xf,n.assignIn=Af,n.assignInWith=kf,n.assignWith=Nf,n.at=Uf,n.before=Ts,n.bind=uf,n.bindAll=eg,n.bindKey=lf,n.castArray=js,n.chain=Za,n.chunk=ia,n.compact=aa,n.concat=sa,n.cond=Tl,n.conforms=xl,n.constant=Al,n.countBy=Zp,n.create=Au,n.curry=xs,n.curryRight=As,n.debounce=ks,n.defaults=Ff,n.defaultsDeep=Rf,n.defer=cf,n.delay=pf,n.difference=Fp,n.differenceBy=Rp,n.differenceWith=Op,n.drop=ua,n.dropRight=la,n.dropRightWhile=ca,n.dropWhile=pa,n.fill=fa,n.filter=ls,n.flatMap=cs,n.flatMapDeep=ps,n.flatMapDepth=fs,n.flatten=da,n.flattenDeep=va,n.flattenDepth=ma,n.flip=Ns,n.flow=tg,n.flowRight=ng,n.fromPairs=ya,n.functions=Du,n.functionsIn=Wu,n.groupBy=tf,n.initial=Sa,n.intersection=Dp,n.intersectionBy=Wp,n.intersectionWith=Bp,n.invert=Of,n.invertBy=Df,n.invokeMap=nf,n.iteratee=Ul,n.keyBy=rf,n.keys=Hu,n.keysIn=zu,n.map=vs,n.mapKeys=Vu,n.mapValues=$u,n.matches=Fl,n.matchesProperty=Rl,n.memoize=Us,n.merge=Bf,n.mergeWith=Mf,n.method=rg,n.methodOf=og,n.mixin=Ol,n.negate=Fs,n.nthArg=Bl,n.omit=jf,n.omitBy=Gu,n.once=Rs,n.orderBy=ms,n.over=ig,n.overArgs=ff,n.overEvery=ag,n.overSome=sg,n.partial=gf,n.partialRight=hf,n.partition=of,n.pick=Hf,n.pickBy=qu,n.property=Ml,n.propertyOf=jl,n.pull=Mp,n.pullAll=Ea,n.pullAllBy=La,n.pullAllWith=Ta,n.pullAt=jp,n.range=ug,n.rangeRight=lg,n.rearg=df,n.reject=Cs,n.remove=xa,n.rest=Os,n.reverse=Aa,n.sampleSize=ws,n.set=Qu,n.setWith=Ku,n.shuffle=_s,n.slice=ka,n.sortBy=af,n.sortedUniq=Wa,n.sortedUniqBy=Ba,n.split=ml,n.spread=Ds,n.tail=Ma,n.take=ja,n.takeRight=Ha,n.takeRightWhile=za,n.takeWhile=Va,n.tap=Xa,n.throttle=Ws,n.thru=es,n.toArray=wu,n.toPairs=zf,n.toPairsIn=Vf,n.toPath=Jl,n.toPlainObject=Lu,n.transform=Yu,n.unary=Bs,n.union=Hp,n.unionBy=zp,n.unionWith=Vp,n.uniq=$a,n.uniqBy=Ga,n.uniqWith=qa,n.unset=Zu,n.unzip=Ja,n.unzipWith=Qa,n.update=Xu,n.updateWith=el,n.values=tl,n.valuesIn=nl,n.without=$p,n.words=Ll,n.wrap=Ms,n.xor=Gp,n.xorBy=qp,n.xorWith=Jp,n.zip=Qp,n.zipObject=Ka,n.zipObjectDeep=Ya,n.zipWith=Kp,n.entries=zf,n.entriesIn=Vf,n.extend=Af,n.extendWith=kf,Ol(n,n),n.add=cg,n.attempt=Xf,n.camelCase=$f,n.capitalize=al,n.ceil=pg,n.clamp=rl,n.clone=Hs,n.cloneDeep=Vs,n.cloneDeepWith=$s,n.cloneWith=zs,n.conformsTo=Gs,n.deburr=sl,n.defaultTo=kl,n.divide=fg,n.endsWith=ul,n.eq=qs,n.escape=ll,n.escapeRegExp=cl,n.every=us,n.find=Xp,n.findIndex=ga,n.findKey=ku,n.findLast=ef,n.findLastIndex=ha,n.findLastKey=Nu,n.floor=gg,n.forEach=gs,n.forEachRight=hs,n.forIn=Uu,n.forInRight=Fu,n.forOwn=Ru,n.forOwnRight=Ou,n.get=Bu,n.gt=vf,n.gte=mf,n.has=Mu,n.hasIn=ju,n.head=ba,n.identity=Nl,n.includes=ds,n.indexOf=Ca,n.inRange=ol,n.invoke=Wf,n.isArguments=yf,n.isArray=bf,n.isArrayBuffer=Cf,n.isArrayLike=Js,n.isArrayLikeObject=Qs,n.isBoolean=Ks,n.isBuffer=Sf,n.isDate=wf,n.isElement=Ys,n.isEmpty=Zs,n.isEqual=Xs,n.isEqualWith=eu,n.isError=tu,n.isFinite=nu,n.isFunction=ru,n.isInteger=ou,n.isLength=iu,n.isMap=_f,n.isMatch=uu,n.isMatchWith=lu,n.isNaN=cu,n.isNative=pu,n.isNil=gu,n.isNull=fu,n.isNumber=hu,n.isObject=au,n.isObjectLike=su,n.isPlainObject=du,n.isRegExp=If,n.isSafeInteger=vu,n.isSet=Pf,n.isString=mu,n.isSymbol=yu,n.isTypedArray=Ef,n.isUndefined=bu,n.isWeakMap=Cu,n.isWeakSet=Su,n.join=wa,n.kebabCase=Gf,n.last=_a,n.lastIndexOf=Ia,n.lowerCase=qf,n.lowerFirst=Jf,n.lt=Lf,n.lte=Tf,n.max=Kl,n.maxBy=Yl,n.mean=Zl,n.meanBy=Xl,n.min=ec,n.minBy=tc,n.stubArray=Hl,n.stubFalse=zl,n.stubObject=Vl,n.stubString=$l,n.stubTrue=Gl,n.multiply=hg,n.nth=Pa,n.noConflict=Dl,n.noop=Wl,n.now=sf,n.pad=pl,n.padEnd=fl,n.padStart=gl,n.parseInt=hl,n.random=il,n.reduce=ys,n.reduceRight=bs,n.repeat=dl,n.replace=vl,n.result=Ju,n.round=dg,n.runInContext=e,n.sample=Ss,n.size=Is,n.snakeCase=Qf,n.some=Ps,n.sortedIndex=Na,n.sortedIndexBy=Ua,n.sortedIndexOf=Fa,n.sortedLastIndex=Ra,n.sortedLastIndexBy=Oa,n.sortedLastIndexOf=Da,n.startCase=Kf,n.startsWith=yl,n.subtract=vg,n.sum=nc,n.sumBy=rc,n.template=bl,n.times=ql,n.toFinite=_u,n.toInteger=Iu,n.toLength=Pu,n.toLower=Cl,n.toNumber=Eu,n.toSafeInteger=Tu,n.toString=xu,n.toUpper=Sl,n.trim=wl,n.trimEnd=_l,n.trimStart=Il,n.truncate=Pl,n.unescape=El,n.uniqueId=Ql,n.upperCase=Yf,n.upperFirst=Zf,n.each=gs,n.eachRight=hs,n.first=ba,Ol(n,function(){var e={};return tr(n,function(t,r){yc.call(n.prototype,r)||(e[r]=t)}),e}(),{chain:!1}),n.VERSION=oe,a(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){n[e].placeholder=n}),a(["drop","take"],function(e,t){E.prototype[e]=function(n){n=n===re?1:qc(Iu(n),0);var r=this.__filtered__&&!t?new E(this):this.clone();return r.__filtered__?r.__takeCount__=Jc(n,r.__takeCount__):r.__views__.push({size:Jc(n,We),type:e+(r.__dir__<0?"Right":"")}),r},E.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),a(["filter","map","takeWhile"],function(e,t){var n=t+1,r=n==ke||n==Ue;E.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:wi(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),a(["head","last"],function(e,t){var n="take"+(t?"Right":"");E.prototype[e]=function(){return this[n](1).value()[0]}}),a(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");E.prototype[e]=function(){return this.__filtered__?new E(this):this[n](1)}}),E.prototype.compact=function(){return this.filter(Nl)},E.prototype.find=function(e){return this.filter(e).head()},E.prototype.findLast=function(e){return this.reverse().find(e)},E.prototype.invokeMap=oo(function(e,t){return"function"==typeof e?new E(this):this.map(function(n){return Lr(n,e,t)})}),E.prototype.reject=function(e){return this.filter(Fs(wi(e)))},E.prototype.slice=function(e,t){e=Iu(e);var n=this;return n.__filtered__&&(e>0||t<0)?new E(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==re&&(t=Iu(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},E.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},E.prototype.toArray=function(){return this.take(We)},tr(E.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),o=/^(?:head|last)$/.test(t),i=n[o?"take"+("last"==t?"Right":""):t],a=o||/^find/.test(t);i&&(n.prototype[t]=function(){var t=this.__wrapped__,s=o?[1]:arguments,u=t instanceof E,l=s[0],c=u||bf(t),p=function(e){var t=i.apply(n,g([e],s));return o&&f?t[0]:t};c&&r&&"function"==typeof l&&1!=l.length&&(u=c=!1);var f=this.__chain__,h=!!this.__actions__.length,d=a&&!f,v=u&&!h;if(!a&&c){t=v?t:new E(this);var y=e.apply(t,s);return y.__actions__.push({func:es,args:[p],thisArg:re}),new m(y,f)}return d&&v?e.apply(this,s):(y=this.thru(p),d?o?y.value()[0]:y.value():y)})}),a(["pop","push","shift","sort","splice","unshift"],function(e){var t=gc[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",o=/^(?:pop|shift)$/.test(e);n.prototype[e]=function(){var e=arguments;if(o&&!this.__chain__){var n=this.value();return t.apply(bf(n)?n:[],e)}return this[r](function(n){return t.apply(bf(n)?n:[],e)})}}),tr(E.prototype,function(e,t){var r=n[t];if(r){var o=r.name+"";yc.call(ap,o)||(ap[o]=[]),ap[o].push({name:t,func:r})}}),ap[Xo(re,ye).name]=[{name:"wrapper",func:re}],E.prototype.clone=Q,E.prototype.reverse=ee,E.prototype.value=te,n.prototype.at=Yp,n.prototype.chain=ts,n.prototype.commit=ns,n.prototype.next=rs,n.prototype.plant=is,n.prototype.reverse=as,n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=ss,n.prototype.first=n.prototype.head,Fc&&(n.prototype[Fc]=os),n},_r=wr();"function"==typeof e&&"object"==typeof e.amd&&e.amd?(ar._=_r,e(function(){return _r})):ur?((ur.exports=_r)._=_r,sr._=_r):ar._=_r}).call(this)}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[17])(17)});
/*
The MIT License (MIT)

Copyright (c) 2015 OneNoteDev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.OneNoteApi=t()}}(function(){return function t(e,r,n){function o(i,s){if(!r[i]){if(!e[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(a)return a(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var c=r[i]={exports:{}};e[i][0].call(c.exports,function(t){var r=e[i][1][t];return o(r?r:t)},c,c.exports,t,e,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(t,e,r){"use strict";var n=function(){function t(){this.operations=[],this.boundaryName="batch_"+Math.floor(1e3*Math.random())}return t.prototype.addOperation=function(t){this.operations.push(t)},t.prototype.getOperation=function(t){return this.operations[t]},t.prototype.getNumOperations=function(){return this.operations.length},t.prototype.getRequestBody=function(){var t=this,e="";return this.operations.forEach(function(r){var n="";n+="--"+t.boundaryName+"\r\n",n+="Content-Type: application/http\r\n",n+="Content-Transfer-Encoding: binary\r\n",n+="\r\n",n+=r.httpMethod+" "+r.uri+" HTTP/1.1\r\n",n+="Content-Type: "+r.contentType+"\r\n",n+="\r\n",n+=(r.content?r.content:"")+"\r\n",n+="\r\n",e+=n}),e+="--"+this.boundaryName+"--\r\n"},t.prototype.getContentType=function(){return'multipart/mixed; boundary="'+this.boundaryName+'"'},t}();r.BatchRequest=n},{}],2:[function(t,e,r){"use strict";!function(t){t[t.Html=0]="Html",t[t.Image=1]="Image",t[t.EnhancedUrl=2]="EnhancedUrl",t[t.Url=3]="Url",t[t.Onml=4]="Onml"}(r.ContentType||(r.ContentType={}));r.ContentType},{}],3:[function(t,e,r){"use strict";!function(t){t[t.NETWORK_ERROR=0]="NETWORK_ERROR",t[t.UNEXPECTED_RESPONSE_STATUS=1]="UNEXPECTED_RESPONSE_STATUS",t[t.REQUEST_TIMED_OUT=2]="REQUEST_TIMED_OUT",t[t.UNABLE_TO_PARSE_RESPONSE=3]="UNABLE_TO_PARSE_RESPONSE"}(r.RequestErrorType||(r.RequestErrorType={}));var n=r.RequestErrorType,o=function(){function t(){}return t.createRequestErrorObject=function(e,r){if(void 0!==e&&null!==e)return t.createRequestErrorObjectInternal(e.status,e.readyState,e.response,e.getAllResponseHeaders(),e.timeout,r)},t.createRequestErrorObjectInternal=function(e,r,o,a,i,s){var u=t.formatRequestErrorTypeAsString(s);s===n.NETWORK_ERROR&&(u+=t.getAdditionalNetworkErrorInfo(r)),s===n.REQUEST_TIMED_OUT&&(e=408);var p={error:u,statusCode:e,responseHeaders:t.convertResponseHeadersToJsonInternal(a),response:o};return i>0&&!(e>=200&&e<300)&&(p.timeout=i),p},t.convertResponseHeadersToJson=function(e){if(void 0!==e&&null!==e){var r=e.getAllResponseHeaders();return t.convertResponseHeadersToJsonInternal(r)}},t.convertResponseHeadersToJsonInternal=function(t){for(var e,r=/([^:]+):\s?(.*)/g,n={};e=r.exec(t);){e.index===r.lastIndex&&r.lastIndex++;var o=e[1].trim(),a=e[2].trim();n[o]=a}return n},t.getAdditionalNetworkErrorInfo=function(t){return": "+JSON.stringify({readyState:t})},t.formatRequestErrorTypeAsString=function(t){var e=n[t];return e.charAt(0).toUpperCase()+e.replace(/_/g," ").toLowerCase().slice(1)},t}();r.ErrorUtils=o},{}],4:[function(t,e,r){"use strict";var n=function(){function t(){}return t.sectionExistsInNotebooks=function(e,r){if(!e||!r)return!1;for(var n=0;n<e.length;n++)if(t.sectionExistsInParent(e[n],r))return!0;return!1},t.sectionExistsInParent=function(e,r){if(!e||!r)return!1;if(e.sections)for(var n=0;n<e.sections.length;n++){var o=e.sections[n];if(o&&o.id===r)return!0}if(e.sectionGroups)for(var n=0;n<e.sectionGroups.length;n++)if(t.sectionExistsInParent(e.sectionGroups[n],r))return!0;return!1},t.getPathFromNotebooksToSection=function(e,r){if(e&&r)for(var n=0;n<e.length;n++){var o=e[n],a=t.getPathFromParentToSection(o,r);if(a)return a}},t.getPathFromParentToSection=function(e,r){if(e&&r){if(e.sections)for(var n=0;n<e.sections.length;n++){var o=e.sections[n];if(r(o))return[e,o]}if(e.sectionGroups)for(var n=0;n<e.sectionGroups.length;n++){var a=e.sectionGroups[n],i=t.getPathFromParentToSection(a,r);if(i)return i.unshift(e),i}}},t.getDepthOfNotebooks=function(e){return e&&0!==e.length?e.map(function(e){return t.getDepthOfParent(e)}).reduce(function(t,e){return Math.max(t,e)}):0},t.getDepthOfParent=function(e){if(!e)return 0;var r=e.sections&&e.sections.length>0,n=r?1:0;if(e.sectionGroups)for(var o=0;o<e.sectionGroups.length;o++)n=Math.max(t.getDepthOfParent(e.sectionGroups[o]),n);return n+1},t}();r.NotebookUtils=n},{}],5:[function(t,e,r){"use strict";var n=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=t("./oneNoteApiBase"),a=function(t){function e(e,r,n){void 0===r&&(r=3e4),void 0===n&&(n={}),t.call(this,e,r,n)}return n(e,t),e.prototype.createNotebook=function(t){var e=JSON.stringify({name:t});return this.requestPromise(this.getNotebooksUrl(),e)},e.prototype.createPage=function(t,e){var r=e?"/sections/"+e:"",n=r+"/pages",o=t.getTypedFormData();return this.requestPromise(n,o.asBlob(),o.getContentType())},e.prototype.sendBatchRequest=function(t){return this.enableBetaApi(),this.requestBasePromise("/$batch",t.getRequestBody(),t.getContentType(),"POST").then(this.disableBetaApi.bind(this))},e.prototype.getPage=function(t){var e="/pages/"+t;return this.requestPromise(e)},e.prototype.getPageContent=function(t){var e="/pages/"+t+"/content";return this.requestPromise(e)},e.prototype.getPages=function(t){var e="/pages";return t.top>0&&t.top===Math.floor(t.top)&&(e+="?top="+t.top),t.sectionId&&(e="/sections/"+t.sectionId+e),this.requestPromise(e)},e.prototype.updatePage=function(t,e){var r="/pages/"+t,n=r+"/content";return this.requestPromise(n,JSON.stringify(e),"application/json","PATCH")},e.prototype.createSection=function(t,e){var r={name:e},n=JSON.stringify(r);return this.requestPromise("/notebooks/"+t+"/sections/",n)},e.prototype.getNotebooks=function(t){return void 0===t&&(t=!0),this.requestPromise(this.getNotebooksUrl(null,t))},e.prototype.getNotebooksWithExpandedSections=function(t,e){return void 0===t&&(t=2),void 0===e&&(e=!0),this.requestPromise(this.getNotebooksUrl(t,e))},e.prototype.getNotebookByName=function(t){return this.requestPromise("/notebooks?filter=name%20eq%20%27"+encodeURI(t)+"%27&orderby=createdTime")},e.prototype.pagesSearch=function(t){return this.requestPromise(this.getSearchUrl(t))},e.prototype.getExpands=function(t){if(t<=0)return"";var e="$expand=sections,sectionGroups";return 1===t?e:e+"("+this.getExpands(t-1)+")"},e.prototype.getNotebooksUrl=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!0);var r=e?"$filter=userRole%20ne%20Microsoft.OneNote.Api.UserRole'Reader'":"";return"/notebooks?"+r+(t?"&"+this.getExpands(t):"")},e.prototype.getSearchUrl=function(t){return"/pages?search="+t},e.prototype.enableBetaApi=function(){this.useBetaApi=!0},e.prototype.disableBetaApi=function(){this.useBetaApi=!1},e}(o.OneNoteApiBase);r.OneNoteApi=a;var i=t("./contentType");r.ContentType=i.ContentType;var s=t("./oneNotePage");r.OneNotePage=s.OneNotePage;var u=t("./batchRequest");r.BatchRequest=u.BatchRequest;var p=t("./errorUtils");r.ErrorUtils=p.ErrorUtils,r.RequestErrorType=p.RequestErrorType;var c=t("./notebookUtils");r.NotebookUtils=c.NotebookUtils},{"./batchRequest":1,"./contentType":2,"./errorUtils":3,"./notebookUtils":4,"./oneNoteApiBase":6,"./oneNotePage":7}],6:[function(t,e,r){"use strict";var n=t("./errorUtils"),o=t("content-type"),a=function(){function t(t,e,r){void 0===r&&(r={}),this.useBetaApi=!1,this.token=t,this.timeout=e,this.headers=r}return t.prototype.requestBasePromise=function(t,e,r,n){var o=this.generateFullBaseUrl(t);return null===r&&(r="application/json"),this.makeRequest(o,e,r,n)},t.prototype.requestPromise=function(t,e,r,n){var o=this,a=this.generateFullUrl(t);return null===r&&(r="application/json"),new Promise(function(t,i){o.makeRequest(a,e,r,n).then(function(e){t(e)},function(t){i(t)})})},t.prototype.generateFullBaseUrl=function(t){var e=this.useBetaApi?"https://www.onenote.com/api/beta":"https://www.onenote.com/api/v1.0";return e+t},t.prototype.generateFullUrl=function(t){var e=this.useBetaApi?"https://www.onenote.com/api/beta/me/notes":"https://www.onenote.com/api/v1.0/me/notes";return e+t},t.prototype.makeRequest=function(e,r,a,i){var s=this;return new Promise(function(u,p){var c,f=new XMLHttpRequest;c=i?i:r?"POST":"GET",f.open(c,e),f.timeout=s.timeout,f.onload=function(){if(200===f.status||201===f.status||204===f.status)try{var t={type:""};try{t=o.parse(f.getResponseHeader("Content-Type"))}catch(e){}var r=f.response;switch(t.type){case"application/json":r=JSON.parse(f.response?f.response:"{}");break;case"text/html":default:r=f.response}u({parsedResponse:r,request:f})}catch(a){p(n.ErrorUtils.createRequestErrorObject(f,n.RequestErrorType.UNABLE_TO_PARSE_RESPONSE))}else p(n.ErrorUtils.createRequestErrorObject(f,n.RequestErrorType.UNEXPECTED_RESPONSE_STATUS))},f.onerror=function(){p(n.ErrorUtils.createRequestErrorObject(f,n.RequestErrorType.NETWORK_ERROR))},f.ontimeout=function(){p(n.ErrorUtils.createRequestErrorObject(f,n.RequestErrorType.REQUEST_TIMED_OUT))},a&&f.setRequestHeader("Content-Type",a),f.setRequestHeader("Authorization","Bearer "+s.token),t.addHeadersToRequest(f,s.headers),f.send(r)})},t.addHeadersToRequest=function(t,e){if(e)for(var r in e)e.hasOwnProperty(r)&&t.setRequestHeader(r,e[r])},t}();r.OneNoteApiBase=a},{"./errorUtils":3,"content-type":9}],7:[function(t,e,r){"use strict";var n=t("./typedFormData"),o=function(){function t(t,e,r,n){void 0===t&&(t=""),void 0===e&&(e=""),void 0===r&&(r="en-us"),void 0===n&&(n=void 0),this.dataParts=[],this.title=t,this.presentationBody=e,this.locale=r,this.pageMetadata=n}return t.prototype.getEntireOnml=function(){return'<html xmlns="http://www.w3.org/1999/xhtml" lang='+this.locale+">"+this.getHeadAsHtml()+"<body>"+this.presentationBody+"</body></html>"},t.prototype.getHeadAsHtml=function(){var t=this.getPageMetadataAsHtml(),e=this.formUtcOffsetString(new Date);return"<head><title>"+this.escapeHtmlEntities(this.title)+'</title><meta name="created" content="'+e+' ">'+t+"</head>"},t.prototype.getPageMetadataAsHtml=function(){var t="";if(this.pageMetadata)for(var e in this.pageMetadata)t+='<meta name="'+e+'" content="'+this.escapeHtmlEntities(this.pageMetadata[e])+'" />';return t},t.prototype.formUtcOffsetString=function(t){var e=t.getTimezoneOffset(),r=e>=0?"-":"+";e=Math.abs(e);var n=Math.floor(e/60)+"",o=Math.round(e%60)+"";return parseInt(n,10)<10&&(n="0"+n),parseInt(o,10)<10&&(o="0"+o),r+n+":"+o},t.prototype.generateMimePartName=function(t){return t+Math.floor(1e4*Math.random()).toString()},t.prototype.escapeHtmlEntities=function(t){var e=document.createElement("div");return e.innerText=t,e.innerHTML},t.prototype.getTypedFormData=function(){var t=new n.TypedFormData;t.append("Presentation",this.getEntireOnml(),"application/xhtml+xml");for(var e=0;e<this.dataParts.length;e++){var r=this.dataParts[e];t.append(r.name,r.content,r.type)}return t},t.prototype.addOnml=function(t){this.presentationBody+=t},t.prototype.addHtml=function(t){var e=this.generateMimePartName("Html");return this.dataParts.push({content:t,name:e,type:"text/HTML"}),this.addOnml('<img data-render-src="name:'+e+'"/>'),e},t.prototype.addImage=function(t){this.addOnml('<img src="'+t+'"/>')},t.prototype.addObjectUrlAsImage=function(t){this.addOnml('<img data-render-src="'+t+'"/>')},t.prototype.addAttachment=function(t,e){var r=this.generateMimePartName("Attachment");return this.dataParts.push({content:t,name:r,type:"application/pdf"}),this.addOnml('<object data-attachment="'+e+'" data="name:'+r+'" type="application/pdf" />'),r},t.prototype.addUrl=function(t){this.addOnml('<div data-render-src="'+t+'" data-render-method="extract" data-render-fallback="none"></div>')},t.prototype.addCitation=function(t,e,r){this.addOnml(t.replace("{0}",'<a href="'+(r?r:e)+'">'+e+"</a>"))},t}();r.OneNotePage=o},{"./typedFormData":8}],8:[function(t,e,r){"use strict";var n=function(){function t(){this.contentTypeMultipart="multipart/form-data; boundary=",this.dataParts=[],this.boundaryName="OneNoteTypedDataBoundary"+Math.floor(1e3*Math.random())}return t.prototype.getContentType=function(){return this.contentTypeMultipart+this.boundaryName},t.prototype.append=function(t,e,r){this.dataParts.push({content:e,name:t,type:r})},t.prototype.asBlob=function(){for(var t="--"+this.boundaryName,e=[t],r=0;r<this.dataParts.length;r++){var n=this.dataParts[r],o="\r\nContent-Type: "+n.type+'\r\nContent-Disposition: form-data; name="'+n.name+'"\r\n\r\n';e.push(o),e.push(n.content),e.push("\r\n"+t)}return e.push("--\r\n"),new Blob(e)},t}();r.TypedFormData=n},{}],9:[function(t,e,r){/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
"use strict";function n(t){if(!t||"object"!=typeof t)throw new TypeError("argument obj is required");var e=t.parameters,r=t.type;if(!r||!h.test(r))throw new TypeError("invalid type");var n=r;if(e&&"object"==typeof e)for(var o,a=Object.keys(e).sort(),s=0;s<a.length;s++){if(o=a[s],!c.test(o))throw new TypeError("invalid parameter name");n+="; "+o+"="+i(e[o])}return n}function o(t){if(!t)throw new TypeError("argument string is required");if("object"==typeof t&&(t=a(t),"string"!=typeof t))throw new TypeError("content-type header is missing from object");if("string"!=typeof t)throw new TypeError("argument string is required to be a string");var e=t.indexOf(";"),r=e!==-1?t.substr(0,e).trim():t.trim();if(!h.test(r))throw new TypeError("invalid media type");var n,o,i,p=new s(r.toLowerCase());for(u.lastIndex=e;o=u.exec(t);){if(o.index!==e)throw new TypeError("invalid parameter format");e+=o[0].length,n=o[1].toLowerCase(),i=o[2],'"'===i[0]&&(i=i.substr(1,i.length-2).replace(f,"$1")),p.parameters[n]=i}if(e!==-1&&e!==t.length)throw new TypeError("invalid parameter format");return p}function a(t){return"function"==typeof t.getHeader?t.getHeader("content-type"):"object"==typeof t.headers?t.headers&&t.headers["content-type"]:void 0}function i(t){var e=String(t);if(c.test(e))return e;if(e.length>0&&!p.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(d,"\\$1")+'"'}function s(t){this.parameters=Object.create(null),this.type=t}var u=/; *([!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+) */g,p=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,c=/^[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+$/,f=/\\([\u000b\u0020-\u00ff])/g,d=/([\\"])/g,h=/^[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+\/[!#$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+$/;r.format=n,r.parse=o},{}]},{},[5])(5)});
/**
 * Rangy, a cross-browser JavaScript range and selection library
 * https://github.com/timdown/rangy
 *
 * Copyright 2015, Tim Down
 * Licensed under the MIT license.
 * Version: 1.3.0
 * Build date: 10 May 2015
 */

(function(factory, root) {
    if (typeof define == "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof module != "undefined" && typeof exports == "object") {
        // Node/CommonJS style
        module.exports = factory();
    } else {
        // No AMD or CommonJS support so we place Rangy in (probably) the global variable
        root.rangy = factory();
    }
})(function() {

    var OBJECT = "object", FUNCTION = "function", UNDEFINED = "undefined";

    // Minimal set of properties required for DOM Level 2 Range compliance. Comparison constants such as START_TO_START
    // are omitted because ranges in KHTML do not have them but otherwise work perfectly well. See issue 113.
    var domRangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
        "commonAncestorContainer"];

    // Minimal set of methods required for DOM Level 2 Range compliance
    var domRangeMethods = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore",
        "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents",
        "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"];

    var textRangeProperties = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"];

    // Subset of TextRange's full set of methods that we're interested in
    var textRangeMethods = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select",
        "setEndPoint", "getBoundingClientRect"];

    /*----------------------------------------------------------------------------------------------------------------*/

    // Trio of functions taken from Peter Michaux's article:
    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
    function isHostMethod(o, p) {
        var t = typeof o[p];
        return t == FUNCTION || (!!(t == OBJECT && o[p])) || t == "unknown";
    }

    function isHostObject(o, p) {
        return !!(typeof o[p] == OBJECT && o[p]);
    }

    function isHostProperty(o, p) {
        return typeof o[p] != UNDEFINED;
    }

    // Creates a convenience function to save verbose repeated calls to tests functions
    function createMultiplePropertyTest(testFunc) {
        return function(o, props) {
            var i = props.length;
            while (i--) {
                if (!testFunc(o, props[i])) {
                    return false;
                }
            }
            return true;
        };
    }

    // Next trio of functions are a convenience to save verbose repeated calls to previous two functions
    var areHostMethods = createMultiplePropertyTest(isHostMethod);
    var areHostObjects = createMultiplePropertyTest(isHostObject);
    var areHostProperties = createMultiplePropertyTest(isHostProperty);

    function isTextRange(range) {
        return range && areHostMethods(range, textRangeMethods) && areHostProperties(range, textRangeProperties);
    }

    function getBody(doc) {
        return isHostObject(doc, "body") ? doc.body : doc.getElementsByTagName("body")[0];
    }

    var forEach = [].forEach ?
        function(arr, func) {
            arr.forEach(func);
        } :
        function(arr, func) {
            for (var i = 0, len = arr.length; i < len; ++i) {
                func(arr[i], i);
            }
        };

    var modules = {};

    var isBrowser = (typeof window != UNDEFINED && typeof document != UNDEFINED);

    var util = {
        isHostMethod: isHostMethod,
        isHostObject: isHostObject,
        isHostProperty: isHostProperty,
        areHostMethods: areHostMethods,
        areHostObjects: areHostObjects,
        areHostProperties: areHostProperties,
        isTextRange: isTextRange,
        getBody: getBody,
        forEach: forEach
    };

    var api = {
        version: "1.3.0",
        initialized: false,
        isBrowser: isBrowser,
        supported: true,
        util: util,
        features: {},
        modules: modules,
        config: {
            alertOnFail: false,
            alertOnWarn: false,
            preferTextRange: false,
            autoInitialize: (typeof rangyAutoInitialize == UNDEFINED) ? true : rangyAutoInitialize
        }
    };

    function consoleLog(msg) {
        if (typeof console != UNDEFINED && isHostMethod(console, "log")) {
            console.log(msg);
        }
    }

    function alertOrLog(msg, shouldAlert) {
        if (isBrowser && shouldAlert) {
            alert(msg);
        } else  {
            consoleLog(msg);
        }
    }

    function fail(reason) {
        api.initialized = true;
        api.supported = false;
        alertOrLog("Rangy is not supported in this environment. Reason: " + reason, api.config.alertOnFail);
    }

    api.fail = fail;

    function warn(msg) {
        alertOrLog("Rangy warning: " + msg, api.config.alertOnWarn);
    }

    api.warn = warn;

    // Add utility extend() method
    var extend;
    if ({}.hasOwnProperty) {
        util.extend = extend = function(obj, props, deep) {
            var o, p;
            for (var i in props) {
                if (props.hasOwnProperty(i)) {
                    o = obj[i];
                    p = props[i];
                    if (deep && o !== null && typeof o == "object" && p !== null && typeof p == "object") {
                        extend(o, p, true);
                    }
                    obj[i] = p;
                }
            }
            // Special case for toString, which does not show up in for...in loops in IE <= 8
            if (props.hasOwnProperty("toString")) {
                obj.toString = props.toString;
            }
            return obj;
        };

        util.createOptions = function(optionsParam, defaults) {
            var options = {};
            extend(options, defaults);
            if (optionsParam) {
                extend(options, optionsParam);
            }
            return options;
        };
    } else {
        fail("hasOwnProperty not supported");
    }

    // Test whether we're in a browser and bail out if not
    if (!isBrowser) {
        fail("Rangy can only run in a browser");
    }

    // Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
    (function() {
        var toArray;

        if (isBrowser) {
            var el = document.createElement("div");
            el.appendChild(document.createElement("span"));
            var slice = [].slice;
            try {
                if (slice.call(el.childNodes, 0)[0].nodeType == 1) {
                    toArray = function(arrayLike) {
                        return slice.call(arrayLike, 0);
                    };
                }
            } catch (e) {}
        }

        if (!toArray) {
            toArray = function(arrayLike) {
                var arr = [];
                for (var i = 0, len = arrayLike.length; i < len; ++i) {
                    arr[i] = arrayLike[i];
                }
                return arr;
            };
        }

        util.toArray = toArray;
    })();

    // Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
    // normalization of event properties
    var addListener;
    if (isBrowser) {
        if (isHostMethod(document, "addEventListener")) {
            addListener = function(obj, eventType, listener) {
                obj.addEventListener(eventType, listener, false);
            };
        } else if (isHostMethod(document, "attachEvent")) {
            addListener = function(obj, eventType, listener) {
                obj.attachEvent("on" + eventType, listener);
            };
        } else {
            fail("Document does not have required addEventListener or attachEvent method");
        }

        util.addListener = addListener;
    }

    var initListeners = [];

    function getErrorDesc(ex) {
        return ex.message || ex.description || String(ex);
    }

    // Initialization
    function init() {
        if (!isBrowser || api.initialized) {
            return;
        }
        var testRange;
        var implementsDomRange = false, implementsTextRange = false;

        // First, perform basic feature tests

        if (isHostMethod(document, "createRange")) {
            testRange = document.createRange();
            if (areHostMethods(testRange, domRangeMethods) && areHostProperties(testRange, domRangeProperties)) {
                implementsDomRange = true;
            }
        }

        var body = getBody(document);
        if (!body || body.nodeName.toLowerCase() != "body") {
            fail("No body element found");
            return;
        }

        if (body && isHostMethod(body, "createTextRange")) {
            testRange = body.createTextRange();
            if (isTextRange(testRange)) {
                implementsTextRange = true;
            }
        }

        if (!implementsDomRange && !implementsTextRange) {
            fail("Neither Range nor TextRange are available");
            return;
        }

        api.initialized = true;
        api.features = {
            implementsDomRange: implementsDomRange,
            implementsTextRange: implementsTextRange
        };

        // Initialize modules
        var module, errorMessage;
        for (var moduleName in modules) {
            if ( (module = modules[moduleName]) instanceof Module ) {
                module.init(module, api);
            }
        }

        // Call init listeners
        for (var i = 0, len = initListeners.length; i < len; ++i) {
            try {
                initListeners[i](api);
            } catch (ex) {
                errorMessage = "Rangy init listener threw an exception. Continuing. Detail: " + getErrorDesc(ex);
                consoleLog(errorMessage);
            }
        }
    }

    function deprecationNotice(deprecated, replacement, module) {
        if (module) {
            deprecated += " in module " + module.name;
        }
        api.warn("DEPRECATED: " + deprecated + " is deprecated. Please use " +
        replacement + " instead.");
    }

    function createAliasForDeprecatedMethod(owner, deprecated, replacement, module) {
        owner[deprecated] = function() {
            deprecationNotice(deprecated, replacement, module);
            return owner[replacement].apply(owner, util.toArray(arguments));
        };
    }

    util.deprecationNotice = deprecationNotice;
    util.createAliasForDeprecatedMethod = createAliasForDeprecatedMethod;

    // Allow external scripts to initialize this library in case it's loaded after the document has loaded
    api.init = init;

    // Execute listener immediately if already initialized
    api.addInitListener = function(listener) {
        if (api.initialized) {
            listener(api);
        } else {
            initListeners.push(listener);
        }
    };

    var shimListeners = [];

    api.addShimListener = function(listener) {
        shimListeners.push(listener);
    };

    function shim(win) {
        win = win || window;
        init();

        // Notify listeners
        for (var i = 0, len = shimListeners.length; i < len; ++i) {
            shimListeners[i](win);
        }
    }

    if (isBrowser) {
        api.shim = api.createMissingNativeApi = shim;
        createAliasForDeprecatedMethod(api, "createMissingNativeApi", "shim");
    }

    function Module(name, dependencies, initializer) {
        this.name = name;
        this.dependencies = dependencies;
        this.initialized = false;
        this.supported = false;
        this.initializer = initializer;
    }

    Module.prototype = {
        init: function() {
            var requiredModuleNames = this.dependencies || [];
            for (var i = 0, len = requiredModuleNames.length, requiredModule, moduleName; i < len; ++i) {
                moduleName = requiredModuleNames[i];

                requiredModule = modules[moduleName];
                if (!requiredModule || !(requiredModule instanceof Module)) {
                    throw new Error("required module '" + moduleName + "' not found");
                }

                requiredModule.init();

                if (!requiredModule.supported) {
                    throw new Error("required module '" + moduleName + "' not supported");
                }
            }

            // Now run initializer
            this.initializer(this);
        },

        fail: function(reason) {
            this.initialized = true;
            this.supported = false;
            throw new Error(reason);
        },

        warn: function(msg) {
            api.warn("Module " + this.name + ": " + msg);
        },

        deprecationNotice: function(deprecated, replacement) {
            api.warn("DEPRECATED: " + deprecated + " in module " + this.name + " is deprecated. Please use " +
                replacement + " instead");
        },

        createError: function(msg) {
            return new Error("Error in Rangy " + this.name + " module: " + msg);
        }
    };

    function createModule(name, dependencies, initFunc) {
        var newModule = new Module(name, dependencies, function(module) {
            if (!module.initialized) {
                module.initialized = true;
                try {
                    initFunc(api, module);
                    module.supported = true;
                } catch (ex) {
                    var errorMessage = "Module '" + name + "' failed to load: " + getErrorDesc(ex);
                    consoleLog(errorMessage);
                    if (ex.stack) {
                        consoleLog(ex.stack);
                    }
                }
            }
        });
        modules[name] = newModule;
        return newModule;
    }

    api.createModule = function(name) {
        // Allow 2 or 3 arguments (second argument is an optional array of dependencies)
        var initFunc, dependencies;
        if (arguments.length == 2) {
            initFunc = arguments[1];
            dependencies = [];
        } else {
            initFunc = arguments[2];
            dependencies = arguments[1];
        }

        var module = createModule(name, dependencies, initFunc);

        // Initialize the module immediately if the core is already initialized
        if (api.initialized && api.supported) {
            module.init();
        }
    };

    api.createCoreModule = function(name, dependencies, initFunc) {
        createModule(name, dependencies, initFunc);
    };

    /*----------------------------------------------------------------------------------------------------------------*/

    // Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately

    function RangePrototype() {}
    api.RangePrototype = RangePrototype;
    api.rangePrototype = new RangePrototype();

    function SelectionPrototype() {}
    api.selectionPrototype = new SelectionPrototype();

    /*----------------------------------------------------------------------------------------------------------------*/

    // DOM utility methods used by Rangy
    api.createCoreModule("DomUtil", [], function(api, module) {
        var UNDEF = "undefined";
        var util = api.util;
        var getBody = util.getBody;

        // Perform feature tests
        if (!util.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"])) {
            module.fail("document missing a Node creation method");
        }

        if (!util.isHostMethod(document, "getElementsByTagName")) {
            module.fail("document missing getElementsByTagName method");
        }

        var el = document.createElement("div");
        if (!util.areHostMethods(el, ["insertBefore", "appendChild", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]))) {
            module.fail("Incomplete Element implementation");
        }

        // innerHTML is required for Range's createContextualFragment method
        if (!util.isHostProperty(el, "innerHTML")) {
            module.fail("Element is missing innerHTML property");
        }

        var textNode = document.createTextNode("test");
        if (!util.areHostMethods(textNode, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] ||
                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) ||
                !util.areHostProperties(textNode, ["data"]))) {
            module.fail("Incomplete Text Node implementation");
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
        // able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
        // contains just the document as a single element and the value searched for is the document.
        var arrayContains = /*Array.prototype.indexOf ?
            function(arr, val) {
                return arr.indexOf(val) > -1;
            }:*/

            function(arr, val) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === val) {
                        return true;
                    }
                }
                return false;
            };

        // Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
        function isHtmlNamespace(node) {
            var ns;
            return typeof node.namespaceURI == UNDEF || ((ns = node.namespaceURI) === null || ns == "http://www.w3.org/1999/xhtml");
        }

        function parentElement(node) {
            var parent = node.parentNode;
            return (parent.nodeType == 1) ? parent : null;
        }

        function getNodeIndex(node) {
            var i = 0;
            while( (node = node.previousSibling) ) {
                ++i;
            }
            return i;
        }

        function getNodeLength(node) {
            switch (node.nodeType) {
                case 7:
                case 10:
                    return 0;
                case 3:
                case 8:
                    return node.length;
                default:
                    return node.childNodes.length;
            }
        }

        function getCommonAncestor(node1, node2) {
            var ancestors = [], n;
            for (n = node1; n; n = n.parentNode) {
                ancestors.push(n);
            }

            for (n = node2; n; n = n.parentNode) {
                if (arrayContains(ancestors, n)) {
                    return n;
                }
            }

            return null;
        }

        function isAncestorOf(ancestor, descendant, selfIsAncestor) {
            var n = selfIsAncestor ? descendant : descendant.parentNode;
            while (n) {
                if (n === ancestor) {
                    return true;
                } else {
                    n = n.parentNode;
                }
            }
            return false;
        }

        function isOrIsAncestorOf(ancestor, descendant) {
            return isAncestorOf(ancestor, descendant, true);
        }

        function getClosestAncestorIn(node, ancestor, selfIsAncestor) {
            var p, n = selfIsAncestor ? node : node.parentNode;
            while (n) {
                p = n.parentNode;
                if (p === ancestor) {
                    return n;
                }
                n = p;
            }
            return null;
        }

        function isCharacterDataNode(node) {
            var t = node.nodeType;
            return t == 3 || t == 4 || t == 8 ; // Text, CDataSection or Comment
        }

        function isTextOrCommentNode(node) {
            if (!node) {
                return false;
            }
            var t = node.nodeType;
            return t == 3 || t == 8 ; // Text or Comment
        }

        function insertAfter(node, precedingNode) {
            var nextNode = precedingNode.nextSibling, parent = precedingNode.parentNode;
            if (nextNode) {
                parent.insertBefore(node, nextNode);
            } else {
                parent.appendChild(node);
            }
            return node;
        }

        // Note that we cannot use splitText() because it is bugridden in IE 9.
        function splitDataNode(node, index, positionsToPreserve) {
            var newNode = node.cloneNode(false);
            newNode.deleteData(0, index);
            node.deleteData(index, node.length - index);
            insertAfter(newNode, node);

            // Preserve positions
            if (positionsToPreserve) {
                for (var i = 0, position; position = positionsToPreserve[i++]; ) {
                    // Handle case where position was inside the portion of node after the split point
                    if (position.node == node && position.offset > index) {
                        position.node = newNode;
                        position.offset -= index;
                    }
                    // Handle the case where the position is a node offset within node's parent
                    else if (position.node == node.parentNode && position.offset > getNodeIndex(node)) {
                        ++position.offset;
                    }
                }
            }
            return newNode;
        }

        function getDocument(node) {
            if (node.nodeType == 9) {
                return node;
            } else if (typeof node.ownerDocument != UNDEF) {
                return node.ownerDocument;
            } else if (typeof node.document != UNDEF) {
                return node.document;
            } else if (node.parentNode) {
                return getDocument(node.parentNode);
            } else {
                throw module.createError("getDocument: no document found for node");
            }
        }

        function getWindow(node) {
            var doc = getDocument(node);
            if (typeof doc.defaultView != UNDEF) {
                return doc.defaultView;
            } else if (typeof doc.parentWindow != UNDEF) {
                return doc.parentWindow;
            } else {
                throw module.createError("Cannot get a window object for node");
            }
        }

        function getIframeDocument(iframeEl) {
            if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument;
            } else if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow.document;
            } else {
                throw module.createError("getIframeDocument: No Document object found for iframe element");
            }
        }

        function getIframeWindow(iframeEl) {
            if (typeof iframeEl.contentWindow != UNDEF) {
                return iframeEl.contentWindow;
            } else if (typeof iframeEl.contentDocument != UNDEF) {
                return iframeEl.contentDocument.defaultView;
            } else {
                throw module.createError("getIframeWindow: No Window object found for iframe element");
            }
        }

        // This looks bad. Is it worth it?
        function isWindow(obj) {
            return obj && util.isHostMethod(obj, "setTimeout") && util.isHostObject(obj, "document");
        }

        function getContentDocument(obj, module, methodName) {
            var doc;

            if (!obj) {
                doc = document;
            }

            // Test if a DOM node has been passed and obtain a document object for it if so
            else if (util.isHostProperty(obj, "nodeType")) {
                doc = (obj.nodeType == 1 && obj.tagName.toLowerCase() == "iframe") ?
                    getIframeDocument(obj) : getDocument(obj);
            }

            // Test if the doc parameter appears to be a Window object
            else if (isWindow(obj)) {
                doc = obj.document;
            }

            if (!doc) {
                throw module.createError(methodName + "(): Parameter must be a Window object or DOM node");
            }

            return doc;
        }

        function getRootContainer(node) {
            var parent;
            while ( (parent = node.parentNode) ) {
                node = parent;
            }
            return node;
        }

        function comparePoints(nodeA, offsetA, nodeB, offsetB) {
            // See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
            var nodeC, root, childA, childB, n;
            if (nodeA == nodeB) {
                // Case 1: nodes are the same
                return offsetA === offsetB ? 0 : (offsetA < offsetB) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeB, nodeA, true)) ) {
                // Case 2: node C (container B or an ancestor) is a child node of A
                return offsetA <= getNodeIndex(nodeC) ? -1 : 1;
            } else if ( (nodeC = getClosestAncestorIn(nodeA, nodeB, true)) ) {
                // Case 3: node C (container A or an ancestor) is a child node of B
                return getNodeIndex(nodeC) < offsetB  ? -1 : 1;
            } else {
                root = getCommonAncestor(nodeA, nodeB);
                if (!root) {
                    throw new Error("comparePoints error: nodes have no common ancestor");
                }

                // Case 4: containers are siblings or descendants of siblings
                childA = (nodeA === root) ? root : getClosestAncestorIn(nodeA, root, true);
                childB = (nodeB === root) ? root : getClosestAncestorIn(nodeB, root, true);

                if (childA === childB) {
                    // This shouldn't be possible
                    throw module.createError("comparePoints got to case 4 and childA and childB are the same!");
                } else {
                    n = root.firstChild;
                    while (n) {
                        if (n === childA) {
                            return -1;
                        } else if (n === childB) {
                            return 1;
                        }
                        n = n.nextSibling;
                    }
                }
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test for IE's crash (IE 6/7) or exception (IE >= 8) when a reference to garbage-collected text node is queried
        var crashyTextNodes = false;

        function isBrokenNode(node) {
            var n;
            try {
                n = node.parentNode;
                return false;
            } catch (e) {
                return true;
            }
        }

        (function() {
            var el = document.createElement("b");
            el.innerHTML = "1";
            var textNode = el.firstChild;
            el.innerHTML = "<br />";
            crashyTextNodes = isBrokenNode(textNode);

            api.features.crashyTextNodes = crashyTextNodes;
        })();

        /*----------------------------------------------------------------------------------------------------------------*/

        function inspectNode(node) {
            if (!node) {
                return "[No node]";
            }
            if (crashyTextNodes && isBrokenNode(node)) {
                return "[Broken node]";
            }
            if (isCharacterDataNode(node)) {
                return '"' + node.data + '"';
            }
            if (node.nodeType == 1) {
                var idAttr = node.id ? ' id="' + node.id + '"' : "";
                return "<" + node.nodeName + idAttr + ">[index:" + getNodeIndex(node) + ",length:" + node.childNodes.length + "][" + (node.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
            }
            return node.nodeName;
        }

        function fragmentFromNodeChildren(node) {
            var fragment = getDocument(node).createDocumentFragment(), child;
            while ( (child = node.firstChild) ) {
                fragment.appendChild(child);
            }
            return fragment;
        }

        var getComputedStyleProperty;
        if (typeof window.getComputedStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return getWindow(el).getComputedStyle(el, null)[propName];
            };
        } else if (typeof document.documentElement.currentStyle != UNDEF) {
            getComputedStyleProperty = function(el, propName) {
                return el.currentStyle ? el.currentStyle[propName] : "";
            };
        } else {
            module.fail("No means of obtaining computed style properties found");
        }

        function createTestElement(doc, html, contentEditable) {
            var body = getBody(doc);
            var el = doc.createElement("div");
            el.contentEditable = "" + !!contentEditable;
            if (html) {
                el.innerHTML = html;
            }

            // Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
            var bodyFirstChild = body.firstChild;
            if (bodyFirstChild) {
                body.insertBefore(el, bodyFirstChild);
            } else {
                body.appendChild(el);
            }

            return el;
        }

        function removeNode(node) {
            return node.parentNode.removeChild(node);
        }

        function NodeIterator(root) {
            this.root = root;
            this._next = root;
        }

        NodeIterator.prototype = {
            _current: null,

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                var n = this._current = this._next;
                var child, next;
                if (this._current) {
                    child = n.firstChild;
                    if (child) {
                        this._next = child;
                    } else {
                        next = null;
                        while ((n !== this.root) && !(next = n.nextSibling)) {
                            n = n.parentNode;
                        }
                        this._next = next;
                    }
                }
                return this._current;
            },

            detach: function() {
                this._current = this._next = this.root = null;
            }
        };

        function createIterator(root) {
            return new NodeIterator(root);
        }

        function DomPosition(node, offset) {
            this.node = node;
            this.offset = offset;
        }

        DomPosition.prototype = {
            equals: function(pos) {
                return !!pos && this.node === pos.node && this.offset == pos.offset;
            },

            inspect: function() {
                return "[DomPosition(" + inspectNode(this.node) + ":" + this.offset + ")]";
            },

            toString: function() {
                return this.inspect();
            }
        };

        function DOMException(codeName) {
            this.code = this[codeName];
            this.codeName = codeName;
            this.message = "DOMException: " + this.codeName;
        }

        DOMException.prototype = {
            INDEX_SIZE_ERR: 1,
            HIERARCHY_REQUEST_ERR: 3,
            WRONG_DOCUMENT_ERR: 4,
            NO_MODIFICATION_ALLOWED_ERR: 7,
            NOT_FOUND_ERR: 8,
            NOT_SUPPORTED_ERR: 9,
            INVALID_STATE_ERR: 11,
            INVALID_NODE_TYPE_ERR: 24
        };

        DOMException.prototype.toString = function() {
            return this.message;
        };

        api.dom = {
            arrayContains: arrayContains,
            isHtmlNamespace: isHtmlNamespace,
            parentElement: parentElement,
            getNodeIndex: getNodeIndex,
            getNodeLength: getNodeLength,
            getCommonAncestor: getCommonAncestor,
            isAncestorOf: isAncestorOf,
            isOrIsAncestorOf: isOrIsAncestorOf,
            getClosestAncestorIn: getClosestAncestorIn,
            isCharacterDataNode: isCharacterDataNode,
            isTextOrCommentNode: isTextOrCommentNode,
            insertAfter: insertAfter,
            splitDataNode: splitDataNode,
            getDocument: getDocument,
            getWindow: getWindow,
            getIframeWindow: getIframeWindow,
            getIframeDocument: getIframeDocument,
            getBody: getBody,
            isWindow: isWindow,
            getContentDocument: getContentDocument,
            getRootContainer: getRootContainer,
            comparePoints: comparePoints,
            isBrokenNode: isBrokenNode,
            inspectNode: inspectNode,
            getComputedStyleProperty: getComputedStyleProperty,
            createTestElement: createTestElement,
            removeNode: removeNode,
            fragmentFromNodeChildren: fragmentFromNodeChildren,
            createIterator: createIterator,
            DomPosition: DomPosition
        };

        api.DOMException = DOMException;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Pure JavaScript implementation of DOM Range
    api.createCoreModule("DomRange", ["DomUtil"], function(api, module) {
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DOMException = api.DOMException;

        var isCharacterDataNode = dom.isCharacterDataNode;
        var getNodeIndex = dom.getNodeIndex;
        var isOrIsAncestorOf = dom.isOrIsAncestorOf;
        var getDocument = dom.getDocument;
        var comparePoints = dom.comparePoints;
        var splitDataNode = dom.splitDataNode;
        var getClosestAncestorIn = dom.getClosestAncestorIn;
        var getNodeLength = dom.getNodeLength;
        var arrayContains = dom.arrayContains;
        var getRootContainer = dom.getRootContainer;
        var crashyTextNodes = api.features.crashyTextNodes;

        var removeNode = dom.removeNode;

        /*----------------------------------------------------------------------------------------------------------------*/

        // Utility functions

        function isNonTextPartiallySelected(node, range) {
            return (node.nodeType != 3) &&
                   (isOrIsAncestorOf(node, range.startContainer) || isOrIsAncestorOf(node, range.endContainer));
        }

        function getRangeDocument(range) {
            return range.document || getDocument(range.startContainer);
        }

        function getRangeRoot(range) {
            return getRootContainer(range.startContainer);
        }

        function getBoundaryBeforeNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node));
        }

        function getBoundaryAfterNode(node) {
            return new DomPosition(node.parentNode, getNodeIndex(node) + 1);
        }

        function insertNodeAtPosition(node, n, o) {
            var firstNodeInserted = node.nodeType == 11 ? node.firstChild : node;
            if (isCharacterDataNode(n)) {
                if (o == n.length) {
                    dom.insertAfter(node, n);
                } else {
                    n.parentNode.insertBefore(node, o == 0 ? n : splitDataNode(n, o));
                }
            } else if (o >= n.childNodes.length) {
                n.appendChild(node);
            } else {
                n.insertBefore(node, n.childNodes[o]);
            }
            return firstNodeInserted;
        }

        function rangesIntersect(rangeA, rangeB, touchingIsIntersecting) {
            assertRangeValid(rangeA);
            assertRangeValid(rangeB);

            if (getRangeDocument(rangeB) != getRangeDocument(rangeA)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }

            var startComparison = comparePoints(rangeA.startContainer, rangeA.startOffset, rangeB.endContainer, rangeB.endOffset),
                endComparison = comparePoints(rangeA.endContainer, rangeA.endOffset, rangeB.startContainer, rangeB.startOffset);

            return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
        }

        function cloneSubtree(iterator) {
            var partiallySelected;
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {
                partiallySelected = iterator.isPartiallySelectedSubtree();
                node = node.cloneNode(!partiallySelected);
                if (partiallySelected) {
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(cloneSubtree(subIterator));
                    subIterator.detach();
                }

                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function iterateSubtree(rangeIterator, func, iteratorState) {
            var it, n;
            iteratorState = iteratorState || { stop: false };
            for (var node, subRangeIterator; node = rangeIterator.next(); ) {
                if (rangeIterator.isPartiallySelectedSubtree()) {
                    if (func(node) === false) {
                        iteratorState.stop = true;
                        return;
                    } else {
                        // The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
                        // the node selected by the Range.
                        subRangeIterator = rangeIterator.getSubtreeIterator();
                        iterateSubtree(subRangeIterator, func, iteratorState);
                        subRangeIterator.detach();
                        if (iteratorState.stop) {
                            return;
                        }
                    }
                } else {
                    // The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
                    // descendants
                    it = dom.createIterator(node);
                    while ( (n = it.next()) ) {
                        if (func(n) === false) {
                            iteratorState.stop = true;
                            return;
                        }
                    }
                }
            }
        }

        function deleteSubtree(iterator) {
            var subIterator;
            while (iterator.next()) {
                if (iterator.isPartiallySelectedSubtree()) {
                    subIterator = iterator.getSubtreeIterator();
                    deleteSubtree(subIterator);
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
            }
        }

        function extractSubtree(iterator) {
            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {

                if (iterator.isPartiallySelectedSubtree()) {
                    node = node.cloneNode(false);
                    subIterator = iterator.getSubtreeIterator();
                    node.appendChild(extractSubtree(subIterator));
                    subIterator.detach();
                } else {
                    iterator.remove();
                }
                if (node.nodeType == 10) { // DocumentType
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }
                frag.appendChild(node);
            }
            return frag;
        }

        function getNodesInRange(range, nodeTypes, filter) {
            var filterNodeTypes = !!(nodeTypes && nodeTypes.length), regex;
            var filterExists = !!filter;
            if (filterNodeTypes) {
                regex = new RegExp("^(" + nodeTypes.join("|") + ")$");
            }

            var nodes = [];
            iterateSubtree(new RangeIterator(range, false), function(node) {
                if (filterNodeTypes && !regex.test(node.nodeType)) {
                    return;
                }
                if (filterExists && !filter(node)) {
                    return;
                }
                // Don't include a boundary container if it is a character data node and the range does not contain any
                // of its character data. See issue 190.
                var sc = range.startContainer;
                if (node == sc && isCharacterDataNode(sc) && range.startOffset == sc.length) {
                    return;
                }

                var ec = range.endContainer;
                if (node == ec && isCharacterDataNode(ec) && range.endOffset == 0) {
                    return;
                }

                nodes.push(node);
            });
            return nodes;
        }

        function inspect(range) {
            var name = (typeof range.getName == "undefined") ? "Range" : range.getName();
            return "[" + name + "(" + dom.inspectNode(range.startContainer) + ":" + range.startOffset + ", " +
                    dom.inspectNode(range.endContainer) + ":" + range.endOffset + ")]";
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)

        function RangeIterator(range, clonePartiallySelectedTextNodes) {
            this.range = range;
            this.clonePartiallySelectedTextNodes = clonePartiallySelectedTextNodes;


            if (!range.collapsed) {
                this.sc = range.startContainer;
                this.so = range.startOffset;
                this.ec = range.endContainer;
                this.eo = range.endOffset;
                var root = range.commonAncestorContainer;

                if (this.sc === this.ec && isCharacterDataNode(this.sc)) {
                    this.isSingleCharacterDataNode = true;
                    this._first = this._last = this._next = this.sc;
                } else {
                    this._first = this._next = (this.sc === root && !isCharacterDataNode(this.sc)) ?
                        this.sc.childNodes[this.so] : getClosestAncestorIn(this.sc, root, true);
                    this._last = (this.ec === root && !isCharacterDataNode(this.ec)) ?
                        this.ec.childNodes[this.eo - 1] : getClosestAncestorIn(this.ec, root, true);
                }
            }
        }

        RangeIterator.prototype = {
            _current: null,
            _next: null,
            _first: null,
            _last: null,
            isSingleCharacterDataNode: false,

            reset: function() {
                this._current = null;
                this._next = this._first;
            },

            hasNext: function() {
                return !!this._next;
            },

            next: function() {
                // Move to next node
                var current = this._current = this._next;
                if (current) {
                    this._next = (current !== this._last) ? current.nextSibling : null;

                    // Check for partially selected text nodes
                    if (isCharacterDataNode(current) && this.clonePartiallySelectedTextNodes) {
                        if (current === this.ec) {
                            (current = current.cloneNode(true)).deleteData(this.eo, current.length - this.eo);
                        }
                        if (this._current === this.sc) {
                            (current = current.cloneNode(true)).deleteData(0, this.so);
                        }
                    }
                }

                return current;
            },

            remove: function() {
                var current = this._current, start, end;

                if (isCharacterDataNode(current) && (current === this.sc || current === this.ec)) {
                    start = (current === this.sc) ? this.so : 0;
                    end = (current === this.ec) ? this.eo : current.length;
                    if (start != end) {
                        current.deleteData(start, end - start);
                    }
                } else {
                    if (current.parentNode) {
                        removeNode(current);
                    } else {
                    }
                }
            },

            // Checks if the current node is partially selected
            isPartiallySelectedSubtree: function() {
                var current = this._current;
                return isNonTextPartiallySelected(current, this.range);
            },

            getSubtreeIterator: function() {
                var subRange;
                if (this.isSingleCharacterDataNode) {
                    subRange = this.range.cloneRange();
                    subRange.collapse(false);
                } else {
                    subRange = new Range(getRangeDocument(this.range));
                    var current = this._current;
                    var startContainer = current, startOffset = 0, endContainer = current, endOffset = getNodeLength(current);

                    if (isOrIsAncestorOf(current, this.sc)) {
                        startContainer = this.sc;
                        startOffset = this.so;
                    }
                    if (isOrIsAncestorOf(current, this.ec)) {
                        endContainer = this.ec;
                        endOffset = this.eo;
                    }

                    updateBoundaries(subRange, startContainer, startOffset, endContainer, endOffset);
                }
                return new RangeIterator(subRange, this.clonePartiallySelectedTextNodes);
            },

            detach: function() {
                this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
            }
        };

        /*----------------------------------------------------------------------------------------------------------------*/

        var beforeAfterNodeTypes = [1, 3, 4, 5, 7, 8, 10];
        var rootContainerNodeTypes = [2, 9, 11];
        var readonlyNodeTypes = [5, 6, 10, 12];
        var insertableNodeTypes = [1, 3, 4, 5, 7, 8, 10, 11];
        var surroundNodeTypes = [1, 3, 4, 5, 7, 8];

        function createAncestorFinder(nodeTypes) {
            return function(node, selfIsAncestor) {
                var t, n = selfIsAncestor ? node : node.parentNode;
                while (n) {
                    t = n.nodeType;
                    if (arrayContains(nodeTypes, t)) {
                        return n;
                    }
                    n = n.parentNode;
                }
                return null;
            };
        }

        var getDocumentOrFragmentContainer = createAncestorFinder( [9, 11] );
        var getReadonlyAncestor = createAncestorFinder(readonlyNodeTypes);
        var getDocTypeNotationEntityAncestor = createAncestorFinder( [6, 10, 12] );

        function assertNoDocTypeNotationEntityAncestor(node, allowSelf) {
            if (getDocTypeNotationEntityAncestor(node, allowSelf)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidNodeType(node, invalidTypes) {
            if (!arrayContains(invalidTypes, node.nodeType)) {
                throw new DOMException("INVALID_NODE_TYPE_ERR");
            }
        }

        function assertValidOffset(node, offset) {
            if (offset < 0 || offset > (isCharacterDataNode(node) ? node.length : node.childNodes.length)) {
                throw new DOMException("INDEX_SIZE_ERR");
            }
        }

        function assertSameDocumentOrFragment(node1, node2) {
            if (getDocumentOrFragmentContainer(node1, true) !== getDocumentOrFragmentContainer(node2, true)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        function assertNodeNotReadOnly(node) {
            if (getReadonlyAncestor(node, true)) {
                throw new DOMException("NO_MODIFICATION_ALLOWED_ERR");
            }
        }

        function assertNode(node, codeName) {
            if (!node) {
                throw new DOMException(codeName);
            }
        }

        function isValidOffset(node, offset) {
            return offset <= (isCharacterDataNode(node) ? node.length : node.childNodes.length);
        }

        function isRangeValid(range) {
            return (!!range.startContainer && !!range.endContainer &&
                    !(crashyTextNodes && (dom.isBrokenNode(range.startContainer) || dom.isBrokenNode(range.endContainer))) &&
                    getRootContainer(range.startContainer) == getRootContainer(range.endContainer) &&
                    isValidOffset(range.startContainer, range.startOffset) &&
                    isValidOffset(range.endContainer, range.endOffset));
        }

        function assertRangeValid(range) {
            if (!isRangeValid(range)) {
                throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + range.inspect() + ")");
            }
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Test the browser's innerHTML support to decide how to implement createContextualFragment
        var styleEl = document.createElement("style");
        var htmlParsingConforms = false;
        try {
            styleEl.innerHTML = "<b>x</b>";
            htmlParsingConforms = (styleEl.firstChild.nodeType == 3); // Opera incorrectly creates an element node
        } catch (e) {
            // IE 6 and 7 throw
        }

        api.features.htmlParsingConforms = htmlParsingConforms;

        var createContextualFragment = htmlParsingConforms ?

            // Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
            // discussion and base code for this implementation at issue 67.
            // Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
            // Thanks to Aleks Williams.
            function(fragmentStr) {
                // "Let node the context object's start's node."
                var node = this.startContainer;
                var doc = getDocument(node);

                // "If the context object's start's node is null, raise an INVALID_STATE_ERR
                // exception and abort these steps."
                if (!node) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // "Let element be as follows, depending on node's interface:"
                // Document, Document Fragment: null
                var el = null;

                // "Element: node"
                if (node.nodeType == 1) {
                    el = node;

                // "Text, Comment: node's parentElement"
                } else if (isCharacterDataNode(node)) {
                    el = dom.parentElement(node);
                }

                // "If either element is null or element's ownerDocument is an HTML document
                // and element's local name is "html" and element's namespace is the HTML
                // namespace"
                if (el === null || (
                    el.nodeName == "HTML" &&
                    dom.isHtmlNamespace(getDocument(el).documentElement) &&
                    dom.isHtmlNamespace(el)
                )) {

                // "let element be a new Element with "body" as its local name and the HTML
                // namespace as its namespace.""
                    el = doc.createElement("body");
                } else {
                    el = el.cloneNode(false);
                }

                // "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
                // "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
                // "In either case, the algorithm must be invoked with fragment as the input
                // and element as the context element."
                el.innerHTML = fragmentStr;

                // "If this raises an exception, then abort these steps. Otherwise, let new
                // children be the nodes returned."

                // "Let fragment be a new DocumentFragment."
                // "Append all new children to fragment."
                // "Return fragment."
                return dom.fragmentFromNodeChildren(el);
            } :

            // In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
            // previous versions of Rangy used (with the exception of using a body element rather than a div)
            function(fragmentStr) {
                var doc = getRangeDocument(this);
                var el = doc.createElement("body");
                el.innerHTML = fragmentStr;

                return dom.fragmentFromNodeChildren(el);
            };

        function splitRangeBoundaries(range, positionsToPreserve) {
            assertRangeValid(range);

            var sc = range.startContainer, so = range.startOffset, ec = range.endContainer, eo = range.endOffset;
            var startEndSame = (sc === ec);

            if (isCharacterDataNode(ec) && eo > 0 && eo < ec.length) {
                splitDataNode(ec, eo, positionsToPreserve);
            }

            if (isCharacterDataNode(sc) && so > 0 && so < sc.length) {
                sc = splitDataNode(sc, so, positionsToPreserve);
                if (startEndSame) {
                    eo -= so;
                    ec = sc;
                } else if (ec == sc.parentNode && eo >= getNodeIndex(sc)) {
                    eo++;
                }
                so = 0;
            }
            range.setStartAndEnd(sc, so, ec, eo);
        }

        function rangeToHtml(range) {
            assertRangeValid(range);
            var container = range.commonAncestorContainer.parentNode.cloneNode(false);
            container.appendChild( range.cloneContents() );
            return container.innerHTML;
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        var rangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
            "commonAncestorContainer"];

        var s2s = 0, s2e = 1, e2e = 2, e2s = 3;
        var n_b = 0, n_a = 1, n_b_a = 2, n_i = 3;

        util.extend(api.rangePrototype, {
            compareBoundaryPoints: function(how, range) {
                assertRangeValid(this);
                assertSameDocumentOrFragment(this.startContainer, range.startContainer);

                var nodeA, offsetA, nodeB, offsetB;
                var prefixA = (how == e2s || how == s2s) ? "start" : "end";
                var prefixB = (how == s2e || how == s2s) ? "start" : "end";
                nodeA = this[prefixA + "Container"];
                offsetA = this[prefixA + "Offset"];
                nodeB = range[prefixB + "Container"];
                offsetB = range[prefixB + "Offset"];
                return comparePoints(nodeA, offsetA, nodeB, offsetB);
            },

            insertNode: function(node) {
                assertRangeValid(this);
                assertValidNodeType(node, insertableNodeTypes);
                assertNodeNotReadOnly(this.startContainer);

                if (isOrIsAncestorOf(node, this.startContainer)) {
                    throw new DOMException("HIERARCHY_REQUEST_ERR");
                }

                // No check for whether the container of the start of the Range is of a type that does not allow
                // children of the type of node: the browser's DOM implementation should do this for us when we attempt
                // to add the node

                var firstNodeInserted = insertNodeAtPosition(node, this.startContainer, this.startOffset);
                this.setStartBefore(firstNodeInserted);
            },

            cloneContents: function() {
                assertRangeValid(this);

                var clone, frag;
                if (this.collapsed) {
                    return getRangeDocument(this).createDocumentFragment();
                } else {
                    if (this.startContainer === this.endContainer && isCharacterDataNode(this.startContainer)) {
                        clone = this.startContainer.cloneNode(true);
                        clone.data = clone.data.slice(this.startOffset, this.endOffset);
                        frag = getRangeDocument(this).createDocumentFragment();
                        frag.appendChild(clone);
                        return frag;
                    } else {
                        var iterator = new RangeIterator(this, true);
                        clone = cloneSubtree(iterator);
                        iterator.detach();
                    }
                    return clone;
                }
            },

            canSurroundContents: function() {
                assertRangeValid(this);
                assertNodeNotReadOnly(this.startContainer);
                assertNodeNotReadOnly(this.endContainer);

                // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                // no non-text nodes.
                var iterator = new RangeIterator(this, true);
                var boundariesInvalid = (iterator._first && (isNonTextPartiallySelected(iterator._first, this)) ||
                        (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                iterator.detach();
                return !boundariesInvalid;
            },

            surroundContents: function(node) {
                assertValidNodeType(node, surroundNodeTypes);

                if (!this.canSurroundContents()) {
                    throw new DOMException("INVALID_STATE_ERR");
                }

                // Extract the contents
                var content = this.extractContents();

                // Clear the children of the node
                if (node.hasChildNodes()) {
                    while (node.lastChild) {
                        node.removeChild(node.lastChild);
                    }
                }

                // Insert the new node and add the extracted contents
                insertNodeAtPosition(node, this.startContainer, this.startOffset);
                node.appendChild(content);

                this.selectNode(node);
            },

            cloneRange: function() {
                assertRangeValid(this);
                var range = new Range(getRangeDocument(this));
                var i = rangeProperties.length, prop;
                while (i--) {
                    prop = rangeProperties[i];
                    range[prop] = this[prop];
                }
                return range;
            },

            toString: function() {
                assertRangeValid(this);
                var sc = this.startContainer;
                if (sc === this.endContainer && isCharacterDataNode(sc)) {
                    return (sc.nodeType == 3 || sc.nodeType == 4) ? sc.data.slice(this.startOffset, this.endOffset) : "";
                } else {
                    var textParts = [], iterator = new RangeIterator(this, true);
                    iterateSubtree(iterator, function(node) {
                        // Accept only text or CDATA nodes, not comments
                        if (node.nodeType == 3 || node.nodeType == 4) {
                            textParts.push(node.data);
                        }
                    });
                    iterator.detach();
                    return textParts.join("");
                }
            },

            // The methods below are all non-standard. The following batch were introduced by Mozilla but have since
            // been removed from Mozilla.

            compareNode: function(node) {
                assertRangeValid(this);

                var parent = node.parentNode;
                var nodeIndex = getNodeIndex(node);

                if (!parent) {
                    throw new DOMException("NOT_FOUND_ERR");
                }

                var startComparison = this.comparePoint(parent, nodeIndex),
                    endComparison = this.comparePoint(parent, nodeIndex + 1);

                if (startComparison < 0) { // Node starts before
                    return (endComparison > 0) ? n_b_a : n_b;
                } else {
                    return (endComparison > 0) ? n_a : n_i;
                }
            },

            comparePoint: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                if (comparePoints(node, offset, this.startContainer, this.startOffset) < 0) {
                    return -1;
                } else if (comparePoints(node, offset, this.endContainer, this.endOffset) > 0) {
                    return 1;
                }
                return 0;
            },

            createContextualFragment: createContextualFragment,

            toHtml: function() {
                return rangeToHtml(this);
            },

            // touchingIsIntersecting determines whether this method considers a node that borders a range intersects
            // with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
            intersectsNode: function(node, touchingIsIntersecting) {
                assertRangeValid(this);
                if (getRootContainer(node) != getRangeRoot(this)) {
                    return false;
                }

                var parent = node.parentNode, offset = getNodeIndex(node);
                if (!parent) {
                    return true;
                }

                var startComparison = comparePoints(parent, offset, this.endContainer, this.endOffset),
                    endComparison = comparePoints(parent, offset + 1, this.startContainer, this.startOffset);

                return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
            },

            isPointInRange: function(node, offset) {
                assertRangeValid(this);
                assertNode(node, "HIERARCHY_REQUEST_ERR");
                assertSameDocumentOrFragment(node, this.startContainer);

                return (comparePoints(node, offset, this.startContainer, this.startOffset) >= 0) &&
                       (comparePoints(node, offset, this.endContainer, this.endOffset) <= 0);
            },

            // The methods below are non-standard and invented by me.

            // Sharing a boundary start-to-end or end-to-start does not count as intersection.
            intersectsRange: function(range) {
                return rangesIntersect(this, range, false);
            },

            // Sharing a boundary start-to-end or end-to-start does count as intersection.
            intersectsOrTouchesRange: function(range) {
                return rangesIntersect(this, range, true);
            },

            intersection: function(range) {
                if (this.intersectsRange(range)) {
                    var startComparison = comparePoints(this.startContainer, this.startOffset, range.startContainer, range.startOffset),
                        endComparison = comparePoints(this.endContainer, this.endOffset, range.endContainer, range.endOffset);

                    var intersectionRange = this.cloneRange();
                    if (startComparison == -1) {
                        intersectionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (endComparison == 1) {
                        intersectionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return intersectionRange;
                }
                return null;
            },

            union: function(range) {
                if (this.intersectsOrTouchesRange(range)) {
                    var unionRange = this.cloneRange();
                    if (comparePoints(range.startContainer, range.startOffset, this.startContainer, this.startOffset) == -1) {
                        unionRange.setStart(range.startContainer, range.startOffset);
                    }
                    if (comparePoints(range.endContainer, range.endOffset, this.endContainer, this.endOffset) == 1) {
                        unionRange.setEnd(range.endContainer, range.endOffset);
                    }
                    return unionRange;
                } else {
                    throw new DOMException("Ranges do not intersect");
                }
            },

            containsNode: function(node, allowPartial) {
                if (allowPartial) {
                    return this.intersectsNode(node, false);
                } else {
                    return this.compareNode(node) == n_i;
                }
            },

            containsNodeContents: function(node) {
                return this.comparePoint(node, 0) >= 0 && this.comparePoint(node, getNodeLength(node)) <= 0;
            },

            containsRange: function(range) {
                var intersection = this.intersection(range);
                return intersection !== null && range.equals(intersection);
            },

            containsNodeText: function(node) {
                var nodeRange = this.cloneRange();
                nodeRange.selectNode(node);
                var textNodes = nodeRange.getNodes([3]);
                if (textNodes.length > 0) {
                    nodeRange.setStart(textNodes[0], 0);
                    var lastTextNode = textNodes.pop();
                    nodeRange.setEnd(lastTextNode, lastTextNode.length);
                    return this.containsRange(nodeRange);
                } else {
                    return this.containsNodeContents(node);
                }
            },

            getNodes: function(nodeTypes, filter) {
                assertRangeValid(this);
                return getNodesInRange(this, nodeTypes, filter);
            },

            getDocument: function() {
                return getRangeDocument(this);
            },

            collapseBefore: function(node) {
                this.setEndBefore(node);
                this.collapse(false);
            },

            collapseAfter: function(node) {
                this.setStartAfter(node);
                this.collapse(true);
            },

            getBookmark: function(containerNode) {
                var doc = getRangeDocument(this);
                var preSelectionRange = api.createRange(doc);
                containerNode = containerNode || dom.getBody(doc);
                preSelectionRange.selectNodeContents(containerNode);
                var range = this.intersection(preSelectionRange);
                var start = 0, end = 0;
                if (range) {
                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
                    start = preSelectionRange.toString().length;
                    end = start + range.toString().length;
                }

                return {
                    start: start,
                    end: end,
                    containerNode: containerNode
                };
            },

            moveToBookmark: function(bookmark) {
                var containerNode = bookmark.containerNode;
                var charIndex = 0;
                this.setStart(containerNode, 0);
                this.collapse(true);
                var nodeStack = [containerNode], node, foundStart = false, stop = false;
                var nextCharIndex, i, childNodes;

                while (!stop && (node = nodeStack.pop())) {
                    if (node.nodeType == 3) {
                        nextCharIndex = charIndex + node.length;
                        if (!foundStart && bookmark.start >= charIndex && bookmark.start <= nextCharIndex) {
                            this.setStart(node, bookmark.start - charIndex);
                            foundStart = true;
                        }
                        if (foundStart && bookmark.end >= charIndex && bookmark.end <= nextCharIndex) {
                            this.setEnd(node, bookmark.end - charIndex);
                            stop = true;
                        }
                        charIndex = nextCharIndex;
                    } else {
                        childNodes = node.childNodes;
                        i = childNodes.length;
                        while (i--) {
                            nodeStack.push(childNodes[i]);
                        }
                    }
                }
            },

            getName: function() {
                return "DomRange";
            },

            equals: function(range) {
                return Range.rangesEqual(this, range);
            },

            isValid: function() {
                return isRangeValid(this);
            },

            inspect: function() {
                return inspect(this);
            },

            detach: function() {
                // In DOM4, detach() is now a no-op.
            }
        });

        function copyComparisonConstantsToObject(obj) {
            obj.START_TO_START = s2s;
            obj.START_TO_END = s2e;
            obj.END_TO_END = e2e;
            obj.END_TO_START = e2s;

            obj.NODE_BEFORE = n_b;
            obj.NODE_AFTER = n_a;
            obj.NODE_BEFORE_AND_AFTER = n_b_a;
            obj.NODE_INSIDE = n_i;
        }

        function copyComparisonConstants(constructor) {
            copyComparisonConstantsToObject(constructor);
            copyComparisonConstantsToObject(constructor.prototype);
        }

        function createRangeContentRemover(remover, boundaryUpdater) {
            return function() {
                assertRangeValid(this);

                var sc = this.startContainer, so = this.startOffset, root = this.commonAncestorContainer;

                var iterator = new RangeIterator(this, true);

                // Work out where to position the range after content removal
                var node, boundary;
                if (sc !== root) {
                    node = getClosestAncestorIn(sc, root, true);
                    boundary = getBoundaryAfterNode(node);
                    sc = boundary.node;
                    so = boundary.offset;
                }

                // Check none of the range is read-only
                iterateSubtree(iterator, assertNodeNotReadOnly);

                iterator.reset();

                // Remove the content
                var returnValue = remover(iterator);
                iterator.detach();

                // Move to the new position
                boundaryUpdater(this, sc, so, sc, so);

                return returnValue;
            };
        }

        function createPrototypeRange(constructor, boundaryUpdater) {
            function createBeforeAfterNodeSetter(isBefore, isStart) {
                return function(node) {
                    assertValidNodeType(node, beforeAfterNodeTypes);
                    assertValidNodeType(getRootContainer(node), rootContainerNodeTypes);

                    var boundary = (isBefore ? getBoundaryBeforeNode : getBoundaryAfterNode)(node);
                    (isStart ? setRangeStart : setRangeEnd)(this, boundary.node, boundary.offset);
                };
            }

            function setRangeStart(range, node, offset) {
                var ec = range.endContainer, eo = range.endOffset;
                if (node !== range.startContainer || offset !== range.startOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(ec) || comparePoints(node, offset, ec, eo) == 1) {
                        ec = node;
                        eo = offset;
                    }
                    boundaryUpdater(range, node, offset, ec, eo);
                }
            }

            function setRangeEnd(range, node, offset) {
                var sc = range.startContainer, so = range.startOffset;
                if (node !== range.endContainer || offset !== range.endOffset) {
                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
                    // is after the current end. In either case, collapse the range to the new position
                    if (getRootContainer(node) != getRootContainer(sc) || comparePoints(node, offset, sc, so) == -1) {
                        sc = node;
                        so = offset;
                    }
                    boundaryUpdater(range, sc, so, node, offset);
                }
            }

            // Set up inheritance
            var F = function() {};
            F.prototype = api.rangePrototype;
            constructor.prototype = new F();

            util.extend(constructor.prototype, {
                setStart: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeStart(this, node, offset);
                },

                setEnd: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);

                    setRangeEnd(this, node, offset);
                },

                /**
                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
                 * - Two parameters (node, offset) creates a collapsed range at that position
                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
                 *   startOffset and ending at endOffset
                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
                 *   startNode and ending at endOffset in endNode
                 */
                setStartAndEnd: function() {
                    var args = arguments;
                    var sc = args[0], so = args[1], ec = sc, eo = so;

                    switch (args.length) {
                        case 3:
                            eo = args[2];
                            break;
                        case 4:
                            ec = args[2];
                            eo = args[3];
                            break;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                setBoundary: function(node, offset, isStart) {
                    this["set" + (isStart ? "Start" : "End")](node, offset);
                },

                setStartBefore: createBeforeAfterNodeSetter(true, true),
                setStartAfter: createBeforeAfterNodeSetter(false, true),
                setEndBefore: createBeforeAfterNodeSetter(true, false),
                setEndAfter: createBeforeAfterNodeSetter(false, false),

                collapse: function(isStart) {
                    assertRangeValid(this);
                    if (isStart) {
                        boundaryUpdater(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset);
                    } else {
                        boundaryUpdater(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
                    }
                },

                selectNodeContents: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, true);

                    boundaryUpdater(this, node, 0, node, getNodeLength(node));
                },

                selectNode: function(node) {
                    assertNoDocTypeNotationEntityAncestor(node, false);
                    assertValidNodeType(node, beforeAfterNodeTypes);

                    var start = getBoundaryBeforeNode(node), end = getBoundaryAfterNode(node);
                    boundaryUpdater(this, start.node, start.offset, end.node, end.offset);
                },

                extractContents: createRangeContentRemover(extractSubtree, boundaryUpdater),

                deleteContents: createRangeContentRemover(deleteSubtree, boundaryUpdater),

                canSurroundContents: function() {
                    assertRangeValid(this);
                    assertNodeNotReadOnly(this.startContainer);
                    assertNodeNotReadOnly(this.endContainer);

                    // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
                    // no non-text nodes.
                    var iterator = new RangeIterator(this, true);
                    var boundariesInvalid = (iterator._first && isNonTextPartiallySelected(iterator._first, this) ||
                            (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
                    iterator.detach();
                    return !boundariesInvalid;
                },

                splitBoundaries: function() {
                    splitRangeBoundaries(this);
                },

                splitBoundariesPreservingPositions: function(positionsToPreserve) {
                    splitRangeBoundaries(this, positionsToPreserve);
                },

                normalizeBoundaries: function() {
                    assertRangeValid(this);

                    var sc = this.startContainer, so = this.startOffset, ec = this.endContainer, eo = this.endOffset;

                    var mergeForward = function(node) {
                        var sibling = node.nextSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            ec = node;
                            eo = node.length;
                            node.appendData(sibling.data);
                            removeNode(sibling);
                        }
                    };

                    var mergeBackward = function(node) {
                        var sibling = node.previousSibling;
                        if (sibling && sibling.nodeType == node.nodeType) {
                            sc = node;
                            var nodeLength = node.length;
                            so = sibling.length;
                            node.insertData(0, sibling.data);
                            removeNode(sibling);
                            if (sc == ec) {
                                eo += so;
                                ec = sc;
                            } else if (ec == node.parentNode) {
                                var nodeIndex = getNodeIndex(node);
                                if (eo == nodeIndex) {
                                    ec = node;
                                    eo = nodeLength;
                                } else if (eo > nodeIndex) {
                                    eo--;
                                }
                            }
                        }
                    };

                    var normalizeStart = true;
                    var sibling;

                    if (isCharacterDataNode(ec)) {
                        if (eo == ec.length) {
                            mergeForward(ec);
                        } else if (eo == 0) {
                            sibling = ec.previousSibling;
                            if (sibling && sibling.nodeType == ec.nodeType) {
                                eo = sibling.length;
                                if (sc == ec) {
                                    normalizeStart = false;
                                }
                                sibling.appendData(ec.data);
                                removeNode(ec);
                                ec = sibling;
                            }
                        }
                    } else {
                        if (eo > 0) {
                            var endNode = ec.childNodes[eo - 1];
                            if (endNode && isCharacterDataNode(endNode)) {
                                mergeForward(endNode);
                            }
                        }
                        normalizeStart = !this.collapsed;
                    }

                    if (normalizeStart) {
                        if (isCharacterDataNode(sc)) {
                            if (so == 0) {
                                mergeBackward(sc);
                            } else if (so == sc.length) {
                                sibling = sc.nextSibling;
                                if (sibling && sibling.nodeType == sc.nodeType) {
                                    if (ec == sibling) {
                                        ec = sc;
                                        eo += sc.length;
                                    }
                                    sc.appendData(sibling.data);
                                    removeNode(sibling);
                                }
                            }
                        } else {
                            if (so < sc.childNodes.length) {
                                var startNode = sc.childNodes[so];
                                if (startNode && isCharacterDataNode(startNode)) {
                                    mergeBackward(startNode);
                                }
                            }
                        }
                    } else {
                        sc = ec;
                        so = eo;
                    }

                    boundaryUpdater(this, sc, so, ec, eo);
                },

                collapseToPoint: function(node, offset) {
                    assertNoDocTypeNotationEntityAncestor(node, true);
                    assertValidOffset(node, offset);
                    this.setStartAndEnd(node, offset);
                }
            });

            copyComparisonConstants(constructor);
        }

        /*----------------------------------------------------------------------------------------------------------------*/

        // Updates commonAncestorContainer and collapsed after boundary change
        function updateCollapsedAndCommonAncestor(range) {
            range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
            range.commonAncestorContainer = range.collapsed ?
                range.startContainer : dom.getCommonAncestor(range.startContainer, range.endContainer);
        }

        function updateBoundaries(range, startContainer, startOffset, endContainer, endOffset) {
            range.startContainer = startContainer;
            range.startOffset = startOffset;
            range.endContainer = endContainer;
            range.endOffset = endOffset;
            range.document = dom.getDocument(startContainer);

            updateCollapsedAndCommonAncestor(range);
        }

        function Range(doc) {
            this.startContainer = doc;
            this.startOffset = 0;
            this.endContainer = doc;
            this.endOffset = 0;
            this.document = doc;
            updateCollapsedAndCommonAncestor(this);
        }

        createPrototypeRange(Range, updateBoundaries);

        util.extend(Range, {
            rangeProperties: rangeProperties,
            RangeIterator: RangeIterator,
            copyComparisonConstants: copyComparisonConstants,
            createPrototypeRange: createPrototypeRange,
            inspect: inspect,
            toHtml: rangeToHtml,
            getRangeDocument: getRangeDocument,
            rangesEqual: function(r1, r2) {
                return r1.startContainer === r2.startContainer &&
                    r1.startOffset === r2.startOffset &&
                    r1.endContainer === r2.endContainer &&
                    r1.endOffset === r2.endOffset;
            }
        });

        api.DomRange = Range;
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wrappers for the browser's native DOM Range and/or TextRange implementation
    api.createCoreModule("WrappedRange", ["DomRange"], function(api, module) {
        var WrappedRange, WrappedTextRange;
        var dom = api.dom;
        var util = api.util;
        var DomPosition = dom.DomPosition;
        var DomRange = api.DomRange;
        var getBody = dom.getBody;
        var getContentDocument = dom.getContentDocument;
        var isCharacterDataNode = dom.isCharacterDataNode;


        /*----------------------------------------------------------------------------------------------------------------*/

        if (api.features.implementsDomRange) {
            // This is a wrapper around the browser's native DOM Range. It has two aims:
            // - Provide workarounds for specific browser bugs
            // - provide convenient extensions, which are inherited from Rangy's DomRange

            (function() {
                var rangeProto;
                var rangeProperties = DomRange.rangeProperties;

                function updateRangeProperties(range) {
                    var i = rangeProperties.length, prop;
                    while (i--) {
                        prop = rangeProperties[i];
                        range[prop] = range.nativeRange[prop];
                    }
                    // Fix for broken collapsed property in IE 9.
                    range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
                }

                function updateNativeRange(range, startContainer, startOffset, endContainer, endOffset) {
                    var startMoved = (range.startContainer !== startContainer || range.startOffset != startOffset);
                    var endMoved = (range.endContainer !== endContainer || range.endOffset != endOffset);
                    var nativeRangeDifferent = !range.equals(range.nativeRange);

                    // Always set both boundaries for the benefit of IE9 (see issue 35)
                    if (startMoved || endMoved || nativeRangeDifferent) {
                        range.setEnd(endContainer, endOffset);
                        range.setStart(startContainer, startOffset);
                    }
                }

                var createBeforeAfterNodeSetter;

                WrappedRange = function(range) {
                    if (!range) {
                        throw module.createError("WrappedRange: Range must be specified");
                    }
                    this.nativeRange = range;
                    updateRangeProperties(this);
                };

                DomRange.createPrototypeRange(WrappedRange, updateNativeRange);

                rangeProto = WrappedRange.prototype;

                rangeProto.selectNode = function(node) {
                    this.nativeRange.selectNode(node);
                    updateRangeProperties(this);
                };

                rangeProto.cloneContents = function() {
                    return this.nativeRange.cloneContents();
                };

                // Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
                // insertNode() is never delegated to the native range.

                rangeProto.surroundContents = function(node) {
                    this.nativeRange.surroundContents(node);
                    updateRangeProperties(this);
                };

                rangeProto.collapse = function(isStart) {
                    this.nativeRange.collapse(isStart);
                    updateRangeProperties(this);
                };

                rangeProto.cloneRange = function() {
                    return new WrappedRange(this.nativeRange.cloneRange());
                };

                rangeProto.refresh = function() {
                    updateRangeProperties(this);
                };

                rangeProto.toString = function() {
                    return this.nativeRange.toString();
                };

                // Create test range and node for feature detection

                var testTextNode = document.createTextNode("test");
                getBody(document).appendChild(testTextNode);
                var range = document.createRange();

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
                // correct for it

                range.setStart(testTextNode, 0);
                range.setEnd(testTextNode, 0);

                try {
                    range.setStart(testTextNode, 1);

                    rangeProto.setStart = function(node, offset) {
                        this.nativeRange.setStart(node, offset);
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        this.nativeRange.setEnd(node, offset);
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name) {
                        return function(node) {
                            this.nativeRange[name](node);
                            updateRangeProperties(this);
                        };
                    };

                } catch(ex) {

                    rangeProto.setStart = function(node, offset) {
                        try {
                            this.nativeRange.setStart(node, offset);
                        } catch (ex) {
                            this.nativeRange.setEnd(node, offset);
                            this.nativeRange.setStart(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    rangeProto.setEnd = function(node, offset) {
                        try {
                            this.nativeRange.setEnd(node, offset);
                        } catch (ex) {
                            this.nativeRange.setStart(node, offset);
                            this.nativeRange.setEnd(node, offset);
                        }
                        updateRangeProperties(this);
                    };

                    createBeforeAfterNodeSetter = function(name, oppositeName) {
                        return function(node) {
                            try {
                                this.nativeRange[name](node);
                            } catch (ex) {
                                this.nativeRange[oppositeName](node);
                                this.nativeRange[name](node);
                            }
                            updateRangeProperties(this);
                        };
                    };
                }

                rangeProto.setStartBefore = createBeforeAfterNodeSetter("setStartBefore", "setEndBefore");
                rangeProto.setStartAfter = createBeforeAfterNodeSetter("setStartAfter", "setEndAfter");
                rangeProto.setEndBefore = createBeforeAfterNodeSetter("setEndBefore", "setStartBefore");
                rangeProto.setEndAfter = createBeforeAfterNodeSetter("setEndAfter", "setStartAfter");

                /*--------------------------------------------------------------------------------------------------------*/

                // Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
                // whether the native implementation can be trusted
                rangeProto.selectNodeContents = function(node) {
                    this.setStartAndEnd(node, 0, dom.getNodeLength(node));
                };

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
                // constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738

                range.selectNodeContents(testTextNode);
                range.setEnd(testTextNode, 3);

                var range2 = document.createRange();
                range2.selectNodeContents(testTextNode);
                range2.setEnd(testTextNode, 4);
                range2.setStart(testTextNode, 2);

                if (range.compareBoundaryPoints(range.START_TO_END, range2) == -1 &&
                        range.compareBoundaryPoints(range.END_TO_START, range2) == 1) {
                    // This is the wrong way round, so correct for it

                    rangeProto.compareBoundaryPoints = function(type, range) {
                        range = range.nativeRange || range;
                        if (type == range.START_TO_END) {
                            type = range.END_TO_START;
                        } else if (type == range.END_TO_START) {
                            type = range.START_TO_END;
                        }
                        return this.nativeRange.compareBoundaryPoints(type, range);
                    };
                } else {
                    rangeProto.compareBoundaryPoints = function(type, range) {
                        return this.nativeRange.compareBoundaryPoints(type, range.nativeRange || range);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.

                var el = document.createElement("div");
                el.innerHTML = "123";
                var textNode = el.firstChild;
                var body = getBody(document);
                body.appendChild(el);

                range.setStart(textNode, 1);
                range.setEnd(textNode, 2);
                range.deleteContents();

                if (textNode.data == "13") {
                    // Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
                    // extractContents()
                    rangeProto.deleteContents = function() {
                        this.nativeRange.deleteContents();
                        updateRangeProperties(this);
                    };

                    rangeProto.extractContents = function() {
                        var frag = this.nativeRange.extractContents();
                        updateRangeProperties(this);
                        return frag;
                    };
                } else {
                }

                body.removeChild(el);
                body = null;

                /*--------------------------------------------------------------------------------------------------------*/

                // Test for existence of createContextualFragment and delegate to it if it exists
                if (util.isHostMethod(range, "createContextualFragment")) {
                    rangeProto.createContextualFragment = function(fragmentStr) {
                        return this.nativeRange.createContextualFragment(fragmentStr);
                    };
                }

                /*--------------------------------------------------------------------------------------------------------*/

                // Clean up
                getBody(document).removeChild(testTextNode);

                rangeProto.getName = function() {
                    return "WrappedRange";
                };

                api.WrappedRange = WrappedRange;

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return doc.createRange();
                };
            })();
        }

        if (api.features.implementsTextRange) {
            /*
            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
            method. For example, in the following (where pipes denote the selection boundaries):

            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

            var range = document.selection.createRange();
            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

            This method returns the common ancestor node of the following:
            - the parentElement() of the textRange
            - the parentElement() of the textRange after calling collapse(true)
            - the parentElement() of the textRange after calling collapse(false)
            */
            var getTextRangeContainerElement = function(textRange) {
                var parentEl = textRange.parentElement();
                var range = textRange.duplicate();
                range.collapse(true);
                var startEl = range.parentElement();
                range = textRange.duplicate();
                range.collapse(false);
                var endEl = range.parentElement();
                var startEndContainer = (startEl == endEl) ? startEl : dom.getCommonAncestor(startEl, endEl);

                return startEndContainer == parentEl ? startEndContainer : dom.getCommonAncestor(parentEl, startEndContainer);
            };

            var textRangeIsCollapsed = function(textRange) {
                return textRange.compareEndPoints("StartToEnd", textRange) == 0;
            };

            // Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started
            // out as an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/)
            // but has grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange
            // bugs, handling for inputs and images, plus optimizations.
            var getTextRangeBoundaryPosition = function(textRange, wholeRangeContainerElement, isStart, isCollapsed, startInfo) {
                var workingRange = textRange.duplicate();
                workingRange.collapse(isStart);
                var containerElement = workingRange.parentElement();

                // Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
                // check for that
                if (!dom.isOrIsAncestorOf(wholeRangeContainerElement, containerElement)) {
                    containerElement = wholeRangeContainerElement;
                }


                // Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
                // similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
                if (!containerElement.canHaveHTML) {
                    var pos = new DomPosition(containerElement.parentNode, dom.getNodeIndex(containerElement));
                    return {
                        boundaryPosition: pos,
                        nodeInfo: {
                            nodeIndex: pos.offset,
                            containerElement: pos.node
                        }
                    };
                }

                var workingNode = dom.getDocument(containerElement).createElement("span");

                // Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
                // Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
                if (workingNode.parentNode) {
                    dom.removeNode(workingNode);
                }

                var comparison, workingComparisonType = isStart ? "StartToStart" : "StartToEnd";
                var previousNode, nextNode, boundaryPosition, boundaryNode;
                var start = (startInfo && startInfo.containerElement == containerElement) ? startInfo.nodeIndex : 0;
                var childNodeCount = containerElement.childNodes.length;
                var end = childNodeCount;

                // Check end first. Code within the loop assumes that the endth child node of the container is definitely
                // after the range boundary.
                var nodeIndex = end;

                while (true) {
                    if (nodeIndex == childNodeCount) {
                        containerElement.appendChild(workingNode);
                    } else {
                        containerElement.insertBefore(workingNode, containerElement.childNodes[nodeIndex]);
                    }
                    workingRange.moveToElementText(workingNode);
                    comparison = workingRange.compareEndPoints(workingComparisonType, textRange);
                    if (comparison == 0 || start == end) {
                        break;
                    } else if (comparison == -1) {
                        if (end == start + 1) {
                            // We know the endth child node is after the range boundary, so we must be done.
                            break;
                        } else {
                            start = nodeIndex;
                        }
                    } else {
                        end = (end == start + 1) ? start : nodeIndex;
                    }
                    nodeIndex = Math.floor((start + end) / 2);
                    containerElement.removeChild(workingNode);
                }


                // We've now reached or gone past the boundary of the text range we're interested in
                // so have identified the node we want
                boundaryNode = workingNode.nextSibling;

                if (comparison == -1 && boundaryNode && isCharacterDataNode(boundaryNode)) {
                    // This is a character data node (text, comment, cdata). The working range is collapsed at the start of
                    // the node containing the text range's boundary, so we move the end of the working range to the
                    // boundary point and measure the length of its text to get the boundary's offset within the node.
                    workingRange.setEndPoint(isStart ? "EndToStart" : "EndToEnd", textRange);

                    var offset;

                    if (/[\r\n]/.test(boundaryNode.data)) {
                        /*
                        For the particular case of a boundary within a text node containing rendered line breaks (within a
                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
                        IE. The facts:

                        - Each line break is represented as \r in the text node's data/nodeValue properties
                        - Each line break is represented as \r\n in the TextRange's 'text' property
                        - The 'text' property of the TextRange does not contain trailing line breaks

                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
                        to use this to store the characters moved when moving both the start and end of the range to the
                        start of the document body and subtracting the start offset from the end offset (the
                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
                        the end of the document) has the same problem.

                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
                        end boundary one character at a time and incrementing a counter with the value returned by the
                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
                        by the location of the range within the document).

                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
                        be longer than the text of the TextRange, so the start of the range is moved that length initially
                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
                        property. This has good performance in most situations compared to the previous two methods.
                        */
                        var tempRange = workingRange.duplicate();
                        var rangeLength = tempRange.text.replace(/\r\n/g, "\r").length;

                        offset = tempRange.moveStart("character", rangeLength);
                        while ( (comparison = tempRange.compareEndPoints("StartToEnd", tempRange)) == -1) {
                            offset++;
                            tempRange.moveStart("character", 1);
                        }
                    } else {
                        offset = workingRange.text.length;
                    }
                    boundaryPosition = new DomPosition(boundaryNode, offset);
                } else {

                    // If the boundary immediately follows a character data node and this is the end boundary, we should favour
                    // a position within that, and likewise for a start boundary preceding a character data node
                    previousNode = (isCollapsed || !isStart) && workingNode.previousSibling;
                    nextNode = (isCollapsed || isStart) && workingNode.nextSibling;
                    if (nextNode && isCharacterDataNode(nextNode)) {
                        boundaryPosition = new DomPosition(nextNode, 0);
                    } else if (previousNode && isCharacterDataNode(previousNode)) {
                        boundaryPosition = new DomPosition(previousNode, previousNode.data.length);
                    } else {
                        boundaryPosition = new DomPosition(containerElement, dom.getNodeIndex(workingNode));
                    }
                }

                // Clean up
                dom.removeNode(workingNode);

                return {
                    boundaryPosition: boundaryPosition,
                    nodeInfo: {
                        nodeIndex: nodeIndex,
                        containerElement: containerElement
                    }
                };
            };

            // Returns a TextRange representing the boundary of a TextRange expressed as a node and an offset within that
            // node. This function started out as an optimized version of code found in Tim Cameron Ryan's IERange
            // (http://code.google.com/p/ierange/)
            var createBoundaryTextRange = function(boundaryPosition, isStart) {
                var boundaryNode, boundaryParent, boundaryOffset = boundaryPosition.offset;
                var doc = dom.getDocument(boundaryPosition.node);
                var workingNode, childNodes, workingRange = getBody(doc).createTextRange();
                var nodeIsDataNode = isCharacterDataNode(boundaryPosition.node);

                if (nodeIsDataNode) {
                    boundaryNode = boundaryPosition.node;
                    boundaryParent = boundaryNode.parentNode;
                } else {
                    childNodes = boundaryPosition.node.childNodes;
                    boundaryNode = (boundaryOffset < childNodes.length) ? childNodes[boundaryOffset] : null;
                    boundaryParent = boundaryPosition.node;
                }

                // Position the range immediately before the node containing the boundary
                workingNode = doc.createElement("span");

                // Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
                // the element rather than immediately before or after it
                workingNode.innerHTML = "&#feff;";

                // insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
                // for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
                if (boundaryNode) {
                    boundaryParent.insertBefore(workingNode, boundaryNode);
                } else {
                    boundaryParent.appendChild(workingNode);
                }

                workingRange.moveToElementText(workingNode);
                workingRange.collapse(!isStart);

                // Clean up
                boundaryParent.removeChild(workingNode);

                // Move the working range to the text offset, if required
                if (nodeIsDataNode) {
                    workingRange[isStart ? "moveStart" : "moveEnd"]("character", boundaryOffset);
                }

                return workingRange;
            };

            /*------------------------------------------------------------------------------------------------------------*/

            // This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
            // prototype

            WrappedTextRange = function(textRange) {
                this.textRange = textRange;
                this.refresh();
            };

            WrappedTextRange.prototype = new DomRange(document);

            WrappedTextRange.prototype.refresh = function() {
                var start, end, startBoundary;

                // TextRange's parentElement() method cannot be trusted. getTextRangeContainerElement() works around that.
                var rangeContainerElement = getTextRangeContainerElement(this.textRange);

                if (textRangeIsCollapsed(this.textRange)) {
                    end = start = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true,
                        true).boundaryPosition;
                } else {
                    startBoundary = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true, false);
                    start = startBoundary.boundaryPosition;

                    // An optimization used here is that if the start and end boundaries have the same parent element, the
                    // search scope for the end boundary can be limited to exclude the portion of the element that precedes
                    // the start boundary
                    end = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, false, false,
                        startBoundary.nodeInfo).boundaryPosition;
                }

                this.setStart(start.node, start.offset);
                this.setEnd(end.node, end.offset);
            };

            WrappedTextRange.prototype.getName = function() {
                return "WrappedTextRange";
            };

            DomRange.copyComparisonConstants(WrappedTextRange);

            var rangeToTextRange = function(range) {
                if (range.collapsed) {
                    return createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                } else {
                    var startRange = createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
                    var endRange = createBoundaryTextRange(new DomPosition(range.endContainer, range.endOffset), false);
                    var textRange = getBody( DomRange.getRangeDocument(range) ).createTextRange();
                    textRange.setEndPoint("StartToStart", startRange);
                    textRange.setEndPoint("EndToEnd", endRange);
                    return textRange;
                }
            };

            WrappedTextRange.rangeToTextRange = rangeToTextRange;

            WrappedTextRange.prototype.toTextRange = function() {
                return rangeToTextRange(this);
            };

            api.WrappedTextRange = WrappedTextRange;

            // IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
            // implementation to use by default.
            if (!api.features.implementsDomRange || api.config.preferTextRange) {
                // Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
                var globalObj = (function(f) { return f("return this;")(); })(Function);
                if (typeof globalObj.Range == "undefined") {
                    globalObj.Range = WrappedTextRange;
                }

                api.createNativeRange = function(doc) {
                    doc = getContentDocument(doc, module, "createNativeRange");
                    return getBody(doc).createTextRange();
                };

                api.WrappedRange = WrappedTextRange;
            }
        }

        api.createRange = function(doc) {
            doc = getContentDocument(doc, module, "createRange");
            return new api.WrappedRange(api.createNativeRange(doc));
        };

        api.createRangyRange = function(doc) {
            doc = getContentDocument(doc, module, "createRangyRange");
            return new DomRange(doc);
        };

        util.createAliasForDeprecatedMethod(api, "createIframeRange", "createRange");
        util.createAliasForDeprecatedMethod(api, "createIframeRangyRange", "createRangyRange");

        api.addShimListener(function(win) {
            var doc = win.document;
            if (typeof doc.createRange == "undefined") {
                doc.createRange = function() {
                    return api.createRange(doc);
                };
            }
            doc = win = null;
        });
    });

    /*----------------------------------------------------------------------------------------------------------------*/

    // This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
    // in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
    api.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(api, module) {
        api.config.checkSelectionRanges = true;

        var BOOLEAN = "boolean";
        var NUMBER = "number";
        var dom = api.dom;
        var util = api.util;
        var isHostMethod = util.isHostMethod;
        var DomRange = api.DomRange;
        var WrappedRange = api.WrappedRange;
        var DOMException = api.DOMException;
        var DomPosition = dom.DomPosition;
        var getNativeSelection;
        var selectionIsCollapsed;
        var features = api.features;
        var CONTROL = "Control";
        var getDocument = dom.getDocument;
        var getBody = dom.getBody;
        var rangesEqual = DomRange.rangesEqual;


        // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
        // "forward" or "forwards") or a Boolean (true for backwards).
        function isDirectionBackward(dir) {
            return (typeof dir == "string") ? /^backward(s)?$/i.test(dir) : !!dir;
        }

        function getWindow(win, methodName) {
            if (!win) {
                return window;
            } else if (dom.isWindow(win)) {
                return win;
            } else if (win instanceof WrappedSelection) {
                return win.win;
            } else {
                var doc = dom.getContentDocument(win, module, methodName);
                return dom.getWindow(doc);
            }
        }

        function getWinSelection(winParam) {
            return getWindow(winParam, "getWinSelection").getSelection();
        }

        function getDocSelection(winParam) {
            return getWindow(winParam, "getDocSelection").document.selection;
        }

        function winSelectionIsBackward(sel) {
            var backward = false;
            if (sel.anchorNode) {
                backward = (dom.comparePoints(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset) == 1);
            }
            return backward;
        }

        // Test for the Range/TextRange and Selection features required
        // Test for ability to retrieve selection
        var implementsWinGetSelection = isHostMethod(window, "getSelection"),
            implementsDocSelection = util.isHostObject(document, "selection");

        features.implementsWinGetSelection = implementsWinGetSelection;
        features.implementsDocSelection = implementsDocSelection;

        var useDocumentSelection = implementsDocSelection && (!implementsWinGetSelection || api.config.preferTextRange);

        if (useDocumentSelection) {
            getNativeSelection = getDocSelection;
            api.isSelectionValid = function(winParam) {
                var doc = getWindow(winParam, "isSelectionValid").document, nativeSel = doc.selection;

                // Check whether the selection TextRange is actually contained within the correct document
                return (nativeSel.type != "None" || getDocument(nativeSel.createRange().parentElement()) == doc);
            };
        } else if (implementsWinGetSelection) {
            getNativeSelection = getWinSelection;
            api.isSelectionValid = function() {
                return true;
            };
        } else {
            module.fail("Neither document.selection or window.getSelection() detected.");
            return false;
        }

        api.getNativeSelection = getNativeSelection;

        var testSelection = getNativeSelection();

        // In Firefox, the selection is null in an iframe with display: none. See issue #138.
        if (!testSelection) {
            module.fail("Native selection was null (possibly issue 138?)");
            return false;
        }

        var testRange = api.createNativeRange(document);
        var body = getBody(document);

        // Obtaining a range from a selection
        var selectionHasAnchorAndFocus = util.areHostProperties(testSelection,
            ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);

        features.selectionHasAnchorAndFocus = selectionHasAnchorAndFocus;

        // Test for existence of native selection extend() method
        var selectionHasExtend = isHostMethod(testSelection, "extend");
        features.selectionHasExtend = selectionHasExtend;

        // Test if rangeCount exists
        var selectionHasRangeCount = (typeof testSelection.rangeCount == NUMBER);
        features.selectionHasRangeCount = selectionHasRangeCount;

        var selectionSupportsMultipleRanges = false;
        var collapsedNonEditableSelectionsSupported = true;

        var addRangeBackwardToNative = selectionHasExtend ?
            function(nativeSelection, range) {
                var doc = DomRange.getRangeDocument(range);
                var endRange = api.createRange(doc);
                endRange.collapseToPoint(range.endContainer, range.endOffset);
                nativeSelection.addRange(getNativeRange(endRange));
                nativeSelection.extend(range.startContainer, range.startOffset);
            } : null;

        if (util.areHostMethods(testSelection, ["addRange", "getRangeAt", "removeAllRanges"]) &&
                typeof testSelection.rangeCount == NUMBER && features.implementsDomRange) {

            (function() {
                // Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
                // performed on the current document's selection. See issue 109.

                // Note also that if a selection previously existed, it is wiped and later restored by these tests. This
                // will result in the selection direction begin reversed if the original selection was backwards and the
                // browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
                var sel = window.getSelection();
                if (sel) {
                    // Store the current selection
                    var originalSelectionRangeCount = sel.rangeCount;
                    var selectionHasMultipleRanges = (originalSelectionRangeCount > 1);
                    var originalSelectionRanges = [];
                    var originalSelectionBackward = winSelectionIsBackward(sel);
                    for (var i = 0; i < originalSelectionRangeCount; ++i) {
                        originalSelectionRanges[i] = sel.getRangeAt(i);
                    }

                    // Create some test elements
                    var testEl = dom.createTestElement(document, "", false);
                    var textNode = testEl.appendChild( document.createTextNode("\u00a0\u00a0\u00a0") );

                    // Test whether the native selection will allow a collapsed selection within a non-editable element
                    var r1 = document.createRange();

                    r1.setStart(textNode, 1);
                    r1.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(r1);
                    collapsedNonEditableSelectionsSupported = (sel.rangeCount == 1);
                    sel.removeAllRanges();

                    // Test whether the native selection is capable of supporting multiple ranges.
                    if (!selectionHasMultipleRanges) {
                        // Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
                        // console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
                        // nothing we can do about this while retaining the feature test so we have to resort to a browser
                        // sniff. I'm not happy about it. See
                        // https://code.google.com/p/chromium/issues/detail?id=399791
                        var chromeMatch = window.navigator.appVersion.match(/Chrome\/(.*?) /);
                        if (chromeMatch && parseInt(chromeMatch[1]) >= 36) {
                            selectionSupportsMultipleRanges = false;
                        } else {
                            var r2 = r1.cloneRange();
                            r1.setStart(textNode, 0);
                            r2.setEnd(textNode, 3);
                            r2.setStart(textNode, 2);
                            sel.addRange(r1);
                            sel.addRange(r2);
                            selectionSupportsMultipleRanges = (sel.rangeCount == 2);
                        }
                    }

                    // Clean up
                    dom.removeNode(testEl);
                    sel.removeAllRanges();

                    for (i = 0; i < originalSelectionRangeCount; ++i) {
                        if (i == 0 && originalSelectionBackward) {
                            if (addRangeBackwardToNative) {
                                addRangeBackwardToNative(sel, originalSelectionRanges[i]);
                            } else {
                                api.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend");
                                sel.addRange(originalSelectionRanges[i]);
                            }
                        } else {
                            sel.addRange(originalSelectionRanges[i]);
                        }
                    }
                }
            })();
        }

        features.selectionSupportsMultipleRanges = selectionSupportsMultipleRanges;
        features.collapsedNonEditableSelectionsSupported = collapsedNonEditableSelectionsSupported;

        // ControlRanges
        var implementsControlRange = false, testControlRange;

        if (body && isHostMethod(body, "createControlRange")) {
            testControlRange = body.createControlRange();
            if (util.areHostProperties(testControlRange, ["item", "add"])) {
                implementsControlRange = true;
            }
        }
        features.implementsControlRange = implementsControlRange;

        // Selection collapsedness
        if (selectionHasAnchorAndFocus) {
            selectionIsCollapsed = function(sel) {
                return sel.anchorNode === sel.focusNode && sel.anchorOffset === sel.focusOffset;
            };
        } else {
            selectionIsCollapsed = function(sel) {
                return sel.rangeCount ? sel.getRangeAt(sel.rangeCount - 1).collapsed : false;
            };
        }

        function updateAnchorAndFocusFromRange(sel, range, backward) {
            var anchorPrefix = backward ? "end" : "start", focusPrefix = backward ? "start" : "end";
            sel.anchorNode = range[anchorPrefix + "Container"];
            sel.anchorOffset = range[anchorPrefix + "Offset"];
            sel.focusNode = range[focusPrefix + "Container"];
            sel.focusOffset = range[focusPrefix + "Offset"];
        }

        function updateAnchorAndFocusFromNativeSelection(sel) {
            var nativeSel = sel.nativeSelection;
            sel.anchorNode = nativeSel.anchorNode;
            sel.anchorOffset = nativeSel.anchorOffset;
            sel.focusNode = nativeSel.focusNode;
            sel.focusOffset = nativeSel.focusOffset;
        }

        function updateEmptySelection(sel) {
            sel.anchorNode = sel.focusNode = null;
            sel.anchorOffset = sel.focusOffset = 0;
            sel.rangeCount = 0;
            sel.isCollapsed = true;
            sel._ranges.length = 0;
        }

        function getNativeRange(range) {
            var nativeRange;
            if (range instanceof DomRange) {
                nativeRange = api.createNativeRange(range.getDocument());
                nativeRange.setEnd(range.endContainer, range.endOffset);
                nativeRange.setStart(range.startContainer, range.startOffset);
            } else if (range instanceof WrappedRange) {
                nativeRange = range.nativeRange;
            } else if (features.implementsDomRange && (range instanceof dom.getWindow(range.startContainer).Range)) {
                nativeRange = range;
            }
            return nativeRange;
        }

        function rangeContainsSingleElement(rangeNodes) {
            if (!rangeNodes.length || rangeNodes[0].nodeType != 1) {
                return false;
            }
            for (var i = 1, len = rangeNodes.length; i < len; ++i) {
                if (!dom.isAncestorOf(rangeNodes[0], rangeNodes[i])) {
                    return false;
                }
            }
            return true;
        }

        function getSingleElementFromRange(range) {
            var nodes = range.getNodes();
            if (!rangeContainsSingleElement(nodes)) {
                throw module.createError("getSingleElementFromRange: range " + range.inspect() + " did not consist of a single element");
            }
            return nodes[0];
        }

        // Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
        function isTextRange(range) {
            return !!range && typeof range.text != "undefined";
        }

        function updateFromTextRange(sel, range) {
            // Create a Range from the selected TextRange
            var wrappedRange = new WrappedRange(range);
            sel._ranges = [wrappedRange];

            updateAnchorAndFocusFromRange(sel, wrappedRange, false);
            sel.rangeCount = 1;
            sel.isCollapsed = wrappedRange.collapsed;
        }

        function updateControlSelection(sel) {
            // Update the wrapped selection based on what's now in the native selection
            sel._ranges.length = 0;
            if (sel.docSelection.type == "None") {
                updateEmptySelection(sel);
            } else {
                var controlRange = sel.docSelection.createRange();
                if (isTextRange(controlRange)) {
                    // This case (where the selection type is "Control" and calling createRange() on the selection returns
                    // a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
                    // ControlRange have been removed from the ControlRange and removed from the document.
                    updateFromTextRange(sel, controlRange);
                } else {
                    sel.rangeCount = controlRange.length;
                    var range, doc = getDocument(controlRange.item(0));
                    for (var i = 0; i < sel.rangeCount; ++i) {
                        range = api.createRange(doc);
                        range.selectNode(controlRange.item(i));
                        sel._ranges.push(range);
                    }
                    sel.isCollapsed = sel.rangeCount == 1 && sel._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], false);
                }
            }
        }

        function addRangeToControlSelection(sel, range) {
            var controlRange = sel.docSelection.createRange();
            var rangeElement = getSingleElementFromRange(range);

            // Create a new ControlRange containing all the elements in the selected ControlRange plus the element
            // contained by the supplied range
            var doc = getDocument(controlRange.item(0));
            var newControlRange = getBody(doc).createControlRange();
            for (var i = 0, len = controlRange.length; i < len; ++i) {
                newControlRange.add(controlRange.item(i));
            }
            try {
                newControlRange.add(rangeElement);
            } catch (ex) {
                throw module.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
            }
            newControlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        var getSelectionRangeAt;

        if (isHostMethod(testSelection, "getRangeAt")) {
            // try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
            // Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
            // lesson to us all, especially me.
            getSelectionRangeAt = function(sel, index) {
                try {
                    return sel.getRangeAt(index);
                } catch (ex) {
                    return null;
                }
            };
        } else if (selectionHasAnchorAndFocus) {
            getSelectionRangeAt = function(sel) {
                var doc = getDocument(sel.anchorNode);
                var range = api.createRange(doc);
                range.setStartAndEnd(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset);

                // Handle the case when the selection was selected backwards (from the end to the start in the
                // document)
                if (range.collapsed !== this.isCollapsed) {
                    range.setStartAndEnd(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset);
                }

                return range;
            };
        }

        function WrappedSelection(selection, docSelection, win) {
            this.nativeSelection = selection;
            this.docSelection = docSelection;
            this._ranges = [];
            this.win = win;
            this.refresh();
        }

        WrappedSelection.prototype = api.selectionPrototype;

        function deleteProperties(sel) {
            sel.win = sel.anchorNode = sel.focusNode = sel._ranges = null;
            sel.rangeCount = sel.anchorOffset = sel.focusOffset = 0;
            sel.detached = true;
        }

        var cachedRangySelections = [];

        function actOnCachedSelection(win, action) {
            var i = cachedRangySelections.length, cached, sel;
            while (i--) {
                cached = cachedRangySelections[i];
                sel = cached.selection;
                if (action == "deleteAll") {
                    deleteProperties(sel);
                } else if (cached.win == win) {
                    if (action == "delete") {
                        cachedRangySelections.splice(i, 1);
                        return true;
                    } else {
                        return sel;
                    }
                }
            }
            if (action == "deleteAll") {
                cachedRangySelections.length = 0;
            }
            return null;
        }

        var getSelection = function(win) {
            // Check if the parameter is a Rangy Selection object
            if (win && win instanceof WrappedSelection) {
                win.refresh();
                return win;
            }

            win = getWindow(win, "getNativeSelection");

            var sel = actOnCachedSelection(win);
            var nativeSel = getNativeSelection(win), docSel = implementsDocSelection ? getDocSelection(win) : null;
            if (sel) {
                sel.nativeSelection = nativeSel;
                sel.docSelection = docSel;
                sel.refresh();
            } else {
                sel = new WrappedSelection(nativeSel, docSel, win);
                cachedRangySelections.push( { win: win, selection: sel } );
            }
            return sel;
        };

        api.getSelection = getSelection;

        util.createAliasForDeprecatedMethod(api, "getIframeSelection", "getSelection");

        var selProto = WrappedSelection.prototype;

        function createControlSelection(sel, ranges) {
            // Ensure that the selection becomes of type "Control"
            var doc = getDocument(ranges[0].startContainer);
            var controlRange = getBody(doc).createControlRange();
            for (var i = 0, el, len = ranges.length; i < len; ++i) {
                el = getSingleElementFromRange(ranges[i]);
                try {
                    controlRange.add(el);
                } catch (ex) {
                    throw module.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
                }
            }
            controlRange.select();

            // Update the wrapped selection based on what's now in the native selection
            updateControlSelection(sel);
        }

        // Selecting a range
        if (!useDocumentSelection && selectionHasAnchorAndFocus && util.areHostMethods(testSelection, ["removeAllRanges", "addRange"])) {
            selProto.removeAllRanges = function() {
                this.nativeSelection.removeAllRanges();
                updateEmptySelection(this);
            };

            var addRangeBackward = function(sel, range) {
                addRangeBackwardToNative(sel.nativeSelection, range);
                sel.refresh();
            };

            if (selectionHasRangeCount) {
                selProto.addRange = function(range, direction) {
                    if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                        addRangeToControlSelection(this, range);
                    } else {
                        if (isDirectionBackward(direction) && selectionHasExtend) {
                            addRangeBackward(this, range);
                        } else {
                            var previousRangeCount;
                            if (selectionSupportsMultipleRanges) {
                                previousRangeCount = this.rangeCount;
                            } else {
                                this.removeAllRanges();
                                previousRangeCount = 0;
                            }
                            // Clone the native range so that changing the selected range does not affect the selection.
                            // This is contrary to the spec but is the only way to achieve consistency between browsers. See
                            // issue 80.
                            var clonedNativeRange = getNativeRange(range).cloneRange();
                            try {
                                this.nativeSelection.addRange(clonedNativeRange);
                            } catch (ex) {
                            }

                            // Check whether adding the range was successful
                            this.rangeCount = this.nativeSelection.rangeCount;

                            if (this.rangeCount == previousRangeCount + 1) {
                                // The range was added successfully

                                // Check whether the range that we added to the selection is reflected in the last range extracted from
                                // the selection
                                if (api.config.checkSelectionRanges) {
                                    var nativeRange = getSelectionRangeAt(this.nativeSelection, this.rangeCount - 1);
                                    if (nativeRange && !rangesEqual(nativeRange, range)) {
                                        // Happens in WebKit with, for example, a selection placed at the start of a text node
                                        range = new WrappedRange(nativeRange);
                                    }
                                }
                                this._ranges[this.rangeCount - 1] = range;
                                updateAnchorAndFocusFromRange(this, range, selectionIsBackward(this.nativeSelection));
                                this.isCollapsed = selectionIsCollapsed(this);
                            } else {
                                // The range was not added successfully. The simplest thing is to refresh
                                this.refresh();
                            }
                        }
                    }
                };
            } else {
                selProto.addRange = function(range, direction) {
                    if (isDirectionBackward(direction) && selectionHasExtend) {
                        addRangeBackward(this, range);
                    } else {
                        this.nativeSelection.addRange(getNativeRange(range));
                        this.refresh();
                    }
                };
            }

            selProto.setRanges = function(ranges) {
                if (implementsControlRange && implementsDocSelection && ranges.length > 1) {
                    createControlSelection(this, ranges);
                } else {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        this.addRange(ranges[i]);
                    }
                }
            };
        } else if (isHostMethod(testSelection, "empty") && isHostMethod(testRange, "select") &&
                   implementsControlRange && useDocumentSelection) {

            selProto.removeAllRanges = function() {
                // Added try/catch as fix for issue #21
                try {
                    this.docSelection.empty();

                    // Check for empty() not working (issue #24)
                    if (this.docSelection.type != "None") {
                        // Work around failure to empty a control selection by instead selecting a TextRange and then
                        // calling empty()
                        var doc;
                        if (this.anchorNode) {
                            doc = getDocument(this.anchorNode);
                        } else if (this.docSelection.type == CONTROL) {
                            var controlRange = this.docSelection.createRange();
                            if (controlRange.length) {
                                doc = getDocument( controlRange.item(0) );
                            }
                        }
                        if (doc) {
                            var textRange = getBody(doc).createTextRange();
                            textRange.select();
                            this.docSelection.empty();
                        }
                    }
                } catch(ex) {}
                updateEmptySelection(this);
            };

            selProto.addRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    addRangeToControlSelection(this, range);
                } else {
                    api.WrappedTextRange.rangeToTextRange(range).select();
                    this._ranges[0] = range;
                    this.rangeCount = 1;
                    this.isCollapsed = this._ranges[0].collapsed;
                    updateAnchorAndFocusFromRange(this, range, false);
                }
            };

            selProto.setRanges = function(ranges) {
                this.removeAllRanges();
                var rangeCount = ranges.length;
                if (rangeCount > 1) {
                    createControlSelection(this, ranges);
                } else if (rangeCount) {
                    this.addRange(ranges[0]);
                }
            };
        } else {
            module.fail("No means of selecting a Range or TextRange was found");
            return false;
        }

        selProto.getRangeAt = function(index) {
            if (index < 0 || index >= this.rangeCount) {
                throw new DOMException("INDEX_SIZE_ERR");
            } else {
                // Clone the range to preserve selection-range independence. See issue 80.
                return this._ranges[index].cloneRange();
            }
        };

        var refreshSelection;

        if (useDocumentSelection) {
            refreshSelection = function(sel) {
                var range;
                if (api.isSelectionValid(sel.win)) {
                    range = sel.docSelection.createRange();
                } else {
                    range = getBody(sel.win.document).createTextRange();
                    range.collapse(true);
                }

                if (sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else if (isTextRange(range)) {
                    updateFromTextRange(sel, range);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else if (isHostMethod(testSelection, "getRangeAt") && typeof testSelection.rangeCount == NUMBER) {
            refreshSelection = function(sel) {
                if (implementsControlRange && implementsDocSelection && sel.docSelection.type == CONTROL) {
                    updateControlSelection(sel);
                } else {
                    sel._ranges.length = sel.rangeCount = sel.nativeSelection.rangeCount;
                    if (sel.rangeCount) {
                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                            sel._ranges[i] = new api.WrappedRange(sel.nativeSelection.getRangeAt(i));
                        }
                        updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], selectionIsBackward(sel.nativeSelection));
                        sel.isCollapsed = selectionIsCollapsed(sel);
                    } else {
                        updateEmptySelection(sel);
                    }
                }
            };
        } else if (selectionHasAnchorAndFocus && typeof testSelection.isCollapsed == BOOLEAN && typeof testRange.collapsed == BOOLEAN && features.implementsDomRange) {
            refreshSelection = function(sel) {
                var range, nativeSel = sel.nativeSelection;
                if (nativeSel.anchorNode) {
                    range = getSelectionRangeAt(nativeSel, 0);
                    sel._ranges = [range];
                    sel.rangeCount = 1;
                    updateAnchorAndFocusFromNativeSelection(sel);
                    sel.isCollapsed = selectionIsCollapsed(sel);
                } else {
                    updateEmptySelection(sel);
                }
            };
        } else {
            module.fail("No means of obtaining a Range or TextRange from the user's selection was found");
            return false;
        }

        selProto.refresh = function(checkForChanges) {
            var oldRanges = checkForChanges ? this._ranges.slice(0) : null;
            var oldAnchorNode = this.anchorNode, oldAnchorOffset = this.anchorOffset;

            refreshSelection(this);
            if (checkForChanges) {
                // Check the range count first
                var i = oldRanges.length;
                if (i != this._ranges.length) {
                    return true;
                }

                // Now check the direction. Checking the anchor position is the same is enough since we're checking all the
                // ranges after this
                if (this.anchorNode != oldAnchorNode || this.anchorOffset != oldAnchorOffset) {
                    return true;
                }

                // Finally, compare each range in turn
                while (i--) {
                    if (!rangesEqual(oldRanges[i], this._ranges[i])) {
                        return true;
                    }
                }
                return false;
            }
        };

        // Removal of a single range
        var removeRangeManually = function(sel, range) {
            var ranges = sel.getAllRanges();
            sel.removeAllRanges();
            for (var i = 0, len = ranges.length; i < len; ++i) {
                if (!rangesEqual(range, ranges[i])) {
                    sel.addRange(ranges[i]);
                }
            }
            if (!sel.rangeCount) {
                updateEmptySelection(sel);
            }
        };

        if (implementsControlRange && implementsDocSelection) {
            selProto.removeRange = function(range) {
                if (this.docSelection.type == CONTROL) {
                    var controlRange = this.docSelection.createRange();
                    var rangeElement = getSingleElementFromRange(range);

                    // Create a new ControlRange containing all the elements in the selected ControlRange minus the
                    // element contained by the supplied range
                    var doc = getDocument(controlRange.item(0));
                    var newControlRange = getBody(doc).createControlRange();
                    var el, removed = false;
                    for (var i = 0, len = controlRange.length; i < len; ++i) {
                        el = controlRange.item(i);
                        if (el !== rangeElement || removed) {
                            newControlRange.add(controlRange.item(i));
                        } else {
                            removed = true;
                        }
                    }
                    newControlRange.select();

                    // Update the wrapped selection based on what's now in the native selection
                    updateControlSelection(this);
                } else {
                    removeRangeManually(this, range);
                }
            };
        } else {
            selProto.removeRange = function(range) {
                removeRangeManually(this, range);
            };
        }

        // Detecting if a selection is backward
        var selectionIsBackward;
        if (!useDocumentSelection && selectionHasAnchorAndFocus && features.implementsDomRange) {
            selectionIsBackward = winSelectionIsBackward;

            selProto.isBackward = function() {
                return selectionIsBackward(this);
            };
        } else {
            selectionIsBackward = selProto.isBackward = function() {
                return false;
            };
        }

        // Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
        selProto.isBackwards = selProto.isBackward;

        // Selection stringifier
        // This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
        // The current spec does not yet define this method.
        selProto.toString = function() {
            var rangeTexts = [];
            for (var i = 0, len = this.rangeCount; i < len; ++i) {
                rangeTexts[i] = "" + this._ranges[i];
            }
            return rangeTexts.join("");
        };

        function assertNodeInSameDocument(sel, node) {
            if (sel.win.document != getDocument(node)) {
                throw new DOMException("WRONG_DOCUMENT_ERR");
            }
        }

        // No current browser conforms fully to the spec for this method, so Rangy's own method is always used
        selProto.collapse = function(node, offset) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.collapseToPoint(node, offset);
            this.setSingleRange(range);
            this.isCollapsed = true;
        };

        selProto.collapseToStart = function() {
            if (this.rangeCount) {
                var range = this._ranges[0];
                this.collapse(range.startContainer, range.startOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        selProto.collapseToEnd = function() {
            if (this.rangeCount) {
                var range = this._ranges[this.rangeCount - 1];
                this.collapse(range.endContainer, range.endOffset);
            } else {
                throw new DOMException("INVALID_STATE_ERR");
            }
        };

        // The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
        // specified so the native implementation is never used by Rangy.
        selProto.selectAllChildren = function(node) {
            assertNodeInSameDocument(this, node);
            var range = api.createRange(node);
            range.selectNodeContents(node);
            this.setSingleRange(range);
        };

        selProto.deleteFromDocument = function() {
            // Sepcial behaviour required for IE's control selections
            if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
                var controlRange = this.docSelection.createRange();
                var element;
                while (controlRange.length) {
                    element = controlRange.item(0);
                    controlRange.remove(element);
                    dom.removeNode(element);
                }
                this.refresh();
            } else if (this.rangeCount) {
                var ranges = this.getAllRanges();
                if (ranges.length) {
                    this.removeAllRanges();
                    for (var i = 0, len = ranges.length; i < len; ++i) {
                        ranges[i].deleteContents();
                    }
                    // The spec says nothing about what the selection should contain after calling deleteContents on each
                    // range. Firefox moves the selection to where the final selected range was, so we emulate that
                    this.addRange(ranges[len - 1]);
                }
            }
        };

        // The following are non-standard extensions
        selProto.eachRange = function(func, returnValue) {
            for (var i = 0, len = this._ranges.length; i < len; ++i) {
                if ( func( this.getRangeAt(i) ) ) {
                    return returnValue;
                }
            }
        };

        selProto.getAllRanges = function() {
            var ranges = [];
            this.eachRange(function(range) {
                ranges.push(range);
            });
            return ranges;
        };

        selProto.setSingleRange = function(range, direction) {
            this.removeAllRanges();
            this.addRange(range, direction);
        };

        selProto.callMethodOnEachRange = function(methodName, params) {
            var results = [];
            this.eachRange( function(range) {
                results.push( range[methodName].apply(range, params || []) );
            } );
            return results;
        };

        function createStartOrEndSetter(isStart) {
            return function(node, offset) {
                var range;
                if (this.rangeCount) {
                    range = this.getRangeAt(0);
                    range["set" + (isStart ? "Start" : "End")](node, offset);
                } else {
                    range = api.createRange(this.win.document);
                    range.setStartAndEnd(node, offset);
                }
                this.setSingleRange(range, this.isBackward());
            };
        }

        selProto.setStart = createStartOrEndSetter(true);
        selProto.setEnd = createStartOrEndSetter(false);

        // Add select() method to Range prototype. Any existing selection will be removed.
        api.rangePrototype.select = function(direction) {
            getSelection( this.getDocument() ).setSingleRange(this, direction);
        };

        selProto.changeEachRange = function(func) {
            var ranges = [];
            var backward = this.isBackward();

            this.eachRange(function(range) {
                func(range);
                ranges.push(range);
            });

            this.removeAllRanges();
            if (backward && ranges.length == 1) {
                this.addRange(ranges[0], "backward");
            } else {
                this.setRanges(ranges);
            }
        };

        selProto.containsNode = function(node, allowPartial) {
            return this.eachRange( function(range) {
                return range.containsNode(node, allowPartial);
            }, true ) || false;
        };

        selProto.getBookmark = function(containerNode) {
            return {
                backward: this.isBackward(),
                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [containerNode])
            };
        };

        selProto.moveToBookmark = function(bookmark) {
            var selRanges = [];
            for (var i = 0, rangeBookmark, range; rangeBookmark = bookmark.rangeBookmarks[i++]; ) {
                range = api.createRange(this.win);
                range.moveToBookmark(rangeBookmark);
                selRanges.push(range);
            }
            if (bookmark.backward) {
                this.setSingleRange(selRanges[0], "backward");
            } else {
                this.setRanges(selRanges);
            }
        };

        selProto.saveRanges = function() {
            return {
                backward: this.isBackward(),
                ranges: this.callMethodOnEachRange("cloneRange")
            };
        };

        selProto.restoreRanges = function(selRanges) {
            this.removeAllRanges();
            for (var i = 0, range; range = selRanges.ranges[i]; ++i) {
                this.addRange(range, (selRanges.backward && i == 0));
            }
        };

        selProto.toHtml = function() {
            var rangeHtmls = [];
            this.eachRange(function(range) {
                rangeHtmls.push( DomRange.toHtml(range) );
            });
            return rangeHtmls.join("");
        };

        if (features.implementsTextRange) {
            selProto.getNativeTextRange = function() {
                var sel, textRange;
                if ( (sel = this.docSelection) ) {
                    var range = sel.createRange();
                    if (isTextRange(range)) {
                        return range;
                    } else {
                        throw module.createError("getNativeTextRange: selection is a control selection");
                    }
                } else if (this.rangeCount > 0) {
                    return api.WrappedTextRange.rangeToTextRange( this.getRangeAt(0) );
                } else {
                    throw module.createError("getNativeTextRange: selection contains no range");
                }
            };
        }

        function inspect(sel) {
            var rangeInspects = [];
            var anchor = new DomPosition(sel.anchorNode, sel.anchorOffset);
            var focus = new DomPosition(sel.focusNode, sel.focusOffset);
            var name = (typeof sel.getName == "function") ? sel.getName() : "Selection";

            if (typeof sel.rangeCount != "undefined") {
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    rangeInspects[i] = DomRange.inspect(sel.getRangeAt(i));
                }
            }
            return "[" + name + "(Ranges: " + rangeInspects.join(", ") +
                    ")(anchor: " + anchor.inspect() + ", focus: " + focus.inspect() + "]";
        }

        selProto.getName = function() {
            return "WrappedSelection";
        };

        selProto.inspect = function() {
            return inspect(this);
        };

        selProto.detach = function() {
            actOnCachedSelection(this.win, "delete");
            deleteProperties(this);
        };

        WrappedSelection.detachAll = function() {
            actOnCachedSelection(null, "deleteAll");
        };

        WrappedSelection.inspect = inspect;
        WrappedSelection.isDirectionBackward = isDirectionBackward;

        api.Selection = WrappedSelection;

        api.selectionPrototype = selProto;

        api.addShimListener(function(win) {
            if (typeof win.getSelection == "undefined") {
                win.getSelection = function() {
                    return getSelection(win);
                };
            }
            win = null;
        });
    });
    

    /*----------------------------------------------------------------------------------------------------------------*/

    // Wait for document to load before initializing
    var docReady = false;

    var loadHandler = function(e) {
        if (!docReady) {
            docReady = true;
            if (!api.initialized && api.config.autoInitialize) {
                init();
            }
        }
    };

    if (isBrowser) {
        // Test whether the document has already been loaded and initialize immediately if so
        if (document.readyState == "complete") {
            loadHandler();
        } else {
            if (isHostMethod(document, "addEventListener")) {
                document.addEventListener("DOMContentLoaded", loadHandler, false);
            }

            // Add a fallback in case the DOMContentLoaded event isn't supported
            addListener(window, "load", loadHandler);
        }
    }

    return api;
}, this);
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sanitizeHtml = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var htmlparser = require('htmlparser2');
var extend = require('xtend');
var quoteRegexp = require('regexp-quote');

function each(obj, cb) {
  if (obj) Object.keys(obj).forEach(function (key) {
    cb(obj[key], key);
  });
}

// Avoid false positives with .__proto__, .hasOwnProperty, etc.
function has(obj, key) {
  return ({}).hasOwnProperty.call(obj, key);
}

module.exports = sanitizeHtml;

// Ignore the _recursing flag; it's there for recursive
// invocation as a guard against this exploit:
// https://github.com/fb55/htmlparser2/issues/105

function sanitizeHtml(html, options, _recursing) {
  var result = '';

  function Frame(tag, attribs) {
    var that = this;
    this.tag = tag;
    this.attribs = attribs || {};
    this.tagPosition = result.length;
    this.text = ''; // Node inner text

    this.updateParentNodeText = function() {
      if (stack.length) {
          var parentFrame = stack[stack.length - 1];
          parentFrame.text += that.text;
      }
    };
  }

  if (!options) {
    options = sanitizeHtml.defaults;
    options.parser = htmlParserDefaults;
  } else {
    options = extend(sanitizeHtml.defaults, options);
    if (options.parser) {
      options.parser = extend(htmlParserDefaults, options.parser);
    } else {
      options.parser = htmlParserDefaults;
    }
  }

  // Tags that contain something other than HTML, or where discarding
  // the text when the tag is disallowed makes sense for other reasons.
  // If we are not allowing these tags, we should drop their content too.
  // For other tags you would drop the tag but keep its content.
  var nonTextTagsArray = options.nonTextTags || [ 'script', 'style', 'textarea' ];
  var allowedAttributesMap;
  var allowedAttributesGlobMap;
  if(options.allowedAttributes) {
    allowedAttributesMap = {};
    allowedAttributesGlobMap = {};
    each(options.allowedAttributes, function(attributes, tag) {
      allowedAttributesMap[tag] = [];
      var globRegex = [];
      attributes.forEach(function(name) {
        if(name.indexOf('*') >= 0) {
          globRegex.push(quoteRegexp(name).replace(/\\\*/g, '.*'));
        } else {
          allowedAttributesMap[tag].push(name);
        }
      });
      allowedAttributesGlobMap[tag] = new RegExp('^(' + globRegex.join('|') + ')$');
    });
  }
  var allowedClassesMap = {};
  each(options.allowedClasses, function(classes, tag) {
    // Implicitly allows the class attribute
    if(allowedAttributesMap) {
      if (!has(allowedAttributesMap, tag)) {
        allowedAttributesMap[tag] = [];
      }
      allowedAttributesMap[tag].push('class');
    }

    allowedClassesMap[tag] = classes;
  });

  var transformTagsMap = {};
  var transformTagsAll;
  each(options.transformTags, function(transform, tag) {
    var transFun;
    if (typeof transform === 'function') {
      transFun = transform;
    } else if (typeof transform === "string") {
      transFun = sanitizeHtml.simpleTransform(transform);
    }
    if (tag === '*') {
      transformTagsAll = transFun;
    } else {
      transformTagsMap[tag] = transFun;
    }
  });

  var depth = 0;
  var stack = [];
  var skipMap = {};
  var transformMap = {};
  var skipText = false;
  var skipTextDepth = 0;

  var parser = new htmlparser.Parser({
    onopentag: function(name, attribs) {
      if (skipText) {
        skipTextDepth++;
        return;
      }
      var frame = new Frame(name, attribs);
      stack.push(frame);

      var skip = false;
      var hasText = frame.text ? true : false;
      var transformedTag;
      if (has(transformTagsMap, name)) {
        transformedTag = transformTagsMap[name](name, attribs);

        frame.attribs = attribs = transformedTag.attribs;

        if (transformedTag.text !== undefined) {
          frame.innerText = transformedTag.text;
        }

        if (name !== transformedTag.tagName) {
          frame.name = name = transformedTag.tagName;
          transformMap[depth] = transformedTag.tagName;
        }
      }
      if (transformTagsAll) {
        transformedTag = transformTagsAll(name, attribs);

        frame.attribs = attribs = transformedTag.attribs;
        if (name !== transformedTag.tagName) {
          frame.name = name = transformedTag.tagName;
          transformMap[depth] = transformedTag.tagName;
        }
      }

      if (options.allowedTags && options.allowedTags.indexOf(name) === -1) {
        skip = true;
        if (nonTextTagsArray.indexOf(name) !== -1) {
          skipText = true;
          skipTextDepth = 1;
        }
        skipMap[depth] = true;
      }
      depth++;
      if (skip) {
        // We want the contents but not this tag
        return;
      }
      result += '<' + name;
      if (!allowedAttributesMap || has(allowedAttributesMap, name) || allowedAttributesMap['*']) {
        each(attribs, function(value, a) {
          if (!allowedAttributesMap ||
              (has(allowedAttributesMap, name) && allowedAttributesMap[name].indexOf(a) !== -1 ) ||
              (allowedAttributesMap['*'] && allowedAttributesMap['*'].indexOf(a) !== -1 ) ||
              (has(allowedAttributesGlobMap, name) && allowedAttributesGlobMap[name].test(a)) ||
              (allowedAttributesGlobMap['*'] && allowedAttributesGlobMap['*'].test(a))) {
            if ((a === 'href') || (a === 'src')) {
              if (naughtyHref(name, value)) {
                delete frame.attribs[a];
                return;
              }
            }
            if (a === 'class') {
              value = filterClasses(value, allowedClassesMap[name]);
              if (!value.length) {
                delete frame.attribs[a];
                return;
              }
            }
            result += ' ' + a;
            if (value.length) {
              result += '="' + escapeHtml(value) + '"';
            }
          } else {
            delete frame.attribs[a];
          }
        });
      }
      if (options.selfClosing.indexOf(name) !== -1) {
        result += " />";
      } else {
        result += ">";
        if (frame.innerText && !hasText && !options.textFilter) {
          result += frame.innerText;
        }
      }
    },
    ontext: function(text) {
      if (skipText) {
        return;
      }
      var lastFrame = stack[stack.length-1];
      var tag;

      if (lastFrame) {
        tag = lastFrame.tag;
        // If inner text was set by transform function then let's use it
        text = lastFrame.innerText !== undefined ? lastFrame.innerText : text;
      }

      if ((tag === 'script') || (tag === 'style')) {
        // htmlparser2 gives us these as-is. Escaping them ruins the content. Allowing
        // script tags is, by definition, game over for XSS protection, so if that's
        // your concern, don't allow them. The same is essentially true for style tags
        // which have their own collection of XSS vectors.
        result += text;
      } else {
        var escaped = escapeHtml(text);
        if (options.textFilter) {
          result += options.textFilter(escaped);
        } else {
          result += escaped;
        }
      }
      if (stack.length) {
           var frame = stack[stack.length - 1];
           frame.text += text;
      }
    },
    onclosetag: function(name) {

      if (skipText) {
        skipTextDepth--;
        if (!skipTextDepth) {
          skipText = false;
        } else {
          return;
        }
      }

      var frame = stack.pop();
      if (!frame) {
        // Do not crash on bad markup
        return;
      }
      skipText = false;
      depth--;
      if (skipMap[depth]) {
        delete skipMap[depth];
        frame.updateParentNodeText();
        return;
      }

      if (transformMap[depth]) {
        name = transformMap[depth];
        delete transformMap[depth];
      }

      if (options.exclusiveFilter && options.exclusiveFilter(frame)) {
         result = result.substr(0, frame.tagPosition);
         return;
      }

      frame.updateParentNodeText();

      if (options.selfClosing.indexOf(name) !== -1) {
         // Already output />
         return;
      }

      result += "</" + name + ">";
    }
  }, options.parser);
  parser.write(html);
  parser.end();

  return result;

  function escapeHtml(s) {
    if (typeof(s) !== 'string') {
      s = s + '';
    }
    return s.replace(/\&/g, '&amp;').replace(/</g, '&lt;').replace(/\>/g, '&gt;').replace(/\"/g, '&quot;');
  }

  function naughtyHref(name, href) {
    // Browsers ignore character codes of 32 (space) and below in a surprising
    // number of situations. Start reading here:
    // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
    href = href.replace(/[\x00-\x20]+/g, '');
    // Clobber any comments in URLs, which the browser might
    // interpret inside an XML data island, allowing
    // a javascript: URL to be snuck through
    href = href.replace(/<\!\-\-.*?\-\-\>/g, '');
    // Case insensitive so we don't get faked out by JAVASCRIPT #1
    var matches = href.match(/^([a-zA-Z]+)\:/);
    if (!matches) {
      // No scheme = no way to inject js (right?)
      return false;
    }
    var scheme = matches[1].toLowerCase();

    if (has(options.allowedSchemesByTag, name)) {
      return options.allowedSchemesByTag[name].indexOf(scheme) === -1;
    }

    return !options.allowedSchemes || options.allowedSchemes.indexOf(scheme) === -1;
  }

  function filterClasses(classes, allowed) {
    if (!allowed) {
      // The class attribute is allowed without filtering on this tag
      return classes;
    }
    classes = classes.split(/\s+/);
    return classes.filter(function(clss) {
      return allowed.indexOf(clss) !== -1;
    }).join(' ');
  }
}

// Defaults are accessible to you so that you can use them as a starting point
// programmatically if you wish

var htmlParserDefaults = {
  decodeEntities: true
};
sanitizeHtml.defaults = {
  allowedTags: [ 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
    'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre' ],
  allowedAttributes: {
    a: [ 'href', 'name', 'target' ],
    // We don't currently allow img itself by default, but this
    // would make sense if we did
    img: [ 'src' ]
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: [ 'img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta' ],
  // URL schemes we permit
  allowedSchemes: [ 'http', 'https', 'ftp', 'mailto' ],
  allowedSchemesByTag: {}
};

sanitizeHtml.simpleTransform = function(newTagName, newAttribs, merge) {
  merge = (merge === undefined) ? true : merge;
  newAttribs = newAttribs || {};

  return function(tagName, attribs) {
    var attrib;
    if (merge) {
      for (attrib in newAttribs) {
        attribs[attrib] = newAttribs[attrib];
      }
    } else {
      attribs = newAttribs;
    }

    return {
      tagName: newTagName,
      attribs: attribs
    };
  };
};

},{"htmlparser2":36,"regexp-quote":54,"xtend":58}],2:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],3:[function(require,module,exports){

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

var buffer = require('buffer');
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"buffer":5}],5:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":2,"ieee754":37,"isarray":40}],6:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
},{"../../is-buffer/index.js":39}],7:[function(require,module,exports){
/*
  Module dependencies
*/
var ElementType = require('domelementtype');
var entities = require('entities');

/*
  Boolean Attributes
*/
var booleanAttributes = {
  __proto__: null,
  allowfullscreen: true,
  async: true,
  autofocus: true,
  autoplay: true,
  checked: true,
  controls: true,
  default: true,
  defer: true,
  disabled: true,
  hidden: true,
  ismap: true,
  loop: true,
  multiple: true,
  muted: true,
  open: true,
  readonly: true,
  required: true,
  reversed: true,
  scoped: true,
  seamless: true,
  selected: true,
  typemustmatch: true
};

var unencodedElements = {
  __proto__: null,
  style: true,
  script: true,
  xmp: true,
  iframe: true,
  noembed: true,
  noframes: true,
  plaintext: true,
  noscript: true
};

/*
  Format attributes
*/
function formatAttrs(attributes, opts) {
  if (!attributes) return;

  var output = '',
      value;

  // Loop through the attributes
  for (var key in attributes) {
    value = attributes[key];
    if (output) {
      output += ' ';
    }

    if (!value && booleanAttributes[key]) {
      output += key;
    } else {
      output += key + '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
    }
  }

  return output;
}

/*
  Self-enclosing tags (stolen from node-htmlparser)
*/
var singleTag = {
  __proto__: null,
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,
};


var render = module.exports = function(dom, opts) {
  if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
  opts = opts || {};

  var output = '';

  for(var i = 0; i < dom.length; i++){
    var elem = dom[i];

    if (elem.type === 'root')
      output += render(elem.children, opts);
    else if (ElementType.isTag(elem))
      output += renderTag(elem, opts);
    else if (elem.type === ElementType.Directive)
      output += renderDirective(elem);
    else if (elem.type === ElementType.Comment)
      output += renderComment(elem);
    else if (elem.type === ElementType.CDATA)
      output += renderCdata(elem);
    else
      output += renderText(elem, opts);
  }

  return output;
};

function renderTag(elem, opts) {
  // Handle SVG
  if (elem.name === "svg") opts = {decodeEntities: opts.decodeEntities, xmlMode: true};

  var tag = '<' + elem.name,
      attribs = formatAttrs(elem.attribs, opts);

  if (attribs) {
    tag += ' ' + attribs;
  }

  if (
    opts.xmlMode
    && (!elem.children || elem.children.length === 0)
  ) {
    tag += '/>';
  } else {
    tag += '>';
    if (elem.children) {
      tag += render(elem.children, opts);
    }

    if (!singleTag[elem.name] || opts.xmlMode) {
      tag += '</' + elem.name + '>';
    }
  }

  return tag;
}

function renderDirective(elem) {
  return '<' + elem.data + '>';
}

function renderText(elem, opts) {
  var data = elem.data || '';

  // if entities weren't decoded, no need to encode them back
  if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
    data = entities.encodeXML(data);
  }

  return data;
}

function renderCdata(elem) {
  return '<![CDATA[' + elem.children[0].data + ']]>';
}

function renderComment(elem) {
  return '<!--' + elem.data + '-->';
}

},{"domelementtype":8,"entities":20}],8:[function(require,module,exports){
//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};
},{}],9:[function(require,module,exports){
//Types of elements found in the DOM
module.exports = {
	Text: "text", //Text
	Directive: "directive", //<? ... ?>
	Comment: "comment", //<!-- ... -->
	Script: "script", //<script> tags
	Style: "style", //<style> tags
	Tag: "tag", //Any tag
	CDATA: "cdata", //<![CDATA[ ... ]]>
	Doctype: "doctype",

	isTag: function(elem){
		return elem.type === "tag" || elem.type === "script" || elem.type === "style";
	}
};

},{}],10:[function(require,module,exports){
var ElementType = require("domelementtype");

var re_whitespace = /\s+/g;
var NodePrototype = require("./lib/node");
var ElementPrototype = require("./lib/element");

function DomHandler(callback, options, elementCB){
	if(typeof callback === "object"){
		elementCB = options;
		options = callback;
		callback = null;
	} else if(typeof options === "function"){
		elementCB = options;
		options = defaultOpts;
	}
	this._callback = callback;
	this._options = options || defaultOpts;
	this._elementCB = elementCB;
	this.dom = [];
	this._done = false;
	this._tagStack = [];
	this._parser = this._parser || null;
}

//default options
var defaultOpts = {
	normalizeWhitespace: false, //Replace all whitespace with single spaces
	withStartIndices: false, //Add startIndex properties to nodes
};

DomHandler.prototype.onparserinit = function(parser){
	this._parser = parser;
};

//Resets the handler back to starting state
DomHandler.prototype.onreset = function(){
	DomHandler.call(this, this._callback, this._options, this._elementCB);
};

//Signals the handler that parsing is done
DomHandler.prototype.onend = function(){
	if(this._done) return;
	this._done = true;
	this._parser = null;
	this._handleCallback(null);
};

DomHandler.prototype._handleCallback =
DomHandler.prototype.onerror = function(error){
	if(typeof this._callback === "function"){
		this._callback(error, this.dom);
	} else {
		if(error) throw error;
	}
};

DomHandler.prototype.onclosetag = function(){
	//if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
	var elem = this._tagStack.pop();
	if(this._elementCB) this._elementCB(elem);
};

DomHandler.prototype._addDomElement = function(element){
	var parent = this._tagStack[this._tagStack.length - 1];
	var siblings = parent ? parent.children : this.dom;
	var previousSibling = siblings[siblings.length - 1];

	element.next = null;

	if(this._options.withStartIndices){
		element.startIndex = this._parser.startIndex;
	}

	if (this._options.withDomLvl1) {
		element.__proto__ = element.type === "tag" ? ElementPrototype : NodePrototype;
	}

	if(previousSibling){
		element.prev = previousSibling;
		previousSibling.next = element;
	} else {
		element.prev = null;
	}

	siblings.push(element);
	element.parent = parent || null;
};

DomHandler.prototype.onopentag = function(name, attribs){
	var element = {
		type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
		name: name,
		attribs: attribs,
		children: []
	};

	this._addDomElement(element);

	this._tagStack.push(element);
};

DomHandler.prototype.ontext = function(data){
	//the ignoreWhitespace is officially dropped, but for now,
	//it's an alias for normalizeWhitespace
	var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;

	var lastTag;

	if(!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length-1]).type === ElementType.Text){
		if(normalize){
			lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
		} else {
			lastTag.data += data;
		}
	} else {
		if(
			this._tagStack.length &&
			(lastTag = this._tagStack[this._tagStack.length - 1]) &&
			(lastTag = lastTag.children[lastTag.children.length - 1]) &&
			lastTag.type === ElementType.Text
		){
			if(normalize){
				lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
			} else {
				lastTag.data += data;
			}
		} else {
			if(normalize){
				data = data.replace(re_whitespace, " ");
			}

			this._addDomElement({
				data: data,
				type: ElementType.Text
			});
		}
	}
};

DomHandler.prototype.oncomment = function(data){
	var lastTag = this._tagStack[this._tagStack.length - 1];

	if(lastTag && lastTag.type === ElementType.Comment){
		lastTag.data += data;
		return;
	}

	var element = {
		data: data,
		type: ElementType.Comment
	};

	this._addDomElement(element);
	this._tagStack.push(element);
};

DomHandler.prototype.oncdatastart = function(){
	var element = {
		children: [{
			data: "",
			type: ElementType.Text
		}],
		type: ElementType.CDATA
	};

	this._addDomElement(element);
	this._tagStack.push(element);
};

DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function(){
	this._tagStack.pop();
};

DomHandler.prototype.onprocessinginstruction = function(name, data){
	this._addDomElement({
		name: name,
		data: data,
		type: ElementType.Directive
	});
};

module.exports = DomHandler;

},{"./lib/element":11,"./lib/node":12,"domelementtype":9}],11:[function(require,module,exports){
// DOM-Level-1-compliant structure
var NodePrototype = require('./node');
var ElementPrototype = module.exports = Object.create(NodePrototype);

var domLvl1 = {
	tagName: "name"
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(ElementPrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});

},{"./node":12}],12:[function(require,module,exports){
// This object will be used as the prototype for Nodes when creating a
// DOM-Level-1-compliant structure.
var NodePrototype = module.exports = {
	get firstChild() {
		var children = this.children;
		return children && children[0] || null;
	},
	get lastChild() {
		var children = this.children;
		return children && children[children.length - 1] || null;
	},
	get nodeType() {
		return nodeTypes[this.type] || nodeTypes.element;
	}
};

var domLvl1 = {
	tagName: "name",
	childNodes: "children",
	parentNode: "parent",
	previousSibling: "prev",
	nextSibling: "next",
	nodeValue: "data"
};

var nodeTypes = {
	element: 1,
	text: 3,
	cdata: 4,
	comment: 8
};

Object.keys(domLvl1).forEach(function(key) {
	var shorthand = domLvl1[key];
	Object.defineProperty(NodePrototype, key, {
		get: function() {
			return this[shorthand] || null;
		},
		set: function(val) {
			this[shorthand] = val;
			return val;
		}
	});
});

},{}],13:[function(require,module,exports){
var DomUtils = module.exports;

[
	require("./lib/stringify"),
	require("./lib/traversal"),
	require("./lib/manipulation"),
	require("./lib/querying"),
	require("./lib/legacy"),
	require("./lib/helpers")
].forEach(function(ext){
	Object.keys(ext).forEach(function(key){
		DomUtils[key] = ext[key].bind(DomUtils);
	});
});

},{"./lib/helpers":14,"./lib/legacy":15,"./lib/manipulation":16,"./lib/querying":17,"./lib/stringify":18,"./lib/traversal":19}],14:[function(require,module,exports){
// removeSubsets
// Given an array of nodes, remove any member that is contained by another.
exports.removeSubsets = function(nodes) {
	var idx = nodes.length, node, ancestor, replace;

	// Check if each node (or one of its ancestors) is already contained in the
	// array.
	while (--idx > -1) {
		node = ancestor = nodes[idx];

		// Temporarily remove the node under consideration
		nodes[idx] = null;
		replace = true;

		while (ancestor) {
			if (nodes.indexOf(ancestor) > -1) {
				replace = false;
				nodes.splice(idx, 1);
				break;
			}
			ancestor = ancestor.parent;
		}

		// If the node has been found to be unique, re-insert it.
		if (replace) {
			nodes[idx] = node;
		}
	}

	return nodes;
};

// Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition
var POSITION = {
	DISCONNECTED: 1,
	PRECEDING: 2,
	FOLLOWING: 4,
	CONTAINS: 8,
	CONTAINED_BY: 16
};

// Compare the position of one node against another node in any other document.
// The return value is a bitmask with the following values:
//
// document order:
// > There is an ordering, document order, defined on all the nodes in the
// > document corresponding to the order in which the first character of the
// > XML representation of each node occurs in the XML representation of the
// > document after expansion of general entities. Thus, the document element
// > node will be the first node. Element nodes occur before their children.
// > Thus, document order orders element nodes in order of the occurrence of
// > their start-tag in the XML (after expansion of entities). The attribute
// > nodes of an element occur after the element and before its children. The
// > relative order of attribute nodes is implementation-dependent./
// Source:
// http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
//
// @argument {Node} nodaA The first node to use in the comparison
// @argument {Node} nodeB The second node to use in the comparison
//
// @return {Number} A bitmask describing the input nodes' relative position.
//         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
//         a description of these values.
var comparePos = exports.compareDocumentPosition = function(nodeA, nodeB) {
	var aParents = [];
	var bParents = [];
	var current, sharedParent, siblings, aSibling, bSibling, idx;

	if (nodeA === nodeB) {
		return 0;
	}

	current = nodeA;
	while (current) {
		aParents.unshift(current);
		current = current.parent;
	}
	current = nodeB;
	while (current) {
		bParents.unshift(current);
		current = current.parent;
	}

	idx = 0;
	while (aParents[idx] === bParents[idx]) {
		idx++;
	}

	if (idx === 0) {
		return POSITION.DISCONNECTED;
	}

	sharedParent = aParents[idx - 1];
	siblings = sharedParent.children;
	aSibling = aParents[idx];
	bSibling = bParents[idx];

	if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
		if (sharedParent === nodeB) {
			return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
		}
		return POSITION.FOLLOWING;
	} else {
		if (sharedParent === nodeA) {
			return POSITION.PRECEDING | POSITION.CONTAINS;
		}
		return POSITION.PRECEDING;
	}
};

// Sort an array of nodes based on their relative position in the document and
// remove any duplicate nodes. If the array contains nodes that do not belong
// to the same document, sort order is unspecified.
//
// @argument {Array} nodes Array of DOM nodes
//
// @returns {Array} collection of unique nodes, sorted in document order
exports.uniqueSort = function(nodes) {
	var idx = nodes.length, node, position;

	nodes = nodes.slice();

	while (--idx > -1) {
		node = nodes[idx];
		position = nodes.indexOf(node);
		if (position > -1 && position < idx) {
			nodes.splice(idx, 1);
		}
	}
	nodes.sort(function(a, b) {
		var relative = comparePos(a, b);
		if (relative & POSITION.PRECEDING) {
			return -1;
		} else if (relative & POSITION.FOLLOWING) {
			return 1;
		}
		return 0;
	});

	return nodes;
};

},{}],15:[function(require,module,exports){
var ElementType = require("domelementtype");
var isTag = exports.isTag = ElementType.isTag;

exports.testElement = function(options, element){
	for(var key in options){
		if(!options.hasOwnProperty(key));
		else if(key === "tag_name"){
			if(!isTag(element) || !options.tag_name(element.name)){
				return false;
			}
		} else if(key === "tag_type"){
			if(!options.tag_type(element.type)) return false;
		} else if(key === "tag_contains"){
			if(isTag(element) || !options.tag_contains(element.data)){
				return false;
			}
		} else if(!element.attribs || !options[key](element.attribs[key])){
			return false;
		}
	}
	return true;
};

var Checks = {
	tag_name: function(name){
		if(typeof name === "function"){
			return function(elem){ return isTag(elem) && name(elem.name); };
		} else if(name === "*"){
			return isTag;
		} else {
			return function(elem){ return isTag(elem) && elem.name === name; };
		}
	},
	tag_type: function(type){
		if(typeof type === "function"){
			return function(elem){ return type(elem.type); };
		} else {
			return function(elem){ return elem.type === type; };
		}
	},
	tag_contains: function(data){
		if(typeof data === "function"){
			return function(elem){ return !isTag(elem) && data(elem.data); };
		} else {
			return function(elem){ return !isTag(elem) && elem.data === data; };
		}
	}
};

function getAttribCheck(attrib, value){
	if(typeof value === "function"){
		return function(elem){ return elem.attribs && value(elem.attribs[attrib]); };
	} else {
		return function(elem){ return elem.attribs && elem.attribs[attrib] === value; };
	}
}

function combineFuncs(a, b){
	return function(elem){
		return a(elem) || b(elem);
	};
}

exports.getElements = function(options, element, recurse, limit){
	var funcs = Object.keys(options).map(function(key){
		var value = options[key];
		return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
	});

	return funcs.length === 0 ? [] : this.filter(
		funcs.reduce(combineFuncs),
		element, recurse, limit
	);
};

exports.getElementById = function(id, element, recurse){
	if(!Array.isArray(element)) element = [element];
	return this.findOne(getAttribCheck("id", id), element, recurse !== false);
};

exports.getElementsByTagName = function(name, element, recurse, limit){
	return this.filter(Checks.tag_name(name), element, recurse, limit);
};

exports.getElementsByTagType = function(type, element, recurse, limit){
	return this.filter(Checks.tag_type(type), element, recurse, limit);
};

},{"domelementtype":9}],16:[function(require,module,exports){
exports.removeElement = function(elem){
	if(elem.prev) elem.prev.next = elem.next;
	if(elem.next) elem.next.prev = elem.prev;

	if(elem.parent){
		var childs = elem.parent.children;
		childs.splice(childs.lastIndexOf(elem), 1);
	}
};

exports.replaceElement = function(elem, replacement){
	var prev = replacement.prev = elem.prev;
	if(prev){
		prev.next = replacement;
	}

	var next = replacement.next = elem.next;
	if(next){
		next.prev = replacement;
	}

	var parent = replacement.parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs[childs.lastIndexOf(elem)] = replacement;
	}
};

exports.appendChild = function(elem, child){
	child.parent = elem;

	if(elem.children.push(child) !== 1){
		var sibling = elem.children[elem.children.length - 2];
		sibling.next = child;
		child.prev = sibling;
		child.next = null;
	}
};

exports.append = function(elem, next){
	var parent = elem.parent,
		currNext = elem.next;

	next.next = currNext;
	next.prev = elem;
	elem.next = next;
	next.parent = parent;

	if(currNext){
		currNext.prev = next;
		if(parent){
			var childs = parent.children;
			childs.splice(childs.lastIndexOf(currNext), 0, next);
		}
	} else if(parent){
		parent.children.push(next);
	}
};

exports.prepend = function(elem, prev){
	var parent = elem.parent;
	if(parent){
		var childs = parent.children;
		childs.splice(childs.lastIndexOf(elem), 0, prev);
	}

	if(elem.prev){
		elem.prev.next = prev;
	}
	
	prev.parent = parent;
	prev.prev = elem.prev;
	prev.next = elem;
	elem.prev = prev;
};



},{}],17:[function(require,module,exports){
var isTag = require("domelementtype").isTag;

module.exports = {
	filter: filter,
	find: find,
	findOneChild: findOneChild,
	findOne: findOne,
	existsOne: existsOne,
	findAll: findAll
};

function filter(test, element, recurse, limit){
	if(!Array.isArray(element)) element = [element];

	if(typeof limit !== "number" || !isFinite(limit)){
		limit = Infinity;
	}
	return find(test, element, recurse !== false, limit);
}

function find(test, elems, recurse, limit){
	var result = [], childs;

	for(var i = 0, j = elems.length; i < j; i++){
		if(test(elems[i])){
			result.push(elems[i]);
			if(--limit <= 0) break;
		}

		childs = elems[i].children;
		if(recurse && childs && childs.length > 0){
			childs = find(test, childs, recurse, limit);
			result = result.concat(childs);
			limit -= childs.length;
			if(limit <= 0) break;
		}
	}

	return result;
}

function findOneChild(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(test(elems[i])) return elems[i];
	}

	return null;
}

function findOne(test, elems){
	var elem = null;

	for(var i = 0, l = elems.length; i < l && !elem; i++){
		if(!isTag(elems[i])){
			continue;
		} else if(test(elems[i])){
			elem = elems[i];
		} else if(elems[i].children.length > 0){
			elem = findOne(test, elems[i].children);
		}
	}

	return elem;
}

function existsOne(test, elems){
	for(var i = 0, l = elems.length; i < l; i++){
		if(
			isTag(elems[i]) && (
				test(elems[i]) || (
					elems[i].children.length > 0 &&
					existsOne(test, elems[i].children)
				)
			)
		){
			return true;
		}
	}

	return false;
}

function findAll(test, elems){
	var result = [];
	for(var i = 0, j = elems.length; i < j; i++){
		if(!isTag(elems[i])) continue;
		if(test(elems[i])) result.push(elems[i]);

		if(elems[i].children.length > 0){
			result = result.concat(findAll(test, elems[i].children));
		}
	}
	return result;
}

},{"domelementtype":9}],18:[function(require,module,exports){
var ElementType = require("domelementtype"),
    getOuterHTML = require("dom-serializer"),
    isTag = ElementType.isTag;

module.exports = {
	getInnerHTML: getInnerHTML,
	getOuterHTML: getOuterHTML,
	getText: getText
};

function getInnerHTML(elem, opts){
	return elem.children ? elem.children.map(function(elem){
		return getOuterHTML(elem, opts);
	}).join("") : "";
}

function getText(elem){
	if(Array.isArray(elem)) return elem.map(getText).join("");
	if(isTag(elem) || elem.type === ElementType.CDATA) return getText(elem.children);
	if(elem.type === ElementType.Text) return elem.data;
	return "";
}

},{"dom-serializer":7,"domelementtype":9}],19:[function(require,module,exports){
var getChildren = exports.getChildren = function(elem){
	return elem.children;
};

var getParent = exports.getParent = function(elem){
	return elem.parent;
};

exports.getSiblings = function(elem){
	var parent = getParent(elem);
	return parent ? getChildren(parent) : [elem];
};

exports.getAttributeValue = function(elem, name){
	return elem.attribs && elem.attribs[name];
};

exports.hasAttrib = function(elem, name){
	return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
};

exports.getName = function(elem){
	return elem.name;
};

},{}],20:[function(require,module,exports){
var encode = require("./lib/encode.js"),
    decode = require("./lib/decode.js");

exports.decode = function(data, level){
	return (!level || level <= 0 ? decode.XML : decode.HTML)(data);
};

exports.decodeStrict = function(data, level){
	return (!level || level <= 0 ? decode.XML : decode.HTMLStrict)(data);
};

exports.encode = function(data, level){
	return (!level || level <= 0 ? encode.XML : encode.HTML)(data);
};

exports.encodeXML = encode.XML;

exports.encodeHTML4 =
exports.encodeHTML5 =
exports.encodeHTML  = encode.HTML;

exports.decodeXML =
exports.decodeXMLStrict = decode.XML;

exports.decodeHTML4 =
exports.decodeHTML5 =
exports.decodeHTML = decode.HTML;

exports.decodeHTML4Strict =
exports.decodeHTML5Strict =
exports.decodeHTMLStrict = decode.HTMLStrict;

exports.escape = encode.escape;

},{"./lib/decode.js":21,"./lib/encode.js":23}],21:[function(require,module,exports){
var entityMap = require("../maps/entities.json"),
    legacyMap = require("../maps/legacy.json"),
    xmlMap    = require("../maps/xml.json"),
    decodeCodePoint = require("./decode_codepoint.js");

var decodeXMLStrict  = getStrictDecoder(xmlMap),
    decodeHTMLStrict = getStrictDecoder(entityMap);

function getStrictDecoder(map){
	var keys = Object.keys(map).join("|"),
	    replace = getReplacer(map);

	keys += "|#[xX][\\da-fA-F]+|#\\d+";

	var re = new RegExp("&(?:" + keys + ");", "g");

	return function(str){
		return String(str).replace(re, replace);
	};
}

var decodeHTML = (function(){
	var legacy = Object.keys(legacyMap)
		.sort(sorter);

	var keys = Object.keys(entityMap)
		.sort(sorter);

	for(var i = 0, j = 0; i < keys.length; i++){
		if(legacy[j] === keys[i]){
			keys[i] += ";?";
			j++;
		} else {
			keys[i] += ";";
		}
	}

	var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
	    replace = getReplacer(entityMap);

	function replacer(str){
		if(str.substr(-1) !== ";") str += ";";
		return replace(str);
	}

	//TODO consider creating a merged map
	return function(str){
		return String(str).replace(re, replacer);
	};
}());

function sorter(a, b){
	return a < b ? 1 : -1;
}

function getReplacer(map){
	return function replace(str){
		if(str.charAt(1) === "#"){
			if(str.charAt(2) === "X" || str.charAt(2) === "x"){
				return decodeCodePoint(parseInt(str.substr(3), 16));
			}
			return decodeCodePoint(parseInt(str.substr(2), 10));
		}
		return map[str.slice(1, -1)];
	};
}

module.exports = {
	XML: decodeXMLStrict,
	HTML: decodeHTML,
	HTMLStrict: decodeHTMLStrict
};
},{"../maps/entities.json":25,"../maps/legacy.json":26,"../maps/xml.json":27,"./decode_codepoint.js":22}],22:[function(require,module,exports){
var decodeMap = require("../maps/decode.json");

module.exports = decodeCodePoint;

// modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
function decodeCodePoint(codePoint){

	if((codePoint >= 0xD800 && codePoint <= 0xDFFF) || codePoint > 0x10FFFF){
		return "\uFFFD";
	}

	if(codePoint in decodeMap){
		codePoint = decodeMap[codePoint];
	}

	var output = "";

	if(codePoint > 0xFFFF){
		codePoint -= 0x10000;
		output += String.fromCharCode(codePoint >>> 10 & 0x3FF | 0xD800);
		codePoint = 0xDC00 | codePoint & 0x3FF;
	}

	output += String.fromCharCode(codePoint);
	return output;
}

},{"../maps/decode.json":24}],23:[function(require,module,exports){
var inverseXML = getInverseObj(require("../maps/xml.json")),
    xmlReplacer = getInverseReplacer(inverseXML);

exports.XML = getInverse(inverseXML, xmlReplacer);

var inverseHTML = getInverseObj(require("../maps/entities.json")),
    htmlReplacer = getInverseReplacer(inverseHTML);

exports.HTML = getInverse(inverseHTML, htmlReplacer);

function getInverseObj(obj){
	return Object.keys(obj).sort().reduce(function(inverse, name){
		inverse[obj[name]] = "&" + name + ";";
		return inverse;
	}, {});
}

function getInverseReplacer(inverse){
	var single = [],
	    multiple = [];

	Object.keys(inverse).forEach(function(k){
		if(k.length === 1){
			single.push("\\" + k);
		} else {
			multiple.push(k);
		}
	});

	//TODO add ranges
	multiple.unshift("[" + single.join("") + "]");

	return new RegExp(multiple.join("|"), "g");
}

var re_nonASCII = /[^\0-\x7F]/g,
    re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

function singleCharReplacer(c){
	return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
}

function astralReplacer(c){
	// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	var high = c.charCodeAt(0);
	var low  = c.charCodeAt(1);
	var codePoint = (high - 0xD800) * 0x400 + low - 0xDC00 + 0x10000;
	return "&#x" + codePoint.toString(16).toUpperCase() + ";";
}

function getInverse(inverse, re){
	function func(name){
		return inverse[name];
	}

	return function(data){
		return data
				.replace(re, func)
				.replace(re_astralSymbols, astralReplacer)
				.replace(re_nonASCII, singleCharReplacer);
	};
}

var re_xmlChars = getInverseReplacer(inverseXML);

function escapeXML(data){
	return data
			.replace(re_xmlChars, singleCharReplacer)
			.replace(re_astralSymbols, astralReplacer)
			.replace(re_nonASCII, singleCharReplacer);
}

exports.escape = escapeXML;

},{"../maps/entities.json":25,"../maps/xml.json":27}],24:[function(require,module,exports){
module.exports={"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}
},{}],25:[function(require,module,exports){
module.exports={"Aacute":"\u00C1","aacute":"\u00E1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223E","acd":"\u223F","acE":"\u223E\u0333","Acirc":"\u00C2","acirc":"\u00E2","acute":"\u00B4","Acy":"\u0410","acy":"\u0430","AElig":"\u00C6","aelig":"\u00E6","af":"\u2061","Afr":"\uD835\uDD04","afr":"\uD835\uDD1E","Agrave":"\u00C0","agrave":"\u00E0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03B1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2A3F","amp":"&","AMP":"&","andand":"\u2A55","And":"\u2A53","and":"\u2227","andd":"\u2A5C","andslope":"\u2A58","andv":"\u2A5A","ang":"\u2220","ange":"\u29A4","angle":"\u2220","angmsdaa":"\u29A8","angmsdab":"\u29A9","angmsdac":"\u29AA","angmsdad":"\u29AB","angmsdae":"\u29AC","angmsdaf":"\u29AD","angmsdag":"\u29AE","angmsdah":"\u29AF","angmsd":"\u2221","angrt":"\u221F","angrtvb":"\u22BE","angrtvbd":"\u299D","angsph":"\u2222","angst":"\u00C5","angzarr":"\u237C","Aogon":"\u0104","aogon":"\u0105","Aopf":"\uD835\uDD38","aopf":"\uD835\uDD52","apacir":"\u2A6F","ap":"\u2248","apE":"\u2A70","ape":"\u224A","apid":"\u224B","apos":"'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224A","Aring":"\u00C5","aring":"\u00E5","Ascr":"\uD835\uDC9C","ascr":"\uD835\uDCB6","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224D","Atilde":"\u00C3","atilde":"\u00E3","Auml":"\u00C4","auml":"\u00E4","awconint":"\u2233","awint":"\u2A11","backcong":"\u224C","backepsilon":"\u03F6","backprime":"\u2035","backsim":"\u223D","backsimeq":"\u22CD","Backslash":"\u2216","Barv":"\u2AE7","barvee":"\u22BD","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23B5","bbrktbrk":"\u23B6","bcong":"\u224C","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201E","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29B0","bepsi":"\u03F6","bernou":"\u212C","Bernoullis":"\u212C","Beta":"\u0392","beta":"\u03B2","beth":"\u2136","between":"\u226C","Bfr":"\uD835\uDD05","bfr":"\uD835\uDD1F","bigcap":"\u22C2","bigcirc":"\u25EF","bigcup":"\u22C3","bigodot":"\u2A00","bigoplus":"\u2A01","bigotimes":"\u2A02","bigsqcup":"\u2A06","bigstar":"\u2605","bigtriangledown":"\u25BD","bigtriangleup":"\u25B3","biguplus":"\u2A04","bigvee":"\u22C1","bigwedge":"\u22C0","bkarow":"\u290D","blacklozenge":"\u29EB","blacksquare":"\u25AA","blacktriangle":"\u25B4","blacktriangledown":"\u25BE","blacktriangleleft":"\u25C2","blacktriangleright":"\u25B8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20E5","bnequiv":"\u2261\u20E5","bNot":"\u2AED","bnot":"\u2310","Bopf":"\uD835\uDD39","bopf":"\uD835\uDD53","bot":"\u22A5","bottom":"\u22A5","bowtie":"\u22C8","boxbox":"\u29C9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250C","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252C","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229F","boxplus":"\u229E","boxtimes":"\u22A0","boxul":"\u2518","boxuL":"\u255B","boxUl":"\u255C","boxUL":"\u255D","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255A","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253C","boxvH":"\u256A","boxVh":"\u256B","boxVH":"\u256C","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251C","boxvR":"\u255E","boxVr":"\u255F","boxVR":"\u2560","bprime":"\u2035","breve":"\u02D8","Breve":"\u02D8","brvbar":"\u00A6","bscr":"\uD835\uDCB7","Bscr":"\u212C","bsemi":"\u204F","bsim":"\u223D","bsime":"\u22CD","bsolb":"\u29C5","bsol":"\\","bsolhsub":"\u27C8","bull":"\u2022","bullet":"\u2022","bump":"\u224E","bumpE":"\u2AAE","bumpe":"\u224F","Bumpeq":"\u224E","bumpeq":"\u224F","Cacute":"\u0106","cacute":"\u0107","capand":"\u2A44","capbrcup":"\u2A49","capcap":"\u2A4B","cap":"\u2229","Cap":"\u22D2","capcup":"\u2A47","capdot":"\u2A40","CapitalDifferentialD":"\u2145","caps":"\u2229\uFE00","caret":"\u2041","caron":"\u02C7","Cayleys":"\u212D","ccaps":"\u2A4D","Ccaron":"\u010C","ccaron":"\u010D","Ccedil":"\u00C7","ccedil":"\u00E7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2A4C","ccupssm":"\u2A50","Cdot":"\u010A","cdot":"\u010B","cedil":"\u00B8","Cedilla":"\u00B8","cemptyv":"\u29B2","cent":"\u00A2","centerdot":"\u00B7","CenterDot":"\u00B7","cfr":"\uD835\uDD20","Cfr":"\u212D","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03A7","chi":"\u03C7","circ":"\u02C6","circeq":"\u2257","circlearrowleft":"\u21BA","circlearrowright":"\u21BB","circledast":"\u229B","circledcirc":"\u229A","circleddash":"\u229D","CircleDot":"\u2299","circledR":"\u00AE","circledS":"\u24C8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25CB","cirE":"\u29C3","cire":"\u2257","cirfnint":"\u2A10","cirmid":"\u2AEF","cirscir":"\u29C2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201D","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2A74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2A6D","Congruent":"\u2261","conint":"\u222E","Conint":"\u222F","ContourIntegral":"\u222E","copf":"\uD835\uDD54","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\u00A9","COPY":"\u00A9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21B5","cross":"\u2717","Cross":"\u2A2F","Cscr":"\uD835\uDC9E","cscr":"\uD835\uDCB8","csub":"\u2ACF","csube":"\u2AD1","csup":"\u2AD0","csupe":"\u2AD2","ctdot":"\u22EF","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22DE","cuesc":"\u22DF","cularr":"\u21B6","cularrp":"\u293D","cupbrcap":"\u2A48","cupcap":"\u2A46","CupCap":"\u224D","cup":"\u222A","Cup":"\u22D3","cupcup":"\u2A4A","cupdot":"\u228D","cupor":"\u2A45","cups":"\u222A\uFE00","curarr":"\u21B7","curarrm":"\u293C","curlyeqprec":"\u22DE","curlyeqsucc":"\u22DF","curlyvee":"\u22CE","curlywedge":"\u22CF","curren":"\u00A4","curvearrowleft":"\u21B6","curvearrowright":"\u21B7","cuvee":"\u22CE","cuwed":"\u22CF","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232D","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21A1","dArr":"\u21D3","dash":"\u2010","Dashv":"\u2AE4","dashv":"\u22A3","dbkarow":"\u290F","dblac":"\u02DD","Dcaron":"\u010E","dcaron":"\u010F","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21CA","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2A77","deg":"\u00B0","Del":"\u2207","Delta":"\u0394","delta":"\u03B4","demptyv":"\u29B1","dfisht":"\u297F","Dfr":"\uD835\uDD07","dfr":"\uD835\uDD21","dHar":"\u2965","dharl":"\u21C3","dharr":"\u21C2","DiacriticalAcute":"\u00B4","DiacriticalDot":"\u02D9","DiacriticalDoubleAcute":"\u02DD","DiacriticalGrave":"`","DiacriticalTilde":"\u02DC","diam":"\u22C4","diamond":"\u22C4","Diamond":"\u22C4","diamondsuit":"\u2666","diams":"\u2666","die":"\u00A8","DifferentialD":"\u2146","digamma":"\u03DD","disin":"\u22F2","div":"\u00F7","divide":"\u00F7","divideontimes":"\u22C7","divonx":"\u22C7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231E","dlcrop":"\u230D","dollar":"$","Dopf":"\uD835\uDD3B","dopf":"\uD835\uDD55","Dot":"\u00A8","dot":"\u02D9","DotDot":"\u20DC","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22A1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222F","DoubleDot":"\u00A8","DoubleDownArrow":"\u21D3","DoubleLeftArrow":"\u21D0","DoubleLeftRightArrow":"\u21D4","DoubleLeftTee":"\u2AE4","DoubleLongLeftArrow":"\u27F8","DoubleLongLeftRightArrow":"\u27FA","DoubleLongRightArrow":"\u27F9","DoubleRightArrow":"\u21D2","DoubleRightTee":"\u22A8","DoubleUpArrow":"\u21D1","DoubleUpDownArrow":"\u21D5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21D3","DownArrowUpArrow":"\u21F5","DownBreve":"\u0311","downdownarrows":"\u21CA","downharpoonleft":"\u21C3","downharpoonright":"\u21C2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295E","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21BD","DownRightTeeVector":"\u295F","DownRightVectorBar":"\u2957","DownRightVector":"\u21C1","DownTeeArrow":"\u21A7","DownTee":"\u22A4","drbkarow":"\u2910","drcorn":"\u231F","drcrop":"\u230C","Dscr":"\uD835\uDC9F","dscr":"\uD835\uDCB9","DScy":"\u0405","dscy":"\u0455","dsol":"\u29F6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22F1","dtri":"\u25BF","dtrif":"\u25BE","duarr":"\u21F5","duhar":"\u296F","dwangle":"\u29A6","DZcy":"\u040F","dzcy":"\u045F","dzigrarr":"\u27FF","Eacute":"\u00C9","eacute":"\u00E9","easter":"\u2A6E","Ecaron":"\u011A","ecaron":"\u011B","Ecirc":"\u00CA","ecirc":"\u00EA","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042D","ecy":"\u044D","eDDot":"\u2A77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\uD835\uDD08","efr":"\uD835\uDD22","eg":"\u2A9A","Egrave":"\u00C8","egrave":"\u00E8","egs":"\u2A96","egsdot":"\u2A98","el":"\u2A99","Element":"\u2208","elinters":"\u23E7","ell":"\u2113","els":"\u2A95","elsdot":"\u2A97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25FB","emptyv":"\u2205","EmptyVerySmallSquare":"\u25AB","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014A","eng":"\u014B","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\uD835\uDD3C","eopf":"\uD835\uDD56","epar":"\u22D5","eparsl":"\u29E3","eplus":"\u2A71","epsi":"\u03B5","Epsilon":"\u0395","epsilon":"\u03B5","epsiv":"\u03F5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2A96","eqslantless":"\u2A95","Equal":"\u2A75","equals":"=","EqualTilde":"\u2242","equest":"\u225F","Equilibrium":"\u21CC","equiv":"\u2261","equivDD":"\u2A78","eqvparsl":"\u29E5","erarr":"\u2971","erDot":"\u2253","escr":"\u212F","Escr":"\u2130","esdot":"\u2250","Esim":"\u2A73","esim":"\u2242","Eta":"\u0397","eta":"\u03B7","ETH":"\u00D0","eth":"\u00F0","Euml":"\u00CB","euml":"\u00EB","euro":"\u20AC","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\uFB03","fflig":"\uFB00","ffllig":"\uFB04","Ffr":"\uD835\uDD09","ffr":"\uD835\uDD23","filig":"\uFB01","FilledSmallSquare":"\u25FC","FilledVerySmallSquare":"\u25AA","fjlig":"fj","flat":"\u266D","fllig":"\uFB02","fltns":"\u25B1","fnof":"\u0192","Fopf":"\uD835\uDD3D","fopf":"\uD835\uDD57","forall":"\u2200","ForAll":"\u2200","fork":"\u22D4","forkv":"\u2AD9","Fouriertrf":"\u2131","fpartint":"\u2A0D","frac12":"\u00BD","frac13":"\u2153","frac14":"\u00BC","frac15":"\u2155","frac16":"\u2159","frac18":"\u215B","frac23":"\u2154","frac25":"\u2156","frac34":"\u00BE","frac35":"\u2157","frac38":"\u215C","frac45":"\u2158","frac56":"\u215A","frac58":"\u215D","frac78":"\u215E","frasl":"\u2044","frown":"\u2322","fscr":"\uD835\uDCBB","Fscr":"\u2131","gacute":"\u01F5","Gamma":"\u0393","gamma":"\u03B3","Gammad":"\u03DC","gammad":"\u03DD","gap":"\u2A86","Gbreve":"\u011E","gbreve":"\u011F","Gcedil":"\u0122","Gcirc":"\u011C","gcirc":"\u011D","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2A8C","gel":"\u22DB","geq":"\u2265","geqq":"\u2267","geqslant":"\u2A7E","gescc":"\u2AA9","ges":"\u2A7E","gesdot":"\u2A80","gesdoto":"\u2A82","gesdotol":"\u2A84","gesl":"\u22DB\uFE00","gesles":"\u2A94","Gfr":"\uD835\uDD0A","gfr":"\uD835\uDD24","gg":"\u226B","Gg":"\u22D9","ggg":"\u22D9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2AA5","gl":"\u2277","glE":"\u2A92","glj":"\u2AA4","gnap":"\u2A8A","gnapprox":"\u2A8A","gne":"\u2A88","gnE":"\u2269","gneq":"\u2A88","gneqq":"\u2269","gnsim":"\u22E7","Gopf":"\uD835\uDD3E","gopf":"\uD835\uDD58","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22DB","GreaterFullEqual":"\u2267","GreaterGreater":"\u2AA2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2A7E","GreaterTilde":"\u2273","Gscr":"\uD835\uDCA2","gscr":"\u210A","gsim":"\u2273","gsime":"\u2A8E","gsiml":"\u2A90","gtcc":"\u2AA7","gtcir":"\u2A7A","gt":">","GT":">","Gt":"\u226B","gtdot":"\u22D7","gtlPar":"\u2995","gtquest":"\u2A7C","gtrapprox":"\u2A86","gtrarr":"\u2978","gtrdot":"\u22D7","gtreqless":"\u22DB","gtreqqless":"\u2A8C","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\uFE00","gvnE":"\u2269\uFE00","Hacek":"\u02C7","hairsp":"\u200A","half":"\u00BD","hamilt":"\u210B","HARDcy":"\u042A","hardcy":"\u044A","harrcir":"\u2948","harr":"\u2194","hArr":"\u21D4","harrw":"\u21AD","Hat":"^","hbar":"\u210F","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22B9","hfr":"\uD835\uDD25","Hfr":"\u210C","HilbertSpace":"\u210B","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21FF","homtht":"\u223B","hookleftarrow":"\u21A9","hookrightarrow":"\u21AA","hopf":"\uD835\uDD59","Hopf":"\u210D","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\uD835\uDCBD","Hscr":"\u210B","hslash":"\u210F","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224E","HumpEqual":"\u224F","hybull":"\u2043","hyphen":"\u2010","Iacute":"\u00CD","iacute":"\u00ED","ic":"\u2063","Icirc":"\u00CE","icirc":"\u00EE","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\u00A1","iff":"\u21D4","ifr":"\uD835\uDD26","Ifr":"\u2111","Igrave":"\u00CC","igrave":"\u00EC","ii":"\u2148","iiiint":"\u2A0C","iiint":"\u222D","iinfin":"\u29DC","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012A","imacr":"\u012B","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22B7","imped":"\u01B5","Implies":"\u21D2","incare":"\u2105","in":"\u2208","infin":"\u221E","infintie":"\u29DD","inodot":"\u0131","intcal":"\u22BA","int":"\u222B","Int":"\u222C","integers":"\u2124","Integral":"\u222B","intercal":"\u22BA","Intersection":"\u22C2","intlarhk":"\u2A17","intprod":"\u2A3C","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012E","iogon":"\u012F","Iopf":"\uD835\uDD40","iopf":"\uD835\uDD5A","Iota":"\u0399","iota":"\u03B9","iprod":"\u2A3C","iquest":"\u00BF","iscr":"\uD835\uDCBE","Iscr":"\u2110","isin":"\u2208","isindot":"\u22F5","isinE":"\u22F9","isins":"\u22F4","isinsv":"\u22F3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\u00CF","iuml":"\u00EF","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\uD835\uDD0D","jfr":"\uD835\uDD27","jmath":"\u0237","Jopf":"\uD835\uDD41","jopf":"\uD835\uDD5B","Jscr":"\uD835\uDCA5","jscr":"\uD835\uDCBF","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039A","kappa":"\u03BA","kappav":"\u03F0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041A","kcy":"\u043A","Kfr":"\uD835\uDD0E","kfr":"\uD835\uDD28","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040C","kjcy":"\u045C","Kopf":"\uD835\uDD42","kopf":"\uD835\uDD5C","Kscr":"\uD835\uDCA6","kscr":"\uD835\uDCC0","lAarr":"\u21DA","Lacute":"\u0139","lacute":"\u013A","laemptyv":"\u29B4","lagran":"\u2112","Lambda":"\u039B","lambda":"\u03BB","lang":"\u27E8","Lang":"\u27EA","langd":"\u2991","langle":"\u27E8","lap":"\u2A85","Laplacetrf":"\u2112","laquo":"\u00AB","larrb":"\u21E4","larrbfs":"\u291F","larr":"\u2190","Larr":"\u219E","lArr":"\u21D0","larrfs":"\u291D","larrhk":"\u21A9","larrlp":"\u21AB","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21A2","latail":"\u2919","lAtail":"\u291B","lat":"\u2AAB","late":"\u2AAD","lates":"\u2AAD\uFE00","lbarr":"\u290C","lBarr":"\u290E","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298B","lbrksld":"\u298F","lbrkslu":"\u298D","Lcaron":"\u013D","lcaron":"\u013E","Lcedil":"\u013B","lcedil":"\u013C","lceil":"\u2308","lcub":"{","Lcy":"\u041B","lcy":"\u043B","ldca":"\u2936","ldquo":"\u201C","ldquor":"\u201E","ldrdhar":"\u2967","ldrushar":"\u294B","ldsh":"\u21B2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27E8","LeftArrowBar":"\u21E4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21D0","LeftArrowRightArrow":"\u21C6","leftarrowtail":"\u21A2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27E6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21C3","LeftFloor":"\u230A","leftharpoondown":"\u21BD","leftharpoonup":"\u21BC","leftleftarrows":"\u21C7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21D4","leftrightarrows":"\u21C6","leftrightharpoons":"\u21CB","leftrightsquigarrow":"\u21AD","LeftRightVector":"\u294E","LeftTeeArrow":"\u21A4","LeftTee":"\u22A3","LeftTeeVector":"\u295A","leftthreetimes":"\u22CB","LeftTriangleBar":"\u29CF","LeftTriangle":"\u22B2","LeftTriangleEqual":"\u22B4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21BF","LeftVectorBar":"\u2952","LeftVector":"\u21BC","lEg":"\u2A8B","leg":"\u22DA","leq":"\u2264","leqq":"\u2266","leqslant":"\u2A7D","lescc":"\u2AA8","les":"\u2A7D","lesdot":"\u2A7F","lesdoto":"\u2A81","lesdotor":"\u2A83","lesg":"\u22DA\uFE00","lesges":"\u2A93","lessapprox":"\u2A85","lessdot":"\u22D6","lesseqgtr":"\u22DA","lesseqqgtr":"\u2A8B","LessEqualGreater":"\u22DA","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2AA1","lesssim":"\u2272","LessSlantEqual":"\u2A7D","LessTilde":"\u2272","lfisht":"\u297C","lfloor":"\u230A","Lfr":"\uD835\uDD0F","lfr":"\uD835\uDD29","lg":"\u2276","lgE":"\u2A91","lHar":"\u2962","lhard":"\u21BD","lharu":"\u21BC","lharul":"\u296A","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21C7","ll":"\u226A","Ll":"\u22D8","llcorner":"\u231E","Lleftarrow":"\u21DA","llhard":"\u296B","lltri":"\u25FA","Lmidot":"\u013F","lmidot":"\u0140","lmoustache":"\u23B0","lmoust":"\u23B0","lnap":"\u2A89","lnapprox":"\u2A89","lne":"\u2A87","lnE":"\u2268","lneq":"\u2A87","lneqq":"\u2268","lnsim":"\u22E6","loang":"\u27EC","loarr":"\u21FD","lobrk":"\u27E6","longleftarrow":"\u27F5","LongLeftArrow":"\u27F5","Longleftarrow":"\u27F8","longleftrightarrow":"\u27F7","LongLeftRightArrow":"\u27F7","Longleftrightarrow":"\u27FA","longmapsto":"\u27FC","longrightarrow":"\u27F6","LongRightArrow":"\u27F6","Longrightarrow":"\u27F9","looparrowleft":"\u21AB","looparrowright":"\u21AC","lopar":"\u2985","Lopf":"\uD835\uDD43","lopf":"\uD835\uDD5D","loplus":"\u2A2D","lotimes":"\u2A34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25CA","lozenge":"\u25CA","lozf":"\u29EB","lpar":"(","lparlt":"\u2993","lrarr":"\u21C6","lrcorner":"\u231F","lrhar":"\u21CB","lrhard":"\u296D","lrm":"\u200E","lrtri":"\u22BF","lsaquo":"\u2039","lscr":"\uD835\uDCC1","Lscr":"\u2112","lsh":"\u21B0","Lsh":"\u21B0","lsim":"\u2272","lsime":"\u2A8D","lsimg":"\u2A8F","lsqb":"[","lsquo":"\u2018","lsquor":"\u201A","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2AA6","ltcir":"\u2A79","lt":"<","LT":"<","Lt":"\u226A","ltdot":"\u22D6","lthree":"\u22CB","ltimes":"\u22C9","ltlarr":"\u2976","ltquest":"\u2A7B","ltri":"\u25C3","ltrie":"\u22B4","ltrif":"\u25C2","ltrPar":"\u2996","lurdshar":"\u294A","luruhar":"\u2966","lvertneqq":"\u2268\uFE00","lvnE":"\u2268\uFE00","macr":"\u00AF","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21A6","mapsto":"\u21A6","mapstodown":"\u21A7","mapstoleft":"\u21A4","mapstoup":"\u21A5","marker":"\u25AE","mcomma":"\u2A29","Mcy":"\u041C","mcy":"\u043C","mdash":"\u2014","mDDot":"\u223A","measuredangle":"\u2221","MediumSpace":"\u205F","Mellintrf":"\u2133","Mfr":"\uD835\uDD10","mfr":"\uD835\uDD2A","mho":"\u2127","micro":"\u00B5","midast":"*","midcir":"\u2AF0","mid":"\u2223","middot":"\u00B7","minusb":"\u229F","minus":"\u2212","minusd":"\u2238","minusdu":"\u2A2A","MinusPlus":"\u2213","mlcp":"\u2ADB","mldr":"\u2026","mnplus":"\u2213","models":"\u22A7","Mopf":"\uD835\uDD44","mopf":"\uD835\uDD5E","mp":"\u2213","mscr":"\uD835\uDCC2","Mscr":"\u2133","mstpos":"\u223E","Mu":"\u039C","mu":"\u03BC","multimap":"\u22B8","mumap":"\u22B8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20D2","nap":"\u2249","napE":"\u2A70\u0338","napid":"\u224B\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266E","naturals":"\u2115","natur":"\u266E","nbsp":"\u00A0","nbump":"\u224E\u0338","nbumpe":"\u224F\u0338","ncap":"\u2A43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2A6D\u0338","ncup":"\u2A42","Ncy":"\u041D","ncy":"\u043D","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21D7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200B","NegativeThickSpace":"\u200B","NegativeThinSpace":"\u200B","NegativeVeryThinSpace":"\u200B","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226B","NestedLessLess":"\u226A","NewLine":"\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\uD835\uDD11","nfr":"\uD835\uDD2B","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2A7E\u0338","nges":"\u2A7E\u0338","nGg":"\u22D9\u0338","ngsim":"\u2275","nGt":"\u226B\u20D2","ngt":"\u226F","ngtr":"\u226F","nGtv":"\u226B\u0338","nharr":"\u21AE","nhArr":"\u21CE","nhpar":"\u2AF2","ni":"\u220B","nis":"\u22FC","nisd":"\u22FA","niv":"\u220B","NJcy":"\u040A","njcy":"\u045A","nlarr":"\u219A","nlArr":"\u21CD","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219A","nLeftarrow":"\u21CD","nleftrightarrow":"\u21AE","nLeftrightarrow":"\u21CE","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2A7D\u0338","nles":"\u2A7D\u0338","nless":"\u226E","nLl":"\u22D8\u0338","nlsim":"\u2274","nLt":"\u226A\u20D2","nlt":"\u226E","nltri":"\u22EA","nltrie":"\u22EC","nLtv":"\u226A\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\u00A0","nopf":"\uD835\uDD5F","Nopf":"\u2115","Not":"\u2AEC","not":"\u00AC","NotCongruent":"\u2262","NotCupCap":"\u226D","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226F","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226B\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2A7E\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224E\u0338","NotHumpEqual":"\u224F\u0338","notin":"\u2209","notindot":"\u22F5\u0338","notinE":"\u22F9\u0338","notinva":"\u2209","notinvb":"\u22F7","notinvc":"\u22F6","NotLeftTriangleBar":"\u29CF\u0338","NotLeftTriangle":"\u22EA","NotLeftTriangleEqual":"\u22EC","NotLess":"\u226E","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226A\u0338","NotLessSlantEqual":"\u2A7D\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2AA2\u0338","NotNestedLessLess":"\u2AA1\u0338","notni":"\u220C","notniva":"\u220C","notnivb":"\u22FE","notnivc":"\u22FD","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2AAF\u0338","NotPrecedesSlantEqual":"\u22E0","NotReverseElement":"\u220C","NotRightTriangleBar":"\u29D0\u0338","NotRightTriangle":"\u22EB","NotRightTriangleEqual":"\u22ED","NotSquareSubset":"\u228F\u0338","NotSquareSubsetEqual":"\u22E2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22E3","NotSubset":"\u2282\u20D2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2AB0\u0338","NotSucceedsSlantEqual":"\u22E1","NotSucceedsTilde":"\u227F\u0338","NotSuperset":"\u2283\u20D2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2AFD\u20E5","npart":"\u2202\u0338","npolint":"\u2A14","npr":"\u2280","nprcue":"\u22E0","nprec":"\u2280","npreceq":"\u2AAF\u0338","npre":"\u2AAF\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219B","nrArr":"\u21CF","nrarrw":"\u219D\u0338","nrightarrow":"\u219B","nRightarrow":"\u21CF","nrtri":"\u22EB","nrtrie":"\u22ED","nsc":"\u2281","nsccue":"\u22E1","nsce":"\u2AB0\u0338","Nscr":"\uD835\uDCA9","nscr":"\uD835\uDCC3","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22E2","nsqsupe":"\u22E3","nsub":"\u2284","nsubE":"\u2AC5\u0338","nsube":"\u2288","nsubset":"\u2282\u20D2","nsubseteq":"\u2288","nsubseteqq":"\u2AC5\u0338","nsucc":"\u2281","nsucceq":"\u2AB0\u0338","nsup":"\u2285","nsupE":"\u2AC6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20D2","nsupseteq":"\u2289","nsupseteqq":"\u2AC6\u0338","ntgl":"\u2279","Ntilde":"\u00D1","ntilde":"\u00F1","ntlg":"\u2278","ntriangleleft":"\u22EA","ntrianglelefteq":"\u22EC","ntriangleright":"\u22EB","ntrianglerighteq":"\u22ED","Nu":"\u039D","nu":"\u03BD","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224D\u20D2","nvdash":"\u22AC","nvDash":"\u22AD","nVdash":"\u22AE","nVDash":"\u22AF","nvge":"\u2265\u20D2","nvgt":">\u20D2","nvHarr":"\u2904","nvinfin":"\u29DE","nvlArr":"\u2902","nvle":"\u2264\u20D2","nvlt":"<\u20D2","nvltrie":"\u22B4\u20D2","nvrArr":"\u2903","nvrtrie":"\u22B5\u20D2","nvsim":"\u223C\u20D2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21D6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\u00D3","oacute":"\u00F3","oast":"\u229B","Ocirc":"\u00D4","ocirc":"\u00F4","ocir":"\u229A","Ocy":"\u041E","ocy":"\u043E","odash":"\u229D","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2A38","odot":"\u2299","odsold":"\u29BC","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29BF","Ofr":"\uD835\uDD12","ofr":"\uD835\uDD2C","ogon":"\u02DB","Ograve":"\u00D2","ograve":"\u00F2","ogt":"\u29C1","ohbar":"\u29B5","ohm":"\u03A9","oint":"\u222E","olarr":"\u21BA","olcir":"\u29BE","olcross":"\u29BB","oline":"\u203E","olt":"\u29C0","Omacr":"\u014C","omacr":"\u014D","Omega":"\u03A9","omega":"\u03C9","Omicron":"\u039F","omicron":"\u03BF","omid":"\u29B6","ominus":"\u2296","Oopf":"\uD835\uDD46","oopf":"\uD835\uDD60","opar":"\u29B7","OpenCurlyDoubleQuote":"\u201C","OpenCurlyQuote":"\u2018","operp":"\u29B9","oplus":"\u2295","orarr":"\u21BB","Or":"\u2A54","or":"\u2228","ord":"\u2A5D","order":"\u2134","orderof":"\u2134","ordf":"\u00AA","ordm":"\u00BA","origof":"\u22B6","oror":"\u2A56","orslope":"\u2A57","orv":"\u2A5B","oS":"\u24C8","Oscr":"\uD835\uDCAA","oscr":"\u2134","Oslash":"\u00D8","oslash":"\u00F8","osol":"\u2298","Otilde":"\u00D5","otilde":"\u00F5","otimesas":"\u2A36","Otimes":"\u2A37","otimes":"\u2297","Ouml":"\u00D6","ouml":"\u00F6","ovbar":"\u233D","OverBar":"\u203E","OverBrace":"\u23DE","OverBracket":"\u23B4","OverParenthesis":"\u23DC","para":"\u00B6","parallel":"\u2225","par":"\u2225","parsim":"\u2AF3","parsl":"\u2AFD","part":"\u2202","PartialD":"\u2202","Pcy":"\u041F","pcy":"\u043F","percnt":"%","period":".","permil":"\u2030","perp":"\u22A5","pertenk":"\u2031","Pfr":"\uD835\uDD13","pfr":"\uD835\uDD2D","Phi":"\u03A6","phi":"\u03C6","phiv":"\u03D5","phmmat":"\u2133","phone":"\u260E","Pi":"\u03A0","pi":"\u03C0","pitchfork":"\u22D4","piv":"\u03D6","planck":"\u210F","planckh":"\u210E","plankv":"\u210F","plusacir":"\u2A23","plusb":"\u229E","pluscir":"\u2A22","plus":"+","plusdo":"\u2214","plusdu":"\u2A25","pluse":"\u2A72","PlusMinus":"\u00B1","plusmn":"\u00B1","plussim":"\u2A26","plustwo":"\u2A27","pm":"\u00B1","Poincareplane":"\u210C","pointint":"\u2A15","popf":"\uD835\uDD61","Popf":"\u2119","pound":"\u00A3","prap":"\u2AB7","Pr":"\u2ABB","pr":"\u227A","prcue":"\u227C","precapprox":"\u2AB7","prec":"\u227A","preccurlyeq":"\u227C","Precedes":"\u227A","PrecedesEqual":"\u2AAF","PrecedesSlantEqual":"\u227C","PrecedesTilde":"\u227E","preceq":"\u2AAF","precnapprox":"\u2AB9","precneqq":"\u2AB5","precnsim":"\u22E8","pre":"\u2AAF","prE":"\u2AB3","precsim":"\u227E","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2AB9","prnE":"\u2AB5","prnsim":"\u22E8","prod":"\u220F","Product":"\u220F","profalar":"\u232E","profline":"\u2312","profsurf":"\u2313","prop":"\u221D","Proportional":"\u221D","Proportion":"\u2237","propto":"\u221D","prsim":"\u227E","prurel":"\u22B0","Pscr":"\uD835\uDCAB","pscr":"\uD835\uDCC5","Psi":"\u03A8","psi":"\u03C8","puncsp":"\u2008","Qfr":"\uD835\uDD14","qfr":"\uD835\uDD2E","qint":"\u2A0C","qopf":"\uD835\uDD62","Qopf":"\u211A","qprime":"\u2057","Qscr":"\uD835\uDCAC","qscr":"\uD835\uDCC6","quaternions":"\u210D","quatint":"\u2A16","quest":"?","questeq":"\u225F","quot":"\"","QUOT":"\"","rAarr":"\u21DB","race":"\u223D\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221A","raemptyv":"\u29B3","rang":"\u27E9","Rang":"\u27EB","rangd":"\u2992","range":"\u29A5","rangle":"\u27E9","raquo":"\u00BB","rarrap":"\u2975","rarrb":"\u21E5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21A0","rArr":"\u21D2","rarrfs":"\u291E","rarrhk":"\u21AA","rarrlp":"\u21AC","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21A3","rarrw":"\u219D","ratail":"\u291A","rAtail":"\u291C","ratio":"\u2236","rationals":"\u211A","rbarr":"\u290D","rBarr":"\u290F","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298C","rbrksld":"\u298E","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201D","rdquor":"\u201D","rdsh":"\u21B3","real":"\u211C","realine":"\u211B","realpart":"\u211C","reals":"\u211D","Re":"\u211C","rect":"\u25AD","reg":"\u00AE","REG":"\u00AE","ReverseElement":"\u220B","ReverseEquilibrium":"\u21CB","ReverseUpEquilibrium":"\u296F","rfisht":"\u297D","rfloor":"\u230B","rfr":"\uD835\uDD2F","Rfr":"\u211C","rHar":"\u2964","rhard":"\u21C1","rharu":"\u21C0","rharul":"\u296C","Rho":"\u03A1","rho":"\u03C1","rhov":"\u03F1","RightAngleBracket":"\u27E9","RightArrowBar":"\u21E5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21D2","RightArrowLeftArrow":"\u21C4","rightarrowtail":"\u21A3","RightCeiling":"\u2309","RightDoubleBracket":"\u27E7","RightDownTeeVector":"\u295D","RightDownVectorBar":"\u2955","RightDownVector":"\u21C2","RightFloor":"\u230B","rightharpoondown":"\u21C1","rightharpoonup":"\u21C0","rightleftarrows":"\u21C4","rightleftharpoons":"\u21CC","rightrightarrows":"\u21C9","rightsquigarrow":"\u219D","RightTeeArrow":"\u21A6","RightTee":"\u22A2","RightTeeVector":"\u295B","rightthreetimes":"\u22CC","RightTriangleBar":"\u29D0","RightTriangle":"\u22B3","RightTriangleEqual":"\u22B5","RightUpDownVector":"\u294F","RightUpTeeVector":"\u295C","RightUpVectorBar":"\u2954","RightUpVector":"\u21BE","RightVectorBar":"\u2953","RightVector":"\u21C0","ring":"\u02DA","risingdotseq":"\u2253","rlarr":"\u21C4","rlhar":"\u21CC","rlm":"\u200F","rmoustache":"\u23B1","rmoust":"\u23B1","rnmid":"\u2AEE","roang":"\u27ED","roarr":"\u21FE","robrk":"\u27E7","ropar":"\u2986","ropf":"\uD835\uDD63","Ropf":"\u211D","roplus":"\u2A2E","rotimes":"\u2A35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2A12","rrarr":"\u21C9","Rrightarrow":"\u21DB","rsaquo":"\u203A","rscr":"\uD835\uDCC7","Rscr":"\u211B","rsh":"\u21B1","Rsh":"\u21B1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22CC","rtimes":"\u22CA","rtri":"\u25B9","rtrie":"\u22B5","rtrif":"\u25B8","rtriltri":"\u29CE","RuleDelayed":"\u29F4","ruluhar":"\u2968","rx":"\u211E","Sacute":"\u015A","sacute":"\u015B","sbquo":"\u201A","scap":"\u2AB8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2ABC","sc":"\u227B","sccue":"\u227D","sce":"\u2AB0","scE":"\u2AB4","Scedil":"\u015E","scedil":"\u015F","Scirc":"\u015C","scirc":"\u015D","scnap":"\u2ABA","scnE":"\u2AB6","scnsim":"\u22E9","scpolint":"\u2A13","scsim":"\u227F","Scy":"\u0421","scy":"\u0441","sdotb":"\u22A1","sdot":"\u22C5","sdote":"\u2A66","searhk":"\u2925","searr":"\u2198","seArr":"\u21D8","searrow":"\u2198","sect":"\u00A7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\uD835\uDD16","sfr":"\uD835\uDD30","sfrown":"\u2322","sharp":"\u266F","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\u00AD","Sigma":"\u03A3","sigma":"\u03C3","sigmaf":"\u03C2","sigmav":"\u03C2","sim":"\u223C","simdot":"\u2A6A","sime":"\u2243","simeq":"\u2243","simg":"\u2A9E","simgE":"\u2AA0","siml":"\u2A9D","simlE":"\u2A9F","simne":"\u2246","simplus":"\u2A24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2A33","smeparsl":"\u29E4","smid":"\u2223","smile":"\u2323","smt":"\u2AAA","smte":"\u2AAC","smtes":"\u2AAC\uFE00","SOFTcy":"\u042C","softcy":"\u044C","solbar":"\u233F","solb":"\u29C4","sol":"/","Sopf":"\uD835\uDD4A","sopf":"\uD835\uDD64","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\uFE00","sqcup":"\u2294","sqcups":"\u2294\uFE00","Sqrt":"\u221A","sqsub":"\u228F","sqsube":"\u2291","sqsubset":"\u228F","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25A1","Square":"\u25A1","SquareIntersection":"\u2293","SquareSubset":"\u228F","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25AA","squ":"\u25A1","squf":"\u25AA","srarr":"\u2192","Sscr":"\uD835\uDCAE","sscr":"\uD835\uDCC8","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22C6","Star":"\u22C6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03F5","straightphi":"\u03D5","strns":"\u00AF","sub":"\u2282","Sub":"\u22D0","subdot":"\u2ABD","subE":"\u2AC5","sube":"\u2286","subedot":"\u2AC3","submult":"\u2AC1","subnE":"\u2ACB","subne":"\u228A","subplus":"\u2ABF","subrarr":"\u2979","subset":"\u2282","Subset":"\u22D0","subseteq":"\u2286","subseteqq":"\u2AC5","SubsetEqual":"\u2286","subsetneq":"\u228A","subsetneqq":"\u2ACB","subsim":"\u2AC7","subsub":"\u2AD5","subsup":"\u2AD3","succapprox":"\u2AB8","succ":"\u227B","succcurlyeq":"\u227D","Succeeds":"\u227B","SucceedsEqual":"\u2AB0","SucceedsSlantEqual":"\u227D","SucceedsTilde":"\u227F","succeq":"\u2AB0","succnapprox":"\u2ABA","succneqq":"\u2AB6","succnsim":"\u22E9","succsim":"\u227F","SuchThat":"\u220B","sum":"\u2211","Sum":"\u2211","sung":"\u266A","sup1":"\u00B9","sup2":"\u00B2","sup3":"\u00B3","sup":"\u2283","Sup":"\u22D1","supdot":"\u2ABE","supdsub":"\u2AD8","supE":"\u2AC6","supe":"\u2287","supedot":"\u2AC4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27C9","suphsub":"\u2AD7","suplarr":"\u297B","supmult":"\u2AC2","supnE":"\u2ACC","supne":"\u228B","supplus":"\u2AC0","supset":"\u2283","Supset":"\u22D1","supseteq":"\u2287","supseteqq":"\u2AC6","supsetneq":"\u228B","supsetneqq":"\u2ACC","supsim":"\u2AC8","supsub":"\u2AD4","supsup":"\u2AD6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21D9","swarrow":"\u2199","swnwar":"\u292A","szlig":"\u00DF","Tab":"\t","target":"\u2316","Tau":"\u03A4","tau":"\u03C4","tbrk":"\u23B4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20DB","telrec":"\u2315","Tfr":"\uD835\uDD17","tfr":"\uD835\uDD31","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03B8","thetasym":"\u03D1","thetav":"\u03D1","thickapprox":"\u2248","thicksim":"\u223C","ThickSpace":"\u205F\u200A","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223C","THORN":"\u00DE","thorn":"\u00FE","tilde":"\u02DC","Tilde":"\u223C","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2A31","timesb":"\u22A0","times":"\u00D7","timesd":"\u2A30","tint":"\u222D","toea":"\u2928","topbot":"\u2336","topcir":"\u2AF1","top":"\u22A4","Topf":"\uD835\uDD4B","topf":"\uD835\uDD65","topfork":"\u2ADA","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25B5","triangledown":"\u25BF","triangleleft":"\u25C3","trianglelefteq":"\u22B4","triangleq":"\u225C","triangleright":"\u25B9","trianglerighteq":"\u22B5","tridot":"\u25EC","trie":"\u225C","triminus":"\u2A3A","TripleDot":"\u20DB","triplus":"\u2A39","trisb":"\u29CD","tritime":"\u2A3B","trpezium":"\u23E2","Tscr":"\uD835\uDCAF","tscr":"\uD835\uDCC9","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040B","tshcy":"\u045B","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226C","twoheadleftarrow":"\u219E","twoheadrightarrow":"\u21A0","Uacute":"\u00DA","uacute":"\u00FA","uarr":"\u2191","Uarr":"\u219F","uArr":"\u21D1","Uarrocir":"\u2949","Ubrcy":"\u040E","ubrcy":"\u045E","Ubreve":"\u016C","ubreve":"\u016D","Ucirc":"\u00DB","ucirc":"\u00FB","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21C5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296E","ufisht":"\u297E","Ufr":"\uD835\uDD18","ufr":"\uD835\uDD32","Ugrave":"\u00D9","ugrave":"\u00F9","uHar":"\u2963","uharl":"\u21BF","uharr":"\u21BE","uhblk":"\u2580","ulcorn":"\u231C","ulcorner":"\u231C","ulcrop":"\u230F","ultri":"\u25F8","Umacr":"\u016A","umacr":"\u016B","uml":"\u00A8","UnderBar":"_","UnderBrace":"\u23DF","UnderBracket":"\u23B5","UnderParenthesis":"\u23DD","Union":"\u22C3","UnionPlus":"\u228E","Uogon":"\u0172","uogon":"\u0173","Uopf":"\uD835\uDD4C","uopf":"\uD835\uDD66","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21D1","UpArrowDownArrow":"\u21C5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21D5","UpEquilibrium":"\u296E","upharpoonleft":"\u21BF","upharpoonright":"\u21BE","uplus":"\u228E","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03C5","Upsi":"\u03D2","upsih":"\u03D2","Upsilon":"\u03A5","upsilon":"\u03C5","UpTeeArrow":"\u21A5","UpTee":"\u22A5","upuparrows":"\u21C8","urcorn":"\u231D","urcorner":"\u231D","urcrop":"\u230E","Uring":"\u016E","uring":"\u016F","urtri":"\u25F9","Uscr":"\uD835\uDCB0","uscr":"\uD835\uDCCA","utdot":"\u22F0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25B5","utrif":"\u25B4","uuarr":"\u21C8","Uuml":"\u00DC","uuml":"\u00FC","uwangle":"\u29A7","vangrt":"\u299C","varepsilon":"\u03F5","varkappa":"\u03F0","varnothing":"\u2205","varphi":"\u03D5","varpi":"\u03D6","varpropto":"\u221D","varr":"\u2195","vArr":"\u21D5","varrho":"\u03F1","varsigma":"\u03C2","varsubsetneq":"\u228A\uFE00","varsubsetneqq":"\u2ACB\uFE00","varsupsetneq":"\u228B\uFE00","varsupsetneqq":"\u2ACC\uFE00","vartheta":"\u03D1","vartriangleleft":"\u22B2","vartriangleright":"\u22B3","vBar":"\u2AE8","Vbar":"\u2AEB","vBarv":"\u2AE9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22A2","vDash":"\u22A8","Vdash":"\u22A9","VDash":"\u22AB","Vdashl":"\u2AE6","veebar":"\u22BB","vee":"\u2228","Vee":"\u22C1","veeeq":"\u225A","vellip":"\u22EE","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200A","Vfr":"\uD835\uDD19","vfr":"\uD835\uDD33","vltri":"\u22B2","vnsub":"\u2282\u20D2","vnsup":"\u2283\u20D2","Vopf":"\uD835\uDD4D","vopf":"\uD835\uDD67","vprop":"\u221D","vrtri":"\u22B3","Vscr":"\uD835\uDCB1","vscr":"\uD835\uDCCB","vsubnE":"\u2ACB\uFE00","vsubne":"\u228A\uFE00","vsupnE":"\u2ACC\uFE00","vsupne":"\u228B\uFE00","Vvdash":"\u22AA","vzigzag":"\u299A","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2A5F","wedge":"\u2227","Wedge":"\u22C0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\uD835\uDD1A","wfr":"\uD835\uDD34","Wopf":"\uD835\uDD4E","wopf":"\uD835\uDD68","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\uD835\uDCB2","wscr":"\uD835\uDCCC","xcap":"\u22C2","xcirc":"\u25EF","xcup":"\u22C3","xdtri":"\u25BD","Xfr":"\uD835\uDD1B","xfr":"\uD835\uDD35","xharr":"\u27F7","xhArr":"\u27FA","Xi":"\u039E","xi":"\u03BE","xlarr":"\u27F5","xlArr":"\u27F8","xmap":"\u27FC","xnis":"\u22FB","xodot":"\u2A00","Xopf":"\uD835\uDD4F","xopf":"\uD835\uDD69","xoplus":"\u2A01","xotime":"\u2A02","xrarr":"\u27F6","xrArr":"\u27F9","Xscr":"\uD835\uDCB3","xscr":"\uD835\uDCCD","xsqcup":"\u2A06","xuplus":"\u2A04","xutri":"\u25B3","xvee":"\u22C1","xwedge":"\u22C0","Yacute":"\u00DD","yacute":"\u00FD","YAcy":"\u042F","yacy":"\u044F","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042B","ycy":"\u044B","yen":"\u00A5","Yfr":"\uD835\uDD1C","yfr":"\uD835\uDD36","YIcy":"\u0407","yicy":"\u0457","Yopf":"\uD835\uDD50","yopf":"\uD835\uDD6A","Yscr":"\uD835\uDCB4","yscr":"\uD835\uDCCE","YUcy":"\u042E","yucy":"\u044E","yuml":"\u00FF","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017A","Zcaron":"\u017D","zcaron":"\u017E","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017B","zdot":"\u017C","zeetrf":"\u2128","ZeroWidthSpace":"\u200B","Zeta":"\u0396","zeta":"\u03B6","zfr":"\uD835\uDD37","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21DD","zopf":"\uD835\uDD6B","Zopf":"\u2124","Zscr":"\uD835\uDCB5","zscr":"\uD835\uDCCF","zwj":"\u200D","zwnj":"\u200C"}
},{}],26:[function(require,module,exports){
module.exports={"Aacute":"\u00C1","aacute":"\u00E1","Acirc":"\u00C2","acirc":"\u00E2","acute":"\u00B4","AElig":"\u00C6","aelig":"\u00E6","Agrave":"\u00C0","agrave":"\u00E0","amp":"&","AMP":"&","Aring":"\u00C5","aring":"\u00E5","Atilde":"\u00C3","atilde":"\u00E3","Auml":"\u00C4","auml":"\u00E4","brvbar":"\u00A6","Ccedil":"\u00C7","ccedil":"\u00E7","cedil":"\u00B8","cent":"\u00A2","copy":"\u00A9","COPY":"\u00A9","curren":"\u00A4","deg":"\u00B0","divide":"\u00F7","Eacute":"\u00C9","eacute":"\u00E9","Ecirc":"\u00CA","ecirc":"\u00EA","Egrave":"\u00C8","egrave":"\u00E8","ETH":"\u00D0","eth":"\u00F0","Euml":"\u00CB","euml":"\u00EB","frac12":"\u00BD","frac14":"\u00BC","frac34":"\u00BE","gt":">","GT":">","Iacute":"\u00CD","iacute":"\u00ED","Icirc":"\u00CE","icirc":"\u00EE","iexcl":"\u00A1","Igrave":"\u00CC","igrave":"\u00EC","iquest":"\u00BF","Iuml":"\u00CF","iuml":"\u00EF","laquo":"\u00AB","lt":"<","LT":"<","macr":"\u00AF","micro":"\u00B5","middot":"\u00B7","nbsp":"\u00A0","not":"\u00AC","Ntilde":"\u00D1","ntilde":"\u00F1","Oacute":"\u00D3","oacute":"\u00F3","Ocirc":"\u00D4","ocirc":"\u00F4","Ograve":"\u00D2","ograve":"\u00F2","ordf":"\u00AA","ordm":"\u00BA","Oslash":"\u00D8","oslash":"\u00F8","Otilde":"\u00D5","otilde":"\u00F5","Ouml":"\u00D6","ouml":"\u00F6","para":"\u00B6","plusmn":"\u00B1","pound":"\u00A3","quot":"\"","QUOT":"\"","raquo":"\u00BB","reg":"\u00AE","REG":"\u00AE","sect":"\u00A7","shy":"\u00AD","sup1":"\u00B9","sup2":"\u00B2","sup3":"\u00B3","szlig":"\u00DF","THORN":"\u00DE","thorn":"\u00FE","times":"\u00D7","Uacute":"\u00DA","uacute":"\u00FA","Ucirc":"\u00DB","ucirc":"\u00FB","Ugrave":"\u00D9","ugrave":"\u00F9","uml":"\u00A8","Uuml":"\u00DC","uuml":"\u00FC","Yacute":"\u00DD","yacute":"\u00FD","yen":"\u00A5","yuml":"\u00FF"}
},{}],27:[function(require,module,exports){
module.exports={"amp":"&","apos":"'","gt":">","lt":"<","quot":"\""}

},{}],28:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],29:[function(require,module,exports){
module.exports = CollectingHandler;

function CollectingHandler(cbs){
	this._cbs = cbs || {};
	this.events = [];
}

var EVENTS = require("./").EVENTS;
Object.keys(EVENTS).forEach(function(name){
	if(EVENTS[name] === 0){
		name = "on" + name;
		CollectingHandler.prototype[name] = function(){
			this.events.push([name]);
			if(this._cbs[name]) this._cbs[name]();
		};
	} else if(EVENTS[name] === 1){
		name = "on" + name;
		CollectingHandler.prototype[name] = function(a){
			this.events.push([name, a]);
			if(this._cbs[name]) this._cbs[name](a);
		};
	} else if(EVENTS[name] === 2){
		name = "on" + name;
		CollectingHandler.prototype[name] = function(a, b){
			this.events.push([name, a, b]);
			if(this._cbs[name]) this._cbs[name](a, b);
		};
	} else {
		throw Error("wrong number of arguments");
	}
});

CollectingHandler.prototype.onreset = function(){
	this.events = [];
	if(this._cbs.onreset) this._cbs.onreset();
};

CollectingHandler.prototype.restart = function(){
	if(this._cbs.onreset) this._cbs.onreset();

	for(var i = 0, len = this.events.length; i < len; i++){
		if(this._cbs[this.events[i][0]]){

			var num = this.events[i].length;

			if(num === 1){
				this._cbs[this.events[i][0]]();
			} else if(num === 2){
				this._cbs[this.events[i][0]](this.events[i][1]);
			} else {
				this._cbs[this.events[i][0]](this.events[i][1], this.events[i][2]);
			}
		}
	}
};

},{"./":36}],30:[function(require,module,exports){
var index = require("./index.js"),
    DomHandler = index.DomHandler,
    DomUtils = index.DomUtils;

//TODO: make this a streamable handler
function FeedHandler(callback, options){
	this.init(callback, options);
}

require("inherits")(FeedHandler, DomHandler);

FeedHandler.prototype.init = DomHandler;

function getElements(what, where){
	return DomUtils.getElementsByTagName(what, where, true);
}
function getOneElement(what, where){
	return DomUtils.getElementsByTagName(what, where, true, 1)[0];
}
function fetch(what, where, recurse){
	return DomUtils.getText(
		DomUtils.getElementsByTagName(what, where, recurse, 1)
	).trim();
}

function addConditionally(obj, prop, what, where, recurse){
	var tmp = fetch(what, where, recurse);
	if(tmp) obj[prop] = tmp;
}

var isValidFeed = function(value){
	return value === "rss" || value === "feed" || value === "rdf:RDF";
};

FeedHandler.prototype.onend = function(){
	var feed = {},
	    feedRoot = getOneElement(isValidFeed, this.dom),
	    tmp, childs;

	if(feedRoot){
		if(feedRoot.name === "feed"){
			childs = feedRoot.children;

			feed.type = "atom";
			addConditionally(feed, "id", "id", childs);
			addConditionally(feed, "title", "title", childs);
			if((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href)) feed.link = tmp;
			addConditionally(feed, "description", "subtitle", childs);
			if((tmp = fetch("updated", childs))) feed.updated = new Date(tmp);
			addConditionally(feed, "author", "email", childs, true);

			feed.items = getElements("entry", childs).map(function(item){
				var entry = {}, tmp;

				item = item.children;

				addConditionally(entry, "id", "id", item);
				addConditionally(entry, "title", "title", item);
				if((tmp = getOneElement("link", item)) && (tmp = tmp.attribs) && (tmp = tmp.href)) entry.link = tmp;
				if((tmp = fetch("summary", item) || fetch("content", item))) entry.description = tmp;
				if((tmp = fetch("updated", item))) entry.pubDate = new Date(tmp);
				return entry;
			});
		} else {
			childs = getOneElement("channel", feedRoot.children).children;

			feed.type = feedRoot.name.substr(0, 3);
			feed.id = "";
			addConditionally(feed, "title", "title", childs);
			addConditionally(feed, "link", "link", childs);
			addConditionally(feed, "description", "description", childs);
			if((tmp = fetch("lastBuildDate", childs))) feed.updated = new Date(tmp);
			addConditionally(feed, "author", "managingEditor", childs, true);

			feed.items = getElements("item", feedRoot.children).map(function(item){
				var entry = {}, tmp;

				item = item.children;

				addConditionally(entry, "id", "guid", item);
				addConditionally(entry, "title", "title", item);
				addConditionally(entry, "link", "link", item);
				addConditionally(entry, "description", "description", item);
				if((tmp = fetch("pubDate", item))) entry.pubDate = new Date(tmp);
				return entry;
			});
		}
	}
	this.dom = feed;
	DomHandler.prototype._handleCallback.call(
		this, feedRoot ? null : Error("couldn't find root of feed")
	);
};

module.exports = FeedHandler;

},{"./index.js":36,"inherits":38}],31:[function(require,module,exports){
var Tokenizer = require("./Tokenizer.js");

/*
	Options:

	xmlMode: Disables the special behavior for script/style tags (false by default)
	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
*/

/*
	Callbacks:

	oncdataend,
	oncdatastart,
	onclosetag,
	oncomment,
	oncommentend,
	onerror,
	onopentag,
	onprocessinginstruction,
	onreset,
	ontext
*/

var formTags = {
	input: true,
	option: true,
	optgroup: true,
	select: true,
	button: true,
	datalist: true,
	textarea: true
};

var openImpliesClose = {
	tr      : { tr:true, th:true, td:true },
	th      : { th:true },
	td      : { thead:true, th:true, td:true },
	body    : { head:true, link:true, script:true },
	li      : { li:true },
	p       : { p:true },
	h1      : { p:true },
	h2      : { p:true },
	h3      : { p:true },
	h4      : { p:true },
	h5      : { p:true },
	h6      : { p:true },
	select  : formTags,
	input   : formTags,
	output  : formTags,
	button  : formTags,
	datalist: formTags,
	textarea: formTags,
	option  : { option:true },
	optgroup: { optgroup:true }
};

var voidElements = {
	__proto__: null,
	area: true,
	base: true,
	basefont: true,
	br: true,
	col: true,
	command: true,
	embed: true,
	frame: true,
	hr: true,
	img: true,
	input: true,
	isindex: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true,

	//common self closing svg elements
	path: true,
	circle: true,
	ellipse: true,
	line: true,
	rect: true,
	use: true,
	stop: true,
	polyline: true,
	polygon: true
};

var re_nameEnd = /\s|\//;

function Parser(cbs, options){
	this._options = options || {};
	this._cbs = cbs || {};

	this._tagname = "";
	this._attribname = "";
	this._attribvalue = "";
	this._attribs = null;
	this._stack = [];

	this.startIndex = 0;
	this.endIndex = null;

	this._lowerCaseTagNames = "lowerCaseTags" in this._options ?
									!!this._options.lowerCaseTags :
									!this._options.xmlMode;
	this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ?
									!!this._options.lowerCaseAttributeNames :
									!this._options.xmlMode;

	if(this._options.Tokenizer) {
		Tokenizer = this._options.Tokenizer;
	}
	this._tokenizer = new Tokenizer(this._options, this);

	if(this._cbs.onparserinit) this._cbs.onparserinit(this);
}

require("inherits")(Parser, require("events").EventEmitter);

Parser.prototype._updatePosition = function(initialOffset){
	if(this.endIndex === null){
		if(this._tokenizer._sectionStart <= initialOffset){
			this.startIndex = 0;
		} else {
			this.startIndex = this._tokenizer._sectionStart - initialOffset;
		}
	}
	else this.startIndex = this.endIndex + 1;
	this.endIndex = this._tokenizer.getAbsoluteIndex();
};

//Tokenizer event handlers
Parser.prototype.ontext = function(data){
	this._updatePosition(1);
	this.endIndex--;

	if(this._cbs.ontext) this._cbs.ontext(data);
};

Parser.prototype.onopentagname = function(name){
	if(this._lowerCaseTagNames){
		name = name.toLowerCase();
	}

	this._tagname = name;

	if(!this._options.xmlMode && name in openImpliesClose) {
		for(
			var el;
			(el = this._stack[this._stack.length - 1]) in openImpliesClose[name];
			this.onclosetag(el)
		);
	}

	if(this._options.xmlMode || !(name in voidElements)){
		this._stack.push(name);
	}

	if(this._cbs.onopentagname) this._cbs.onopentagname(name);
	if(this._cbs.onopentag) this._attribs = {};
};

Parser.prototype.onopentagend = function(){
	this._updatePosition(1);

	if(this._attribs){
		if(this._cbs.onopentag) this._cbs.onopentag(this._tagname, this._attribs);
		this._attribs = null;
	}

	if(!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements){
		this._cbs.onclosetag(this._tagname);
	}

	this._tagname = "";
};

Parser.prototype.onclosetag = function(name){
	this._updatePosition(1);

	if(this._lowerCaseTagNames){
		name = name.toLowerCase();
	}

	if(this._stack.length && (!(name in voidElements) || this._options.xmlMode)){
		var pos = this._stack.lastIndexOf(name);
		if(pos !== -1){
			if(this._cbs.onclosetag){
				pos = this._stack.length - pos;
				while(pos--) this._cbs.onclosetag(this._stack.pop());
			}
			else this._stack.length = pos;
		} else if(name === "p" && !this._options.xmlMode){
			this.onopentagname(name);
			this._closeCurrentTag();
		}
	} else if(!this._options.xmlMode && (name === "br" || name === "p")){
		this.onopentagname(name);
		this._closeCurrentTag();
	}
};

Parser.prototype.onselfclosingtag = function(){
	if(this._options.xmlMode || this._options.recognizeSelfClosing){
		this._closeCurrentTag();
	} else {
		this.onopentagend();
	}
};

Parser.prototype._closeCurrentTag = function(){
	var name = this._tagname;

	this.onopentagend();

	//self-closing tags will be on the top of the stack
	//(cheaper check than in onclosetag)
	if(this._stack[this._stack.length - 1] === name){
		if(this._cbs.onclosetag){
			this._cbs.onclosetag(name);
		}
		this._stack.pop();
	}
};

Parser.prototype.onattribname = function(name){
	if(this._lowerCaseAttributeNames){
		name = name.toLowerCase();
	}
	this._attribname = name;
};

Parser.prototype.onattribdata = function(value){
	this._attribvalue += value;
};

Parser.prototype.onattribend = function(){
	if(this._cbs.onattribute) this._cbs.onattribute(this._attribname, this._attribvalue);
	if(
		this._attribs &&
		!Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
	){
		this._attribs[this._attribname] = this._attribvalue;
	}
	this._attribname = "";
	this._attribvalue = "";
};

Parser.prototype._getInstructionName = function(value){
	var idx = value.search(re_nameEnd),
	    name = idx < 0 ? value : value.substr(0, idx);

	if(this._lowerCaseTagNames){
		name = name.toLowerCase();
	}

	return name;
};

Parser.prototype.ondeclaration = function(value){
	if(this._cbs.onprocessinginstruction){
		var name = this._getInstructionName(value);
		this._cbs.onprocessinginstruction("!" + name, "!" + value);
	}
};

Parser.prototype.onprocessinginstruction = function(value){
	if(this._cbs.onprocessinginstruction){
		var name = this._getInstructionName(value);
		this._cbs.onprocessinginstruction("?" + name, "?" + value);
	}
};

Parser.prototype.oncomment = function(value){
	this._updatePosition(4);

	if(this._cbs.oncomment) this._cbs.oncomment(value);
	if(this._cbs.oncommentend) this._cbs.oncommentend();
};

Parser.prototype.oncdata = function(value){
	this._updatePosition(1);

	if(this._options.xmlMode || this._options.recognizeCDATA){
		if(this._cbs.oncdatastart) this._cbs.oncdatastart();
		if(this._cbs.ontext) this._cbs.ontext(value);
		if(this._cbs.oncdataend) this._cbs.oncdataend();
	} else {
		this.oncomment("[CDATA[" + value + "]]");
	}
};

Parser.prototype.onerror = function(err){
	if(this._cbs.onerror) this._cbs.onerror(err);
};

Parser.prototype.onend = function(){
	if(this._cbs.onclosetag){
		for(
			var i = this._stack.length;
			i > 0;
			this._cbs.onclosetag(this._stack[--i])
		);
	}
	if(this._cbs.onend) this._cbs.onend();
};


//Resets the parser to a blank state, ready to parse a new HTML document
Parser.prototype.reset = function(){
	if(this._cbs.onreset) this._cbs.onreset();
	this._tokenizer.reset();

	this._tagname = "";
	this._attribname = "";
	this._attribs = null;
	this._stack = [];

	if(this._cbs.onparserinit) this._cbs.onparserinit(this);
};

//Parses a complete HTML document and pushes it to the handler
Parser.prototype.parseComplete = function(data){
	this.reset();
	this.end(data);
};

Parser.prototype.write = function(chunk){
	this._tokenizer.write(chunk);
};

Parser.prototype.end = function(chunk){
	this._tokenizer.end(chunk);
};

Parser.prototype.pause = function(){
	this._tokenizer.pause();
};

Parser.prototype.resume = function(){
	this._tokenizer.resume();
};

//alias for backwards compat
Parser.prototype.parseChunk = Parser.prototype.write;
Parser.prototype.done = Parser.prototype.end;

module.exports = Parser;

},{"./Tokenizer.js":34,"events":28,"inherits":38}],32:[function(require,module,exports){
module.exports = ProxyHandler;

function ProxyHandler(cbs){
	this._cbs = cbs || {};
}

var EVENTS = require("./").EVENTS;
Object.keys(EVENTS).forEach(function(name){
	if(EVENTS[name] === 0){
		name = "on" + name;
		ProxyHandler.prototype[name] = function(){
			if(this._cbs[name]) this._cbs[name]();
		};
	} else if(EVENTS[name] === 1){
		name = "on" + name;
		ProxyHandler.prototype[name] = function(a){
			if(this._cbs[name]) this._cbs[name](a);
		};
	} else if(EVENTS[name] === 2){
		name = "on" + name;
		ProxyHandler.prototype[name] = function(a, b){
			if(this._cbs[name]) this._cbs[name](a, b);
		};
	} else {
		throw Error("wrong number of arguments");
	}
});
},{"./":36}],33:[function(require,module,exports){
module.exports = Stream;

var Parser = require("./WritableStream.js");

function Stream(options){
	Parser.call(this, new Cbs(this), options);
}

require("inherits")(Stream, Parser);

Stream.prototype.readable = true;

function Cbs(scope){
	this.scope = scope;
}

var EVENTS = require("../").EVENTS;

Object.keys(EVENTS).forEach(function(name){
	if(EVENTS[name] === 0){
		Cbs.prototype["on" + name] = function(){
			this.scope.emit(name);
		};
	} else if(EVENTS[name] === 1){
		Cbs.prototype["on" + name] = function(a){
			this.scope.emit(name, a);
		};
	} else if(EVENTS[name] === 2){
		Cbs.prototype["on" + name] = function(a, b){
			this.scope.emit(name, a, b);
		};
	} else {
		throw Error("wrong number of arguments!");
	}
});
},{"../":36,"./WritableStream.js":35,"inherits":38}],34:[function(require,module,exports){
module.exports = Tokenizer;

var decodeCodePoint = require("entities/lib/decode_codepoint.js"),
    entityMap = require("entities/maps/entities.json"),
    legacyMap = require("entities/maps/legacy.json"),
    xmlMap    = require("entities/maps/xml.json"),

    i = 0,

    TEXT                      = i++,
    BEFORE_TAG_NAME           = i++, //after <
    IN_TAG_NAME               = i++,
    IN_SELF_CLOSING_TAG       = i++,
    BEFORE_CLOSING_TAG_NAME   = i++,
    IN_CLOSING_TAG_NAME       = i++,
    AFTER_CLOSING_TAG_NAME    = i++,

    //attributes
    BEFORE_ATTRIBUTE_NAME     = i++,
    IN_ATTRIBUTE_NAME         = i++,
    AFTER_ATTRIBUTE_NAME      = i++,
    BEFORE_ATTRIBUTE_VALUE    = i++,
    IN_ATTRIBUTE_VALUE_DQ     = i++, // "
    IN_ATTRIBUTE_VALUE_SQ     = i++, // '
    IN_ATTRIBUTE_VALUE_NQ     = i++,

    //declarations
    BEFORE_DECLARATION        = i++, // !
    IN_DECLARATION            = i++,

    //processing instructions
    IN_PROCESSING_INSTRUCTION = i++, // ?

    //comments
    BEFORE_COMMENT            = i++,
    IN_COMMENT                = i++,
    AFTER_COMMENT_1           = i++,
    AFTER_COMMENT_2           = i++,

    //cdata
    BEFORE_CDATA_1            = i++, // [
    BEFORE_CDATA_2            = i++, // C
    BEFORE_CDATA_3            = i++, // D
    BEFORE_CDATA_4            = i++, // A
    BEFORE_CDATA_5            = i++, // T
    BEFORE_CDATA_6            = i++, // A
    IN_CDATA                  = i++, // [
    AFTER_CDATA_1             = i++, // ]
    AFTER_CDATA_2             = i++, // ]

    //special tags
    BEFORE_SPECIAL            = i++, //S
    BEFORE_SPECIAL_END        = i++,   //S

    BEFORE_SCRIPT_1           = i++, //C
    BEFORE_SCRIPT_2           = i++, //R
    BEFORE_SCRIPT_3           = i++, //I
    BEFORE_SCRIPT_4           = i++, //P
    BEFORE_SCRIPT_5           = i++, //T
    AFTER_SCRIPT_1            = i++, //C
    AFTER_SCRIPT_2            = i++, //R
    AFTER_SCRIPT_3            = i++, //I
    AFTER_SCRIPT_4            = i++, //P
    AFTER_SCRIPT_5            = i++, //T

    BEFORE_STYLE_1            = i++, //T
    BEFORE_STYLE_2            = i++, //Y
    BEFORE_STYLE_3            = i++, //L
    BEFORE_STYLE_4            = i++, //E
    AFTER_STYLE_1             = i++, //T
    AFTER_STYLE_2             = i++, //Y
    AFTER_STYLE_3             = i++, //L
    AFTER_STYLE_4             = i++, //E

    BEFORE_ENTITY             = i++, //&
    BEFORE_NUMERIC_ENTITY     = i++, //#
    IN_NAMED_ENTITY           = i++,
    IN_NUMERIC_ENTITY         = i++,
    IN_HEX_ENTITY             = i++, //X

    j = 0,

    SPECIAL_NONE              = j++,
    SPECIAL_SCRIPT            = j++,
    SPECIAL_STYLE             = j++;

function whitespace(c){
	return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
}

function characterState(char, SUCCESS){
	return function(c){
		if(c === char) this._state = SUCCESS;
	};
}

function ifElseState(upper, SUCCESS, FAILURE){
	var lower = upper.toLowerCase();

	if(upper === lower){
		return function(c){
			if(c === lower){
				this._state = SUCCESS;
			} else {
				this._state = FAILURE;
				this._index--;
			}
		};
	} else {
		return function(c){
			if(c === lower || c === upper){
				this._state = SUCCESS;
			} else {
				this._state = FAILURE;
				this._index--;
			}
		};
	}
}

function consumeSpecialNameChar(upper, NEXT_STATE){
	var lower = upper.toLowerCase();

	return function(c){
		if(c === lower || c === upper){
			this._state = NEXT_STATE;
		} else {
			this._state = IN_TAG_NAME;
			this._index--; //consume the token again
		}
	};
}

function Tokenizer(options, cbs){
	this._state = TEXT;
	this._buffer = "";
	this._sectionStart = 0;
	this._index = 0;
	this._bufferOffset = 0; //chars removed from _buffer
	this._baseState = TEXT;
	this._special = SPECIAL_NONE;
	this._cbs = cbs;
	this._running = true;
	this._ended = false;
	this._xmlMode = !!(options && options.xmlMode);
	this._decodeEntities = !!(options && options.decodeEntities);
}

Tokenizer.prototype._stateText = function(c){
	if(c === "<"){
		if(this._index > this._sectionStart){
			this._cbs.ontext(this._getSection());
		}
		this._state = BEFORE_TAG_NAME;
		this._sectionStart = this._index;
	} else if(this._decodeEntities && this._special === SPECIAL_NONE && c === "&"){
		if(this._index > this._sectionStart){
			this._cbs.ontext(this._getSection());
		}
		this._baseState = TEXT;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateBeforeTagName = function(c){
	if(c === "/"){
		this._state = BEFORE_CLOSING_TAG_NAME;
	} else if(c === "<"){
		this._cbs.ontext(this._getSection());
		this._sectionStart = this._index;
	} else if(c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
		this._state = TEXT;
	} else if(c === "!"){
		this._state = BEFORE_DECLARATION;
		this._sectionStart = this._index + 1;
	} else if(c === "?"){
		this._state = IN_PROCESSING_INSTRUCTION;
		this._sectionStart = this._index + 1;
	} else {
		this._state = (!this._xmlMode && (c === "s" || c === "S")) ?
						BEFORE_SPECIAL : IN_TAG_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInTagName = function(c){
	if(c === "/" || c === ">" || whitespace(c)){
		this._emitToken("onopentagname");
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateBeforeCloseingTagName = function(c){
	if(whitespace(c));
	else if(c === ">"){
		this._state = TEXT;
	} else if(this._special !== SPECIAL_NONE){
		if(c === "s" || c === "S"){
			this._state = BEFORE_SPECIAL_END;
		} else {
			this._state = TEXT;
			this._index--;
		}
	} else {
		this._state = IN_CLOSING_TAG_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInCloseingTagName = function(c){
	if(c === ">" || whitespace(c)){
		this._emitToken("onclosetag");
		this._state = AFTER_CLOSING_TAG_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateAfterCloseingTagName = function(c){
	//skip everything until ">"
	if(c === ">"){
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	}
};

Tokenizer.prototype._stateBeforeAttributeName = function(c){
	if(c === ">"){
		this._cbs.onopentagend();
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(c === "/"){
		this._state = IN_SELF_CLOSING_TAG;
	} else if(!whitespace(c)){
		this._state = IN_ATTRIBUTE_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInSelfClosingTag = function(c){
	if(c === ">"){
		this._cbs.onselfclosingtag();
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(!whitespace(c)){
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateInAttributeName = function(c){
	if(c === "=" || c === "/" || c === ">" || whitespace(c)){
		this._cbs.onattribname(this._getSection());
		this._sectionStart = -1;
		this._state = AFTER_ATTRIBUTE_NAME;
		this._index--;
	}
};

Tokenizer.prototype._stateAfterAttributeName = function(c){
	if(c === "="){
		this._state = BEFORE_ATTRIBUTE_VALUE;
	} else if(c === "/" || c === ">"){
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	} else if(!whitespace(c)){
		this._cbs.onattribend();
		this._state = IN_ATTRIBUTE_NAME;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateBeforeAttributeValue = function(c){
	if(c === "\""){
		this._state = IN_ATTRIBUTE_VALUE_DQ;
		this._sectionStart = this._index + 1;
	} else if(c === "'"){
		this._state = IN_ATTRIBUTE_VALUE_SQ;
		this._sectionStart = this._index + 1;
	} else if(!whitespace(c)){
		this._state = IN_ATTRIBUTE_VALUE_NQ;
		this._sectionStart = this._index;
		this._index--; //reconsume token
	}
};

Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c){
	if(c === "\""){
		this._emitToken("onattribdata");
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
	} else if(this._decodeEntities && c === "&"){
		this._emitToken("onattribdata");
		this._baseState = this._state;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c){
	if(c === "'"){
		this._emitToken("onattribdata");
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
	} else if(this._decodeEntities && c === "&"){
		this._emitToken("onattribdata");
		this._baseState = this._state;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c){
	if(whitespace(c) || c === ">"){
		this._emitToken("onattribdata");
		this._cbs.onattribend();
		this._state = BEFORE_ATTRIBUTE_NAME;
		this._index--;
	} else if(this._decodeEntities && c === "&"){
		this._emitToken("onattribdata");
		this._baseState = this._state;
		this._state = BEFORE_ENTITY;
		this._sectionStart = this._index;
	}
};

Tokenizer.prototype._stateBeforeDeclaration = function(c){
	this._state = c === "[" ? BEFORE_CDATA_1 :
					c === "-" ? BEFORE_COMMENT :
						IN_DECLARATION;
};

Tokenizer.prototype._stateInDeclaration = function(c){
	if(c === ">"){
		this._cbs.ondeclaration(this._getSection());
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	}
};

Tokenizer.prototype._stateInProcessingInstruction = function(c){
	if(c === ">"){
		this._cbs.onprocessinginstruction(this._getSection());
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	}
};

Tokenizer.prototype._stateBeforeComment = function(c){
	if(c === "-"){
		this._state = IN_COMMENT;
		this._sectionStart = this._index + 1;
	} else {
		this._state = IN_DECLARATION;
	}
};

Tokenizer.prototype._stateInComment = function(c){
	if(c === "-") this._state = AFTER_COMMENT_1;
};

Tokenizer.prototype._stateAfterComment1 = function(c){
	if(c === "-"){
		this._state = AFTER_COMMENT_2;
	} else {
		this._state = IN_COMMENT;
	}
};

Tokenizer.prototype._stateAfterComment2 = function(c){
	if(c === ">"){
		//remove 2 trailing chars
		this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(c !== "-"){
		this._state = IN_COMMENT;
	}
	// else: stay in AFTER_COMMENT_2 (`--->`)
};

Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);

Tokenizer.prototype._stateBeforeCdata6 = function(c){
	if(c === "["){
		this._state = IN_CDATA;
		this._sectionStart = this._index + 1;
	} else {
		this._state = IN_DECLARATION;
		this._index--;
	}
};

Tokenizer.prototype._stateInCdata = function(c){
	if(c === "]") this._state = AFTER_CDATA_1;
};

Tokenizer.prototype._stateAfterCdata1 = characterState("]", AFTER_CDATA_2);

Tokenizer.prototype._stateAfterCdata2 = function(c){
	if(c === ">"){
		//remove 2 trailing chars
		this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));
		this._state = TEXT;
		this._sectionStart = this._index + 1;
	} else if(c !== "]") {
		this._state = IN_CDATA;
	}
	//else: stay in AFTER_CDATA_2 (`]]]>`)
};

Tokenizer.prototype._stateBeforeSpecial = function(c){
	if(c === "c" || c === "C"){
		this._state = BEFORE_SCRIPT_1;
	} else if(c === "t" || c === "T"){
		this._state = BEFORE_STYLE_1;
	} else {
		this._state = IN_TAG_NAME;
		this._index--; //consume the token again
	}
};

Tokenizer.prototype._stateBeforeSpecialEnd = function(c){
	if(this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")){
		this._state = AFTER_SCRIPT_1;
	} else if(this._special === SPECIAL_STYLE && (c === "t" || c === "T")){
		this._state = AFTER_STYLE_1;
	}
	else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);

Tokenizer.prototype._stateBeforeScript5 = function(c){
	if(c === "/" || c === ">" || whitespace(c)){
		this._special = SPECIAL_SCRIPT;
	}
	this._state = IN_TAG_NAME;
	this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

Tokenizer.prototype._stateAfterScript5 = function(c){
	if(c === ">" || whitespace(c)){
		this._special = SPECIAL_NONE;
		this._state = IN_CLOSING_TAG_NAME;
		this._sectionStart = this._index - 6;
		this._index--; //reconsume the token
	}
	else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);

Tokenizer.prototype._stateBeforeStyle4 = function(c){
	if(c === "/" || c === ">" || whitespace(c)){
		this._special = SPECIAL_STYLE;
	}
	this._state = IN_TAG_NAME;
	this._index--; //consume the token again
};

Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

Tokenizer.prototype._stateAfterStyle4 = function(c){
	if(c === ">" || whitespace(c)){
		this._special = SPECIAL_NONE;
		this._state = IN_CLOSING_TAG_NAME;
		this._sectionStart = this._index - 5;
		this._index--; //reconsume the token
	}
	else this._state = TEXT;
};

Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY);

//for entities terminated with a semicolon
Tokenizer.prototype._parseNamedEntityStrict = function(){
	//offset = 1
	if(this._sectionStart + 1 < this._index){
		var entity = this._buffer.substring(this._sectionStart + 1, this._index),
		    map = this._xmlMode ? xmlMap : entityMap;

		if(map.hasOwnProperty(entity)){
			this._emitPartial(map[entity]);
			this._sectionStart = this._index + 1;
		}
	}
};


//parses legacy entities (without trailing semicolon)
Tokenizer.prototype._parseLegacyEntity = function(){
	var start = this._sectionStart + 1,
	    limit = this._index - start;

	if(limit > 6) limit = 6; //the max length of legacy entities is 6

	while(limit >= 2){ //the min length of legacy entities is 2
		var entity = this._buffer.substr(start, limit);

		if(legacyMap.hasOwnProperty(entity)){
			this._emitPartial(legacyMap[entity]);
			this._sectionStart += limit + 1;
			return;
		} else {
			limit--;
		}
	}
};

Tokenizer.prototype._stateInNamedEntity = function(c){
	if(c === ";"){
		this._parseNamedEntityStrict();
		if(this._sectionStart + 1 < this._index && !this._xmlMode){
			this._parseLegacyEntity();
		}
		this._state = this._baseState;
	} else if((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")){
		if(this._xmlMode);
		else if(this._sectionStart + 1 === this._index);
		else if(this._baseState !== TEXT){
			if(c !== "="){
				this._parseNamedEntityStrict();
			}
		} else {
			this._parseLegacyEntity();
		}

		this._state = this._baseState;
		this._index--;
	}
};

Tokenizer.prototype._decodeNumericEntity = function(offset, base){
	var sectionStart = this._sectionStart + offset;

	if(sectionStart !== this._index){
		//parse entity
		var entity = this._buffer.substring(sectionStart, this._index);
		var parsed = parseInt(entity, base);

		this._emitPartial(decodeCodePoint(parsed));
		this._sectionStart = this._index;
	} else {
		this._sectionStart--;
	}

	this._state = this._baseState;
};

Tokenizer.prototype._stateInNumericEntity = function(c){
	if(c === ";"){
		this._decodeNumericEntity(2, 10);
		this._sectionStart++;
	} else if(c < "0" || c > "9"){
		if(!this._xmlMode){
			this._decodeNumericEntity(2, 10);
		} else {
			this._state = this._baseState;
		}
		this._index--;
	}
};

Tokenizer.prototype._stateInHexEntity = function(c){
	if(c === ";"){
		this._decodeNumericEntity(3, 16);
		this._sectionStart++;
	} else if((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")){
		if(!this._xmlMode){
			this._decodeNumericEntity(3, 16);
		} else {
			this._state = this._baseState;
		}
		this._index--;
	}
};

Tokenizer.prototype._cleanup = function (){
	if(this._sectionStart < 0){
		this._buffer = "";
		this._index = 0;
		this._bufferOffset += this._index;
	} else if(this._running){
		if(this._state === TEXT){
			if(this._sectionStart !== this._index){
				this._cbs.ontext(this._buffer.substr(this._sectionStart));
			}
			this._buffer = "";
			this._bufferOffset += this._index;
			this._index = 0;
		} else if(this._sectionStart === this._index){
			//the section just started
			this._buffer = "";
			this._bufferOffset += this._index;
			this._index = 0;
		} else {
			//remove everything unnecessary
			this._buffer = this._buffer.substr(this._sectionStart);
			this._index -= this._sectionStart;
			this._bufferOffset += this._sectionStart;
		}

		this._sectionStart = 0;
	}
};

//TODO make events conditional
Tokenizer.prototype.write = function(chunk){
	if(this._ended) this._cbs.onerror(Error(".write() after done!"));

	this._buffer += chunk;
	this._parse();
};

Tokenizer.prototype._parse = function(){
	while(this._index < this._buffer.length && this._running){
		var c = this._buffer.charAt(this._index);
		if(this._state === TEXT) {
			this._stateText(c);
		} else if(this._state === BEFORE_TAG_NAME){
			this._stateBeforeTagName(c);
		} else if(this._state === IN_TAG_NAME) {
			this._stateInTagName(c);
		} else if(this._state === BEFORE_CLOSING_TAG_NAME){
			this._stateBeforeCloseingTagName(c);
		} else if(this._state === IN_CLOSING_TAG_NAME){
			this._stateInCloseingTagName(c);
		} else if(this._state === AFTER_CLOSING_TAG_NAME){
			this._stateAfterCloseingTagName(c);
		} else if(this._state === IN_SELF_CLOSING_TAG){
			this._stateInSelfClosingTag(c);
		}

		/*
		*	attributes
		*/
		else if(this._state === BEFORE_ATTRIBUTE_NAME){
			this._stateBeforeAttributeName(c);
		} else if(this._state === IN_ATTRIBUTE_NAME){
			this._stateInAttributeName(c);
		} else if(this._state === AFTER_ATTRIBUTE_NAME){
			this._stateAfterAttributeName(c);
		} else if(this._state === BEFORE_ATTRIBUTE_VALUE){
			this._stateBeforeAttributeValue(c);
		} else if(this._state === IN_ATTRIBUTE_VALUE_DQ){
			this._stateInAttributeValueDoubleQuotes(c);
		} else if(this._state === IN_ATTRIBUTE_VALUE_SQ){
			this._stateInAttributeValueSingleQuotes(c);
		} else if(this._state === IN_ATTRIBUTE_VALUE_NQ){
			this._stateInAttributeValueNoQuotes(c);
		}

		/*
		*	declarations
		*/
		else if(this._state === BEFORE_DECLARATION){
			this._stateBeforeDeclaration(c);
		} else if(this._state === IN_DECLARATION){
			this._stateInDeclaration(c);
		}

		/*
		*	processing instructions
		*/
		else if(this._state === IN_PROCESSING_INSTRUCTION){
			this._stateInProcessingInstruction(c);
		}

		/*
		*	comments
		*/
		else if(this._state === BEFORE_COMMENT){
			this._stateBeforeComment(c);
		} else if(this._state === IN_COMMENT){
			this._stateInComment(c);
		} else if(this._state === AFTER_COMMENT_1){
			this._stateAfterComment1(c);
		} else if(this._state === AFTER_COMMENT_2){
			this._stateAfterComment2(c);
		}

		/*
		*	cdata
		*/
		else if(this._state === BEFORE_CDATA_1){
			this._stateBeforeCdata1(c);
		} else if(this._state === BEFORE_CDATA_2){
			this._stateBeforeCdata2(c);
		} else if(this._state === BEFORE_CDATA_3){
			this._stateBeforeCdata3(c);
		} else if(this._state === BEFORE_CDATA_4){
			this._stateBeforeCdata4(c);
		} else if(this._state === BEFORE_CDATA_5){
			this._stateBeforeCdata5(c);
		} else if(this._state === BEFORE_CDATA_6){
			this._stateBeforeCdata6(c);
		} else if(this._state === IN_CDATA){
			this._stateInCdata(c);
		} else if(this._state === AFTER_CDATA_1){
			this._stateAfterCdata1(c);
		} else if(this._state === AFTER_CDATA_2){
			this._stateAfterCdata2(c);
		}

		/*
		* special tags
		*/
		else if(this._state === BEFORE_SPECIAL){
			this._stateBeforeSpecial(c);
		} else if(this._state === BEFORE_SPECIAL_END){
			this._stateBeforeSpecialEnd(c);
		}

		/*
		* script
		*/
		else if(this._state === BEFORE_SCRIPT_1){
			this._stateBeforeScript1(c);
		} else if(this._state === BEFORE_SCRIPT_2){
			this._stateBeforeScript2(c);
		} else if(this._state === BEFORE_SCRIPT_3){
			this._stateBeforeScript3(c);
		} else if(this._state === BEFORE_SCRIPT_4){
			this._stateBeforeScript4(c);
		} else if(this._state === BEFORE_SCRIPT_5){
			this._stateBeforeScript5(c);
		}

		else if(this._state === AFTER_SCRIPT_1){
			this._stateAfterScript1(c);
		} else if(this._state === AFTER_SCRIPT_2){
			this._stateAfterScript2(c);
		} else if(this._state === AFTER_SCRIPT_3){
			this._stateAfterScript3(c);
		} else if(this._state === AFTER_SCRIPT_4){
			this._stateAfterScript4(c);
		} else if(this._state === AFTER_SCRIPT_5){
			this._stateAfterScript5(c);
		}

		/*
		* style
		*/
		else if(this._state === BEFORE_STYLE_1){
			this._stateBeforeStyle1(c);
		} else if(this._state === BEFORE_STYLE_2){
			this._stateBeforeStyle2(c);
		} else if(this._state === BEFORE_STYLE_3){
			this._stateBeforeStyle3(c);
		} else if(this._state === BEFORE_STYLE_4){
			this._stateBeforeStyle4(c);
		}

		else if(this._state === AFTER_STYLE_1){
			this._stateAfterStyle1(c);
		} else if(this._state === AFTER_STYLE_2){
			this._stateAfterStyle2(c);
		} else if(this._state === AFTER_STYLE_3){
			this._stateAfterStyle3(c);
		} else if(this._state === AFTER_STYLE_4){
			this._stateAfterStyle4(c);
		}

		/*
		* entities
		*/
		else if(this._state === BEFORE_ENTITY){
			this._stateBeforeEntity(c);
		} else if(this._state === BEFORE_NUMERIC_ENTITY){
			this._stateBeforeNumericEntity(c);
		} else if(this._state === IN_NAMED_ENTITY){
			this._stateInNamedEntity(c);
		} else if(this._state === IN_NUMERIC_ENTITY){
			this._stateInNumericEntity(c);
		} else if(this._state === IN_HEX_ENTITY){
			this._stateInHexEntity(c);
		}

		else {
			this._cbs.onerror(Error("unknown _state"), this._state);
		}

		this._index++;
	}

	this._cleanup();
};

Tokenizer.prototype.pause = function(){
	this._running = false;
};
Tokenizer.prototype.resume = function(){
	this._running = true;

	if(this._index < this._buffer.length){
		this._parse();
	}
	if(this._ended){
		this._finish();
	}
};

Tokenizer.prototype.end = function(chunk){
	if(this._ended) this._cbs.onerror(Error(".end() after done!"));
	if(chunk) this.write(chunk);

	this._ended = true;

	if(this._running) this._finish();
};

Tokenizer.prototype._finish = function(){
	//if there is remaining data, emit it in a reasonable way
	if(this._sectionStart < this._index){
		this._handleTrailingData();
	}

	this._cbs.onend();
};

Tokenizer.prototype._handleTrailingData = function(){
	var data = this._buffer.substr(this._sectionStart);

	if(this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2){
		this._cbs.oncdata(data);
	} else if(this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2){
		this._cbs.oncomment(data);
	} else if(this._state === IN_NAMED_ENTITY && !this._xmlMode){
		this._parseLegacyEntity();
		if(this._sectionStart < this._index){
			this._state = this._baseState;
			this._handleTrailingData();
		}
	} else if(this._state === IN_NUMERIC_ENTITY && !this._xmlMode){
		this._decodeNumericEntity(2, 10);
		if(this._sectionStart < this._index){
			this._state = this._baseState;
			this._handleTrailingData();
		}
	} else if(this._state === IN_HEX_ENTITY && !this._xmlMode){
		this._decodeNumericEntity(3, 16);
		if(this._sectionStart < this._index){
			this._state = this._baseState;
			this._handleTrailingData();
		}
	} else if(
		this._state !== IN_TAG_NAME &&
		this._state !== BEFORE_ATTRIBUTE_NAME &&
		this._state !== BEFORE_ATTRIBUTE_VALUE &&
		this._state !== AFTER_ATTRIBUTE_NAME &&
		this._state !== IN_ATTRIBUTE_NAME &&
		this._state !== IN_ATTRIBUTE_VALUE_SQ &&
		this._state !== IN_ATTRIBUTE_VALUE_DQ &&
		this._state !== IN_ATTRIBUTE_VALUE_NQ &&
		this._state !== IN_CLOSING_TAG_NAME
	){
		this._cbs.ontext(data);
	}
	//else, ignore remaining data
	//TODO add a way to remove current tag
};

Tokenizer.prototype.reset = function(){
	Tokenizer.call(this, {xmlMode: this._xmlMode, decodeEntities: this._decodeEntities}, this._cbs);
};

Tokenizer.prototype.getAbsoluteIndex = function(){
	return this._bufferOffset + this._index;
};

Tokenizer.prototype._getSection = function(){
	return this._buffer.substring(this._sectionStart, this._index);
};

Tokenizer.prototype._emitToken = function(name){
	this._cbs[name](this._getSection());
	this._sectionStart = -1;
};

Tokenizer.prototype._emitPartial = function(value){
	if(this._baseState !== TEXT){
		this._cbs.onattribdata(value); //TODO implement the new event
	} else {
		this._cbs.ontext(value);
	}
};

},{"entities/lib/decode_codepoint.js":22,"entities/maps/entities.json":25,"entities/maps/legacy.json":26,"entities/maps/xml.json":27}],35:[function(require,module,exports){
module.exports = Stream;

var Parser = require("./Parser.js"),
    WritableStream = require("stream").Writable || require("readable-stream").Writable,
    StringDecoder = require("string_decoder").StringDecoder,
    Buffer = require("buffer").Buffer;

function Stream(cbs, options){
	var parser = this._parser = new Parser(cbs, options);
	var decoder = this._decoder = new StringDecoder();

	WritableStream.call(this, {decodeStrings: false});

	this.once("finish", function(){
		parser.end(decoder.end());
	});
}

require("inherits")(Stream, WritableStream);

WritableStream.prototype._write = function(chunk, encoding, cb){
	if(chunk instanceof Buffer) chunk = this._decoder.write(chunk);
	this._parser.write(chunk);
	cb();
};
},{"./Parser.js":31,"buffer":5,"inherits":38,"readable-stream":3,"stream":55,"string_decoder":56}],36:[function(require,module,exports){
var Parser = require("./Parser.js"),
    DomHandler = require("domhandler");

function defineProp(name, value){
	delete module.exports[name];
	module.exports[name] = value;
	return value;
}

module.exports = {
	Parser: Parser,
	Tokenizer: require("./Tokenizer.js"),
	ElementType: require("domelementtype"),
	DomHandler: DomHandler,
	get FeedHandler(){
		return defineProp("FeedHandler", require("./FeedHandler.js"));
	},
	get Stream(){
		return defineProp("Stream", require("./Stream.js"));
	},
	get WritableStream(){
		return defineProp("WritableStream", require("./WritableStream.js"));
	},
	get ProxyHandler(){
		return defineProp("ProxyHandler", require("./ProxyHandler.js"));
	},
	get DomUtils(){
		return defineProp("DomUtils", require("domutils"));
	},
	get CollectingHandler(){
		return defineProp("CollectingHandler", require("./CollectingHandler.js"));
	},
	// For legacy support
	DefaultHandler: DomHandler,
	get RssHandler(){
		return defineProp("RssHandler", this.FeedHandler);
	},
	//helper methods
	parseDOM: function(data, options){
		var handler = new DomHandler(options);
		new Parser(handler, options).end(data);
		return handler.dom;
	},
	parseFeed: function(feed, options){
		var handler = new module.exports.FeedHandler(options);
		new Parser(handler, options).end(feed);
		return handler.dom;
	},
	createDomStream: function(cb, options, elementCb){
		var handler = new DomHandler(cb, options, elementCb);
		return new Parser(handler, options);
	},
	// List of all events that the parser emits
	EVENTS: { /* Format: eventname: number of arguments */
		attribute: 2,
		cdatastart: 0,
		cdataend: 0,
		text: 1,
		processinginstruction: 2,
		comment: 1,
		commentend: 0,
		closetag: 1,
		opentag: 2,
		opentagname: 1,
		error: 1,
		end: 0
	}
};

},{"./CollectingHandler.js":29,"./FeedHandler.js":30,"./Parser.js":31,"./ProxyHandler.js":32,"./Stream.js":33,"./Tokenizer.js":34,"./WritableStream.js":35,"domelementtype":9,"domhandler":10,"domutils":13}],37:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],38:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],39:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],40:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],41:[function(require,module,exports){
(function (process){
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

}).call(this,require('_process'))
},{"_process":42}],42:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],43:[function(require,module,exports){
module.exports = require("./lib/_stream_duplex.js")

},{"./lib/_stream_duplex.js":44}],44:[function(require,module,exports){
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
},{"./_stream_readable":46,"./_stream_writable":48,"core-util-is":6,"inherits":38,"process-nextick-args":41}],45:[function(require,module,exports){
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":47,"core-util-is":6,"inherits":38}],46:[function(require,module,exports){
(function (process){
'use strict';

module.exports = Readable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var StringDecoder;

util.inherits(Readable, Stream);

function prependListener(emitter, event, fn) {
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

var Duplex;
function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

var Duplex;
function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,require('_process'))
},{"./_stream_duplex":44,"./internal/streams/BufferList":49,"_process":42,"buffer":5,"buffer-shims":4,"core-util-is":6,"events":28,"inherits":38,"isarray":40,"process-nextick-args":41,"string_decoder/":56,"util":3}],47:[function(require,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":44,"core-util-is":6,"inherits":38}],48:[function(require,module,exports){
(function (process){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

var Duplex;
function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

var Duplex;
function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable) && !(this instanceof Duplex)) return new Writable(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
}).call(this,require('_process'))
},{"./_stream_duplex":44,"_process":42,"buffer":5,"buffer-shims":4,"core-util-is":6,"events":28,"inherits":38,"process-nextick-args":41,"util-deprecate":57}],49:[function(require,module,exports){
'use strict';

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};
},{"buffer":5,"buffer-shims":4}],50:[function(require,module,exports){
module.exports = require("./lib/_stream_passthrough.js")

},{"./lib/_stream_passthrough.js":45}],51:[function(require,module,exports){
(function (process){
var Stream = (function (){
  try {
    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
  } catch(_){}
}());
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream || exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream;
}

}).call(this,require('_process'))
},{"./lib/_stream_duplex.js":44,"./lib/_stream_passthrough.js":45,"./lib/_stream_readable.js":46,"./lib/_stream_transform.js":47,"./lib/_stream_writable.js":48,"_process":42}],52:[function(require,module,exports){
module.exports = require("./lib/_stream_transform.js")

},{"./lib/_stream_transform.js":47}],53:[function(require,module,exports){
module.exports = require("./lib/_stream_writable.js")

},{"./lib/_stream_writable.js":48}],54:[function(require,module,exports){
module.exports = function (string) {
  return string.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&")
}

},{}],55:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":28,"inherits":38,"readable-stream/duplex.js":43,"readable-stream/passthrough.js":50,"readable-stream/readable.js":51,"readable-stream/transform.js":52,"readable-stream/writable.js":53}],56:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":5}],57:[function(require,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],58:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}]},{},[1])(1)
});
/*! URI.js v1.19.6 http://medialize.github.io/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(r,x){"object"===typeof module&&module.exports?module.exports=x():"function"===typeof define&&define.amd?define(x):r.IPv6=x(r)})(this,function(r){var x=r&&r.IPv6;return{best:function(k){k=k.toLowerCase().split(":");var m=k.length,d=8;""===k[0]&&""===k[1]&&""===k[2]?(k.shift(),k.shift()):""===k[0]&&""===k[1]?k.shift():""===k[m-1]&&""===k[m-2]&&k.pop();m=k.length;-1!==k[m-1].indexOf(".")&&(d=7);var q;for(q=0;q<m&&""!==k[q];q++);if(q<d)for(k.splice(q,1,"0000");k.length<d;)k.splice(q,0,"0000");
for(q=0;q<d;q++){m=k[q].split("");for(var E=0;3>E;E++)if("0"===m[0]&&1<m.length)m.splice(0,1);else break;k[q]=m.join("")}m=-1;var A=E=0,h=-1,p=!1;for(q=0;q<d;q++)p?"0"===k[q]?A+=1:(p=!1,A>E&&(m=h,E=A)):"0"===k[q]&&(p=!0,h=q,A=1);A>E&&(m=h,E=A);1<E&&k.splice(m,E,"");m=k.length;d="";""===k[0]&&(d=":");for(q=0;q<m;q++){d+=k[q];if(q===m-1)break;d+=":"}""===k[m-1]&&(d+=":");return d},noConflict:function(){r.IPv6===this&&(r.IPv6=x);return this}}});
(function(r){function x(l){throw new RangeError(H[l]);}function k(l,t){for(var C=l.length,y=[];C--;)y[C]=t(l[C]);return y}function m(l,t){var C=l.split("@"),y="";1<C.length&&(y=C[0]+"@",l=C[1]);l=l.replace(w,".");C=l.split(".");C=k(C,t).join(".");return y+C}function d(l){for(var t=[],C=0,y=l.length,J,M;C<y;)J=l.charCodeAt(C++),55296<=J&&56319>=J&&C<y?(M=l.charCodeAt(C++),56320==(M&64512)?t.push(((J&1023)<<10)+(M&1023)+65536):(t.push(J),C--)):t.push(J);return t}function q(l){return k(l,function(t){var C=
"";65535<t&&(t-=65536,C+=g(t>>>10&1023|55296),t=56320|t&1023);return C+=g(t)}).join("")}function E(l,t,C){var y=0;l=C?v(l/700):l>>1;for(l+=v(l/t);455<l;y+=36)l=v(l/35);return v(y+36*l/(l+38))}function A(l){var t=[],C=l.length,y=0,J=128,M=72,a,b;var c=l.lastIndexOf("-");0>c&&(c=0);for(a=0;a<c;++a)128<=l.charCodeAt(a)&&x("not-basic"),t.push(l.charCodeAt(a));for(c=0<c?c+1:0;c<C;){a=y;var e=1;for(b=36;;b+=36){c>=C&&x("invalid-input");var f=l.charCodeAt(c++);f=10>f-48?f-22:26>f-65?f-65:26>f-97?f-97:36;
(36<=f||f>v((2147483647-y)/e))&&x("overflow");y+=f*e;var n=b<=M?1:b>=M+26?26:b-M;if(f<n)break;f=36-n;e>v(2147483647/f)&&x("overflow");e*=f}e=t.length+1;M=E(y-a,e,0==a);v(y/e)>2147483647-J&&x("overflow");J+=v(y/e);y%=e;t.splice(y++,0,J)}return q(t)}function h(l){var t,C,y,J=[];l=d(l);var M=l.length;var a=128;var b=0;var c=72;for(y=0;y<M;++y){var e=l[y];128>e&&J.push(g(e))}for((t=C=J.length)&&J.push("-");t<M;){var f=2147483647;for(y=0;y<M;++y)e=l[y],e>=a&&e<f&&(f=e);var n=t+1;f-a>v((2147483647-b)/n)&&
x("overflow");b+=(f-a)*n;a=f;for(y=0;y<M;++y)if(e=l[y],e<a&&2147483647<++b&&x("overflow"),e==a){var z=b;for(f=36;;f+=36){e=f<=c?1:f>=c+26?26:f-c;if(z<e)break;var I=z-e;z=36-e;var L=J;e+=I%z;L.push.call(L,g(e+22+75*(26>e)-0));z=v(I/z)}J.push(g(z+22+75*(26>z)-0));c=E(b,n,t==C);b=0;++t}++b;++a}return J.join("")}var p="object"==typeof exports&&exports&&!exports.nodeType&&exports,D="object"==typeof module&&module&&!module.nodeType&&module,u="object"==typeof global&&global;if(u.global===u||u.window===u||
u.self===u)r=u;var K=/^xn--/,F=/[^\x20-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,H={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},v=Math.floor,g=String.fromCharCode,B;var G={version:"1.3.2",ucs2:{decode:d,encode:q},decode:A,encode:h,toASCII:function(l){return m(l,function(t){return F.test(t)?"xn--"+h(t):t})},toUnicode:function(l){return m(l,function(t){return K.test(t)?A(t.slice(4).toLowerCase()):
t})}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return G});else if(p&&D)if(module.exports==p)D.exports=G;else for(B in G)G.hasOwnProperty(B)&&(p[B]=G[B]);else r.punycode=G})(this);
(function(r,x){"object"===typeof module&&module.exports?module.exports=x():"function"===typeof define&&define.amd?define(x):r.SecondLevelDomains=x(r)})(this,function(r){var x=r&&r.SecondLevelDomains,k={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",
bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",
ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ","do":" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",
es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",
id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ","in":" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",
kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",
mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",
ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",
ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",
tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",
rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",
tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",
us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",
org:"ae",de:"com "},has:function(m){var d=m.lastIndexOf(".");if(0>=d||d>=m.length-1)return!1;var q=m.lastIndexOf(".",d-1);if(0>=q||q>=d-1)return!1;var E=k.list[m.slice(d+1)];return E?0<=E.indexOf(" "+m.slice(q+1,d)+" "):!1},is:function(m){var d=m.lastIndexOf(".");if(0>=d||d>=m.length-1||0<=m.lastIndexOf(".",d-1))return!1;var q=k.list[m.slice(d+1)];return q?0<=q.indexOf(" "+m.slice(0,d)+" "):!1},get:function(m){var d=m.lastIndexOf(".");if(0>=d||d>=m.length-1)return null;var q=m.lastIndexOf(".",d-1);
if(0>=q||q>=d-1)return null;var E=k.list[m.slice(d+1)];return!E||0>E.indexOf(" "+m.slice(q+1,d)+" ")?null:m.slice(q+1)},noConflict:function(){r.SecondLevelDomains===this&&(r.SecondLevelDomains=x);return this}};return k});
(function(r,x){"object"===typeof module&&module.exports?module.exports=x(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],x):r.URI=x(r.punycode,r.IPv6,r.SecondLevelDomains,r)})(this,function(r,x,k,m){function d(a,b){var c=1<=arguments.length,e=2<=arguments.length;if(!(this instanceof d))return c?e?new d(a,b):new d(a):new d;if(void 0===a){if(c)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&c)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==b?this.absoluteTo(b):this}function q(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function E(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function A(a){return"Array"===E(a)}function h(a,b){var c={},e;if("RegExp"===E(b))c=null;else if(A(b)){var f=0;for(e=b.length;f<e;f++)c[b[f]]=!0}else c[b]=
!0;f=0;for(e=a.length;f<e;f++)if(c&&void 0!==c[a[f]]||!c&&b.test(a[f]))a.splice(f,1),e--,f--;return a}function p(a,b){var c;if(A(b)){var e=0;for(c=b.length;e<c;e++)if(!p(a,b[e]))return!1;return!0}var f=E(b);e=0;for(c=a.length;e<c;e++)if("RegExp"===f){if("string"===typeof a[e]&&a[e].match(b))return!0}else if(a[e]===b)return!0;return!1}function D(a,b){if(!A(a)||!A(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,e=a.length;c<e;c++)if(a[c]!==b[c])return!1;return!0}function u(a){return a.replace(/^\/+|\/+$/g,
"")}function K(a){return escape(a)}function F(a){return encodeURIComponent(a).replace(/[!'()*]/g,K).replace(/\*/g,"%2A")}function w(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}}function H(a,b){return function(c,e){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}}var v=m&&m.URI;d.version="1.19.6";var g=d.prototype,B=Object.prototype.hasOwnProperty;
d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:d.preventInvalidHostname,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.preventInvalidHostname=!1;d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;d.idn_expression=/[^a-z0-9\._-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};d.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};d.hostProtocols=["http","https"];d.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();if("input"!==b||"image"===a.type)return d.domAttributes[b]}};d.encode=F;d.decode=decodeURIComponent;d.iso8859=
function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=F;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@",
"%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");void 0===b&&(b=d.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};d.decodeQuery=
function(a,b){a+="";void 0===b&&(b=d.escapeQuerySpace);try{return d.decode(b?a.replace(/\+/g,"%20"):a)}catch(c){return a}};var G={encode:"encode",decode:"decode"},l,t=function(a,b){return function(c){try{return d[b](c+"").replace(d.characters[a][b].expression,function(e){return d.characters[a][b].map[e]})}catch(e){return c}}};for(l in G)d[l+"PathSegment"]=t("pathname",G[l]),d[l+"UrnPathSegment"]=t("urnpath",G[l]);G=function(a,b,c){return function(e){var f=c?function(I){return d[b](d[c](I))}:d[b];
e=(e+"").split(a);for(var n=0,z=e.length;n<z;n++)e[n]=f(e[n]);return e.join(a)}};d.decodePath=G("/","decodePathSegment");d.decodeUrnPath=G(":","decodeUrnPathSegment");d.recodePath=G("/","encodePathSegment","decode");d.recodeUrnPath=G(":","encodeUrnPathSegment","decode");d.encodeReserved=t("reserved","encode");d.parse=function(a,b){b||(b={preventInvalidHostname:d.preventInvalidHostname});var c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=
a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"//"===a.substring(c+1,c+3).replace(/\\/g,"/")?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){a||(a="");a=a.replace(/\\/g,"/");var c=a.indexOf("/");-1===c&&(c=a.length);if("["===
a.charAt(0)){var e=a.indexOf("]");b.hostname=a.substring(1,e)||null;b.port=a.substring(e+2,c)||null;"/"===b.port&&(b.port=null)}else{var f=a.indexOf(":");e=a.indexOf("/");f=a.indexOf(":",f+1);-1!==f&&(-1===e||f<e)?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null)}b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);b.preventInvalidHostname&&d.ensureValidHostname(b.hostname,b.protocol);b.port&&d.ensureValidPort(b.port);return a.substring(c)||
"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a;-1!==a.indexOf("\\")&&(a=a.replace(/\\/g,"/"));var e=a.indexOf("/"),f=a.lastIndexOf("@",-1<e?e:a.length-1);-1<f&&(-1===e||f<e)?(e=a.substring(0,f).split(":"),b.username=e[0]?d.decode(e[0]):null,e.shift(),b.password=e[0]?d.decode(e.join(":")):null,a=c.substring(f+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,
"");if(!a)return{};for(var c={},e=a.split("&"),f=e.length,n,z,I=0;I<f;I++)if(n=e[I].split("="),z=d.decodeQuery(n.shift(),b),n=n.length?d.decodeQuery(n.join("="),b):null,B.call(c,z)){if("string"===typeof c[z]||null===c[z])c[z]=[c[z]];c[z].push(n)}else c[z]=n;return c};d.build=function(a){var b="",c=!1;a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//",c=!0);b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&c&&(b+="/"),b+=a.path);"string"===typeof a.query&&
a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)b=d.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username));a.password&&(b+=":"+d.encode(a.password));b&&(b+="@");return b};d.buildQuery=function(a,b,
c){var e="",f,n;for(f in a)if(B.call(a,f))if(A(a[f])){var z={};var I=0;for(n=a[f].length;I<n;I++)void 0!==a[f][I]&&void 0===z[a[f][I]+""]&&(e+="&"+d.buildQueryParameter(f,a[f][I],c),!0!==b&&(z[a[f][I]+""]=!0))}else void 0!==a[f]&&(e+="&"+d.buildQueryParameter(f,a[f],c));return e.substring(1)};d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var e in b)B.call(b,e)&&d.addQuery(a,e,b[e]);else if("string"===
typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),A(c)||(c=[c]),a[b]=(a[b]||[]).concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.setQuery=function(a,b,c){if("object"===typeof b)for(var e in b)B.call(b,e)&&d.setQuery(a,e,b[e]);else if("string"===typeof b)a[b]=void 0===c?null:c;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,c){var e;if(A(b))for(c=0,e=b.length;c<
e;c++)a[b[c]]=void 0;else if("RegExp"===E(b))for(e in a)b.test(e)&&(a[e]=void 0);else if("object"===typeof b)for(e in b)B.call(b,e)&&d.removeQuery(a,e,b[e]);else if("string"===typeof b)void 0!==c?"RegExp"===E(c)?!A(a[b])&&c.test(a[b])?a[b]=void 0:a[b]=h(a[b],c):a[b]!==String(c)||A(c)&&1!==c.length?A(a[b])&&(a[b]=h(a[b],c)):a[b]=void 0:a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");};d.hasQuery=function(a,b,c,e){switch(E(b)){case "String":break;
case "RegExp":for(var f in a)if(B.call(a,f)&&b.test(f)&&(void 0===c||d.hasQuery(a,f,c)))return!0;return!1;case "Object":for(var n in b)if(B.call(b,n)&&!d.hasQuery(a,n,b[n]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(E(c)){case "Undefined":return b in a;case "Boolean":return a=!(A(a[b])?!a[b].length:!a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return A(a[b])?(e?p:D)(a[b],c):!1;case "RegExp":return A(a[b])?
e?p(a[b],c):!1:!(!a[b]||!a[b].match(c));case "Number":c=String(c);case "String":return A(a[b])?e?p(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};d.joinPaths=function(){for(var a=[],b=[],c=0,e=0;e<arguments.length;e++){var f=new d(arguments[e]);a.push(f);f=f.segment();for(var n=0;n<f.length;n++)"string"===typeof f[n]&&b.push(f[n]),f[n]&&c++}if(!b.length||!c)return new d("");b=(new d("")).segment(b);
""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||b.path("/"+b.path());return b.normalize()};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a.charAt(e)!==b.charAt(e)){e--;break}if(1>e)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(e)||"/"!==b.charAt(e))e=a.substring(0,e).lastIndexOf("/");return a.substring(0,e+1)};d.withinString=function(a,b,c){c||(c={});var e=c.start||d.findUri.start,f=c.end||d.findUri.end,n=c.trim||d.findUri.trim,z=
c.parens||d.findUri.parens,I=/[a-z0-9-]=["']?$/i;for(e.lastIndex=0;;){var L=e.exec(a);if(!L)break;var P=L.index;if(c.ignoreHtml){var N=a.slice(Math.max(P-3,0),P);if(N&&I.test(N))continue}var O=P+a.slice(P).search(f);N=a.slice(P,O);for(O=-1;;){var Q=z.exec(N);if(!Q)break;O=Math.max(O,Q.index+Q[0].length)}N=-1<O?N.slice(0,O)+N.slice(O).replace(n,""):N.replace(n,"");N.length<=L[0].length||c.ignore&&c.ignore.test(N)||(O=P+N.length,L=b(N,P,O,a),void 0===L?e.lastIndex=O:(L=String(L),a=a.slice(0,P)+L+a.slice(O),
e.lastIndex=P+L.length))}e.lastIndex=0;return a};d.ensureValidHostname=function(a,b){var c=!!a,e=!1;b&&(e=p(d.hostProtocols,b));if(e&&!c)throw new TypeError("Hostname cannot be empty, if protocol is "+b);if(a&&a.match(d.invalid_hostname_characters)){if(!r)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(r.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_]');
}};d.ensureValidPort=function(a){if(a){var b=Number(a);if(!(/^[0-9]+$/.test(b)&&0<b&&65536>b))throw new TypeError('Port "'+a+'" is not a valid port');}};d.noConflict=function(a){if(a)return a={URI:this.noConflict()},m.URITemplate&&"function"===typeof m.URITemplate.noConflict&&(a.URITemplate=m.URITemplate.noConflict()),m.IPv6&&"function"===typeof m.IPv6.noConflict&&(a.IPv6=m.IPv6.noConflict()),m.SecondLevelDomains&&"function"===typeof m.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=m.SecondLevelDomains.noConflict()),
a;m.URI===this&&(m.URI=v);return this};g.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};g.clone=function(){return new d(this)};g.valueOf=g.toString=function(){return this.build(!1)._string};g.protocol=w("protocol");g.username=w("username");g.password=w("password");g.hostname=w("hostname");g.port=w("port");g.query=H("query","?");g.fragment=H("fragment","#");g.search=function(a,b){var c=
this.query(a,b);return"string"===typeof c&&c.length?"?"+c:c};g.hash=function(a,b){var c=this.fragment(a,b);return"string"===typeof c&&c.length?"#"+c:c};g.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?d.decodeUrnPath:d.decodePath)(c):c}this._parts.path=this._parts.urn?a?d.recodeUrnPath(a):"":a?d.recodePath(a):"/";this.build(!b);return this};g.path=g.pathname;g.href=function(a,b){var c;if(void 0===a)return this.toString();
this._string="";this._parts=d._parts();var e=a instanceof d,f="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=d.getDomAttribute(a),a=a[f]||"",f=!1);!e&&f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=d.parse(String(a),this._parts);else if(e||f){e=e?a._parts:a;for(c in e)"query"!==c&&B.call(this._parts,c)&&(this._parts[c]=e[c]);e.query&&this.query(e.query,!1)}else throw new TypeError("invalid input");this.build(!b);return this};
g.is=function(a){var b=!1,c=!1,e=!1,f=!1,n=!1,z=!1,I=!1,L=!this._parts.urn;this._parts.hostname&&(L=!1,c=d.ip4_expression.test(this._parts.hostname),e=d.ip6_expression.test(this._parts.hostname),b=c||e,n=(f=!b)&&k&&k.has(this._parts.hostname),z=f&&d.idn_expression.test(this._parts.hostname),I=f&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return L;case "absolute":return!L;case "domain":case "name":return f;case "sld":return n;case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;
case "ip6":case "ipv6":case "inet6":return e;case "idn":return z;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return I}return null};var C=g.protocol,y=g.port,J=g.hostname;g.protocol=function(a,b){if(a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(d.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return C.call(this,a,b)};g.scheme=g.protocol;g.port=function(a,b){if(this._parts.urn)return void 0===
a?"":this;void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),d.ensureValidPort(a)));return y.call(this,a,b)};g.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={preventInvalidHostname:this._parts.preventInvalidHostname};if("/"!==d.parseHost(a,c))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=c.hostname;this._parts.preventInvalidHostname&&d.ensureValidHostname(a,this._parts.protocol)}return J.call(this,
a,b)};g.origin=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=this.protocol();return this.authority()?(c?c+"://":"")+this.authority():""}c=d(a);this.protocol(c.protocol()).authority(c.authority()).build(!b);return this};g.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";if("/"!==d.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');
this.build(!b);return this};g.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";if("/"!==d.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};g.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=d.buildUserinfo(this._parts);return c?c.substring(0,c.length-1):c}"@"!==a[a.length-1]&&
(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};g.resource=function(a,b){if(void 0===a)return this.path()+this.search()+this.hash();var c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};g.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=new RegExp("^"+q(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");a&&d.ensureValidHostname(a,this._parts.protocol);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};g.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||
this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");d.ensureValidHostname(a,this._parts.protocol);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=new RegExp(q(this.domain())+
"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};g.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf(".");c=this._parts.hostname.substring(c+1);return!0!==b&&k&&k.list[c.toLowerCase()]?k.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(k&&k.is(a))c=new RegExp(q(this.tld())+"$"),this._parts.hostname=
this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=new RegExp(q(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};g.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&
!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1;c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=new RegExp("^"+q(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);
return this};g.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/");c=this._parts.path.substring(c+1);return a?d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var e=new RegExp(q(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(e,a);c?this.normalizePath(b):this.build(!b);return this};g.suffix=
function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),e=c.lastIndexOf(".");if(-1===e)return"";c=c.substring(e+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())e=a?new RegExp(q(c)+"$"):new RegExp(q("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}e&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(e,
a));this.build(!b);return this};g.segment=function(a,b,c){var e=this._parts.urn?":":"/",f=this.path(),n="/"===f.substring(0,1);f=f.split(e);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');n&&f.shift();0>a&&(a=Math.max(f.length+a,0));if(void 0===b)return void 0===a?f:f[a];if(null===a||void 0===f[a])if(A(b)){f=[];a=0;for(var z=b.length;a<z;a++)if(b[a].length||f.length&&f[f.length-1].length)f.length&&!f[f.length-
1].length&&f.pop(),f.push(u(b[a]))}else{if(b||"string"===typeof b)b=u(b),""===f[f.length-1]?f[f.length-1]=b:f.push(b)}else b?f[a]=u(b):f.splice(a,1);n&&f.unshift("");return this.path(f.join(e),c)};g.segmentCoded=function(a,b,c){var e;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(A(a)){var f=0;for(e=a.length;f<e;f++)a[f]=d.decode(a[f])}else a=void 0!==a?d.decode(a):void 0;return a}if(A(b))for(f=0,e=b.length;f<e;f++)b[f]=d.encode(b[f]);else b="string"===typeof b||b instanceof
String?d.encode(b):b;return this.segment(a,b,c)};var M=g.query;g.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace),this.build(!b),this):M.call(this,a,b)};g.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var f in a)B.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&
(c=b);this.build(!c);return this};g.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};g.setSearch=g.setQuery;g.addSearch=g.addQuery;g.removeSearch=g.removeQuery;g.hasSearch=g.hasQuery;g.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
g.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};g.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&r?this._parts.hostname=r.toASCII(this._parts.hostname):this.is("IPv6")&&x&&(this._parts.hostname=x.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};g.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};g.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=d.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;b=d.recodePath(b);var c="";if("/"!==b.charAt(0)){var e=!0;b="/"+b}if("/.."===b.slice(-3)||"/."===b.slice(-2))b+="/";b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");e&&(c=b.substring(1).match(/^(\.\.\/)+/)||
"")&&(c=c[0]);for(;;){var f=b.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){b=b.substring(3);continue}var n=b.substring(0,f).lastIndexOf("/");-1===n&&(n=f);b=b.substring(0,n)+b.substring(f+3)}e&&this.is("relative")&&(b=c+b.substring(1));this._parts.path=b;this.build(!a);return this};g.normalizePathname=g.normalizePath;g.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};g.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};g.normalizeSearch=g.normalizeQuery;g.normalizeHash=g.normalizeFragment;g.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};g.unicode=function(){var a=d.encode,b=d.decode;d.encode=F;d.decode=unescape;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};
g.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&r?(b+=r.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",e=0,f=a._parts.query.split("&"),n=f.length;e<n;e++){var z=(f[e]||"").split("=");c+="&"+d.decodeQuery(z[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26");void 0!==z[1]&&(c+="="+d.decodeQuery(z[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};g.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof d||(a=new d(a));if(b._parts.protocol)return b;b._parts.protocol=a._parts.protocol;if(this._parts.hostname)return b;for(e=0;f=c[e];e++)b._parts[f]=
a._parts[f];b._parts.path?(".."===b._parts.path.substring(-2)&&(b._parts.path+="/"),"/"!==b.path().charAt(0)&&(c=(c=a.directory())?c:0===a.path().indexOf("/")?"/":"",b._parts.path=(c?c+"/":"")+b._parts.path,b.normalizePath())):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));b.build();return b};g.relativeTo=function(a){var b=this.clone().normalize();if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new d(a)).normalize();var c=
b._parts;var e=a._parts;var f=b.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(f===a)return c.path="",b.build();f=d.commonPath(f,a);
if(!f)return b.build();e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(f.length)||"./";return b.build()};g.equals=function(a){var b=this.clone(),c=new d(a);a={};var e;b.normalize();c.normalize();if(b.toString()===c.toString())return!0;var f=b.query();var n=c.query();b.query("");c.query("");if(b.toString()!==c.toString()||f.length!==n.length)return!1;b=d.parseQuery(f,this._parts.escapeQuerySpace);n=d.parseQuery(n,this._parts.escapeQuerySpace);for(e in b)if(B.call(b,
e)){if(!A(b[e])){if(b[e]!==n[e])return!1}else if(!D(b[e],n[e]))return!1;a[e]=!0}for(e in n)if(B.call(n,e)&&!a[e])return!1;return!0};g.preventInvalidHostname=function(a){this._parts.preventInvalidHostname=!!a;return this};g.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};g.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});
(function(r,x){"object"===typeof module&&module.exports?module.exports=x(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],x):r.URITemplate=x(r.URI,r)})(this,function(r,x){function k(h){if(k._cache[h])return k._cache[h];if(!(this instanceof k))return new k(h);this.expression=h;k._cache[h]=this;return this}function m(h){this.data=h;this.cache={}}var d=x&&x.URITemplate,q=Object.prototype.hasOwnProperty,E=k.prototype,A={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};k._cache={};k.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;k.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;k.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;k.LITERAL_PATTERN=/[<>{}"`^| \\]/;k.expand=function(h,p,D){var u=A[h.operator],K=u.named?"Named":"Unnamed";h=h.variables;var F=[],w,H;for(H=0;w=h[H];H++){var v=p.get(w.name);if(0===v.type&&D&&D.strict)throw Error('Missing expansion value for variable "'+
w.name+'"');if(v.val.length){if(1<v.type&&w.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+w.name+'"');F.push(k["expand"+K](v,u,w.explode,w.explode&&u.separator||",",w.maxlength,w.name))}else v.type&&F.push("")}return F.length?u.prefix+F.join(u.separator):""};k.expandNamed=function(h,p,D,u,K,F){var w="",H=p.encode;p=p.empty_name_separator;var v=!h[H].length,g=2===h.type?"":r[H](F),B;var G=0;for(B=h.val.length;G<B;G++){if(K){var l=r[H](h.val[G][1].substring(0,
K));2===h.type&&(g=r[H](h.val[G][0].substring(0,K)))}else v?(l=r[H](h.val[G][1]),2===h.type?(g=r[H](h.val[G][0]),h[H].push([g,l])):h[H].push([void 0,l])):(l=h[H][G][1],2===h.type&&(g=h[H][G][0]));w&&(w+=u);D?w+=g+(p||l?"=":"")+l:(G||(w+=r[H](F)+(p||l?"=":"")),2===h.type&&(w+=g+","),w+=l)}return w};k.expandUnnamed=function(h,p,D,u,K){var F="",w=p.encode;p=p.empty_name_separator;var H=!h[w].length,v;var g=0;for(v=h.val.length;g<v;g++){if(K)var B=r[w](h.val[g][1].substring(0,K));else H?(B=r[w](h.val[g][1]),
h[w].push([2===h.type?r[w](h.val[g][0]):void 0,B])):B=h[w][g][1];F&&(F+=u);if(2===h.type){var G=K?r[w](h.val[g][0].substring(0,K)):h[w][g][0];F+=G;F=D?F+(p||B?"=":""):F+","}F+=B}return F};k.noConflict=function(){x.URITemplate===k&&(x.URITemplate=d);return k};E.expand=function(h,p){var D="";this.parts&&this.parts.length||this.parse();h instanceof m||(h=new m(h));for(var u=0,K=this.parts.length;u<K;u++)D+="string"===typeof this.parts[u]?this.parts[u]:k.expand(this.parts[u],h,p);return D};E.parse=function(){var h=
this.expression,p=k.EXPRESSION_PATTERN,D=k.VARIABLE_PATTERN,u=k.VARIABLE_NAME_PATTERN,K=k.LITERAL_PATTERN,F=[],w=0,H=function(t){if(t.match(K))throw Error('Invalid Literal "'+t+'"');return t};for(p.lastIndex=0;;){var v=p.exec(h);if(null===v){F.push(H(h.substring(w)));break}else F.push(H(h.substring(w,v.index))),w=v.index+v[0].length;if(!A[v[1]])throw Error('Unknown Operator "'+v[1]+'" in "'+v[0]+'"');if(!v[3])throw Error('Unclosed Expression "'+v[0]+'"');var g=v[2].split(",");for(var B=0,G=g.length;B<
G;B++){var l=g[B].match(D);if(null===l)throw Error('Invalid Variable "'+g[B]+'" in "'+v[0]+'"');if(l[1].match(u))throw Error('Invalid Variable Name "'+l[1]+'" in "'+v[0]+'"');g[B]={name:l[1],explode:!!l[3],maxlength:l[4]&&parseInt(l[4],10)}}if(!g.length)throw Error('Expression Missing Variable(s) "'+v[0]+'"');F.push({expression:v[0],operator:v[1],variables:g})}F.length||F.push(H(h));this.parts=F;return this};m.prototype.get=function(h){var p=this.data,D={type:0,val:[],encode:[],encodeReserved:[]};
if(void 0!==this.cache[h])return this.cache[h];this.cache[h]=D;p="[object Function]"===String(Object.prototype.toString.call(p))?p(h):"[object Function]"===String(Object.prototype.toString.call(p[h]))?p[h](h):p[h];if(void 0!==p&&null!==p)if("[object Array]"===String(Object.prototype.toString.call(p))){var u=0;for(h=p.length;u<h;u++)void 0!==p[u]&&null!==p[u]&&D.val.push([void 0,String(p[u])]);D.val.length&&(D.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(p))){for(u in p)q.call(p,
u)&&void 0!==p[u]&&null!==p[u]&&D.val.push([u,String(p[u])]);D.val.length&&(D.type=2)}else D.type=1,D.val.push([void 0,String(p)]);return D};r.expand=function(h,p){var D=(new k(h)).expand(p);return new r(D)};return k});

!function(){function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n||e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}return e}()({1:[function(e,t,n){"use strict";var r;!function(e){function t(e){var t=document.createElement("iframe");t.hidden=!0,t.style.display="none",t.src=e,document.body.appendChild(t)}function n(){return!window.addEventListener||navigator.appVersion.indexOf("MSIE 9")>=0}function r(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>=0)return"IE"+e.substring(t+5,e.indexOf(".",t));if(e.indexOf("Trident/")>=0){var n=e.indexOf("rv:");return"IE"+e.substring(n+3,e.indexOf(".",n))}return e.indexOf("Edge/")>=0?"Edge":void 0}function o(e,t,n){void 0===t&&(t=1e3),void 0===n&&(n=700);var r=screen.width?(screen.width-t)/2:0,o=screen.height?(screen.height-n)/2:0,i="height="+n+",width="+t+",top="+o+",left="+r+",scrollbars=yes,resizable=yes,location=no,menubar=no,status=yes,titlebar=no,toolbar=no";return window.open(e,"_blank",i)}e.appendHiddenIframeToDocument=t,e.browserNotSupported=n,e.ieVersion=r,e.openPopupWindow=o}(r=n.BrowserUtils||(n.BrowserUtils={}))},{}],2:[function(e,t,n){"use strict";var r;!function(e){e[e.Bookmarklet=0]="Bookmarklet",e[e.ChromeExtension=1]="ChromeExtension",e[e.EdgeExtension=2]="EdgeExtension",e[e.FirefoxExtension=3]="FirefoxExtension",e[e.SafariExtension=4]="SafariExtension"}(r=n.ClientType||(n.ClientType={}))},{}],3:[function(e,t,n){"use strict";var r,o=e("../extensions/invokeSource");!function(e){e[e.ChangeLog=0]="ChangeLog",e[e.Pdf=1]="Pdf",e[e.Product=2]="Product",e[e.Recipe=3]="Recipe",e[e.Video=4]="Video",e[e.WhatsNew=5]="WhatsNew"}(r=n.TooltipType||(n.TooltipType={}));var i;!function(e){function t(e){switch(e){case r.Pdf:return o.InvokeSource.PdfTooltip;case r.Product:return o.InvokeSource.ProductTooltip;case r.Recipe:return o.InvokeSource.RecipeTooltip;case r.Video:return o.InvokeSource.VideoTooltip;case r.WhatsNew:return o.InvokeSource.WhatsNewTooltip;default:throw Error("Invalid TooltipType passed in TooltipType.toInvokeSource")}}e.toInvokeSource=t}(i=n.TooltipTypeUtils||(n.TooltipTypeUtils={}))},{"../extensions/invokeSource":29}],4:[function(e,t,n){"use strict";var r,o=e("./clientType"),i=e("./constants"),a=e("./urlUtils");!function(e){function t(e,t,n){var r=a.UrlUtils.addUrlQueryValue(i.Constants.Urls.clipperFeedbackUrl,"LogCategory",n);return r=a.UrlUtils.addUrlQueryValue(r,"originalUrl",e.pageInfo.rawUrl),r=a.UrlUtils.addUrlQueryValue(r,"clipperId",e.clientInfo.clipperId),r=a.UrlUtils.addUrlQueryValue(r,"usid",t),r=a.UrlUtils.addUrlQueryValue(r,"type",o.ClientType[e.clientInfo.clipperType]),r=a.UrlUtils.addUrlQueryValue(r,"version",e.clientInfo.clipperVersion)}function n(e,t,n){return s(i.Constants.Urls.Authentication.signInUrl,e,t,n)}function r(e,t,n){return s(i.Constants.Urls.Authentication.signOutUrl,e,t,n)}function s(e,t,n,r){var o=a.UrlUtils.addUrlQueryValue(e,i.Constants.Urls.QueryParams.authType,r);return o=a.UrlUtils.addUrlQueryValue(o,i.Constants.Urls.QueryParams.clipperId,t),o=a.UrlUtils.addUrlQueryValue(o,i.Constants.Urls.QueryParams.userSessionId,n)}e.generateFeedbackUrl=t,e.generateSignInUrl=n,e.generateSignOutUrl=r}(r=n.ClipperUrls||(n.ClipperUrls={}))},{"./clientType":2,"./constants":10,"./urlUtils":71}],5:[function(e,t,n){"use strict";var r=function(){function e(e,t){this.otherSideKeys={},this.queuedCalls={},this.callbackIdPostfix=0,this.functionMap={},this.svFunctions={},this.trackedSmartValues={},this.channel=t,this.messageHandler=e,this.messageHandler.onMessageReceived=this.parseMessage.bind(this),this.sendInitializationMessage()}return e.prototype.getMessageHandler=function(){return this.messageHandler},e.prototype.onInitialized=function(){},e.prototype.tearDown=function(){for(var e in this.trackedSmartValues)if(this.trackedSmartValues.hasOwnProperty(e)&&this.svFunctions[e])for(var t=0;t<this.svFunctions[e].length;t++)this.trackedSmartValues[e].unsubscribe(this.svFunctions[e][t]);this.messageHandler.tearDown()},e.prototype.setErrorHandler=function(e){this.communicatorErrorHandler=e},e.prototype.parseMessage=function(e){var t;try{t=JSON.parse(e)}catch(e){return}if(t&&(!this.channel||t.channel&&t.channel===this.channel)&&(this.channel||!t.channel))try{this.handleDataPackage(t)}catch(e){if(!this.communicatorErrorHandler)throw e;this.communicatorErrorHandler(e)}},e.prototype.handleDataPackage=function(t){var n=this;if(t.functionKey===e.initializationKey){this.sendAcknowledgementMessage();for(var r in this.functionMap)this.functionMap.hasOwnProperty(r)&&this.postMessage({data:r,functionKey:e.registrationKey});this.onInitialized()}else if(t.functionKey===e.acknowledgeKey)this.onInitialized();else if(t.functionKey===e.registrationKey){var o=t.data.toString();if(this.otherSideKeys[o]||(this.otherSideKeys[o]=!0),this.isSmartValueSubscription(o)){var i=o.substr(e.setValuePrefix.length),a=this.trackedSmartValues[i];a&&this.updateRemoteSmartValue(i,a.get())}else if(this.queuedCalls[o]){for(var s=this.queuedCalls[o],u=0;u<s.length;u++)this.postMessage(s[u]);delete this.queuedCalls[o]}}else{var l=this.functionMap[t.functionKey];if(l){var c=l(t.data);c&&c.then&&t.callbackKey&&c.then(function(e){n.callRemoteFunction(t.callbackKey,{param:e})},function(e){n.callRemoteFunction(t.callbackKey,{param:e})})}}},e.prototype.registerFunction=function(t,n){if(!t)throw new Error("param 'name' is invalid");this.functionMap[t]=n,this.postMessage({data:t,functionKey:e.registrationKey})},e.prototype.callRemoteFunction=function(t,n){if(!t)throw new Error("param 'name' is invalid");var r=n?n.param:void 0,o=void 0;n&&n.callback&&(o=t+e.callbackPostfix+"-"+this.callbackIdPostfix++,this.registerFunction(o,n.callback));var i={data:r,functionKey:t};o&&(i.callbackKey=o),this.otherSideKeys[t]?this.postMessage(i):this.isSmartValueSubscription(t)||(this.queuedCalls[t]=this.queuedCalls[t]||[],this.queuedCalls[t].push(i))},e.prototype.subscribeAcrossCommunicator=function(t,n,r){r&&t.subscribe(r,{callOnSubscribe:!1}),this.registerFunction(e.setValuePrefix+n,function(e){t.set(e)})},e.prototype.broadcastAcrossCommunicator=function(e,t){var n=this,r=function(e){n.updateRemoteSmartValue(t,e)};this.svFunctions[t]||(this.svFunctions[t]=[]),this.svFunctions[t].push(r),this.trackedSmartValues[t]=e,e.subscribe(r)},e.prototype.updateRemoteSmartValue=function(t,n){this.callRemoteFunction(e.setValuePrefix+t,{param:n})},e.prototype.sendInitializationMessage=function(){this.postMessage({functionKey:e.initializationKey})},e.prototype.sendAcknowledgementMessage=function(){this.postMessage({functionKey:e.acknowledgeKey})},e.prototype.isSmartValueSubscription=function(t){return t.substr(0,e.setValuePrefix.length)===e.setValuePrefix},e.prototype.postMessage=function(e){this.channel&&(e.channel=this.channel);try{this.messageHandler.sendMessage(JSON.stringify(e))}catch(e){if(!this.communicatorErrorHandler)throw e;this.communicatorErrorHandler(e)}},e}();r.initializationKey="INITIALIZATION-K3Y",r.acknowledgeKey="ACKNOWLEDGE-K3Y",r.registrationKey="REGISTER-FUNCTION-K3Y",r.setValuePrefix="SETVALUE-",r.callbackPostfix="-CALLBACK",n.Communicator=r},{}],6:[function(e,t,n){"use strict";var r=e("./communicator"),o=function(){function e(e,t,n,o){var i=new r.Communicator(e,n);i.setErrorHandler(o),i.onInitialized=function(){var e=[];i.handleDataPackage=function(t){e.push(t)};var a=new r.Communicator(t,n);a.setErrorHandler(o),a.onInitialized=function(){i.onInitialized=void 0,a.onInitialized=void 0;for(var t=0,n=e;t<n.length;t++){var r=n[t];a.postMessage(r)}i.handleDataPackage=function(e){a.postMessage(e)},a.handleDataPackage=function(e){i.postMessage(e)}}}}return e}();n.CommunicatorPassthrough=o},{"./communicator":5}],7:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./messageHandler"),i=function(e){function t(t){var n=e.call(this)||this;return n.getOtherWindow=t,n.initMessageHandler(),window.addEventListener("message",n.messageHandler),n}return r(t,e),t.prototype.initMessageHandler=function(){var e=this;this.messageHandler=function(t){e.onMessageReceived(t.data),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}},t.prototype.sendMessage=function(e){var t=this.getOtherWindow();t.postMessage(e,"*")},t.prototype.tearDown=function(){window.removeEventListener("message",this.messageHandler)},t}(o.MessageHandler);n.IFrameMessageHandler=i},{"./messageHandler":8}],8:[function(e,t,n){"use strict";var r=function(){function e(){}return e.prototype.onMessageReceived=function(e){},e}();n.MessageHandler=r},{}],9:[function(e,t,n){"use strict";var r=function(){function e(e){this.subscriptions=[],this.t=e}return e.prototype.subscribe=function(e,t){void 0===t&&(t={}),void 0===t.times&&(t.times=1/0),void 0===t.callOnSubscribe&&(t.callOnSubscribe=!0),t.callOnSubscribe&&e(this.t),t.times>0&&this.subscriptions.push({func:e,times:t.times})},e.prototype.unsubscribe=function(e){for(var t=0;t<this.subscriptions.length;t++)if(e===this.subscriptions[t].func)return void this.subscriptions.splice(t,1)},e.prototype.set=function(e){return this.t!==e&&(this.t=e,this.notifySubscribers()),this},e.prototype.get=function(){return this.t},e.prototype.forceUpdate=function(){this.notifySubscribers()},e.prototype.equals=function(e){return this.t===e},e.prototype.toString=function(){return this.t?this.t.toString():"undefined"},e.prototype.notifySubscribers=function(){for(var e=this.subscriptions.length,t=0;t<e;t++){this.subscriptions[t].times--,this.subscriptions[t].func(this.t);var n=this.subscriptions[t]&&0===this.subscriptions[t].times;n&&this.subscriptions.splice(t,1),this.subscriptions[t]&&!n||(e--,t--)}},e.subscribe=function(e,t){for(var n=0;n<e.length;n++)e[n].subscribe(function(){for(var n=[],r=0;r<e.length;r++)n.push(e[r].get());t.apply(this,n)})},e}();n.SmartValue=r},{}],10:[function(e,t,n){"use strict";var r;!function(e){var t;!function(e){e.heightAnimator="height-animator",e.panelAnimator="panel-animator",e.clearfix="clearfix",e.change="change",e.changes="changes",e.changeBody="change-body",e.changeDescription="change-description",e.changeImage="change-image",e.changeTitle="change-title",e.checkboxCheck="checkboxCheck",e.textAreaInput="textAreaInput",e.textAreaInputMirror="textAreaInputMirror",e.popover="popover",e.popoverArrow="popover-arrow",e.deleteHighlightButton="delete-highlight",e.highlightable="highlightable",e.highlighted="highlighted",e.regionSelection="region-selection",e.regionSelectionImage="region-selection-image",e.regionSelectionRemoveButton="region-selection-remove-button",e.attachmentOverlay="attachment-overlay",e.centeredInCanvas="centered-in-canvas",e.overlay="overlay",e.overlayHidden="overlay-hidden",e.overlayNumber="overlay-number",e.pdfPreviewImage="pdf-preview-image",e.pdfPreviewImageCanvas="pdf-preview-image-canvas",e.unselected="unselected",e.localPdfPanelTitle="local-pdf-panel-title",e.localPdfPanelSubtitle="local-pdf-panel-subtitle",e.radioIndicatorFill="radio-indicator-fill",e.spinner="spinner",e.srOnly="sr-only",e.tooltip="tooltip",e.centeredInPreview="centered-in-preview"}(t=e.Classes||(e.Classes={}));var n;!function(e){e.clipperInfo="ClipperInfo"}(n=e.Cookies||(e.Cookies={}));var r;!function(e){var t;!function(e){e.conflictingExtension="conflictingExtension"}(t=e.NotificationIds||(e.NotificationIds={}))}(r=e.Extension||(e.Extension={}));var o;!function(e){e.annotationContainer="annotationContainer",e.annotationField="annotationField",e.annotationFieldMirror="annotationFieldMirror",e.annotationPlaceholder="annotationPlaceholder",e.bookmarkThumbnail="bookmarkThumbnail",e.bookmarkPreviewContentContainer="bookmarkPreviewContentContainer",e.bookmarkPreviewInnerContainer="bookmarkPreviewInnerContainer",e.clipperApiProgressContainer="clipperApiProgressContainer",e.clipProgressDelayedMessage="clipProgressDelayedMessage",e.clipProgressIndicatorMessage="clipProgressIndicatorMessage",e.dialogBackButton="dialogBackButton",e.dialogButtonContainer="dialogButtonContainer",e.dialogDebugMessageContainer="dialogDebugMessageContainer",e.dialogMessageContainer="dialogMessageContainer",e.dialogContentContainer="dialogContentContainer",e.dialogMessage="dialogMessage",e.dialogSignOutButton="dialogSignoutButton",e.dialogTryAgainButton="dialogTryAgainButton",e.highlightablePreviewBody="highlightablePreviewBody",e.apiErrorMessage="apiErrorMessage",e.backToHomeButton="backToHomeButton",e.clipperFailureContainer="clipperFailureContainer",e.refreshPageButton="refreshPageButton",e.tryAgainButton="tryAgainButton",e.clipperFooterContainer="clipperFooterContainer",e.currentUserControl="currentUserControl",e.currentUserDetails="currentUserDetails",e.currentUserEmail="currentUserEmail",e.currentUserId="currentUserId",e.currentUserName="currentUserName",e.feedbackButton="feedbackButton",e.feedbackImage="feedbackImage",e.signOutButton="signOutButton",e.userDropdownArrow="userDropdownArrow",e.userSettingsContainer="userSettingsContainer",e.feedbackLabel="feedbackLabel",e.footerButtonsContainer="footerButtonsContainer",e.clipperLoadingContainer="clipperLoadingContainer",e.closeButton="closeButton",e.closeButtonContainer="closeButtonContainer",e.mainController="mainController",e.saveToLocationContainer="saveToLocationContainer",e.clipButton="clipButton",e.clipButtonContainer="clipButtonContainer",e.optionLabel="optionLabel",e.radioAllPagesLabel="radioAllPagesLabel",e.radioPageRangeLabel="radioPageRangeLabel",e.rangeInput="rangeInput",e.previewBody="previewBody",e.previewContentContainer="previewContentContainer",e.previewHeader="previewHeader",e.previewHeaderContainer="previewHeaderContainer",e.previewHeaderInput="previewHeaderInput",e.previewHeaderInputMirror="previewHeaderInputMirror",e.previewTitleContainer="previewTitleContainer",e.previewSubtitleContainer="previewSubtitleContainer",e.previewInnerContainer="previewInnerContainer",e.previewAriaLiveDiv="previewAriaLiveDiv",e.previewOptionsContainer="previewOptionsContainer",e.previewInnerWrapper="previewInnerWrapper",e.previewOuterContainer="previewOuterContainer",e.previewUrlContainer="previewUrlContainer",e.previewNotesContainer="previewNotesContainer",e.fullPageControl="fullPageControl",e.fullPageHeaderTitle="fullPageHeaderTitle",e.localPdfFileTitle="localPdfFileTitle",e.pdfControl="pdfControl",e.pdfHeaderTitle="pdfHeaderTitle",e.pageRangeControl="pageRangeControl",e.checkboxToDistributePages="checkboxToDistributePages",e.pdfIsTooLargeToAttachIndicator="pdfIsTooLargeToAttachIndicator",e.checkboxToAttachPdf="checkboxToAttachPdf",e.moreClipOptions="moreClipOptions",e.addAnotherRegionButton="addAnotherRegionButton",e.addRegionControl="addRegionControl",e.regionControl="regionControl",e.regionHeaderTitle="regionHeaderTitle",e.decrementFontSize="decrementFontSize",e.fontSizeControl="fontSizeControl",e.highlightButton="highlightButton",e.highlightControl="highlightControl",e.incrementFontSize="incrementFontSize",e.serifControl="serifControl",e.sansSerif="sansSerif",e.serif="serif",e.bookmarkControl="bookmarkControl",e.bookmarkHeaderTitle="bookmarkHeaderTitle",e.ratingsButtonFeedbackNo="ratingsButtonFeedbackNo",e.ratingsButtonFeedbackYes="ratingsButtonFeedbackYes",e.ratingsButtonInitNo="ratingsButtonInitNo",e.ratingsButtonInitYes="ratingsButtonInitYes",e.ratingsButtonRateNo="ratingsButtonRateNo",e.ratingsButtonRateYes="ratingsButtonRateYes",e.ratingsPromptContainer="ratingsPromptContainer",e.regionInstructionsContainer="regionInstructionsContainer",e.regionClipCancelButton="regionClipCancelButton",e.innerFrame="innerFrame",e.outerFrame="outerFrame",e.regionSelectorContainer="regionSelectorContainer",e.spinnerText="spinnerText",e.locationPickerContainer="locationPickerContainer",e.sectionLocationContainer="sectionLocationContainer",e.signInButtonMsa="signInButtonMsa",e.signInButtonOrgId="signInButtonOrgId",e.signInContainer="signInContainer",e.signInErrorCookieInformation="signInErrorCookieInformation",e.signInErrorDebugInformation="signInErrorDebugInformation",e.signInErrorDebugInformationDescription="signInErrorDebugInformationDescription",e.signInErrorDebugInformationContainer="signInErrorDebugInformationContainer",e.signInErrorDebugInformationList="signInErrorDebugInformationList",e.signInErrorDescription="signInErrorDescription",e.signInErrorDescriptionContainer="signInErrorDescriptionContainer",e.signInErrorMoreInformation="signInErrorMoreInformation",e.signInLogo="signInLogo",e.signInMessageLabelContainer="signInMessageLabelContainer",e.signInText="signInText",e.signInToggleErrorDropdownArrow="signInToggleErrorDropdownArrow",e.signInToggleErrorInformationText="signInToggleErrorInformationText",e.clipperSuccessContainer="clipperSuccessContainer",e.launchOneNoteButton="launchOneNoteButton",e.pageNavAnimatedTooltip="pageNavAnimatedTooltip",e.unsupportedBrowserContainer="unsupportedBrowserContainer",e.unsupportedBrowserPanel="unsupportedBrowserPanel",e.changeLogSubPanel="changeLogSubPanel",e.checkOutWhatsNewButton="checkOutWhatsNewButton",e.proceedToWebClipperButton="proceedToWebClipperButton",e.whatsNewTitleSubPanel="whatsNewTitleSubPanel",e.clipperRootScript="oneNoteCaptureRootScript",e.clipperUiFrame="oneNoteWebClipper",e.clipperPageNavFrame="oneNoteWebClipperPageNav",e.clipperExtFrame="oneNoteWebClipperExtension",e.brandingContainer="brandingContainer"}(o=e.Ids||(e.Ids={}));var i;!function(e){e.accept="Accept",e.appIdKey="MS-Int-AppId",e.correlationId="X-CorrelationId",e.noAuthKey="X-NoAuth",e.userSessionIdKey="X-UserSessionId"}(i=e.HeaderValues||(e.HeaderValues={}));var a;!function(e){e.debugLoggingInjectedAndExtension="DEBUGLOGGINGINJECTED_AND_EXTENSION",e.extensionAndUi="EXTENSION_AND_UI",e.injectedAndUi="INJECTED_AND_UI",e.injectedAndExtension="INJECTED_AND_EXTENSION",e.extensionAndPageNavUi="EXTENSION_AND_PAGENAVUI",e.pageNavInjectedAndPageNavUi="PAGENAVINJECTED_AND_PAGENAVUI",e.pageNavInjectedAndExtension="PAGENAVINJECTED_AND_EXTENSION"}(a=e.CommunicationChannels||(e.CommunicationChannels={}));var s;!function(e){e.clipperStrings="CLIPPER_STRINGS",e.clipperStringsFrontLoaded="CLIPPER_STRINGS_FRONT_LOADED",e.closePageNavTooltip="CLOSE_PAGE_NAV_TOOLTIP",e.createHiddenIFrame="CREATE_HIDDEN_IFRAME",e.ensureFreshUserBeforeClip="ENSURE_FRESH_USER_BEFORE_CLIP",e.escHandler="ESC_HANDLER",e.getInitialUser="GET_INITIAL_USER",e.getPageNavTooltipProps="GET_PAGE_NAV_TOOLTIP_PROPS",e.getStorageValue="GET_STORAGE_VALUE",e.getMultipleStorageValues="GET_MULTIPLE_STORAGE_VALUES",e.getTooltipToRenderInPageNav="GET_TOOLTIP_TO_RENDER_IN_PAGE_NAV",e.hideUi="HIDE_UI",e.invokeClipper="INVOKE_CLIPPER",e.invokeClipperFromPageNav="INVOKE_CLIPPER_FROM_PAGE_NAV",e.invokeDebugLogging="INVOKE_DEBUG_LOGGING",e.invokePageNav="INVOKE_PAGE_NAV",e.extensionNotAllowedToAccessLocalFiles="EXTENSION_NOT_ALLOWED_TO_ACCESS_LOCAL_FILES",e.noOpTracker="NO_OP_TRACKER",e.onSpaNavigate="ON_SPA_NAVIGATE",e.refreshPage="REFRESH_PAGE",e.showRefreshClipperMessage="SHOW_REFRESH_CLIPPER_MESSAGE",e.setInjectOptions="SET_INJECT_OPTIONS",e.setInvokeOptions="SET_INVOKE_OPTIONS",e.setStorageValue="SET_STORAGE_VALUE",e.signInUser="SIGN_IN_USER",e.signOutUser="SIGN_OUT_USER",e.tabToLowestIndexedElement="TAB_TO_LOWEST_INDEXED_ELEMENT",e.takeTabScreenshot="TAKE_TAB_SCREENSHOT",e.telemetry="TELEMETRY",e.toggleClipper="TOGGLE_CLIPPER",e.unloadHandler="UNLOAD_HANDLER",e.updateFrameHeight="UPDATE_FRAME_HEIGHT",e.updatePageInfoIfUrlChanged="UPDATE_PAGE_INFO_IF_URL_CHANGED"}(s=e.FunctionKeys||(e.FunctionKeys={}));var u;!function(e){e.tab=9,e.enter=13,e.esc=27,e.c=67,e.down=40,e.up=38,e.left=37,e.right=39,e.space=32,e.home=36,e.end=35}(u=e.KeyCodes||(e.KeyCodes={}));var l;!function(e){e.c="KeyC"}(l=e.StringKeyCodes||(e.StringKeyCodes={}));var c;!function(e){e.clientInfo="CLIENT_INFO",e.isFullScreen="IS_FULL_SCREEN",e.pageInfo="PAGE_INFO",e.sessionId="SESSION_ID",e.user="USER"}(c=e.SmartValueKeys||(e.SmartValueKeys={}));var p;!function(e){e.sectionPickerContainerHeight=280,e.clipperUiWidth=322,e.customCursorSize=20,e.clipperUiTopRightOffset=20,e.clipperUiDropShadowBuffer=7,e.clipperUiInnerPadding=30;var t;!function(e){e.oneNoteHighlightColor="#fefe56"}(t=e.Colors||(e.Colors={}))}(p=e.Styles||(e.Styles={}));var f;!function(e){e.serviceDomain="https://www.onenote.com",e.augmentationApiUrl=e.serviceDomain+"/onaugmentation/clipperextract/v1.0/",e.changelogUrl=e.serviceDomain+"/whatsnext/webclipper",e.clipperFeedbackUrl=e.serviceDomain+"/feedback",e.clipperInstallPageUrl=e.serviceDomain+"/clipper/installed",e.fullPageScreenshotUrl=e.serviceDomain+"/onaugmentation/clipperDomEnhancer/v1.0/",e.localizedStringsUrlBase=e.serviceDomain+"/strings?ids=WebClipper.",e.msaDomain="https://login.live.com",e.orgIdDomain="https://login.microsoftonline.com";var t;!function(t){t.authRedirectUrl=e.serviceDomain+"/webclipper/auth",t.signInUrl=e.serviceDomain+"/webclipper/signin",t.signOutUrl=e.serviceDomain+"/webclipper/signout",t.userInformationUrl=e.serviceDomain+"/webclipper/userinfo"}(t=e.Authentication||(e.Authentication={}));var n;!function(e){e.authType="authType",e.category="category",e.changelogLocale="omkt",e.channel="channel",e.clientType="clientType",e.clipperId="clipperId",e.clipperVersion="clipperVersion",e.correlationId="correlationId",e.error="error",e.errorDescription="error_?description",e.event="event",e.eventName="eventName",e.failureId="failureId",e.failureInfo="failureInfo",e.failureType="failureType",e.inlineInstall="inlineInstall",e.label="label",e.noOpType="noOpType",e.stackTrace="stackTrace",e.timeoutInMs="timeoutInMs",e.url="url",e.userSessionId="userSessionId",e.wdFromClipper="wdfromclipper"}(n=e.QueryParams||(e.QueryParams={}))}(f=e.Urls||(e.Urls={}));var g;!function(e){e.oneNoteClipperUsage="OneNoteClipperUsage"}(g=e.LogCategories||(e.LogCategories={}));var d;!function(e){e.fontSizeStep=2,e.maxClipSuccessForRatingsPrompt=12,e.maximumJSTimeValue=864e13,e.maximumFontSize=72,e.maximumNumberOfTimesToShowTooltips=3,e.maximumMimeSizeLimit=249e5,e.minClipSuccessForRatingsPrompt=4,e.minimumFontSize=8,e.minTimeBetweenBadRatings=6048e6,e.noOpTrackerTimeoutDuration=2e4,e.numRetriesPerPatchRequest=3,e.pdfCheckCreatePageInterval=2e3,e.pdfClippingMessageDelay=5e3,e.pdfExtraPageLoadEachSide=1,e.pdfInitialPageLoadCount=3,e.timeBetweenDifferentTooltips=6048e5,e.timeBetweenSameTooltip=18144e5,e.timeBetweenTooltips=18144e5,e.timeUntilPdfPageNumbersFadeOutAfterScroll=1e3}(d=e.Settings||(e.Settings={}));var h;!function(e){e.setNameForArrowKeyNav="setnameforarrowkeynav"}(h=e.CustomHtmlAttributes||(e.CustomHtmlAttributes={}));var m;!function(e){e.modeButtonSet="ariaModeButtonSet",e.pdfPageSelection="pdfPageSelection",e.serifGroupSet="serifGroupSet"}(m=e.AriaSet||(e.AriaSet={}))}(r=n.Constants||(n.Constants={}))},{}],11:[function(e,t,n){"use strict";var r=e("./objectUtils"),o=function(){function e(){}return e.readCookie=function(e,t){r.ObjectUtils.isNullOrUndefined(t)&&(t=document);for(var n=document.cookie.split(";").map(function(e){return e.split("=")}),o=0,i=n;o<i.length;o++){var a=i[o];if(a[0].trim()===e)return a[1].trim()}},e}();n.CookieUtils=o},{"./objectUtils":60}],12:[function(e,t,n){"use strict";var r,o=e("./khanAcademyVideoExtractor"),i=e("./videoUtils"),a=e("./vimeoVideoExtractor"),s=e("./YoutubeVideoExtractor");!function(e){function t(e){var t=i.SupportedVideoDomains;switch(e){case t.KhanAcademy:return new o.KhanAcademyVideoExtractor;case t.Vimeo:return new a.VimeoVideoExtractor;case t.YouTube:return new s.YoutubeVideoExtractor;default:return}}e.createVideoExtractor=t}(r=n.VideoExtractorFactory||(n.VideoExtractorFactory={}))},{"./YoutubeVideoExtractor":13,"./khanAcademyVideoExtractor":15,"./videoUtils":17,"./vimeoVideoExtractor":18}],13:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./domUtils"),i=e("./videoExtractor"),a=e("../urlUtils"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.youTubeWatchVideoBaseUrl="https://www.youtube.com/watch",t.youTubeVideoIdQueryKey="v",t.dataOriginalSrcAttribute="data-original-src",t}return r(t,e),t.prototype.createEmbeddedVideosFromHtml=function(e){if(!e)return[];var t=document.createElement("div");t.innerHTML=e;for(var n=t.getElementsByTagName("iframe"),r=[],o=0;o<n.length;o++)if(this.isYoutubeUrl(n[o].src)){var i=this.createEmbeddedVideoFromUrl(n[o].src);i&&r.push(i)}return r},t.prototype.isYoutubeUrl=function(e){return/[^\w]youtube\.com\/watch(\?v=(\w+)|.*\&v=(\w+))/.test(e)||/[^\w]youtube\.com\/embed\/(\w+)/.test(e)},t.prototype.createEmbeddedVideoFromUrl=function(e){if(e){if(0===a.UrlUtils.getPathname(e).indexOf("/watch"))return this.createEmbeddedVideoFromId(a.UrlUtils.getQueryValue(e,this.youTubeVideoIdQueryKey));if(0===a.UrlUtils.getPathname(e).indexOf("/embed")){var t=e.match(/youtube\.com\/embed\/([^?|\/?]+)/);return this.createEmbeddedVideoFromId(t[1])}}},t.prototype.createEmbeddedVideoFromId=function(e){if(e){var t=o.DomUtils.createEmbedVideoIframe(),n="https://www.youtube.com/embed/"+e;t.src=n;var r=a.UrlUtils.addUrlQueryValue(this.youTubeWatchVideoBaseUrl,this.youTubeVideoIdQueryKey,e);return t.setAttribute(this.dataOriginalSrcAttribute,r),t}},t}(i.VideoExtractor);n.YoutubeVideoExtractor=s},{"../urlUtils":71,"./domUtils":14,"./videoExtractor":16}],14:[function(e,t,n){"use strict";var r=e("../constants"),o=e("../objectUtils"),i=e("./videoUtils"),a=e("./VideoExtractorFactory"),s=function(){function e(){}return e.cleanHtml=function(t){var n=[];for(var r in e.attributesAllowedByOnml)e.attributesAllowedByOnml.hasOwnProperty(r)&&(n=n.concat(e.attributesAllowedByOnml[r]));var o=e.htmlTags.concat(e.markupTags).concat(e.tableTags),i=sanitizeHtml(t,{allowedTags:o,allowedAttributes:e.attributesAllowedByOnml,allowedSchemes:sanitizeHtml.defaults.allowedSchemes.concat(["data"]),allowedClasses:{"*":["MainArticleContainer"]}});return i},e.removeStylesWithBase64EncodedBinaries=function(t){e.domReplacer(t,"style",function(e){return e.innerHTML.indexOf("data:application")!==-1?void 0:e})},e.removeElementsNotSupportedInOnml=function(t){e.domReplacer(t,e.tagsNotSupportedInOnml.join());var n=[e.tags.main,e.tags.article,e.tags.figure,e.tags.header,e.tags.center];e.domReplacer(t,n.join(),function(t){var n=document.createElement("div");return n.innerHTML=e.cleanHtml(t.innerHTML),n})},e.domReplacer=function(e,t,n){void 0===n&&(n=function(){});for(var r=e.querySelectorAll(t),o=0;o<r.length;o++){var i=r[o];try{var a=n(i,o);a?i!==a&&i.parentNode.replaceChild(a,i):i.parentNode.removeChild(i)}catch(e){}}},e.domReplacerAsync=function(e,t,n){return void 0===n&&(n=function(){return Promise.resolve(void 0)}),new Promise(function(r){var o=e.querySelectorAll(t),i=0;0===o.length&&r();for(var a=function(e){var t=o[e];n(t,e).then(function(e){e?t!==e&&t.parentNode.replaceChild(e,t):t.parentNode.removeChild(t)},function(){}).then(function(){++i===o.length&&r()})},s=0;s<o.length;s++)a(s)})},e.getPageContentType=function(e){var t=e.createElement("a");if(t.href=e.URL,/\.pdf$/i.test(t.pathname))return OneNoteApi.ContentType.EnhancedUrl;var n=e.querySelector("embed");return n&&/application\/pdf/i.test(n.type)?OneNoteApi.ContentType.EnhancedUrl:window&&window.PDFJS?OneNoteApi.ContentType.EnhancedUrl:OneNoteApi.ContentType.Html},e.fetchCanonicalUrl=function(e){var t=e.querySelectorAll("link[rel=canonical]");if(0===t.length)return e.URL;for(var n=t[0].href,r=void 0,o=1;o<t.length;o++)r=t.item(o).href,r.length<n.length&&(n=r);return n},e.getCleanDomOfCurrentPage=function(t){var n=e.cloneDocument(t);e.convertCanvasElementsToImages(n,t),e.addBaseTagIfNecessary(n,t.location),e.addImageSizeInformationToDom(n),e.removeUnwantedItems(n);var r=e.getDomString(n);return r},e.removeUnwantedItems=function(t){e.removeStylesWithBase64EncodedBinaries(t),e.removeClipperElements(t),e.removeUnwantedElements(t),e.removeUnwantedAttributes(t),e.removeUnsupportedHrefs(t)},e.addPreviewContainerStyling=function(e){e.setAttribute("style","margin-bottom: 16px")},e.addEmbeddedVideosWhereSupported=function(t,n,r){var o=i.VideoUtils.videoDomainIfSupported(r);if(!o)return Promise.resolve();var s=[];try{var u=i.SupportedVideoDomains[o],l=a.VideoExtractorFactory.createVideoExtractor(u);l&&(s=s.concat(l.createEmbeddedVideosFromPage(r,n)))}catch(e){return Promise.reject({error:JSON.stringify({doc:t.outerHTML,pageContent:n,message:e.message})})}return Promise.resolve(e.addVideosToElement(t,s))},e.createEmbedVideoIframe=function(){var e=document.createElement("iframe");return e.width="600",e.height="338",e.frameBorder="0",e.allowFullscreen=!1,e},e.addVideosToElement=function(t,n){if(!o.ObjectUtils.isNullOrUndefined(t)&&!o.ObjectUtils.isNullOrUndefined(n)&&0!==n.length){for(var r,i=[],a=0,s=n;a<s.length;a++){var u=s[a];o.ObjectUtils.isNullOrUndefined(u.src)||o.ObjectUtils.isNullOrUndefined(u.getAttribute(e.dataOriginalSrcAttribute))?i.push({srcAttribute:"",dataOriginalSrcAttribute:""}):(r=e.insertIFrame(t,u,r),r=e.insertSpacer(t,r.nextSibling),i.push({srcAttribute:u.src,dataOriginalSrcAttribute:u.getAttribute(e.dataOriginalSrcAttribute)}))}return i}},e.insertIFrame=function(e,t,n){var r;return r=o.ObjectUtils.isNullOrUndefined(n)?e.children[0]:n.nextSibling,e.insertBefore(t,r)},e.insertSpacer=function(e,t){var n=document.createElement("br");return e.insertBefore(n,t)},e.cloneDocument=function(e){return e.cloneNode(!0)},e.addBaseTagIfNecessary=function(t,n){if(!t.head){var r=t.createElement(e.tags.head),o=t.getElementsByTagName(e.tags.html)[0];o.insertBefore(r,o.children[0])}n||(n=document.location);var i=t.head.getElementsByTagName(e.tags.base);if(0===i.length){var a=n.href.split("#")[0].split("?")[0];a=a.substr(0,a.lastIndexOf("/")+1);var s=t.createElement(e.tags.base);s.href=a,t.head.insertBefore(s,t.head.firstChild)}},e.removeBlankImages=function(t){return e.domReplacerAsync(t,e.tags.img,function(t){return new Promise(function(n){var r=t,o=new Image;o.crossOrigin="anonymous",o.onload=function(){n(e.imageIsBlank(o)?void 0:t)},o.onerror=function(){n(t)},o.src=r.src||r.getAttribute("src")})})},e.imageIsBlank=function(e){if(0===e.width||0===e.height)return!1;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);try{for(var r=n.getImageData(0,0,t.width,t.height),o=r.data,i=0;i<o.length;i+=4)if(0!==o[i+3]&&(255!==o[i]||255!==o[i+1]||255!==o[i+2]))return!1;return!0}catch(e){return!1}},e.removeClipperElements=function(t){var n=this;e.domReplacer(t,["#"+r.Constants.Ids.clipperRootScript,"#"+r.Constants.Ids.clipperUiFrame,"#"+r.Constants.Ids.clipperExtFrame].join()),e.domReplacer(t,e.tags.iframe,function(e){var t=e,r=t.src;if(!n.isLocalReferenceUrl(r))return t})},e.removeUnsupportedHrefs=function(t){var n=this;e.domReplacer(t,e.tags.link,function(e){var t=e,r=t.href;if(!n.isLocalReferenceUrl(r))return t})},e.removeUnwantedElements=function(t){e.domReplacer(t,[e.tags.script,e.tags.noscript].join())},e.removeUnwantedAttributes=function(e){for(var t=e.getElementsByTagName("IMG"),n=0;n<t.length;n++){var r=t[n];r.srcset=void 0,r.removeAttribute("srcset")}},e.convertRelativeUrlsToAbsolute=function(t){e.domReplacer(t,e.tags.img,function(t,n){var r=t,o=r.attributes.src;if(o&&o.value)return r.src=e.toAbsoluteUrl(o.value,location.origin),r}),e.domReplacer(t,e.tags.a,function(t,n){var r=t,o=r.attributes.href;return o&&o.value?(r.href=e.toAbsoluteUrl(o.value,location.origin),r):t})},e.toAbsoluteUrl=function(e,t){if(!e||!t)throw new Error("parameters must be non-empty, but was: "+e+", "+t);/^\/\/[^\/]/.test(e)&&(e=location.protocol+e);
var n=new URI(e);return n.is("relative")?n.absoluteTo(t).valueOf():e},e.convertCanvasElementsToImages=function(t,n){var r=n.querySelectorAll(e.tags.canvas);e.domReplacer(t,e.tags.canvas,function(n,o){var i=r[o];if(i){var a=t.createElement(e.tags.img);return a.src=i.toDataURL(),a.style.cssText=window.getComputedStyle(i).cssText,a}})},e.addImageSizeInformationToDom=function(e){for(var t=e.getElementsByTagName("img"),n=0;n<t.length;n++){var r=t[n];if(!r.hasAttribute("data-height")){var o=r.height;r.setAttribute("data-height",o.toString())}if(!r.hasAttribute("data-width")){var i=r.width;r.setAttribute("data-width",i.toString())}}},e.getImageDataUrl=function(t){return new Promise(function(n,r){(o.ObjectUtils.isNullOrUndefined(t)||""===t)&&r({error:"image source is undefined or empty"});var i=new Image;i.crossOrigin="anonymous",i.onload=function(){var r=document.createElement(e.tags.canvas);r.width=i.naturalWidth,r.height=i.naturalHeight,r.getContext("2d").drawImage(i,0,0);try{var o=r.toDataURL("image/png");o=e.adjustImageQualityIfNecessary(r,o),n(o)}catch(e){n(t)}},i.onerror=function(e){var t,n=e.currentTarget;o.ObjectUtils.isNullOrUndefined(n)||(t=n.src),r({error:"onerror occurred fetching "+t})},i.src=t,(i.complete||void 0===i.complete)&&(i.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",i.src=t)})},e.adjustImageQualityIfNecessary=function(t,n,r,o){void 0===r&&(r=1),void 0===o&&(o=.1);for(var i=0;r>0&&n.length>e.maxBytesForMediaTypes;)n=t.toDataURL("image/jpeg",r),r-=o,i++;return n},e.getDomString=function(t){return e.getDoctype(t)+t.documentElement.outerHTML},e.getDocumentFromDomString=function(e,t){var n=document.implementation.createHTMLDocument(t);return n.documentElement.innerHTML=e,n},e.getDoctype=function(e){var t=e.doctype;return t?"<!DOCTYPE "+t.name+(t.publicId?' PUBLIC "'+t.publicId+'"':"")+(!t.publicId&&t.systemId?" SYSTEM":"")+(t.systemId?' "'+t.systemId+'"':"")+">":""},e.getByteSize=function(t){return unescape?unescape(encodeURIComponent(t)).length:e.getByteArray(t).length},e.truncateStringToByteSize=function(t,n){var r=e.getByteArray(t);if(r.length<=n)return t;r=r.slice(0,n);for(var o=r.join("");o.length;)try{return o=o.slice(0,-1),decodeURIComponent(o)}catch(e){return""}},e.getByteArray=function(e){return encodeURIComponent(e).match(/%..|./g)||[]},e.getLocale=function(e){var t=e.getElementsByTagName("html")[0].getAttribute("lang");return t?t:window.navigator.language||window.navigator.userLanguage},e.getFileNameFromUrl=function(e){var t=e.createElement("a");if(t.href=e.URL,t.pathname.match(new RegExp(".pdf$","gi"))){var n=t.pathname.match(/[^/]+$/g);if(n)return decodeURIComponent(n.pop())}return e.title},e.textNodesNoWhitespaceUnder=function(e){for(var t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode:function(e){if(!/^\s*$/.test(e.data))return NodeFilter.FILTER_ACCEPT}},!1),r=n.nextNode();r;)t.push(r),r=n.nextNode();return t},e.removeEventListenerAttributes=function(e){for(var t=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onload","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur"],n=0;n<t.length;n++)for(var r=e.querySelectorAll("["+t[n]+"]"),o=0;o<r.length;o++)r[o].removeAttribute(t[n])},e.toOnml=function(t){return e.removeElementsNotSupportedInOnml(t),e.removeDisallowedIframes(t),e.removeUnwantedItems(t),e.convertRelativeUrlsToAbsolute(t),e.removeAllStylesAndClasses(t),e.removeEventListenerAttributes(t),e.removeBlankImages(t)},e.removeDisallowedIframes=function(t){e.domReplacer(t,e.tags.iframe,function(e){var t=e.src,n=i.VideoUtils.videoDomainIfSupported(t);if(n){var r=i.SupportedVideoDomains[n],o=a.VideoExtractorFactory.createVideoExtractor(r);return o.createEmbeddedVideoFromUrl(t)}})},e.removeAllStylesAndClasses=function(t){e.domReplacer(t,"*",function(e,t){return e.removeAttribute("style"),e.removeAttribute("class"),e})},e.isScrolledIntoPartialView=function(e){var t=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom,r=t<window.innerHeight&&n>=0;return r},e.getScrollPercent=function(e,t){if(void 0===t&&(t=!1),!e)return 0;var n=1*e.scrollTop/(e.scrollHeight-e.clientHeight);return t?n:100*n},e.isLocalReferenceUrl=function(e){return!(0===e.indexOf("https://")||0===e.indexOf("http://"))},e}();s.tags={a:"a",b:"b",applet:"applet",article:"article",audio:"audio",base:"base",body:"body",br:"br",button:"button",canvas:"canvas",center:"center",cite:"cite",code:"code",del:"del",div:"div",em:"em",embed:"embed",figure:"figure",font:"font",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",li:"li",link:"link",main:"main",map:"map",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",noscript:"noscript",object:"object",ol:"ol",p:"p",pre:"pre",progress:"progress",script:"script",span:"span",source:"source",strike:"strike",strong:"strong",style:"style",sub:"sub",sup:"sup",svg:"svg",table:"table",td:"td",title:"title",tr:"tr",u:"u",ul:"ul",video:"video"},s.attributesAllowedByOnml={a:["href","name","target"],img:["src"],"*":["src","background-color","color","font-family","font-size","data*","alt","height","width","style","id","type"]},s.tableTags=[s.tags.table,s.tags.td,s.tags.tr],s.markupTags=[s.tags.b,s.tags.em,s.tags.strong,s.tags.i,s.tags.u,s.tags.strike,s.tags.del,s.tags.sup,s.tags.sub,s.tags.cite,s.tags.font,s.tags.pre,s.tags.code],s.htmlTags=[s.tags.html,s.tags.head,s.tags.title,s.tags.meta,s.tags.body,s.tags.div,s.tags.span,s.tags.article,s.tags.figure,s.tags.header,s.tags.main,s.tags.center,s.tags.iframe,s.tags.a,s.tags.p,s.tags.br,s.tags.h1,s.tags.h2,s.tags.h3,s.tags.h4,s.tags.h5,s.tags.h6,s.tags.ul,s.tags.ol,s.tags.li,s.tags.img,s.tags.object,s.tags.video],s.tagsNotSupportedInOnml=[s.tags.applet,s.tags.audio,s.tags.button,s.tags.canvas,s.tags.embed,s.tags.hr,s.tags.input,s.tags.link,s.tags.map,s.tags.menu,s.tags.menuitem,s.tags.meter,s.tags.noscript,s.tags.progress,s.tags.script,s.tags.source,s.tags.style,s.tags.svg,s.tags.video],s.dataOriginalSrcAttribute="data-original-src",s.maxBytesForMediaTypes=2096652,n.DomUtils=s},{"../constants":10,"../objectUtils":60,"./VideoExtractorFactory":12,"./videoUtils":17}],15:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./videoExtractor"),i=e("./videoUtils"),a=e("./youtubeVideoExtractor"),s=function(e){function t(){var t=e.call(this)||this;return t.youtubeExtractor=new a.YoutubeVideoExtractor,t}return r(t,e),t.prototype.createEmbeddedVideosFromHtml=function(e){var t=this;if(!e)return[];var n=/\sid\s*=\s*("\s*video_(\S+)\s*"|'\s*video_(\S+)\s*')/gi,r=/data-youtubeid\s*=\s*("\s*video_(\S+)\s*"|'\s*video_(\S+)\s*')/gi,o=i.VideoUtils.matchRegexFromPageContent(e,[n,r]);return o?o.map(function(e){return t.createEmbeddedVideoFromId(e)}):[]},t.prototype.createEmbeddedVideoFromUrl=function(e){},t.prototype.createEmbeddedVideoFromId=function(e){return this.youtubeExtractor.createEmbeddedVideoFromId(e)},t}(o.VideoExtractor);n.KhanAcademyVideoExtractor=s},{"./videoExtractor":16,"./videoUtils":17,"./youtubeVideoExtractor":19}],16:[function(e,t,n){"use strict";var r=e("lodash"),o=function(){function e(){}return e.prototype.createEmbeddedVideosFromPage=function(e,t){var n=[],o=this.createEmbeddedVideoFromUrl(e);return o&&n.push(o),n=n.concat(this.createEmbeddedVideosFromHtml(t)),r.uniqWith(n,function(e,t){return e.src===t.src})},e}();n.VideoExtractor=o},{lodash:79}],17:[function(e,t,n){"use strict";var r,o=e("../objectUtils"),i=e("../urlUtils");!function(e){e[e.YouTube=0]="YouTube",e[e.Vimeo=1]="Vimeo",e[e.KhanAcademy=2]="KhanAcademy"}(r=n.SupportedVideoDomains||(n.SupportedVideoDomains={}));var a=function(){function e(){this.youTubeWatchVideoBaseUrl="https://www.youtube.com/watch",this.youTubeVideoIdQueryKey="v"}return e.videoDomainIfSupported=function(e){if(e){var t=e.toLowerCase();if(i.UrlUtils.onWhitelistedDomain(t)){var n=i.UrlUtils.getHostname(t).toLowerCase();for(var o in r){var a=r[o];if("string"==typeof a&&n.indexOf(a.toLowerCase()+".")>-1)return a}}}},e.matchRegexFromPageContent=function(e,t){if(!o.ObjectUtils.isNullOrUndefined(e)){var n,r=[];if(t.forEach(function(t){for(;n=t.exec(e);)n[2]?r.push(n[2]):n[3]&&r.push(n[3])}),0!==r.length)return r}},e}();n.VideoUtils=a},{"../objectUtils":60,"../urlUtils":71}],18:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./domUtils"),i=e("./videoExtractor"),a=e("./videoUtils"),s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dataOriginalSrcAttribute="data-original-src",t}return r(t,e),t.prototype.createEmbeddedVideosFromHtml=function(e){var t=this;if(!e)return[];var n=/id\s*=\s*("\s*clip_(\d+)\s*"|'\s*clip_(\d+)\s*')/gi,r=/player\.vimeo\.com\/video\/((\d+))\d{0}/gi,o=a.VideoUtils.matchRegexFromPageContent(e,[n,r]);return o?o.map(function(e){return t.createEmbeddedVideoFromId(e)}):[]},t.prototype.createEmbeddedVideoFromUrl=function(e){if(e){var t=e.match(/^https?:\/\/vimeo\.com\/(\d+)\d{0}/);return t?this.createEmbeddedVideoFromId(t[1]):(t=e.match(/^https?:\/\/player.vimeo.com\/video\/(\d+)\d{0}/),t?this.createEmbeddedVideoFromId(t[1]):void 0)}},t.prototype.createEmbeddedVideoFromId=function(e){if(e){var t=o.DomUtils.createEmbedVideoIframe(),n="https://player.vimeo.com/video/"+e;return t.src=n,t.setAttribute(this.dataOriginalSrcAttribute,n),t}},t}(i.VideoExtractor);n.VimeoVideoExtractor=s},{"./domUtils":14,"./videoExtractor":16,"./videoUtils":17}],19:[function(e,t,n){arguments[4][13][0].apply(n,arguments)},{"../urlUtils":71,"./domUtils":14,"./videoExtractor":16,dup:13}],20:[function(e,t,n){"use strict";var r=e("../communicator/smartValue"),o=e("../logging/log"),i=e("../http/HttpWithRetries"),a=e("../storage/clipperStorageKeys"),s=e("../userInfo"),u=e("../constants"),l=e("../objectUtils"),c=e("../stringUtils"),p=e("../urlUtils"),f=function(){function e(e,t){this.user=new r.SmartValue,this.logger=t,this.clipperData=e}return e.prototype.updateUserInfoData=function(e,t){var n=this;return new Promise(function(r){var i=0,u=n.clipperData.getValue(a.ClipperStorageKeys.userInformation);if(u){var c=void 0;try{c=JSON.parse(u)}catch(e){n.logger.logJsonParseUnexpected(u)}c&&c.data&&l.ObjectUtils.isNumeric(c.data.accessTokenExpiration)&&(i=Math.max(1e3*c.data.accessTokenExpiration-18e4,0))}var p=function(){return n.retrieveUserInformation(e,void 0)},f=new o.Event.PromiseEvent(o.Event.Label.GetExistingUserInformation);f.setCustomProperty(o.PropertyName.Custom.UserInformationStored,!!u),n.clipperData.getFreshValue(a.ClipperStorageKeys.userInformation,p,i).then(function(e){var r=n.isValidUserInformation(e.data);f.setCustomProperty(o.PropertyName.Custom.FreshUserInfoAvailable,r);var i=n.isThirdPartyCookiesEnabled(e.data);f.setCustomProperty(o.PropertyName.Custom.WriteableCookies,i),f.setCustomProperty(o.PropertyName.Custom.UserUpdateReason,s.UpdateReason[t]),r?n.user.set({user:e.data,lastUpdated:e.lastUpdated,updateReason:t,writeableCookies:i}):n.user.set({updateReason:t,writeableCookies:i})},function(e){f.setStatus(o.Status.Failed),f.setFailureInfo(e),n.user.set({updateReason:t})}).then(function(){n.logger.logEvent(f),r(n.user.get())})})},e.prototype.retrieveUserInformation=function(e,t){var n=this;return void 0===t&&(t=void 0),new Promise(function(r,a){var s=p.UrlUtils.addUrlQueryValue(u.Constants.Urls.Authentication.userInformationUrl,u.Constants.Urls.QueryParams.clipperId,e),f=new o.Event.PromiseEvent(o.Event.Label.RetrieveUserInformation),g=c.StringUtils.generateGuid();f.setCustomProperty(o.PropertyName.Custom.CorrelationId,g);var d={};d["Content-type"]="application/x-www-form-urlencoded",d[u.Constants.HeaderValues.correlationId]=g;var h="";l.ObjectUtils.isNullOrUndefined(t)||(h=t.replace(/\+/g,"%2B")),i.HttpWithRetries.post(s,h,d).then(function(e){var t=e.response;r({parsedResponse:t,request:e})},function(e){f.setStatus(o.Status.Failed),f.setFailureInfo(e),a(e)}).then(function(){n.logger.logEvent(f)})})},e.prototype.isValidUserInformation=function(e){return!!(e&&e.accessToken&&e.accessTokenExpiration>0&&e.authType)},e.prototype.isThirdPartyCookiesEnabled=function(e){return void 0===e.cookieInRequest||e.cookieInRequest},e}();n.AuthenticationHelper=f},{"../communicator/smartValue":9,"../constants":10,"../http/HttpWithRetries":37,"../logging/log":45,"../objectUtils":60,"../storage/clipperStorageKeys":68,"../stringUtils":70,"../urlUtils":71,"../userInfo":72}],21:[function(e,t,n){"use strict";var r=e("../webExtensionBase/webExtensionInject"),o=e("../webExtensionBase/webExtension"),i=e("../webExtensionBase/webExtensionMessageHandler");o.WebExtension.browser=chrome,r.invoke({frameUrl:frameUrl,enableAddANote:!0,enableEditableTitle:!0,enableRegionClipping:!0,extMessageHandlerThunk:function(){return new i.WebExtensionContentMessageHandler}})},{"../webExtensionBase/webExtension":32,"../webExtensionBase/webExtensionInject":33,"../webExtensionBase/webExtensionMessageHandler":34}],22:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../constants"),i=e("../objectUtils"),a=e("../communicator/communicator"),s=e("../communicator/communicatorPassthrough"),u=e("../communicator/iframeMessageHandler"),l=e("../communicator/smartValue"),c=e("../domParsers/domUtils"),p=e("../logging/log"),f=e("../logging/communicatorLoggerPure"),g=e("../storage/clipperStorageKeys"),d=e("./styledFrameFactory"),h=e("./frameInjectBase"),m=e("./invokeOptions"),v=function(e){function t(t){var n=e.call(this,t)||this;n.frameHeight=100;try{n.updateUiSizeAttributes(),n.overrideTransformStyles(document.documentElement),n.logger=new f.CommunicatorLoggerPure(n.uiCommunicator),n.updatePageInfo(),n.extCommunicator.callRemoteFunction(o.Constants.FunctionKeys.setStorageValue,{param:{key:g.ClipperStorageKeys.lastInvokedDate,value:Date.now().toString()}}),n.extCommunicator.registerFunction(o.Constants.FunctionKeys.setInvokeOptions,function(e){switch(e.invokeMode){case m.InvokeMode.ContextTextSelection:if(e.invokeDataForMode){e.invokeDataForMode=n.toScrubbedHtml(e.invokeDataForMode),n.sendInvokeOptionsToUi(e);break}!rangy.initialized&&rangy.init&&rangy.init();var t=rangy.getSelection(),r=t.getRangeAt(0),o=(new DOMParser).parseFromString(r.toHtml(),"text/html");c.DomUtils.toOnml(o).then(function(){e.invokeDataForMode=n.toScrubbedHtml(o.body.innerHTML),n.sendInvokeOptionsToUi(e)});break;default:n.sendInvokeOptionsToUi(e)}}),document.onkeydown=function(e){e.keyCode===o.Constants.KeyCodes.tab&&"none"!==window.getComputedStyle(n.frame).display&&n.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.tabToLowestIndexedElement)}}catch(e){throw n.handleConstructorError(e),e}return n}return r(t,e),t.main=function(e){var n=window.oneNoteInjectBaseObject;if(document.getElementById(o.Constants.Ids.clipperUiFrame)&&n)return"none"===window.getComputedStyle(n.frame).display&&n.updatePageInfo(),n.toggleClipper(),n;if(!document.getElementById(o.Constants.Ids.clipperUiFrame)){var r=new t(e);return window.oneNoteInjectBaseObject=r,r}},t.prototype.checkForNoOps=function(){var e=document.getElementById(o.Constants.Ids.clipperUiFrame),t=i.ObjectUtils.isNullOrUndefined(e),n=window.location.href;if(t)p.ErrorUtils.sendNoOpTrackerRequest({label:p.NoOp.Label.WebClipperUiFrameDidNotExist,channel:o.Constants.CommunicationChannels.injectedAndUi,clientInfo:this.clientInfo,url:n});else{var r="none"!==window.getComputedStyle(e).display;r||p.ErrorUtils.sendNoOpTrackerRequest({label:p.NoOp.Label.WebClipperUiFrameIsNotVisible,channel:o.Constants.CommunicationChannels.injectedAndUi,clientInfo:this.clientInfo,url:n},!0)}var a=p.ErrorUtils.setNoOpTrackerRequestTimeout({label:p.NoOp.Label.InitializeCommunicator,channel:o.Constants.CommunicationChannels.injectedAndUi,clientInfo:this.clientInfo,url:window.location.href});this.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.noOpTracker,{param:(new Date).getTime(),callback:function(){clearTimeout(a)}})},t.prototype.createFrame=function(){this.frame=d.StyledFrameFactory.getStyledFrame(d.Frame.WebClipper),this.frame.id=o.Constants.Ids.clipperUiFrame,this.frame.src=this.options.frameUrl},t.prototype.handleConstructorError=function(e){p.ErrorUtils.sendFailureLogRequest({label:p.Failure.Label.UnhandledExceptionThrown,properties:{failureType:p.Failure.Type.Unexpected,failureInfo:{error:e.toString()},failureId:"InjectBase",stackTrace:p.Failure.getStackTrace(e)},clientInfo:this.clientInfo})},t.prototype.init=function(){this.clientInfo=new l.SmartValue,this.pageInfo=new l.SmartValue,this.isFullScreen=new l.SmartValue(!1)},t.prototype.initializeExtCommunicator=function(e){var t=this;this.extCommunicator=new a.Communicator(e(),o.Constants.CommunicationChannels.injectedAndExtension),this.extCommunicator.registerFunction(o.Constants.FunctionKeys.noOpTracker,function(e){var n=new p.Event.BaseEvent(p.Event.Label.ClearNoOpTracker);return n.setCustomProperty(p.PropertyName.Custom.TimeToClearNoOpTracker,(new Date).getTime()-e),n.setCustomProperty(p.PropertyName.Custom.Channel,o.Constants.CommunicationChannels.injectedAndExtension),t.logger.logEvent(n),Promise.resolve()}),this.extCommunicator.setErrorHandler(function(e){t.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.showRefreshClipperMessage,{param:"Communicator "+o.Constants.CommunicationChannels.injectedAndExtension+" caught an error: "+e.message})}),this.extCommunicator.subscribeAcrossCommunicator(this.clientInfo,o.Constants.SmartValueKeys.clientInfo)},t.prototype.initializeEventListeners=function(){var e=this,t=document.onkeydown;document.onkeydown=function(n){n.keyCode===o.Constants.KeyCodes.esc&&e.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.escHandler),t&&t.call(document,n)},window.onbeforeunload=function(t){e.extCommunicator.callRemoteFunction(o.Constants.FunctionKeys.unloadHandler)};var n=window.history;n.pushState=function(e){return"function"==typeof n.onpushstate&&n.onpushstate({state:e}),n.pushState.apply(n,arguments)},window.onpopstate=n.onpushstate=function(t){e.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.onSpaNavigate)},document.addEventListener("spfdone",function(){e.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.onSpaNavigate)})},t.prototype.initializePassthroughCommunicator=function(e){var t=this;if(!this.options.useInlineBackgroundWorker){new s.CommunicatorPassthrough(e(),new u.IFrameMessageHandler(function(){return t.frame.contentWindow}),o.Constants.CommunicationChannels.extensionAndUi,function(e){t.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.showRefreshClipperMessage,{param:"Communicator "+o.Constants.CommunicationChannels.extensionAndUi+" caught an error: "+e.message}),p.ErrorUtils.handleCommunicatorError(o.Constants.CommunicationChannels.extensionAndUi,e,t.clientInfo)})}},t.prototype.initializeUiCommunicator=function(){var e=this;this.uiCommunicator=new a.Communicator(new u.IFrameMessageHandler(function(){return e.frame.contentWindow}),o.Constants.CommunicationChannels.injectedAndUi),this.uiCommunicator.setErrorHandler(function(t){p.ErrorUtils.handleCommunicatorError(o.Constants.CommunicationChannels.injectedAndUi,t,e.clientInfo)}),this.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.setInjectOptions,{param:this.options}),this.uiCommunicator.broadcastAcrossCommunicator(this.pageInfo,o.Constants.SmartValueKeys.pageInfo),this.uiCommunicator.subscribeAcrossCommunicator(this.isFullScreen,o.Constants.SmartValueKeys.isFullScreen,function(){e.updateUiSizeAttributes()}),this.uiCommunicator.registerFunction(o.Constants.FunctionKeys.updateFrameHeight,function(t){e.frameHeight=t+o.Constants.Styles.clipperUiTopRightOffset+2*o.Constants.Styles.clipperUiDropShadowBuffer,e.updateUiSizeAttributes()}),this.uiCommunicator.registerFunction(o.Constants.FunctionKeys.updatePageInfoIfUrlChanged,function(){return document.URL!==e.pageInfo.get().rawUrl&&e.updatePageInfo(),Promise.resolve()}),this.uiCommunicator.registerFunction(o.Constants.FunctionKeys.hideUi,function(){e.frame.style.display="none"}),this.uiCommunicator.registerFunction(o.Constants.FunctionKeys.refreshPage,function(){location.reload()})},t.prototype.createPageInfo=function(){var e=c.DomUtils.getPageContentType(document);return{canonicalUrl:c.DomUtils.fetchCanonicalUrl(document),contentData:this.getTrimmedDomString(),contentLocale:c.DomUtils.getLocale(document),contentTitle:e===OneNoteApi.ContentType.EnhancedUrl?c.DomUtils.getFileNameFromUrl(document):document.title,contentType:e,rawUrl:document.URL}},t.prototype.getTrimmedDomString=function(){var e=2097152,t=new p.Event.BaseEvent(p.Event.Label.GetCleanDom),n=c.DomUtils.getCleanDomOfCurrentPage(document),r=c.DomUtils.getByteSize(n);t.setCustomProperty(p.PropertyName.Custom.DomSizeInBytes,r);var o=c.DomUtils.truncateStringToByteSize(n,e),i=c.DomUtils.getByteSize(o);return i!==r&&t.setCustomProperty(p.PropertyName.Custom.BytesTrimmed,r-i),this.logger.logEvent(t),o},t.prototype.overrideTransformStyles=function(e){var t=window.getComputedStyle(e);t&&("none"===t.transform&&"none"===t.webkitTransform||(e.style.transform=e.style.webkitTransform="none"))},t.prototype.sendInvokeOptionsToUi=function(e){this.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.setInvokeOptions,{param:e})},t.prototype.toggleClipper=function(){"none"===this.frame.style.display&&(this.frame.style.display=""),this.uiCommunicator.callRemoteFunction(o.Constants.FunctionKeys.toggleClipper)},t.prototype.toScrubbedHtml=function(e){var t=document.createElement("div");return t.innerHTML=c.DomUtils.cleanHtml(e),t.outerHTML},t.prototype.updatePageInfo=function(){this.pageInfo.set(this.createPageInfo())},t.prototype.updateUiSizeAttributes=function(){this.isFullScreen.get()?(this.frame.style.width="100%",this.frame.style.height="100%"):(this.frame.style.width=o.Constants.Styles.clipperUiWidth+o.Constants.Styles.clipperUiDropShadowBuffer+o.Constants.Styles.clipperUiTopRightOffset+"px",this.frame.style.height=this.frameHeight+"px")},t}(h.FrameInjectBase);n.ClipperInject=v},{"../communicator/communicator":5,"../communicator/communicatorPassthrough":6,"../communicator/iframeMessageHandler":7,"../communicator/smartValue":9,"../constants":10,"../domParsers/domUtils":14,"../logging/communicatorLoggerPure":44,"../logging/log":45,"../objectUtils":60,"../storage/clipperStorageKeys":68,"./frameInjectBase":25,"./invokeOptions":28,"./styledFrameFactory":30}],23:[function(e,t,n){"use strict";var r=e("../clientType"),o=e("../constants"),i=e("../stringUtils"),a=e("../urlUtils"),s=e("../clipperUI/tooltipType"),u=e("../communicator/smartValue"),l=e("../http/HttpWithRetries"),c=e("../localization/localization"),p=e("../localization/localizationHelper"),f=e("../logging/log"),g=e("../storage/clipperStorageKeys"),d=e("../versioning/changeLog"),h=e("../versioning/changeLogHelper"),m=e("../versioning/version"),v=e("./authenticationHelper"),y=e("./tooltipHelper"),b=e("./workerPassthroughLogger"),C=function(){function e(t,n){this.setUnhandledExceptionLogging(),this.workers=[],this.logger=new b.WorkerPassthroughLogger(this.workers),e.extensionId=i.StringUtils.generateGuid(),this.clipperData=n,this.clipperData.setLogger(this.logger),this.auth=new v.AuthenticationHelper(this.clipperData,this.logger),this.tooltip=new y.TooltipHelper(this.clipperData);var r=!1,o=this.clipperData.getValue(g.ClipperStorageKeys.clipperId);o||(r=!0,o=e.generateClipperId(),this.clipperData.setValue(g.ClipperStorageKeys.clipperId,o),this.updateLastSeenVersionInStorageToCurrent()),this.clientInfo=new u.SmartValue({clipperType:t,clipperVersion:e.getExtensionVersion(),clipperId:o}),r&&this.onFirstRun(),this.initializeUserFlighting(),this.listenForOpportunityToShowPageNavTooltip()}return e.getExtensionId=function(){return e.extensionId},e.getExtensionVersion=function(){return e.version},e.shouldCheckForMajorUpdates=function(e,t){return!!t&&(!e||e.isLesserThan(t))},e.prototype.addWorker=function(e){var t=this;e.setOnUnloading(function(){e.destroy(),t.removeWorker(e)}),this.workers.push(e)},e.prototype.getWorkers=function(){return this.workers},e.prototype.removeWorker=function(e){var t=this.workers.indexOf(e);t>-1&&this.workers.splice(t,1)},e.isOnOneNoteDomain=function(e){return e.indexOf("onenote.com")>=0||e.indexOf("onenote-int.com")>=0},e.prototype.fetchAndStoreLocStrings=function(){var e=this,t=navigator.language||navigator.userLanguage;return p.LocalizationHelper.makeLocStringsFetchRequest(t).then(function(n){try{var r=JSON.parse(n.parsedResponse);return r&&(e.clipperData.setValue(g.ClipperStorageKeys.locale,t),e.clipperData.setValue(g.ClipperStorageKeys.locStrings,n.parsedResponse),c.Localization.setLocalizedStrings(r)),Promise.resolve(r)}catch(e){return Promise.reject(void 0)}})},e.prototype.getClipperInstalledPageUrl=function(t,n,i){var s=o.Constants.Urls.clipperInstallPageUrl;return s=a.UrlUtils.addUrlQueryValue(s,o.Constants.Urls.QueryParams.clientType,r.ClientType[n]),s=a.UrlUtils.addUrlQueryValue(s,o.Constants.Urls.QueryParams.clipperId,t),s=a.UrlUtils.addUrlQueryValue(s,o.Constants.Urls.QueryParams.clipperVersion,e.getExtensionVersion()),s=a.UrlUtils.addUrlQueryValue(s,o.Constants.Urls.QueryParams.inlineInstall,i.toString()),this.logger.logTrace(f.Trace.Label.RequestForClipperInstalledPageUrl,f.Trace.Level.Information,s),s},e.prototype.getExistingWorkerForTab=function(e){for(var t=this.getWorkers(),n=0,r=t;n<r.length;n++){var o=r[n];if(o.getUniqueId()===e)return o}},e.prototype.getLastSeenVersion=function(){var e=this.clipperData.getValue(g.ClipperStorageKeys.lastSeenVersion);return e?new m.Version(e):void 0},e.prototype.getNewUpdates=function(e,t){var n=this;return new Promise(function(r,i){var s=n.clipperData.getValue(g.ClipperStorageKeys.displayLanguageOverride),u=s||navigator.language||navigator.userLanguage,c=a.UrlUtils.addUrlQueryValue(o.Constants.Urls.changelogUrl,o.Constants.Urls.QueryParams.changelogLocale,u);l.HttpWithRetries.get(c).then(function(n){try{for(var o=JSON.parse(n.responseText),a=void 0,s=0;s<o.length;s++)if(o[s].schemaVersion===d.ChangeLog.schemaVersionSupported){a=o[s].updates;break}if(!a)throw new Error("No matching schemas were found.");var u=h.ChangeLogHelper.getUpdatesBetweenVersions(a,e,t);r(u)}catch(e){i(e)}},function(e){i(e)})})},e.prototype.getOrCreateWorkerForTab=function(e,t){var n=t(e),r=this.getExistingWorkerForTab(n);return r||(r=this.createWorker(e),this.addWorker(r)),r},e.generateClipperId=function(){var e="ON";return e+"-"+i.StringUtils.generateGuid()},e.prototype.initializeUserFlighting=function(){this.updateClientInfoWithFlightInformation([])},e.prototype.shouldShowTooltip=function(e,t){var n=this.checkIfTabMatchesATooltipType(e,t);if(n&&this.tooltip.tooltipDelayIsOver(n,Date.now()))return n},e.prototype.shouldShowVideoTooltip=function(e){return!(!this.checkIfTabIsAVideoDomain(e)||!this.tooltip.tooltipDelayIsOver(s.TooltipType.Video,Date.now()))},e.prototype.showTooltip=function(e,t){var n=this,r=this.getOrCreateWorkerForTab(e,this.getIdFromTab),o=new f.Event.BaseEvent(f.Event.Label.TooltipImpression);o.setCustomProperty(f.PropertyName.Custom.TooltipType,s.TooltipType[t]),o.setCustomProperty(f.PropertyName.Custom.LastSeenTooltipTime,this.tooltip.getTooltipInformation(g.ClipperStorageKeys.lastSeenTooltipTimeBase,t)),o.setCustomProperty(f.PropertyName.Custom.NumTimesTooltipHasBeenSeen,this.tooltip.getTooltipInformation(g.ClipperStorageKeys.numTimesTooltipHasBeenSeenBase,t)),r.invokeTooltip(t).then(function(e){if(e){n.tooltip.setTooltipInformation(g.ClipperStorageKeys.lastSeenTooltipTimeBase,t,Date.now().toString());var i=g.ClipperStorageKeys.numTimesTooltipHasBeenSeenBase,a=n.tooltip.getTooltipInformation(i,t)+1;n.tooltip.setTooltipInformation(g.ClipperStorageKeys.numTimesTooltipHasBeenSeenBase,t,a.toString())}o.setCustomProperty(f.PropertyName.Custom.FeatureEnabled,e),r.getLogger().logEvent(o)})},e.prototype.shouldShowWhatsNewTooltip=function(t,n,r){return this.checkIfTabIsOnWhitelistedUrl(t)&&e.shouldCheckForMajorUpdates(n,r)},e.prototype.showWhatsNewTooltip=function(e,t,n){var o=this;this.getNewUpdates(t,n).then(function(t){var n=h.ChangeLogHelper.filterUpdatesThatDontApplyToBrowser(t,r.ClientType[o.clientInfo.get().clipperType]);if(n&&n.length>0){var i=o.getOrCreateWorkerForTab(e,o.getIdFromTab);i.invokeWhatsNewTooltip(n).then(function(e){if(e){var t=new f.Event.BaseEvent(f.Event.Label.WhatsNewImpression);t.setCustomProperty(f.PropertyName.Custom.FeatureEnabled,e),i.getLogger().logEvent(t),o.updateLastSeenVersionInStorageToCurrent()}})}else o.updateLastSeenVersionInStorageToCurrent()},function(e){f.ErrorUtils.sendFailureLogRequest({label:f.Failure.Label.GetChangeLog,properties:{failureType:f.Failure.Type.Unexpected,failureInfo:{error:e},failureId:"GetChangeLog",stackTrace:e},clientInfo:o.clientInfo})})},e.prototype.listenForOpportunityToShowPageNavTooltip=function(){var t=this;this.addPageNavListener(function(n){var o;try{o=t.getLastSeenVersion()}catch(e){return void t.updateLastSeenVersionInStorageToCurrent()}var i=new m.Version(e.getExtensionVersion());if(t.clientInfo.get().clipperType!==r.ClientType.FirefoxExtension){var a=[s.TooltipType.Pdf,s.TooltipType.Product,s.TooltipType.Recipe],u=t.shouldShowTooltip(n,a);if(u)return void t.showTooltip(n,u);if(t.shouldShowVideoTooltip(n))return void t.showTooltip(n,s.TooltipType.Video)}if(t.shouldShowWhatsNewTooltip(n,o,i))return void t.showWhatsNewTooltip(n,o,i)})},e.prototype.setUnhandledExceptionLogging=function(){var e=this,t=window.onerror;window.onerror=function(n,r,o,i,a){var s=a?f.Failure.getStackTrace(a):"[unknown stacktrace]";f.ErrorUtils.sendFailureLogRequest({label:f.Failure.Label.UnhandledExceptionThrown,properties:{failureType:f.Failure.Type.Unexpected,failureInfo:{error:JSON.stringify({error:a.toString(),message:n,lineno:o,colno:i})},failureId:"ExtensionBase",stackTrace:s},clientInfo:e.clientInfo}),t&&t(n,r,o,i,a)}},e.prototype.updateClientInfoWithFlightInformation=function(e){this.clientInfo.set({clipperType:this.clientInfo.get().clipperType,clipperVersion:this.clientInfo.get().clipperVersion,clipperId:this.clientInfo.get().clipperId,flightingInfo:e})},e.prototype.updateLastSeenVersionInStorageToCurrent=function(){this.clipperData.setValue(g.ClipperStorageKeys.lastSeenVersion,e.getExtensionVersion())},e}();C.version="3.8.8",n.ExtensionBase=C},{"../clientType":2,"../clipperUI/tooltipType":3,"../communicator/smartValue":9,"../constants":10,"../http/HttpWithRetries":37,"../localization/localization":41,"../localization/localizationHelper":42,"../logging/log":45,"../storage/clipperStorageKeys":68,"../stringUtils":70,"../urlUtils":71,"../versioning/changeLog":73,"../versioning/changeLogHelper":74,"../versioning/version":75,"./authenticationHelper":20,"./tooltipHelper":31,"./workerPassthroughLogger":36}],24:[function(e,t,n){"use strict";var r=e("../browserUtils"),o=e("../clientType"),i=e("../clipperUrls"),a=e("../cookieUtils"),s=e("../constants"),u=e("../polyfills"),l=e("../userInfo"),c=e("../settings"),p=e("../clipperUI/tooltipType"),f=e("../communicator/communicator"),g=e("../communicator/smartValue"),d=e("../http/clipperCachedHttp"),h=e("../localization/localizationHelper"),m=e("../logging/log"),v=e("../logging/logHelpers"),y=e("../storage/clipperStorageKeys"),b=e("./extensionBase"),C=e("./invokeSource"),w=e("./invokeOptions"),S=function(){function e(e,t,n,r,o){this.clipperFunnelAlreadyLogged=!1,
u.Polyfills.init(),this.onUnloading=function(){},this.uiCommunicator=new f.Communicator(r(),s.Constants.CommunicationChannels.extensionAndUi),this.pageNavUiCommunicator=new f.Communicator(r(),s.Constants.CommunicationChannels.extensionAndPageNavUi),this.debugLoggingInjectCommunicator=new f.Communicator(o(),s.Constants.CommunicationChannels.debugLoggingInjectedAndExtension),this.injectCommunicator=new f.Communicator(o(),s.Constants.CommunicationChannels.injectedAndExtension),this.pageNavInjectCommunicator=new f.Communicator(o(),s.Constants.CommunicationChannels.pageNavInjectedAndExtension),this.sessionId=new g.SmartValue,this.logger=LogManager.createExtLogger(this.sessionId,v.LogHelpers.isConsoleOutputEnabled()?this.debugLoggingInjectCommunicator:void 0),this.logger.logSessionStart(),this.clipperData=n,this.clipperData.setLogger(this.logger),this.auth=t,this.clientInfo=e,this.logDeviceIdMapEvent(),this.initializeCommunicators(),this.initializeContextProperties()}return e.prototype.initializeContextProperties=function(){var e=this,t=this.clientInfo.get();if(this.logger.setContextProperty(m.Context.Custom.AppInfoId,c.Settings.getSetting("App_Id")),this.logger.setContextProperty(m.Context.Custom.ExtensionLifecycleId,b.ExtensionBase.getExtensionId()),this.logger.setContextProperty(m.Context.Custom.UserInfoId,void 0),this.logger.setContextProperty(m.Context.Custom.AuthType,"None"),this.logger.setContextProperty(m.Context.Custom.AppInfoVersion,t.clipperVersion),this.logger.setContextProperty(m.Context.Custom.DeviceInfoId,t.clipperId),this.logger.setContextProperty(m.Context.Custom.ClipperType,o.ClientType[t.clipperType]),t.flightingInfo)this.logger.setContextProperty(m.Context.Custom.FlightInfo,t.flightingInfo.join(","));else{var n=function(t){t.flightingInfo&&(e.clientInfo.unsubscribe(n),e.logger.setContextProperty(m.Context.Custom.FlightInfo,t.flightingInfo.join(",")))}.bind(this);this.clientInfo.subscribe(n,{callOnSubscribe:!1})}},e.prototype.getUniqueId=function(){return this.tabId},e.prototype.closeAllFramesAndInvokeClipper=function(e,t){this.pageNavInjectCommunicator.callRemoteFunction(s.Constants.FunctionKeys.closePageNavTooltip),this.invokeClipper(e,t)},e.prototype.getLogger=function(){return this.logger},e.prototype.invokeClipper=function(e,t){var n=this,r={invokeDataForMode:t?t.invokeDataForMode:void 0,invokeMode:t?t.invokeMode:w.InvokeMode.Default};this.sendInvokeOptionsToInject(r),this.isAllowedFileSchemeAccessBrowserSpecific(function(e){e||n.uiCommunicator.callRemoteFunction(s.Constants.FunctionKeys.extensionNotAllowedToAccessLocalFiles)}),this.invokeClipperBrowserSpecific().then(function(t){t&&!n.clipperFunnelAlreadyLogged&&(n.logger.logUserFunnel(m.Funnel.Label.Invoke),n.clipperFunnelAlreadyLogged=!0),n.logClipperInvoke(e,r)})},e.prototype.invokeWhatsNewTooltip=function(e){var t=this,n=new m.Event.PromiseEvent(m.Event.Label.InvokeWhatsNew);return this.registerLocalizedStringsForPageNav().then(function(r){return r?(t.registerWhatsNewCommunicatorFunctions(e),t.invokeWhatsNewTooltipBrowserSpecific(e).then(function(e){return e||(n.setStatus(m.Status.Failed),n.setFailureInfo({error:"invoking the What's New experience failed"})),t.logger.logEvent(n),Promise.resolve(e)})):(n.setStatus(m.Status.Failed),n.setFailureInfo({error:"getLocalizedStringsForBrowser returned undefined/null"}),t.logger.logEvent(n),Promise.resolve(!1))})},e.prototype.invokeTooltip=function(e){var t=this,n=new m.Event.PromiseEvent(m.Event.Label.InvokeTooltip);return n.setCustomProperty(m.PropertyName.Custom.TooltipType,p.TooltipType[e]),this.registerLocalizedStringsForPageNav().then(function(r){return r?(t.registerTooltipCommunicatorFunctions(e),t.invokeTooltipBrowserSpecific(e).then(function(e){return t.logger.logEvent(n),Promise.resolve(e)})):(n.setStatus(m.Status.Failed),n.setFailureInfo({error:"getLocalizedStringsForBrowser returned undefined/null"}),t.logger.logEvent(n),Promise.resolve(!1))})},e.prototype.setOnUnloading=function(e){this.onUnloading=e},e.prototype.destroy=function(){this.logger.logSessionEnd(m.Session.EndTrigger.Unload)},e.prototype.getLocalizedStrings=function(e,t){var n=this;this.logger.setContextProperty(m.Context.Custom.BrowserLanguage,e);var r=this.clipperData.getValue(y.ClipperStorageKeys.locale),o=!r||r!==e,i=new m.Event.BaseEvent(m.Event.Label.GetLocale);i.setCustomProperty(m.PropertyName.Custom.StoredLocaleDifferentThanRequested,o),this.logger.logEvent(i);var a=function(){return h.LocalizationHelper.makeLocStringsFetchRequest(e)},s=o?0:d.ClipperCachedHttp.getDefaultExpiry(),u=new m.Event.PromiseEvent(m.Event.Label.GetLocalizedStrings);u.setCustomProperty(m.PropertyName.Custom.ForceRetrieveFreshLocStrings,o),this.clipperData.getFreshValue(y.ClipperStorageKeys.locStrings,a,s).then(function(r){n.clipperData.setValue(y.ClipperStorageKeys.locale,e),t&&t(r?r.data:void 0)},function(e){u.setStatus(m.Status.Failed),u.setFailureInfo(e),t&&t(void 0)}).then(function(){n.logger.logEvent(u)})},e.prototype.getLocalizedStringsForBrowser=function(e){var t=this.clipperData.getValue(y.ClipperStorageKeys.displayLanguageOverride),n=t||navigator.language||navigator.userLanguage;this.getLocalizedStrings(n,e)},e.prototype.getUserSessionIdQueryParamValue=function(){var e=this.logger.getUserSessionId();return e?e:this.clientInfo.get().clipperId},e.prototype.invokeDebugLoggingIfEnabled=function(){return v.LogHelpers.isConsoleOutputEnabled()?this.invokeDebugLoggingBrowserSpecific():Promise.resolve(!1)},e.prototype.launchPopupAndWaitForClose=function(e){var t=this;return new Promise(function(n,o){var i,a=r.BrowserUtils.openPopupWindow(e),u=function(e){if(e.source===a){var n=void 0;try{n=JSON.parse(e.data)}catch(n){t.logger.logJsonParseUnexpected(e.data)}n&&(n[s.Constants.Urls.QueryParams.error]||n[s.Constants.Urls.QueryParams.errorDescription])&&(i={correlationId:n[s.Constants.Urls.QueryParams.correlationId],error:n[s.Constants.Urls.QueryParams.error],errorDescription:n[s.Constants.Urls.QueryParams.errorDescription]})}};window.addEventListener("message",u);var l=setInterval(function(){a&&!a.closed||(clearInterval(l),window.removeEventListener("message",u),i?o(i):n(!0))},100)})},e.prototype.logClipperInvoke=function(e,t){var n=new m.Event.BaseEvent(m.Event.Label.InvokeClipper);n.setCustomProperty(m.PropertyName.Custom.InvokeSource,C.InvokeSource[e.invokeSource]),n.setCustomProperty(m.PropertyName.Custom.InvokeMode,w.InvokeMode[t.invokeMode]),this.logger.logEvent(n)},e.prototype.registerTooltipToRenderInPageNav=function(e,t){this.pageNavUiCommunicator.registerFunction(s.Constants.FunctionKeys.getTooltipToRenderInPageNav,function(){return Promise.resolve(e)}),this.pageNavUiCommunicator.registerFunction(s.Constants.FunctionKeys.getPageNavTooltipProps,function(){return Promise.resolve(t)})},e.prototype.registerWhatsNewCommunicatorFunctions=function(e){this.registerTooltipToRenderInPageNav(p.TooltipType.WhatsNew,{updates:e})},e.prototype.registerTooltipCommunicatorFunctions=function(e){this.registerTooltipToRenderInPageNav(e)},e.prototype.sendInvokeOptionsToInject=function(e){this.injectCommunicator.callRemoteFunction(s.Constants.FunctionKeys.setInvokeOptions,{param:e})},e.prototype.setUpNoOpTrackers=function(e){var t=m.ErrorUtils.setNoOpTrackerRequestTimeout({label:m.NoOp.Label.InitializeCommunicator,channel:s.Constants.CommunicationChannels.injectedAndExtension,clientInfo:this.clientInfo,url:e},!0);this.injectCommunicator.callRemoteFunction(s.Constants.FunctionKeys.noOpTracker,{param:(new Date).getTime(),callback:function(){clearTimeout(t)}});var n=m.ErrorUtils.setNoOpTrackerRequestTimeout({label:m.NoOp.Label.InitializeCommunicator,channel:s.Constants.CommunicationChannels.extensionAndUi,clientInfo:this.clientInfo,url:e},!0);this.uiCommunicator.callRemoteFunction(s.Constants.FunctionKeys.noOpTracker,{param:(new Date).getTime(),callback:function(){clearTimeout(n)}})},e.prototype.doSignOutActionInFrontEnd=function(e){var t=this.getUserSessionIdQueryParamValue(),n=i.ClipperUrls.generateSignOutUrl(this.clientInfo.get().clipperId,t,l.AuthType[e]);this.uiCommunicator.callRemoteFunction(s.Constants.FunctionKeys.createHiddenIFrame,{param:n})},e.prototype.initializeCommunicators=function(){this.initializeDebugLoggingCommunicators(),this.initializeClipperCommunicators(),this.initializePageNavCommunicators()},e.prototype.initializeClipperCommunicators=function(){this.initializeClipperUiCommunicator(),this.initializeClipperInjectCommunicator()},e.prototype.initializeClipperUiCommunicator=function(){var e=this;this.uiCommunicator.broadcastAcrossCommunicator(this.auth.user,s.Constants.SmartValueKeys.user),this.uiCommunicator.broadcastAcrossCommunicator(this.clientInfo,s.Constants.SmartValueKeys.clientInfo),this.uiCommunicator.broadcastAcrossCommunicator(this.sessionId,s.Constants.SmartValueKeys.sessionId),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.clipperStrings,function(){return new Promise(function(t){e.getLocalizedStringsForBrowser(function(e){t(e)})})}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.getStorageValue,function(t){return new Promise(function(n){var r=e.clipperData.getValue(t);n(r)})}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.getMultipleStorageValues,function(t){return new Promise(function(n){for(var r={},o=0,i=t;o<i.length;o++){var a=i[o];r[a]=e.clipperData.getValue(a)}n(r)})}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.setStorageValue,function(t){e.clipperData.setValue(t.key,t.value)}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.getInitialUser,function(){return e.auth.updateUserInfoData(e.clientInfo.get().clipperId,l.UpdateReason.InitialRetrieval)}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.signInUser,function(t){return e.doSignInAction(t).then(function(t){return e.auth.updateUserInfoData(e.clientInfo.get().clipperId,l.UpdateReason.SignInAttempt).then(function(n){if(!(n&&n.user||t)){var r={updateReason:l.UpdateReason.SignInCancel};return e.auth.user.set(r),Promise.resolve(r)}return Promise.resolve(n)})}).catch(function(t){return e.auth.user.set({updateReason:l.UpdateReason.SignInAttempt}),t.updateReason=l.UpdateReason.SignInAttempt,Promise.reject(t)})}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.signOutUser,function(t){e.clientInfo.get().clipperType===o.ClientType.EdgeExtension?e.doSignOutActionInFrontEnd(t):e.doSignOutAction(t),e.auth.user.set({updateReason:l.UpdateReason.SignOutAction}),e.clipperData.setValue(y.ClipperStorageKeys.userInformation,void 0),e.clipperData.setValue(y.ClipperStorageKeys.currentSelectedSection,void 0),e.clipperData.setValue(y.ClipperStorageKeys.cachedNotebooks,void 0)}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.telemetry,function(t){m.parseAndLogDataPackage(t,e.logger)}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.ensureFreshUserBeforeClip,function(){return e.auth.updateUserInfoData(e.clientInfo.get().clipperId,l.UpdateReason.TokenRefreshForPendingClip)}),this.uiCommunicator.registerFunction(s.Constants.FunctionKeys.takeTabScreenshot,function(){return e.takeTabScreenshot()}),this.uiCommunicator.setErrorHandler(function(t){m.ErrorUtils.handleCommunicatorError(s.Constants.CommunicationChannels.extensionAndUi,t,e.clientInfo)})},e.prototype.initializeClipperInjectCommunicator=function(){var e=this;this.injectCommunicator.broadcastAcrossCommunicator(this.clientInfo,s.Constants.SmartValueKeys.clientInfo),this.injectCommunicator.registerFunction(s.Constants.FunctionKeys.unloadHandler,function(){e.tearDownCommunicators(),e.onUnloading()}),this.injectCommunicator.registerFunction(s.Constants.FunctionKeys.setStorageValue,function(t){e.clipperData.setValue(t.key,t.value)}),this.injectCommunicator.setErrorHandler(function(t){m.ErrorUtils.handleCommunicatorError(s.Constants.CommunicationChannels.injectedAndExtension,t,e.clientInfo)})},e.prototype.initializeDebugLoggingCommunicators=function(){var e=this;this.debugLoggingInjectCommunicator.registerFunction(s.Constants.FunctionKeys.unloadHandler,function(){e.tearDownCommunicators(),e.onUnloading()})},e.prototype.initializePageNavCommunicators=function(){this.initializePageNavUiCommunicator(),this.initializePageNavInjectCommunicator()},e.prototype.initializePageNavUiCommunicator=function(){var e=this;this.pageNavUiCommunicator.registerFunction(s.Constants.FunctionKeys.telemetry,function(t){m.parseAndLogDataPackage(t,e.logger)}),this.pageNavUiCommunicator.registerFunction(s.Constants.FunctionKeys.invokeClipperFromPageNav,function(t){e.closeAllFramesAndInvokeClipper({invokeSource:t},{invokeMode:w.InvokeMode.Default})})},e.prototype.initializePageNavInjectCommunicator=function(){var e=this;this.pageNavInjectCommunicator.registerFunction(s.Constants.FunctionKeys.telemetry,function(t){m.parseAndLogDataPackage(t,e.logger)}),this.pageNavInjectCommunicator.registerFunction(s.Constants.FunctionKeys.unloadHandler,function(){e.tearDownCommunicators(),e.onUnloading()})},e.prototype.registerLocalizedStringsForPageNav=function(){var e=this;return new Promise(function(t){e.getLocalizedStringsForBrowser(function(n){n&&e.pageNavUiCommunicator.registerFunction(s.Constants.FunctionKeys.clipperStringsFrontLoaded,function(){return Promise.resolve(n)}),t(!!n)})})},e.prototype.tearDownCommunicators=function(){this.uiCommunicator.tearDown(),this.pageNavUiCommunicator.tearDown(),this.injectCommunicator.tearDown(),this.pageNavInjectCommunicator.tearDown()},e.prototype.logDeviceIdMapEvent=function(){var e=this.clientInfo.get().clipperId,t=a.CookieUtils.readCookie("MicrosoftApplicationsTelemetryDeviceId");if(t!==e){var n=new m.Event.BaseEvent(m.Event.Label.DeviceIdMap);n.setCustomProperty(m.PropertyName.Custom.DeviceIdInStorage,e),n.setCustomProperty(m.PropertyName.Custom.DeviceIdInCookie,t),this.logger.logEvent(n)}},e}();n.ExtensionWorkerBase=S},{"../browserUtils":1,"../clientType":2,"../clipperUI/tooltipType":3,"../clipperUrls":4,"../communicator/communicator":5,"../communicator/smartValue":9,"../constants":10,"../cookieUtils":11,"../http/clipperCachedHttp":39,"../localization/localizationHelper":42,"../logging/log":45,"../logging/logHelpers":46,"../polyfills":62,"../settings":64,"../storage/clipperStorageKeys":68,"../userInfo":72,"./extensionBase":23,"./invokeOptions":28,"./invokeSource":29}],25:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../communicator/iframeMessageHandler"),i=e("./injectBase"),a=function(e){function t(t){var n=e.call(this,t)||this;try{n.initFrameInDom(),n.initializeUiCommunicator(),n.initializePassthroughCommunicator(n.getExtMessageHandlerThunk()),n.checkForNoOps()}catch(e){throw n.handleConstructorError(e),e}return n}return r(t,e),t.prototype.getFrame=function(){return this.frame},t.prototype.closeFrame=function(){this.frame&&(this.frame.parentNode.removeChild(this.frame),this.frame=void 0)},t.prototype.generateInlineExtThunk=function(){var e=this;return this.frame||this.initFrameInDom(),function(){return new o.IFrameMessageHandler(function(){return e.frame.contentWindow})}},t.prototype.initFrameInDom=function(){this.frame||(this.createFrame(),document.documentElement.appendChild(this.frame))},t}(i.InjectBase);n.FrameInjectBase=a},{"../communicator/iframeMessageHandler":7,"./injectBase":26}],26:[function(e,t,n){"use strict";var r=e("../polyfills"),o=function(){function e(e){try{r.Polyfills.init(),this.options=e,this.init(),this.initializeExtCommunicator(this.getExtMessageHandlerThunk()),this.initializeEventListeners()}catch(e){throw this.handleConstructorError(e),e}}return e.prototype.getExtMessageHandlerThunk=function(){return this.options.extMessageHandlerThunk?this.options.extMessageHandlerThunk:this.generateInlineExtThunk()},e}();n.InjectBase=o},{"../polyfills":62}],27:[function(e,t,n){"use strict";var r=e("../localization/localization"),o=function(){function e(){}return e.alertUserOfUnclippablePage=function(){alert(r.Localization.getLocalizedString("WebClipper.Error.CannotClipPage"))},e.isKnownUninjectablePage=function(t){if(!t)return!1;for(var n=0;n<e.isKnownUninjectablePage.length;n++)if(e.uninjectableUrlRegexes[n].test(t))return!0;return!1},e}();o.uninjectableUrlRegexes=[/^about:/],n.InjectHelper=o},{"../localization/localization":41}],28:[function(e,t,n){"use strict";var r;!function(e){e[e.ContextImage=0]="ContextImage",e[e.ContextTextSelection=1]="ContextTextSelection",e[e.Default=2]="Default"}(r=n.InvokeMode||(n.InvokeMode={}))},{}],29:[function(e,t,n){"use strict";var r;!function(e){e[e.Bookmarklet=0]="Bookmarklet",e[e.ContextMenu=1]="ContextMenu",e[e.ExtensionButton=2]="ExtensionButton",e[e.WhatsNewTooltip=3]="WhatsNewTooltip",e[e.PdfTooltip=4]="PdfTooltip",e[e.ProductTooltip=5]="ProductTooltip",e[e.RecipeTooltip=6]="RecipeTooltip",e[e.VideoTooltip=7]="VideoTooltip"}(r=n.InvokeSource||(n.InvokeSource={}))},{}],30:[function(e,t,n){"use strict";var r,o=e("../constants"),i=e("../localization/rtl");!function(e){e[e.WebClipper=0]="WebClipper",e[e.PageNav=1]="PageNav"}(r=n.Frame||(n.Frame={}));var a=function(){function e(){}return e.getStyledFrame=function(t){switch(t){case r.WebClipper:return e.getStyledWebClipperFrame();default:case r.PageNav:return e.getStyledPageNavFrame()}},e.applyGlobalStyles=function(e){i.Rtl.isRtl(navigator.language||navigator.userLanguage)?(e.style.left="0px",e.style.right="auto"):(e.style.left="auto",e.style.right="0px"),e.style.top="0px",e.style.bottom="auto",e.style.border="none",e.style.display="block",e.style.margin="0px",e.style.maxHeight="none",e.style.maxWidth="none",e.style.minHeight="0px",e.style.minWidth="0px",e.style.overflow="hidden",e.style.padding="0px",e.style.position="fixed",e.style.transition="initial",e.style.zIndex="2147483647"},e.getGloballyStyledFrame=function(){var t=document.createElement("iframe");return e.applyGlobalStyles(t),t},e.getStyledPageNavFrame=function(){var t=e.getGloballyStyledFrame();return t.style.width=o.Constants.Styles.clipperUiWidth+o.Constants.Styles.clipperUiTopRightOffset+o.Constants.Styles.clipperUiDropShadowBuffer+"px",t},e.getStyledWebClipperFrame=function(){var t=e.getGloballyStyledFrame();return t},e}();n.StyledFrameFactory=a},{"../constants":10,"../localization/rtl":43}],31:[function(e,t,n){"use strict";var r=e("../constants"),o=e("../objectUtils"),i=e("../clipperUI/tooltipType"),a=e("../storage/clipperStorageKeys"),s=function(){function e(e){this.storage=e,this.validTypes=[i.TooltipType.Pdf,i.TooltipType.Product,i.TooltipType.Recipe,i.TooltipType.Video]}return e.prototype.getTooltipInformation=function(t,n){if(o.ObjectUtils.isNullOrUndefined(t)||o.ObjectUtils.isNullOrUndefined(n))throw new Error("Invalid argument passed to getTooltipInformation");var r=e.getStorageKeyForTooltip(t,n),i=this.storage.getValue(r),a=parseInt(i,10);return isNaN(a)?0:a},e.prototype.setTooltipInformation=function(t,n,r){if(o.ObjectUtils.isNullOrUndefined(t)||o.ObjectUtils.isNullOrUndefined(n))throw new Error("Invalid argument passed to setTooltipInformation");var i=e.getStorageKeyForTooltip(t,n);this.storage.setValue(i,r)},e.prototype.tooltipDelayIsOver=function(e,t){if(o.ObjectUtils.isNullOrUndefined(e)||o.ObjectUtils.isNullOrUndefined(t))throw new Error("Invalid argument passed to tooltipDelayIsOver");var n=this.getTooltipInformation(a.ClipperStorageKeys.lastClippedTooltipTimeBase,e);if(0!==n)return!1;var i=this.getTooltipInformation(a.ClipperStorageKeys.numTimesTooltipHasBeenSeenBase,e);if(i>=r.Constants.Settings.maximumNumberOfTimesToShowTooltips)return!1;this.getTooltipInformation(a.ClipperStorageKeys.lastSeenTooltipTimeBase,e);if(this.tooltipHasBeenSeenInLastTimePeriod(e,t,r.Constants.Settings.timeBetweenSameTooltip))return!1;var s=this.validTypes.indexOf(e),u=this.validTypes.slice();return u.splice(s,1),!this.hasAnyTooltipBeenSeenInLastTimePeriod(t,u,r.Constants.Settings.timeBetweenDifferentTooltips)},e.getStorageKeyForTooltip=function(e,t){if(o.ObjectUtils.isNullOrUndefined(e)||o.ObjectUtils.isNullOrUndefined(t))throw new Error("Invalid argument passed to getStorageKeyForTooltip");return e+i.TooltipType[t]},e.prototype.tooltipHasBeenSeenInLastTimePeriod=function(e,t,n){var r=this.getTooltipInformation(a.ClipperStorageKeys.lastSeenTooltipTimeBase,e);return 0!==r&&t-r<n},e.prototype.hasAnyTooltipBeenSeenInLastTimePeriod=function(e,t,n){var r=this;return t.some(function(t){var o=r.tooltipHasBeenSeenInLastTimePeriod(t,e,n);return o})},e}();n.TooltipHelper=s},{"../clipperUI/tooltipType":3,"../constants":10,"../objectUtils":60,"../storage/clipperStorageKeys":68}],32:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../../clientType"),i=e("../../urlUtils"),a=e("../../domParsers/videoUtils"),s=e("../../localization/localization"),u=e("../../storage/clipperData"),l=e("../../storage/localStorage"),c=e("../extensionBase"),p=e("../invokeSource"),f=e("../invokeOptions"),g=e("./webExtensionWorker"),d=function(e){function t(t,n){var r=e.call(this,t,new u.ClipperData(new l.LocalStorage))||this;return r.injectUrls=n,r.registerBrowserButton(),r.registerContextMenuItems(),r.registerInstallListener(),r.registerTabRemoveListener(),r}return r(t,e),t.getExtensionVersion=function(){return t.browser.runtime.getManifest().version},t.prototype.addPageNavListener=function(e){t.browser.webNavigation.onCompleted.addListener(function(n){0===n.frameId&&t.browser.tabs.get(n.tabId,function(n){!t.browser.runtime.lastError&&n&&e(n)})})},t.prototype.checkIfTabIsOnWhitelistedUrl=function(e){return!i.UrlUtils.onBlacklistedDomain(e.url)&&i.UrlUtils.onWhitelistedDomain(e.url)},t.prototype.createWorker=function(e){return new g.WebExtensionWorker(this.injectUrls,e,this.clientInfo,this.auth)},t.prototype.getIdFromTab=function(e){return e.id},t.prototype.onFirstRun=function(){this.onInstalledSupported()||this.onInstalled()},t.prototype.checkIfTabMatchesATooltipType=function(e,t){if(!i.UrlUtils.onBlacklistedDomain(e.url))return i.UrlUtils.checkIfUrlMatchesAContentType(e.url,t)},t.prototype.checkIfTabIsAVideoDomain=function(e){var t=a.VideoUtils.videoDomainIfSupported(e.url);return!!t},t.prototype.invokeClipperInTab=function(e,t,n){var r=this.getOrCreateWorkerForTab(e,this.getIdFromTab);r.closeAllFramesAndInvokeClipper(t,n)},t.prototype.onInstalled=function(){var e=this;t.browser.tabs.query({active:!0,lastFocusedWindow:!0},function(n){var r=c.ExtensionBase.isOnOneNoteDomain(n[0].url),o=e.getClipperInstalledPageUrl(e.clientInfo.get().clipperId,e.clientInfo.get().clipperType,r);r?t.browser.tabs.update(n[0].id,{url:o}):t.browser.tabs.create({url:o})})},t.prototype.registerBrowserButton=function(){var e=this;t.browser.browserAction.onClicked.addListener(function(t){e.invokeClipperInTab(t,{invokeSource:p.InvokeSource.ExtensionButton},{invokeMode:f.InvokeMode.Default})})},t.prototype.registerContextMenuItems=function(){var e=this;this.fetchAndStoreLocStrings().then(function(){t.browser.contextMenus.removeAll(function(){var n,r=[{title:s.Localization.getLocalizedString("WebClipper.Label.OneNoteWebClipper"),contexts:["page"],onclick:function(t,n){e.invokeClipperInTab(n,{invokeSource:p.InvokeSource.ContextMenu},{invokeMode:f.InvokeMode.Default})}},{title:s.Localization.getLocalizedString("WebClipper.Label.ClipSelectionToOneNote"),contexts:["selection"],onclick:function(n,r){var o={invokeMode:f.InvokeMode.ContextTextSelection};r.index<0?(o.invokeDataForMode=n.selectionText,t.browser.tabs.query({active:!0,currentWindow:!0},function(t){var n=t[0];e.invokeClipperInTab(n,{invokeSource:p.InvokeSource.ContextMenu},o)})):e.invokeClipperInTab(r,{invokeSource:p.InvokeSource.ContextMenu},o)}},{title:s.Localization.getLocalizedString("WebClipper.Label.ClipImageToOneNote"),contexts:["image"],onclick:function(t,n){e.invokeClipperInTab(n,{invokeSource:p.InvokeSource.ContextMenu},t.srcUrl?{invokeDataForMode:t.srcUrl,invokeMode:f.InvokeMode.ContextImage}:void 0)}}];switch(e.clientInfo.get().clipperType){case o.ClientType.ChromeExtension:n=["http://*/*","https://*/*","chrome-extension://encfpfilknmenlmjemepncnlbbjlabkc/*","chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/*","chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/*"];break;case o.ClientType.EdgeExtension:n=["http://*/*","https://*/*"];break;case o.ClientType.FirefoxExtension:}for(var i=0;i<r.length;i++)n&&(r[i].documentUrlPatterns=n),t.browser.contextMenus.create(r[i])})})},t.prototype.registerInstallListener=function(){var e=this;this.onInstalledSupported()&&t.browser.runtime.onInstalled.addListener(function(t){"install"===t.reason&&e.onInstalled()})},t.prototype.registerTabRemoveListener=function(){var e=this;t.browser.tabs.onRemoved.addListener(function(t){var n=e.getExistingWorkerForTab(t);n&&e.removeWorker(n)})},t.prototype.onInstalledSupported=function(){return!!t.browser.runtime.onInstalled},t}(c.ExtensionBase);n.WebExtension=d},{"../../clientType":2,"../../domParsers/videoUtils":17,"../../localization/localization":41,"../../storage/clipperData":66,"../../storage/localStorage":69,"../../urlUtils":71,"../extensionBase":23,"../invokeOptions":28,"../invokeSource":29,"./webExtensionWorker":35}],33:[function(e,t,n){"use strict";function r(e){o.ClipperInject.main(e)}var o=e("../clipperInject");n.invoke=r},{"../clipperInject":22}],34:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../../communicator/messageHandler"),i=e("./webExtension"),a=function(e){function t(t){var n=e.call(this)||this;return n.tabId=t,n.initMessageHandler(),i.WebExtension.browser.runtime.onMessage.addListener(n.messageHandler),n}return r(t,e),t.prototype.initMessageHandler=function(){var e=this;this.messageHandler=function(t,n){n.tab.id===e.tabId&&e.onMessageReceived(t)}},t.prototype.sendMessage=function(e){i.WebExtension.browser.tabs.sendMessage(this.tabId,e)},t.prototype.tearDown=function(){i.WebExtension.browser.runtime.onMessage.removeListener(this.messageHandler)},t}(o.MessageHandler);n.WebExtensionBackgroundMessageHandler=a;var s=function(e){function t(){var t=e.call(this)||this;return t.initMessageHandler(),i.WebExtension.browser.runtime.onMessage.addListener(t.messageHandler),t}return r(t,e),t.prototype.initMessageHandler=function(){var e=this;this.messageHandler=function(t){e.onMessageReceived(t)}},t.prototype.sendMessage=function(e){i.WebExtension.browser.runtime.sendMessage(e)},t.prototype.tearDown=function(){i.WebExtension.browser.runtime.onMessage.removeListener(this.messageHandler)},t}(o.MessageHandler);n.WebExtensionContentMessageHandler=s},{"../../communicator/messageHandler":8,"./webExtension":32}],35:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../../userInfo"),i=e("../../browserUtils"),a=e("../../clientType"),s=e("../../clipperUrls"),u=e("../../constants"),l=e("../../urlUtils"),c=e("../../logging/log"),p=e("../../storage/clipperData"),f=e("../../storage/LocalStorage"),g=e("../extensionWorkerBase"),d=e("../injectHelper"),h=e("./webExtension"),m=e("./webExtensionMessageHandler"),v=function(e){function t(t,n,r,o){var i=this,a=function(){return new m.WebExtensionBackgroundMessageHandler(n.id)};i=e.call(this,r,o,new p.ClipperData(new f.LocalStorage),a,a)||this,i.injectUrls=t,i.tab=n,i.tabId=n.id,i.noOpTrackerInvoked=!1;var s=!!n.incognito||!!n.inPrivate;return i.logger.setContextProperty(c.Context.Custom.InPrivateBrowsing,s.toString()),i.invokeDebugLoggingIfEnabled(),i}return r(t,e),t.prototype.getUrl=function(){return this.tab.url},t.prototype.doSignInAction=function(e){var t=this.getUserSessionIdQueryParamValue(),n=s.ClipperUrls.generateSignInUrl(this.clientInfo.get().clipperId,t,o.AuthType[e]);return this.launchWebExtensionPopupAndWaitForClose(n,u.Constants.Urls.Authentication.authRedirectUrl)},t.prototype.doSignOutAction=function(e){var t=this.getUserSessionIdQueryParamValue(),n=s.ClipperUrls.generateSignOutUrl(this.clientInfo.get().clipperId,t,o.AuthType[e]);i.BrowserUtils.appendHiddenIframeToDocument(n)},t.prototype.invokeClipperBrowserSpecific=function(){var e=this;return new Promise(function(t){h.WebExtension.browser.tabs.executeScript(e.tab.id,{code:'var frameUrl = "'+h.WebExtension.browser.extension.getURL("clipper.html")+'";'},function(){h.WebExtension.browser.runtime.lastError?(c.ErrorUtils.sendFailureLogRequest({label:c.Failure.Label.UnclippablePage,properties:{failureType:c.Failure.Type.Expected,failureInfo:{error:h.WebExtension.browser.runtime.lastError.message},stackTrace:c.Failure.getStackTrace()},clientInfo:e.clientInfo}),e.clientInfo.get().clipperType!==a.ClientType.FirefoxExtension&&d.InjectHelper.alertUserOfUnclippablePage(),t(!1)):(h.WebExtension.browser.tabs.executeScript(e.tab.id,{file:e.injectUrls.webClipperInjectUrl}),e.noOpTrackerInvoked||(e.setUpNoOpTrackers(e.tab.url),e.noOpTrackerInvoked=!0),t(!0))})})},t.prototype.invokeDebugLoggingBrowserSpecific=function(){var e=this;return new Promise(function(t){h.WebExtension.browser.tabs.executeScript(e.tab.id,{file:e.injectUrls.debugLoggingInjectUrl},function(){t(h.WebExtension.browser.runtime.lastError?!1:!0)})})},t.prototype.invokePageNavBrowserSpecific=function(){var e=this;return new Promise(function(t){h.WebExtension.browser.tabs.executeScript(e.tab.id,{code:'var frameUrl = "'+h.WebExtension.browser.extension.getURL("pageNav.html")+'";'},function(){h.WebExtension.browser.runtime.lastError?t(!1):(h.WebExtension.browser.tabs.executeScript(e.tab.id,{file:e.injectUrls.pageNavInjectUrl}),t(!0))})})},t.prototype.invokeWhatsNewTooltipBrowserSpecific=function(e){return this.invokePageNavBrowserSpecific()},t.prototype.invokeTooltipBrowserSpecific=function(){return this.invokePageNavBrowserSpecific()},t.prototype.isAllowedFileSchemeAccessBrowserSpecific=function(e){var t=this;return h.WebExtension.browser.extension.isAllowedFileSchemeAccess?void h.WebExtension.browser.extension.isAllowedFileSchemeAccess(function(n){e(n||0!==t.tab.url.indexOf("file:///")?!0:!1)}):void e(!0)},t.prototype.takeTabScreenshot=function(){return new Promise(function(e){h.WebExtension.browser.tabs.query({active:!0,lastFocusedWindow:!0},function(){h.WebExtension.browser.tabs.captureVisibleTab({format:"png"},function(t){e(t)})})})},t.prototype.launchWebExtensionPopupAndWaitForClose=function(e,t){var n=this;return new Promise(function(r,o){var i=1e3,s=700,p=screen&&screen.width?Math.round((screen.width-i)/2):0,f=screen&&screen.height?Math.round((screen.height-s)/2):0;try{var g={height:s,left:p,top:f,type:"popup",url:e,width:i};n.clientInfo.get().clipperType!==a.ClientType.FirefoxExtension&&(g.focused=!0),h.WebExtension.browser.windows.create(g,function(e){var n,i,a=!1,s=function(e){if(a=!0,e.responseHeaders)for(var t=0;t<e.responseHeaders.length;t++)if(e.responseHeaders[t].name===u.Constants.HeaderValues.correlationId){i=e.responseHeaders[t].value;break}var r=e.url,o=l.UrlUtils.getQueryValue(r,u.Constants.Urls.QueryParams.error),c=l.UrlUtils.getQueryValue(r,u.Constants.Urls.QueryParams.errorDescription);(o||c)&&(n={error:o,errorDescription:c,correlationId:i}),h.WebExtension.browser.webRequest.onCompleted.removeListener(s),h.WebExtension.browser.tabs.remove(e.tabId)};h.WebExtension.browser.webRequest.onCompleted.addListener(s,{windowId:e.id,urls:[t+"*"]},["responseHeaders"]);var c=function(t,i){i.windowId===e.id&&(n?o(n):r(a),h.WebExtension.browser.tabs.onRemoved.removeListener(c))};h.WebExtension.browser.tabs.onRemoved.addListener(c)})}catch(t){n.logger.logFailure(c.Failure.Label.WebExtensionWindowCreate,c.Failure.Type.Unexpected,{
error:t.message}),n.launchPopupAndWaitForClose(e).then(function(e){r(!0)},function(e){o(e)})}})},t}(g.ExtensionWorkerBase);n.WebExtensionWorker=v},{"../../browserUtils":1,"../../clientType":2,"../../clipperUrls":4,"../../constants":10,"../../logging/log":45,"../../storage/LocalStorage":65,"../../storage/clipperData":66,"../../urlUtils":71,"../../userInfo":72,"../extensionWorkerBase":24,"../injectHelper":27,"./webExtension":32,"./webExtensionMessageHandler":34}],36:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../logging/logger"),i=function(e){function t(t){var n=e.call(this)||this;return n.workers=t,n}return r(t,e),t.prototype.logEvent=function(e){for(var t=0,n=this.workers;t<n.length;t++){var r=n[t];r.getLogger().logEvent(e)}},t.prototype.pushToStream=function(e,t){for(var n=0,r=this.workers;n<r.length;n++){var o=r[n];o.getLogger().pushToStream(e,t)}},t.prototype.logFailure=function(e,t,n,r){for(var o=0,i=this.workers;o<i.length;o++){var a=i[o];a.getLogger().logFailure(e,t,n,r)}},t.prototype.logUserFunnel=function(e){for(var t=0,n=this.workers;t<n.length;t++){var r=n[t];r.getLogger().logUserFunnel(e)}},t.prototype.logSessionStart=function(){for(var e=0,t=this.workers;e<t.length;e++){var n=t[e];n.getLogger().logSessionStart()}},t.prototype.logSessionEnd=function(e){for(var t=0,n=this.workers;t<n.length;t++){var r=n[t];r.getLogger().logSessionEnd(e)}},t.prototype.logTrace=function(e,t,n){for(var r=0,o=this.workers;r<o.length;r++){var i=o[r];i.getLogger().logTrace(e,t,n)}},t.prototype.logClickEvent=function(e){for(var t=0,n=this.workers;t<n.length;t++){var r=n[t];r.getLogger().logClickEvent(e)}},t.prototype.setContextProperty=function(e,t){for(var n=0,r=this.workers;n<r.length;n++){var o=r[n];o.getLogger().setContextProperty(e,t)}},t}(o.Logger);n.WorkerPassthroughLogger=i},{"../logging/logger":47}],37:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("./http"),i=e("../objectUtils"),a=e("../promiseUtils"),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.get=function(t,n,r,i,s){var u=this;void 0===r&&(r=o.Http.defaultTimeout),void 0===i&&(i=[200]);var l=function(){return e.createAndSendRequest.call(u,"GET",t,n,i,r)};return a.PromiseUtils.execWithRetry(l,s)},t.post=function(t,n,r,s,u,l){var c=this;if(void 0===s&&(s=[200]),void 0===u&&(u=o.Http.defaultTimeout),i.ObjectUtils.isNullOrUndefined(n))throw new Error("data must be a non-undefined object, but was: "+n);var p=function(){return e.createAndSendRequest.call(c,"POST",t,r,s,u,n)};return a.PromiseUtils.execWithRetry(p,l)},t}(o.Http);n.HttpWithRetries=s},{"../objectUtils":60,"../promiseUtils":63,"./http":40}],38:[function(e,t,n){"use strict";var r=function(){function e(e){this.cache=e}return e.prototype.getFreshValue=function(t,n,r){if(!t)throw new Error("key must be a non-empty string, but was: "+t);if(!n)throw new Error("getRemoteValue must be non-undefined");r<0&&(r=0);var o=this.cache.getValue(t),i=!!o;if(i){var a=void 0;try{a=JSON.parse(o)}catch(e){return Promise.reject({error:e})}var s=e.valueHasExpired(a,r);if(!s)return Promise.resolve(a)}return this.getAndCacheRemoteValue(t,n)},e.prototype.getAndCacheRemoteValue=function(e,t){var n=this;if(!e)throw new Error("key must be a non-empty string, but was: "+e);if(!t)throw new Error("getRemoteValue must be non-undefined");return t().then(function(t){var r=n.setTimeStampedValue(e,t.parsedResponse);return r||n.cache.removeKey(e),Promise.resolve(r)}).catch(function(t){return n.cache.removeKey(e),Promise.reject(t)})},e.valueHasExpired=function(e,t){var n=e&&e.lastUpdated?e.lastUpdated:0;return Date.now()-n>=t},e.prototype.setTimeStampedValue=function(e,t){if(!e)throw new Error("key must be a non-empty string, but was: "+e);if(t){var n;try{n=JSON.parse(t)}catch(e){return}var r={data:n,lastUpdated:Date.now()};return this.cache.setValue(e,JSON.stringify(r)),r}},e}();n.CachedHttp=r},{}],39:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../constants"),i=e("../logging/log"),a=e("./cachedHttp"),s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.logger=n,r}return r(t,e),t.prototype.setLogger=function(e){this.logger=e},t.getDefaultExpiry=function(){return t.defaultExpiry},t.prototype.getFreshValue=function(n,r,o){if(void 0===o&&(o=t.defaultExpiry),!n)return this.logger.logFailure(i.Failure.Label.InvalidArgument,i.Failure.Type.Unexpected,{error:"getFreshValue key parameter should be passed a non-empty string"},""+n),Promise.resolve(void 0);if(!r)return this.logger.logFailure(i.Failure.Label.InvalidArgument,i.Failure.Type.Unexpected,{error:"getFreshValue getRemoteValue parameter should be passed a non-undefined function"},""+r),Promise.resolve(void 0);o<0&&(this.logger.logFailure(i.Failure.Label.InvalidArgument,i.Failure.Type.Unexpected,{error:"getFreshValue updateInterval parameter should be passed a number >= 0"},""+o),o=0);var a=this.addLoggingToGetResponseAsync(n,r,o);return e.prototype.getFreshValue.call(this,n,a,o)},t.prototype.addLoggingToGetResponseAsync=function(e,n,r){var o=this;return function(){var a=new i.Event.PromiseEvent(i.Event.Label.FetchNonLocalData);return a.setCustomProperty(i.PropertyName.Custom.Key,e),a.setCustomProperty(i.PropertyName.Custom.UpdateInterval,r),new Promise(function(e,r){n().then(function(n){n.request&&t.addCorrelationIdToLogEvent(a,n.request),e(n)},function(e){a.setStatus(i.Status.Failed),a.setFailureInfo(e),r(e)}).then(function(){o.logger.logEvent(a)})})}},t.addCorrelationIdToLogEvent=function(e,t){var n=t.getResponseHeader(o.Constants.HeaderValues.correlationId);n&&e.setCustomProperty(i.PropertyName.Custom.CorrelationId,n)},t}(a.CachedHttp);s.defaultExpiry=432e5,n.ClipperCachedHttp=s},{"../constants":10,"../logging/log":45,"./cachedHttp":38}],40:[function(e,t,n){"use strict";var r=e("../objectUtils"),o=function(){function e(){}return e.get=function(t,n,r,o){return void 0===r&&(r=e.defaultTimeout),void 0===o&&(o=[200]),e.createAndSendRequest("GET",t,n,o,r)},e.post=function(t,n,o,i,a){if(void 0===i&&(i=[200]),void 0===a&&(a=e.defaultTimeout),r.ObjectUtils.isNullOrUndefined(n))throw new Error("data must be a non-undefined object, but was: "+n);return e.createAndSendRequest("POST",t,o,i,a,n)},e.createAndSendRequest=function(t,n,r,o,i,a){if(void 0===o&&(o=[200]),void 0===i&&(i=e.defaultTimeout),!n)throw new Error("url must be a non-empty string, but was: "+n);return new Promise(function(s,u){var l=new XMLHttpRequest;l.open(t,n),l.onload=function(){o.indexOf(l.status)>-1?s(l):u(OneNoteApi.ErrorUtils.createRequestErrorObject(l,OneNoteApi.RequestErrorType.UNEXPECTED_RESPONSE_STATUS))},l.onerror=function(){u(OneNoteApi.ErrorUtils.createRequestErrorObject(l,OneNoteApi.RequestErrorType.NETWORK_ERROR))},l.ontimeout=function(){u(OneNoteApi.ErrorUtils.createRequestErrorObject(l,OneNoteApi.RequestErrorType.REQUEST_TIMED_OUT))},e.setHeaders(l,r),l.timeout=i,l.send(a)})},e.setHeaders=function(e,t){if(t)for(var n in t)e.setRequestHeader(n,t[n])},e}();o.defaultTimeout=3e4,n.Http=o},{"../objectUtils":60}],41:[function(e,t,n){"use strict";var r;!function(t){function n(e){if(!e)throw new Error("stringId must be a non-empty string, but was: "+e);if(u){var t=u[e];if(t)return t}var n=c[e];if(n)return n;throw new Error("getLocalizedString could not find a localized or fallback string: "+e)}function r(e){u=e}function o(e){return"font-family: "+i(e)+";"}function i(e){if(l[e])return l[e];var t="WebClipper.FontFamily."+s[e].toString(),r=n(t);return l[e]=a(r),l[e]}function a(e){if(!e)return"";for(var t=e.split(","),n=0;n<t.length;n++)t[n]=t[n].trim(),t[n].length>0&&t[n].indexOf(" ")>=0&&"'"!==t[n][0]&&"'"!==t[n][t.length-1]&&(t[n]="'"+t[n]+"'");return t.join(",")}var s;!function(e){e[e.Regular=0]="Regular",e[e.Bold=1]="Bold",e[e.Light=2]="Light",e[e.Semibold=3]="Semibold",e[e.Semilight=4]="Semilight"}(s=t.FontFamily||(t.FontFamily={}));var u,l={},c=e("../../strings.json");t.getLocalizedString=n,t.setLocalizedStrings=r,t.getFontFamilyAsStyle=o,t.getFontFamily=i,t.formatFontFamily=a}(r=n.Localization||(n.Localization={}))},{"../../strings.json":77}],42:[function(e,t,n){"use strict";var r=e("../constants"),o=e("../urlUtils"),i=e("../http/HttpWithRetries"),a=function(){function e(){}return e.makeLocStringsFetchRequest=function(e){var t=o.UrlUtils.addUrlQueryValue(r.Constants.Urls.localizedStringsUrlBase,"locale",e);return i.HttpWithRetries.get(t).then(function(e){return Promise.resolve({request:e,parsedResponse:e.responseText})})},e}();n.LocalizationHelper=a},{"../constants":10,"../http/HttpWithRetries":37,"../urlUtils":71}],43:[function(e,t,n){"use strict";var r;!function(e){function t(e){if(!e)return!1;for(var t=n(e),o=0;o<r.length;o++)if(t===r[o])return!0;return!1}function n(e){return e?e.split("-")[0].split("_")[0].toLowerCase():""}var r=["ar","fa","he","sd","ug","ur"];e.isRtl=t,e.getIso639P1LocaleCode=n}(r=n.Rtl||(n.Rtl={}))},{}],44:[function(e,t,n){"use strict";var r=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},o=e("../constants"),i=e("./log"),a=e("./logger"),s=function(e){function t(t){var n=e.call(this)||this;return n.communicator=t,n}return r(t,e),t.prototype.logEvent=function(e){e.timerWasStopped()||e.stopTimer(),this.sendDataPackage(i.LogMethods.LogEvent,[e.getEventCategory(),e.getEventData()])},t.prototype.logFailure=function(e,t,n,r){this.sendDataPackage(i.LogMethods.LogFailure,arguments)},t.prototype.logUserFunnel=function(e){this.sendDataPackage(i.LogMethods.LogFunnel,arguments)},t.prototype.logSessionStart=function(){this.sendDataPackage(i.LogMethods.LogSessionStart,arguments)},t.prototype.logSessionEnd=function(e){this.sendDataPackage(i.LogMethods.LogSessionEnd,arguments)},t.prototype.logTrace=function(e,t,n){n?this.sendDataPackage(i.LogMethods.LogTrace,[e,t,n]):this.sendDataPackage(i.LogMethods.LogTrace,[e,t])},t.prototype.pushToStream=function(e,t){this.sendDataPackage(i.LogMethods.PushToStream,arguments)},t.prototype.logClickEvent=function(e){this.sendDataPackage(i.LogMethods.LogClickEvent,arguments)},t.prototype.setContextProperty=function(e,t){this.sendDataPackage(i.LogMethods.SetContextProperty,arguments)},t.prototype.sendDataPackage=function(e,t){var n={methodName:e,methodArgs:Object.keys(t).map(function(e){return t[e]})};this.communicator.callRemoteFunction(o.Constants.FunctionKeys.telemetry,{param:n})},t}(a.Logger);n.CommunicatorLoggerPure=s},{"../constants":10,"./log":45,"./logger":47}],45:[function(e,t,n){"use strict";function r(e,t){switch(e.methodName){case i.LogMethods.LogEvent:var n=e.methodArgs[0],r=e.methodArgs[1];t.logEvent.apply(t,[o.Event.createEvent(n,r)]);break;case i.LogMethods.LogFailure:t.logFailure.apply(t,e.methodArgs);break;case i.LogMethods.PushToStream:t.pushToStream.apply(t,e.methodArgs);break;case i.LogMethods.LogFunnel:t.logUserFunnel.apply(t,e.methodArgs);break;case i.LogMethods.LogSessionStart:t.logSessionStart.apply(t,e.methodArgs);break;case i.LogMethods.LogSessionEnd:t.logSessionEnd.apply(t,e.methodArgs);break;case i.LogMethods.LogClickEvent:t.logClickEvent.apply(t,e.methodArgs);break;case i.LogMethods.SetContextProperty:t.setContextProperty.apply(t,e.methodArgs);break;case i.LogMethods.LogTrace:default:t.logTrace.apply(t,e.methodArgs)}}var o=e("./submodules/event"),i=e("./submodules/logMethods");n.contextPropertyNameRegex=/^[a-zA-Z0-9](([a-zA-Z0-9|_]){0,98}[a-zA-Z0-9])?$/,n.enableConsoleLogging="enable_console_logging",n.reportData="ReportData",n.unknownValue="unknown",n.parseAndLogDataPackage=r;var a=e("./submodules/click");n.Click=a.Click;var s=e("./submodules/context");n.Context=s.Context;var u=e("./submodules/errorUtils");n.ErrorUtils=u.ErrorUtils;var l=e("./submodules/event");n.Event=l.Event;var c=e("./submodules/failure");n.Failure=c.Failure;var p=e("./submodules/funnel");n.Funnel=p.Funnel;var f=e("./submodules/logMethods");n.LogMethods=f.LogMethods;var g=e("./submodules/noop");n.NoOp=g.NoOp;var d=e("./submodules/propertyName");n.PropertyName=d.PropertyName;var h=e("./submodules/session");n.Session=h.Session;var m=e("./submodules/status");n.Status=m.Status;var v=e("./submodules/trace");n.Trace=v.Trace},{"./submodules/click":48,"./submodules/context":49,"./submodules/errorUtils":50,"./submodules/event":51,"./submodules/failure":52,"./submodules/funnel":53,"./submodules/logMethods":54,"./submodules/noop":55,"./submodules/propertyName":56,"./submodules/session":57,"./submodules/status":58,"./submodules/trace":59}],46:[function(e,t,n){"use strict";var r,o=e("./log");!function(e){function t(e,t){var n={};n[o.PropertyName.Reserved.EventType]=o.reportData,n[o.PropertyName.Reserved.Label]=t;var r=o.PropertyName.Reserved.WebClipper+"."+e;return n[o.PropertyName.Reserved.Category]=r,n[o.PropertyName.Reserved.EventName]=r+"."+t,n}function n(t){if(!t)throw new Error("Button clicked without an ID! Logged with ID "+JSON.stringify(t));var n=e.createBaseEventAsJson(o.Click.category,t);return n}function r(t){t.timerWasStopped()||t.stopTimer();var n=t.getEventCategory(),r=e.createBaseEventAsJson(o.Event.Category[n],t.getLabel());switch(r[o.PropertyName.Reserved.Duration]=t.getDuration(),g(r,t.getCustomProperties()),n){case o.Event.Category.BaseEvent:break;case o.Event.Category.PromiseEvent:i(r,t);break;case o.Event.Category.StreamEvent:a(r,t);break;default:throw new Error("createLogEvent does not specify a case for event category: "+o.Event.Category[n])}return r}function i(e,t){var n=t.getStatus();e[o.PropertyName.Reserved.Status]=n,n===o.Status[o.Status.Failed]&&(e[o.PropertyName.Reserved.FailureInfo]=t.getFailureInfo(),e[o.PropertyName.Reserved.FailureType]=t.getFailureType())}function a(e,t){e[o.PropertyName.Reserved.Stream]=JSON.stringify(t.getEventData().Stream)}function s(t,n){var r=new o.Event.BaseEvent(o.Event.Label.SetContextProperty),i=e.createBaseEventAsJson(o.Event.Category[r.getEventCategory()],r.getLabel()),a=o.Context.toString(t);return i[o.PropertyName.Custom[o.PropertyName.Custom.Key]]=a,i[o.PropertyName.Custom[o.PropertyName.Custom.Value]]=n,i}function u(t,n,r,i){var a=e.createBaseEventAsJson(o.Failure.category,o.Failure.Label[t]);return a[o.PropertyName.Reserved.FailureType]=o.Failure.Type[n],r&&(a[o.PropertyName.Reserved.FailureInfo]=o.ErrorUtils.toString(r)),i&&(a[o.PropertyName.Reserved.Id]=i),a[o.PropertyName.Reserved.StackTrace]=o.Failure.getStackTrace(),a}function l(t){var n=e.createBaseEventAsJson(o.Funnel.category,o.Funnel.Label[t]);return n}function c(){var t=e.createBaseEventAsJson(o.Session.category,o.Session.State[o.Session.State.Started]);return t}function p(t){var n=e.createBaseEventAsJson(o.Session.category,o.Session.State[o.Session.State.Ended]);return n[o.PropertyName.Reserved.Trigger]=o.Session.EndTrigger[t],n}function f(t,n,r){var i=e.createBaseEventAsJson(o.Trace.category,o.Trace.Label[t]);switch(r&&(i[o.PropertyName.Reserved.Message]=r),i[o.PropertyName.Reserved.Level]=o.Trace.Level[n],n){case o.Trace.Level.Warning:i[o.PropertyName.Reserved.StackTrace]=o.Failure.getStackTrace()}return i}function g(e,t){if(e[o.PropertyName.Reserved.Status]===o.Status[o.Status.Failed]&&(e[o.PropertyName.Reserved.StackTrace]=o.Failure.getStackTrace()),t)for(var n in t)if(t.hasOwnProperty(n)){var r=void 0;r="object"==typeof t[n]?JSON.stringify(t[n]):t[n],e[n]=r}}function d(){try{if(localStorage.getItem(o.enableConsoleLogging))return!0}catch(e){}return!1}e.createBaseEventAsJson=t,e.createClickEventAsJson=n,e.createLogEventAsJson=r,e.createSetContextEventAsJson=s,e.createFailureEventAsJson=u,e.createFunnelEventAsJson=l,e.createSessionStartEventAsJson=c,e.createSessionEndEventAsJson=p,e.createTraceEventAsJson=f,e.addToLogEvent=g,e.isConsoleOutputEnabled=d}(r=n.LogHelpers||(n.LogHelpers={}))},{"./log":45}],47:[function(e,t,n){"use strict";var r=e("./log"),o=function(){function e(){}return e.prototype.logJsonParseUnexpected=function(e){this.logFailure(r.Failure.Label.JsonParse,r.Failure.Type.Unexpected,void 0,e)},e}();n.Logger=o},{"./log":45}],48:[function(e,t,n){"use strict";var r;!function(e){e.category="Click";var t;!function(e){e.regionSelectionRemoveButton="RegionSelectionRemoveButton",e.sectionComponent="SectionComponent",e.sectionPickerLocationContainer="SectionPickerLocationContainer"}(t=e.Label||(e.Label={}))}(r=n.Click||(n.Click={}))},{}],49:[function(e,t,n){"use strict";var r;!function(e){function t(e){return r[n[e]]}var n,r={AppInfoId:"AppInfo.Id",AppInfoVersion:"AppInfo.Version",DeviceInfoId:"DeviceInfo.Id",ExtensionLifecycleId:"ExtensionLifecycle.Id",SessionId:"Session.Id",UserInfoId:"UserInfo.Id",UserInfoLanguage:"UserInfo.Language",AuthType:"AuthType",BrowserLanguage:"BrowserLanguage",ClipperType:"ClipperType",ContentType:"ContentType",FlightInfo:"FlightInfo",InPrivateBrowsing:"InPrivateBrowsing",PageLanguage:"PageLanguage"};!function(e){e[e.AppInfoId=0]="AppInfoId",e[e.AppInfoVersion=1]="AppInfoVersion",e[e.ExtensionLifecycleId=2]="ExtensionLifecycleId",e[e.DeviceInfoId=3]="DeviceInfoId",e[e.SessionId=4]="SessionId",e[e.UserInfoId=5]="UserInfoId",e[e.UserInfoLanguage=6]="UserInfoLanguage",e[e.AuthType=7]="AuthType",e[e.BrowserLanguage=8]="BrowserLanguage",e[e.ClipperType=9]="ClipperType",e[e.ContentType=10]="ContentType",e[e.FlightInfo=11]="FlightInfo",e[e.InPrivateBrowsing=12]="InPrivateBrowsing",e[e.PageLanguage=13]="PageLanguage"}(n=e.Custom||(e.Custom={})),e.toString=t}(r=n.Context||(n.Context={}))},{}],50:[function(e,t,n){"use strict";var r,o=e("../../clientType"),i=e("../../constants"),a=e("../../objectUtils"),s=e("../../localization/localization"),u=e("../log");!function(e){function t(e){if(e){var t={};t[g[g.Error].toLowerCase()]=e.error;var n=e;return n&&void 0!==n.statusCode&&(t[g[g.StatusCode].toLowerCase()]=n.statusCode,t[g[g.Response].toLowerCase()]=n.response,t[g[g.ResponseHeaders].toLowerCase()]=n.responseHeaders,void 0!==n.timeout&&(t[g[g.Timeout].toLowerCase()]=n.timeout)),JSON.stringify(t)}}function n(e){if(e){var t=e;return t&&void 0!==t.statusCode?void 0!==t.timeout?{error:t.error,statusCode:t.statusCode,response:t.response,responseHeaders:t.responseHeaders,timeout:t.timeout}:{error:t.error,statusCode:t.statusCode,response:t.response,responseHeaders:t.responseHeaders}:{error:e.error}}}function r(t){var n={};n[i.Constants.Urls.QueryParams.failureType]=u.Failure.Type[t.properties.failureType],n[i.Constants.Urls.QueryParams.failureInfo]=e.toString(t.properties.failureInfo),n[i.Constants.Urls.QueryParams.stackTrace]=t.properties.stackTrace,a.ObjectUtils.isNullOrUndefined(t.properties.failureId)||(n[i.Constants.Urls.QueryParams.failureId]=t.properties.failureId);var r=t.clientInfo;f(n,r),LogManager.sendMiscLogRequest({label:u.Failure.Label[t.label],category:u.Failure.category,properties:n},!0)}function l(t,n,r,o){var i;throw i=o?JSON.stringify({message:o,error:n.toString()}):n.toString(),e.sendFailureLogRequest({label:u.Failure.Label.UnhandledExceptionThrown,properties:{failureType:u.Failure.Type.Unexpected,failureInfo:{error:i},failureId:"Channel "+t,stackTrace:u.Failure.getStackTrace(n)},clientInfo:r}),n}function c(e,t){void 0===t&&(t=!1);var n={};n[i.Constants.Urls.QueryParams.channel]=e.channel,n[i.Constants.Urls.QueryParams.timeoutInMs]=i.Constants.Settings.noOpTrackerTimeoutDuration.toString();var r=e.clientInfo;f(n,r),LogManager.sendMiscLogRequest({label:u.NoOp.Label[e.label],category:u.NoOp.category,properties:n},!0),t&&window&&window.alert(s.Localization.getLocalizedString("WebClipper.Error.NoOpError"))}function p(e,t){return void 0===t&&(t=!1),setTimeout(function(){c(e,t)},i.Constants.Settings.noOpTrackerTimeoutDuration)}function f(e,t){t&&(e[i.Constants.Urls.QueryParams.clientType]=a.ObjectUtils.isNullOrUndefined(t.get())?u.unknownValue:o.ClientType[t.get().clipperType],e[i.Constants.Urls.QueryParams.clipperVersion]=a.ObjectUtils.isNullOrUndefined(t.get())?u.unknownValue:t.get().clipperVersion,e[i.Constants.Urls.QueryParams.clipperId]=a.ObjectUtils.isNullOrUndefined(t.get())?u.unknownValue:t.get().clipperId)}var g;!function(e){e[e.Error=0]="Error",e[e.StatusCode=1]="StatusCode",e[e.Response=2]="Response",e[e.ResponseHeaders=3]="ResponseHeaders",e[e.Timeout=4]="Timeout"}(g||(g={})),e.toString=t,e.clone=n,e.sendFailureLogRequest=r,e.handleCommunicatorError=l,e.sendNoOpTrackerRequest=c,e.setNoOpTrackerRequestTimeout=p}(r=n.ErrorUtils||(n.ErrorUtils={}))},{"../../clientType":2,"../../constants":10,"../../localization/localization":41,"../../objectUtils":60,"../log":45}],51:[function(e,t,n){"use strict";var r,o=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},i=e("../log"),a=e("../../objectUtils");!function(e){function t(t,n){switch(t){default:case e.Category.BaseEvent:return new e.BaseEvent(n);case e.Category.PromiseEvent:return new e.PromiseEvent(n);case e.Category.StreamEvent:return new e.StreamEvent(n)}}var n;!function(e){e[e.BaseEvent=0]="BaseEvent",e[e.PromiseEvent=1]="PromiseEvent",e[e.StreamEvent=2]="StreamEvent"}(n=e.Category||(e.Category={}));var r;!function(e){e[e.AddEmbeddedVideo=0]="AddEmbeddedVideo",e[e.AugmentationApiCall=1]="AugmentationApiCall",e[e.BookmarkPage=2]="BookmarkPage",e[e.CompressRegionSelection=3]="CompressRegionSelection",e[e.ClearNoOpTracker=4]="ClearNoOpTracker",e[e.Click=5]="Click",e[e.ClipAugmentationOptions=6]="ClipAugmentationOptions",e[e.ClipCommonOptions=7]="ClipCommonOptions",e[e.ClipPdfOptions=8]="ClipPdfOptions",e[e.ClipRegionOptions=9]="ClipRegionOptions",e[e.ClipSelectionOptions=10]="ClipSelectionOptions",e[e.ClipToOneNoteAction=11]="ClipToOneNoteAction",e[e.CloseClipper=12]="CloseClipper",e[e.ClosePageNavTooltip=13]="ClosePageNavTooltip",e[e.CreateNotebook=14]="CreateNotebook",e[e.CreatePage=15]="CreatePage",e[e.CreateSection=16]="CreateSection",e[e.DebugFeedback=17]="DebugFeedback",e[e.DeviceIdMap=18]="DeviceIdMap",e[e.FetchNonLocalData=19]="FetchNonLocalData",e[e.FullPageScreenshotCall=20]="FullPageScreenshotCall",e[e.GetBinaryRequest=21]="GetBinaryRequest",e[e.GetCleanDom=22]="GetCleanDom",e[e.GetExistingUserInformation=23]="GetExistingUserInformation",e[e.GetFlightingAssignments=24]="GetFlightingAssignments",e[e.GetLocale=25]="GetLocale",e[e.GetLocalizedStrings=26]="GetLocalizedStrings",e[e.GetNotebookByName=27]="GetNotebookByName",e[e.GetNotebooks=28]="GetNotebooks",e[e.GetPage=29]="GetPage",e[e.GetPageContent=30]="GetPageContent",e[e.GetPages=31]="GetPages",e[e.HandleSignInEvent=32]="HandleSignInEvent",e[e.HideClipperDueToSpaNavigate=33]="HideClipperDueToSpaNavigate",e[e.InvokeClipper=34]="InvokeClipper",e[e.InvokeTooltip=35]="InvokeTooltip",e[e.InvokeWhatsNew=36]="InvokeWhatsNew",e[e.LocalFilesNotAllowedPanelShown=37]="LocalFilesNotAllowedPanelShown",e[e.PagesSearch=38]="PagesSearch",e[e.PdfByteMetadata=39]="PdfByteMetadata",e[e.PdfDataUrlMetadata=40]="PdfDataUrlMetadata",e[e.ProcessPdfIntoDataUrls=41]="ProcessPdfIntoDataUrls",e[e.RegionSelectionCapturing=42]="RegionSelectionCapturing",e[e.RegionSelectionLoading=43]="RegionSelectionLoading",e[e.RegionSelectionProcessing=44]="RegionSelectionProcessing",e[e.RetrieveUserInformation=45]="RetrieveUserInformation",e[e.SendBatchRequest=46]="SendBatchRequest",e[e.SetContextProperty=47]="SetContextProperty",e[e.SetDoNotPromptRatings=48]="SetDoNotPromptRatings",e[e.ShouldShowRatingsPrompt=49]="ShouldShowRatingsPrompt",e[e.TooltipImpression=50]="TooltipImpression",e[e.UpdatePage=51]="UpdatePage",e[e.UserInfoUpdated=52]="UserInfoUpdated",e[e.WhatsNewImpression=53]="WhatsNewImpression"}(r=e.Label||(e.Label={}));var s=function(){function t(e){if(this._timerWasStopped=!1,this.isEventData(e)){var t=e;this._label=t.Label,this._duration=t.Duration,this._properties=t.Properties?JSON.parse(JSON.stringify(t.Properties)):void 0}else{var n=e;this._label=n,this.startTimer()}}return t.prototype.getDuration=function(){return this._duration},t.prototype.getEventCategory=function(){return e.Category.BaseEvent},t.prototype.getEventData=function(){return{Label:this._label,Duration:this._duration,Properties:this.getCustomProperties()}},t.prototype.getLabel=function(){return e.Label[this._label]},t.prototype.getCustomProperties=function(){return this._properties?JSON.parse(JSON.stringify(this._properties)):void 0},t.prototype.setCustomProperty=function(e,t){if(this.isReservedPropertyName(e))throw new Error("Tried to overwrite key '"+i.PropertyName.Custom[e]+"' with value of "+JSON.stringify(t));this._properties||(this._properties={}),this._properties[i.PropertyName.Custom[e]]=t},t.prototype.startTimer=function(){this._startTime=(new Date).getTime()},t.prototype.stopTimer=function(){return!!this._startTime&&(this._duration=(new Date).getTime()-this._startTime,this._timerWasStopped=!0,!0)},t.prototype.timerWasStopped=function(){return this._timerWasStopped},t.prototype.isEventData=function(e){var t=e;return!(!t||a.ObjectUtils.isNullOrUndefined(t.Label))},t.prototype.isReservedPropertyName=function(e){for(var t in i.PropertyName.Reserved)if(i.PropertyName.Custom[e].toLowerCase()===t.toLowerCase())return!0;return!1},t}();e.BaseEvent=s;var u=function(t){function n(e){var n=t.call(this,e)||this;if(n._logStatus=i.Status.Succeeded,n._failureType=i.Failure.Type.Unexpected,n.isEventData(e)){var r=e;n._logStatus=r.LogStatus,n._failureType=r.FailureType,n._failureInfo=i.ErrorUtils.clone(r.FailureInfo)}return n}return o(n,t),n.prototype.getEventCategory=function(){return e.Category.PromiseEvent},n.prototype.getEventData=function(){return{Label:this._label,Duration:this._duration,Properties:this.getCustomProperties(),LogStatus:this._logStatus,FailureType:this._failureType,FailureInfo:i.ErrorUtils.clone(this._failureInfo)}},n.prototype.getStatus=function(){return i.Status[this._logStatus]},n.prototype.setStatus=function(e){this._logStatus=e,this._timerWasStopped||this.stopTimer()},n.prototype.getFailureInfo=function(){return i.ErrorUtils.toString(this._failureInfo)},n.prototype.setFailureInfo=function(e){this._failureInfo=i.ErrorUtils.clone(e)},n.prototype.getFailureType=function(){return i.Failure.Type[this._failureType]},n.prototype.setFailureType=function(e){this._failureType=e},n}(s);e.PromiseEvent=u;var l=function(t){function n(e){var n=t.call(this,e)||this;if(n._stream=[],n.isEventData(e)){var r=e;n._stream=r.Stream}return n}return o(n,t),n.prototype.getEventCategory=function(){return e.Category.StreamEvent},n.prototype.getEventData=function(){return{Label:this._label,Duration:this._duration,Properties:this.getCustomProperties(),Stream:this._stream}},n.prototype.append=function(e){this._stream.push(e)},n}(s);e.StreamEvent=l,e.createEvent=t}(r=n.Event||(n.Event={}))},{"../../objectUtils":60,"../log":45}],52:[function(e,t,n){"use strict";var r;!function(e){function t(e){return e||(e=new Error),e.stack}e.category="Failure";var n;!function(e){e[e.Unexpected=0]="Unexpected",e[e.Expected=1]="Expected"}(n=e.Type||(e.Type={})),e.getStackTrace=t;var r;!function(e){e[e.ClickedButtonWithNoId=0]="ClickedButtonWithNoId",e[e.EndSessionWithoutTrigger=1]="EndSessionWithoutTrigger",e[e.GetChangeLog=2]="GetChangeLog",e[e.GetComputedStyle=3]="GetComputedStyle",e[e.GetLocalizedString=4]="GetLocalizedString",e[e.GetSetting=5]="GetSetting",e[e.IFrameMessageHandlerHasNoOtherWindow=6]="IFrameMessageHandlerHasNoOtherWindow",e[e.InvalidArgument=7]="InvalidArgument",e[e.IsFeatureEnabled=8]="IsFeatureEnabled",e[e.JsonParse=9]="JsonParse",e[e.NotImplemented=10]="NotImplemented",e[e.OnLaunchOneNoteButton=11]="OnLaunchOneNoteButton",e[e.OrphanedWebClippersDueToExtensionRefresh=12]="OrphanedWebClippersDueToExtensionRefresh",e[e.RegionSelectionProcessing=13]="RegionSelectionProcessing",e[e.RenderFailurePanel=14]="RenderFailurePanel",e[e.ReservedPropertyOverwriteAttempted=15]="ReservedPropertyOverwriteAttempted",e[e.SessionAlreadySet=16]="SessionAlreadySet",e[e.SetLoggerNoop=17]="SetLoggerNoop",e[e.SetUndefinedLocalizedStrings=18]="SetUndefinedLocalizedStrings",e[e.TraceLevelErrorWarningMessage=19]="TraceLevelErrorWarningMessage",e[e.UnhandledApiCode=20]="UnhandledApiCode",e[e.UnhandledExceptionThrown=21]="UnhandledExceptionThrown",e[e.UserSetWithInvalidExpiredData=22]="UserSetWithInvalidExpiredData",e[e.WebExtensionWindowCreate=23]="WebExtensionWindowCreate",e[e.UnclippablePage=24]="UnclippablePage",e[e.UnsupportedBrowser=25]="UnsupportedBrowser"}(r=e.Label||(e.Label={}))}(r=n.Failure||(n.Failure={}))},{}],53:[function(e,t,n){"use strict";var r;!function(e){e.category="Funnel";var t;!function(e){e[e.Invoke=0]="Invoke",e[e.AuthAlreadySignedIn=1]="AuthAlreadySignedIn",e[e.AuthAttempted=2]="AuthAttempted",e[e.AuthSignInCompleted=3]="AuthSignInCompleted",e[e.AuthSignInFailed=4]="AuthSignInFailed",e[e.ClipAttempted=5]="ClipAttempted",e[e.Interact=6]="Interact",e[e.ViewInWac=7]="ViewInWac",e[e.SignOut=8]="SignOut"}(t=e.Label||(e.Label={}))}(r=n.Funnel||(n.Funnel={}))},{}],54:[function(e,t,n){"use strict";var r;!function(e){e[e.LogEvent=0]="LogEvent",e[e.LogFailure=1]="LogFailure",e[e.PushToStream=2]="PushToStream",e[e.LogFunnel=3]="LogFunnel",e[e.LogSession=4]="LogSession",e[e.LogSessionStart=5]="LogSessionStart",e[e.LogSessionEnd=6]="LogSessionEnd",e[e.LogTrace=7]="LogTrace",e[e.LogClickEvent=8]="LogClickEvent",e[e.SetContextProperty=9]="SetContextProperty"}(r=n.LogMethods||(n.LogMethods={}))},{}],55:[function(e,t,n){"use strict";var r;!function(e){e.category="NoOp";var t;!function(e){e[e.InitializeCommunicator=0]="InitializeCommunicator",e[e.WebClipperUiFrameDidNotExist=1]="WebClipperUiFrameDidNotExist",e[e.WebClipperUiFrameIsNotVisible=2]="WebClipperUiFrameIsNotVisible"}(t=e.Label||(e.Label={}))}(r=n.NoOp||(n.NoOp={}))},{}],56:[function(e,t,n){"use strict";var r;!function(e){var t;!function(e){e[e.AnnotationAdded=0]="AnnotationAdded",e[e.AugmentationModel=1]="AugmentationModel",e[e.AverageProcessingDurationPerPage=2]="AverageProcessingDurationPerPage",e[e.ByteLength=3]="ByteLength",e[e.BytesPerPdfPage=4]="BytesPerPdfPage",e[e.BytesTrimmed=5]="BytesTrimmed",e[e.Channel=6]="Channel",e[e.ClipMode=7]="ClipMode",e[e.CloseReason=8]="CloseReason",e[e.ContainsAtLeastOneHighlight=9]="ContainsAtLeastOneHighlight",e[e.ContentType=10]="ContentType",e[e.CorrelationId=11]="CorrelationId",e[e.CurrentPanel=12]="CurrentPanel",e[e.CurrentSectionStillExists=13]="CurrentSectionStillExists",e[e.DeviceIdInStorage=14]="DeviceIdInStorage",e[e.DeviceIdInCookie=15]="DeviceIdInCookie",e[e.DomSizeInBytes=16]="DomSizeInBytes",e[e.FeatureEnabled=17]="FeatureEnabled",e[e.FinalDataUrlLength=18]="FinalDataUrlLength",e[e.FontSize=19]="FontSize",e[e.ForceRetrieveFreshLocStrings=20]="ForceRetrieveFreshLocStrings",e[e.FreshUserInfoAvailable=21]="FreshUserInfoAvailable",e[e.FullPageScreenshotContentFound=22]="FullPageScreenshotContentFound",e[e.Height=23]="Height",e[e.InitialDataUrlLength=24]="InitialDataUrlLength",e[e.InvokeMode=25]="InvokeMode",e[e.InvokeSource=26]="InvokeSource",e[e.IsHighDpiScreen=27]="IsHighDpiScreen",e[e.IsRetryable=28]="IsRetryable",e[e.IsSerif=29]="IsSerif",e[e.Key=30]="Key",e[e.LastSeenTooltipTime=31]="LastSeenTooltipTime",e[e.LastUpdated=32]="LastUpdated",e[e.MaxDepth=33]="MaxDepth",e[e.NumPages=34]="NumPages",e[e.NumRegions=35]="NumRegions",e[e.NumTimesTooltipHasBeenSeen=36]="NumTimesTooltipHasBeenSeen",e[e.PageNavTooltipType=37]="PageNavTooltipType",e[e.PageTitleModified=38]="PageTitleModified",e[e.PdfAllPagesClipped=39]="PdfAllPagesClipped",e[e.PdfAttachmentClipped=40]="PdfAttachmentClipped",e[e.PdfFileSelectedPageCount=41]="PdfFileSelectedPageCount",
e[e.PdfFileTotalPageCount=42]="PdfFileTotalPageCount",e[e.PdfIsBatched=43]="PdfIsBatched",e[e.PdfIsLocalFile=44]="PdfIsLocalFile",e[e.RatingsInfo=45]="RatingsInfo",e[e.ShouldShowRatingsPrompt=46]="ShouldShowRatingsPrompt",e[e.SignInCancelled=47]="SignInCancelled",e[e.StoredLocaleDifferentThanRequested=48]="StoredLocaleDifferentThanRequested",e[e.TimeToClearNoOpTracker=49]="TimeToClearNoOpTracker",e[e.TooltipType=50]="TooltipType",e[e.UpdateInterval=51]="UpdateInterval",e[e.UserInformationReturned=52]="UserInformationReturned",e[e.UserInformationStored=53]="UserInformationStored",e[e.UserUpdateReason=54]="UserUpdateReason",e[e.Value=55]="Value",e[e.Width=56]="Width",e[e.WriteableCookies=57]="WriteableCookies"}(t=e.Custom||(e.Custom={}));var n;!function(e){e.Category="Category",e.Duration="Duration",e.EventName="EventName",e.EventType="EventType",e.FailureInfo="FailureInfo",e.FailureType="FailureType",e.Id="Id",e.Label="Label",e.Level="Level",e.Message="Message",e.Properties="Properties",e.StackTrace="StackTrace",e.Status="Status",e.Stream="Stream",e.Trigger="Trigger",e.WebClipper="WebClipper"}(n=e.Reserved||(e.Reserved={}))}(r=n.PropertyName||(n.PropertyName={}))},{}],57:[function(e,t,n){"use strict";var r;!function(e){e.category="Session";var t;!function(e){e[e.SignOut=0]="SignOut",e[e.Unload=1]="Unload"}(t=e.EndTrigger||(e.EndTrigger={}));var n;!function(e){e[e.Started=0]="Started",e[e.Ended=1]="Ended"}(n=e.State||(e.State={}))}(r=n.Session||(n.Session={}))},{}],58:[function(e,t,n){"use strict";var r;!function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed"}(r=n.Status||(n.Status={}))},{}],59:[function(e,t,n){"use strict";var r;!function(e){e.category="Trace";var t;!function(e){e[e.DefaultingToConsoleLogger=0]="DefaultingToConsoleLogger",e[e.DebugMode=1]="DebugMode",e[e.RequestForClipperInstalledPageUrl=2]="RequestForClipperInstalledPageUrl",e[e.General=3]="General"}(t=e.Label||(e.Label={}));var n;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Information=3]="Information",e[e.Verbose=4]="Verbose"}(n=e.Level||(e.Level={}))}(r=n.Trace||(n.Trace={}))},{}],60:[function(e,t,n){"use strict";var r;!function(e){function t(e){return"number"==typeof e&&!isNaN(e)}function n(e){return null===e||void 0===e}e.isNumeric=t,e.isNullOrUndefined=n}(r=n.ObjectUtils||(n.ObjectUtils={}))},{}],61:[function(e,t,n){"use strict";var r;!function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed"}(r=n.OperationResult||(n.OperationResult={}))},{}],62:[function(e,t,n){"use strict";var r,o=e("es6-promise");!function(e){function t(){n(),r(),i(),a()}function n(){String.prototype.endsWith||(String.prototype.endsWith=function(e,t){var n=this.toString();("number"!=typeof t||!isFinite(t)||Math.floor(t)!==t||t>n.length)&&(t=n.length),t-=e.length;var r=n.lastIndexOf(e,t);return r!==-1&&r===t})}function r(){"function"!=typeof Object.assign&&(Object.assign=function(e){if(!e)throw new TypeError("Cannot convert undefined to object");for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n];if(r)for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])}return t})}function i(){"undefined"==typeof Promise&&o.polyfill()}function a(){window.requestAnimationFrame||(window.requestAnimationFrame=window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||function(e){setTimeout(function(){e(Date.now())},16)})}e.init=t}(r=n.Polyfills||(n.Polyfills={}))},{"es6-promise":78}],63:[function(e,t,n){"use strict";var r;!function(e){function t(e){return new Promise(function(t){setTimeout(function(){t()},e)})}function n(e,t){return void 0===t&&(t={retryCount:3,retryWaitTimeInMs:3e3}),e().catch(function(r){return t.retryCount>0?new Promise(function(r,o){setTimeout(function(){t.retryCount--,n(e,t).then(function(e){r(e)}).catch(function(e){o(e)})},t.retryWaitTimeInMs)}):Promise.reject(r)})}e.wait=t,e.execWithRetry=n}(r=n.PromiseUtils||(n.PromiseUtils={}))},{}],64:[function(e,t,n){"use strict";var r,o=e("../settings.json");!function(t){function n(e){var t=o[e];if(t&&t.Value)return t.Value}function r(t){o=t?t:e("../settings.json")}t.getSetting=n,t.setSettingsJsonForTesting=r}(r=n.Settings||(n.Settings={}))},{"../settings.json":76}],65:[function(e,t,n){"use strict";var r=function(){function e(){}return e.prototype.getValue=function(e){var t;return window.localStorage&&(t=window.localStorage.getItem(e),t||this.removeKey(e)),t},e.prototype.getValues=function(e){var t={};if(window.localStorage&&e)for(var n=0;n<e.length;n++){var r=window.localStorage.getItem(e[n]);r?t[e[n]]=r:this.removeKey(e[n])}return t},e.prototype.setValue=function(e,t){window.localStorage&&(t?window.localStorage.setItem(e,t):window.localStorage.removeItem(e))},e.prototype.removeKey=function(e){return window.localStorage&&window.localStorage.removeItem(e),!0},e}();n.LocalStorage=r},{}],66:[function(e,t,n){"use strict";var r=e("../http/clipperCachedHttp"),o=e("./clipperStorageGateStrategy"),i=function(){function e(e,t){this.storage=e,this.storageGateStrategy=new o.ClipperStorageGateStrategy(e),this.cachedHttp=new r.ClipperCachedHttp(this,t)}return e.prototype.setLogger=function(e){this.cachedHttp.setLogger(e)},e.prototype.getFreshValue=function(e,t,n){return this.cachedHttp.getFreshValue(e,t,n)},e.prototype.getValue=function(e){return this.storage.getValue(e)},e.prototype.getValues=function(e){return this.storage.getValues(e)},e.prototype.setValue=function(e,t){this.storageGateStrategy.shouldSet(e,t)&&this.storage.setValue(e,t)},e.prototype.removeKey=function(e){return this.storage.removeKey(e)},e}();n.ClipperData=i},{"../http/clipperCachedHttp":39,"./clipperStorageGateStrategy":67}],67:[function(e,t,n){"use strict";var r=e("./clipperStorageKeys"),o=function(){function e(e){this.keysThatRequireUserInfo=[r.ClipperStorageKeys.cachedNotebooks,r.ClipperStorageKeys.currentSelectedSection],this.storage=e}return e.prototype.shouldSet=function(e,t){if(t&&this.keysThatRequireUserInfo.indexOf(e)>-1){var n=this.storage.getValue(r.ClipperStorageKeys.userInformation);return!!n}return!0},e}();n.ClipperStorageGateStrategy=o},{"./clipperStorageKeys":68}],68:[function(e,t,n){"use strict";var r;!function(e){e.clipperId="clipperId",e.cachedNotebooks="notebooks",e.currentSelectedSection="curSection",e.displayLanguageOverride="displayLocaleOverride",e.doNotPromptRatings="doNotPromptRatings",e.flightingInfo="flightingInfo",e.hasPatchPermissions="hasPatchPermissions",e.lastBadRatingDate="lastBadRatingDate",e.lastBadRatingVersion="lastBadRatingVersion",e.lastClippedDate="lastClippedDate",e.lastSeenVersion="lastSeenVersion",e.lastInvokedDate="lastInvokedDate",e.lastSeenTooltipTimeBase="lastSeenTooltipTime",e.lastClippedTooltipTimeBase="lastClippedTooltipTime",e.locale="locale",e.locStrings="locStrings",e.numSuccessfulClips="numSuccessfulClips",e.numSuccessfulClipsRatingsEnablement="numSuccessfulClipsRatingsEnablement",e.numTimesTooltipHasBeenSeenBase="numTimesTooltipHasBeenSeen",e.userInformation="userInformation"}(r=n.ClipperStorageKeys||(n.ClipperStorageKeys={}))},{}],69:[function(e,t,n){arguments[4][65][0].apply(n,arguments)},{dup:65}],70:[function(e,t,n){"use strict";var r,o=e("./objectUtils"),i=e("./operationResult"),a=e("./localization/localization"),s=e("lodash");!function(e){function t(e,t){if(o.ObjectUtils.isNullOrUndefined(e))return r("");if(e=e.trim(),""===e)return r("");for(var i=e.split(","),a=[],u=0;u<i.length;++u){var l=[],c=void 0,p=i[u].trim();if(""!==p){if(/^\d+$/.test(p)){var f=parseInt(p,10);if(0===f||!o.ObjectUtils.isNullOrUndefined(t)&&f>t)return r(p);l=[f]}else{if(!(c=/^(\d+)\s*-\s*(\d+)$/.exec(p)))return r(p);var g=parseInt(c[1],10),d=parseInt(c[2],10),h=4294967295;if(g>=d||0===g||0===d||g>=h||d>=h||d-g+1>h||!o.ObjectUtils.isNullOrUndefined(t)&&d>t)return r(p);l=s.range(g,d+1)}a=a.concat(l)}}var m=s(a).sortBy().sortedUniq().value();if(0===m.length)return r(e);var v=s.last(m);return!o.ObjectUtils.isNullOrUndefined(t)&&v>t?r(v.toString()):n(m)}function n(e){return{status:i.OperationResult.Succeeded,result:e}}function r(e){return{status:i.OperationResult.Failed,result:e}}function u(e){var n=t(e);if(n.status!==i.OperationResult.Succeeded)return 0;var r=n.result;return r?r.length:0}function l(e,t){var n=(t+1).toString();return e+": "+a.Localization.getLocalizedString("WebClipper.Label.Page")+" "+n}function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}e.parsePageRange=t,e.countPageRange=u,e.getBatchedPageTitle=l,e.generateGuid=c}(r=n.StringUtils||(n.StringUtils={}))},{"./localization/localization":41,"./objectUtils":60,"./operationResult":61,lodash:79}],71:[function(e,t,n){"use strict";var r,o=e("./objectUtils"),i=e("./settings"),a=e("./clipperUI/tooltipType");!function(e){function t(e,t){for(var n=0;n<t.length;++n){var r=t[n],o=a.TooltipType[r],s=i.Settings.getSetting(o+"Domains"),u=new RegExp(s.join("|"),"i");if(u.test(e))return r}}function n(e,t){if(!e)return t;var n=/\/(?=[^\/]+\.\w{3,4}$).+/g.exec(e);return n&&n[0]?n[0].slice(1):t}function r(e){var t=document.createElement("a");return t.href=e,t.protocol+"//"+t.host+"/"}function s(e){var t=document.createElement("a");t.href=e;var n=t.pathname;return u(n)}function u(e){return e=o.ObjectUtils.isNullOrUndefined(e)?"/":e,e.length>0&&"/"===e.charAt(0)?e:"/"+e}function l(e,t){if(e&&t){var n=t.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)","i"),o=r.exec(e);if(o)return o[2]?decodeURIComponent(o[2].replace(/\+/g," ")):""}}function c(e,t,n,r){if(void 0===r&&(r=!1),!e||!t||!n)return e;r&&(t=t.charAt(0).toUpperCase()+t.slice(1));var o=e.match(/^([^#]*)(#.*)?$/),i=o[1],a=o[2]?o[2]:"",s=i.indexOf("?");if(s===-1)return i+"?"+t+"="+n+a;if(s===i.length-1)return i+t+"="+n+a;for(var u=i.substring(s+1).split("&"),l=0;l<u.length;l++){var c=u[l].split("=");if(c[0]===t)return u[l]=c[0]+"="+n,i.substring(0,s+1)+u.join("&")+a}return i+"&"+t+"="+n+a}function p(e){return g(e,["PageNav_BlacklistedDomains"])}function f(e){return g(e,["AugmentationDefault_WhitelistedDomains","ProductDomains","RecipeDomains"])}function g(e,t){if(!e)return!1;var n=[];t.forEach(function(e){n=n.concat(i.Settings.getSetting(e))});for(var r=0,o=n;r<o.length;r++){var a=o[r];if(new RegExp(a).test(e))return!0}return!1}e.checkIfUrlMatchesAContentType=t,e.getFileNameFromUrl=n,e.getHostname=r,e.getPathname=s,e.getQueryValue=l,e.addUrlQueryValue=c,e.onBlacklistedDomain=p,e.onWhitelistedDomain=f}(r=n.UrlUtils||(n.UrlUtils={}))},{"./clipperUI/tooltipType":3,"./objectUtils":60,"./settings":64}],72:[function(e,t,n){"use strict";var r;!function(e){e[e.Msa=0]="Msa",e[e.OrgId=1]="OrgId"}(r=n.AuthType||(n.AuthType={}));var o;!function(e){e[e.InitialRetrieval=0]="InitialRetrieval",e[e.SignInAttempt=1]="SignInAttempt",e[e.SignInCancel=2]="SignInCancel",e[e.SignOutAction=3]="SignOutAction",e[e.TokenRefreshForPendingClip=4]="TokenRefreshForPendingClip"}(o=n.UpdateReason||(n.UpdateReason={}))},{}],73:[function(e,t,n){"use strict";var r;!function(e){e.schemaVersionSupported="1"}(r=n.ChangeLog||(n.ChangeLog={}))},{}],74:[function(e,t,n){"use strict";var r,o=e("./version");!function(e){function t(e,t){if(!e||0===e.length)return[];if(!t)return e;for(var n=0;n<e.length;n++){var r=new o.Version(e[n].version);if(t.isGreaterThanOrEqualTo(r))return e.slice(0,n)}return e}function n(e,t,n){if(!e||0===e.length)return[];for(var r=[],i=0;i<e.length;i++){var a=new o.Version(e[i].version);if(t&&a.isLesserThanOrEqualTo(t))break;a.isLesserThanOrEqualTo(n)&&r.push(e[i])}return r}function r(e,t){if(!e||!t)return[];for(var n=[],r=0;r<e.length;r++){var o=e[r],i=o.changes.filter(function(e){return e.supportedBrowsers.indexOf(t)!==-1});i.length>0&&n.push({version:o.version,date:o.date,changes:i})}return n}e.getUpdatesSinceVersion=t,e.getUpdatesBetweenVersions=n,e.filterUpdatesThatDontApplyToBrowser=r}(r=n.ChangeLogHelper||(n.ChangeLogHelper={}))},{"./version":75}],75:[function(e,t,n){"use strict";var r=function(){function e(e){if(!e||!/^\d+\.\d+\.\d+$/.test(e))throw new Error("version must match 'int.int.int' pattern, but was: "+e);var t=e.split(".");this.major=parseInt(t[0],10),this.minor=parseInt(t[1],10),this.patch=parseInt(t[2],10),this.stringRepresentation=this.major+"."+this.minor+"."+this.patch}return e.prototype.isEqualTo=function(e,t){return this.major===e.major&&this.minor===e.minor&&(t||this.patch===e.patch)},e.prototype.isGreaterThan=function(e,t){return this.major!==e.major?this.major>e.major:this.minor!==e.minor?this.minor>e.minor:!t&&this.patch>e.patch},e.prototype.isGreaterThanOrEqualTo=function(e,t){return this.isEqualTo(e,t)||this.isGreaterThan(e,t)},e.prototype.isLesserThan=function(e,t){return this.major!==e.major?this.major<e.major:this.minor!==e.minor?this.minor<e.minor:!t&&this.patch<e.patch},e.prototype.isLesserThanOrEqualTo=function(e,t){return this.isEqualTo(e,t)||this.isLesserThan(e,t)},e.prototype.toString=function(){return this.stringRepresentation},e}();n.Version=r},{}],76:[function(e,t,n){t.exports={DummyObjectForTestingPurposes:{Description:"Do not remove under any circumstances!",Value:"Testing."},AugmentationDefault_WhitelistedDomains:{Description:"The set of domains on which we are changing the default clip mode to Augmentation.",Value:["^https?:\\/\\/www\\.onenote\\.com","[^\\w]wikipedia","[^\\w]nytimes","[^\\w]lifehacker","[^\\w]msn","[^\\w]theguardian","[^\\w]forbes","[^\\w]bbc","[^\\w]huffingtonpost","[^\\w]businessinsider","[^\\w]washingtonpost","[^\\w]medium","[^\\w]buzzfeed","[^\\w]bbc","[^\\w]theverge","[^\\w]techcrunch","[^\\w]amazon","[^\\w]allrecipes","[^\\w]foodnetwork","[^\\w]seriouseats","[^\\w]epicurious","[^\\w]support.office.com","[^\\w]blogs.office.com","[^\\w]blogs.technet.com","[^\\w]youtube\\.com\\/watch(\\?v=(\\w+)|.*\\&v=(\\w+))","[^\\w]youtube\\.com\\/embed\\/(\\w+)","[^\\w]vimeo\\.com.*?\\/(\\d+)($|\\?|\\#|\\/$)","[^\\w]vimeo\\.com.*?\\/(\\d+)\\/\\w+:\\w+(\\/|$)","[^\\w]vimeo\\.com.*?\\/ondemand\\/\\w+$","[^\\w]khanacademy\\.org(.*)/v/(.*)","\\/(\\d{2}|\\d{4})\\/\\d{1,2}\\/","\\/(\\d{2}|\\d{4})-\\d{1,2}-\\d{1,2}\\/"]},PageNav_BlacklistedDomains:{Description:"The set of domains where we do not want to show any PageNav tooltip experience",Value:["^(http(s)?)://(login\\.live\\.com)","^(http(s)?)://(login\\.microsoftonline\\.com)"]},PdfDomains:{Description:"PDF regexes",Value:["^.*(\\.pdf)$"]},RecipeDomains:{Description:"The set of domains where we want to show a Recipe tooltip",Value:["^(http(s)?)://(12tomatoes\\.com/)()([^/]*-[^/]*)/$","^(http(s)?)://(abc\\.go\\.com/shows/the-chew/recipes/)([^/]*-[^/]*)$","^(http(s)?)://(([^ ]{1,18})?)(allrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://((\\.{1,18}\\.)?)(allrecipes\\.)(com)/(recipe/[^/]+(/)?(/detail\\.aspx\\??)?)$","^(http(s)?)://()(allrecipes\\.com)()/([r|R]ecipe/[^/]+/Detail\\.aspx)$","^(http(s)?)://()(allrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://(cookieandkate\\.com)()/(\\d{4})/(.+)$","^(http(s)?)://(cooking\\.)(nytimes\\.com)()/(recipes/(.*))$","^(http(s)?)://()(cookpad\\.com)()/(recipe/[0-9]+$)$","^(http(s)?)://()(damndelicious\\.net)()/\\d+/\\d+/\\d+/.+/$","^(http(s)?)://(food52\\.com)()/recipes/[0-9]+-.+$","^(http(s)?)://(minimalistbaker.com)/([^/]*-[^/]*)/$","^(http(s)?)://(paleoleap.com)/([^/]*-[^/]*)/$","^(http(s)?)://(pinchofyum.com)/([^/]*-[^/]*)$","^(http(s)?)://(recipe\\.rakuten\\.co\\.jp)()/recipe/[0-9]+/$","^(http(s)?)://()(thepioneerwoman\\.com)()/(cooking/.+/)$","^(http(s)?)://((www\\.)?)(allrecipes\\.com)()/([r|R]ecipe/[^/]+/(Detail\\.aspx)?)$","^(http(s)?)://((www\\.)?)(allrecipes\\.com)()/([R|r]ecipe/.*)$","^(http(s)?)://(www\\.)(bbc\\.co\\.uk/food/recipes/[^/]*_\\d+)$","^(http(s)?)://(www\\.)(bbcgoodfood\\.com)()/(recipes/[0-9]+/(.*))$","^(http(s)?)://(www\\.)(bbcgoodfood\\.com)/recipes/([^/]*-[^/]*)$","^(http(s)?)://(www\\.)(bettycrocker\\.com)()/(recipes/[^\\/]+/[0-9a-f-]{36}/?)$","^(http(s)?)://(www\\.)(bonappetit\\.com)()/(recipe/(.*))$","^(http(s)?)://(www\\.budgetbytes\\.com)/\\d{4}/\\d{2}/(.*)/","^(http(s)?)://((www\\.)?)(chowhound\\.com)()/(recipes/.*)$","^(http(s)?)://(www\\.cookingclassy\\.com)/\\d{4}/\\d{2}/(.*)/","^(http(s)?)://(www\\.delish\\.com)/cooking/recipe-ideas/recipes/a\\d+/[^/]*-[^/]*/","^(http(s)?)://(www\\.)(eatingwell\\.com)()/(recipe/\\d+/.+/)$","^(http(s)?)://(www\\.)(epicurious\\.com)()/(recipes/food/views/.*)$","^(http(s)?)://(www\\.)(food\\.com)()/(recipe/.*)$","^(http(s)?)://(www\\.)(foodandwine\\.com)()/(recipes\\/.+)$","^(http(s)?)://(www\\.)(foodnetwork)(\\.ca)/(recipe/(.*))$","^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipe-collections/.*)$","^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipes.*)$","^(http(s)?)://(www\\.)(foodnetwork\\.com)()/(recipes/.*)$","^(http(s)?)://(www\\.)(marthastewart\\.com)()/(([0-9]+|recipe)/.*)$","^(http(s)?)://(www\\.)(marthastewart\\.com)()/([0-9]+/[^/]+)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*-[0-9]*/)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/.*)$","^(http(s)?)://(www\\.)(myrecipes\\.com)()/(recipe/[^/]+.*)$","^(http(s)?)://(www\\.)(realsimple\\.com)()/(food-recipes/browse-all-recipes/[^\\/]+/index\\.html)$","^(http(s)?)://((www)?\\.)(seriouseats\\.com)()/([Rr]ecipes\\/.*\\.(html|HTML)(.*)?)$","^(http(s)?)://(www\\.)(simplyrecipes\\.com)()/(recipes/[^/]*/)$","^(http(s)?)://((www\\.)?)(simplyrecipes\\.com)()/(recipes/[^/]*/)$","^(http(s)?)://((www\\.)?)(simplyrecipes\\.com)()/(recipes/.*)$","^(http(s)?)://(www\\.)(tasteofhome\\.com)()/([R|r]ecipes/[^/]+$)$","^(http(s)?)://(www\\.)(tasteofhome\\.com)()/(recipes/[^/]*/?)$","^(http(s)?)://(www\\.)(tasteofhome\\.com)()/(recipes/[^\\/]+/?)$","^(http(s)?)://(www\\.)(yummly\\.com)()/(recipe/[^/]+)$","^(http(s)?)://((www\\.)?)(yummly\\.com)()/(recipe/.*)$","^(http(s)?)://(.*)(yummly\\.com)()/(recipe/.+)$"]},ProductDomains:{Description:"The set of domains where we want to show a Product tooltip",Value:["^(http(s)?)://store\\.steampowered.com/app/\\d+/.*$","^(http(s)?)://(www\\.)(amazon\\.com)()/(gp/product/[^/]+/.*)$","^(http(s)?)://(www\\.)(amazon\\.com)()/(dp/[^/]+.*)$","^(http(s)?)://(www\\.)(amazon\\.com)()/([^/]+/dp/[^/]+)$","^(http(s)?)://(www\\.)(amazon\\.in)()/((.+/)?(dp|gp/product)\\/\\w{10,13}([^\\w].*)?)$","^(http(s)?)://(www\\.)(amazon\\.)([a-zA-Z\\.]+)/([^/]+/dp/.*)$","^(http(s)?)://(www\\.)(bedbathandbeyond\\.com)(/store/product/)([^/]*-[^/]*/)(\\d+.*)","^(http(s)?)://(www\\.)(ebay\\.com)()/(itm/[^/]+/.*)$","^(http(s)?)://(www\\.)(etsy\\.com)()/(listing)/(\\d+/.*)$","^(http(s)?)://(www\\.)(homedepot\\.com)()/(p/[^/]+/.*)$","^(http(s)?)://(www\\.)(newegg\\.com)()/(Product/Product\\.aspx\\?Item=.+)$","^(http(s)?)://(www\\.)(overstock\\.com)()/(.+/.+/[0-9]+/product\\.html.*)$","^(http(s)?)://(www\\.)(staples\\.com)()/(.*/product_[^/]+)$","^(http(s)?)://(www\\.)(target\\.com)()/(p/.+)$","^(http(s)?)://(www\\.)(walmart\\.com)()/(ip/.*)$"]},App_Id:{Description:"For identifying the Web Clipper during interaction with external services",Value:"OneNote Web Clipper"},Misc_Data_Endpoint_Id:{Description:"The id of the data endpoint used for miscellaneous logging",Value:"production"},Aria_Token:{Description:"For sending log events to the Aria production tenant 'OneNote Web Clipper (production)'",Value:"c7f3f24bc5f746d7b9d8f8e422fdd8a5-1cb58166-2598-485f-897c-1d3c8e62d30e-7560"},LogCategory_RatingsPrompt:{Description:"OFeedback log category for the ratings prompt feature",Value:"OneNoteClipperRatingsPrompt"},Bookmarklet_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the bookmarklet",Value:"false"},ChromeExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Chrome extension",Value:"true"},EdgeExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Edge extension",Value:"false"},FirefoxExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Firefox extension",Value:"true"},SafariExtension_RatingsEnabled:{Description:"If true, ratings prompt will be enabled for the Safari extension",Value:"false"},ChromeExtension_RatingUrl:{Description:"URL for the Web Clipper in the Chrome Web Store; used to direct users to leave ratings and reviews",Value:"https://chrome.google.com/webstore/detail/onenote-web-clipper/gojbdfnpnhogfdgjbigejoaolejmgdhk/reviews"},EdgeExtension_RatingUrl:{Description:"URL for the Web Clipper in the Windows Store; used to direct users to leave ratings and reviews",Value:"https://www.microsoft.com/en-us/store/p/onenote-web-clipper/9nblggh4r01n#ratings-reviews"},FirefoxExtension_RatingUrl:{Description:"URL for the Web Clipper in Firefox Add-ons; used to direct users to leave ratings and reviews",Value:"https://addons.mozilla.org/en-US/firefox/addon/onenote-clipper/reviews/add"}}},{}],77:[function(e,t,n){t.exports={"WebClipper.Accessibility.ScreenReader.CurrentModeHasChanged":"The current clipping mode is now '{0}'","WebClipper.Accessibility.ScreenReader.ClippingPageToOneNote":"Clipping the current page to OneNote","WebClipper.Accessibility.ScreenReader.ChangeFontToSansSerif":"Change font to Sans-Serif","WebClipper.Accessibility.ScreenReader.ChangeFontToSerif":"Change font to Serif","WebClipper.Accessibility.ScreenReader.DecreaseFontSize":"Decrease font size","WebClipper.Accessibility.ScreenReader.IncreaseFontSize":"Increase font size","WebClipper.Accessibility.ScreenReader.ToggleHighlighterModeForArticle":"Toggle Highlighter Mode For Article. To highlight using keyboard, enter Caret Mode using F7","WebClipper.Accessibility.ScreenReader.InputBoxToChangeTitleOfOneNotePage":"Text input to edit the title of the page you want to save","WebClipper.Accessibility.ScreenReader.InputBoxToChangeNotesToAddToPage":"Text input to edit the notes to save along with this page","WebClipper.Accessibility.ScreenReader.PagePreview":"Page Preview","WebClipper.Accessibility.ScreenReader.Footer":"User details","WebClipper.Accessibility.ScreenReader.Loading":"Loading...","WebClipper.Accessibility.ScreenReader.RegionSelectionCanvas":"Selection canvas","WebClipper.Action.BackToHome":"Back","WebClipper.Action.Cancel":"Cancel","WebClipper.Action.Clip":"Clip","WebClipper.Action.CloseTheClipper":"Close the Clipper","WebClipper.Action.Feedback":"Feedback?","WebClipper.Action.RefreshPage":"Refresh Page","WebClipper.Action.Signin":"Sign In","WebClipper.Action.SigninMsa":"Sign in with a Microsoft account","WebClipper.Action.SigninOrgId":"Sign in with a work or school account","WebClipper.Action.SignOut":"Sign Out","WebClipper.Action.TryAgain":"Try Again","WebClipper.Action.ViewInOneNote":"View in OneNote","WebClipper.Action.Less":"Less","WebClipper.Action.More":"More","WebClipper.BetaTag":"beta","WebClipper.ClipType.Article.Button":"Article","WebClipper.ClipType.Article.ProgressLabel":"Clipping Article","WebClipper.ClipType.Bookmark.Button":"Bookmark","WebClipper.ClipType.Bookmark.Button.Tooltip":"Clip just the title, thumbnail, synopsis, and link.","WebClipper.ClipType.Bookmark.ProgressLabel":"Clipping Bookmark","WebClipper.ClipType.Button.Tooltip":"Clip just the {0} in an easy-to-read format.","WebClipper.ClipType.Image.Button":"Image","WebClipper.ClipType.ImageSnippet.Button":"Image Snippet","WebClipper.ClipType.MultipleRegions.Button.Tooltip":"Take screenshots of parts of the page you'll select.","WebClipper.ClipType.Pdf.Button":"PDF Document","WebClipper.ClipType.Pdf.AskPermissionToClipLocalFile":"We need your permission to clip PDF files stored on your computer","WebClipper.ClipType.Pdf.InstructionsForClippingLocalFiles":"In Chrome, right-click the OneNote icon in the toolbar and choose \"Manage Extension'. Then, for OneNote Web Clipper, check 'Allow access to file URLs.'","WebClipper.ClipType.Pdf.ProgressLabel":"Clipping PDF File","WebClipper.ClipType.Pdf.ProgressLabelDelay":"PDFs can take a little while to upload. Still clipping.”","WebClipper.ClipType.Pdf.IncrementalProgressMessage":"Clipping page {0} of {1}...","WebClipper.ClipType.Pdf.Button.Tooltip":"Take a screenshot of the whole PDF file and save a copy of the attachment.","WebClipper.ClipType.Product.Button":"Product","WebClipper.ClipType.Product.ProgressLabel":"Clipping Product","WebClipper.ClipType.Recipe.Button":"Recipe","WebClipper.ClipType.Recipe.ProgressLabel":"Clipping Recipe","WebClipper.ClipType.Region.Button":"Region","WebClipper.ClipType.Region.Button.Tooltip":"Take a screenshot of the part of the page you'll select.","WebClipper.ClipType.Region.ProgressLabel":"Clipping Region","WebClipper.ClipType.ScreenShot.Button":"Full Page","WebClipper.ClipType.ScreenShot.Button.Tooltip":"Take a screenshot of the whole page, just like you see it.","WebClipper.ClipType.ScreenShot.ProgressLabel":"Clipping Page","WebClipper.ClipType.Selection.Button":"Selection","WebClipper.ClipType.Selection.Button.Tooltip":"Clip the selection you made on the web page.","WebClipper.ClipType.Selection.ProgressLabel":"Clipping Selection","WebClipper.Error.ConflictingExtension":"Your PDF viewer or another extension might be blocking the OneNote Web Clipper. You could temporarily disable the following extension and try clipping again.","WebClipper.Error.CannotClipPage":"Sorry, this type of page can't be clipped.","WebClipper.Error.CookiesDisabled.Line1":"Cookies must be enabled in order for OneNote Web Clipper to work correctly.","WebClipper.Error.CookiesDisabled.Line2":"Please allow third-party cookies in your browser or add the onenote.com and live.com domains as an exception.","WebClipper.Error.CookiesDisabled.Chrome":"Please allow third-party cookies in your browser or add the [*.]onenote.com and [*.]live.com domains as an exception.","WebClipper.Error.CookiesDisabled.Edge":"Please allow third-party cookies in your browser.","WebClipper.Error.CookiesDisabled.Firefox":"Please allow third-party cookies in your browser or add the https://onenote.com and https://live.com domains as an exception.","WebClipper.Error.CorruptedSection":"Your clip can't be saved here because the section is corrupt.","WebClipper.Error.GenericError":"Something went wrong. Please try clipping the page again.","WebClipper.Error.GenericExpiredTokenRefreshError":"Your login session has ended and we were unable to clip the page. Please sign in again.","WebClipper.Error.NoOpError":"Sorry, we can't clip this page right now","WebClipper.Error.NotProvisioned":"Your clip can't be saved because your OneDrive for Business account isn't set up.","WebClipper.Error.OrphanedWebClipperDetected":"Something went wrong. Please refresh this page, and try to clip again.","WebClipper.Error.PasswordProtected":"Your clip can't be saved here because the section is password protected.","WebClipper.Error.QuotaExceeded":"Your clip can't be saved because your OneDrive account has reached its size limit.","WebClipper.Error.ResourceDoesNotExist":"Your clip can't be saved here because the location no longer exists. Please try clipping to another location.","WebClipper.Error.SectionTooLarge":"Your clip can't be saved here because the section has reached its size limit.","WebClipper.Error.SignInUnsuccessful":"We couldn't sign you in. Please try again.","WebClipper.Error.ThirdPartyCookiesDisabled":"For OneNote Web Clipper to work correctly, please allow third-party cookies in your browser, or add the onenote.com domain as an exception.","WebClipper.Error.UserAccountSuspended":"Your clip can't be saved because your Microsoft account has been suspended.","WebClipper.Error.UserAccountSuspendedResetText":"Reset Your Account","WebClipper.Error.UserDoesNotHaveUpdatePermission":"We've added features to the Web Clipper that require new permissions. To accept them, please sign out and sign back in.","WebClipper.Extension.RefreshTab":"Please refresh this page, and try to clip again.","WebClipper.FromCitation":"Clipped from: {0}","WebClipper.Label.Annotation":"Note","WebClipper.Label.AnnotationPlaceholder":"Add a note...","WebClipper.Label.PageTitlePlaceholder":"Add a page title...","WebClipper.Label.AttachPdfFile":"Attach PDF file","WebClipper.Label.AttachPdfFileSubText":"(all pages)","WebClipper.Label.ClipImageToOneNote":"Clip Image to OneNote","WebClipper.Label.ClipLocation":"Location","WebClipper.Label.ClipSelectionToOneNote":"Clip Selection to OneNote","WebClipper.Label.ClipSuccessful":"Clip Successful!","WebClipper.Label.DragAndRelease":"Drag and release to capture a screenshot","WebClipper.Label.RegionSelectionMouseInstruction":"Drag a selection with the mouse, and then release to capture.","WebClipper.Label.RegionSelectionKeyboardInstruction":"To select with the keyboard, press the arrow keys, and then press Enter.","WebClipper.Label.OneNoteClipper":"OneNote Clipper","WebClipper.Label.OneNoteWebClipper":"OneNote Web Clipper","WebClipper.Label.OpenChangeLogFromTooltip":"Check out what's new","WebClipper.Label.Page":"Page","WebClipper.Label.PdfAllPagesRadioButton":"All pages","WebClipper.Label.PdfDistributePagesCheckbox":"New note for each PDF page","WebClipper.Label.PdfOptions":"PDF Options","WebClipper.Label.PdfTooLargeToAttach":"PDF too large to attach","WebClipper.Label.PdfTooltip":"Clip this PDF to OneNote, and read it later","WebClipper.Label.ProceedToWebClipper":"Proceed to the Web Clipper","WebClipper.Label.ProceedToWebClipperFun":"Try it out!","WebClipper.Label.ProductTooltip":"Clip and save product details like this to OneNote","WebClipper.Label.Ratings.Message.End":"Thanks for your feedback!","WebClipper.Label.Ratings.Message.Feedback":"Help us improve","WebClipper.Label.Ratings.Message.Init":"Enjoying the Web Clipper?","WebClipper.Label.Ratings.Message.Rate":"Glad you like it!","WebClipper.Label.Ratings.Button.Feedback":"Provide feedback","WebClipper.Label.Ratings.Button.Init.Positive":"Yes, it's great!","WebClipper.Label.Ratings.Button.Init.Negative":"Not really...","WebClipper.Label.Ratings.Button.NoThanks":"No thanks","WebClipper.Label.Ratings.Button.Rate":"Rate us 5 stars","WebClipper.Label.RecipeTooltip":"Save clutter-free recipes right to OneNote","WebClipper.Label.SignedIn":"Signed in","WebClipper.Label.SignInDescription":"Save anything on the web to OneNote in one click","WebClipper.Label.SignInUnsuccessfulMoreInformation":"More information","WebClipper.Label.SignInUnsuccessfulLessInformation":"Less information","WebClipper.Label.UnsupportedBrowser":"Sorry, your browser version is unsupported.","WebClipper.Label.WebClipper":"Web Clipper","WebClipper.Label.WebClipperWasUpdated":"OneNote Web Clipper has been updated","WebClipper.Label.WebClipperWasUpdatedFun":"OneNote Web Clipper is now better than ever!","WebClipper.Label.WhatsNew":"What's New","WebClipper.Label.VideoTooltip":"Clip this video and watch it anytime in OneNote","WebClipper.Popover.PdfInvalidPageRange":"We couldn't find page '{0}'","WebClipper.Preview.AugmentationModeGenericError":"Something went wrong creating the preview. Try again, or choose a different clipping mode.","WebClipper.Preview.BookmarkModeGenericError":"Something went wrong creating the bookmark. Try again, or choose a different clipping mode.","WebClipper.Preview.FullPageModeGenericError":"A preview isn't available, but you can still clip your page.","WebClipper.Preview.FullPageModeScreenshotDescription":"A full page screenshot of '{0}'","WebClipper.Preview.LoadingMessage":"Loading preview...","WebClipper.Preview.NoFullPageScreenshotFound":"No content found. Try another clipping mode.","WebClipper.Preview.NoContentFound":"No article found. Try another clipping mode.","WebClipper.Preview.UnableToClipLocalFile":"Local files can only be clipped using Region mode.","WebClipper.Preview.RemoveSelectedRegion":"Remove selected region","WebClipper.Preview.SelectedRegion":"Selected region","WebClipper.Preview.Header.AddAnotherRegionButtonLabel":"Add another region","WebClipper.Preview.Header.SansSerifButtonLabel":"Sans-serif","WebClipper.Preview.Header.SerifButtonLabel":"Serif","WebClipper.Preview.Spinner.ClipAnyTimeInFullPage":"In a hurry? You can clip any time in Full Page mode!",
"WebClipper.SectionPicker.DefaultLocation":"Default location","WebClipper.SectionPicker.LoadingNotebooks":"Loading notebooks...","WebClipper.SectionPicker.NoNotebooksFound":"You don't have any notebooks yet, so we'll create your default notebook when you clip this page.","WebClipper.SectionPicker.NotebookLoadFailureMessage":"OneNote couldn't load your notebooks. Please try again later.","WebClipper.SectionPicker.NotebookLoadUnretryableFailureMessage":"OneNote couldn't load your notebooks.","WebClipper.SectionPicker.NotebookLoadUnretryableFailureMessageWithExplanation":"We couldn't load your notebooks because a list limit was exceeded in OneDrive.","WebClipper.SectionPicker.NotebookLoadUnretryableFailureLinkMessage":"Learn more","WebClipper.FontFamily.Regular":"Segoe UI Regular,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Bold":"Segoe UI Bold,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Light":"Segoe UI Light,Segoe WP Light,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Preview.SerifDefault":"Georgia","WebClipper.FontFamily.Preview.SansSerifDefault":"Verdana","WebClipper.FontFamily.Semibold":"Segoe UI Semibold,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontFamily.Semilight":"Segoe UI Semilight,Segoe UI Light,Segoe WP Light,Segoe UI,Segoe,Segoe WP,Helvetica Neue,Roboto,Helvetica,Arial,Tahoma,Verdana,sans-serif","WebClipper.FontSize.Preview.SerifDefault":"16px","WebClipper.FontSize.Preview.SansSerifDefault":"16px"}},{}],78:[function(e,t,n){(function(r,o){(function(){!function(e,r){"object"==typeof n&&"undefined"!=typeof t?t.exports=r():"function"==typeof define&&define.amd?define(r):e.ES6Promise=r()}(this,function(){"use strict";function t(e){return"function"==typeof e||"object"==typeof e&&null!==e}function n(e){return"function"==typeof e}function i(e){Q=e}function a(e){J=e}function s(){return function(){return r.nextTick(f)}}function u(){return"undefined"!=typeof q?function(){q(f)}:p()}function l(){var e=0,t=new X(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function c(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function p(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<$;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}$=0}function g(){try{var t=e,n=t("vertx");return q=n.runOnLoop||n.runOnContext,u()}catch(e){return p()}}function d(e,t){var n=arguments,r=this,o=new this.constructor(m);void 0===o[oe]&&O(o);var i=r._state;return i?!function(){var e=n[i-1];J(function(){return F(i,o,e,r._result)})}():U(r,o,e,t),o}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(m);return T(n,e),n}function m(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function y(){return new TypeError("A promises callback cannot return that same promise.")}function b(e){try{return e.then}catch(e){return ue.error=e,ue}}function C(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function w(e,t,n){J(function(e){var r=!1,o=C(n,t,function(n){r||(r=!0,t!==n?T(e,n):_(e,n))},function(t){r||(r=!0,P(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&o&&(r=!0,P(e,o))},e)}function S(e,t){t._state===ae?_(e,t._result):t._state===se?P(e,t._result):U(t,void 0,function(t){return T(e,t)},function(t){return P(e,t)})}function I(e,t,r){t.constructor===e.constructor&&r===d&&t.constructor.resolve===h?S(e,t):r===ue?P(e,ue.error):void 0===r?_(e,t):n(r)?w(e,t,r):_(e,t)}function T(e,n){e===n?P(e,v()):t(n)?I(e,n,b(n)):_(e,n)}function E(e){e._onerror&&e._onerror(e._result),k(e)}function _(e,t){e._state===ie&&(e._result=t,e._state=ae,0!==e._subscribers.length&&J(k,e))}function P(e,t){e._state===ie&&(e._state=se,e._result=t,J(E,e))}function U(e,t,n,r){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+ae]=n,o[i+se]=r,0===i&&e._state&&J(k,e)}function k(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var r=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)r=t[a],o=t[a+n],r?F(n,r,o,i):o(i);e._subscribers.length=0}}function x(){this.error=null}function L(e,t){try{return e(t)}catch(e){return le.error=e,le}}function F(e,t,r,o){var i=n(r),a=void 0,s=void 0,u=void 0,l=void 0;if(i){if(a=L(r,o),a===le?(l=!0,s=a.error,a=null):u=!0,t===a)return void P(t,y())}else a=o,u=!0;t._state!==ie||(i&&u?T(t,a):l?P(t,s):e===ae?_(t,a):e===se&&P(t,a))}function A(e,t){try{t(function(t){T(e,t)},function(t){P(e,t)})}catch(t){P(e,t)}}function N(){return ce++}function O(e){e[oe]=ce++,e._state=void 0,e._result=void 0,e._subscribers=[]}function R(e,t){this._instanceConstructor=e,this.promise=new e(m),this.promise[oe]||O(this.promise),G(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?_(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&_(this.promise,this._result))):P(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function W(e){return new R(this,e).promise}function B(e){var t=this;return new t(G(e)?function(n,r){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(n,r)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function V(e){var t=this,n=new t(m);return P(n,e),n}function j(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function M(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function H(e){this[oe]=N(),this._result=this._state=void 0,this._subscribers=[],m!==e&&("function"!=typeof e&&j(),this instanceof H?A(this,e):M())}function z(){var e=void 0;if("undefined"!=typeof o)e=o;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=H}var K=void 0;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var G=K,$=0,q=void 0,Q=void 0,J=function(e,t){ne[$]=e,ne[$+1]=t,$+=2,2===$&&(Q?Q(f):re())},Y="undefined"!=typeof window?window:void 0,Z=Y||{},X=Z.MutationObserver||Z.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof r&&"[object process]"==={}.toString.call(r),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),re=void 0;re=ee?s():X?l():te?c():void 0===Y&&"function"==typeof e?g():p();var oe=Math.random().toString(36).substring(16),ie=void 0,ae=1,se=2,ue=new x,le=new x,ce=0;return R.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ie&&n<e;n++)this._eachEntry(t[n],n)},R.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=b(e);if(o===d&&e._state!==ie)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(n===H){var i=new n(m);I(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},R.prototype._settledAt=function(e,t,n){var r=this.promise;r._state===ie&&(this._remaining--,e===se?P(r,n):this._result[t]=n),0===this._remaining&&_(r,this._result)},R.prototype._willSettleAt=function(e,t){var n=this;U(e,void 0,function(e){return n._settledAt(ae,t,e)},function(e){return n._settledAt(se,t,e)})},H.all=W,H.race=B,H.resolve=h,H.reject=V,H._setScheduler=i,H._setAsap=a,H._asap=J,H.prototype={constructor:H,then:d,catch:function(e){return this.then(null,e)}},H.polyfill=z,H.Promise=H,H})}).call(this)}).call(this,e("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:80}],79:[function(e,t,n){(function(e){(function(){(function(){function r(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function o(e,t,n,r){for(var o=-1,i=null==e?0:e.length;++o<i;){var a=e[o];t(r,a,n(a),e)}return r}function i(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}function a(e,t){for(var n=null==e?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}function s(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function u(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i}function l(e,t){var n=null==e?0:e.length;return!!n&&C(e,t,0)>-1}function c(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}function p(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}function f(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}function g(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}function d(e,t,n,r){var o=null==e?0:e.length;for(r&&o&&(n=e[--o]);o--;)n=t(n,e[o],o,e);return n}function h(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function m(e){return e.split("")}function v(e){return e.match(Vt)||[]}function y(e,t,n){var r;return n(e,function(e,n,o){if(t(e,n,o))return r=n,!1}),r}function b(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function C(e,t,n){return t===t?q(e,t,n):b(e,S,n)}function w(e,t,n,r){for(var o=n-1,i=e.length;++o<i;)if(r(e[o],t))return o;return-1}function S(e){return e!==e}function I(e,t){var n=null==e?0:e.length;return n?U(e,t)/n:Re}function T(e){return function(t){return null==t?ne:t[e]}}function E(e){return function(t){return null==e?ne:e[t]}}function _(e,t,n,r,o){return o(e,function(e,o,i){n=r?(r=!1,e):t(n,e,o,i)}),n}function P(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function U(e,t){for(var n,r=-1,o=e.length;++r<o;){var i=t(e[r]);i!==ne&&(n=n===ne?i:n+i)}return n}function k(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function x(e,t){return p(t,function(t){return[t,e[t]]})}function L(e){return e?e.slice(0,Z(e)+1).replace(Ot,""):e}function F(e){return function(t){return e(t)}}function A(e,t){return p(t,function(t){return e[t]})}function N(e,t){return e.has(t)}function O(e,t){for(var n=-1,r=e.length;++n<r&&C(t,e[n],0)>-1;);return n}function R(e,t){for(var n=e.length;n--&&C(t,e[n],0)>-1;);return n}function D(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}function W(e){return"\\"+er[e]}function B(e,t){return null==e?ne:e[t]}function V(e){return Kn.test(e)}function j(e){return Gn.test(e)}function M(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function H(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function z(e,t){return function(n){return e(t(n))}}function K(e,t){for(var n=-1,r=e.length,o=0,i=[];++n<r;){var a=e[n];a!==t&&a!==ce||(e[n]=ce,i[o++]=n)}return i}function G(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function $(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function q(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}function Q(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}function J(e){return V(e)?X(e):vr(e)}function Y(e){return V(e)?ee(e):m(e)}function Z(e){for(var t=e.length;t--&&Rt.test(e.charAt(t)););return t}function X(e){for(var t=Hn.lastIndex=0;Hn.test(e);)++t;return t}function ee(e){return e.match(Hn)||[]}function te(e){return e.match(zn)||[]}var ne,re="4.17.21",oe=200,ie="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",ae="Expected a function",se="Invalid `variable` option passed into `_.template`",ue="__lodash_hash_undefined__",le=500,ce="__lodash_placeholder__",pe=1,fe=2,ge=4,de=1,he=2,me=1,ve=2,ye=4,be=8,Ce=16,we=32,Se=64,Ie=128,Te=256,Ee=512,_e=30,Pe="...",Ue=800,ke=16,xe=1,Le=2,Fe=3,Ae=1/0,Ne=9007199254740991,Oe=1.7976931348623157e308,Re=NaN,De=4294967295,We=De-1,Be=De>>>1,Ve=[["ary",Ie],["bind",me],["bindKey",ve],["curry",be],["curryRight",Ce],["flip",Ee],["partial",we],["partialRight",Se],["rearg",Te]],je="[object Arguments]",Me="[object Array]",He="[object AsyncFunction]",ze="[object Boolean]",Ke="[object Date]",Ge="[object DOMException]",$e="[object Error]",qe="[object Function]",Qe="[object GeneratorFunction]",Je="[object Map]",Ye="[object Number]",Ze="[object Null]",Xe="[object Object]",et="[object Promise]",tt="[object Proxy]",nt="[object RegExp]",rt="[object Set]",ot="[object String]",it="[object Symbol]",at="[object Undefined]",st="[object WeakMap]",ut="[object WeakSet]",lt="[object ArrayBuffer]",ct="[object DataView]",pt="[object Float32Array]",ft="[object Float64Array]",gt="[object Int8Array]",dt="[object Int16Array]",ht="[object Int32Array]",mt="[object Uint8Array]",vt="[object Uint8ClampedArray]",yt="[object Uint16Array]",bt="[object Uint32Array]",Ct=/\b__p \+= '';/g,wt=/\b(__p \+=) '' \+/g,St=/(__e\(.*?\)|\b__t\)) \+\n'';/g,It=/&(?:amp|lt|gt|quot|#39);/g,Tt=/[&<>"']/g,Et=RegExp(It.source),_t=RegExp(Tt.source),Pt=/<%-([\s\S]+?)%>/g,Ut=/<%([\s\S]+?)%>/g,kt=/<%=([\s\S]+?)%>/g,xt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Lt=/^\w*$/,Ft=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,At=/[\\^$.*+?()[\]{}|]/g,Nt=RegExp(At.source),Ot=/^\s+/,Rt=/\s/,Dt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Wt=/\{\n\/\* \[wrapped with (.+)\] \*/,Bt=/,? & /,Vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jt=/[()=,{}\[\]\/\s]/,Mt=/\\(\\)?/g,Ht=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zt=/\w*$/,Kt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,$t=/^\[object .+?Constructor\]$/,qt=/^0o[0-7]+$/i,Qt=/^(?:0|[1-9]\d*)$/,Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Yt=/($^)/,Zt=/['\n\r\u2028\u2029\\]/g,Xt="\\ud800-\\udfff",en="\\u0300-\\u036f",tn="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",rn=en+tn+nn,on="\\u2700-\\u27bf",an="a-z\\xdf-\\xf6\\xf8-\\xff",sn="\\xac\\xb1\\xd7\\xf7",un="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ln="\\u2000-\\u206f",cn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pn="A-Z\\xc0-\\xd6\\xd8-\\xde",fn="\\ufe0e\\ufe0f",gn=sn+un+ln+cn,dn="['’]",hn="["+Xt+"]",mn="["+gn+"]",vn="["+rn+"]",yn="\\d+",bn="["+on+"]",Cn="["+an+"]",wn="[^"+Xt+gn+yn+on+an+pn+"]",Sn="\\ud83c[\\udffb-\\udfff]",In="(?:"+vn+"|"+Sn+")",Tn="[^"+Xt+"]",En="(?:\\ud83c[\\udde6-\\uddff]){2}",_n="[\\ud800-\\udbff][\\udc00-\\udfff]",Pn="["+pn+"]",Un="\\u200d",kn="(?:"+Cn+"|"+wn+")",xn="(?:"+Pn+"|"+wn+")",Ln="(?:"+dn+"(?:d|ll|m|re|s|t|ve))?",Fn="(?:"+dn+"(?:D|LL|M|RE|S|T|VE))?",An=In+"?",Nn="["+fn+"]?",On="(?:"+Un+"(?:"+[Tn,En,_n].join("|")+")"+Nn+An+")*",Rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Wn=Nn+An+On,Bn="(?:"+[bn,En,_n].join("|")+")"+Wn,Vn="(?:"+[Tn+vn+"?",vn,En,_n,hn].join("|")+")",jn=RegExp(dn,"g"),Mn=RegExp(vn,"g"),Hn=RegExp(Sn+"(?="+Sn+")|"+Vn+Wn,"g"),zn=RegExp([Pn+"?"+Cn+"+"+Ln+"(?="+[mn,Pn,"$"].join("|")+")",xn+"+"+Fn+"(?="+[mn,Pn+kn,"$"].join("|")+")",Pn+"?"+kn+"+"+Ln,Pn+"+"+Fn,Dn,Rn,yn,Bn].join("|"),"g"),Kn=RegExp("["+Un+Xt+rn+fn+"]"),Gn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$n=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qn=-1,Qn={};Qn[pt]=Qn[ft]=Qn[gt]=Qn[dt]=Qn[ht]=Qn[mt]=Qn[vt]=Qn[yt]=Qn[bt]=!0,Qn[je]=Qn[Me]=Qn[lt]=Qn[ze]=Qn[ct]=Qn[Ke]=Qn[$e]=Qn[qe]=Qn[Je]=Qn[Ye]=Qn[Xe]=Qn[nt]=Qn[rt]=Qn[ot]=Qn[st]=!1;var Jn={};Jn[je]=Jn[Me]=Jn[lt]=Jn[ct]=Jn[ze]=Jn[Ke]=Jn[pt]=Jn[ft]=Jn[gt]=Jn[dt]=Jn[ht]=Jn[Je]=Jn[Ye]=Jn[Xe]=Jn[nt]=Jn[rt]=Jn[ot]=Jn[it]=Jn[mt]=Jn[vt]=Jn[yt]=Jn[bt]=!0,Jn[$e]=Jn[qe]=Jn[st]=!1;var Yn={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},Zn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Xn={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},er={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},tr=parseFloat,nr=parseInt,rr="object"==typeof e&&e&&e.Object===Object&&e,or="object"==typeof self&&self&&self.Object===Object&&self,ir=rr||or||Function("return this")(),ar="object"==typeof n&&n&&!n.nodeType&&n,sr=ar&&"object"==typeof t&&t&&!t.nodeType&&t,ur=sr&&sr.exports===ar,lr=ur&&rr.process,cr=function(){try{var e=sr&&sr.require&&sr.require("util").types;return e?e:lr&&lr.binding&&lr.binding("util")}catch(e){}}(),pr=cr&&cr.isArrayBuffer,fr=cr&&cr.isDate,gr=cr&&cr.isMap,dr=cr&&cr.isRegExp,hr=cr&&cr.isSet,mr=cr&&cr.isTypedArray,vr=T("length"),yr=E(Yn),br=E(Zn),Cr=E(Xn),wr=function e(t){function n(e){if(su(e)&&!bf(e)&&!(e instanceof q)){if(e instanceof E)return e;if(yc.call(e,"__wrapped__"))return oa(e)}return new E(e)}function m(){}function E(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=ne}function q(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=De,this.__views__=[]}function X(){var e=new q(this.__wrapped__);return e.__actions__=Wo(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Wo(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Wo(this.__views__),e}function ee(){if(this.__filtered__){var e=new q(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function Rt(){var e=this.__wrapped__.value(),t=this.__dir__,n=bf(e),r=t<0,o=n?e.length:0,i=Pi(0,o,this.__views__),a=i.start,s=i.end,u=s-a,l=r?s:a-1,c=this.__iteratees__,p=c.length,f=0,g=qc(u,this.__takeCount__);if(!n||!r&&o==u&&g==u)return wo(e,this.__actions__);var d=[];e:for(;u--&&f<g;){l+=t;for(var h=-1,m=e[l];++h<p;){var v=c[h],y=v.iteratee,b=v.type,C=y(m);if(b==Le)m=C;else if(!C){if(b==xe)continue e;break e}}d[f++]=m}return d}function Vt(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Xt(){this.__data__=op?op(null):{},this.size=0}function en(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function tn(e){var t=this.__data__;if(op){var n=t[e];return n===ue?ne:n}return yc.call(t,e)?t[e]:ne}function nn(e){var t=this.__data__;return op?t[e]!==ne:yc.call(t,e)}function rn(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=op&&t===ne?ue:t,this}function on(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function an(){this.__data__=[],this.size=0}function sn(e){var t=this.__data__,n=Fn(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Fc.call(t,n,1),--this.size,!0}function un(e){var t=this.__data__,n=Fn(t,e);return n<0?ne:t[n][1]}function ln(e){return Fn(this.__data__,e)>-1}function cn(e,t){var n=this.__data__,r=Fn(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function pn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function fn(){this.size=0,this.__data__={hash:new Vt,map:new(ep||on),string:new Vt}}function gn(e){var t=Ii(this,e).delete(e);return this.size-=t?1:0,t}function dn(e){return Ii(this,e).get(e)}function hn(e){return Ii(this,e).has(e)}function mn(e,t){var n=Ii(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function vn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new pn;++t<n;)this.add(e[t])}function yn(e){return this.__data__.set(e,ue),this}function bn(e){return this.__data__.has(e)}function Cn(e){var t=this.__data__=new on(e);this.size=t.size}function wn(){this.__data__=new on,this.size=0}function Sn(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function In(e){return this.__data__.get(e)}function Tn(e){return this.__data__.has(e)}function En(e,t){var n=this.__data__;if(n instanceof on){var r=n.__data__;if(!ep||r.length<oe-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pn(r)}return n.set(e,t),this.size=n.size,this}function _n(e,t){var n=bf(e),r=!n&&yf(e),o=!n&&!r&&wf(e),i=!n&&!r&&!o&&_f(e),a=n||r||o||i,s=a?k(e.length,pc):[],u=s.length;for(var l in e)!t&&!yc.call(e,l)||a&&("length"==l||o&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Oi(l,u))||s.push(l);return s}function Pn(e){var t=e.length;return t?e[to(0,t-1)]:ne}function Un(e,t){return ea(Wo(e),Wn(t,0,e.length))}function kn(e){return ea(Wo(e))}function xn(e,t,n){(n===ne||$s(e[t],n))&&(n!==ne||t in e)||Rn(e,t,n)}function Ln(e,t,n){var r=e[t];yc.call(e,t)&&$s(r,n)&&(n!==ne||t in e)||Rn(e,t,n)}function Fn(e,t){for(var n=e.length;n--;)if($s(e[n][0],t))return n;return-1}function An(e,t,n,r){return mp(e,function(e,o,i){t(r,e,n(e),i)}),r}function Nn(e,t){return e&&Bo(t,Mu(t),e)}function On(e,t){return e&&Bo(t,Hu(t),e)}function Rn(e,t,n){"__proto__"==t&&Rc?Rc(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Dn(e,t){for(var n=-1,r=t.length,o=oc(r),i=null==e;++n<r;)o[n]=i?ne:Bu(e,t[n]);return o}function Wn(e,t,n){return e===e&&(n!==ne&&(e=e<=n?e:n),t!==ne&&(e=e>=t?e:t)),e}function Bn(e,t,n,r,o,a){var s,u=t&pe,l=t&fe,c=t&ge;if(n&&(s=o?n(e,r,o,a):n(e)),s!==ne)return s;if(!au(e))return e;var p=bf(e);if(p){if(s=xi(e),!u)return Wo(e,s)}else{var f=Up(e),g=f==qe||f==Qe;if(wf(e))return Uo(e,u);if(f==Xe||f==je||g&&!o){if(s=l||g?{}:Li(e),!u)return l?jo(e,On(s,e)):Vo(e,Nn(s,e))}else{if(!Jn[f])return o?e:{};s=Fi(e,f,u)}}a||(a=new Cn);var d=a.get(e);if(d)return d;a.set(e,s),Ef(e)?e.forEach(function(r){s.add(Bn(r,t,n,r,e,a))}):If(e)&&e.forEach(function(r,o){s.set(o,Bn(r,t,n,o,e,a))});var h=c?l?bi:yi:l?Hu:Mu,m=p?ne:h(e);return i(m||e,function(r,o){m&&(o=r,r=e[o]),Ln(s,o,Bn(r,t,n,o,e,a))}),s}function Vn(e){var t=Mu(e);return function(n){return Hn(n,e,t)}}function Hn(e,t,n){var r=n.length;if(null==e)return!r;for(e=lc(e);r--;){var o=n[r],i=t[o],a=e[o];if(a===ne&&!(o in e)||!i(a))return!1}return!0}function zn(e,t,n){if("function"!=typeof e)throw new fc(ae);return Lp(function(){e.apply(ne,n)},t)}function Kn(e,t,n,r){var o=-1,i=l,a=!0,s=e.length,u=[],f=t.length;if(!s)return u;n&&(t=p(t,F(n))),r?(i=c,a=!1):t.length>=oe&&(i=N,a=!1,t=new vn(t));e:for(;++o<s;){var g=e[o],d=null==n?g:n(g);if(g=r||0!==g?g:0,a&&d===d){for(var h=f;h--;)if(t[h]===d)continue e;u.push(g)}else i(t,d,r)||u.push(g)}return u}function Gn(e,t){var n=!0;return mp(e,function(e,r,o){return n=!!t(e,r,o)}),n}function Yn(e,t,n){for(var r=-1,o=e.length;++r<o;){var i=e[r],a=t(i);if(null!=a&&(s===ne?a===a&&!yu(a):n(a,s)))var s=a,u=i}return u}function Zn(e,t,n,r){var o=e.length;for(n=Tu(n),n<0&&(n=-n>o?0:o+n),r=r===ne||r>o?o:Tu(r),r<0&&(r+=o),r=n>r?0:Eu(r);n<r;)e[n++]=t;return e}function Xn(e,t){var n=[];return mp(e,function(e,r,o){t(e,r,o)&&n.push(e)}),n}function er(e,t,n,r,o){var i=-1,a=e.length;for(n||(n=Ni),o||(o=[]);++i<a;){var s=e[i];t>0&&n(s)?t>1?er(s,t-1,n,r,o):f(o,s):r||(o[o.length]=s)}return o}function rr(e,t){return e&&yp(e,t,Mu)}function or(e,t){return e&&bp(e,t,Mu)}function ar(e,t){return u(t,function(t){return ru(e[t])})}function sr(e,t){t=_o(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[ta(t[n++])];return n&&n==r?e:ne}function lr(e,t,n){var r=t(e);return bf(e)?r:f(r,n(e))}function cr(e){return null==e?e===ne?at:Ze:Oc&&Oc in lc(e)?_i(e):$i(e)}function vr(e,t){return e>t}function wr(e,t){return null!=e&&yc.call(e,t)}function Ir(e,t){return null!=e&&t in lc(e)}function Tr(e,t,n){return e>=qc(t,n)&&e<$c(t,n)}function Er(e,t,n){for(var r=n?c:l,o=e[0].length,i=e.length,a=i,s=oc(i),u=1/0,f=[];a--;){var g=e[a];a&&t&&(g=p(g,F(t))),u=qc(g.length,u),s[a]=!n&&(t||o>=120&&g.length>=120)?new vn(a&&g):ne}g=e[0];var d=-1,h=s[0];e:for(;++d<o&&f.length<u;){var m=g[d],v=t?t(m):m;if(m=n||0!==m?m:0,!(h?N(h,v):r(f,v,n))){for(a=i;--a;){var y=s[a];if(!(y?N(y,v):r(e[a],v,n)))continue e}h&&h.push(v),f.push(m)}}return f}function _r(e,t,n,r){return rr(e,function(e,o,i){t(r,n(e),o,i)}),r}function Pr(e,t,n){t=_o(t,e),e=Qi(e,t);var o=null==e?e:e[ta(Ia(t))];return null==o?ne:r(o,e,n)}function Ur(e){return su(e)&&cr(e)==je}function kr(e){return su(e)&&cr(e)==lt}function xr(e){return su(e)&&cr(e)==Ke}function Lr(e,t,n,r,o){return e===t||(null==e||null==t||!su(e)&&!su(t)?e!==e&&t!==t:Fr(e,t,n,r,Lr,o))}function Fr(e,t,n,r,o,i){var a=bf(e),s=bf(t),u=a?Me:Up(e),l=s?Me:Up(t);u=u==je?Xe:u,l=l==je?Xe:l;var c=u==Xe,p=l==Xe,f=u==l;if(f&&wf(e)){if(!wf(t))return!1;a=!0,c=!1}if(f&&!c)return i||(i=new Cn),a||_f(e)?di(e,t,n,r,o,i):hi(e,t,u,n,r,o,i);if(!(n&de)){var g=c&&yc.call(e,"__wrapped__"),d=p&&yc.call(t,"__wrapped__");if(g||d){var h=g?e.value():e,m=d?t.value():t;return i||(i=new Cn),o(h,m,n,r,i)}}return!!f&&(i||(i=new Cn),mi(e,t,n,r,o,i))}function Ar(e){return su(e)&&Up(e)==Je}function Nr(e,t,n,r){var o=n.length,i=o,a=!r;if(null==e)return!i;for(e=lc(e);o--;){var s=n[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){s=n[o];var u=s[0],l=e[u],c=s[1];if(a&&s[2]){if(l===ne&&!(u in e))return!1}else{var p=new Cn;if(r)var f=r(l,c,u,e,t,p);if(!(f===ne?Lr(c,l,de|he,r,p):f))return!1}}return!0}function Or(e){if(!au(e)||Vi(e))return!1;var t=ru(e)?Tc:$t;return t.test(na(e))}function Rr(e){return su(e)&&cr(e)==nt}function Dr(e){return su(e)&&Up(e)==rt}function Wr(e){return su(e)&&iu(e.length)&&!!Qn[cr(e)]}function Br(e){return"function"==typeof e?e:null==e?Fl:"object"==typeof e?bf(e)?Kr(e[0],e[1]):zr(e):Vl(e)}function Vr(e){if(!ji(e))return Gc(e);var t=[];for(var n in lc(e))yc.call(e,n)&&"constructor"!=n&&t.push(n);return t}function jr(e){if(!au(e))return Gi(e);var t=ji(e),n=[];for(var r in e)("constructor"!=r||!t&&yc.call(e,r))&&n.push(r);return n}function Mr(e,t){return e<t}function Hr(e,t){var n=-1,r=qs(e)?oc(e.length):[];return mp(e,function(e,o,i){r[++n]=t(e,o,i)}),r}function zr(e){var t=Ti(e);return 1==t.length&&t[0][2]?Hi(t[0][0],t[0][1]):function(n){return n===e||Nr(n,e,t)}}function Kr(e,t){return Di(e)&&Mi(t)?Hi(ta(e),t):function(n){var r=Bu(n,e);return r===ne&&r===t?ju(n,e):Lr(t,r,de|he)}}function Gr(e,t,n,r,o){e!==t&&yp(t,function(i,a){if(o||(o=new Cn),au(i))$r(e,t,a,n,Gr,r,o);else{var s=r?r(Yi(e,a),i,a+"",e,t,o):ne;s===ne&&(s=i),xn(e,a,s)}},Hu)}function $r(e,t,n,r,o,i,a){var s=Yi(e,n),u=Yi(t,n),l=a.get(u);if(l)return void xn(e,n,l);var c=i?i(s,u,n+"",e,t,a):ne,p=c===ne;if(p){var f=bf(u),g=!f&&wf(u),d=!f&&!g&&_f(u);c=u,f||g||d?bf(s)?c=s:Qs(s)?c=Wo(s):g?(p=!1,c=Uo(u,!0)):d?(p=!1,c=Ao(u,!0)):c=[]:hu(u)||yf(u)?(c=s,yf(s)?c=Pu(s):au(s)&&!ru(s)||(c=Li(u))):p=!1}p&&(a.set(u,c),o(c,u,r,i,a),a.delete(u)),xn(e,n,c)}function qr(e,t){var n=e.length;if(n)return t+=t<0?n:0,Oi(t,n)?e[t]:ne}function Qr(e,t,n){t=t.length?p(t,function(e){return bf(e)?function(t){return sr(t,1===e.length?e[0]:e)}:e}):[Fl];var r=-1;t=p(t,F(Si()));var o=Hr(e,function(e,n,o){var i=p(t,function(t){return t(e)});return{criteria:i,index:++r,value:e}});return P(o,function(e,t){return Oo(e,t,n)})}function Jr(e,t){return Yr(e,t,function(t,n){return ju(e,n)})}function Yr(e,t,n){for(var r=-1,o=t.length,i={};++r<o;){var a=t[r],s=sr(e,a);n(s,a)&&so(i,_o(a,e),s)}return i}function Zr(e){return function(t){return sr(t,e)}}function Xr(e,t,n,r){var o=r?w:C,i=-1,a=t.length,s=e;for(e===t&&(t=Wo(t)),n&&(s=p(e,F(n)));++i<a;)for(var u=0,l=t[i],c=n?n(l):l;(u=o(s,c,u,r))>-1;)s!==e&&Fc.call(s,u,1),Fc.call(e,u,1);return e}function eo(e,t){for(var n=e?t.length:0,r=n-1;n--;){var o=t[n];if(n==r||o!==i){var i=o;Oi(o)?Fc.call(e,o,1):yo(e,o)}}return e}function to(e,t){return e+jc(Yc()*(t-e+1))}function no(e,t,n,r){for(var o=-1,i=$c(Vc((t-e)/(n||1)),0),a=oc(i);i--;)a[r?i:++o]=e,e+=n;return a}function ro(e,t){var n="";if(!e||t<1||t>Ne)return n;do t%2&&(n+=e),t=jc(t/2),t&&(e+=e);while(t);return n}function oo(e,t){return Fp(qi(e,t,Fl),e+"")}function io(e){return Pn(tl(e))}function ao(e,t){var n=tl(e);return ea(n,Wn(t,0,n.length))}function so(e,t,n,r){if(!au(e))return e;t=_o(t,e);for(var o=-1,i=t.length,a=i-1,s=e;null!=s&&++o<i;){var u=ta(t[o]),l=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return e;if(o!=a){var c=s[u];l=r?r(c,u,s):ne,l===ne&&(l=au(c)?c:Oi(t[o+1])?[]:{})}Ln(s,u,l),s=s[u]}return e}function uo(e){return ea(tl(e))}function lo(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var i=oc(o);++r<o;)i[r]=e[r+t];return i}function co(e,t){var n;return mp(e,function(e,r,o){return n=t(e,r,o),!n}),!!n}function po(e,t,n){var r=0,o=null==e?r:e.length;if("number"==typeof t&&t===t&&o<=Be){for(;r<o;){var i=r+o>>>1,a=e[i];null!==a&&!yu(a)&&(n?a<=t:a<t)?r=i+1:o=i}return o}return fo(e,t,Fl,n)}function fo(e,t,n,r){var o=0,i=null==e?0:e.length;if(0===i)return 0;t=n(t);for(var a=t!==t,s=null===t,u=yu(t),l=t===ne;o<i;){var c=jc((o+i)/2),p=n(e[c]),f=p!==ne,g=null===p,d=p===p,h=yu(p);if(a)var m=r||d;else m=l?d&&(r||f):s?d&&f&&(r||!g):u?d&&f&&!g&&(r||!h):!g&&!h&&(r?p<=t:p<t);m?o=c+1:i=c}return qc(i,We)}function go(e,t){for(var n=-1,r=e.length,o=0,i=[];++n<r;){var a=e[n],s=t?t(a):a;if(!n||!$s(s,u)){var u=s;i[o++]=0===a?0:a}}return i}function ho(e){return"number"==typeof e?e:yu(e)?Re:+e}function mo(e){if("string"==typeof e)return e;if(bf(e))return p(e,mo)+"";if(yu(e))return dp?dp.call(e):"";var t=e+"";return"0"==t&&1/e==-Ae?"-0":t}function vo(e,t,n){var r=-1,o=l,i=e.length,a=!0,s=[],u=s;if(n)a=!1,o=c;else if(i>=oe){var p=t?null:Tp(e);if(p)return G(p);a=!1,o=N,u=new vn}else u=t?[]:s;e:for(;++r<i;){var f=e[r],g=t?t(f):f;if(f=n||0!==f?f:0,a&&g===g){for(var d=u.length;d--;)if(u[d]===g)continue e;t&&u.push(g),s.push(f)}else o(u,g,n)||(u!==s&&u.push(g),s.push(f))}return s}function yo(e,t){return t=_o(t,e),e=Qi(e,t),null==e||delete e[ta(Ia(t))]}function bo(e,t,n,r){return so(e,t,n(sr(e,t)),r)}function Co(e,t,n,r){for(var o=e.length,i=r?o:-1;(r?i--:++i<o)&&t(e[i],i,e););return n?lo(e,r?0:i,r?i+1:o):lo(e,r?i+1:0,r?o:i)}function wo(e,t){var n=e;return n instanceof q&&(n=n.value()),g(t,function(e,t){return t.func.apply(t.thisArg,f([e],t.args))},n)}function So(e,t,n){var r=e.length;if(r<2)return r?vo(e[0]):[];for(var o=-1,i=oc(r);++o<r;)for(var a=e[o],s=-1;++s<r;)s!=o&&(i[o]=Kn(i[o]||a,e[s],t,n));return vo(er(i,1),t,n)}function Io(e,t,n){
for(var r=-1,o=e.length,i=t.length,a={};++r<o;){var s=r<i?t[r]:ne;n(a,e[r],s)}return a}function To(e){return Qs(e)?e:[]}function Eo(e){return"function"==typeof e?e:Fl}function _o(e,t){return bf(e)?e:Di(e,t)?[e]:Ap(ku(e))}function Po(e,t,n){var r=e.length;return n=n===ne?r:n,!t&&n>=r?e:lo(e,t,n)}function Uo(e,t){if(t)return e.slice();var n=e.length,r=Uc?Uc(n):new e.constructor(n);return e.copy(r),r}function ko(e){var t=new e.constructor(e.byteLength);return new Pc(t).set(new Pc(e)),t}function xo(e,t){var n=t?ko(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}function Lo(e){var t=new e.constructor(e.source,zt.exec(e));return t.lastIndex=e.lastIndex,t}function Fo(e){return gp?lc(gp.call(e)):{}}function Ao(e,t){var n=t?ko(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function No(e,t){if(e!==t){var n=e!==ne,r=null===e,o=e===e,i=yu(e),a=t!==ne,s=null===t,u=t===t,l=yu(t);if(!s&&!l&&!i&&e>t||i&&a&&u&&!s&&!l||r&&a&&u||!n&&u||!o)return 1;if(!r&&!i&&!l&&e<t||l&&n&&o&&!r&&!i||s&&n&&o||!a&&o||!u)return-1}return 0}function Oo(e,t,n){for(var r=-1,o=e.criteria,i=t.criteria,a=o.length,s=n.length;++r<a;){var u=No(o[r],i[r]);if(u){if(r>=s)return u;var l=n[r];return u*("desc"==l?-1:1)}}return e.index-t.index}function Ro(e,t,n,r){for(var o=-1,i=e.length,a=n.length,s=-1,u=t.length,l=$c(i-a,0),c=oc(u+l),p=!r;++s<u;)c[s]=t[s];for(;++o<a;)(p||o<i)&&(c[n[o]]=e[o]);for(;l--;)c[s++]=e[o++];return c}function Do(e,t,n,r){for(var o=-1,i=e.length,a=-1,s=n.length,u=-1,l=t.length,c=$c(i-s,0),p=oc(c+l),f=!r;++o<c;)p[o]=e[o];for(var g=o;++u<l;)p[g+u]=t[u];for(;++a<s;)(f||o<i)&&(p[g+n[a]]=e[o++]);return p}function Wo(e,t){var n=-1,r=e.length;for(t||(t=oc(r));++n<r;)t[n]=e[n];return t}function Bo(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var s=t[i],u=r?r(n[s],e[s],s,n,e):ne;u===ne&&(u=e[s]),o?Rn(n,s,u):Ln(n,s,u)}return n}function Vo(e,t){return Bo(e,_p(e),t)}function jo(e,t){return Bo(e,Pp(e),t)}function Mo(e,t){return function(n,r){var i=bf(n)?o:An,a=t?t():{};return i(n,e,Si(r,2),a)}}function Ho(e){return oo(function(t,n){var r=-1,o=n.length,i=o>1?n[o-1]:ne,a=o>2?n[2]:ne;for(i=e.length>3&&"function"==typeof i?(o--,i):ne,a&&Ri(n[0],n[1],a)&&(i=o<3?ne:i,o=1),t=lc(t);++r<o;){var s=n[r];s&&e(t,s,r,i)}return t})}function zo(e,t){return function(n,r){if(null==n)return n;if(!qs(n))return e(n,r);for(var o=n.length,i=t?o:-1,a=lc(n);(t?i--:++i<o)&&r(a[i],i,a)!==!1;);return n}}function Ko(e){return function(t,n,r){for(var o=-1,i=lc(t),a=r(t),s=a.length;s--;){var u=a[e?s:++o];if(n(i[u],u,i)===!1)break}return t}}function Go(e,t,n){function r(){var t=this&&this!==ir&&this instanceof r?i:e;return t.apply(o?n:this,arguments)}var o=t&me,i=Qo(e);return r}function $o(e){return function(t){t=ku(t);var n=V(t)?Y(t):ne,r=n?n[0]:t.charAt(0),o=n?Po(n,1).join(""):t.slice(1);return r[e]()+o}}function qo(e){return function(t){return g(Pl(sl(t).replace(jn,"")),e,"")}}function Qo(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=hp(e.prototype),r=e.apply(n,t);return au(r)?r:n}}function Jo(e,t,n){function o(){for(var a=arguments.length,s=oc(a),u=a,l=wi(o);u--;)s[u]=arguments[u];var c=a<3&&s[0]!==l&&s[a-1]!==l?[]:K(s,l);if(a-=c.length,a<n)return si(e,t,Xo,o.placeholder,ne,s,c,ne,ne,n-a);var p=this&&this!==ir&&this instanceof o?i:e;return r(p,this,s)}var i=Qo(e);return o}function Yo(e){return function(t,n,r){var o=lc(t);if(!qs(t)){var i=Si(n,3);t=Mu(t),n=function(e){return i(o[e],e,o)}}var a=e(t,n,r);return a>-1?o[i?t[a]:a]:ne}}function Zo(e){return vi(function(t){var n=t.length,r=n,o=E.prototype.thru;for(e&&t.reverse();r--;){var i=t[r];if("function"!=typeof i)throw new fc(ae);if(o&&!a&&"wrapper"==Ci(i))var a=new E([],!0)}for(r=a?r:n;++r<n;){i=t[r];var s=Ci(i),u="wrapper"==s?Ep(i):ne;a=u&&Bi(u[0])&&u[1]==(Ie|be|we|Te)&&!u[4].length&&1==u[9]?a[Ci(u[0])].apply(a,u[3]):1==i.length&&Bi(i)?a[s]():a.thru(i)}return function(){var e=arguments,r=e[0];if(a&&1==e.length&&bf(r))return a.plant(r).value();for(var o=0,i=n?t[o].apply(this,e):r;++o<n;)i=t[o].call(this,i);return i}})}function Xo(e,t,n,r,o,i,a,s,u,l){function c(){for(var v=arguments.length,y=oc(v),b=v;b--;)y[b]=arguments[b];if(d)var C=wi(c),w=D(y,C);if(r&&(y=Ro(y,r,o,d)),i&&(y=Do(y,i,a,d)),v-=w,d&&v<l){var S=K(y,C);return si(e,t,Xo,c.placeholder,n,y,S,s,u,l-v)}var I=f?n:this,T=g?I[e]:e;return v=y.length,s?y=Ji(y,s):h&&v>1&&y.reverse(),p&&u<v&&(y.length=u),this&&this!==ir&&this instanceof c&&(T=m||Qo(T)),T.apply(I,y)}var p=t&Ie,f=t&me,g=t&ve,d=t&(be|Ce),h=t&Ee,m=g?ne:Qo(e);return c}function ei(e,t){return function(n,r){return _r(n,e,t(r),{})}}function ti(e,t){return function(n,r){var o;if(n===ne&&r===ne)return t;if(n!==ne&&(o=n),r!==ne){if(o===ne)return r;"string"==typeof n||"string"==typeof r?(n=mo(n),r=mo(r)):(n=ho(n),r=ho(r)),o=e(n,r)}return o}}function ni(e){return vi(function(t){return t=p(t,F(Si())),oo(function(n){var o=this;return e(t,function(e){return r(e,o,n)})})})}function ri(e,t){t=t===ne?" ":mo(t);var n=t.length;if(n<2)return n?ro(t,e):t;var r=ro(t,Vc(e/J(t)));return V(t)?Po(Y(r),0,e).join(""):r.slice(0,e)}function oi(e,t,n,o){function i(){for(var t=-1,u=arguments.length,l=-1,c=o.length,p=oc(c+u),f=this&&this!==ir&&this instanceof i?s:e;++l<c;)p[l]=o[l];for(;u--;)p[l++]=arguments[++t];return r(f,a?n:this,p)}var a=t&me,s=Qo(e);return i}function ii(e){return function(t,n,r){return r&&"number"!=typeof r&&Ri(t,n,r)&&(n=r=ne),t=Iu(t),n===ne?(n=t,t=0):n=Iu(n),r=r===ne?t<n?1:-1:Iu(r),no(t,n,r,e)}}function ai(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=_u(t),n=_u(n)),e(t,n)}}function si(e,t,n,r,o,i,a,s,u,l){var c=t&be,p=c?a:ne,f=c?ne:a,g=c?i:ne,d=c?ne:i;t|=c?we:Se,t&=~(c?Se:we),t&ye||(t&=~(me|ve));var h=[e,t,o,g,p,d,f,s,u,l],m=n.apply(ne,h);return Bi(e)&&xp(m,h),m.placeholder=r,Zi(m,e,t)}function ui(e){var t=uc[e];return function(e,n){if(e=_u(e),n=null==n?0:qc(Tu(n),292),n&&zc(e)){var r=(ku(e)+"e").split("e"),o=t(r[0]+"e"+(+r[1]+n));return r=(ku(o)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}function li(e){return function(t){var n=Up(t);return n==Je?H(t):n==rt?$(t):x(t,e(t))}}function ci(e,t,n,r,o,i,a,s){var u=t&ve;if(!u&&"function"!=typeof e)throw new fc(ae);var l=r?r.length:0;if(l||(t&=~(we|Se),r=o=ne),a=a===ne?a:$c(Tu(a),0),s=s===ne?s:Tu(s),l-=o?o.length:0,t&Se){var c=r,p=o;r=o=ne}var f=u?ne:Ep(e),g=[e,t,n,r,o,c,p,i,a,s];if(f&&Ki(g,f),e=g[0],t=g[1],n=g[2],r=g[3],o=g[4],s=g[9]=g[9]===ne?u?0:e.length:$c(g[9]-l,0),!s&&t&(be|Ce)&&(t&=~(be|Ce)),t&&t!=me)d=t==be||t==Ce?Jo(e,t,s):t!=we&&t!=(me|we)||o.length?Xo.apply(ne,g):oi(e,t,n,r);else var d=Go(e,t,n);var h=f?Cp:xp;return Zi(h(d,g),e,t)}function pi(e,t,n,r){return e===ne||$s(e,hc[n])&&!yc.call(r,n)?t:e}function fi(e,t,n,r,o,i){return au(e)&&au(t)&&(i.set(t,e),Gr(e,t,ne,fi,i),i.delete(t)),e}function gi(e){return hu(e)?ne:e}function di(e,t,n,r,o,i){var a=n&de,s=e.length,u=t.length;if(s!=u&&!(a&&u>s))return!1;var l=i.get(e),c=i.get(t);if(l&&c)return l==t&&c==e;var p=-1,f=!0,g=n&he?new vn:ne;for(i.set(e,t),i.set(t,e);++p<s;){var d=e[p],m=t[p];if(r)var v=a?r(m,d,p,t,e,i):r(d,m,p,e,t,i);if(v!==ne){if(v)continue;f=!1;break}if(g){if(!h(t,function(e,t){if(!N(g,t)&&(d===e||o(d,e,n,r,i)))return g.push(t)})){f=!1;break}}else if(d!==m&&!o(d,m,n,r,i)){f=!1;break}}return i.delete(e),i.delete(t),f}function hi(e,t,n,r,o,i,a){switch(n){case ct:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case lt:return!(e.byteLength!=t.byteLength||!i(new Pc(e),new Pc(t)));case ze:case Ke:case Ye:return $s(+e,+t);case $e:return e.name==t.name&&e.message==t.message;case nt:case ot:return e==t+"";case Je:var s=H;case rt:var u=r&de;if(s||(s=G),e.size!=t.size&&!u)return!1;var l=a.get(e);if(l)return l==t;r|=he,a.set(e,t);var c=di(s(e),s(t),r,o,i,a);return a.delete(e),c;case it:if(gp)return gp.call(e)==gp.call(t)}return!1}function mi(e,t,n,r,o,i){var a=n&de,s=yi(e),u=s.length,l=yi(t),c=l.length;if(u!=c&&!a)return!1;for(var p=u;p--;){var f=s[p];if(!(a?f in t:yc.call(t,f)))return!1}var g=i.get(e),d=i.get(t);if(g&&d)return g==t&&d==e;var h=!0;i.set(e,t),i.set(t,e);for(var m=a;++p<u;){f=s[p];var v=e[f],y=t[f];if(r)var b=a?r(y,v,f,t,e,i):r(v,y,f,e,t,i);if(!(b===ne?v===y||o(v,y,n,r,i):b)){h=!1;break}m||(m="constructor"==f)}if(h&&!m){var C=e.constructor,w=t.constructor;C!=w&&"constructor"in e&&"constructor"in t&&!("function"==typeof C&&C instanceof C&&"function"==typeof w&&w instanceof w)&&(h=!1)}return i.delete(e),i.delete(t),h}function vi(e){return Fp(qi(e,ne,ha),e+"")}function yi(e){return lr(e,Mu,_p)}function bi(e){return lr(e,Hu,Pp)}function Ci(e){for(var t=e.name+"",n=ap[t],r=yc.call(ap,t)?n.length:0;r--;){var o=n[r],i=o.func;if(null==i||i==e)return o.name}return t}function wi(e){var t=yc.call(n,"placeholder")?n:e;return t.placeholder}function Si(){var e=n.iteratee||Al;return e=e===Al?Br:e,arguments.length?e(arguments[0],arguments[1]):e}function Ii(e,t){var n=e.__data__;return Wi(t)?n["string"==typeof t?"string":"hash"]:n.map}function Ti(e){for(var t=Mu(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Mi(o)]}return t}function Ei(e,t){var n=B(e,t);return Or(n)?n:ne}function _i(e){var t=yc.call(e,Oc),n=e[Oc];try{e[Oc]=ne;var r=!0}catch(e){}var o=wc.call(e);return r&&(t?e[Oc]=n:delete e[Oc]),o}function Pi(e,t,n){for(var r=-1,o=n.length;++r<o;){var i=n[r],a=i.size;switch(i.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=qc(t,e+a);break;case"takeRight":e=$c(e,t-a)}}return{start:e,end:t}}function Ui(e){var t=e.match(Wt);return t?t[1].split(Bt):[]}function ki(e,t,n){t=_o(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=ta(t[r]);if(!(i=null!=e&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=null==e?0:e.length,!!o&&iu(o)&&Oi(a,o)&&(bf(e)||yf(e)))}function xi(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&yc.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Li(e){return"function"!=typeof e.constructor||ji(e)?{}:hp(kc(e))}function Fi(e,t,n){var r=e.constructor;switch(t){case lt:return ko(e);case ze:case Ke:return new r(+e);case ct:return xo(e,n);case pt:case ft:case gt:case dt:case ht:case mt:case vt:case yt:case bt:return Ao(e,n);case Je:return new r;case Ye:case ot:return new r(e);case nt:return Lo(e);case rt:return new r;case it:return Fo(e)}}function Ai(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(Dt,"{\n/* [wrapped with "+t+"] */\n")}function Ni(e){return bf(e)||yf(e)||!!(Ac&&e&&e[Ac])}function Oi(e,t){var n=typeof e;return t=null==t?Ne:t,!!t&&("number"==n||"symbol"!=n&&Qt.test(e))&&e>-1&&e%1==0&&e<t}function Ri(e,t,n){if(!au(n))return!1;var r=typeof t;return!!("number"==r?qs(n)&&Oi(t,n.length):"string"==r&&t in n)&&$s(n[t],e)}function Di(e,t){if(bf(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!yu(e))||(Lt.test(e)||!xt.test(e)||null!=t&&e in lc(t))}function Wi(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function Bi(e){var t=Ci(e),r=n[t];if("function"!=typeof r||!(t in q.prototype))return!1;if(e===r)return!0;var o=Ep(r);return!!o&&e===o[0]}function Vi(e){return!!Cc&&Cc in e}function ji(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||hc;return e===n}function Mi(e){return e===e&&!au(e)}function Hi(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==ne||e in lc(n)))}}function zi(e){var t=As(e,function(e){return n.size===le&&n.clear(),e}),n=t.cache;return t}function Ki(e,t){var n=e[1],r=t[1],o=n|r,i=o<(me|ve|Ie),a=r==Ie&&n==be||r==Ie&&n==Te&&e[7].length<=t[8]||r==(Ie|Te)&&t[7].length<=t[8]&&n==be;if(!i&&!a)return e;r&me&&(e[2]=t[2],o|=n&me?0:ye);var s=t[3];if(s){var u=e[3];e[3]=u?Ro(u,s,t[4]):s,e[4]=u?K(e[3],ce):t[4]}return s=t[5],s&&(u=e[5],e[5]=u?Do(u,s,t[6]):s,e[6]=u?K(e[5],ce):t[6]),s=t[7],s&&(e[7]=s),r&Ie&&(e[8]=null==e[8]?t[8]:qc(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=o,e}function Gi(e){var t=[];if(null!=e)for(var n in lc(e))t.push(n);return t}function $i(e){return wc.call(e)}function qi(e,t,n){return t=$c(t===ne?e.length-1:t,0),function(){for(var o=arguments,i=-1,a=$c(o.length-t,0),s=oc(a);++i<a;)s[i]=o[t+i];i=-1;for(var u=oc(t+1);++i<t;)u[i]=o[i];return u[t]=n(s),r(e,this,u)}}function Qi(e,t){return t.length<2?e:sr(e,lo(t,0,-1))}function Ji(e,t){for(var n=e.length,r=qc(t.length,n),o=Wo(e);r--;){var i=t[r];e[r]=Oi(i,n)?o[i]:ne}return e}function Yi(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}function Zi(e,t,n){var r=t+"";return Fp(e,Ai(r,ra(Ui(r),n)))}function Xi(e){var t=0,n=0;return function(){var r=Qc(),o=ke-(r-n);if(n=r,o>0){if(++t>=Ue)return arguments[0]}else t=0;return e.apply(ne,arguments)}}function ea(e,t){var n=-1,r=e.length,o=r-1;for(t=t===ne?r:t;++n<t;){var i=to(n,o),a=e[i];e[i]=e[n],e[n]=a}return e.length=t,e}function ta(e){if("string"==typeof e||yu(e))return e;var t=e+"";return"0"==t&&1/e==-Ae?"-0":t}function na(e){if(null!=e){try{return vc.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function ra(e,t){return i(Ve,function(n){var r="_."+n[0];t&n[1]&&!l(e,r)&&e.push(r)}),e.sort()}function oa(e){if(e instanceof q)return e.clone();var t=new E(e.__wrapped__,e.__chain__);return t.__actions__=Wo(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}function ia(e,t,n){t=(n?Ri(e,t,n):t===ne)?1:$c(Tu(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var o=0,i=0,a=oc(Vc(r/t));o<r;)a[i++]=lo(e,o,o+=t);return a}function aa(e){for(var t=-1,n=null==e?0:e.length,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o}function sa(){var e=arguments.length;if(!e)return[];for(var t=oc(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return f(bf(n)?Wo(n):[n],er(t,1))}function ua(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===ne?1:Tu(t),lo(e,t<0?0:t,r)):[]}function la(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===ne?1:Tu(t),t=r-t,lo(e,0,t<0?0:t)):[]}function ca(e,t){return e&&e.length?Co(e,Si(t,3),!0,!0):[]}function pa(e,t){return e&&e.length?Co(e,Si(t,3),!0):[]}function fa(e,t,n,r){var o=null==e?0:e.length;return o?(n&&"number"!=typeof n&&Ri(e,t,n)&&(n=0,r=o),Zn(e,t,n,r)):[]}function ga(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:Tu(n);return o<0&&(o=$c(r+o,0)),b(e,Si(t,3),o)}function da(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r-1;return n!==ne&&(o=Tu(n),o=n<0?$c(r+o,0):qc(o,r-1)),b(e,Si(t,3),o,!0)}function ha(e){var t=null==e?0:e.length;return t?er(e,1):[]}function ma(e){var t=null==e?0:e.length;return t?er(e,Ae):[]}function va(e,t){var n=null==e?0:e.length;return n?(t=t===ne?1:Tu(t),er(e,t)):[]}function ya(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var o=e[t];r[o[0]]=o[1]}return r}function ba(e){return e&&e.length?e[0]:ne}function Ca(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=null==n?0:Tu(n);return o<0&&(o=$c(r+o,0)),C(e,t,o)}function wa(e){var t=null==e?0:e.length;return t?lo(e,0,-1):[]}function Sa(e,t){return null==e?"":Kc.call(e,t)}function Ia(e){var t=null==e?0:e.length;return t?e[t-1]:ne}function Ta(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var o=r;return n!==ne&&(o=Tu(n),o=o<0?$c(r+o,0):qc(o,r-1)),t===t?Q(e,t,o):b(e,S,o,!0)}function Ea(e,t){return e&&e.length?qr(e,Tu(t)):ne}function _a(e,t){return e&&e.length&&t&&t.length?Xr(e,t):e}function Pa(e,t,n){return e&&e.length&&t&&t.length?Xr(e,t,Si(n,2)):e}function Ua(e,t,n){return e&&e.length&&t&&t.length?Xr(e,t,ne,n):e}function ka(e,t){var n=[];if(!e||!e.length)return n;var r=-1,o=[],i=e.length;for(t=Si(t,3);++r<i;){var a=e[r];t(a,r,e)&&(n.push(a),o.push(r))}return eo(e,o),n}function xa(e){return null==e?e:Zc.call(e)}function La(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&Ri(e,t,n)?(t=0,n=r):(t=null==t?0:Tu(t),n=n===ne?r:Tu(n)),lo(e,t,n)):[]}function Fa(e,t){return po(e,t)}function Aa(e,t,n){return fo(e,t,Si(n,2))}function Na(e,t){var n=null==e?0:e.length;if(n){var r=po(e,t);if(r<n&&$s(e[r],t))return r}return-1}function Oa(e,t){return po(e,t,!0)}function Ra(e,t,n){return fo(e,t,Si(n,2),!0)}function Da(e,t){var n=null==e?0:e.length;if(n){var r=po(e,t,!0)-1;if($s(e[r],t))return r}return-1}function Wa(e){return e&&e.length?go(e):[]}function Ba(e,t){return e&&e.length?go(e,Si(t,2)):[]}function Va(e){var t=null==e?0:e.length;return t?lo(e,1,t):[]}function ja(e,t,n){return e&&e.length?(t=n||t===ne?1:Tu(t),lo(e,0,t<0?0:t)):[]}function Ma(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===ne?1:Tu(t),t=r-t,lo(e,t<0?0:t,r)):[]}function Ha(e,t){return e&&e.length?Co(e,Si(t,3),!1,!0):[]}function za(e,t){return e&&e.length?Co(e,Si(t,3)):[]}function Ka(e){return e&&e.length?vo(e):[]}function Ga(e,t){return e&&e.length?vo(e,Si(t,2)):[]}function $a(e,t){return t="function"==typeof t?t:ne,e&&e.length?vo(e,ne,t):[]}function qa(e){if(!e||!e.length)return[];var t=0;return e=u(e,function(e){if(Qs(e))return t=$c(e.length,t),!0}),k(t,function(t){return p(e,T(t))})}function Qa(e,t){if(!e||!e.length)return[];var n=qa(e);return null==t?n:p(n,function(e){return r(t,ne,e)})}function Ja(e,t){return Io(e||[],t||[],Ln)}function Ya(e,t){return Io(e||[],t||[],so)}function Za(e){var t=n(e);return t.__chain__=!0,t}function Xa(e,t){return t(e),e}function es(e,t){return t(e)}function ts(){return Za(this)}function ns(){return new E(this.value(),this.__chain__)}function rs(){this.__values__===ne&&(this.__values__=Su(this.value()));var e=this.__index__>=this.__values__.length,t=e?ne:this.__values__[this.__index__++];return{done:e,value:t}}function os(){return this}function is(e){for(var t,n=this;n instanceof m;){var r=oa(n);r.__index__=0,r.__values__=ne,t?o.__wrapped__=r:t=r;var o=r;n=n.__wrapped__}return o.__wrapped__=e,t}function as(){var e=this.__wrapped__;if(e instanceof q){var t=e;return this.__actions__.length&&(t=new q(this)),t=t.reverse(),t.__actions__.push({func:es,args:[xa],thisArg:ne}),new E(t,this.__chain__)}return this.thru(xa)}function ss(){return wo(this.__wrapped__,this.__actions__)}function us(e,t,n){var r=bf(e)?s:Gn;return n&&Ri(e,t,n)&&(t=ne),r(e,Si(t,3))}function ls(e,t){var n=bf(e)?u:Xn;return n(e,Si(t,3))}function cs(e,t){return er(ms(e,t),1)}function ps(e,t){return er(ms(e,t),Ae)}function fs(e,t,n){return n=n===ne?1:Tu(n),er(ms(e,t),n)}function gs(e,t){var n=bf(e)?i:mp;return n(e,Si(t,3))}function ds(e,t){var n=bf(e)?a:vp;return n(e,Si(t,3))}function hs(e,t,n,r){e=qs(e)?e:tl(e),n=n&&!r?Tu(n):0;var o=e.length;return n<0&&(n=$c(o+n,0)),vu(e)?n<=o&&e.indexOf(t,n)>-1:!!o&&C(e,t,n)>-1}function ms(e,t){var n=bf(e)?p:Hr;return n(e,Si(t,3))}function vs(e,t,n,r){return null==e?[]:(bf(t)||(t=null==t?[]:[t]),n=r?ne:n,bf(n)||(n=null==n?[]:[n]),Qr(e,t,n))}function ys(e,t,n){var r=bf(e)?g:_,o=arguments.length<3;return r(e,Si(t,4),n,o,mp)}function bs(e,t,n){var r=bf(e)?d:_,o=arguments.length<3;return r(e,Si(t,4),n,o,vp)}function Cs(e,t){var n=bf(e)?u:Xn;return n(e,Ns(Si(t,3)))}function ws(e){var t=bf(e)?Pn:io;return t(e)}function Ss(e,t,n){t=(n?Ri(e,t,n):t===ne)?1:Tu(t);var r=bf(e)?Un:ao;return r(e,t)}function Is(e){var t=bf(e)?kn:uo;return t(e)}function Ts(e){if(null==e)return 0;if(qs(e))return vu(e)?J(e):e.length;var t=Up(e);return t==Je||t==rt?e.size:Vr(e).length}function Es(e,t,n){var r=bf(e)?h:co;return n&&Ri(e,t,n)&&(t=ne),r(e,Si(t,3))}function _s(e,t){if("function"!=typeof t)throw new fc(ae);return e=Tu(e),function(){if(--e<1)return t.apply(this,arguments)}}function Ps(e,t,n){return t=n?ne:t,t=e&&null==t?e.length:t,ci(e,Ie,ne,ne,ne,ne,t)}function Us(e,t){var n;if("function"!=typeof t)throw new fc(ae);return e=Tu(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=ne),n}}function ks(e,t,n){t=n?ne:t;var r=ci(e,be,ne,ne,ne,ne,ne,t);return r.placeholder=ks.placeholder,r}function xs(e,t,n){t=n?ne:t;var r=ci(e,Ce,ne,ne,ne,ne,ne,t);return r.placeholder=xs.placeholder,r}function Ls(e,t,n){function r(t){var n=f,r=g;return f=g=ne,y=t,h=e.apply(r,n)}function o(e){return y=e,m=Lp(s,t),b?r(e):h}function i(e){var n=e-v,r=e-y,o=t-n;return C?qc(o,d-r):o}function a(e){var n=e-v,r=e-y;return v===ne||n>=t||n<0||C&&r>=d}function s(){var e=sf();return a(e)?u(e):void(m=Lp(s,i(e)))}function u(e){return m=ne,w&&f?r(e):(f=g=ne,h)}function l(){m!==ne&&Ip(m),y=0,f=v=g=m=ne}function c(){return m===ne?h:u(sf())}function p(){var e=sf(),n=a(e);if(f=arguments,g=this,v=e,n){if(m===ne)return o(v);if(C)return Ip(m),m=Lp(s,t),r(v)}return m===ne&&(m=Lp(s,t)),h}var f,g,d,h,m,v,y=0,b=!1,C=!1,w=!0;if("function"!=typeof e)throw new fc(ae);return t=_u(t)||0,au(n)&&(b=!!n.leading,C="maxWait"in n,d=C?$c(_u(n.maxWait)||0,t):d,w="trailing"in n?!!n.trailing:w),p.cancel=l,p.flush=c,p}function Fs(e){return ci(e,Ee)}function As(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new fc(ae);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(As.Cache||pn),n}function Ns(e){if("function"!=typeof e)throw new fc(ae);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}function Os(e){return Us(2,e)}function Rs(e,t){if("function"!=typeof e)throw new fc(ae);return t=t===ne?t:Tu(t),oo(e,t)}function Ds(e,t){if("function"!=typeof e)throw new fc(ae);return t=null==t?0:$c(Tu(t),0),oo(function(n){var o=n[t],i=Po(n,0,t);return o&&f(i,o),r(e,this,i)})}function Ws(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new fc(ae);return au(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ls(e,t,{leading:r,maxWait:t,trailing:o})}function Bs(e){return Ps(e,1)}function Vs(e,t){return gf(Eo(t),e)}function js(){if(!arguments.length)return[];var e=arguments[0];return bf(e)?e:[e]}function Ms(e){return Bn(e,ge)}function Hs(e,t){return t="function"==typeof t?t:ne,Bn(e,ge,t)}function zs(e){return Bn(e,pe|ge)}function Ks(e,t){return t="function"==typeof t?t:ne,Bn(e,pe|ge,t)}function Gs(e,t){return null==t||Hn(e,t,Mu(t))}function $s(e,t){return e===t||e!==e&&t!==t}function qs(e){return null!=e&&iu(e.length)&&!ru(e)}function Qs(e){return su(e)&&qs(e)}function Js(e){return e===!0||e===!1||su(e)&&cr(e)==ze}function Ys(e){return su(e)&&1===e.nodeType&&!hu(e)}function Zs(e){if(null==e)return!0;if(qs(e)&&(bf(e)||"string"==typeof e||"function"==typeof e.splice||wf(e)||_f(e)||yf(e)))return!e.length;var t=Up(e);if(t==Je||t==rt)return!e.size;if(ji(e))return!Vr(e).length;for(var n in e)if(yc.call(e,n))return!1;return!0}function Xs(e,t){return Lr(e,t)}function eu(e,t,n){n="function"==typeof n?n:ne;var r=n?n(e,t):ne;return r===ne?Lr(e,t,ne,n):!!r}function tu(e){if(!su(e))return!1;var t=cr(e);return t==$e||t==Ge||"string"==typeof e.message&&"string"==typeof e.name&&!hu(e)}function nu(e){return"number"==typeof e&&zc(e)}function ru(e){if(!au(e))return!1;var t=cr(e);return t==qe||t==Qe||t==He||t==tt}function ou(e){return"number"==typeof e&&e==Tu(e)}function iu(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Ne}function au(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function su(e){return null!=e&&"object"==typeof e}function uu(e,t){return e===t||Nr(e,t,Ti(t))}function lu(e,t,n){return n="function"==typeof n?n:ne,Nr(e,t,Ti(t),n)}function cu(e){return du(e)&&e!=+e}function pu(e){if(kp(e))throw new ac(ie);return Or(e)}function fu(e){return null===e}function gu(e){return null==e}function du(e){return"number"==typeof e||su(e)&&cr(e)==Ye}function hu(e){if(!su(e)||cr(e)!=Xe)return!1;var t=kc(e);if(null===t)return!0;var n=yc.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&vc.call(n)==Sc}function mu(e){return ou(e)&&e>=-Ne&&e<=Ne}function vu(e){return"string"==typeof e||!bf(e)&&su(e)&&cr(e)==ot}function yu(e){return"symbol"==typeof e||su(e)&&cr(e)==it}function bu(e){return e===ne}function Cu(e){return su(e)&&Up(e)==st}function wu(e){return su(e)&&cr(e)==ut}function Su(e){if(!e)return[];if(qs(e))return vu(e)?Y(e):Wo(e);if(Nc&&e[Nc])return M(e[Nc]());var t=Up(e),n=t==Je?H:t==rt?G:tl;return n(e)}function Iu(e){if(!e)return 0===e?e:0;if(e=_u(e),e===Ae||e===-Ae){var t=e<0?-1:1;return t*Oe}return e===e?e:0}function Tu(e){var t=Iu(e),n=t%1;return t===t?n?t-n:t:0}function Eu(e){return e?Wn(Tu(e),0,De):0}function _u(e){if("number"==typeof e)return e;if(yu(e))return Re;if(au(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=au(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=L(e);var n=Gt.test(e);return n||qt.test(e)?nr(e.slice(2),n?2:8):Kt.test(e)?Re:+e}function Pu(e){return Bo(e,Hu(e))}function Uu(e){return e?Wn(Tu(e),-Ne,Ne):0===e?e:0}function ku(e){return null==e?"":mo(e)}function xu(e,t){var n=hp(e);return null==t?n:Nn(n,t)}function Lu(e,t){return y(e,Si(t,3),rr)}function Fu(e,t){return y(e,Si(t,3),or)}function Au(e,t){return null==e?e:yp(e,Si(t,3),Hu)}function Nu(e,t){return null==e?e:bp(e,Si(t,3),Hu)}function Ou(e,t){return e&&rr(e,Si(t,3))}function Ru(e,t){return e&&or(e,Si(t,3))}function Du(e){return null==e?[]:ar(e,Mu(e))}function Wu(e){return null==e?[]:ar(e,Hu(e))}function Bu(e,t,n){var r=null==e?ne:sr(e,t);return r===ne?n:r}function Vu(e,t){return null!=e&&ki(e,t,wr)}function ju(e,t){return null!=e&&ki(e,t,Ir)}function Mu(e){return qs(e)?_n(e):Vr(e)}function Hu(e){return qs(e)?_n(e,!0):jr(e)}function zu(e,t){var n={};return t=Si(t,3),rr(e,function(e,r,o){Rn(n,t(e,r,o),e)}),n}function Ku(e,t){var n={};return t=Si(t,3),rr(e,function(e,r,o){Rn(n,r,t(e,r,o))}),n}function Gu(e,t){return $u(e,Ns(Si(t)))}function $u(e,t){if(null==e)return{};var n=p(bi(e),function(e){return[e]});return t=Si(t),Yr(e,n,function(e,n){return t(e,n[0])})}function qu(e,t,n){t=_o(t,e);var r=-1,o=t.length;for(o||(o=1,e=ne);++r<o;){var i=null==e?ne:e[ta(t[r])];i===ne&&(r=o,i=n),e=ru(i)?i.call(e):i}return e}function Qu(e,t,n){return null==e?e:so(e,t,n)}function Ju(e,t,n,r){return r="function"==typeof r?r:ne,null==e?e:so(e,t,n,r)}function Yu(e,t,n){var r=bf(e),o=r||wf(e)||_f(e);if(t=Si(t,4),null==n){var a=e&&e.constructor;n=o?r?new a:[]:au(e)&&ru(a)?hp(kc(e)):{}}return(o?i:rr)(e,function(e,r,o){return t(n,e,r,o)}),n}function Zu(e,t){return null==e||yo(e,t)}function Xu(e,t,n){return null==e?e:bo(e,t,Eo(n))}function el(e,t,n,r){return r="function"==typeof r?r:ne,null==e?e:bo(e,t,Eo(n),r)}function tl(e){return null==e?[]:A(e,Mu(e))}function nl(e){return null==e?[]:A(e,Hu(e))}function rl(e,t,n){return n===ne&&(n=t,t=ne),n!==ne&&(n=_u(n),n=n===n?n:0),t!==ne&&(t=_u(t),t=t===t?t:0),Wn(_u(e),t,n)}function ol(e,t,n){return t=Iu(t),n===ne?(n=t,t=0):n=Iu(n),e=_u(e),Tr(e,t,n)}function il(e,t,n){if(n&&"boolean"!=typeof n&&Ri(e,t,n)&&(t=n=ne),n===ne&&("boolean"==typeof t?(n=t,t=ne):"boolean"==typeof e&&(n=e,e=ne)),e===ne&&t===ne?(e=0,t=1):(e=Iu(e),t===ne?(t=e,e=0):t=Iu(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var o=Yc();return qc(e+o*(t-e+tr("1e-"+((o+"").length-1))),t)}return to(e,t)}function al(e){return Zf(ku(e).toLowerCase())}function sl(e){return e=ku(e),e&&e.replace(Jt,yr).replace(Mn,"")}function ul(e,t,n){e=ku(e),t=mo(t);var r=e.length;n=n===ne?r:Wn(Tu(n),0,r);var o=n;return n-=t.length,n>=0&&e.slice(n,o)==t}function ll(e){return e=ku(e),e&&_t.test(e)?e.replace(Tt,br):e}function cl(e){return e=ku(e),e&&Nt.test(e)?e.replace(At,"\\$&"):e}function pl(e,t,n){e=ku(e),t=Tu(t);var r=t?J(e):0;if(!t||r>=t)return e;var o=(t-r)/2;return ri(jc(o),n)+e+ri(Vc(o),n)}function fl(e,t,n){e=ku(e),t=Tu(t);var r=t?J(e):0;return t&&r<t?e+ri(t-r,n):e}function gl(e,t,n){e=ku(e),t=Tu(t);var r=t?J(e):0;return t&&r<t?ri(t-r,n)+e:e}function dl(e,t,n){return n||null==t?t=0:t&&(t=+t),Jc(ku(e).replace(Ot,""),t||0)}function hl(e,t,n){return t=(n?Ri(e,t,n):t===ne)?1:Tu(t),ro(ku(e),t)}function ml(){var e=arguments,t=ku(e[0]);return e.length<3?t:t.replace(e[1],e[2])}function vl(e,t,n){return n&&"number"!=typeof n&&Ri(e,t,n)&&(t=n=ne),(n=n===ne?De:n>>>0)?(e=ku(e),e&&("string"==typeof t||null!=t&&!Tf(t))&&(t=mo(t),!t&&V(e))?Po(Y(e),0,n):e.split(t,n)):[]}function yl(e,t,n){return e=ku(e),n=null==n?0:Wn(Tu(n),0,e.length),t=mo(t),e.slice(n,n+t.length)==t}function bl(e,t,r){var o=n.templateSettings;r&&Ri(e,t,r)&&(t=ne),e=ku(e),t=Lf({},t,o,pi);var i,a,s=Lf({},t.imports,o.imports,pi),u=Mu(s),l=A(s,u),c=0,p=t.interpolate||Yt,f="__p += '",g=cc((t.escape||Yt).source+"|"+p.source+"|"+(p===kt?Ht:Yt).source+"|"+(t.evaluate||Yt).source+"|$","g"),d="//# sourceURL="+(yc.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qn+"]")+"\n";e.replace(g,function(t,n,r,o,s,u){return r||(r=o),f+=e.slice(c,u).replace(Zt,W),n&&(i=!0,f+="' +\n__e("+n+") +\n'"),s&&(a=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+t.length,t}),f+="';\n";var h=yc.call(t,"variable")&&t.variable;if(h){if(jt.test(h))throw new ac(se)}else f="with (obj) {\n"+f+"\n}\n";f=(a?f.replace(Ct,""):f).replace(wt,"$1").replace(St,"$1;"),f="function("+(h||"obj")+") {\n"+(h?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Xf(function(){return sc(u,d+"return "+f).apply(ne,l)});if(m.source=f,tu(m))throw m;return m}function Cl(e){return ku(e).toLowerCase()}function wl(e){return ku(e).toUpperCase()}function Sl(e,t,n){if(e=ku(e),e&&(n||t===ne))return L(e);if(!e||!(t=mo(t)))return e;var r=Y(e),o=Y(t),i=O(r,o),a=R(r,o)+1;return Po(r,i,a).join("")}function Il(e,t,n){if(e=ku(e),e&&(n||t===ne))return e.slice(0,Z(e)+1);if(!e||!(t=mo(t)))return e;var r=Y(e),o=R(r,Y(t))+1;return Po(r,0,o).join("")}function Tl(e,t,n){if(e=ku(e),e&&(n||t===ne))return e.replace(Ot,"");if(!e||!(t=mo(t)))return e;var r=Y(e),o=O(r,Y(t));return Po(r,o).join("")}function El(e,t){var n=_e,r=Pe;if(au(t)){var o="separator"in t?t.separator:o;n="length"in t?Tu(t.length):n,r="omission"in t?mo(t.omission):r}e=ku(e);var i=e.length;if(V(e)){var a=Y(e);i=a.length}if(n>=i)return e;var s=n-J(r);if(s<1)return r;var u=a?Po(a,0,s).join(""):e.slice(0,s);if(o===ne)return u+r;if(a&&(s+=u.length-s),Tf(o)){if(e.slice(s).search(o)){var l,c=u;for(o.global||(o=cc(o.source,ku(zt.exec(o))+"g")),o.lastIndex=0;l=o.exec(c);)var p=l.index;u=u.slice(0,p===ne?s:p)}}else if(e.indexOf(mo(o),s)!=s){var f=u.lastIndexOf(o);f>-1&&(u=u.slice(0,f))}return u+r}function _l(e){return e=ku(e),e&&Et.test(e)?e.replace(It,Cr):e}function Pl(e,t,n){return e=ku(e),t=n?ne:t,t===ne?j(e)?te(e):v(e):e.match(t)||[]}function Ul(e){var t=null==e?0:e.length,n=Si();return e=t?p(e,function(e){if("function"!=typeof e[1])throw new fc(ae);return[n(e[0]),e[1]]}):[],oo(function(n){for(var o=-1;++o<t;){var i=e[o];if(r(i[0],this,n))return r(i[1],this,n)}})}function kl(e){return Vn(Bn(e,pe))}function xl(e){return function(){return e}}function Ll(e,t){return null==e||e!==e?t:e}function Fl(e){return e}function Al(e){return Br("function"==typeof e?e:Bn(e,pe))}function Nl(e){return zr(Bn(e,pe))}function Ol(e,t){return Kr(e,Bn(t,pe))}function Rl(e,t,n){var r=Mu(t),o=ar(t,r);null!=n||au(t)&&(o.length||!r.length)||(n=t,t=e,e=this,o=ar(t,Mu(t)));var a=!(au(n)&&"chain"in n&&!n.chain),s=ru(e);return i(o,function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(a||t){var n=e(this.__wrapped__),o=n.__actions__=Wo(this.__actions__);return o.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,f([this.value()],arguments))})}),e}function Dl(){return ir._===this&&(ir._=Ic),this}function Wl(){}function Bl(e){return e=Tu(e),oo(function(t){return qr(t,e)})}function Vl(e){return Di(e)?T(ta(e)):Zr(e)}function jl(e){return function(t){return null==e?ne:sr(e,t)}}function Ml(){return[]}function Hl(){return!1}function zl(){return{}}function Kl(){return""}function Gl(){return!0}function $l(e,t){if(e=Tu(e),e<1||e>Ne)return[];var n=De,r=qc(e,De);t=Si(t),e-=De;for(var o=k(r,t);++n<e;)t(n);
return o}function ql(e){return bf(e)?p(e,ta):yu(e)?[e]:Wo(Ap(ku(e)))}function Ql(e){var t=++bc;return ku(e)+t}function Jl(e){return e&&e.length?Yn(e,Fl,vr):ne}function Yl(e,t){return e&&e.length?Yn(e,Si(t,2),vr):ne}function Zl(e){return I(e,Fl)}function Xl(e,t){return I(e,Si(t,2))}function ec(e){return e&&e.length?Yn(e,Fl,Mr):ne}function tc(e,t){return e&&e.length?Yn(e,Si(t,2),Mr):ne}function nc(e){return e&&e.length?U(e,Fl):0}function rc(e,t){return e&&e.length?U(e,Si(t,2)):0}t=null==t?ir:Sr.defaults(ir.Object(),t,Sr.pick(ir,$n));var oc=t.Array,ic=t.Date,ac=t.Error,sc=t.Function,uc=t.Math,lc=t.Object,cc=t.RegExp,pc=t.String,fc=t.TypeError,gc=oc.prototype,dc=sc.prototype,hc=lc.prototype,mc=t["__core-js_shared__"],vc=dc.toString,yc=hc.hasOwnProperty,bc=0,Cc=function(){var e=/[^.]+$/.exec(mc&&mc.keys&&mc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),wc=hc.toString,Sc=vc.call(lc),Ic=ir._,Tc=cc("^"+vc.call(yc).replace(At,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ec=ur?t.Buffer:ne,_c=t.Symbol,Pc=t.Uint8Array,Uc=Ec?Ec.allocUnsafe:ne,kc=z(lc.getPrototypeOf,lc),xc=lc.create,Lc=hc.propertyIsEnumerable,Fc=gc.splice,Ac=_c?_c.isConcatSpreadable:ne,Nc=_c?_c.iterator:ne,Oc=_c?_c.toStringTag:ne,Rc=function(){try{var e=Ei(lc,"defineProperty");return e({},"",{}),e}catch(e){}}(),Dc=t.clearTimeout!==ir.clearTimeout&&t.clearTimeout,Wc=ic&&ic.now!==ir.Date.now&&ic.now,Bc=t.setTimeout!==ir.setTimeout&&t.setTimeout,Vc=uc.ceil,jc=uc.floor,Mc=lc.getOwnPropertySymbols,Hc=Ec?Ec.isBuffer:ne,zc=t.isFinite,Kc=gc.join,Gc=z(lc.keys,lc),$c=uc.max,qc=uc.min,Qc=ic.now,Jc=t.parseInt,Yc=uc.random,Zc=gc.reverse,Xc=Ei(t,"DataView"),ep=Ei(t,"Map"),tp=Ei(t,"Promise"),np=Ei(t,"Set"),rp=Ei(t,"WeakMap"),op=Ei(lc,"create"),ip=rp&&new rp,ap={},sp=na(Xc),up=na(ep),lp=na(tp),cp=na(np),pp=na(rp),fp=_c?_c.prototype:ne,gp=fp?fp.valueOf:ne,dp=fp?fp.toString:ne,hp=function(){function e(){}return function(t){if(!au(t))return{};if(xc)return xc(t);e.prototype=t;var n=new e;return e.prototype=ne,n}}();n.templateSettings={escape:Pt,evaluate:Ut,interpolate:kt,variable:"",imports:{_:n}},n.prototype=m.prototype,n.prototype.constructor=n,E.prototype=hp(m.prototype),E.prototype.constructor=E,q.prototype=hp(m.prototype),q.prototype.constructor=q,Vt.prototype.clear=Xt,Vt.prototype.delete=en,Vt.prototype.get=tn,Vt.prototype.has=nn,Vt.prototype.set=rn,on.prototype.clear=an,on.prototype.delete=sn,on.prototype.get=un,on.prototype.has=ln,on.prototype.set=cn,pn.prototype.clear=fn,pn.prototype.delete=gn,pn.prototype.get=dn,pn.prototype.has=hn,pn.prototype.set=mn,vn.prototype.add=vn.prototype.push=yn,vn.prototype.has=bn,Cn.prototype.clear=wn,Cn.prototype.delete=Sn,Cn.prototype.get=In,Cn.prototype.has=Tn,Cn.prototype.set=En;var mp=zo(rr),vp=zo(or,!0),yp=Ko(),bp=Ko(!0),Cp=ip?function(e,t){return ip.set(e,t),e}:Fl,wp=Rc?function(e,t){return Rc(e,"toString",{configurable:!0,enumerable:!1,value:xl(t),writable:!0})}:Fl,Sp=oo,Ip=Dc||function(e){return ir.clearTimeout(e)},Tp=np&&1/G(new np([,-0]))[1]==Ae?function(e){return new np(e)}:Wl,Ep=ip?function(e){return ip.get(e)}:Wl,_p=Mc?function(e){return null==e?[]:(e=lc(e),u(Mc(e),function(t){return Lc.call(e,t)}))}:Ml,Pp=Mc?function(e){for(var t=[];e;)f(t,_p(e)),e=kc(e);return t}:Ml,Up=cr;(Xc&&Up(new Xc(new ArrayBuffer(1)))!=ct||ep&&Up(new ep)!=Je||tp&&Up(tp.resolve())!=et||np&&Up(new np)!=rt||rp&&Up(new rp)!=st)&&(Up=function(e){var t=cr(e),n=t==Xe?e.constructor:ne,r=n?na(n):"";if(r)switch(r){case sp:return ct;case up:return Je;case lp:return et;case cp:return rt;case pp:return st}return t});var kp=mc?ru:Hl,xp=Xi(Cp),Lp=Bc||function(e,t){return ir.setTimeout(e,t)},Fp=Xi(wp),Ap=zi(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Ft,function(e,n,r,o){t.push(r?o.replace(Mt,"$1"):n||e)}),t}),Np=oo(function(e,t){return Qs(e)?Kn(e,er(t,1,Qs,!0)):[]}),Op=oo(function(e,t){var n=Ia(t);return Qs(n)&&(n=ne),Qs(e)?Kn(e,er(t,1,Qs,!0),Si(n,2)):[]}),Rp=oo(function(e,t){var n=Ia(t);return Qs(n)&&(n=ne),Qs(e)?Kn(e,er(t,1,Qs,!0),ne,n):[]}),Dp=oo(function(e){var t=p(e,To);return t.length&&t[0]===e[0]?Er(t):[]}),Wp=oo(function(e){var t=Ia(e),n=p(e,To);return t===Ia(n)?t=ne:n.pop(),n.length&&n[0]===e[0]?Er(n,Si(t,2)):[]}),Bp=oo(function(e){var t=Ia(e),n=p(e,To);return t="function"==typeof t?t:ne,t&&n.pop(),n.length&&n[0]===e[0]?Er(n,ne,t):[]}),Vp=oo(_a),jp=vi(function(e,t){var n=null==e?0:e.length,r=Dn(e,t);return eo(e,p(t,function(e){return Oi(e,n)?+e:e}).sort(No)),r}),Mp=oo(function(e){return vo(er(e,1,Qs,!0))}),Hp=oo(function(e){var t=Ia(e);return Qs(t)&&(t=ne),vo(er(e,1,Qs,!0),Si(t,2))}),zp=oo(function(e){var t=Ia(e);return t="function"==typeof t?t:ne,vo(er(e,1,Qs,!0),ne,t)}),Kp=oo(function(e,t){return Qs(e)?Kn(e,t):[]}),Gp=oo(function(e){return So(u(e,Qs))}),$p=oo(function(e){var t=Ia(e);return Qs(t)&&(t=ne),So(u(e,Qs),Si(t,2))}),qp=oo(function(e){var t=Ia(e);return t="function"==typeof t?t:ne,So(u(e,Qs),ne,t)}),Qp=oo(qa),Jp=oo(function(e){var t=e.length,n=t>1?e[t-1]:ne;return n="function"==typeof n?(e.pop(),n):ne,Qa(e,n)}),Yp=vi(function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return Dn(t,e)};return!(t>1||this.__actions__.length)&&r instanceof q&&Oi(n)?(r=r.slice(n,+n+(t?1:0)),r.__actions__.push({func:es,args:[o],thisArg:ne}),new E(r,this.__chain__).thru(function(e){return t&&!e.length&&e.push(ne),e})):this.thru(o)}),Zp=Mo(function(e,t,n){yc.call(e,n)?++e[n]:Rn(e,n,1)}),Xp=Yo(ga),ef=Yo(da),tf=Mo(function(e,t,n){yc.call(e,n)?e[n].push(t):Rn(e,n,[t])}),nf=oo(function(e,t,n){var o=-1,i="function"==typeof t,a=qs(e)?oc(e.length):[];return mp(e,function(e){a[++o]=i?r(t,e,n):Pr(e,t,n)}),a}),rf=Mo(function(e,t,n){Rn(e,n,t)}),of=Mo(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),af=oo(function(e,t){if(null==e)return[];var n=t.length;return n>1&&Ri(e,t[0],t[1])?t=[]:n>2&&Ri(t[0],t[1],t[2])&&(t=[t[0]]),Qr(e,er(t,1),[])}),sf=Wc||function(){return ir.Date.now()},uf=oo(function(e,t,n){var r=me;if(n.length){var o=K(n,wi(uf));r|=we}return ci(e,r,t,n,o)}),lf=oo(function(e,t,n){var r=me|ve;if(n.length){var o=K(n,wi(lf));r|=we}return ci(t,r,e,n,o)}),cf=oo(function(e,t){return zn(e,1,t)}),pf=oo(function(e,t,n){return zn(e,_u(t)||0,n)});As.Cache=pn;var ff=Sp(function(e,t){t=1==t.length&&bf(t[0])?p(t[0],F(Si())):p(er(t,1),F(Si()));var n=t.length;return oo(function(o){for(var i=-1,a=qc(o.length,n);++i<a;)o[i]=t[i].call(this,o[i]);return r(e,this,o)})}),gf=oo(function(e,t){var n=K(t,wi(gf));return ci(e,we,ne,t,n)}),df=oo(function(e,t){var n=K(t,wi(df));return ci(e,Se,ne,t,n)}),hf=vi(function(e,t){return ci(e,Te,ne,ne,ne,t)}),mf=ai(vr),vf=ai(function(e,t){return e>=t}),yf=Ur(function(){return arguments}())?Ur:function(e){return su(e)&&yc.call(e,"callee")&&!Lc.call(e,"callee")},bf=oc.isArray,Cf=pr?F(pr):kr,wf=Hc||Hl,Sf=fr?F(fr):xr,If=gr?F(gr):Ar,Tf=dr?F(dr):Rr,Ef=hr?F(hr):Dr,_f=mr?F(mr):Wr,Pf=ai(Mr),Uf=ai(function(e,t){return e<=t}),kf=Ho(function(e,t){if(ji(t)||qs(t))return void Bo(t,Mu(t),e);for(var n in t)yc.call(t,n)&&Ln(e,n,t[n])}),xf=Ho(function(e,t){Bo(t,Hu(t),e)}),Lf=Ho(function(e,t,n,r){Bo(t,Hu(t),e,r)}),Ff=Ho(function(e,t,n,r){Bo(t,Mu(t),e,r)}),Af=vi(Dn),Nf=oo(function(e,t){e=lc(e);var n=-1,r=t.length,o=r>2?t[2]:ne;for(o&&Ri(t[0],t[1],o)&&(r=1);++n<r;)for(var i=t[n],a=Hu(i),s=-1,u=a.length;++s<u;){var l=a[s],c=e[l];(c===ne||$s(c,hc[l])&&!yc.call(e,l))&&(e[l]=i[l])}return e}),Of=oo(function(e){return e.push(ne,fi),r(Vf,ne,e)}),Rf=ei(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=wc.call(t)),e[t]=n},xl(Fl)),Df=ei(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=wc.call(t)),yc.call(e,t)?e[t].push(n):e[t]=[n]},Si),Wf=oo(Pr),Bf=Ho(function(e,t,n){Gr(e,t,n)}),Vf=Ho(function(e,t,n,r){Gr(e,t,n,r)}),jf=vi(function(e,t){var n={};if(null==e)return n;var r=!1;t=p(t,function(t){return t=_o(t,e),r||(r=t.length>1),t}),Bo(e,bi(e),n),r&&(n=Bn(n,pe|fe|ge,gi));for(var o=t.length;o--;)yo(n,t[o]);return n}),Mf=vi(function(e,t){return null==e?{}:Jr(e,t)}),Hf=li(Mu),zf=li(Hu),Kf=qo(function(e,t,n){return t=t.toLowerCase(),e+(n?al(t):t)}),Gf=qo(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),$f=qo(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),qf=$o("toLowerCase"),Qf=qo(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),Jf=qo(function(e,t,n){return e+(n?" ":"")+Zf(t)}),Yf=qo(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),Zf=$o("toUpperCase"),Xf=oo(function(e,t){try{return r(e,ne,t)}catch(e){return tu(e)?e:new ac(e)}}),eg=vi(function(e,t){return i(t,function(t){t=ta(t),Rn(e,t,uf(e[t],e))}),e}),tg=Zo(),ng=Zo(!0),rg=oo(function(e,t){return function(n){return Pr(n,e,t)}}),og=oo(function(e,t){return function(n){return Pr(e,n,t)}}),ig=ni(p),ag=ni(s),sg=ni(h),ug=ii(),lg=ii(!0),cg=ti(function(e,t){return e+t},0),pg=ui("ceil"),fg=ti(function(e,t){return e/t},1),gg=ui("floor"),dg=ti(function(e,t){return e*t},1),hg=ui("round"),mg=ti(function(e,t){return e-t},0);return n.after=_s,n.ary=Ps,n.assign=kf,n.assignIn=xf,n.assignInWith=Lf,n.assignWith=Ff,n.at=Af,n.before=Us,n.bind=uf,n.bindAll=eg,n.bindKey=lf,n.castArray=js,n.chain=Za,n.chunk=ia,n.compact=aa,n.concat=sa,n.cond=Ul,n.conforms=kl,n.constant=xl,n.countBy=Zp,n.create=xu,n.curry=ks,n.curryRight=xs,n.debounce=Ls,n.defaults=Nf,n.defaultsDeep=Of,n.defer=cf,n.delay=pf,n.difference=Np,n.differenceBy=Op,n.differenceWith=Rp,n.drop=ua,n.dropRight=la,n.dropRightWhile=ca,n.dropWhile=pa,n.fill=fa,n.filter=ls,n.flatMap=cs,n.flatMapDeep=ps,n.flatMapDepth=fs,n.flatten=ha,n.flattenDeep=ma,n.flattenDepth=va,n.flip=Fs,n.flow=tg,n.flowRight=ng,n.fromPairs=ya,n.functions=Du,n.functionsIn=Wu,n.groupBy=tf,n.initial=wa,n.intersection=Dp,n.intersectionBy=Wp,n.intersectionWith=Bp,n.invert=Rf,n.invertBy=Df,n.invokeMap=nf,n.iteratee=Al,n.keyBy=rf,n.keys=Mu,n.keysIn=Hu,n.map=ms,n.mapKeys=zu,n.mapValues=Ku,n.matches=Nl,n.matchesProperty=Ol,n.memoize=As,n.merge=Bf,n.mergeWith=Vf,n.method=rg,n.methodOf=og,n.mixin=Rl,n.negate=Ns,n.nthArg=Bl,n.omit=jf,n.omitBy=Gu,n.once=Os,n.orderBy=vs,n.over=ig,n.overArgs=ff,n.overEvery=ag,n.overSome=sg,n.partial=gf,n.partialRight=df,n.partition=of,n.pick=Mf,n.pickBy=$u,n.property=Vl,n.propertyOf=jl,n.pull=Vp,n.pullAll=_a,n.pullAllBy=Pa,n.pullAllWith=Ua,n.pullAt=jp,n.range=ug,n.rangeRight=lg,n.rearg=hf,n.reject=Cs,n.remove=ka,n.rest=Rs,n.reverse=xa,n.sampleSize=Ss,n.set=Qu,n.setWith=Ju,n.shuffle=Is,n.slice=La,n.sortBy=af,n.sortedUniq=Wa,n.sortedUniqBy=Ba,n.split=vl,n.spread=Ds,n.tail=Va,n.take=ja,n.takeRight=Ma,n.takeRightWhile=Ha,n.takeWhile=za,n.tap=Xa,n.throttle=Ws,n.thru=es,n.toArray=Su,n.toPairs=Hf,n.toPairsIn=zf,n.toPath=ql,n.toPlainObject=Pu,n.transform=Yu,n.unary=Bs,n.union=Mp,n.unionBy=Hp,n.unionWith=zp,n.uniq=Ka,n.uniqBy=Ga,n.uniqWith=$a,n.unset=Zu,n.unzip=qa,n.unzipWith=Qa,n.update=Xu,n.updateWith=el,n.values=tl,n.valuesIn=nl,n.without=Kp,n.words=Pl,n.wrap=Vs,n.xor=Gp,n.xorBy=$p,n.xorWith=qp,n.zip=Qp,n.zipObject=Ja,n.zipObjectDeep=Ya,n.zipWith=Jp,n.entries=Hf,n.entriesIn=zf,n.extend=xf,n.extendWith=Lf,Rl(n,n),n.add=cg,n.attempt=Xf,n.camelCase=Kf,n.capitalize=al,n.ceil=pg,n.clamp=rl,n.clone=Ms,n.cloneDeep=zs,n.cloneDeepWith=Ks,n.cloneWith=Hs,n.conformsTo=Gs,n.deburr=sl,n.defaultTo=Ll,n.divide=fg,n.endsWith=ul,n.eq=$s,n.escape=ll,n.escapeRegExp=cl,n.every=us,n.find=Xp,n.findIndex=ga,n.findKey=Lu,n.findLast=ef,n.findLastIndex=da,n.findLastKey=Fu,n.floor=gg,n.forEach=gs,n.forEachRight=ds,n.forIn=Au,n.forInRight=Nu,n.forOwn=Ou,n.forOwnRight=Ru,n.get=Bu,n.gt=mf,n.gte=vf,n.has=Vu,n.hasIn=ju,n.head=ba,n.identity=Fl,n.includes=hs,n.indexOf=Ca,n.inRange=ol,n.invoke=Wf,n.isArguments=yf,n.isArray=bf,n.isArrayBuffer=Cf,n.isArrayLike=qs,n.isArrayLikeObject=Qs,n.isBoolean=Js,n.isBuffer=wf,n.isDate=Sf,n.isElement=Ys,n.isEmpty=Zs,n.isEqual=Xs,n.isEqualWith=eu,n.isError=tu,n.isFinite=nu,n.isFunction=ru,n.isInteger=ou,n.isLength=iu,n.isMap=If,n.isMatch=uu,n.isMatchWith=lu,n.isNaN=cu,n.isNative=pu,n.isNil=gu,n.isNull=fu,n.isNumber=du,n.isObject=au,n.isObjectLike=su,n.isPlainObject=hu,n.isRegExp=Tf,n.isSafeInteger=mu,n.isSet=Ef,n.isString=vu,n.isSymbol=yu,n.isTypedArray=_f,n.isUndefined=bu,n.isWeakMap=Cu,n.isWeakSet=wu,n.join=Sa,n.kebabCase=Gf,n.last=Ia,n.lastIndexOf=Ta,n.lowerCase=$f,n.lowerFirst=qf,n.lt=Pf,n.lte=Uf,n.max=Jl,n.maxBy=Yl,n.mean=Zl,n.meanBy=Xl,n.min=ec,n.minBy=tc,n.stubArray=Ml,n.stubFalse=Hl,n.stubObject=zl,n.stubString=Kl,n.stubTrue=Gl,n.multiply=dg,n.nth=Ea,n.noConflict=Dl,n.noop=Wl,n.now=sf,n.pad=pl,n.padEnd=fl,n.padStart=gl,n.parseInt=dl,n.random=il,n.reduce=ys,n.reduceRight=bs,n.repeat=hl,n.replace=ml,n.result=qu,n.round=hg,n.runInContext=e,n.sample=ws,n.size=Ts,n.snakeCase=Qf,n.some=Es,n.sortedIndex=Fa,n.sortedIndexBy=Aa,n.sortedIndexOf=Na,n.sortedLastIndex=Oa,n.sortedLastIndexBy=Ra,n.sortedLastIndexOf=Da,n.startCase=Jf,n.startsWith=yl,n.subtract=mg,n.sum=nc,n.sumBy=rc,n.template=bl,n.times=$l,n.toFinite=Iu,n.toInteger=Tu,n.toLength=Eu,n.toLower=Cl,n.toNumber=_u,n.toSafeInteger=Uu,n.toString=ku,n.toUpper=wl,n.trim=Sl,n.trimEnd=Il,n.trimStart=Tl,n.truncate=El,n.unescape=_l,n.uniqueId=Ql,n.upperCase=Yf,n.upperFirst=Zf,n.each=gs,n.eachRight=ds,n.first=ba,Rl(n,function(){var e={};return rr(n,function(t,r){yc.call(n.prototype,r)||(e[r]=t)}),e}(),{chain:!1}),n.VERSION=re,i(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){n[e].placeholder=n}),i(["drop","take"],function(e,t){q.prototype[e]=function(n){n=n===ne?1:$c(Tu(n),0);var r=this.__filtered__&&!t?new q(this):this.clone();return r.__filtered__?r.__takeCount__=qc(n,r.__takeCount__):r.__views__.push({size:qc(n,De),type:e+(r.__dir__<0?"Right":"")}),r},q.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),i(["filter","map","takeWhile"],function(e,t){var n=t+1,r=n==xe||n==Fe;q.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:Si(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),i(["head","last"],function(e,t){var n="take"+(t?"Right":"");q.prototype[e]=function(){return this[n](1).value()[0]}}),i(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");q.prototype[e]=function(){return this.__filtered__?new q(this):this[n](1)}}),q.prototype.compact=function(){return this.filter(Fl)},q.prototype.find=function(e){return this.filter(e).head()},q.prototype.findLast=function(e){return this.reverse().find(e)},q.prototype.invokeMap=oo(function(e,t){return"function"==typeof e?new q(this):this.map(function(n){return Pr(n,e,t)})}),q.prototype.reject=function(e){return this.filter(Ns(Si(e)))},q.prototype.slice=function(e,t){e=Tu(e);var n=this;return n.__filtered__&&(e>0||t<0)?new q(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==ne&&(t=Tu(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},q.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},q.prototype.toArray=function(){return this.take(De)},rr(q.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),o=/^(?:head|last)$/.test(t),i=n[o?"take"+("last"==t?"Right":""):t],a=o||/^find/.test(t);i&&(n.prototype[t]=function(){var t=this.__wrapped__,s=o?[1]:arguments,u=t instanceof q,l=s[0],c=u||bf(t),p=function(e){var t=i.apply(n,f([e],s));return o&&g?t[0]:t};c&&r&&"function"==typeof l&&1!=l.length&&(u=c=!1);var g=this.__chain__,d=!!this.__actions__.length,h=a&&!g,m=u&&!d;if(!a&&c){t=m?t:new q(this);var v=e.apply(t,s);return v.__actions__.push({func:es,args:[p],thisArg:ne}),new E(v,g)}return h&&m?e.apply(this,s):(v=this.thru(p),h?o?v.value()[0]:v.value():v)})}),i(["pop","push","shift","sort","splice","unshift"],function(e){var t=gc[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",o=/^(?:pop|shift)$/.test(e);n.prototype[e]=function(){var e=arguments;if(o&&!this.__chain__){var n=this.value();return t.apply(bf(n)?n:[],e)}return this[r](function(n){return t.apply(bf(n)?n:[],e)})}}),rr(q.prototype,function(e,t){var r=n[t];if(r){var o=r.name+"";yc.call(ap,o)||(ap[o]=[]),ap[o].push({name:t,func:r})}}),ap[Xo(ne,ve).name]=[{name:"wrapper",func:ne}],q.prototype.clone=X,q.prototype.reverse=ee,q.prototype.value=Rt,n.prototype.at=Yp,n.prototype.chain=ts,n.prototype.commit=ns,n.prototype.next=rs,n.prototype.plant=is,n.prototype.reverse=as,n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=ss,n.prototype.first=n.prototype.head,Nc&&(n.prototype[Nc]=os),n},Sr=wr();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(ir._=Sr,define(function(){return Sr})):sr?((sr.exports=Sr)._=Sr,ar._=Sr):ir._=Sr}).call(this)}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],80:[function(e,t,n){function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(p===setTimeout)return setTimeout(e,0);if((p===r||!p)&&setTimeout)return p=setTimeout,setTimeout(e,0);try{return p(e,0)}catch(t){try{return p.call(null,e,0)}catch(t){return p.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&u())}function u(){if(!m){var e=i(s);m=!0;for(var t=h.length;t;){for(d=h,h=[];++v<t;)d&&d[v].run();v=-1,t=h.length}d=null,m=!1,a(e)}}function l(e,t){this.fun=e,this.array=t}function c(){}var p,f,g=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:r}catch(e){p=r}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,v=-1;g.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new l(e,t)),1!==h.length||m||i(u)},l.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={},g.on=c,g.addListener=c,g.once=c,g.off=c,g.removeListener=c,g.removeAllListeners=c,g.emit=c,g.prependListener=c,g.prependOnceListener=c,g.listeners=function(e){return[]},g.binding=function(e){throw new Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(e){throw new Error("process.chdir is not supported")},g.umask=function(){return 0}},{}]},{},[21]);