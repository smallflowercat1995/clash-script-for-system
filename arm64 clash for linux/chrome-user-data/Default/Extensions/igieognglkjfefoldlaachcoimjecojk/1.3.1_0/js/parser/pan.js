//yunpan search

function yunpanjinglingParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yunpanjinglingParser content is: " + content);
  //console.debug("parser.js yunpanjinglingParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item div.wrapper div.name a");
  //console.debug("parser.js yunpanjinglingParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yunpanjinglingParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function newdayParser(content, url, source, keyword) {
  if (content == null) return [];
  try {
    let json = JSON.parse(content);
    let code = json.code;
    let msg = json.msg;
    let hrefs = [];
    if (code == 1 && msg == "success") {
      let list = json.data.list;
      for (let element of list) {
        let share_key = element.share_key;
        let href = url + "/file/" + share_key + ".html";
        if (href) {
          href = relativeUrlToAbsolute(href, url);
          let text = element.share_title;
          let desc = keyword;
          //console.debug("parser.js coreacukParser href is: " + href + ", text is:" + text);
          if (href && text) {
            hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
          }
        }
      }
    }
    return hrefs;
  } catch (err) {
    return [];
  }
}

function dashengpanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dashengpanParser content is: " + content);
  //console.debug("parser.js dashengpanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result-wrap div.resource-item-wrap div.resource-item div.resource-info h1.resource-title a");
  //console.debug("parser.js dashengpanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dashengpanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function xiaomapanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xiaomapanParser content is: " + content);
  //console.debug("parser.js xiaomapanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result-wrap div.resource-item-wrap div.resource-item div.resource-info h1.resource-title a");
  //console.debug("parser.js xiaomapanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiaomapanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function feifeipanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js feifeipanParser content is: " + content);
  //console.debug("parser.js feifeipanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.resource-item div.resource-info h1 a");
  //console.debug("parser.js feifeipanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js feifeipanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function zhaoppParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zhaoppParser content is: " + content);
  //console.debug("parser.js zhaoppParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.searchresults div.resultcard div.title a");
  //console.debug("parser.js zhaoppParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zhaoppParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function panmemeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js panmemeParser content is: " + content);
  //console.debug("parser.js panmemeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.help-block a");
  //console.debug("parser.js panmemeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js panmemeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function qzhouParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js qzhouParser content is: " + content);
  //console.debug("parser.js qzhouParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.result-list li p.result-title a");
  //console.debug("parser.js qzhouParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js qzhouParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function xiaozhaolailaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xiaozhaolailaParser content is: " + content);
  //console.debug("parser.js xiaozhaolailaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.media div.media-body h4.media-heading a");
  //console.debug("parser.js xiaozhaolailaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiaozhaolailaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function kolsouParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kolsouParser content is: " + content);
  //console.debug("parser.js kolsouParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search ul li span.title a");
  //console.debug("parser.js kolsouParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kolsouParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function pan58Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js pan58Parser content is: " + content);
  //console.debug("parser.js pan58Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.filehdbox a");
  //console.debug("parser.js pan58Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pan58Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function iizhiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js iizhiParser content is: " + content);
  //console.debug("parser.js iizhiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.resource-item h1.resource-title a");
  //console.debug("parser.js iizhiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js iizhiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function yubaipanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yubaipanParser content is: " + content);
  //console.debug("parser.js yubaipanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.resource-item h1.resource-title a");
  //console.debug("parser.js yubaipanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yubaipanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function baimapanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js baimapanParser content is: " + content);
  //console.debug("parser.js baimapanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.resource-item h1.resource-title a");
  //console.debug("parser.js baimapanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js baimapanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function xiaobaipanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xiaobaipanParser content is: " + content);
  //console.debug("parser.js xiaobaipanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item-list h4.job-title a");
  //console.debug("parser.js xiaobaipanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiaobaipanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function slimegoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js slimegoParser content is: " + content);
  //console.debug("parser.js slimegoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.searchRow div.searchCell span.link a");
  //console.debug("parser.js slimegoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js slimegoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function xiaokesosoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xiaokesosoParser content is: " + content);
  //console.debug("parser.js xiaokesosoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.media-body h4.media-heading a");
  //console.debug("parser.js xiaokesosoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiaokesosoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function pantianxiaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js pantianxiaParser content is: " + content);
  //console.debug("parser.js pantianxiaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content div.list  div.l span a");
  //console.debug("parser.js pantianxiaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pantianxiaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}
