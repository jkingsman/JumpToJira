var baseUrl, prefix;

function init() {
  chrome.storage.sync.get(null, function(data) {
    document.getElementById('url').innerHTML = '<a href="' + data.url + '">' + data.url + '</a>';
    document.getElementById('prefix').innerHTML = data.prefix;
    document.getElementById('ticket').focus();
    baseUrl = data.url;
    prefix = data.prefix;
  });
}

document.onkeypress = function (e) {
    e = e || window.event;
    if(e.keyCode === 13){
      var tickets = document.getElementById('ticket').value.split('.');
      tickets.forEach(function(ticketID){
        var ticketUrl = baseUrl + prefix + ticketID;
        chrome.tabs.create({ url: ticketUrl });
      });
    }
};

document.addEventListener('DOMContentLoaded', init);
