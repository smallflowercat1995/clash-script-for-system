//scores search

function imslpParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js imslpParser content is: " + content);
  //console.debug("parser.js imslpParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.rc>div>a");
  //console.debug("parser.js getyarnParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js imslpParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function ultimateguitarParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ultimateguitarParser content is: " + content);
  //console.debug("parser.js ultimateguitarParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div div header span span a");
  //console.debug("parser.js ultimateguitarParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ultimateguitarParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function musescoreParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js musescoreParser content is: " + content);
  //console.debug("parser.js musescoreParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div h2 a");
  //console.debug("parser.js musescoreParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js musescoreParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function notes8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js notes8Parser content is: " + content);
  //console.debug("parser.js notes8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.listboxmain a.listboxrow");
  //console.debug("parser.js notes8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js notes8Parser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function everyonepianoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js everyonepianoParser content is: " + content);
  //console.debug("parser.js everyonepianoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.MusicIndexBox div.MITitle a.Title");
  //console.debug("parser.js everyonepianoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js everyonepianoParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function gangqinpuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js gangqinpuParser content is: " + content);
  //console.debug("parser.js gangqinpuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.list_searh p.pu_title span.search_url a");
  //console.debug("parser.js gangqinpuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js gangqinpuParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function tan8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js tan8Parser content is: " + content);
  //console.debug("parser.js tan8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.column_wrapper div ul li>a");
  //console.debug("parser.js tan8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tan8Parser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function sooopuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sooopuParser content is: " + content);
  //console.debug("parser.js sooopuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.c_list ul li.c_title a");
  //console.debug("parser.js sooopuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sooopuParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function tintinpianoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js tintinpianoParser content is: " + content);
  //console.debug("parser.js tintinpianoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("span.title a");
  //console.debug("parser.js tintinpianoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tintinpianoParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}

function cnscoreParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cnscoreParser content is: " + content);
  //console.debug("parser.js cnscoreParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#showlist table tr td>a");
  //console.debug("parser.js cnscoreParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cnscoreParser href is: " + href + ", text is:" + text);

      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scores" });
    }
  }

  return hrefs;
}
