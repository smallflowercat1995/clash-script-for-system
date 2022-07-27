var contextMenuPublish = chrome.contextMenus.create({
  id: "search",
  contexts: ["selection"],
  type: "normal",
  title: chrome.i18n.getMessage("context_menu_search_text") + '"%s"',
  onclick: contextMenuPublishOnClick,
});

function contextMenuPublishOnClick(info, tab) {
  //console.debug("background.js contextMenuPublish info:" + JSON.stringify(info));
  //console.debug("background.js contextMenuPublish tab:" + JSON.stringify(tab));
  try {
    if (info && info.selectionText) {
      let selectionText = info.selectionText;
      //console.debug("background.js contextMenuPublish selectionText:" + selectionText);

      let keyword = base64EncodeUnicode(selectionText);
      let parameter = "?from=background&keyword=" + keyword;
      chrome.tabs.create({ url: chrome.extension.getURL("results.html") + parameter });
    }
  } catch (err) {
    console.info("background.js contextMenuPublishOnClick error:" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
  }
}

async function search(keyword, searchType, page, tab, action, newResults, filterType = "default") {
  //console.debug("background.js search newResults 000 is:" + JSON.stringify(newResults) + ",keyword is:" + keyword + ",page is:" + page);
  let config = await getStorage();
  let engine_number_per_search = config.engine_number_per_search;
  let results_per_engine = config.results_per_engine;
  let flowAds = await getFlowAds();

  let engines = await getEngines(page, engine_number_per_search, searchType, keyword, filterType);
  //console.debug("background.js search engines is:" + JSON.stringify(engines) + ",keyword is:" + keyword + ",page is:" + page + ",length is:" + Object.keys(engines).length);

  if (engines == null || Object.keys(engines).length == 0) {
    //console.debug("background.js search newResults 000 is:" + JSON.stringify(newResults) + ",keyword is:" + keyword + ",page is:" + page);

    return { results: newResults, currentPage: page };
  }

  let websites = Object.keys(engines);
  await Promise.all(
    websites.map(async function (website) {
      let engine = engines[website];
      //console.debug("background.js website is:" + website + ",search engine is:" + JSON.stringify(engine));
      if (!engine) return Promise.resolve([]);
      let name = engine.name;
      let shortname = engine.shortname;
      let parserTemplate = engine.parser;
      let parserName = shortname + "Parser";
      let type = engine.type;
      let method = engine.method;
      let url = engine.url;
      let keyword_encode = engine.keyword_encode;
      let selector = engine.selector;

      if (keyword_encode == null) keyword_encode = "";

      let searcherName = shortname + "Searcher";
      let searcherTemplate = engine.searcher;
      if (method == "GET") {
        searcherName = "defaultSearcher";
        searcherTemplate = "default";
      }

      if (method == "POST" || method == "GET_CUSTOM") {
        if (searcherTemplate == "default") {
          let searcherFunc = window[searcherName];
          if (searcherFunc == null || typeof searcherFunc !== "function") {
            console.info("background.js search " + parserName + " window[parserName] is not function ,exit!");
            return Promise.resolve([]);
          } else {
            //to get function body
            let body = searcherFunc.toString();
            //console.info("background.js search function body is" + body);
            let matches = body.match(/\{(.*)\}/s);
            if (matches) {
              searcherTemplate = base64EncodeUnicode(matches[1]);
              //console.info("background.js search function body  searcherTemplate is" + searcherTemplate);
            } else {
              console.info("background.js search " + parserName + " window[parserName] is not function ,exit!");
              return Promise.resolve([]);
            }
          }
        }
      }

      if (method == "NEWTAB" || method == "NEWTAB_IFRAME") {
        //console.info("background.js search searcher " + searcherName + ",searchTemplate is:" + searcherTemplate);
        if (searcherTemplate != "default") {
          let bodyTemplate = base64DecodeUnicode(searcherTemplate);
          searcherFunc = buildSearcher(searcherName, bodyTemplate);
          if (typeof searcherFunc !== "function") {
            console.info("background.js search searcher " + searcherName + " buildSearcher is not function ,exit!");
            return Promise.resolve([]);
          }
        }
      }

      let parserFunc;
      if (parserTemplate != "default") {
        let bodyTemplate = base64DecodeUnicode(parserTemplate);
        //console.debug("background.js search parser template is:" + template);
        parserFunc = buildParser(parserName, type, bodyTemplate);
        if (typeof parserFunc !== "function") {
          console.info("background.js search " + parserName + " window[parserName] is not function ,exit!");
          return Promise.resolve([]);
        }
      } else {
        parserFunc = window[parserName];
        if (typeof parserFunc !== "function") {
          console.info("background.js search " + parserName + " window[parserName] is not function ,exit!");
          return Promise.resolve([]);
        }
      }

      let loc = document.createElement("a");
      loc.href = url;
      let protocol = loc.protocol;
      let host = loc.host;
      let port = loc.port;

      let site = protocol + "//" + host;
      if (!port) site = protocol + "//" + host + ":" + port;
      let source = "<a href='" + site + "' target='_blank'>" + name + "</a>";
      try {
        let results = [];
        //console.debug("background.js search  url  is:  " + url + "  ,keyword is:" + keyword + ",type is:" + type + ",method is:" + method + ",keyword_encode is:" + keyword_encode);
        if (method == "NEWTAB" || method == "NEWTAB_IFRAME") {
          if (keyword_encode) {
            let searchkeyword = keyword.split(" ").join(keyword_encode);
            url = url.replace(/searchkeyword/g, searchkeyword);
          } else {
            let searchkeyword = encodeURIComponent(keyword);
            url = url.replace(/searchkeyword/g, searchkeyword);
          }
          //console.debug("background.js search newTab url  is:" + url + ",keyword is:" + keyword);

          results = await searchNewTab(url, method, keyword, source, parserName, parserTemplate, selector, searcherName, searcherTemplate);
          if (results) {
            if (shortname != "juso") {
              results = results.slice(0, results_per_engine);
            }
          }
        } else if (method == "GET_IFRAME") {
          //to do
          chrome.tabs.sendMessage(tab.id, { type: "get_iframe" }, function (response) {
            console.debug("background.js search response:" + JSON.stringify(response));
          });
        } else {
          if (keyword_encode) {
            //console.debug("background.js search createWorker before replace url111  is: " + url + " ,keyword is:" + keyword + ",type is:" + type + ",parserName is:" + parserName + ",method is:" + method);
            let searchkeyword = keyword.split(" ").join(keyword_encode);
            url = url.replace(/searchkeyword/g, searchkeyword);
          } else {
            //console.debug("background.js search createWorker before replace url  is: " + url + " ,keyword is:" + keyword + ",type is:" + type + ",parserName is:" + parserName + ",method is:" + method);
            let searchkeyword = encodeURIComponent(keyword);
            url = url.replace(/searchkeyword/g, searchkeyword);
          }
          //console.debug("background.js search createWorker url  is: " + url + " ,keyword is:" + keyword + ",type is:" + type + ",parserName is:" + parserName);
          results = await createWorker(keyword, url, source, parserFunc, searcherName, searcherTemplate);
          //console.debug("background.js search searcherName is:" + shortname + " url is: " + url + " , results : " + JSON.stringify(results));
          if (results) {
            if (shortname != "juso") {
              results = results.slice(0, results_per_engine);
            }
          }
        }

        //console.debug("background.js search url is: " + url + " , results : " + JSON.stringify(results));

        return Promise.resolve(results);
      } catch (err) {
        return Promise.resolve([]);
      }
    })
  ).then(function (results) {
    //console.debug("background.js search results is:" + JSON.stringify(results));
    let reduced = [];
    if (results && results.length) {
      reduced = results.reduce(function (accumulator, currentValue, currentIndex, array) {
        for (let key of currentValue) {
          accumulator.push(key);
        }

        return accumulator;
      });
    }
    newResults = newResults.concat(reduced);
  });
  //end of Promise.all
  if (page == 0) {
    newResults = flowAds.concat(newResults);
  }

  if (newResults == null || (newResults && newResults.length < 3)) {
    //console.debug("background.js search results 000 is:" + JSON.stringify(newResults));
    //check have more engines
    let nextEngines = await getEngines(page + 1, engine_number_per_search, searchType, keyword, filterType);

    //console.debug("background.js search nextEngines 000 is:" + enginesLength + ",page is:" + page);
    if (nextEngines && Object.keys(nextEngines).length > 0) {
      return search(keyword, searchType, page + 1, tab, action, newResults, filterType);
    }
  }
  if (action == "load_more") {
    //console.debug("background.js search results 111 is:" + JSON.stringify(newResults));
    chrome.storage.local.set(
      {
        keyword: keyword,
        results: newResults,
      },
      async function () {
        let config = await getStorage();
        //console.debug("background.js config is: " + JSON.stringify(config));
        //console.debug("background.js search action is:" + action);
        //console.debug("background.js search results is:" + JSON.stringify(config.results));
      }
    );
    return { results: newResults, currentPage: page };
  } else {
    return new Promise(function (resolve) {
      chrome.storage.local.set(
        {
          keyword: keyword,
          results: newResults,
        },
        async function () {
          let config = await getStorage();
          //console.debug("background.js config is: " + JSON.stringify(config));
          //console.debug("background.js search action is:" + action);
          console.debug("background.js search results is:" + config.results);

          if (action == "contextmenu_http") {
            chrome.tabs.sendMessage(
              tab.id,
              { type: "loading_finish" },
              { frameId: 0 },

              function (response) {
                //console.debug("background.js search response:" + JSON.stringify(response));
              }
            );

            chrome.tabs.create({ url: chrome.extension.getURL("results.html") + "?from=background_search" });
          } else {
            chrome.tabs.create({ url: chrome.extension.getURL("results.html") + "?from=background_search" });
          }
          //console.debug("background.js search results 222 is:" + JSON.stringify(newResults));

          resolve({ results: newResults, currentPage: page });
        }
      );
      //console.debug("background.js search results 333 is:" + JSON.stringify(newResults));
      resolve({ results: newResults, currentPage: page });
    });
  }
}

async function createWorker(keyword, url, source, parser, searcherName, searcherTemplate) {
  //console.debug("background.js createWorker keyword :" + keyword + " , url :" + url + ", parser :" + parser + ",searcherName is:" + searcherName + ",searcherTemplate is:" + searcherTemplate);
  return new Promise(async function (resolve) {
    try {
      worker = new Worker("/js/worker.js");

      let data = { keyword: keyword, url: url, source: source, searcherName: searcherName, searcherTemplate: searcherTemplate };

      worker.postMessage(data);

      worker.onmessage = async function (event) {
        //console.debug("background.js Worker Received message " + JSON.stringify(event.data));
        let response = event.data;
        //let searchurl = url.replace("searchkeyword", keyword);
        try {
          let urls = await parser(response.results, url, source, keyword);
          //console.debug("background.js Worker url is: " + url + " , results : " + JSON.stringify(urls));
          resolve(urls);
        } catch (err) {
          resolve([]);
        }
      };
      worker.onerror = function (event) {
        console.error("background.js creatWorker error");
        resolve([]);
      };
    } catch (err) {
      resolve([]);
    }
  });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //console.debug("background.js onMessage.addListener request is: " + JSON.stringify(request));
  let type = request.type;
  if (type == "load_more") {
    let page = request.page;
    let keyword = request.keyword;
    let searchType = request.searchType;
    let filterType = request.filterType;
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      let newResults = [];
      search(keyword, searchType, page, tabs[0], "load_more", newResults, filterType)
        .then(function (data) {
          //console.debug("background.js onMessage.addListener search results is: " + JSON.stringify(data));
          if (data && Object.keys(data).length == 2) {
            sendResponse({ results: data.results, currentPage: data.currentPage });
          } else {
            sendResponse({ results: null, currentPage: page });
          }
        })
        .catch(function (err) {
          sendResponse({ results: null, currentPage: page });

          console.info("background.js onMessage.addListener error is: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        });
    });
  } else if (type == "config_verify") {
    config_verify(request.data, sendResponse);
  } else if (type == "reverse_image") {
    //console.debug("background.js onMessage.addListener request is:" + JSON.stringify(request));
    let url = request.url;
    let hash = request.hash;
    let delete_url = request.delete_url;
    keyword = url;
    searchType = "reverse_image";
    page = 0;
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      let newResults = [];
      filterType = "default";
      search(keyword, searchType, page, tabs[0], "load_more", newResults, filterType)
        .then(function (data) {
          //console.debug("background.js onMessage.addListener search results is: " + JSON.stringify(data));
          if (data && Object.keys(data).length == 2) {
            sendResponse({ results: data.results, currentPage: data.currentPage });
          } else {
            sendResponse({ results: null, currentPage: page });
          }
        })
        .catch(function (err) {
          sendResponse({ results: null, currentPage: page });

          console.info("background.js onMessage.addListener error is: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        });
    });
  } else if (["line", "company", "scores"].includes(type)) {
    //console.debug("background.js onMessage.addListener request is:" + JSON.stringify(request));
    let page = request.page;
    let keyword = request.keyword;
    let searchType = request.searchType;
    chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
      let newResults = [];
      search(keyword, searchType, page, tabs[0], "load_more", newResults, filterType)
        .then(function (data) {
          console.debug("background.js onMessage.addListener search results is: " + JSON.stringify(data));
          if (data && Object.keys(data).length == 2) {
            sendResponse({ results: data.results, currentPage: data.currentPage });
          } else {
            sendResponse({ results: null, currentPage: page });
          }
        })
        .catch(function (err) {
          sendResponse({ results: null, currentPage: page });

          console.info("background.js onMessage.addListener error is: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        });
    });
  }
  return true;
});

async function searchNewTab(url, method, keyword, source, parserName, parserTemplate, selector, searcherName, searcherTemplate) {
  return new Promise(function (resolve) {
    chrome.tabs.create({ url: url, active: false }, function (newTab) {
      //console.debug("results.js search newTab info is:" + JSON.stringify(newTab));
      let tabid = newTab.id;
      chrome.tabs.onUpdated.addListener(onUpdated);
      chrome.tabs.onRemoved.addListener(onRemoved);
      function removeListeners() {
        chrome.tabs.onUpdated.removeListener(onUpdated);
        chrome.tabs.onRemoved.removeListener(onRemoved);
      }

      function onRemoved() {
        //removeListeners();
      }
      function onUpdated(updatedTabId, details) {
        if (details.status == "complete" && updatedTabId == tabid) {
          removeListeners();
          //console.debug("background.js searchNewTab tabid is:" + tabid + ", updatedTabId is :" + updatedTabId + ",parserName is:" + parserName);

          if (method == "NEWTAB_IFRAME") {
            //music.163.com in iframe
            chrome.webNavigation.getAllFrames({ tabId: tabid }, function (details) {
              //console.debug("backgroudn.js searchNewTab details is:" + JSON.stringify(details));
              let frames = [];
              for (let detail of details) {
                frames.push(detail.frameId);
              }
              //console.debug("backgroudn.js searchNewTab frames is:" + JSON.stringify(frames));
              Promise.all(
                frames.map(function (frame) {
                  //console.debug("backgroudn.js searchNewTab frame is:" + JSON.stringify(frame));
                  return new Promise(function (resolve1) {
                    try {
                      chrome.tabs.sendMessage(
                        tabid,
                        { type: "popUnder", url: url, keyword: keyword, source: source, parserName: parserName, parserTemplate: parserTemplate, selector: selector, searcherName: searcherName, searcherTemplate: searcherTemplate },

                        { frameId: frame.frameId },
                        function (response) {
                          if (response && response.results && response.results.length) {
                            //console.debug("background.js search parserName is:" + parserName + " ,response is:" + JSON.stringify(response));
                            resolve1(response.results);
                          } else resolve1([]);
                        }
                      );
                    } catch (err) {
                      resolve1([]);
                    }
                  });
                })
              ).then(function (results) {
                let reduced = [];
                if (results && results.length) {
                  reduced = results.reduce(function (accumulator, currentValue, currentIndex, array) {
                    for (let key of currentValue) {
                      accumulator.push(key);
                    }

                    return accumulator;
                  });
                }
                //console.debug("background.js search parserName is:" + parserName + " ,response is:" + JSON.stringify(reduced));
                //remove tab until all frame finish
                chrome.tabs.remove(tabid);
                resolve(reduced);
              });
            });
          } else {
            // method !== "NEWTAB_IFRAME"
            chrome.tabs.sendMessage(
              tabid,
              { type: "popUnder", url: url, keyword: keyword, source: source, parserName: parserName, parserTemplate: parserTemplate, selector: selector, searcherName: searcherName, searcherTemplate: searcherTemplate },

              function (response) {
                chrome.tabs.remove(tabid);
                //console.debug("background.js search parserName is:" + parserName + " ,response is:" + JSON.stringify(response));
                if (response && response.results) resolve(response.results);
                else resolve([]);
              }
            );
          }
        }
      }
    });
  });
}

async function getEngines(page, pageNum, searchType, keyword, filterType = "default") {
  let config = await getStorage();

  let default_engines = config.engines;
  let user_engines = config.user_engines;
  let engines_keys = config.engines_keys;
  let results_order_by = config.results_order_by;
  let engine_number_per_search = config.engine_number_per_search;
  let results_per_engine = config.results_per_engine;

  if (searchType == "magnet") {
    let page_number = engine_number_per_search * results_per_engine;
    let json = await getJusoSummary(page, page_number, keyword);
    //console.debug("background.js getEngines magnet json is : " + JSON.stringify(json));
    let total = json.total;
    let left = total - page * page_number;
    if (left > 0) {
      let juso_url = "https://juso.best/index.php?page=" + page + "&pageNum=" + page_number + "&keyword=" + keyword + "&type=detail&order_by=" + filterType;
      //console.debug("background.js getEngines juso_url is : " + juso_url);
      let juso_engine = '{"justo.best": { "name": "聚搜", "shortname": "juso", "type": "magnet", "url":"' + juso_url + '", "parser": "default","searcher":"default","method":"GET"  ,"selector":"" ,"keyword_encode":""}}';
      //console.debug("background.js getEngines juso json is : " + juso_engine);
      return JSON.parse(juso_engine);
    }
  }

  //console.debug("background.js getEngines searchType is : " + searchType);
  let more_engines = ["lines", "reverse_image", "company", "scores"];
  if (more_engines.includes(searchType)) {
    let engines = await getMoreEngines(page, pageNum, searchType);
    //console.debug("background.js getEngines is more  " + JSON.stringify(engines));
    return engines;
  }

  if (default_engines == null || Object.keys(default_engines).length == 0) {
    //console.debug("background.js getEngines engines is null ,getEnginesFromServer ");
    try {
      let json = await getEnginesFromServer(page, pageNum, searchType);
      default_engines = json.engines;
      engines_keys = json.keys;
    } catch (err) {
      default_engines = {};
      engines_keys = [];
    }
  }
  let latest = config.latest;

  if (default_engines == null || default_engines == {} || Object.keys(default_engines).length == 0) return {};

  //console.debug("background.js getEngines default_engines is:" + JSON.stringify(default_engines));
  //console.debug("background.js getEngines engines_keys is:" + JSON.stringify(engines_keys));
  let engines = mergeEngine(default_engines, user_engines, engines_keys, results_order_by);
  engines_keys = Object.keys(engines);
  //console.debug("background.js getEngines merged engines_keys is:" + engines_keys);
  if (searchType == "all") {
    let newKeys = engines_keys.slice(page * pageNum, (page + 1) * pageNum);
    if (!newKeys) return {};

    let newEngines = {};
    for (let key of newKeys) {
      newEngines[key] = engines[key];
    }
    //console.debug("background.js getEngines engines searchType is:" + searchType + ",page is:" + page + ", pageNum is:" + pageNum + ",engines is:" + JSON.stringify(newEngines));
    return newEngines;
  } else {
    let subtypeEngines = {};
    let newEngines = {};
    for (let key of engines_keys) {
      let engine = engines[key];
      if (engine && engine.type && searchType == engine.type) {
        subtypeEngines[key] = engines[key];
      }
    }
    //console.debug("background.js getEngines subtypeEngines_keys is:" + JSON.stringify(subtypeEngines) + ",total is:" + subtypeEngines.length);
    let subKeys = Object.keys(subtypeEngines);
    if (subKeys && subKeys.length) {
      if (subKeys.length < page * pageNum) return {};
      else {
        let newKeys = subKeys.slice(page * pageNum, (page + 1) * pageNum);
        for (let key of newKeys) {
          newEngines[key] = subtypeEngines[key];
        }
      }
    }

    //console.debug("background.js getEngines engines searchType is:" + searchType + ",page is:" + page + ", pageNum is:" + pageNum + ",engines is:" + JSON.stringify(newEngines));
    return newEngines;
  }
}

function mergeEngine(default_engines, user_engines, default_engines_keys, results_order_by) {
  let engines = {};
  let engines_keys = [];
  if (results_order_by == "system_default_first") {
    for (let key of default_engines_keys) {
      engines[key] = default_engines[key];
    }

    let user_engines_keys = Object.keys(user_engines);
    for (let key of user_engines_keys) {
      engines[key] = user_engines[key];
    }
  } else {
    let user_engines_keys = Object.keys(user_engines);
    for (let key of user_engines_keys) {
      engines[key] = user_engines[key];
    }
    for (let key of default_engines_keys) {
      engines[key] = default_engines[key];
    }
  }

  //console.debug("background.js mergeEngine request  is: " + JSON.stringify(engines));

  return engines;
}

async function config_verify(request, sendResponse) {
  //console.debug("background.js config_verify request  is: " + JSON.stringify(request));
  let name = request.name;
  let shortname = request.shortname;
  let parserTemplate = request.parser;
  let url = request.url;
  let parserName = shortname + "Parser";
  let searcherName = shortname + "Searcher";
  let type = request.type;
  let keyword = request.keyword;
  let method = request.method;
  let selector = request.selector;
  let keyword_encode = request.keyword_encode;
  let searcherTemplate = request.searcher;
  if ((keyword_encode = null)) keyword_encode = "";

  let loc = document.createElement("a");
  loc.href = url;
  let protocol = loc.protocol;
  let host = loc.host;
  let port = loc.port;

  let site = protocol + "//" + host;
  if (!port) site = protocol + "//" + host + ":" + port;
  let source = "<a href='" + site + "' target='_blank'>" + name + "</a>";

  try {
    let results = [];
    //console.debug("background.js config_verify url  is:  " + url + "  ,keyword is:" + keyword + ",type is:" + type + ",method is:" + method);
    if (method == "NEWTAB" || method == "NEWTAB_IFRAME") {
      if (keyword_encode) {
        let searchkeyword = keyword.split(" ").join(keyword_encode);
        url = url.replace(/searchkeyword/g, searchkeyword);
      } else {
        let searchkeyword = encodeURIComponent(keyword);
        url = url.replace(/searchkeyword/g, searchkeyword);
      }
      console.debug("background.js config_verify newTab url  is:" + url + ",keyword is:" + keyword);

      results = await searchNewTab(url, method, keyword, source, parserName, parserTemplate, selector, searcherName, searcherTemplate);
    } else if (method == "GET_IFRAME") {
      //to do
      results = [{ link: url, linkText: "test", desc: "test", source: source, keyword: keyword, url: url, type: "music" }];
    } else {
      if (keyword_encode) {
        let searchkeyword = keyword.split(" ").join(keyword_encode);
        url = url.replace(/searchkeyword/g, searchkeyword);
      } else {
        let searchkeyword = encodeURIComponent(keyword);
        url = url.replace(/searchkeyword/g, searchkeyword);
      }
      let parserFunc;
      if (parserTemplate != "default") {
        template = base64DecodeUnicode(parserTemplate);
        parserFunc = buildParser(parserName, type, template);
        if (typeof parserFunc !== "function") {
          sendResponse({ request: request, results: [] });
        }
      } else {
        parserFunc = window[parserName];
        if (typeof parserFunc !== "function") {
          console.info("background.js config_verify parserFunc in not function ,exit!");
          sendResponse({ request: request, results: [] });
        }
      }
      if (method == "GET") {
        searcherName = "defaultSearcher";
        searcherTemplate = "default";
      }
      //console.debug("background.js search createWorker url  is: " + url + " ,keyword is:" + keyword + ",type is:" + type);
      results = await createWorker(keyword, url, source, parserFunc, searcherName, searcherTemplate);
    }

    //console.debug("background.js search url is: " + url + " , results : " + JSON.stringify(results));
    sendResponse({ request: request, results: results });

    return;
  } catch (err) {
    sendResponse({ request: request, results: [] });

    return;
  }
}

// Because http requests coming through the extension API have to be processed
// super fast, so can't use await/async function.
function changeRequestHeaders(details) {
  let url = details.url;
  let referer;
  let host;
  let domain;
  if (url && url.split("/") && url.split("/").length > 3) {
    let protocol = url.split("/")[0];
    if (protocol && protocol.indexOf("http") == 0) {
      host = url.split("/")[2];
      referer = protocol + "//" + host;
      let splits = host.split(".");
      let len = splits.length;
      domain = splits[len - 2] + "." + splits[len - 1];
    }
  }
  if (!referer) referer = url;
  if (referer.indexOf("proxyit") != -1 || referer.indexOf("iproxy") != -1 || referer.indexOf("idai.li") != -1) {
    referer = "https://jubt.net";
  }
  //console.debug("background.js webRequest referer is :" + referer);

  let headers = details.requestHeaders;
  let newHeaders = new Array();
  let policySet = false;
  let sameSiteSet = false;
  let referSet = false;

  for (var i = 0; i < headers.length; ++i) {
    if (headers[i].name.toLowerCase() == "referer") {
      //console.debug("background.js onHeadersReceived  headers 0 is: " + JSON.stringify(headers[i].value));
      if (headers[i].value.indexOf("proxyit") != -1 || headers[i].value.indexOf("iproxy") != -1 || headers[i].value.indexOf("idai.li") != -1) {
        headers[i].value = "https://jubt.net";
      }
      referSet = true;
      newHeaders.push(headers[i]);
    } else {
      newHeaders.push(headers[i]);
    }
  }

  if (!referSet) {
    if (referer == "https://jubt.net") {
      newHeaders.push({
        name: "Referer",
        value: referer,
      });
    }
  }

  //console.debug("background.js onBeforeSendHeaders url is: " + url + " ,headers is:" + JSON.stringify(newHeaders));
  return { requestHeaders: newHeaders };
}

chrome.webRequest.onBeforeSendHeaders.addListener(changeRequestHeaders, { urls: ["<all_urls>"], types: ["image", "media", "sub_frame", "xmlhttprequest", "main_frame", "object"] }, ["requestHeaders", "blocking", "extraHeaders"]);

async function getMoreEngines(page, pageNum, searchType) {
  //console.debug("background.js getEngines engines is null ,getEnginesFromServer ");
  let engines = {},
    engines_keys = [];
  try {
    let json = await getMoreEnginesFromServer(page, pageNum, searchType);
    //console.debug("background.js getEngines engines is:" + JSON.stringify(json));
    engines = json.engines;
    engines_keys = json.keys;
  } catch (err) {
    engines = {};
    engines_keys = [];
  }

  return engines;
}
