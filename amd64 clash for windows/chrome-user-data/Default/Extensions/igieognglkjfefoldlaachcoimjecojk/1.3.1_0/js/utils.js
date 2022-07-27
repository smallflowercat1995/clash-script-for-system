var plugin_version = "1.3.1";
var local_engines_version = "2020090909";
var domains = ["https://api.jubt.me", "https://api.ijubt.net", "https://api.ijubt.ga", "https://api.ijubt.cf", "https://api.ijubt.gq", "https://api.ijubt.ml", "https://api.jubt.ml", "https://api.jubt.ga", "https://api.jubt.cf", "https://api.jubt.gq"];

var juso_domains = ["https://juso.best", "https://juso.xyz"];

var VERSION_URL = "https://api.jubt.me/version.php?plugin_version=" + plugin_version;
var INDEX_UPGRADE_URL = "https://api.jubt.me/index" + plugin_version + ".php?upgrade=1&plugin_version=" + plugin_version;
var IJUBT_VERSION_URL = "https://api.ijubt.cf/version.php?plugin_version=" + plugin_version;
var IJUBT_INDEX_UPGRADE_URL = "https://api.ijubt.cf/index" + plugin_version + ".php?upgrade=1&plugin_version=" + plugin_version;
var INDEX_URL = "https://api.jubt.me/index" + plugin_version + ".php";
var IJUBT_INDEX_URL = "https://api.ijubt.me/index" + plugin_version + ".php";

var ADS_URL = "https://api.jubt.me/ads.php";
var IJUBT_ADS_URL = "https://api.ijubt.me/ads.php";

async function getEnginesFromServer(page, pageNum, type = "all") {
  for (let domain of domains) {
    try {
      let index_url = domain + "/index" + plugin_version + ".php" + "?page=" + page + "&pageNum=" + pageNum + "&type=" + type;
      let data = await httpGet(index_url);
      //console.debug("background.js getEnginesFromServer :" + data);
      let json = JSON.parse(data.body);
      return json;
    } catch (err) {
      console.info("utils.js getEnginesFromServer error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getMoreEnginesFromServer(page, pageNum, type = "all") {
  for (let domain of domains) {
    try {
      let more_url = domain + "/more" + plugin_version + ".php" + "?page=" + page + "&pageNum=" + pageNum + "&type=" + type;
      //console.debug("background.js getMoreEnginesFromServer more_url:" + more_url);
      let data = await httpGet(more_url);

      try {
        let json = JSON.parse(data.body);
        //console.debug("background.js getMoreEnginesFromServer :" + JSON.stringify(json));
        return json;
      } catch (err) {
        return {};
      }
    } catch (err) {
      console.info("utils.js getMoreEnginesFromServer error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getJusoSummary(page, pageNum, keyword) {
  for (let domain of juso_domains) {
    try {
      let url = domain + "/index.php?page=" + page + "&pageNum=" + pageNum + "&keyword=" + keyword + "&type=summary";
      //console.debug("background.js getMoreEnginesFromServer more_url:" + more_url);
      let data = await httpGet(url);

      try {
        let json = JSON.parse(data.body);
        //console.debug("background.js getMoreEnginesFromServer :" + JSON.stringify(json));
        return json;
      } catch (err) {
        return {};
      }
    } catch (err) {
      console.info("utils.js getMoreEnginesFromServer error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getJusoDetail(page, pageNum, keyword) {
  for (let domain of juso_domains) {
    try {
      let url = domain + "/index.php?page=" + page + "&pageNum=" + pageNum + "&keyword=" + keyword + "&type=detail";
      //console.debug("background.js getMoreEnginesFromServer more_url:" + more_url);
      let data = await httpGet(url);

      try {
        let json = JSON.parse(data.body);
        //console.debug("background.js getMoreEnginesFromServer :" + JSON.stringify(json));
        return json;
      } catch (err) {
        return {};
      }
    } catch (err) {
      console.info("utils.js getMoreEnginesFromServer error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getMoreToolsData() {
  for (let domain of domains) {
    try {
      let more_url = domain + "/more.php";
      let data = await httpGet(more_url);
      json = JSON.parse(data.body);
      return json;
    } catch (err) {
      console.info("utils.js getAdsData error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getAdsData() {
  for (let domain of domains) {
    try {
      let ads_url = domain + "/ads2.0.php";
      let data = await httpGet(ads_url);
      json = JSON.parse(data.body);
      return json;
    } catch (err) {
      console.info("utils.js getAdsData error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getAds() {
  try {
    let json = await getAdsData();
    //console.debug("background.js ijubt getAds :" + JSON.stringify(json));
    let banner_ads = {};
    let menu_ads = {};
    let flow_ads = {};
    let popup_menu = {};
    for (let key in json) {
      let item = json[key];
      //console.debug("background.js ijubt getAds item is:" + JSON.stringify(item));
      if (item && item.type == "banner_ads") {
        banner_ads[key] = item;
      }
      if (item && item.type == "menu") {
        menu_ads[key] = item;
      }
      if (item && item.type == "flow_ads") {
        flow_ads[key] = item;
      }
      if (item && item.type == "popup_menu") {
        popup_menu[key] = item;
      }
    }
    return {
      banner_ads: banner_ads,
      menu_ads: menu_ads,
      flow_ads: flow_ads,
      popup_menu: popup_menu,
    };
  } catch (err) {
    console.info("utils.js getAds error is: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));

    return {
      banner_ads: {},
      menu_ads: {},
      flow_ads: {},
      popup_menu: {},
    };
  }
}

async function getFlowAds() {
  let ads = await getAds();
  let flow_ads = ads.flow_ads;
  //console.debug("background.js search flow_ads is:" + JSON.stringify(flow_ads));
  let hrefs = [];
  for (let key in flow_ads) {
    let item = flow_ads[key];
    let href = item.url;
    let desc = item.desc;
    let name = item.name;
    let shortname = item.shortname;
    hrefs.push({ link: href, linkText: name, desc: desc, source: shortname, keyword: desc, url: href, type: "AD" });
  }
  return hrefs;
}

async function getStorage() {
  return new Promise(function (resolve, reject) {
    chrome.storage.local.get(["keyword", "results", "engine_number_per_search", "results_per_engine", "engines", "user_engines", "engines_keys", "latest", "results_order_by", "user_categories", "categories", "prompt"], async function (config) {
      //console.debug("background.js getStorage config is :" + JSON.stringify(config));
      if (config == null || Object.keys(config).length == 0) {
        config = {};
        config.latest = local_engines_version;
        config.results_order_by = "system_default_first";
        //let user_engines = await getSyncStorageItem("user_engines");
        //config.user_engines = user_engines;
        //let user_categories = await getSyncStorageItem("user_categories");
        //config.user_categories = user_categories;
        config.user_engines = {};
        config.user_categories = {};
        let categories = {
          magnet: { category_name: chrome.i18n.getMessage("category_magnet"), category_value: "magnet" },
          movie: { category_name: chrome.i18n.getMessage("category_movie"), category_value: "movie" },
          acg: { category_name: chrome.i18n.getMessage("category_acg"), category_value: "acg" },
          pan: { category_name: chrome.i18n.getMessage("category_pan"), category_value: "pan" },
          book: { category_name: chrome.i18n.getMessage("category_book"), category_value: "book" },
          music: { category_name: chrome.i18n.getMessage("category_music"), category_value: "music" },
          search_engine: { category_name: chrome.i18n.getMessage("category_search_engine"), category_value: "search_engine" },
          scholar: { category_name: chrome.i18n.getMessage("category_scholar"), category_value: "scholar" },
        };

        config.categories = categories;
        let data = await getLatestEngines(config);
        //console.debug("background.js getStorage getLastestEngines is :" + JSON.stringify(data));
        if (data.upgrade == 1) {
          config["engines_keys"] = data.keys;
          config["engines"] = data.engines;
        } else {
          config["engines"] = {};
        }
        var config = { engine_number_per_search: 5, results_per_engine: 3, keyword: "", results: [], engines: config["engines"], user_engines: config["user_engines"], user_categories: config["user_categories"], engines_keys: config["engines_keys"], latest: local_engines_version, prompt: 0 };
        resolve(config);
      }
      if (config["latest"] == null) {
        config["latest"] = local_engines_version;
      }
      if (config["engine_number_per_search"] == null) {
        config["engine_number_per_search"] = 5;
      }
      if (config["results_per_engine"] == null) {
        config["results_per_engine"] = 3;
      }
      if (config["keyword"] == null) {
        config["keyword"] = "";
      }
      if (config["results"] == null) {
        config["results"] = [];
      }
      if (config["user_engines"] == null || Object.keys(config["user_engines"]).length == 0) {
        //let user_engines = await getSyncStorageItem("user_engines");
        //config["user_engines"] = user_engines;
        config["user_engines"] = {};
      }
      if (config["results_order_by"] == null) {
        config["results_order_by"] = "system_default_first";
      }
      if (config["categories"] == null || Object.keys(config["categories"]).length == 0) {
        let categories = {
          magnet: { category_name: chrome.i18n.getMessage("category_magnet"), category_value: "magnet" },
          movie: { category_name: chrome.i18n.getMessage("category_movie"), category_value: "movie" },
          acg: { category_name: chrome.i18n.getMessage("category_acg"), category_value: "acg" },
          pan: { category_name: chrome.i18n.getMessage("category_pan"), category_value: "pan" },
          book: { category_name: chrome.i18n.getMessage("category_book"), category_value: "book" },
          music: { category_name: chrome.i18n.getMessage("category_music"), category_value: "music" },
          search_engine: { category_name: chrome.i18n.getMessage("category_search_engine"), category_value: "search_engine" },
          scholar: { category_name: chrome.i18n.getMessage("category_scholar"), category_value: "scholar" },
        };

        config["categories"] = categories;
      }
      if (config["user_categories"] == null || Object.keys(config["user_categories"]).length == 0) {
        //let user_categories = await getSyncStorageItem("user_categories");
        //config.user_categories = user_categories;
        config.user_categories = {};
      }
      if (config["engines"] == null || Object.keys(config["engines"]).length == 0 || config["engines_keys"] == null) {
        let data = await getLatestEngines(config);
        config.latest = local_engines_version;
        config.user_engines = {};
        if (data.upgrade == 1) {
          config["engines_keys"] = data.keys;
          config["engines"] = data.engines;
        }
      }
      if (config["prompt"] == null) {
        config["prompt"] = local_engines_version;
      }

      resolve(config);
    });
  });
}

async function getSyncStorageItem(key) {
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.get([key], async function (config) {
      console.debug("background.js getStorageItem config is :" + JSON.stringify(config));
      resolve(config.key);
    });
  });
}

async function getStorageItem(key) {
  return new Promise(function (resolve, reject) {
    chrome.storage.local.get([key], async function (config) {
      console.debug("background.js getStorageItem key is:" + key + ",config is :" + JSON.stringify(config));
      resolve(config.key);
    });
  });
}

async function getLatestEngines(config) {
  for (let domain of domains) {
    try {
      let version_url = domain + "/version.php?plugin_version=" + plugin_version;
      let update_url = domain + "/index" + plugin_version + ".php?upgrade=1&plugin_version=" + plugin_version;
      let result = await getLastestEnginesData(config, version_url, update_url);
      if (result && Object.keys(result).length > 0) return result;
    } catch (err) {
      console.info("utils.js getLatestEngines error,continue to call ,domain is :" + domain);
    }
  }
  return {};
}

async function getLastestEnginesData(config, version_url, update_url) {
  try {
    console.debug("utils.js getLatestEngines version_url :" + version_url);
    console.debug("utils.js getLatestEngines index_url :" + update_url);
    //console.debug("utils.js getLatestEngines config:" + JSON.stringify(config));
    let latest;
    let user_engines;

    if (config == null || Object.keys(config).length == 0) {
      config = await getStorage();
      latest = config.latest;
      user_engines = config.user_engines;
    } else {
      latest = config.latest;
      user_engines = config.user_engines;
    }
    let info = await httpGet(version_url);
    //console.debug("utils.js getLatestEngines httpGet info:" + JSON.stringify(info));
    let version, upgrade, upgrade_url;
    if (info && info.body) {
      info = JSON.parse(info.body);
      version = info.version;
      upgrade = info.upgrade;
      upgrade_url = info.upgrade_url;
    } else {
      version = latest;
      upgrade = "no";
      upgrade_url = "https://bbs.ijubt.net/";
    }

    console.debug("utils.js getLatestEngines version:" + version + ",latest is:" + latest);

    if (latest < version) {
      let data = await httpGet(update_url);
      //console.debug("utils.js getLatestEngines upgrade to data :" + JSON.stringify(data.body));
      //console.debug("utils.js getLatestEngines upgrade to data :" + data.body);
      let json = JSON.parse(data.body);
      //let json = data.body;
      let keys = json.keys;
      let engines = json.engines;
      //console.debug("utils.js getLatestEngines keys:" + keys);
      //console.debug("utils.js getLatestEngines engines:" + JSON.stringify(engines));

      if (engines) {
        chrome.storage.local.set(
          {
            engines_keys: keys,
            engines: engines,
            latest: version,
          },
          async function () {
            let config = await getStorage();
            //console.debug("utils.js getLatestEngines upgrade :" + JSON.stringify(config));
          }
        );
      }

      return { upgrade: upgrade, upgrade_url: upgrade_url, keys: keys, engines: engines, version: version, latest: latest };
    } else {
      console.debug("utils.js getLatestEngines no need to upgrade ");
      return { upgrade: "no", upgrade_url: upgrade_url, version: version, latest: latest };
    }
  } catch (err) {
    console.info("utils.js getLatestEngines err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    throw err;
  }
}

function hashCode(s) {
  let h;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;

  return h & 0x7fffffff;
}

function getTimestamp() {
  let myDate = new Date();

  let timestamp =
    myDate.getFullYear() +
    "" +
    new String(myDate.getMonth() + 1).padStart(2, "0") +
    "" +
    new String(myDate.getDate()).padStart(2, "0") +
    "" +
    new String(myDate.getHours()).padStart(2, "0") +
    "" +
    new String(myDate.getMinutes()).padStart(2, "0") +
    "" +
    new String(myDate.getTime()).padStart(2, "0") +
    "" +
    Math.random();
  return timestamp;
}

//to base64
function base64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
      return String.fromCharCode("0x" + p1);
    })
  );
}

//base64 to ascii
function base64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
}

function localizeHtmlPage() {
  //Localize by replacing __MSG_***__ meta tags
  $(".localize").each(function (index, item) {
    var localizeKey = $(item).data("localize");
    $(item).html(chrome.i18n.getMessage(localizeKey));
    $(item).attr("placeholder", chrome.i18n.getMessage(localizeKey));
  });
}

function replace_i18n(obj, tag) {
  var msg = tag.replace(/__MSG_(\w+)__/g, function (match, v1) {
    return v1 ? chrome.i18n.getMessage(v1) : "";
  });

  if (msg != tag) obj.innerHTML = msg;
}

function localizeHtmlPage1() {
  // Localize using __MSG_***__ data tags
  var data = document.querySelectorAll("[data-localize]");

  for (var i in data)
    if (data.hasOwnProperty(i)) {
      var obj = data[i];
      var tag = obj.getAttribute("data-localize").toString();

      replace_i18n(obj, tag);
    }

  // Localize everything else by replacing all __MSG_***__ tags
  var page = document.getElementsByTagName("html");

  for (var j = 0; j < page.length; j++) {
    var obj = page[j];
    var tag = obj.innerHTML.toString();

    replace_i18n(obj, tag);
  }
}

function text2UTF8(str) {
  let uint8array = new TextEncoder("utf-8").encode(str);

  return new TextDecoder("utf-8").decode(uint8array);
}

function removeInlineScript(selectedElement) {
  let scripts = selectedElement.querySelectorAll("script");
  for (let script of scripts) {
    //console.debug("background.js scraperFactory remove script" + script.outerHTML);
    script.remove();
  }
  let links = selectedElement.querySelectorAll("link[href$='.js']");
  for (let link of links) {
    //console.debug("background.js scraperFactory remove script" + link.outerHTML);
    link.remove();
  }
  //https://www.w3schools.com/jsref/dom_obj_event.asp
  let elements = selectedElement.querySelectorAll(
    "*[onclick],*[onload],*[onunload],*[onchange],*[onmouseover],*[onmouseout],*[onmousedown],*[onmouseup],*[onkeydown],*[onkeypress],*[onkeyup],*[onsubmit],*[oncontextmenu],*[ondblclick],*[oninput],*[oninvalid],*[onscroll],*[onselect],*[onfocus],*[onfocusin],*[onfocusout],*[onblur],*[onresize],*[onshow]"
  );
  for (let element of elements) {
    //console.debug("background.js scraperFactory remove script" + link.outerHTML);
    element.removeAttribute("onclick");
    element.removeAttribute("onload");
  }

  let policies = selectedElement.querySelectorAll("meta[http-equiv='Content-Security-Policy']");
  for (let policy of policies) {
    policy.remove();
  }
  return selectedElement;
}

function replaceAll(content, search, replace) {
  return content.split(search).join(replace);
}

//If send http request in content scripts, since it lives in the same context with the webpage, it will be restricted by SOP, which will report mixed content warning
async function httpGet(url, responseType = "text", headers = {}) {
  //console.debug("utils.js getImageInfo url is:"+url);
  if (!url) {
    return Promise.resolve({ body: "", headers: {} });
  }

  let obj = this;
  return new Promise(function (resolve, reject) {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.timeout = 30000;
      //xhr.withCredentials = true;
      if (headers && Object.keys(headers).length > 0) {
        for (let key in headers) {
          let value = headers[key];
          xhr.setRequestHeader(key, value);
        }
      }
      //xhr.setRequestHeader("Accept", accept);
      //xhr.setRequestHeader("Referer", "https://www.jubt.cf");
      xhr.responseType = responseType;
      xhr.onload = function (e) {
        if (xhr.status == 200) {
          let headers = xhr.getAllResponseHeaders();
          let arr = headers.trim().split(/[\r\n]+/);
          let headerMap = {};
          arr.forEach(function (line) {
            let parts = line.split(": ");
            let header = parts.shift().toLowerCase();
            let value = parts.join(": ");
            if (headerMap[header]) headerMap[header] = headerMap[header] + ";" + value;
            else headerMap[header] = value;
          });
          resolve({ body: xhr.response, headers: headerMap });
        } else {
          resolve({ body: "", headers: {} });
        }
      };
      xhr.onerror = function (err) {
        console.info("utils.js httpRequest xhr.onerror, url is:" + url + " ," + JSON.stringify({ status: xhr.status, statusText: xhr.statusText }));
        resolve({ body: "", headers: {} });
      };
      xhr.ontimeout = function (err) {
        console.info("utils.js httpRequest xhr.timeout, url is: " + url + " ," + JSON.stringify({ status: xhr.status, statusText: xhr.statusText }));
        resolve({ body: "", headers: {} });
      };

      xhr.send();
    } catch (err) {
      console.info("utils.js httpRequest errors :" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
      resolve({ body: "", headers: {} });
    }
  });
}

async function httpPost(url, contentType = "application/x-www-form-urlencoded", body, responseType = "text", headers = {}) {
  //console.debug("utils.js getImageInfo url is:"+url);
  if (!url) {
    return Promise.resolve({ body: "", headers: {} });
  }

  let obj = this;
  return new Promise(function (resolve, reject) {
    try {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.timeout = 30000;
      //xhr.withCredentials = true;
      //xhr.setRequestHeader("Accept", accept);

      xhr.setRequestHeader("Content-type", contentType);
      xhr.responseType = responseType;
      if (headers && Object.keys(headers).length > 0) {
        for (let key in headers) {
          let value = headers[key];
          xhr.setRequestHeader(key, value);
        }
      }
      xhr.onload = function (e) {
        if (xhr.status == 200) {
          let headers = xhr.getAllResponseHeaders();
          //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));

          let arr = headers.trim().split(/[\r\n]+/);
          let headerMap = {};
          arr.forEach(function (line) {
            let parts = line.split(": ");
            let header = parts.shift().toLowerCase();
            let value = parts.join(": ");
            headerMap[header] = value;
          });
          resolve({ body: xhr.response, headers: headerMap });
        } else {
          resolve({ body: "", headers: {} });
        }
      };
      xhr.onerror = function (err) {
        console.info("utils.js httpRequest xhr.onerror, url is:" + url + "," + JSON.stringify({ status: xhr.status, statusText: xhr.statusText }));
        resolve({ body: "", headers: {} });
      };
      xhr.ontimeout = function (err) {
        console.info("utils.js httpRequest xhr.timeout, url is:" + url + "," + JSON.stringify({ status: xhr.status, statusText: xhr.statusText }));
        resolve({ body: "", headers: {} });
      };

      xhr.send(body);
    } catch (err) {
      console.info("utils.js httpRequest errors :" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
      resolve({ body: "", headers: {} });
    }
  });
}

function documentFactory(content) {
  try {
    let myDocument = document.implementation.createHTMLDocument("");

    let metasrc = myDocument.createElement("meta");
    metasrc.httpEquiv = "Content-Security-Policy";
    metasrc.content =
      "style-src 'self' filesystem http: https: 'unsafe-inline'; script-src 'self' 'unsafe-eval' ;child-src gap: filesystem http: https: data: blob: 'unsafe-inline' 'unsafe-eval' 'self' ;frame-src gap: filesystem http: https: data: blob: 'unsafe-inline' 'unsafe-eval' 'self'; object-src blob: 'unsafe-eval' 'self'";
    myDocument.head.appendChild(metasrc);

    let selectedElement = myDocument.createElement("div");
    selectedElement.setAttribute("id", "selectedElement");
    selectedElement.setAttribute("style", "display:none");
    //console.debug("background.js scraperFactory site is:" + site + ", content is: " + content);
    //for SVG , selectedElement.innerHTML=content have some problem,
    //if using selectedElement.innerHTML=content ,will thorw :Error while parsing the 'sandbox' attribute: 'allow-downloads' is an invalid sandbox flag.
    selectedElement.innerHTML = "<div>" + content + "</div>";

    //remove script releated content
    let policies = selectedElement.querySelectorAll("meta[http-equiv='Content-Security-Policy']");
    for (let policy of policies) {
      policy.remove();
    }

    //utils.js
    selectedElement = removeInlineScript(selectedElement);

    return selectedElement;
  } catch (err) {
    console.info("background.js scraperFactory error:" + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    return null;
  }
}

function relativeUrlToAbsolute(url, website) {
  //console.debug("scraper.js relativeUrlToAbsolute url is :" + url + " , website : " + this.site + " , host :" + this.host + ",protocol is:" + this.protocol + ",pathname is:" + this.pathname);
  let loc = document.createElement("a");
  loc.href = website;
  let protocol = loc.protocol;

  let host = loc.host;

  if (url.indexOf("data:image") === 0 || url.indexOf("javascript") === 0) {
    return url;
  } else if (url.indexOf("//") === 0) {
    return protocol + url;
  } else if (url.indexOf("/") === 0) {
    return protocol + "//" + host + url;
  } else if (url.indexOf("http") === 0) {
    return url;
  } else {
    //console.debug("scraper.js relativeUrlToAbsolute location is :" + this.location);
    let path = protocol + "//" + host + relPathToAbs(url);
    return path;
  }
}

//https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
function relPathToAbs(sRelPath) {
  //console.debug("scraper.js relativeUrlToAbsolute location is :" + this.location + " , relative path: " + sRelPath);
  var nUpLn,
    sDir = "",
    sPath = this.location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, "$1"));
  for (var nEnd, nStart = 0; (nEnd = sPath.indexOf("/../", nStart)), nEnd > -1; nStart = nEnd + nUpLn) {
    nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))[0].length;
    sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp("(?:\\/+[^\\/]*){0," + (nUpLn - 1) / 3 + "}$"), "/");
  }
  //console.debug("scraper.js relativeUrlToAbsolute after is :" + sDir + sPath.substr(nStart));
  return sDir + sPath.substr(nStart);
}

function buildParser(parserName, type, bodyTemplate) {
  bodyTemplate = bodyTemplate.replace("%parserName%", parserName);
  bodyTemplate = bodyTemplate.replace("%type%", type);
  //console.debug("utils.js buildParser bodyTemplate is :" + bodyTemplate);
  myfunc = new Function("content", "url", "source", "keyword", bodyTemplate);
  return myfunc;
}

function buildParser4NewTab(parserName, type, bodyTemplate) {
  bodyTemplate = bodyTemplate.replace("%parserName%", parserName);
  bodyTemplate = bodyTemplate.replace("%type%", type);
  //console.debug("utils.js buildParser bodyTemplate is :" + bodyTemplate);
  myfunc = new Function("url", "source", "keyword", bodyTemplate);
  return myfunc;
}

function buildSearcher(searcherName, bodyTemplate) {
  bodyTemplate = bodyTemplate.replace("%searcherName%", searcherName);

  let myfunc = new Function("url", "keyword", bodyTemplate);
  return myfunc;
}

function buildSearcherAsync(searcherName, bodyTemplate) {
  bodyTemplate = bodyTemplate.replace("%searcherName%", searcherName);
  //console.debug("utils.js buildSearcherAsync  is :" + searcherName);
  //console.debug("utils.js buildSearcherAsync bodyTemplate is :" + bodyTemplate);
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
  let AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
  let myfunc = new AsyncFunction("url", "keyword", bodyTemplate);
  return myfunc;
}

function dataURL2Blob(dataUrl) {
  let arr = dataUrl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * Trigger the specified event on the specified element.
 * @param  {Object} elem  the target element.
 * @param  {String} event the type of the event (e.g. 'click').
 */
function triggerEvent(elem, event) {
  var clickEvent = new Event(event); // Create the event.
  elem.dispatchEvent(clickEvent); // Dispatch the event.
}
