var isLazyLoading = 0;
var isBottom = 1;
var observer;

//load,DOMContentLoaded
window.addEventListener("DOMContentLoaded", async function () {
  try {
    let div = document.createElement("div");
    div.setAttribute("id", "loader");
    div.setAttribute("class", "loader loader-default");
    //document.body.appendChild(div);
    let result = await injectCustomJs();
  } catch (err) {
    console.info("content-script.js window.addEventListener error:" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
  }
});

//to get if need to autoscroll
async function injectCustomJs() {
  return new Promise(function (resolve) {
    try {
      let script = document.createElement("script");
      script.src = "/js/parser/searcherNewTab.js";
      script.async = false;
      script.onload = function () {
        this.remove();
      };
      console.debug("content-script.js injectCustomerJs parserNewTab.js");
      document.body.appendChild(script);
    } catch (err) {
      console.info("content-script.js injectCustomJs error:" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    }
  });
}

//receive message from background
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.debug("content-script.js onMessage:" + JSON.stringify(request));

  let type = request.type;

  if (type == "search") {
    let keyword = request.keyword;
    console.debug("content-script.js selection:" + window.getSelection());
    console.debug("content-script.js keyword:" + keyword);
    if (window.getSelection() != "") {
      //if have selected something
      let selection = window.getSelection();
      let range = selection.getRangeAt(0);
      if (range) {
        document.getElementById("loader").setAttribute("class", "loader loader-default is-active");
        let keyword = selection.toString();
        console.debug("content-script.js keyword:" + keyword);
        sendResponse({
          type: "search",
          keyword: keyword,
        });
      }
    } else {
      document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

      sendResponse({
        type: "search",
        keyword: keyword,
      });
    }
  } else if (type == "loading_finish") {
    document.getElementById("loader").setAttribute("class", "loader loader-default");

    sendResponse("OK");
  } else if (type == "popUnder") {
    let parserName = request.parserName;
    let searcherName = request.searcherName;
    let parserTemplate = request.parserTemplate;
    let searcherTemplate = request.searcherTemplate;
    let url = request.url;
    let source = request.source;
    let keyword = request.keyword;
    let selector = request.selector;

    try {
      let parserFunc;
      let searcherFunc = window[searcherName];
      if (typeof searcherFunc == "function") {
        searcherFunc(url, keyword);
      } else if (searcherTemplate != "default") {
        searcherTemplate = base64DecodeUnicode(searcherTemplate);
        console.debug("content-script.js searcherTemplate is:" + searcherTemplate);
        searcherFunc = buildSearcher(searcherName, searcherTemplate);
        if (typeof searcherFunc == "function") {
          searcherFunc(url, keyword);
        } else {
          sendResponse({ results: [] });
        }
      }

      if (parserTemplate != "default") {
        parserTemplate = base64DecodeUnicode(parserTemplate);
        console.debug("content-script.js parserTemplate is:" + parserTemplate);
        parserFunc = buildParser4NewTab(parserName, type, parserTemplate);
      } else {
        console.debug("content-script.js window[parserName] is:" + parserName);
        parserFunc = window[parserName];
      }
      if (typeof parserFunc !== "function") {
        console.info("content-script.js popUnder parserFunc is not function ");
        sendResponse({ results: [] });
      } else {
        parser(parserName, parserFunc, url, source, keyword, selector, 1, sendResponse);
      }
    } catch (err) {
      console.info("content-script.js popUnder " + parserName + " error is:" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
      sendResponse({ results: [] });
    }
  }

  return true;
});

function parser(parserName, parserFunc, url, source, keyword, selector, total, sendResponse) {
  //console.debug("content-script.js popUnder parser 0  retry " + total + ", selector is:" + selector);
  console.debug("content-script.js parser " + parserName + " source is:" + source + ",keyword is:" + keyword + ",url is:" + url + " ,retry " + total + ", selector is:" + selector);

  let interval;
  if (total > 10) {
    sendResponse({ results: [] });
    return;
  }
  let elements;
  if (selector) elements = document.querySelectorAll(selector);

  //console.debug("content-script.js  parser " + parserName + " ,retry " + total + ",elements is:" + elements.length);
  if (elements == null || elements.length == 0) {
    //console.debug("content-script.js parser " + parserName + " is null ,retry " + total);
    interval = setInterval(function () {
      if (interval) clearInterval(interval);
      parser(parserName, parserFunc, url, source, keyword, selector, total + 1, sendResponse);
    }, 500);
  } else {
    let hrefs = parserFunc(url, source, keyword);
    console.debug("content-script.js parser " + parserName + " hrefs is:" + JSON.stringify(hrefs));
    if (interval) clearInterval(interval);
    sendResponse({ results: hrefs });
  }
}

function search(sendResponse) {
  if (window.getSelection() != "") {
    //if have selected something
    let selection = window.getSelection();
    let range = selection.getRangeAt(0);
    if (range) {
      let keyword = range.cloneContents();
      sendResponse({
        type: "search",
        keyword: keyword,
      });
    }
  }
}
