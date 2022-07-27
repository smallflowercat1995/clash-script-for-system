importScripts("/js/utils.js");
importScripts("/js/gbk.js");
importScripts("/js/searcher/searcher.js");

self.addEventListener(
  "message",
  async function (e) {
    //console.debug("worker.js receive data:" + JSON.stringify(e.data));
    let request = e.data;
    let keyword = request.keyword;
    let url = request.url;
    let source = request.source;
    let searcherName = request.searcherName;
    let searcherTemplate = request.searcherTemplate;
    let results = null;
    try {
      if (searcherName == "defaultSearcher") {
        results = await defaultSearcher(url, keyword);
      } else {
        //https://stackoverflow.com/questions/969743/how-do-i-call-a-dynamically-named-method-in-javascript

        if (searcherTemplate == "default") {
          let searcherFunc = self[searcherName];
          if (typeof searcherFunc == "function") {
            results = await searcherFunc(url, keyword);
          } else {
            searcher = self["defaultSearcher"];
            results = await searcher(url, keyword);
          }
        } else {
          searcherTemplate = base64DecodeUnicode(searcherTemplate);
          //console.debug("worker.js jiumodiarySearcher searcherName is:" + searcherName + ",searcherTemplate is:" + searcherTemplate);
          let searcherFunc = buildSearcherAsync(searcherName, searcherTemplate);
          results = await searcherFunc(url, keyword);
        }
        //console.debug("worker.js searcher results is:" + JSON.stringify(results));
      }
    } catch (err) {
      console.info("worker.js error is: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    }

    //console.debug("worker.js searcher results is:" + JSON.stringify(results));
    msg = {
      keyword: keyword,
      url: url,
      source: source,
      results: results,
    };
    self.postMessage(msg);
  },
  false
);
