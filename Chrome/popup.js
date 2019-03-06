chrome.storage.sync.get('disabled', function(value) {
  if (value.disabled) {
    hideButton('disable-btn');
  } else {
    hideButton('enable-btn');
  }

  function hideButton(elementId) {
    document.getElementById(elementId).style.display = 'none';
  }

  function showButton(elementId) {
    document.getElementById(elementId).style.display = 'inline-block';
  }

  function toggleButtons() {
    chrome.storage.sync.get('disabled', function(value) {
      if (value.disabled) {
        hideButton('disable-btn');
        showButton('enable-btn');
      } else {
        hideButton('enable-btn');
        showButton('disable-btn');
      }
    });
  }

  function disableExtension() {
    chrome.storage.sync.set({'disabled': true}, function() {
      toggleButtons();
    });
  }
  document.getElementById('disable-btn').addEventListener('click', disableExtension);

  function enableExtension() {
    chrome.storage.sync.set({'disabled': false}, function() {

      toggleButtons();
    });
  }
  document.getElementById('enable-btn').addEventListener('click', enableExtension);
});
