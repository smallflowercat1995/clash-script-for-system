//company search
function qccParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js qccParser content is: " + content);
  //console.debug("parser.js qccParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#search-result tr  td:nth-child(3) a");
  //console.debug("parser.js qccParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js qccParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}

function tianyanchaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js tianyanchaParser content is: " + content);
  //console.debug("parser.js tianyanchaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result-list div.search-item div.content div.header a");
  //console.debug("parser.js tianyanchaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tianyanchaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}

function qixinParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js qixinParser content is: " + content);
  //console.debug("parser.js qixinParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.company-title a");
  //console.debug("parser.js qixinParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js qixinParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}

function shuidiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js shuidiParser content is: " + content);
  //console.debug("parser.js shuidiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.or_search_row_content div a:nth-child(1)");
  console.debug("parser.js shuidiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js shuidiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}

function qccoverseaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js qccoverseaParser content is: " + content);
  //console.debug("parser.js qccoverseaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.ntable-list tbody tr td:nth-child(2) div a");
  //console.debug("parser.js qccoverseaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js qccoverseaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}

function dnbParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dnbParser content is: " + content);
  //console.debug("parser.js dnbParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.table tbody tr.js-search-results-row td a");
  //console.debug("parser.js dnbParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dnbParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}
