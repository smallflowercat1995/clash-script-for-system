function googlescholarParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js googlescholarParser content is: " + content);
  //console.debug("parser.js googlescholarParser keyword is: " + keyword);
  //console.debug("parser.js googlescholarParser url is: " + url);
  //console.debug("parser.js googlescholarParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.gs_ri h3.gs_rt a");
  //console.debug("parser.js googlescholarParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js googlescholarParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function microsoftacademicParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js microsoftacademicParser content is: " + content);
  //console.debug("parser.js microsoftacademicParser keyword is: " + keyword);
  //console.debug("parser.js microsoftacademicParser url is: " + url);
  //console.debug("parser.js microsoftacademicParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div a.title");
  //console.debug("parser.js microsoftacademicParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js microsoftacademicParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function baiduxueshuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js baiduxueshuParser content is: " + content);
  //console.debug("parser.js baiduxueshuParser keyword is: " + keyword);
  //console.debug("parser.js baiduxueshuParser url is: " + url);
  //console.debug("parser.js baiduxueshuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.sc_content h3 a");
  //console.debug("parser.js baiduxueshuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js baiduxueshuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function basesearchParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js basesearchParser content is: " + content);
  //console.debug("parser.js basesearchParser keyword is: " + keyword);
  //console.debug("parser.js basesearchParser url is: " + url);
  //console.debug("parser.js basesearchParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("a.link-gruen");
  //console.debug("parser.js basesearchParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js basesearchParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function coreacukParser(content, url, source, keyword) {
  if (content == null) return [];
  try {
    let json = JSON.parse(content);
    let total = json.total;
    let hrefs = [];
    if (total > 0) {
      let elements = json.results;
      for (let element of elements) {
        let id = element.id;
        let href = url + "/display/" + id + "?recSetID=";
        if (href) {
          href = relativeUrlToAbsolute(href, url);
          let text = element.title + " " + element.authorsString + " " + element.datePublished;
          let desc = keyword;
          //console.debug("parser.js coreacukParser href is: " + href + ", text is:" + text);
          if (href && text) {
            hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
          }
        }
      }
    }
    return hrefs;
  } catch (err) {
    return [];
  }
}

function researchgateParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js researchgateParser content is: " + content);
  //console.debug("parser.js researchgateParser keyword is: " + keyword);
  //console.debug("parser.js researchgateParser url is: " + url);
  //console.debug("parser.js researchgateParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("a.nova-e-link");
  //console.debug("parser.js researchgateParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js researchgateParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function ebscoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ebscoParser content is: " + content);
  //console.debug("parser.js ebscoParser keyword is: " + keyword);
  //console.debug("parser.js ebscoParser url is: " + url);
  //console.debug("parser.js ebscoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("p.result-title a");
  //console.debug("parser.js ebscoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ebscoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function sciencegovParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sciencegovParser content is: " + content);
  //console.debug("parser.js sciencegovParser keyword is: " + keyword);
  //console.debug("parser.js sciencegovParser url is: " + url);
  //console.debug("parser.js sciencegovParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.gs_ri h3.gs_rt a");
  //console.debug("parser.js sciencegovParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sciencegovParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function sciencedirectParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sciencedirectParser content is: " + content);
  //console.debug("parser.js sciencedirectParser keyword is: " + keyword);
  //console.debug("parser.js sciencedirectParser url is: " + url);
  //console.debug("parser.js sciencedirectParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("a.result-list-title-link");
  //console.debug("parser.js sciencedirectParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sciencedirectParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function openiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js openiParser content is: " + content);
  //console.debug("parser.js openiParser keyword is: " + keyword);
  //console.debug("parser.js openiParser url is: " + url);
  //console.debug("parser.js openiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("a.ng-binding");
  //console.debug("parser.js openiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js openiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function wanfangdataParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js wanfangdataParser content is: " + content);
  //console.debug("parser.js wanfangdataParser keyword is: " + keyword);
  //console.debug("parser.js wanfangdataParser url is: " + url);
  //console.debug("parser.js wanfangdataParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.title a:nth-child(2)");
  //console.debug("parser.js wanfangdataParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js wanfangdataParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function cqvipParser(content, url, source, keyword) {
  if (content == null) return [];
  try {
    let json = JSON.parse(content);
    let message = json.message;
    if (message == null) return [];
    let myDocument = documentFactory(message);
    //console.debug("parser.js cqvipParser content is: " + content);
    //console.debug("parser.js cqvipParser keyword is: " + keyword);
    //console.debug("parser.js cqvipParser url is: " + url);
    //console.debug("parser.js cqvipParser content is: " + myDocument.innerHTML);
    const elements = myDocument.querySelectorAll("ul li table tr a:nth-child(2)");
    let hrefs = [];
    for (let element of elements) {
      let href = element.getAttribute("href");
      if (href) {
        href = relativeUrlToAbsolute(href, url);
        let text = element.innerText;
        let desc = keyword;
        //console.debug("parser.js cqvipParser href is: " + href + ", text is:" + text);
        if (href && text) {
          hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
        }
      }
    }

    return hrefs;
  } catch (err) {
    return [];
  }
}

function nlccnParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js nlccnParser content is: " + content);
  //console.debug("parser.js nlccnParser keyword is: " + keyword);
  //console.debug("parser.js nlccnParser url is: " + url);
  //console.debug("parser.js nlccnParser content is: " + myDocument.innerHTML);
  const books = myDocument.querySelectorAll("div.article_item");
  //console.debug("parser.js nlccnParser elements is: " + elements.length);

  let hrefs = [];
  for (let book of books) {
    try {
      let elementDoc = documentFactory(book.innerHTML);

      const elementA = elementDoc.querySelector("div.book_name a");
      let docId = elementA.getAttribute("id");
      let text = elementA.innerText;

      const elementDiv = elementDoc.querySelector("div.zhaiyao");
      let dataSource = elementDiv.getAttribute("data-sourceen");

      if (docId && text && dataSource) {
        let href = "http://find.nlc.cn/search/showDocDetails?docId=" + docId + "&dataSource=" + dataSource + "&query=" + keyword;
        let desc = keyword;
        if (href && text) {
          hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
        }
      }
    } catch (err) {
      console.info("scholar.js nlccnParser error is: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    }
  }

  return hrefs;
}

function oalibParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js oalibParser content is: " + content);
  //console.debug("parser.js oalibParser keyword is: " + keyword);
  //console.debug("parser.js oalibParser url is: " + url);
  //console.debug("parser.js oalibParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#paperContent tbody tr td>span:nth-child(1) a");
  //console.debug("parser.js oalibParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js oalibParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}
