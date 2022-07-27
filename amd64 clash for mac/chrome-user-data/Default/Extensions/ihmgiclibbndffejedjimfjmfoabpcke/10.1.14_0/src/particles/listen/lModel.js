ke.import("ext.audio"),pl.extend(ke.particles.listen.model,{_getTransValue:function(t,e,i){return"window"===t?ke.app.flags.isCurrentTranslationMulti?ke.ext.string.removeHtml($(".translation-layout .main-variant .mv-text-part").html()):ke.ext.string.removeHtml($(".trans-wrap").find(".tpart").html()):"history"===t?ke.particles.hist_list.model.getListenValue(e):"tooltip"===t?ke.app.handlers.getListenValue(e,i):void 0},target_id:0,targets:{},_playPrototype:function(t,e,i,s,a,l){if(!pl.empty(i)&&!t.is('[class$="listen-disabled"]')){var n=a||("lang:"===e.substr(0,5)?e.substr(5):ke.ext.util.langUtil["get"+ke.capitalize(e)+"Lang"]()),o=function(e){e&&(t.removeClass("stop-audio"),e.old_data.vis_fns.forEach((function(t){ke.particles.listen.model[t](!1,a||n,ke.particles.listen.model.targets[e.old_data.target_id])})),delete ke.particles.listen.model.targets[e.old_data.target_id])};if(t.hasClass("stop-audio"))ke.IS_SAFARI?ke.app.handlers._processEventHandlers.app.audio.stop({vis_fns:s,target_id:+t.data("tid")},o):chrome.runtime.sendMessage({action:ke.processCall("app","audio","stop"),vis_fns:s,target_id:+t.data("tid")},o);else{t.addClass("stop-audio"),s.forEach((function(t){ke.particles.listen.model[t](!0,n,l)}));var r=++ke.particles.listen.model.target_id;t.data("tid",r),ke.particles.listen.model.targets[r]=l,ke.IS_SAFARI?(new Audio("data:audio/mpeg;").play().catch((t=>{})),ke.app.handlers._processEventHandlers.app.audio.play({lang:n,text:i.trim(),vis_fns:s,target_id:r},o)):chrome.runtime.sendMessage({action:ke.processCall("app","audio","play"),vis_fns:s,text:i.trim(),lang:n,target_id:r},o)}}},ctrlRawVisibility:function(t){pl.empty(pl(".translation-input").val())||!ke.ext.audio.isUtterable(ke.app.getCurrentFromLang())?$(".listen-raw-butt0n").slideUp(75):$(".listen-raw-butt0n").slideDown(75,(function(){t?$(this).addClass("listen-disabled"):$(this).removeClass("listen-disabled")}))},ctrlTransVisibility:function(t,e){ke.ext.audio.isUtterable(ke.app.temp.toLang)?$(".translation-layout").removeClass("no-tts"):$(".translation-layout").addClass("no-tts"),t?pl(".listen-translation").addClass("listen-disabled"):pl(".listen-translation").removeClass("listen-disabled"),ke.app.flags.transUtterancePermission=!t},ctrlSynonymVis:function(t,e,i){i||(i=$("body"));var s=i.target?$(i.target).parent().parent().parent().parent():i,a=!t,l="content"===ke.data.kernel.info.section||"pdf_tooltip"===ke.data.kernel.info.section?ke.getPrefix():"";ke.ext.audio.isUtterable(ke.app.temp.toLang||e)?s.removeClass(l+"no-tts"):s.addClass(l+"no-tts"),$("."+l+"listen-v-item").each((function(){var t=$(this);t.hasClass("stop-audio")||t[(a?"remove":"add")+"Class"](l+"listen-disabled")})),ke.app.flags.transUtterancePermission=a},ctrlTooltipOrigVisibility:function(t,e,i){var s;if(i&&i.target)s=$(ke.ext.util.selectorsUtil.getTooltipWrapRecursively(i.target));else if(i&&i.innerHTML)s=$(i);else{if(!i)return;s=i}var a=s.find("."+ke.getPrefix()+"listen-original").data("from");ke.ext.audio.isUtterable(a)?s.removeClass(ke.getPrefix()+"no-orig-tts"):s.addClass(ke.getPrefix()+"no-orig-tts");var l=!t&&!pl.empty(ke.particles.listen.model._getTransValue("tooltip","orig",i));s.find("."+ke.getPrefix()+"listen-original")[(l?"remove":"add")+"Class"](ke.getPrefix()+"listen-disabled"),ke.app.flags.tt_transUtterancePermission=l},ctrlTooltipTransVisibility:function(t,e,i){var s;if(i&&i.target)s=$(ke.ext.util.selectorsUtil.getTooltipWrapRecursively(i.target));else if(i&&i.innerHTML)s=$(i);else{if(!i)return;s=i}var a=s.find("."+ke.getPrefix()+"listen-translation").data("to");ke.ext.audio.isUtterable(a)?s.removeClass(ke.getPrefix()+"no-trans-tts"):s.addClass(ke.getPrefix()+"no-trans-tts");var l=!t&&!pl.empty(ke.particles.listen.model._getTransValue("tooltip","trans",i));s.find("."+ke.getPrefix()+"listen-translation")[(l?"remove":"add")+"Class"](ke.getPrefix()+"listen-disabled"),ke.app.flags.tt_transUtterancePermission=l},ctrlHistoryOrigVisibility:function(t,e,i){i&&(ke.ext.audio.isUtterable(e)?i.removeClass("no-orig-tts"):i.addClass("no-orig-tts"),$(".listen-original")[(t?"add":"remove")+"Class"]("listen-disabled"))},ctrlHistoryTransVisibility:function(t,e,i){i&&(ke.ext.audio.isUtterable(e)?i.removeClass("no-trans-tts"):i.addClass("no-trans-tts"),$(".listen-translation")[(t?"add":"remove")+"Class"]("listen-disabled"))},playRaw:function(t){ke.particles.listen.model._playPrototype($(this),"from",pl(".translation-input").val(),["ctrlTransVisibility","ctrlSynonymVis"],ke.app.temp.currentDetectedLang,t),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"window",event:"listen-original"})},playTranslation:function(t){ke.particles.listen.model._playPrototype($(this),"to",ke.particles.listen.model._getTransValue("window"),["ctrlRawVisibility","ctrlSynonymVis"],null,t),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"window",event:"listen-translation"})},playTooltip:function(t){t.stopPropagation(),pl(this).hasClass(ke.getPrefix()+"listen-original")?ke.particles.listen.model.playTooltipOriginal.call(this,t,$(this).data("from")):ke.particles.listen.model.playTooltipTranslation.call(this,t,$(this).data("to"))},playTooltipOriginal:function(t,e){ke.particles.listen.model._playPrototype($(this),"lang:"+e,ke.particles.listen.model._getTransValue("tooltip","orig",t),["ctrlTooltipTransVisibility","ctrlSynonymVis"],ke.app.temp.currentDetectedLang,t),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"tooltip",event:"listen-original"})},playTooltipTranslation:function(t,e){ke.particles.listen.model._playPrototype($(this),"lang:"+e,ke.particles.listen.model._getTransValue("tooltip","trans",t),["ctrlTooltipOrigVisibility","ctrlSynonymVis"],null,t),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"tooltip",event:"listen-translation"})},playHistoryItem:function(t){t.stopPropagation();var e=$(".expanded");pl(this).hasClass("listen-original")?ke.particles.listen.model.playHistoryOriginal.call(this,t,e):ke.particles.listen.model.playHistoryTranslation.call(this,t,e)},playHistoryOriginal:function(t,e){ke.particles.listen.model._playPrototype($(this),"lang:"+ke.ext.util.selectorsUtil.getHistoryOriginalLang(t),ke.particles.listen.model._getTransValue("history","orig",t),["ctrlHistoryTransVisibility","ctrlSynonymVis"],null,e),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"history",event:"listen-original"})},playHistoryTranslation:function(t,e){ke.particles.listen.model._playPrototype($(this),"lang:"+ke.ext.util.selectorsUtil.getHistoryToLang(t),ke.particles.listen.model._getTransValue("history","trans",t),["ctrlHistoryOrigVisibility","ctrlSynonymVis"],null,e),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"history",event:"listen-translation"})},playSynonym:function(t){var e=ke.ext.string.removeHtml($(this).parent().find(".main-of-item").html());ke.particles.listen.model._playPrototype($(this),"lang:"+$(this).data("langto"),e,["ctrlSynonymVis","ctrlRawVisibility","ctrlTransVisibility"],null,t),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"window",event:"listen-synonym"})},playHistorySynonym:function(t){var e=$(this).next().find(".main-of-item").html(),i=$(".i-"+ke.ext.util.selectorsUtil.getHistoryItemId(t.target));ke.particles.listen.model._playPrototype($(this),"lang:"+$(this).data("langto"),e,["ctrlSynonymVis","ctrlHistoryOrigVisibility","ctrlHistoryTransVisibility"],null,i),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"history",event:"listen-synonym"})},playTooltipSynonym:function(t){var e=ke.ext.string.removeHtml($(this).parent().find("."+ke.getPrefix()+"main-of-item").html());ke.particles.listen.model._playPrototype($(this),"lang:"+$(this).data("langto"),e,["ctrlSynonymVis","ctrlTooltipOrigVisibility","ctrlTooltipTransVisibility"],null,t),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"tooltip",event:"listen-synonym"})},playPhrasebookOriginal:function(t,e,i){ke.particles.listen.model._playPrototype($(this),"lang:"+e,t,["ctrlHistoryTransVisibility","ctrlSynonymVis"],null,i),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"phrasebook",event:"listen-original"})},playPhrasebookTrans:function(t,e,i){ke.particles.listen.model._playPrototype($(this),"lang:"+e,t,["ctrlHistoryOrigVisibility","ctrlSynonymVis"],null,i),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"phrasebook",event:"listen-translation"})},playPhrasebookSynonym:function(t,e,i){ke.particles.listen.model._playPrototype($(this),"lang:"+e,t,["ctrlHistoryOrigVisibility","ctrlHistoryTransVisibility","ctrlSynonymVis"],null,i),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"phrasebook",event:"listen-synonym"})}});