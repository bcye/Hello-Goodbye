chrome.storage.sync.get('amazonDisabled', function(value) {
    console.log(value)
    if (value.amazonDisabled) {
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
        chrome.storage.sync.get('amazonDisabled', function(value) {
        if (value.amazonDisabled) {
            hideButton('disable-btn');
            showButton('enable-btn');
        } else {
            hideButton('enable-btn');
            showButton('disable-btn');
        }
        });
    }

    function disableExtension() {
        chrome.storage.sync.set({'amazonDisabled': true}, function() {
        console.log('amazon disabled');
        toggleButtons();
        });
    }
    document.getElementById('disable-btn').addEventListener('click', disableExtension);

    function enableExtension() {
        chrome.storage.sync.set({'amazonDisabled': false}, function() {
        console.log('amazon enabled');
        toggleButtons();
        });
    }
    document.getElementById('enable-btn').addEventListener('click', enableExtension);
});