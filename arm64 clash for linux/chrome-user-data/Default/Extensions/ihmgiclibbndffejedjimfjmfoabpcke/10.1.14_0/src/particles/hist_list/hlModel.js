!function(e){var t=0;pl.extend(ke.particles.hist_list.model,{onItemMouseOver:function(e){ke.app.canPerformActions()},onItemMouseOut:function(e){},prevScrollPos:0,closeItemView:function(){$("body").removeClass("view-mode"),$(".expanded").hide(),$(".list-view").show(),$(".back-button").hide(),$(".list-view-buttons").show(),$(window).scrollTop(ke.particles.hist_list.model.prevScrollPos)},onItemClick:function(e,t){var i=ke.ext.util.selectorsUtil.getHistoryItemId(e.target);if(ke.app.canPerformActions()||t){var s=".i-"+i;ke.particles.hist_list.model.prevScrollPos=$(window).scrollTop(),$(window).scrollTop(0),$("body").addClass("view-mode"),$(".list-view").hide(),$(".expanded").html($(s).html()),$(".expanded").find(".selection-sliding-wrap").remove(),$(".expanded").show();var n=$(this).data("from"),o=$(this).data("to"),a=$(".expanded");ke.particles.listen.model.ctrlHistoryOrigVisibility(null,n,a),ke.particles.listen.model.ctrlHistoryTransVisibility(null,o,a),ke.particles.listen.model.ctrlSynonymVis(null,o,a),a.find(".listen-selector").on("click",ke.particles.listen.model.playHistoryItem),a.find(".listen-v-item").on("click",ke.particles.listen.model.playHistorySynonym),a.find(".copy-button").on("click",ke.particles.three_dots.model.copyMain),a.find(".small-copy-button").on("click",ke.particles.three_dots.model.copySynonym),ke.particles.three_dots.view.fillContextMenuOnlyWithWordlists(a.find(".add-to-pb-button"),n,o,i),ke.ext.util.storageUtil.requestBackgroundOption("isTrueOption",["show_translit"],(function(e){e&&""!=a.find(".translit-row .translit-main").html()?a.find(".translit-row").show():a.find(".translit-row").hide()})),$(".list-view-buttons").hide(),$(".back-button").show()}else ke.app.flags.isTickerWrapActive&&ke.particles.hist_opt_delete.model.onTickerClick.call($(".i-"+i).find(".selection-ticker").get(0),e,"item")},toggleListenWrap:function(e,t){var i=".i-"+e;pl.type(e,"undef")&&(i=".history-list");var s=$(i).find(".listen-sliding-wrap").hasClass("active-lsw")||t,n=$(i).find(".listen-sliding-wrap").toggleClass("active-lsw");n.removeClass("invisible-sw"),s?n.animate({width:0,opacity:0},1.755*ke.getAnimSpeed("slide_up"),ke.getAnimType("slide_up"),(function(){$(this).fadeOut(1)})):n.animate({width:41,opacity:1},1.255*ke.getAnimSpeed("slide_up"),ke.getAnimType("fast_slide_up"),(function(){$(this).fadeIn(1,ke.getAnimType("fade_out"))}))},removeItemFromListById:function(e,t){$(".i-"+e).prev().removeClass("before-expanded"),$(".i-"+e).find(".main-variant-wrap").slideUp(ke.getAnimSpeed("slide_up"),ke.getAnimType("slide_up"),(function(){$(this).parent().parent().remove(),t()})).fadeOut(ke.getAnimSpeed("fade_out"),ke.getAnimType("fade_out")),ke.ext.arr.delete(ke.app.temp.all_items,e),0===ke.app.temp.all_items.length&&ke.particles.hist_list.model.fadeOutList()},scrollTop:function(){$("html, body").animate({scrollTop:0},"fast")},onPageScroll:function(){var e=$(this).scrollTop(),i=$(document.body).prop("scrollHeight");e+window.innerHeight+250>=i&&ke.particles.hist_list.model.showMoreItems(e);var s=15-e;s<0&&(s=0),pl(".up-shortcut").css({marginTop:s})[(0===s?"add":"remove")+"Class"]("sticked-top");0===e?$(".up-shortcut").fadeOut(1.789*ke.getAnimSpeed("fade_out"),ke.getAnimType("fade_out")):(t<50&&e>=50||e<50&&t>=50)&&$(".up-shortcut")[e<50?"fadeOut":"fadeIn"](1.789*ke.getAnimSpeed("fade_out"),ke.getAnimType("fade_out")),ke.particles.hist_list.model.onScrollingStateChange(e),t=e},onScrollingStateChange:function(e){var t,i;if(e>=65&&ke.app.flags.isTickerWrapActive){if(t=0,i=1,ke.app.flags.quick_access_shown)return;ke.app.flags.quick_access_shown=!0}else if(!ke.app.flags.isTickerWrapActive||ke.app.flags.isTickerWrapActive&&e<65){if(t=-59,i=0,!ke.app.flags.quick_access_shown)return;ke.app.flags.quick_access_shown=!1}$(".quick-access-bar").animate({top:t,opacity:i},2.25*ke.getAnimSpeed("slide_down"),ke.getAnimType("slide_down"))},showMoreItems:function(e){var t=ke.app.temp.item_times[ke.app.temp.item_times.length-1];!ke.app.flags.is_searching&&t&&ke.particles.hist_list.view.populateHistoryList((function(){ke.app.initHistoryList(!0)}),[ke.idb.UPPER_BOUND,"time",t],!1)},getListenValue:function(e){var t=$(".expanded"),i="";return"orig"===e?i=t.find(".input-particle .text-part").text():"trans"===e&&((i=t.find(".main-output-particle .tpart").text())||(i=t.find(".main-output-particle .text-part").text())),i},toggleListEndCap:function(e){var t=$(".ec-wrap"),i=$(".more-button"),s=$(".content-wrap"),n=$(".search-layout");return ke.app.temp.all_items.length>0?(n.show(),s.show(),i.show(),t.hide(),!1):(n.hide(),s.hide(),i.hide(),t.find(".ec-text").html(ke.getLocale("History_Content_List_OnEmpty")),t.show(),!0)},fadeOutList:function(){this.toggleListEndCap("History_Content_List_OnEmpty")},clear:function(){ke.app.temp.expanded=[],ke.app.temp.selected=[],ke.app.flags.all_loaded_cap_exists=!1,pl(".history-list").empty()},downloadHistoryAsCSV:function(){var e=$(this);ke.isProUser?("undefined"!=typeof ga&&ga("send","event","history","export-history"),e.addClass("downloading"),ke.idb.enum("it","history",Number.MAX_VALUE,null,!1,(function(t){var i=[[ke.getLocale("Csv_TimeDate"),ke.getLocale("Csv_FromLang"),ke.getLocale("Csv_IntoLang"),ke.getLocale("Csv_Input"),ke.getLocale("Csv_Translation"),ke.getLocale("Csv_Transliteration"),ke.getLocale("Csv_Synonyms"),ke.getLocale("Csv_WhereTranslated")]];t.forEach((function(e){var t=[],s=[];for(var n in e.it_resp[7].forEach((function(e){e.forEach((function(e){t.push(e[0])}))})),e.sources)s.push(n);i.push(['"'+ke.ext.time.beautify(e.time)+'"',ke.getLocale("Kernel_Lang_"+ke.ext.util.langUtil.getLangNameByKey(e.it_resp[5])),ke.getLocale("Kernel_Lang_"+ke.ext.util.langUtil.getLangNameByKey(e.l_to)),'"'+e.input+'"','"'+e.it_resp[3]+'"','"'+e.it_resp[4]+'"','"'+t.join(", ")+'"','"'+s.join("\n")+'"'])})),ke.ext.file.downloadAsCSV(i,(function(){e.removeClass("downloading")}))}))):ke.ui.pro_alert.show(ke.getLocale("Pro_ExportFeature"),"history-export")}})}();