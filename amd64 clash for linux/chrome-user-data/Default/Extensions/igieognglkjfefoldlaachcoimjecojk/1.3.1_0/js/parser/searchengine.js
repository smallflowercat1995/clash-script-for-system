//search engine
function googleParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js googleParser content is: " + content);
  //console.debug("parser.js googleParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.rc>div>a");
  //console.debug("parser.js googleParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js googleParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "search_engine" });
      }
    }
  }

  return hrefs;
}

function mijisouParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mijisouParser content is: " + content);
  //console.debug("parser.js mijisouParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h4.result_header a");
  //console.debug("parser.js mijisouParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mijisouParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "search_engine" });
      }
    }
  }

  return hrefs;
}

function bingParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bingParser content is: " + content);
  //console.debug("parser.js bingParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#b_results li.b_algo h2 a");
  //console.debug("parser.js bingParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bingParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "search_engine" });
      }
    }
  }

  return hrefs;
}

function baiduParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js baiduParser content is: " + content);
  //console.debug("parser.js baiduParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result h3.t a");
  //console.debug("parser.js baiduParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js baiduParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "search_engine" });
      }
    }
  }

  return hrefs;
}

function yandexParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yandexParser content is: " + content);
  //console.debug("parser.js yandexParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.serp-item div h2 a.link");
  //console.debug("parser.js yandexParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yandexParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "search_engine" });
      }
    }
  }

  return hrefs;
}
