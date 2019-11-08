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
      "*://plugins.help.com/*",
      "*://js.gs-chat.com/*",
      "*://widget.customerly.io/*",
      "*://beacon-v2.helpscout.net/",
      "*://assets.gorgias.io/chat/*",
      "*://static.widget.trengo.eu/embed.js",
      "*://www.chronopost.fr/JavaHookServer/api/v1/webhook/chat/*",
      "*://www.snapengage.com/chatjs/*",

      // someone from x just bought y widgets
      "*://static.notifia.io/widget.js",
      "*://cdn.useproof.com/proof.js?*",
      "*://cdn.provesrc.com/provesrc.js",
      "*://s3.amazonaws.com/provely-public/w/provely-2.0.js",
      "*://load.fomo.com/*",
      "*://pixel.convertize.io/*"
    ]
  },
  ["blocking"]
);

chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install" || details.reason === "update") {
    chrome.tabs.create({
      url: "https://r.hellogoodbye.app/postinstall",
      active: true
    });
  }

  return false;
});

chrome.runtime.setUninstallURL("https://r.hellogoodbye.app/uninstall");
