pl.extend(ke.ui_views.i18n,{init:function(){$(".need-html-locale").each((function(){var e=[$(this).attr("id")];$(this).data("storage-locale-placeholder")&&e.push(ke.ext.util.storageUtil.getVal($(this).data("storage-locale-placeholder"))),$(this).html(ke.getLocale.apply(ke,e))})),$(".need-ph-locale").each((function(){pl(this).attr("placeholder",ke.getLocale($(this).attr("id")))})),$(".need-title-locale").each((function(){$(this).attr("title",ke.getLocale($(this).attr("id")))}))},setSettingsTitle:function(){document.title=ke.getLocale("Kernel_SettingsTitle")},setHistoryTitle:function(){document.title=ke.getLocale("Kernel_HistoryTitle")}});