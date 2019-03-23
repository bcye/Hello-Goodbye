// chrome.storage.sync.get('disabled', function(value) {
  // if (!value.disabled) {
var isDisabled = false
var amazonDisabled = false

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key].newValue;
    if (key === 'disabled') {
      console.log(storageChange);
      isDisabled = storageChange;
      console.log(isDisabled);
    } 
    if (key === 'amazonDisabled') {
      amazonDisabled = storageChange;
    }
  }
});
chrome.webRequest.onBeforeRequest.addListener(
              function(details) {
                console.log('from first callback');
                  if (isDisabled) {
                    console.log('returned false');
                    return { cancel: false } // this should return from the function (details) level
                  } else {
                    console.log('returned true')
                    return { cancel: true }
                  }
                console.log('still from first')
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
                "*://sdk.inbenta.io/chatbot/*"
              ]},
              ["blocking"]);
  // }
// });

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
      if (amazonDisabled == false) {
      return {
          redirectUrl: details.url + 
              (details.url.indexOf("?") == -1 ? "?" : "") +
              (details.url.indexOf("&tag=whathaveiread-20") == -1 ? "&tag=whathaveiread-20" : "")
      };
    }
  },
  {urls: ['*://*.amazon.com/*']},
  ['blocking']
);

chrome.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create({url: "chrome-extension://lgfocjjkcgbfgelhnbdmeobejanloaco/options.html"}, function (tab) {
      console.log("New tab launched with chrome-extension://lgfocjjkcgbfgelhnbdmeobejanloaco/options.html");
  });
});