pl.extend(ke.particles.pro_block.model,{callback:null,upgrade:function(){var e=ke.app.temp.source||ke.section;ke.ext.util.storageUtil.chainRequestBackgroundOption([{fn:"getVal",args:["account_email"]},{fn:"getVal",args:["user_country"]},{fn:"isTrueOption",args:["gdpr_consent"]}],(function(t){t[2].response;var o=t[0].response,s=t[1].response,i="";ke.ext.util.storageUtil.getVal("user_country")in ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS&&(i=ke.ext.const.subscriptions.CUSTOM_CHECKOUT_LINKS[ke.ext.util.storageUtil.getVal("user_country")].link),Paddle.Checkout.open({product:ke.ext.const.subscriptions.ONE_OFF_ID,override:i,email:o,country:s,allowQuantity:!1,referrer:ke.browserName,passthrough:ke.browserName+" v"+ke.ext.util.storageUtil.getVal("ext_ver")+" ("+e+")",message:ke.getLocale("MatePro_Description"),successCallback:function(t){ke.ext.util.storageUtil.requestBackgroundOption("setVal",["chr_pro_flag",!0],(function(){"tour"===ke.section?(setTimeout(ke.particles.pro_block.model.popConfetti,1e3),ke.app.render.organize.showProLayout()):(ke.ui.pro_alert.opened&&ke.ui.pro_alert.close(),ke.particles.pro_block.view.showProState(),ke.particles.pro_block.view.showSyncState(),ke.particles.pro_block.model.popConfetti())})),ke.ext.mate_events.send("purchased_one_time"),"undefined"!=typeof ga&&ga("send","event","pro","purchased",e)},closeCallback:function(t){"undefined"!=typeof ga&&ga("send","event","pro","pro-checkout-closed",e)}})})),"undefined"!=typeof ga&&ga("send","event","options","pro-checkout-shown",e)},subscribe:function(){ke.particles.pro_block.model.subscribeWithNewTabCheckout.call(this)},subscribeWithNewTabCheckout:function(){if(!0===$(this).data("disabled"))return;let e=ke.app.temp.source||ke.section,t="annual";$(".plan.selected").hasClass("monthly")&&(t="monthly"),$(".spinner").fadeIn(125);let o=$(".pro-subscribe").html();$(this).data("disabled",!0),$(".pro-subscribe").html("&nbsp;"),ke.particles.pro_block.model.generateSubscriptionLinks(t,(e=>{$(".spinner").fadeOut(125),$(this).data("disabled",!1),$(".pro-subscribe").html(o),e?chrome.tabs.create({url:e}):alert(ke.getLocale("Sub_CouldNotGetPayLink"))})),"undefined"!=typeof ga&&ga("send","event","options","pro-checkout-shown",e)},subscribeInline:function(){var e=ke.app.temp.source||ke.section;let t=7;ke.ext.util.storageUtil.isTrueOption("sub_been_subscribed_once")&&(t=0),ke.ext.util.storageUtil.chainRequestBackgroundOption([{fn:"getVal",args:["account_email"]},{fn:"getVal",args:["user_country"]}],(function(o){let s=o[0].response,i=o[1].response,n="annual",a=ke.ext.const.subscriptions.ANNUAL_PLAN_ID;$(".plan.selected").hasClass("monthly")&&(n="monthly",a=ke.ext.const.subscriptions.MONTHLY_PLAN_ID);let r={email:s,browser_name:ke.browserName,extension_version:ke.ext.util.storageUtil.getVal("ext_ver"),referrer:e,lang:ke.browserLang,cohort:"",operating_system:ke.isMac?"mac":ke.isWindows?"windows":"other",_48h_notif:ke.ext.util.storageUtil.isTrueOption("sub_48h_notif")};if(!ke.ext.util.storageUtil.getVal("account_token")){let e=ke.generateUserId(8,1);ke.ext.util.storageUtil.setVal("temp_signup_code",e),r.signup_code=e}let l={product:a,override:ke.ext.const.subscriptions.checkout_links[n].tier_1["trial_"+t],email:s,country:i,allowQuantity:!1,referrer:ke.browserName,passthrough:JSON.stringify(r),message:t>0?ke.getLocale("Sub_FreeTrialVerificationCharge"):"",successCallback:function(e){ke.particles.pro_block.model.finishCheckoutCallback(e.user.email)},closeCallback:function(t){"undefined"!=typeof ga&&ga("send","event","pro","pro-checkout-closed",e)}};Paddle.Checkout.open(l)})),"undefined"!=typeof ga&&ga("send","event","options","pro-checkout-shown",e)},finishCheckoutCallback:function(e){const t=ke.app.temp.source||ke.section;"options"===ke.section&&ke.particles.sett_tabber.view.displayCurrentTab(1),$(".pro-data-loading-layout").show(),ke.ui.pro_alert.opened&&ke.ui.pro_alert.close();let o=()=>{ke.ext.util.storageUtil.setIntValue("sub_pro_survey",0),ke.ext.util.storageUtil.setVal("sub_source",t),ke.ext.util.storageUtil.setVal("sub_been_subscribed_once",!0),"tour"===ke.section?(ke.app.render.organize.showProLayout(),setTimeout(ke.particles.pro_block.model.popConfetti,1500)):ke.particles.pro_block.model.getLatestSubscriptionData((e=>{ke.particles.pro_block.view.showSubscriptionStatus(e),ke.particles.pro_block.view.showSyncState(),setTimeout(ke.particles.pro_block.model.popConfetti,1500)})),ke.ext.util.storageUtil.setIntValue("sub_trial_starting_date",Date.now()),ke.ext.mate_events.send("trial_started"),"undefined"!=typeof ga&&ga("send","event","pro","subscribed",t)};if(ke.ext.util.storageUtil.getVal("account_token"))o();else{let t=!1,s=()=>{ke.ext.util.storageUtil.encodeAndSet("temp_sub_data",{email:e,signed_in_before:t}),o()};$.ajax({url:"https://"+ke.syncServer+"/check_user",type:"GET",dataType:"json",data:{lang:ke.browserLang,email:e,require_password:!0},success:function(e){e.registered&&(t=!0),s()},error:s})}},generateSubscriptionLinks:function(e,t){let o={ext_id:ke.redirectableExtId,plan:e,prev_sub:ke.ext.util.storageUtil.isTrueOption("sub_been_subscribed_once"),pt_email:ke.ext.util.storageUtil.getVal("account_email"),pt_lang:ke.browserLang,pt_browser_name:ke.browserName,pt_ext_version:ke.ext.util.storageUtil.getVal("ext_ver"),pt_referrer:ke.app.temp.source||ke.section,pt_os:ke.isMac?"mac":ke.isWindows?"windows":"other",pt_cohort:""};if(!ke.ext.util.storageUtil.getVal("account_token")){let e=ke.generateUserId(8,1);ke.ext.util.storageUtil.setVal("temp_signup_code",e),o.pt_signup_code=e}$.ajax({url:"https://"+ke.syncServer+"/generate_pay_links_for_browsers",type:"GET",data:o,success:e=>{t(e.link||null)},error:e=>{t(null)}})},finishCreatingAccount:function(){console.log("finish creating called"),ke.ui.login.show({is_finish_signup:!0,email:ke.ext.util.storageUtil.getDecodedVal("temp_sub_data").email})},handleNotificationPermissions:function(){const e=()=>{ke.ext.util.storageUtil.setVal("sub_48h_notif_status",0)};chrome.permissions.contains({permissions:["notifications"]},(t=>{console.log("notifs permission / contains:",t),t?(e(),"undefined"!=typeof ga&&ga("send","event","pro","48h-notifs","had-permission-and-scheduled")):chrome.permissions.request({permissions:["notifications"]},(t=>{console.log("notifs permission / request:",t),t?(e(),"undefined"!=typeof ga&&ga("send","event","pro","48h-notifs","granted-and-scheduled")):"undefined"!=typeof ga&&ga("send","event","pro","48h-notifs","dismissed-or-weird-error")}))}))},showLogin:function(){ke.ui.login.show({is_restore:!1}),"undefined"!=typeof ga&&ga("send","event","options","login-clicked")},restore:function(){ke.ui.login.show({is_restore:!0}),"undefined"!=typeof ga&&ga("send","event","options","restore-clicked")},signOut:function(){ke.ext.util.storageUtil.requestBackgroundOption("setVal",["account_email",""]),ke.ext.util.storageUtil.requestBackgroundOption("setVal",["account_token",""],(()=>{ke.particles.pro_block.view.showProState(),ke.particles.pro_block.view.showSyncState()})),ke.ext.util.storageUtil.requestBackgroundOption("setVal",["account_name",""]),ke.ext.util.storageUtil.requestBackgroundOption("setVal",["sub_data","{}"]),chrome.runtime.sendMessage({action:ke.processCall("app","opt","revokeToken")}),"undefined"!=typeof ga&&ga("send","event","login","sign-out")},getLatestSubscriptionData:function(e){let t=ke.ext.util.storageUtil.getVal("account_token");t?$.ajax({url:"https://sync.matetranslate.com/subscription",type:"GET",dataType:"json",data:{token:t},success:t=>{console.log(t),ke.particles.pro_block.model.sendChargedEventIfNeeded(t),ke.ext.util.storageUtil.encodeAndSet("sub_data",t),e("ok")},error:t=>{e("server_error")}}):e("no_account")},sendChargedEventIfNeeded:function(e){let t=ke.ext.util.storageUtil.getDecodedVal("sub_data");t&&"trialing"===t.status&&"active"===e.status&&(ke.ext.util.storageUtil.setVal("sub_pro_survey",0),ke.ext.mate_events.send("charged_money"))},changeBillingPeriod:function(){$(".plan.selected").removeClass("selected"),$(this).addClass("selected"),$(".price-due").html($(".plan.selected .price").html())},screwSubscription:function(){$(".combo-change-window").hide(),$(".combo-change-window.screw-the-subscription").show(),$(window).scrollTop(0),$("body").addClass("stop-scrolling"),$(".survey-layout").fadeIn(100).css("display","flex")},dismissSurvey:function(){$(".combo-change-window:visible").hasClass("cancelled")&&(document.location.href=$(".cancel-subscription").attr("href")),$(".survey-layout:visible").fadeOut(100),$("body").removeClass("stop-scrolling")},restoreSubscription:function(){ke.ui.login.show({is_restore:!0})},requestStudentDiscount:function(){chrome.tabs.create({url:"https://gikken.co/mate-translate/students/?ref="+ke.browserName+"SubscriptionBlock"}),"undefined"!=typeof ga&&ga("send","event","pro","request-student-discount")},resubscribe:function(){ke.ext.util.storageUtil.setIntValue("sub_trial_days",0),$(".pro-subscribe").html(ke.getLocale("Sub_SubscribeNow")),$("._48h-notification").remove(),$(".pro-layout").slideUp(100,(()=>{$(".no-pro-layout").slideDown(100),$(".pro-data-loading-layout").fadeOut(100)}))},retryPullingSubDataAgain:function(){$(".error-layout").fadeOut(100),$(".pro-data-loading-layout").fadeIn(100),ke.particles.pro_block.model.getLatestSubscriptionData(ke.particles.pro_block.view.showSubscriptionStatus)},cancelSub:function(e){e.preventDefault(),$(".combo-change-window").hide(),$(".combo-change-window.cancelled").show(),$(window).scrollTop(0),$("body").addClass("stop-scrolling"),$(".survey-layout").fadeIn(100).css("display","flex")},popConfetti:function(){var e={origin:{y:.7}};function t(t,o){confetti(Object.assign({},e,o,{particleCount:Math.floor(400*t)}))}t(.25,{spread:26,startVelocity:55}),t(.2,{spread:60}),t(.35,{spread:100,decay:.91,scalar:.8}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2}),t(.1,{spread:120,startVelocity:45})},onComingSoonClicked:function(){alert(ke.getLocale("Sub_CrossPlatformProComingSoon"))},_resetSub:function(){ke.ext.util.storageUtil.setVal("sub_data","{}"),ke.ext.util.storageUtil.setVal("temp_sub_data","{}"),ke.ext.util.storageUtil.setVal("sub_been_subscribed_once",!1),ke.ext.util.storageUtil.setVal("sub_48h_notif",!0),ke.ext.util.storageUtil.setVal("sub_trial_days",7),ke.ext.util.storageUtil.setIntValue("sub_pro_survey",-1),ke.ext.util.storageUtil.setVal("already_submitted_screw_sub_survey",!1)}});