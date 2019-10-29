// check if extension is enabled or disabled
chrome.storage.sync.get("disabled", function(value) {
  if (value.disabled) {
    hideButton("disable-btn");
  } else {
    hideButton("enable-btn");
  }

  function hideButton(elementId) {
    document.getElementById(elementId).style.display = "none";
  }

  function showButton(elementId) {
    document.getElementById(elementId).style.display = "inline-block";
  }

  function toggleButtons() {
    chrome.storage.sync.get("disabled", function(value) {
      if (value.disabled) {
        hideButton("disable-btn");
        showButton("enable-btn");
      } else {
        hideButton("enable-btn");
        showButton("disable-btn");
      }
    });
    chrome.tabs.reload();
  }

  function disableExtension() {
    chrome.storage.sync.set({ disabled: true }, function() {
      toggleButtons();
    });
  }
  document
    .getElementById("disable-btn")
    .addEventListener("click", disableExtension);

  function enableExtension() {
    chrome.storage.sync.set({ disabled: false }, function() {
      toggleButtons();
    });
  }
  document
    .getElementById("enable-btn")
    .addEventListener("click", enableExtension);
});

chrome.storage.onChanged.addListener(function(changes) {
  for (var key in changes) {
    var storageChange = changes[key].newValue;
    if (key === "verified") {
      if (storageChange) {
        document.getElementById("app").style.display = "inline-block";
        document.getElementById("payment-form").style.display = "none";
      } else {
        document.getElementById("app").style.display = "none";
        document.getElementById("payment-form").style.display = "inline-block";
      }
    }
  }
});
