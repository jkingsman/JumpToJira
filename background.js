chrome.storage.sync.get(null, function (data) {
    if (typeof data.url === 'undefined' || typeof data.prefix === 'undefined') {
        // write in a default config
        chrome.storage.sync.set({
            'url': 'https://example.jira.com/browse/',
            'prefix': 'TEST-',
        });
    }
});
