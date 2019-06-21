var isDisabled = false;

// extension can be disabled temporarily
chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key].newValue;
    if (key === 'disabled') {
      console.log(storageChange);
      isDisabled = storageChange;
      console.log(isDisabled);
    }
  }
});

// block outgoing requests for help widgets
chrome.webRequest.onBeforeRequest.addListener(
              function(details) {
                // set badge text to indicate that a help widget is available
                chrome.browserAction.setBadgeText({text: "HELP", tabId: details.tabId});

                  if (isDisabled) {
                    return { cancel: false } // this should return from the function (details) level
                  } else {
                    return { cancel: true }
                  }
              },
              {urls: [
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
                "*://plugins.help.com/*"
              ]},
              ["blocking"]);
/*
              chrome.runtime.onInstalled.addListener(function() {

                chrome.tabs.create({
                  url: 'https://hellogoodbye.app/postinstall.html',
                  active: true
                });

                return false;
              });
*/
