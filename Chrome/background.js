var isDisabled = false;

// extension can be disabled temporarily
chrome.storage.onChanged.addListener(function(changes) {
  for (var key in changes) {
    var storageChange = changes[key].newValue;
    if (key === "disabled") {
      isDisabled = storageChange;
    }
  }
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // set badge text to indicate that a help widget is available
    chrome.browserAction.setBadgeText({ text: "HELP", tabId: details.tabId });

    if (isDisabled) {
      return { cancel: false }; // this should return from the function (details) level
    } else {
      return { cancel: true };
    }
  },
  {
    urls: [
      "*://widget.intercom.io/*",
      "*://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",
      "*://assets.producthunt.com/assets/upwigloader.js",
      "*://js.driftt.com/include/*",
      "*://*.crisp.chat/*",
      "*://*.intergram.xyz/js/*",
      "*://widget.mfy.im/*",
      "*://connect.podium.com/*",
      "*://js.usemessages.com/*",
      "*://static.getchipbot.com/",
      "*://static.zdassets.com/ekr/snippet.js",
      "*://www.couchbase.com/webfiles/1552355627964/js/contact-popup-form.js",
      "*://assetscdn-wchat.freshchat.com/*",
      "*://wchat.freshchat.com/*",
      "*://code.jivosite.com/script/widget/*",
      "*://code.tidio.co/*",
      "*://*.user.com/static/js/*",
      "*://secure.livechatinc.com/*",
      "*://*.justanswer.com/revizely/2/core/ja-com.js",
      "*://code.snapengage.com/*",
      "*://sdk.inbenta.io/chatbot/*",
      "*://pi2.movoto.com/1.7.654/javascripts/desktop/movoto.min.js",
      "*://*.zopim.com/*",
      "*://cdn.gubagoo.io/*",
      "*://leadconnect.ipmaxi.se/*",
      "*://static.small.chat/messenger.js",
      "*://smartsupp-widget-161959.c.cdn77.org/build/smartchat-2.3.20.min.js",
      "*://www.smartsuppchat.com/loader.js?",
      "*://plugins.help.com/*",
      "*://js.gs-chat.com/*",
      "*://widget.customerly.io/*",
      "*://beacon-v2.helpscout.net/",
      "*://assets.gorgias.io/chat/*",
      "*://static.quriobot.com/website/*",
      "*://commondatastorage.googleapis.com/code.snapengage.com/js/*",
      "*://embed.tawk.to/*",
      "*://*.contactatonce.com/*",
      "*://live-chat-cdn.socialsignin.net/*",
      "*://messenger.ngageics.com/*",
      "*://app.carnow.com/dealers/carnow_plugin.js?*",
      "*://chat8.live800.com/*",
      "*://tars-file-upload.s3.amazonaws.com/bulb/js/widget.js",
      "*://static.widget.trengo.eu/embed.js",
      "*://www.chronopost.fr/JavaHookServer/api/v1/webhook/chat/*",
      "*://www.snapengage.com/chatjs/*",
      "*://kf.ecqun.com/*",
      "*://js.qualified.com/qualified.js?*",
      "*://www.aexp-static.com/cdaas/one/statics/axp-shared-scripts/1.4.0/package/dist/vendors/qualtrics/FeedbackLinkModule.js?*",
      "*://widget.replain.cc/dist/*",
      "*://cdn.bitrix24.ru/*",
      "*://code-ya.jivosite.com/*",
      "*://static.zdassets.com/web_widget/*",
      "*://my.clickdesk.com/clickdesk-ui/browser/*",
      "*://*.videoask.com/embed/embed.js",
      "*://afcs.dellcdn.com/csb/contact-drawer/bundles/js/contact-drawer_v1.js",
      "*://static.ada.support/embed.js",
      "*://chat.outboundengine.com/c/readychat_website_min.js",
      "*://knrpc.olark.com/nrpc/*",
      "*://*.formilla.com/scripts/feedback.js",
      "*://site-chat.ru/cjs/*",
      "*://widget.feedot-lawyer.ru/js/*",
      "*://go.activengage.com/*",
      "*://whitesaas.com/api/*",
      "*://messenger.rightside.ru/*",
      "*://lcab.talk-me.ru/*",
      "*://cp.onicon.ru/*",
      "*://chat-assets.frontapp.com/*",
      "*://leadback.ru/js/leadback.js",
      "*://admin.verbox.ru/support/*",
      "*://lptag.liveperson.net/*",
      "*://ready-chat.appspot.com/*",
      "*://w.chatlio.com/*",
      "*://widget-new.helpcrunch.com/*",
      "*://clients.streamwood.ru/StreamWood/sw.js",
      "*://cs15.livetex.ru/js/client.js",
      "*://widget.consultsystems.ru/*",
      "*://d1fw6d83a3emwv.cloudfront.net/bot/prod/js/web-chan.js",
      "*://cdn.bitrix24.kz/*",
      "*://live.vnpgroup.net/js/*",
      "*://crm.digtlab.ru/upload/*",
      "*://me-talk.ru/support/*",
      "*://cdn-app.continual.ly/js/embed/continually-embed.latest.min.js",
      "*://corp.aquadom.info/upload/crm/site_button/loader_1_lue57s.js*",
      "*://lawbook.online/chat.js*",
      "*://static.parastorage.com/services/chat-widget/*",

      // someone from x just bought y widgets
      "*://static.notifia.io/widget.js",
      "*://cdn.useproof.com/proof.js?*",
      "*://cdn.provesrc.com/provesrc.js",
      "*://s3.amazonaws.com/provely-public/w/provely-2.0.js",
      "*://load.fomo.com/*",
      "*://pixel.convertize.io/*",
      "*://chat-assets.frontapp.com/*",
      "*://widget.instabot.io/jsapi/rokoInstabot.js",
    ],
  },
  ["blocking"]
);

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    chrome.tabs.create({
      url: "https://r.hellogoodbye.app/postinstall",
      active: true,
    });
  }

  return false;
});

chrome.runtime.setUninstallURL("https://r.hellogoodbye.app/uninstall");
