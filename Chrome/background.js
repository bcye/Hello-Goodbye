// chrome.storage.sync.get('disabled', function(value) {
  // if (!value.disabled) {
var isDisabled = false

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (var key in changes) {
    var storageChange = changes[key];
    if (key === 'disabled') {
      console.log(key);
      isDisabled = storageChange;
      console.log('isDisabled set');
    }
  }
});
chrome.webRequest.onBeforeRequest.addListener(
              function(details) {
                console.log('from first callback');
                  if (isDisabled) {
                    console.log('returned false')
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
                "*://app.hubspot.com/*",
                "*://static.getchipbot.com",
                "*://static.zdassets.com/ekr/snippet.js",
                "*://www.couchbase.com/webfiles/1552355627964/js/contact-popup-form.js",
                "*://assetscdn-wchat.freshchat.com/*",
                "*://wchat.freshchat.com/*"
              ]},
              ["blocking"]);
  // }
// });
