async function defaultSearcher(url, keyword) {
  try {
    let response = await httpGet(url);
    //console.debug("searcher.js er httpGet response  :" + JSON.stringify(response));
    return response.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function jiumodiarySearcher(url, keyword) {
  try {
    //console.debug("searcher.js jiumodiarySearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/init_hubs.php";
    var unix = Math.round(+new Date() / 1000);
    //keyword = encodeURIComponent(keyword);
    //console.debug("searcher.js jiumodiarySearcher encodeURIComponent keyword :" + keyword + ",keyword is:" + keyword);
    let body = "q=" + keyword + "&remote_ip=&time_int=" + unix;
    //console.debug("searcher.js jiumodiarySearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js jiumodiarySearcher response1 :" + response1);
    if (response1 && Object.keys(response1).length == 2) {
      let body = response1.body;
      let json1 = JSON.parse(body);
      if (json1.status == "succeed") {
        let id = json1.id;
        let url2 = url + "/ajax_fetch_hubs.php";
        let body2 = "id=" + id + "&set=0";
        let response2 = await httpPost(url2, "application/x-www-form-urlencoded", body2);
        //console.debug("searcher.js jiumodiarySearcher responser2: " + JSON.stringify(response2));
        if (response2 && Object.keys(response2).length == 2) {
          let json2 = JSON.parse(response2.body);
          //console.debug("searcher.js jiumodiarySearcher json2: " + JSON.stringify(json2));
          if (json2.status == "succeed") {
            let results = json2.sources;
            //console.debug("searcher.js jiumodiarySearcher results: " + JSON.stringify(results));
            return results;
          }
        } else {
          return null;
        }
      }
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function hkb123Searcher(url, keyword) {
  try {
    //console.debug("searcher.js hkb123Searcher url  :" + url + ",keyword is:" + keyword);
    //let url1 = "https://s.hkb123.com/e/search/";

    let url1 = url.replace("www", "s") + "/e/search/";

    keyword = encodeURIComponent(keyword);
    let body = "show=title%2Cftitle%2Cactor&keyboard=" + keyword;
    //console.debug("searcher.js hkb123Searcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js hkb123Searcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js hkb123Searcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function ys88Searcher(url, keyword) {
  try {
    //console.debug("searcher.js ys88Searcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/search/";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword + "&submit=";
    //console.debug("searcher.js ys88Searcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js ys88Searcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js ys88Searcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function xunbodySearcher(url, keyword) {
  try {
    //console.debug("searcher.js xunbodySearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?m=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword + "&submit=%E6%90%9C+%E7%B4%A2";
    //console.debug("searcher.js xunbodySearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js xunbodySearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js xunbodySearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function yizidySearcher(url, keyword) {
  try {
    //console.debug("searcher.js yizidySearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?s=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "typeid=2&wd=" + keyword;
    //console.debug("searcher.js yizidySearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js yizidySearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js yizidySearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function okzywSearcher(url, keyword) {
  try {
    //console.debug("searcher.js okzywSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?m=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword + "&submit=search";
    //console.debug("searcher.js okzywSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js okzywSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js okzywSearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function mahuazySearcher(url, keyword) {
  try {
    //console.debug("searcher.js mahuazySearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?m=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword + "&submit=search";
    //console.debug("searcher.js mahuazySearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js mahuazySearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js mahuazySearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function kuyunzywSearcher(url, keyword) {
  try {
    //console.debug("searcher.js kuyunzywSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?m=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword;
    //console.debug("searcher.js kuyunzywSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js kuyunzywSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js kuyunzywSearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function zuidazy4Searcher(url, keyword) {
  try {
    //console.debug("searcher.js zuidazy4Searcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?m=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword + "&submit=search";
    //console.debug("searcher.js zuidazy4Searcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js zuidazy4Searcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js zuidazy4Searcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function btmaoSearcher(url, keyword) {
  try {
    //console.debug("searcher.js btmaoSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/index.php?s=vod-search";
    keyword = encodeURIComponent(keyword);
    let body = "wd=" + keyword + "&ok=%E6%90%9C%E7%B4%A2";
    //console.debug("searcher.js btmaoSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js btmaoSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js btmaoSearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function dy2018Searcher(url, keyword) {
  try {
    //console.debug("searcher.js dy2018Searcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/e/search/index.php";
    keyword = encodeURIComponent(keyword);
    let body = "show=title&tempid=1&keyboard=%CA%B3%CC%C3&Submit=%C1%A2%BC%B4%CB%D1%CB%F7";
    //console.debug("searcher.js dy2018Searcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js dy2018Searcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js dy2018Searcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function xiaodiaoSearcher(url, keyword) {
  try {
    //console.debug("searcher.js xiaopianSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/e/search/index.php";
    keyword = encodeURIComponent(keyword);
    let body = "show=title&tempid=1&keyboard=%CA%B3%CC%C3&Submit=%C1%A2%BC%B4%CB%D1%CB%F7";
    //console.debug("searcher.js xiaopianSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js xiaopianSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js xiaopianSearcher response1 keys is :" + Object.keys(response1));
    if (response1 && Object.keys(response1).length == 2) {
      return response1.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function ygdy8Searcher(url, keyword) {
  try {
    let utf8Keyword = encodeURIComponent(keyword);
    let gbkKeyword = GBK.URI.encodeURI(keyword);
    url = url.replace(utf8Keyword, gbkKeyword);
    //console.debug("searcher.js ygdy8Searcher url  :" + url + ",keyword is:" + keyword + ",gbkKeyword is:" + gbkKeyword + ",utf8Keyword is:" + utf8Keyword);
    let response = await httpGet(url, "arraybuffer");
    let dataView = new DataView(response.body);
    let decoder = new TextDecoder("GBK");
    let gbkResponse = decoder.decode(dataView);
    //console.debug("searcher.js er httpGet response  :" + gbkResponse);
    return gbkResponse;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function coreacukSearcher(url, keyword) {
  try {
    //console.debug("searcher.js coreacukSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/search/api/search";
    //keyword = encodeURIComponent(keyword);
    let body = '{"basicQuery":{"count":10,"searchCriteria":"' + keyword + '","offset":0,"sortByDate":false},"facetMap":{}}';
    //console.debug("searcher.js coreacukSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js coreacukSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js coreacukSearcher response1 keys is :" + Object.keys(response1));

    return response1.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function semanticscholarSearcher(url, keyword) {
  try {
    //console.debug("searcher.js semanticscholarSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/api/1/search";
    //keyword = encodeURIComponent(keyword);
    let body =
      '{"queryString":"' +
      keyword +
      '","page":1,"pageSize":10,"sort":"relevance","authors":[],"coAuthors":[],"venues":[],"yearFilter":null,"requireViewablePdf":false,"publicationTypes":[],"externalContentTypes":[],"fieldsOfStudy":[],"useFallbackRankerService":false,"useFallbackSearchCluster":false,"hydrateWithDdb":false,"includeTldrs":true,"performTitleMatch":true,"includeBadges":true}';
    //console.debug("searcher.js coreacukSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js semanticscholarSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js semanticscholarSearcher response1 keys is :" + Object.keys(response1));

    return response1.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function newdaySearcher(url, keyword) {
  try {
    //console.debug("searcher.js newdaySearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/api/disk/search";
    keyword = encodeURIComponent(keyword);
    let body = "keyword=" + keyword + "&scope=title&mode=auto&size=&min_size=0&max_size=0&time=&start_date=&end_date=&order=match&page=1";
    //console.debug("searcher.js newdaySearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded; charset=UTF-8", body);
    //console.debug("searcher.js newdaySearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js newdaySearcher response1 keys is :" + Object.keys(response1));

    return response1.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function meijuttSearcher(url, keyword) {
  try {
    let gbkKeyword = GBK.URI.encodeURI(keyword);
    //console.debug("searcher.js ygdy8Searcher url  :" + url + ",keyword is:" + keyword + ",gbkKeyword is:" + gbkKeyword + ",utf8Keyword is:" + utf8Keyword);
    let url1 = url + "/search/index.asp";
    let body = "searchword=" + gbkKeyword;
    //console.debug("searcher.js newdaySearcher body  :" + body + ",keyword is:" + keyword);
    let response = await httpPost(url1, "application/x-www-form-urlencoded", body, "arraybuffer");
    let dataView = new DataView(response.body);
    let decoder = new TextDecoder("GBK");
    let gbkResponse = decoder.decode(dataView);
    //console.debug("searcher.js er httpGet response  :" + gbkResponse);
    //console.debug("searcher.js newdaySearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js newdaySearcher response1 keys is :" + Object.keys(response1));

    return gbkResponse;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function txmeijuSearcher(url, keyword) {
  try {
    //console.debug("searcher.js newdaySearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/tv/search";
    keyword = encodeURIComponent(keyword);
    let body = "s=" + keyword;
    //console.debug("searcher.js newdaySearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js newdaySearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js newdaySearcher response1 keys is :" + Object.keys(response1));

    return response1.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function ciliproSearcher(url, keyword) {
  try {
    //console.debug("searcher.js ciliproSearcher url  :" + url + ",keyword is:" + keyword);
    let url1 = url + "/search";
    keyword = encodeURIComponent(keyword);
    let body = "keyword=" + keyword;
    //console.debug("searcher.js ciliproSearcher body  :" + body + ",keyword is:" + keyword);
    let response1 = await httpPost(url1, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js ciliproSearcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js ciliproSearcher response1 keys is :" + Object.keys(response1));

    return response1.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function xslistSearcher(url, keyword) {
  return new Promise(async function (resolve) {
    try {
      //console.debug("searcher.js xlistSearcher keyword is:" + keyword + ",url is:" + url);
      let blob = await httpGet(keyword, "blob");

      let response = await fetch(keyword);
      let data = await response.blob();
      let splits = keyword.split(".");
      let ext = splits[splits.length - 1];
      let filename = Date.now() + "." + ext;
      let metadata = {
        type: "image/" + ext,
      };
      let file = new File([data], filename, metadata);
      //console.debug("searcher.js xlistSearcher filename is:" + file.name + ",filetype is:" + file.type);

      let formData = new FormData();
      formData.processData = false;
      formData.contentType = false;
      formData.append("pic", file);
      formData.append("lg", "zh");

      let xhr = new XMLHttpRequest();

      xhr.onload = function (e) {
        if (xhr.status == 200) {
          //console.debug("searcher.js xlistSearcher response is:" + xhr.response);
          if (xhr.response) resolve(xhr.response);
          else resolve("");
        } else {
          resolve("");
        }
      };
      xhr.onerror = function (err) {
        resolve("");
      };
      xhr.ontimeout = function (err) {
        resolve("");
      };
      xhr.open("POST", url, true);
      xhr.timeout = 20000;
      xhr.send(formData);
    } catch (err) {
      resolve("");
    }
  });
}

async function dialoguemoeSearcher(url, keyword) {
  try {
    //console.debug("searcher.js newdaySearcher url  :" + url + ",keyword is:" + keyword);
    let body = '{"text":"' + keyword + '","bangumi_id":"","duplicate":false,"sort_values":"","history":[]}';
    //console.debug("searcher.js newdaySearcher body  :" + body + ",keyword is:" + keyword);
    let headers = { Referer: "http://dialogue.moe/" };
    let response = await httpPost(url, "application/json", body, headers);
    //console.debug("searcher.js dialoguemoeSearcher response1 :" + JSON.stringify(response));
    //console.debug("searcher.js dialoguemoeSearcher response1 keys is :" + Object.keys(response1));

    return response.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function gangqinpuSearcher(url, keyword) {
  try {
    let utf8Keyword = encodeURIComponent(keyword);
    let gbkKeyword = GBK.URI.encodeURI(keyword);
    url = url.replace(utf8Keyword, gbkKeyword);
    //console.debug("searcher.js gangqinpuSearcher url  :" + url + ",keyword is:" + keyword + ",gbkKeyword is:" + gbkKeyword + ",utf8Keyword is:" + utf8Keyword);
    let response = await httpGet(url, "arraybuffer");
    let dataView = new DataView(response.body);
    let decoder = new TextDecoder("GBK");
    let gbkResponse = decoder.decode(dataView);
    //console.debug("searcher.js er httpGet response  :" + gbkResponse);
    return gbkResponse;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function sooopuSearcher(url, keyword) {
  try {
    let utf8Keyword = encodeURIComponent(keyword);
    let gbkKeyword = GBK.URI.encodeURI(keyword);
    url = url.replace(utf8Keyword, gbkKeyword);
    //console.debug("searcher.js sooopuSearcher url  :" + url + ",keyword is:" + keyword + ",gbkKeyword is:" + gbkKeyword + ",utf8Keyword is:" + utf8Keyword);
    let response = await httpGet(url, "arraybuffer");
    let dataView = new DataView(response.body);
    let decoder = new TextDecoder("GBK");
    let gbkResponse = decoder.decode(dataView);
    //console.debug("searcher.js er httpGet response  :" + gbkResponse);
    return gbkResponse;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function cnscoreSearcher(url, keyword) {
  try {
    //console.debug("searcher.js cnscoreSearcher url  :" + url + ",keyword is:" + keyword);
    keyword = encodeURIComponent(keyword);
    let body = "keyword=" + keyword + "&scoretype=0";
    //console.debug("searcher.js cnscoreSearcher body  :" + body + ",keyword is:" + keyword);
    let response = await httpPost(url, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js cnscoreSearcher response :" + JSON.stringify(response));
    //console.debug("searcher.js cnscoreSearcher response1 keys is :" + Object.keys(response));

    return response.body;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

async function ape8Searcher(url, keyword) {
  try {
    //console.debug("searcher.js ape8Searcher url  :" + url + ",keyword is:" + keyword);

    keyword = encodeURIComponent(keyword);
    let body = "tempid=2&tbname=music&show=title%2Csinger&field=1&keyboard=" + keyword;
    //console.debug("searcher.js ape8Searcher body  :" + body + ",keyword is:" + keyword);
    let response = await httpPost(url, "application/x-www-form-urlencoded", body);
    //console.debug("searcher.js ape8Searcher response1 :" + JSON.stringify(response1));
    //console.debug("searcher.js ape8Searcher response1 keys is :" + Object.keys(response1));
    if (response && Object.keys(response).length == 2) {
      return response.body;
    }
    return null;
  } catch (err) {
    console.info("searcher.js  err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}
