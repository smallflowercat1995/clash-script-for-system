//lines search

function zhaotaiciParser(content, url, source, keyword) {
  //console.debug("parser.js zhaotaiciParser content is: " + content);
  //console.debug("parser.js zhaotaiciParser content is: " + myDocument.innerHTML);
  let json = JSON.parse(content);

  let hrefs = [];
  if (json && json.pageTotal && json.pageTotal > 0) {
    let elements = json.items;
    for (let element of elements) {
      let item = element.subTableItem;
      let doubanid = item.doubanid;
      let href = "https://movie.douban.com/subject/" + doubanid;
      let text = item.title;
      href = relativeUrlToAbsolute(href, url);
      let desc = keyword;
      //console.debug("parser.js zhaotaiciParser href is: " + href + ", text is:" + text);
      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
    }
  }

  return hrefs;
}

function getyarnParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js getyarnParser content is: " + content);
  //console.debug("parser.js getyarnParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.clip-wrap a:nth-child(2)");
  //console.debug("parser.js getyarnParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js getyarnParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
    }
  }

  return hrefs;
}

function findmovieParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js findmovieParser content is: " + content);
  //console.debug("parser.js findmovieParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.movie_table h4.title");
  //console.debug("parser.js findmovieParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    href = url;
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js findmovieParser href is: " + href + ", text is:" + text);

    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function moviequotesParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js moviequotesParser content is: " + content);
  //console.debug("parser.js moviequotesParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.phrase-new-sources a");
  //console.debug("parser.js moviequotesParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    href = url;
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js moviequotesParser href is: " + href + ", text is:" + text);
    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function whatismymovieParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js whatismymovieParser content is: " + content);
  //console.debug("parser.js whatismymovieParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div#All div.row div.panel div.panel-heading h3.panel-title a");
  console.debug("parser.js whatismymovieParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    href = relativeUrlToAbsolute(href, url);
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js whatismymovieParser href is: " + href + ", text is:" + text);
    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function subzinParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js subzinParser content is: " + content);
  //console.debug("parser.js subzinParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.phrases div.title");
  //console.debug("parser.js subzinParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    href = url;
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js subzinParser href is: " + href + ", text is:" + text);
    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function dialoguemoeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dialoguemoeParser content is: " + content);
  //console.debug("parser.js dialoguemoeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.hidden-sm-and-up button.el-button span a");
  //console.debug("parser.js dialoguemoeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dialoguemoeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
      }
    }
  }

  return hrefs;
}
