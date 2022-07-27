chrome.tabs.create({
    url: chrome.runtime.getURL('page.html')
});

window.close();
