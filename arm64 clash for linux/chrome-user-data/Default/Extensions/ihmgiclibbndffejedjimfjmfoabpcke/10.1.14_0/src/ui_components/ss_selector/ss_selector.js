ke.import("s:ui_components.ss_selector"),pl.extend(ke.ui,{ss_selector:{}}),pl.extend(ke.ui.ss_selector,{ON_STATE:1,OFF_STATE:2,callbackList:{},init:function(s){this.callbackList=s;var e=this;pl(".ss-button").unbind().bind("click",(function(){e.toggleState.call(this)}))},getClass:function(s){return pl(s).attr("class").split(" ")[1]},toggleState:function(s){s=pl.type(s,"undef")?pl(this).hasClass("active-ss"):s;var e=ke.ui.ss_selector.getClass(this);pl(this).find(".sign").html(ke.getLocale("Kernel_Option"+(s?"Disabled":"Enabled"))),s?(pl(this).removeClass("active-ss"),$("."+e+"-selection").slideUp(100,"easeInOutQuint")):(pl(this).addClass("active-ss"),$("."+e+"-selection").slideDown(100,"easeInOutQuint")),ke.ui.ss_selector.callbackList[e]?ke.ui.ss_selector.callbackList[e](!s):ke.ui.ss_selector.callbackList.DEFAULT_CALLBACK(e,!s)}});