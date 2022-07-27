//yunpan search

function googleImageParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js googleImageParser content is: " + content);
  //console.debug("parser.js googleImageParser content is: " + myDocument.innerHTML);
  //关键词
  const elements = myDocument.querySelectorAll("div#rso div.g >div>div>a");
  //console.debug("parser.js googleImageParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      if (!text) text = href;
      let desc = keyword;
      //console.debug("parser.js googleImageParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  //相似图片
  const elements1 = myDocument.querySelectorAll("div#iur>div>div>div div>a");

  for (let element of elements1) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      if (!text) text = href;
      let desc = keyword;
      //console.debug("parser.js googleImageParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  return hrefs;
}

function yandexImageParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yandexImageParser content is: " + content);
  //console.debug("parser.js yandexImageParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.other-sites__snippet-title a");
  //console.debug("parser.js yandexImageParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      if (!text) text = href;
      let desc = keyword;
      //console.debug("parser.js yandexImageParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  return hrefs;
}

function xslistParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xslistParser content is: " + content);
  //console.debug("parser.js xslistParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul li h3 a");
  //console.debug("parser.js xslistParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      if (!text) text = href;
      let desc = keyword;
      //console.debug("parser.js xslistParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  return hrefs;
}

function saucenaoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js saucenaoParser content is: " + content);
  //console.debug("parser.js saucenaoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result table.resulttable tr");
  //console.debug("parser.js saucenaoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let trHtml = element.outerHTML;
    //console.debug("parser.js saucenaoParser trhtml is: " + trHtml);
    let trDocument = documentFactory(trHtml);
    //console.debug("parser.js saucenaoParser trDocument is: " + trDocument);
    let imgElement = trDocument.querySelector("td.resulttableimage div.resultimage a img");
    let href = imgElement.getAttribute("src");
    let titleElement = trDocument.querySelector("td.resulttablecontent div.resultcontent");
    let text = titleElement.innerText;
    href = relativeUrlToAbsolute(href, url);
    if (!text) text = href;
    let desc = keyword;
    console.debug("parser.js saucenaoParser href is: " + href + ", text is:" + text);
    if (href) {
      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
    }
  }

  return hrefs;
}

function iqdbParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js iqdbParser content is: " + content);
  //console.debug("parser.js iqdbParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr td.image a  img");
  //console.debug("parser.js iqdbParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("src");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      if (!text) text = href;
      let desc = keyword;
      //console.debug("parser.js iqdbParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  return hrefs;
}

function ascii2dParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ascii2dParser content is: " + content);
  //console.debug("parser.js ascii2dParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row div.image-box img");
  //console.debug("parser.js ascii2dParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("src");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      if (!text) text = href;

      let desc = keyword;
      //console.debug("parser.js ascii2dParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  return hrefs;
}
