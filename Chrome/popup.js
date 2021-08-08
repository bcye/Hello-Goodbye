// check if extension is enabled or disabled
chrome.storage.local.get("disabled", function(value) {
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
    chrome.storage.local.get("disabled", function(value) {
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
    chrome.storage.local.set({ disabled: true }, function() {
      toggleButtons();
    });
  }
  document
    .getElementById("disable-btn")
    .addEventListener("click", disableExtension);

  function enableExtension() {
    chrome.storage.local.set({ disabled: false }, function() {
      toggleButtons();
    });
  }
  document
    .getElementById("enable-btn")
    .addEventListener("click", enableExtension);
});
