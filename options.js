document.getElementById("config").addEventListener("submit", function(e) {
  e.preventDefault();

  chrome.storage.sync.set({
    'url': document.getElementById('url').value,
    'prefix': document.getElementById('prefix').value
  });

  document.getElementById('status').innerHTML = 'Settings saved.';

  setTimeout(function() {
    // remove the status message in 3 seconds
    document.getElementById('status').innerHTML = '';
  }, 3000);
});

function populateOptions() {
  chrome.storage.sync.get(null, function(data) {
    document.getElementById('url').value = data.url;
    document.getElementById('prefix').value = data.prefix;
  });
}

document.addEventListener('DOMContentLoaded', populateOptions);
