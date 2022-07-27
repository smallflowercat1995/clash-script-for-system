function dw_scrollObj(t,e,s){var l=document.getElementById(t);this.id=t,dw_scrollObj.col[this.id]=this,this.animString=dw_scrollObj.col[this.id],this.load(e,s),l.addEventListener&&l.addEventListener("DOMMouseScroll",dw_scrollObj.doOnMouseWheel,!1),l.onmousewheel=dw_scrollObj.doOnMouseWheel}function dw_Slidebar(t,e,s,l,i){var r=document.getElementById(t),o=document.getElementById(e);this.barId=t,this.trackId=e,this.axis=s,this.x=l||0,this.y=i||0,dw_Slidebar.col[this.barId]=this,this.bar=r,this.shiftTo(l,i),"v"==s?(this.maxY=o.offsetHeight-r.offsetHeight-i,this.minY=i,this.minX=this.maxX=l):(this.maxX=o.offsetWidth-r.offsetWidth-l,this.minX=l,this.minY=this.maxY=i),this.on_drag_start=this.on_drag=this.on_drag_end=this.on_slide_start=this.on_slide=this.on_slide_end=function(){},dw_Event.add(r,"mousedown",(function(e){dw_Slidebar.prepDrag(e,t)})),dw_Event.add(o,"mousedown",(function(e){dw_Slidebar.prepSlide(e,t)})),o=this.bar=r=null}var dw_Util,dw_Event={add:function(t,e,s,l){t.addEventListener?t.addEventListener(e,s,l||!1):t.attachEvent&&t.attachEvent("on"+e,s)},remove:function(t,e,s,l){t.removeEventListener?t.removeEventListener(e,s,l||!1):t.detachEvent&&t.detachEvent("on"+e,s)},DOMit:function(t){return(t=t||window.event).target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){return t.returnValue=!1}),t.stopPropagation||(t.stopPropagation=function(){t.cancelBubble=!0}),t},getTarget:function(t){return 1!=(t=(t=dw_Event.DOMit(t)).target).nodeType&&(t=t.parentNode),t}};dw_scrollObj.printEnabled=!1,dw_scrollObj.defaultSpeed=dw_scrollObj.prototype.speed=100,dw_scrollObj.defaultSlideDur=dw_scrollObj.prototype.slideDur=500,dw_scrollObj.mousewheelSpeed=20,dw_scrollObj.mousewheelHorizSpeed=60,dw_scrollObj.isSupported=function(){return!!(document.getElementById&&document.getElementsByTagName&&document.addEventListener||document.attachEvent)},dw_scrollObj.col={},dw_scrollObj.prototype.on_load=function(){},dw_scrollObj.prototype.on_scroll=function(t,e,s){},dw_scrollObj.prototype.on_scroll_start=function(){},dw_scrollObj.prototype.on_scroll_stop=function(t,e){},dw_scrollObj.prototype.on_scroll_end=function(t,e){},dw_scrollObj.prototype.on_update=function(){},dw_scrollObj.prototype.on_glidescroll=function(){},dw_scrollObj.prototype.on_glidescroll_start=function(){},dw_scrollObj.prototype.on_glidescroll_stop=function(){},dw_scrollObj.prototype.on_glidescroll_end=function(){},dw_scrollObj.prototype.load=function(t,e){var s,l;this.lyrId&&((l=document.getElementById(this.lyrId)).style.visibility="hidden"),dw_scrollObj.scrdy&&(this.lyr=l=document.getElementById(t),dw_scrollObj.printEnabled||(this.lyr.style.position="absolute"),this.lyrId=t,this.horizId=e||null,s=document.getElementById(this.id),this.x=this.y=0,this.shiftTo(0,0),this.getDims(s,l),l.style.visibility="visible",this.ready=!0,this.on_load())},dw_scrollObj.prototype.shiftTo=function(t,e){this.lyr&&!isNaN(t)&&!isNaN(e)&&(this.x=t,this.y=e,this.lyr.style.left=Math.round(t)+"px",this.lyr.style.top=Math.round(e)+"px")},dw_scrollObj.prototype.getX=function(){return this.x},dw_scrollObj.prototype.getY=function(){return this.y},dw_scrollObj.prototype.getDims=function(t,e){this.wd=this.horizId?document.getElementById(this.horizId).offsetWidth:e.offsetWidth;var s=this.wd-t.offsetWidth,l=e.offsetHeight-t.offsetHeight;this.maxX=s>0?s:0,this.maxY=l>0?l:0},dw_scrollObj.prototype.updateDims=function(){var t=document.getElementById(this.id),e=document.getElementById(this.lyrId);this.getDims(t,e),this.on_update()},dw_scrollObj.prototype.initScrollVals=function(t,e){var s=this;this.ready&&(this.timerId&&(clearInterval(this.timerId),this.timerId=0),this.speed=e||dw_scrollObj.defaultSpeed,this.fx=0==t?-1:180==t?1:0,this.fy=90==t?1:270==t?-1:0,this.endX=90==t||270==t?this.x:0==t?-this.maxX:0,this.endY=0==t||180==t?this.y:90==t?0:-this.maxY,this.lyr=document.getElementById(this.lyrId),this.lastTime=(new Date).getTime(),this.on_scroll_start(this.x,this.y),this.timerId=setInterval((function(){s.animString.scroll()}),10))},dw_scrollObj.prototype.scroll=function(){var t=(new Date).getTime();if((s=(t-this.lastTime)/1e3*this.speed)>0){var e=this.x+this.fx*s,s=this.y+this.fy*s;-1==this.fx&&e>-this.maxX||1==this.fx&&e<0||-1==this.fy&&s>-this.maxY||1==this.fy&&s<0?(this.lastTime=t,this.shiftTo(e,s),this.on_scroll(e,s)):(clearInterval(this.timerId),this.timerId=0,this.shiftTo(this.endX,this.endY),this.on_scroll(this.endX,this.endY),this.on_scroll_end(this.endX,this.endY))}},dw_scrollObj.prototype.ceaseScroll=function(){this.ready&&(this.timerId&&(clearInterval(this.timerId),this.timerId=0),this.on_scroll_stop(this.x,this.y))},dw_scrollObj.prototype.initScrollByVals=function(t,e,s){this.ready&&!this.sliding&&(this.startX=this.x,this.startY=this.y,this.destX=this.destY=this.distX=this.distY=0,e<0?this.distY=this.startY+e>=-this.maxY?e:-(this.startY+this.maxY):e>0&&(this.distY=this.startY+e<=0?e:-this.startY),t<0?this.distX=this.startX+t>=-this.maxX?t:-(this.startX+this.maxX):t>0&&(this.distX=this.startX+t<=0?t:-this.startX),this.destX=this.startX+this.distX,this.destY=this.startY+this.distY,this.glideScrollPrep(this.destX,this.destY,s))},dw_scrollObj.prototype.initScrollToVals=function(t,e,s){this.ready&&!this.sliding&&(this.startX=this.x,this.startY=this.y,this.destX=-Math.max(Math.min(t,this.maxX),0),this.destY=-Math.max(Math.min(e,this.maxY),0),this.distY=this.destY-this.startY,this.distX=this.destX-this.startX,this.glideScrollPrep(this.destX,this.destY,s))},dw_scrollObj.prototype.glideScrollPrep=function(t,e,s){var l=this;this.slideDur="number"==typeof s?s:dw_scrollObj.defaultSlideDur,this.per=Math.PI/(2*this.slideDur),this.sliding=!0,this.lyr=document.getElementById(this.lyrId),this.startTime=(new Date).getTime(),this.timerId=setInterval((function(){l.animString.doGlideScroll()}),10),this.on_glidescroll_start(this.startX,this.startY)},dw_scrollObj.prototype.doGlideScroll=function(){if((e=(new Date).getTime()-this.startTime)<this.slideDur){var t=this.startX+this.distX*Math.sin(this.per*e),e=this.startY+this.distY*Math.sin(this.per*e);this.shiftTo(t,e),this.on_glidescroll(t,e)}else clearInterval(this.timerId),this.timerId=0,this.sliding=!1,this.shiftTo(this.destX,this.destY),this.on_glidescroll(this.destX,this.destY),this.on_glidescroll_stop(this.destX,this.destY),(this.distX&&(0==this.destX||this.destX==-this.maxX)||this.distY&&(0==this.destY||this.destY==-this.maxY))&&this.on_glidescroll_end(this.destX,this.destY)},dw_scrollObj.handleMouseWheel=function(t,e,s){if((e=dw_scrollObj.col[e]).maxY>0||e.maxX>0){var l,i=e.x,r=e.y;e.maxY>0?(l=(s*=dw_scrollObj.mousewheelSpeed)+r,s=i,l=l>=0?0:l>=-e.maxY?l:-e.maxY):(s*=dw_scrollObj.mousewheelHorizSpeed,l=r,s=(s+=i)>=0?0:s>=-e.maxX?s:-e.maxX),e.on_scroll_start(i,r),e.shiftTo(s,l),e.on_scroll(s,l),t.preventDefault&&t.preventDefault()}},dw_scrollObj.doOnMouseWheel=function(t){var e=0;t||(t=window.event),t.wheelDelta?e=t.wheelDelta/120:t.detail&&(e=-t.detail/3),e&&dw_scrollObj.handleMouseWheel(t,this.id,e)},dw_scrollObj.GeckoTableBugFix=function(){},dw_scrollObj.scrdy=!0,dw_Slidebar.col={},dw_Slidebar.current=null,dw_Slidebar.prototype.slideDur=500,dw_Slidebar.prepSlide=function(t,e){var s=dw_Slidebar.col[e];dw_Slidebar.current=s;var l=s.bar=document.getElementById(e);s.timer&&(clearInterval(s.timer),s.timer=0),(t=t||window.event).offX=void 0!==t.layerX?t.layerX:t.offsetX,t.offY=void 0!==t.layerY?t.layerY:t.offsetY,s.startX=parseInt(l.style.left),s.startY=parseInt(l.style.top),"v"==s.axis?(s.destX=s.startX,s.destY=t.offY<s.startY?t.offY:t.offY-l.offsetHeight,s.destY=Math.min(Math.max(s.destY,s.minY),s.maxY)):(s.destX=t.offX<s.startX?t.offX:t.offX-l.offsetWidth,s.destX=Math.min(Math.max(s.destX,s.minX),s.maxX),s.destY=s.startY),s.distX=s.destX-s.startX,s.distY=s.destY-s.startY,s.per=Math.PI/(2*s.slideDur),s.slideStartTime=(new Date).getTime(),s.on_slide_start(s.startX,s.startY),s.timer=setInterval(dw_Slidebar.doSlide,10)},dw_Slidebar.doSlide=function(){var t=dw_Slidebar.current;if((s=(new Date).getTime()-t.slideStartTime)<t.slideDur){var e=t.startX+t.distX*Math.sin(t.per*s),s=t.startY+t.distY*Math.sin(t.per*s);t.shiftTo(e,s),t.on_slide(e,s)}else clearInterval(t.timer),t.shiftTo(t.destX,t.destY),t.on_slide(t.destX,t.destY),t.on_slide_end(t.destX,t.destY),dw_Slidebar.current=null},dw_Slidebar.prepDrag=function(t,e){var s=document.getElementById(e),l=dw_Slidebar.col[e];dw_Slidebar.current=l,l.bar=s,l.timer&&(clearInterval(l.timer),l.timer=0),t=dw_Event.DOMit(t),l.downX=t.clientX,l.downY=t.clientY,l.startX=parseInt(s.style.left),l.startY=parseInt(s.style.top),l.on_drag_start(l.startX,l.startY),dw_Event.add(document,"mousemove",dw_Slidebar.doDrag,!0),dw_Event.add(document,"mouseup",dw_Slidebar.endDrag,!0),t.preventDefault(),t.stopPropagation()},dw_Slidebar.doDrag=function(t){if(dw_Slidebar.current){var e=dw_Slidebar.current,s=(t=dw_Event.DOMit(t),e.startX+t.clientX-e.downX),l=e.startY+t.clientY-e.downY;s=Math.min(Math.max(e.minX,s),e.maxX),l=Math.min(Math.max(e.minY,l),e.maxY);e.shiftTo(s,l),e.on_drag(s,l),t.preventDefault(),t.stopPropagation()}},dw_Slidebar.endDrag=function(){if(dw_Slidebar.current){var t=dw_Slidebar.current,e=t.bar;dw_Event.remove(document,"mousemove",dw_Slidebar.doDrag,!0),dw_Event.remove(document,"mouseup",dw_Slidebar.endDrag,!0),t.on_drag_end(parseInt(e.style.left),parseInt(e.style.top)),dw_Slidebar.current=null}},dw_Slidebar.prototype.shiftTo=function(t,e){this.bar&&!isNaN(t)&&!isNaN(e)&&(this.bar.style.left=Math.round(t)+"px",this.bar.style.top=Math.round(e)+"px")},dw_scrollObj.prototype.setUpScrollbar=function(t,e,s,l,i,r){e=new dw_Slidebar(t,e,s,l,i),"v"==s?this.vBarId=t:this.hBarId=t,e.wndoId=this.id,e.bSizeDragBar=0!=r,e.bSizeDragBar&&dw_Scrollbar_Co.setBarSize(this,e),dw_Scrollbar_Co.setEvents(this,e)},dw_Scrollbar_Co={setBarSize:function(t,e){var s,l=document.getElementById(t.lyrId),i=document.getElementById(t.id),r=document.getElementById(e.trackId);"v"==e.axis?(s=document.getElementById(t.vBarId),r=r.offsetHeight,i=l.offsetHeight>i.offsetHeight?r/(l.offsetHeight/i.offsetHeight):r-2*e.minY,s.style.height=(!isNaN(i)&&i>0?Math.round(i):0)+"px",e.maxY=r-s.offsetHeight-e.minY):"h"==e.axis&&(s=document.getElementById(t.hBarId),l=r.offsetWidth,i=t.wd>i.offsetWidth?l/(t.wd/i.offsetWidth):l-2*e.minX,s.style.width=(!isNaN(i)&&i>0?Math.round(i):0)+"px",e.maxX=l-s.offsetWidth-e.minX)},resetBars:function(t){var e,s;t.vBarId&&(e=dw_Slidebar.col[t.vBarId],(s=document.getElementById(t.vBarId)).style.left=e.minX+"px",s.style.top=e.minY+"px",e.bSizeDragBar&&dw_Scrollbar_Co.setBarSize(t,e)),t.hBarId&&(e=dw_Slidebar.col[t.hBarId],(s=document.getElementById(t.hBarId)).style.left=e.minX+"px",s.style.top=e.minY+"px",e.bSizeDragBar&&dw_Scrollbar_Co.setBarSize(t,e))},setEvents:function(t,e){this.addEvent(t,"on_load",(function(){dw_Scrollbar_Co.resetBars(t)})),this.addEvent(t,"on_scroll_start",(function(){dw_Scrollbar_Co.getBarRefs(t)})),this.addEvent(t,"on_glidescroll_start",(function(){dw_Scrollbar_Co.getBarRefs(t)})),this.addEvent(t,"on_scroll",(function(e,s){dw_Scrollbar_Co.updateScrollbar(t,e,s)})),this.addEvent(t,"on_glidescroll",(function(e,s){dw_Scrollbar_Co.updateScrollbar(t,e,s)})),this.addEvent(t,"on_scroll_stop",(function(e,s){dw_Scrollbar_Co.updateScrollbar(t,e,s)})),this.addEvent(t,"on_glidescroll_stop",(function(e,s){dw_Scrollbar_Co.updateScrollbar(t,e,s)})),this.addEvent(t,"on_scroll_end",(function(e,s){dw_Scrollbar_Co.updateScrollbar(t,e,s)})),this.addEvent(t,"on_glidescroll_end",(function(e,s){dw_Scrollbar_Co.updateScrollbar(t,e,s)})),this.addEvent(t,"on_update",(function(){dw_Scrollbar_Co.getBarRefs(t),dw_Scrollbar_Co.updateScrollValues(t)})),this.addEvent(e,"on_slide_start",(function(){dw_Scrollbar_Co.getWndoLyrRef(e)})),this.addEvent(e,"on_drag_start",(function(){dw_Scrollbar_Co.getWndoLyrRef(e)})),this.addEvent(e,"on_slide",(function(t,s){dw_Scrollbar_Co.updateScrollPosition(e,t,s)})),this.addEvent(e,"on_drag",(function(t,s){dw_Scrollbar_Co.updateScrollPosition(e,t,s)})),this.addEvent(e,"on_slide_end",(function(t,s){dw_Scrollbar_Co.updateScrollPosition(e,t,s)})),this.addEvent(e,"on_drag_end",(function(t,s){dw_Scrollbar_Co.updateScrollPosition(e,t,s)}))},addEvent:function(t,e,s){var l=t[e];t[e]="function"!=typeof l?function(t,e){s(t,e)}:function(t,e){l(t,e),s(t,e)}},updateScrollbar:function(t,e,s){var l;if(t.vBar&&t.maxY){var i=t.vBar;l=-(s*((i.maxY-i.minY)/t.maxY)-i.minY),l=Math.min(Math.max(l,i.minY),i.maxY),i.bar&&(s=parseInt(i.bar.style.left),i.shiftTo(s,l))}t.hBar&&t.maxX&&(s=-(e*(((i=t.hBar).maxX-i.minX)/t.maxX)-i.minX),s=Math.min(Math.max(s,i.minX),i.maxX),i.bar&&(l=parseInt(i.bar.style.top),i.shiftTo(s,l)))},updateScrollPosition:function(t,e,s){var l=t.wndo;"v"==t.axis?(e=l.x,s=-(s-t.minY)*(l.maxY/(t.maxY-t.minY))):(s=l.y,e=-(e-t.minX)*(l.maxX/(t.maxX-t.minX))),l.shiftTo(e,s)},updateScrollValues:function(t){var e=t.getX(),s=t.getY();e<-t.maxX&&(e=-t.maxX),s<-t.maxY&&(s=-t.maxY),t.shiftTo(e,s),this.resetBars(t),this.updateScrollbar(t,e,s)},getBarRefs:function(t){t.vBarId&&!t.vBar&&(t.vBar=dw_Slidebar.col[t.vBarId],t.vBar.bar=document.getElementById(t.vBarId)),t.hBarId&&!t.hBar&&(t.hBar=dw_Slidebar.col[t.hBarId],t.hBar.bar=document.getElementById(t.hBarId))},getWndoLyrRef:function(t){var e;!t.wndo&&(e=t.wndo=dw_scrollObj.col[t.wndoId],t=e)&&!t.lyr&&(t.lyr=document.getElementById(t.lyrId))}},dw_Util||(dw_Util={}),dw_writeStyleSheet=dw_Util.writeStyleSheet,dw_addLinkCSS=dw_Util.addLinkCSS,dw_Util.contained=function(t,e){if(!t)return null;for(;t=t.parentNode;)if(t==e)return!0;return!1},dw_Util.getLayerOffsets=function(t,e){var s=0,l=0;if(dw_Util.contained(t,e))do{s+=t.offsetLeft,l+=t.offsetTop}while((t=t.offsetParent)!=e);return{x:s,y:l}},dw_Util.get_DelimitedClassList=function(t){var e=[],s=0;if(-1!=t.indexOf("_")){var l=/\s+/;if(l.test(t))for(t=t.split(l),l=0;t[l];l++)-1!=t[l].indexOf("_")&&(e[s++]=t[l]);else e[0]=t}return e},dw_Util.inArray=function(t,e){for(var s=0;e[s];s++)if(e[s]==t)return!0;return!1},dw_scrollObj.prototype.setUpLoadLinks=function(t){if(o=document.getElementById(t)){t=this.id;var e,s,l,i,r,o=o.getElementsByTagName("a");l="load_"+t+"_";for(var d=0;o[d];d++){e=dw_Util.get_DelimitedClassList(o[d].className),i=r="";for(var n=0;s=e[n];n++)if(-1!=s.indexOf(l)){e=s.slice(l.length),document.getElementById(e)?(i=e,r=null):-1!=e.indexOf("_")&&(e=e.split("_"),document.getElementById(e[0])&&(i=e[0],r=e[1]));break}i&&dw_Event.add(o[d],"click",function(t,e,s){return function(l){return dw_scrollObj.col[t].load(e,s),l&&l.preventDefault&&l.preventDefault(),!1}}(t,i,r))}}},dw_scrollObj.prototype.setUpScrollControls=function(t,e,s){if(n=document.getElementById(t)){var l=this.id;(e&&"v"==s||"h"==s)&&(dw_scrollObj.handleControlVis(t,l,s),dw_Scrollbar_Co.addEvent(this,"on_load",(function(){dw_scrollObj.handleControlVis(t,l,s)})),dw_Scrollbar_Co.addEvent(this,"on_update",(function(){dw_scrollObj.handleControlVis(t,l,s)})));e=n.getElementsByTagName("a");for(var i,r,o="mouseover,mousedown,scrollToId,scrollTo,scrollBy,click".split(","),d=0;e[d];d++)for(var n=dw_Util.get_DelimitedClassList(e[d].className),a=0;i=n[a];a++)if(r=i.slice(0,i.indexOf("_")),dw_Util.inArray(r,o)){switch(r){case"mouseover":case"mousedown":dw_scrollObj.handleMouseOverDownLinks(e[d],l,i);break;case"scrollToId":dw_scrollObj.handleScrollToId(e[d],l,i);break;case"scrollTo":case"scrollBy":case"click":dw_scrollObj.handleClick(e[d],l,i)}break}}},dw_scrollObj.handleMouseOverDownLinks=function(t,e,s){var l=s.split("_"),i=l[0];if(/^(mouseover|mousedown)_(up|down|left|right)(_[\d]+)?$/.test(s)){s=l[1];var r=l[2]||null,o="up"==s?90:"down"==s?270:"left"==s?180:0;"mouseover"==i?(dw_Event.add(t,"mouseover",(function(){dw_scrollObj.col[e].initScrollVals(o,r)})),dw_Event.add(t,"mouseout",(function(){dw_scrollObj.col[e].ceaseScroll()})),dw_Event.add(t,"mousedown",(function(){dw_scrollObj.col[e].speed*=3})),dw_Event.add(t,"mouseup",(function(){dw_scrollObj.col[e].speed=dw_scrollObj.prototype.speed}))):(dw_Event.add(t,"mousedown",(function(t){dw_scrollObj.col[e].initScrollVals(o,r),(t=dw_Event.DOMit(t)).preventDefault()})),dw_Event.add(t,"dragstart",(function(t){(t=dw_Event.DOMit(t)).preventDefault()})),dw_Event.add(t,"mouseup",(function(){dw_scrollObj.col[e].ceaseScroll()})),dw_Event.add(t,"mouseout",(function(){dw_scrollObj.col[e].ceaseScroll()}))),dw_Event.add(t,"click",(function(t){return t&&t.preventDefault&&t.preventDefault(),!1}))}},dw_scrollObj.handleScrollToId=function(t,e,s){var l,i,r;l=s.slice(11),document.getElementById(l)||(s=s.split("_"),l=s[1],s[2]&&(isNaN(parseInt(s[2]))?(i=s[2],r=s[3]&&!isNaN(parseInt(s[3]))?parseInt(s[3]):null):r=parseInt(s[2]))),dw_Event.add(t,"click",(function(t){return dw_scrollObj.scrollToId(e,l,i,r),t&&t.preventDefault&&t.preventDefault(),!1}))},dw_scrollObj.scrollToId=function(t,e,s,l){var i=dw_scrollObj.col[t],r=(t=document.getElementById(t),document.getElementById(e));r&&dw_Util.contained(r,t)&&(s&&(e=document.getElementById(s))&&dw_Util.contained(e,t)&&i.lyrId!=s&&i.load(s),e=document.getElementById(i.lyrId),s=dw_Util.getLayerOffsets(r,e),i.initScrollToVals(s.x,s.y,l))},dw_scrollObj.handleClick=function(t,e,s){var l,i,r,o,d=s.split("_"),n=/^([\d]+)$/;switch(d[0]){case"scrollTo":l="scrollTo",i=(s=/^(null|end|[\d]+)$/).test(d[1])?d[1]:"",r=s.test(d[2])?d[2]:"",o=d[3]&&n.test(d[3])?d[3]:null;break;case"scrollBy":l="scrollBy",i=(s=/^(([m]?[\d]+)|null)$/).test(d[1])?d[1]:"",r=s.test(d[2])?d[2]:"",isNaN(parseInt(i))?"string"==typeof i&&(i=-1!=i.indexOf("m")?i.replace("m",""):i):i=-parseInt(i),isNaN(parseInt(r))?"string"==typeof r&&(r=-1!=r.indexOf("m")?r.replace("m",""):r):r=-parseInt(r),o=d[3]&&n.test(d[3])?d[3]:null;break;case"click":l=(d=dw_scrollObj.getClickParts(s)).fn,i=d.x,r=d.y,o=d.dur}""!==i&&""!==r&&(o=isNaN(parseInt(o))?null:parseInt(o),"scrollBy"==l?dw_Event.add(t,"click",(function(t){return dw_scrollObj.scrollBy(e,i,r,o),t&&t.preventDefault&&t.preventDefault(),!1})):"scrollTo"==l&&dw_Event.add(t,"click",(function(t){return dw_scrollObj.scrollTo(e,i,r,o),t&&t.preventDefault&&t.preventDefault(),!1})))},dw_scrollObj.scrollBy=function(t,e,s,l){dw_scrollObj.col[t]&&(t=dw_scrollObj.col[t],e=null===e?-t.x:parseInt(e),s=null===s?-t.y:parseInt(s),t.initScrollByVals(e,s,l))},dw_scrollObj.scrollTo=function(t,e,s,l){dw_scrollObj.col[t]&&(t=dw_scrollObj.col[t],e="end"===e?t.maxX:e,s="end"===s?t.maxY:s,e=null===e?-t.x:parseInt(e),s=null===s?-t.y:parseInt(s),t.initScrollToVals(e,s,l))},dw_scrollObj.getClickParts=function(t){var e,s,l,i=/^(up|down|left|right)$/,r="",o="",d="";if((t=t.split("_")).length>=4)switch(e=(s=t[1].match(i))?s[1]:null,i=/^(to|by)$/,(s=t[2].match(i))&&(r="to"==s[0]?"scrollTo":"scrollBy"),l=t[3],i=/^([\d]+)$/,s=t[4]&&i.test(t[4])?t[4]:null,r){case"scrollBy":if(!i.test(l)){d=o="";break}switch(e){case"up":o=0,d=l;break;case"down":o=0,d=-l;break;case"left":o=l,d=0;break;case"right":o=-l,d=0}break;case"scrollTo":if(!(i=/^(end|[\d]+)$/).test(l)){d=o="";break}switch(e){case"up":o=null,d=l;break;case"down":o=null,d="end"==l?l:-l;break;case"left":o=l,d=null;break;case"right":o="end"==l?l:-l,d=null}}return{fn:r,x:o,y:d,dur:s}},dw_scrollObj.handleControlVis=function(t,e,s){e=dw_scrollObj.col[e],document.getElementById(t).style.visibility="v"==s&&e.maxY>0||"h"==s&&e.maxX>0?"visible":"hidden"};