/**
 * @fileoverview Entry point of the application.
 */
chrome.action.onClicked.addListener(function(tab) {
  chrome.windows.create(
      {url: 'window.html', type: 'popup', width: 800, height: 550});
});
