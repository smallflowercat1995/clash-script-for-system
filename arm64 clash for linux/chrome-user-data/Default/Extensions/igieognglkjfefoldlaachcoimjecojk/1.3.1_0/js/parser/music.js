//music

function mp3downloadParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mp3downloadParser content is: " + content);
  //console.debug("parser.js mp3downloadParser keyword is: " + keyword);
  //console.debug("parser.js mp3downloadParser url is: " + url);
  //console.debug("parser.js mp3downloadParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.media-body");
  //console.debug("parser.js mp3downloadParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let childrens = element.children;
    let nodeH4 = childrens[0];
    let text = nodeH4.innerText;
    let nodeAdiv = childrens[2];
    let desc = keyword;

    //console.debug("parser.js mp3downloadParser text is: " + text + ", element.tagName is:" + nodeAdiv.tagName);

    let nodeA = nodeAdiv.children;
    if (nodeA && nodeA[0]) {
      let href = nodeA[0].getAttribute("href");
      href = relativeUrlToAbsolute(href, url);

      //console.debug("parser.js mp3downloadParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function mp3pawParser(content, url, source, keyword) {
  let hrefs = [];
  hrefs.push({ link: url, linkText: keyword + " Download", desc: keyword, source: source, keyword: keyword, url: url, type: "music" });

  return hrefs;
}

function liumingyeParser(content, url, source, keyword) {
  let hrefs = [];
  hrefs.push({ link: url, linkText: keyword + " 下载", desc: keyword, source: source, keyword: keyword, url: url, type: "music" });

  return hrefs;
}

function sswwwParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sswwwParser content is: " + content);
  //console.debug("parser.js sswwwParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.container div ul li a");
  //console.debug("parser.js sswwwParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sswwwParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function dtshotParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dtshotParser content is: " + content);
  //console.debug("parser.js dtshotParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h4.playlist__title span.playlist__title_txt a");
  //console.debug("parser.js dtshotParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dtshotParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function mp3bstParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mp3bstParser content is: " + content);
  //console.debug("parser.js mp3bstParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.article h2 a");
  //console.debug("parser.js mp3bstParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mp3bstParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function apeflacParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js apeflacParser content is: " + content);
  //console.debug("parser.js apeflacParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.mt_05 li.blk_nav a.wm210");
  //console.debug("parser.js apeflacParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js apeflacParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function acgjcParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js acgjcParser content is: " + content);
  //console.debug("parser.js acgjcParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row article div.card-bg a.card-title");
  //console.debug("parser.js acgjcParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js acgjcParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function mixtapetorrentParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mixtapetorrentParser content is: " + content);
  //console.debug("parser.js mixtapetorrentParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content dl.search-results dt.title a");
  //console.debug("parser.js mixtapetorrentParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mixtapetorrentParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function rockboxParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js rockboxParser content is: " + content);
  //console.debug("parser.js rockboxParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table table.lista table.lista tr td.lista:nth-child(2) a");
  //console.debug("parser.js rockboxParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js rockboxParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function ape8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ape8Parser content is: " + content);
  //console.debug("parser.js ape8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.searchbox table tr td:nth-child(1) a");
  //console.debug("parser.js ape8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ape8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}
