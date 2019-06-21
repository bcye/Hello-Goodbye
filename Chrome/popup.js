// check if extension is enabled or disabled
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

// check if user has paid
chrome.storage.sync.get('verified', function(value) {
  if (value.verified) {
    document.getElementById('app').style.display = 'inline-block';
    document.getElementById('payment-form').style.display = 'none';
  } else {
    document.getElementById('app').style.display = 'none';
    document.getElementById('payment-form').style.display = 'inline-block';
  }
});
console.log(document.getElementById('disable-btn'));

// verify customer
function verifyCustomer() {
  var http = new XMLHttpRequest();
  var data = new FormData();
  data.append('email', document.getElementById('email').innerText)
  // insert real link in here
  http.open('POST', 'http://127.0.0.1:5000/verify_customer');
  http.send(data);

  Http.onreadystatechange = (e) => {
    alert(Http.responseCode);
  }
}
