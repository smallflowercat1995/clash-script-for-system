pl.extend(ke.particles.translate_ctt.model,{currentSelectedText:"",getCurrentSelectedText:function(){return ke.particles.translate_ctt.model.currentSelectedText},setCurrentSelectedText:function(e){ke.particles.translate_ctt.model.currentSelectedText=e},getSelection:function(e){var t=null;return(e=e||window).getSelection?t=e.getSelection():document.getSelection&&(t=document.getSelection()),t},getSelectedText:function(e){var t=this.getSelection(e);return t?pl.trim(t.toString()):""},getTranslation:function(e,t,i,n,o,l){pl.empty(e)||ke.app.flags.isTranslating||(e=e.substr(0,ke.ext.googleApi.MAX_TEXT_LEN),ke.app.flags.isTranslating=!0,chrome.runtime.sendMessage({action:ke.processCall("app","translate","get"),identificator:"tooltip",type:l,text:e,from:i,to:n,prefix:ke.getPrefix(),id:o,source:document.location.href},(function(e){ke.app.flags.isCurrentTranslationMulti=e.isMulti,ke.app.flags.isTranslating=!1,e.offline?t(!0,e):(e.code=ke.ext.tpl.compile(e.code,{from:"auto"===e.from?e.detected_lang:e.from,to:e.to}),t(!1,e),ke.app.temp.currentDetectedLang=e.detected_lang||"")})))},display:function(e,t,i){"pdf_tooltip"===ke.section&&(t.old_data.id="null");var n=$("."+ke.getPrefix()+"tooltip-"+t.old_data.id),o=!1;if(ke.ext.util.storageUtil.requestProStatus((e=>{ke.ext.util.storageUtil.chainRequestBackgroundOption([{fn:"getIntValue",args:["double_click_inline_shows"]},{fn:"getIntValue",args:["selection_inline_shows"]},{fn:"getIntValue",args:["new_settings_counter"]},{fn:"isTrueOption",args:["show_ipa"]},{fn:"isTrueOption",args:["show_articles"]},{fn:"isTrueOption",args:["chr_pro_flag"]}],(function(i){var l=i[0].response,a=i[1].response,s=(i[2].response,i[3].response);if(i[4].response,i[5].response,e||ke.app.render.events.showUpgradeForIpaAndArticles(),"double-click"===t.old_data.type&&l<2?(n.find("."+ke.getPrefix()+"ddopt-"+t.old_data.id+"."+ke.getPrefix()+"hide").removeClass(ke.getPrefix()+"hide"),o=!0,ke.ext.util.storageUtil.requestBackgroundOption("setVal",["double_click_inline_shows",l+1])):n.find("."+ke.getPrefix()+"ddopt-"+t.old_data.id+":not(."+ke.getPrefix()+"hide)").addClass(ke.getPrefix()+"hide"),"selection"===t.old_data.type&&a<2?(n.find("."+ke.getPrefix()+"selopt-"+t.old_data.id+"."+ke.getPrefix()+"hide").removeClass(ke.getPrefix()+"hide"),o=!0,ke.ext.util.storageUtil.requestBackgroundOption("setVal",["selection_inline_shows",a+1])):n.find("."+ke.getPrefix()+"selopt-"+t.old_data.id+":not(."+ke.getPrefix()+"hide)").addClass(ke.getPrefix()+"hide"),t.json[1].length<=ke.ext.googleApi.MAX_IPA_LEN&&$("."+ke.getPrefix()+"original-wrap").show(),n.find("."+ke.getPrefix()+"synonyms-paywall")[0]&&n.find("."+ke.getPrefix()+"v-item")[1]&&n.find("."+ke.getPrefix()+"variants-by-pos")[0]){let e=n.find("."+ke.getPrefix()+"variants-by-pos").height()-parseInt(n.find("."+ke.getPrefix()+"synonyms-paywall").css("top")),t=ke.ext.dom.getPosition(n.find("."+ke.getPrefix()+"v-item")[1])[1]-ke.ext.dom.getPosition(n.find("."+ke.getPrefix()+"variants-by-pos")[0])[1]-3;n.find("."+ke.getPrefix()+"synonyms-paywall").css({top:t+"px",height:e+"px","padding-top":103-t+"px"}),n.find("."+ke.getPrefix()+"synonyms-paywall ."+ke.getPrefix()+"upgrade-cta").on("click",(()=>{let e="";ke.isSubscriptionBased&&(e="annual,"),chrome.runtime.sendMessage({action:ke.processCall("app","opt","newTab"),url:chrome.extension.getURL("/pages/public/options.html#start_purchase,"+e+"tooltip-synonyms")}),chrome.runtime.sendMessage({action:ke.processCall("app","commands","sendAnalyticsEvent"),cat:"tooltip",event:"upgrade-to-pro-synonyms"})}))}else n.find("."+ke.getPrefix()+"synonyms-paywall").remove(),!e&&Math.random()<.5&&!o&&(n.find("."+ke.getPrefix()+"pp-"+t.old_data.id+"."+ke.getPrefix()+"hide").removeClass(ke.getPrefix()+"hide").on("click",(()=>{let e="";ke.isSubscriptionBased&&(e="annual,"),chrome.runtime.sendMessage({action:ke.processCall("app","opt","newTab"),url:chrome.extension.getURL("/pages/public/options.html#start_purchase,"+e+"tooltip-routine-promo")})})),o=!0);s||n.find("."+ke.getPrefix()+"mv-translit").remove(),o?n.find("."+ke.getPrefix()+"help-selected-wrap").addClass(ke.getPrefix()+"with-info-warn"):n.find("."+ke.getPrefix()+"help-selected-wrap").removeClass(ke.getPrefix()+"with-info-warn")}))})),!i){if(ke.ui.tooltip.helpSelected.toggleLoadingInTooltip(t.old_data.id,!1),e)return void ke.ui.tooltip.helpSelected.toggleOfflineInTooltip(t.old_data.id,!0);ke.ui.tooltip.helpSelected.setTooltipContents(t.old_data.id,t.code)}n.find("."+ke.getPrefix()+"top-arr0w").is(":visible")&&n.find("#"+ke.getPrefix()+"tr-scrollbar").addClass(ke.getPrefix()+"top-scroll"),n.find("."+ke.getPrefix()+"from-flag").attr("src",ke.pathToExt+"res/images/flags/"+t.from+"@2x.png"),n.find("."+ke.getPrefix()+"to-flag").attr("src",ke.pathToExt+"res/images/flags/"+t.to+"@2x.png"),ke.app.initDropdowns(t.from),n.find("."+ke.getPrefix()+"swap-arrow").unbind().bind("click",ke.app.handlers.reverseTranslation),!t.isMulti&&t.json[3].length<35&&n.find("."+ke.getPrefix()+"padded-single-translation").addClass(ke.getPrefix()+"short-padded-single-translation"),ke.ext.util.langUtil.isHieroglyphical(t.to)?n.find("."+ke.getPrefix()+"content-layout").addClass(ke.getPrefix()+"non-bold-contents"):n.find("."+ke.getPrefix()+"content-layout").removeClass(ke.getPrefix()+"non-bold-contents"),ke.particles.listen.model.ctrlTooltipOrigVisibility(!1,t.from,n),ke.particles.listen.model.ctrlTooltipTransVisibility(!1,t.to,n),ke.particles.listen.model.ctrlSynonymVis(!1,t.to,n),ke.app.render.events.listen(),ke.app.render.events.listenSynonym(),ke.app.render.events.settings(),ke.app.render.events.unpin&&ke.app.render.events.unpin(),n.find("."+ke.getPrefix()+"small-copy-button").on("click",ke.particles.three_dots.model.copySynonym),ke.app.flags.netflix_player_loaded&&(n.find("."+ke.getPrefix()+"help-selected-wrap").addClass(ke.getPrefix()+"with-netflix-buttons"),n.find("."+ke.getPrefix()+"netflix-buttons").show(),n.find("."+ke.getPrefix()+"netflix-save").on("click",ke.app.handlers.netflix.save),n.find("."+ke.getPrefix()+"netflix-continue").on("click",ke.app.handlers.netflix.continue),ke.app.temp.wordlist_id?n.find("."+ke.getPrefix()+"netflix-words").on("click",ke.app.handlers.netflix.viewSavedWords):(n.find("."+ke.getPrefix()+"netflix-buttons").css("display","flex").css("align-items","center"),n.find("."+ke.getPrefix()+"netflix-words").remove())),"double-click"===t.old_data.type&&ke.app.render.events.doubleClickOptionActions(t.old_data.id),"selection"===t.old_data.type&&ke.app.render.events.selectionOptionActions(t.old_data.id),ke.ui.tooltip.helpSelected.fadeInTooltip(t.old_data.id,(function(){ke.particles.three_dots.view.fillContextMenu($("."+ke.getPrefix()+"more-butt0n"),t.from,t.to,t.old_data.id),ke.is_touch_device()||ke.particles.scrollbars.model.setupHelpSelectedScroll(t.old_data.id,0)})),setTimeout(ke.app.handlers.hideSelectionButton,250)},showTranslation:function(e,t,i,n,o,l){var a=this;ke.ext.util.storageUtil.chainRequestBackgroundOption([{fn:"isTrueOption",args:["dark_mode"]},{fn:"getVal",args:["tooltip_scale"]}],(function(e){var s;ke.app.flags.dark_mode=e[0].response,ke.IS_SAMSUNG||(ke.app.temp.scale=e[1].response);var r=a.getSelection(n),d=r.toString();if(d)ke.app.handlers.lastTranslationCallArgs.selectionBB=r.getRangeAt(0).getBoundingClientRect(),ke.app.handlers.lastTranslationCallArgs.text=d,s=ke.ui.tooltip.helpSelected.showTooltip(r,n,o),ke.ui.tooltip.helpSelected.toggleLoadingInTooltip(s,!0);else{if(!ke.app.handlers.lastTranslationCallArgs.selectionBB||!ke.app.handlers.lastTranslationCallArgs.text)return;s=ke.ui.tooltip.helpSelected.showTooltip(ke.app.handlers.lastTranslationCallArgs.selectionBB,n,o),ke.ui.tooltip.helpSelected.toggleLoadingInTooltip(s,!0),d=ke.app.handlers.lastTranslationCallArgs.text}a.getTranslation(d,(function(e,t){ke.app.handlers.lastTranslationCallArgs.from=t.from,ke.app.handlers.lastTranslationCallArgs.to=t.to,$("."+ke.getPrefix()+"tooltip-"+s).find("."+ke.getPrefix()+"listen-original").attr("data-from","auto"===t.from?t.detected_lang:t.from),$("."+ke.getPrefix()+"tooltip-"+s).find("."+ke.getPrefix()+"listen-translation").attr("data-to",t.to),a.display(e,t)}),t,i,s,l)}))}});