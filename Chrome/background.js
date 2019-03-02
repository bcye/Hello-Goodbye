// chrome.storage.sync.get('disabled', function(value) {
  // if (!value.disabled) {
    chrome.webRequest.onBeforeRequest.addListener(
            function(details) { return {cancel: true}; },
            {urls: [
              "*://widget.intercom.io/*",
              "*://connect.facebook.net/en_US/sdk/xfbml.customerchat.js",
              "*://assets.producthunt.com/assets/upwigloader.js"
            ]},
            ["blocking"]);
  // }
// });
