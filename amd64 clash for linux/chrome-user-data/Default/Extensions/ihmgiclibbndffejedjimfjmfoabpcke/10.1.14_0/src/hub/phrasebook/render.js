pl.extend(ke.app.render,{organize:{fillAddLangDropdown:function(e,t,a){var o=1===e?ke.particles.lang_selectors.view.TYPES.FROM:ke.particles.lang_selectors.view.TYPES.TO;ke.particles.lang_selectors.view.fillDropdown(o,e,{is_main:!1,excludes:["auto"],from:ke.app.temp.new_wordlist_from_lang,to:ke.app.temp.new_wordlist_to_lang},ke.ext.const.lang.list,a)},tryShowingWordlist:function(){var e=+document.location.hash.split("-")[1];ke.app.render.organize.showPhrasesOrWordlists(e,(function(){ke.app.render.organize.populateWordlists((function(){ke.app.temp.wl_amount>0?$(".search-layout").show():$(".search-layout").hide(),ke.ui.loading.close(),ke.isProUser||ke.ui.pro_alert.show(ke.getLocale("Phrasebook_FullyBlockedOut"),"phrasebook-full-blockout",null,!0)}),"")}))},showPhrasesOrWordlists:function(e,t){e?ke.idb.exists("it","wordlists",[],{id:e},(function(a,o,r){a?(ke.app.temp.current_wordlist_id=o,ke.app.temp.current_wordlist_from_lang=r.from,ke.app.temp.current_wordlist_to_lang=r.to,ke.app.$page_name.html(r.name).attr("title",r.name),ke.app.$wl_from_img.attr("src","../../res/images/flags/"+ke.app.temp.current_wordlist_from_lang+"@2x.png"),ke.app.$wl_to_img.attr("src","../../res/images/flags/"+ke.app.temp.current_wordlist_to_lang+"@2x.png"),ke.app.render.organize.populatePhrases(e,"",(function(){ke.app.temp.phrases_amount>0&&ke.ext.util.storageUtil.requestBackgroundOption("isTrueOption",["sync"],(function(e){e&&$(".search").addClass("search-shifted-left")})),setTimeout((function(){ke.ui.loading.close()}),500)}))):t()})):t()},populateWordlists:function(e,t){ke.idb.search("it","wordlists",{name:t,pending_removal:!1},(function(a,o){if(!a&&o&&ke.IS_FIREFOX)return ke.app.flags.error=!0,void ke.ui.loading.showIdbErrorLayout();ke.app.temp.wl_amount=0,a.forEach((function(e){ke.app.render.organize.drawWordlist(e,void 0)})),ke.app.handlers.toggleEmptyWordlistsCap(!pl.empty(t)),e(a.length)}),ke.idb.COMP_AND,null,Number.MAX_VALUE,!0,"last_update")},drawWordlist:function(e,t){++ke.app.temp.wl_amount;try{ke.app.$wordlists.prepend(ke.ext.tpl.compile(ke.templates.wordlistItem,{id:e.id,from_lang_code:e.from,to_lang_code:e.to,from_lang:ke.getLocale("Kernel_Lang_"+ke.ext.util.langUtil.getLangNameByKey(e.from)),to_lang:ke.getLocale("Kernel_Lang_"+ke.ext.util.langUtil.getLangNameByKey(e.to)),name:e.name,time:ke.ext.time.beautify(e.last_update),phrases_count:e.phrases_count,l_phrases:ke.ext.orphography.getNumDecl(e.phrases_count,[ke.getLocale("Phrasebook_Phrases1"),ke.getLocale("Phrasebook_Phrases2"),ke.getLocale("Phrasebook_Phrases3")])}))}catch(e){}var a=$(".wl-"+e.id);a.on("click",ke.app.handlers.onWordlistOpen),a.find(".wl-delete").on("click",ke.app.handlers.onWordlistDelete)},populatePhrases:function(e,t,a){ke.idb.search("it","phrases",(function(a){return!a.pending_removal&&a.parent_wordlist_key===e&&(a.text.toLowerCase().indexOf(t)>-1||a.translation.toLowerCase().indexOf(t)>-1)}),(function(e){ke.app.temp.phrases_amount=0,e.forEach((function(e){ke.app.render.organize.drawPhrase(e)})),ke.app.handlers.toggleEmptyPhrasesCap(!pl.empty(t)),a(e.length)}),ke.idb.COMP_AND,null,Number.MAX_VALUE,!1,"added")},drawPhrase:function(e,t){++ke.app.temp.phrases_amount;var a=ke.ext.googleApi.parseReceivedTranslation(e.json,!0,"",!1);console.log(a);try{ke.app.$phrases[t||"append"](ke.ext.tpl.compile(ke.templates.phraseItem,{id:e.id,pid:e.parent_wordlist_key,text:e.text,translation:e.translation,translit_original:ke.ext.googleApi.getSourceTranslitFromJson(e.json),translit_translation:ke.ext.googleApi.getTargetTranslitFromJson(e.json),lang_orig:ke.getLocale("Kernel_Lang_"+ke.ext.util.langUtil.getLangNameByKey(ke.app.temp.current_wordlist_from_lang)),lang_trans:ke.getLocale("Kernel_Lang_"+ke.ext.util.langUtil.getLangNameByKey(ke.app.temp.current_wordlist_to_lang)),preview:ke.ext.tpl.compile(a[2]||"",{to:ke.app.temp.current_wordlist_to_lang})}))}catch(e){}var o=$(".p-"+e.id);a[2]||o.find(".p-trans-layout").addClass("last"),o.on("click",ke.app.handlers.onPhrasePreview),o.find(".p-delete").on("click",ke.app.handlers.onPhraseDelete)}},events:{}});