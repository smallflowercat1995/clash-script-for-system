//acg search
function dmhyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dmhyParser content is: " + content);
  //console.debug("parser.js dmhyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr td.title>a");
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
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function jddmParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js jddmParser content is: " + content);
  //console.debug("parser.js jddmParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#listTable #data_list tr td:nth-child(3) a");
  //console.debug("parser.js jddmParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js jddmParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function xfsubParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xfsubParser content is: " + content);
  //console.debug("parser.js xfsubParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#listTable #data_list tr td:nth-child(2) a:nth-child(2)");
  //console.debug("parser.js xfsubParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xfsubParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function kisssubParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kisssubParser content is: " + content);
  //console.debug("parser.js kisssubParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#listTable tbody tr td:nth-child(3) a");
  //console.debug("parser.js kisssubParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kisssubParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function cangkuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cangkuParser content is: " + content);
  //console.debug("parser.js cangkuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post-card section.post-card-wrap>a");
  //console.debug("parser.js cangkuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js cangkuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function acgripParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js acgripParser content is: " + content);
  //console.debug("parser.js acgripParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.post-index tbody tr td:nth-child(2) span:nth-child(2) a");
  //console.debug("parser.js acgripParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js acgripParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function mikananiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mikananiParser content is: " + content);
  //console.debug("parser.js mikananiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.table tbody tr.js-search-results-row td a");
  //console.debug("parser.js mikananiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mikananiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function comicatParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js comicatParser content is: " + content);
  //console.debug("parser.js comicatParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#listTable tbody tr td:nth-child(3) a");
  //console.debug("parser.js comicatParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js comicatParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function mikuclubParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mikuclubParser content is: " + content);
  //console.debug("parser.js mikuclubParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#div.row div.col div.card-img-container div:nth-child(3) a");
  //console.debug("parser.js mikuclubParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mikuclubParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function nicotvParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js nicotvParser content is: " + content);
  //console.debug("parser.js nicotvParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul li h2 a");
  //console.debug("parser.js nicotvParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js nicotvParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function dmd8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dmd8Parser content is: " + content);
  //console.debug("parser.js dmd8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.cn_box2 ul li:nth-child(1) a");
  //console.debug("parser.js dmd8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dmd8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function agefansParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js agefansParser content is: " + content);
  //console.debug("parser.js agefansParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.cell_imform div a.cell_imform_name");
  //console.debug("parser.js agefansParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;

      let desc = keyword;
      //console.debug("parser.js agefansParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function qqhentaiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js qqhentaiParser content is: " + content);
  //console.debug("parser.js qqhentaiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.container div.gallery a");
  //console.debug("parser.js qqhentaiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js qqhentaiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function comic18Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js comic18Parser content is: " + content);
  //console.debug("parser.js comic18Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row div div.well div.thumb-overlay >a");
  //console.debug("parser.js comic18Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.children[0].title;
      let desc = keyword;
      //console.debug("parser.js comic18Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function anirenaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js anirenaParser content is: " + content);
  //console.debug("parser.js anirenaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr td.torrents_small_info_data1 div>a");
  //console.debug("parser.js anirenaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js anirenaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function anidexParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js anidexParser content is: " + content);
  //console.debug("parser.js anidexParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("a.torrent");
  //console.debug("parser.js anidexParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js anidexParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function dmlymeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dmlymeParser content is: " + content);
  //console.debug("parser.js dmlymeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr td:nth-child(3) a");
  //console.debug("parser.js dmlymeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dmlymeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function manhuabeiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js manhuabeiParser content is: " + content);
  //console.debug("parser.js manhuabeiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.list-comic a.image-link");
  //console.debug("parser.js manhuabeiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js manhuabeiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function manhuafenParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js manhuafenParser content is: " + content);
  //console.debug("parser.js manhuafenParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.list-comic a.image-link");
  //console.debug("parser.js manhuafenParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js manhuafenParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function manhuadbParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js manhuadbParser content is: " + content);
  //console.debug("parser.js manhuadbParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.comicbook-index a.d-block");
  //console.debug("parser.js manhuadbParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js manhuadbParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function manhuataiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js manhuataiParser content is: " + content);
  //console.debug("parser.js manhuataiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.acgn-item a.acgn-thumbnail");
  //console.debug("parser.js manhuataiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js manhuataiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function kanmanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kanmanParser content is: " + content);
  //console.debug("parser.js kanmanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.acgn-item a.acgn-thumbnail");
  //console.debug("parser.js kanmanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js kanmanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function ikanhmParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ikanhmParser content is: " + content);
  //console.debug("parser.js ikanhmParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h2.title a");
  //console.debug("parser.js ikanhmParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ikanhmParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function hanmanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js hanmanParser content is: " + content);
  //console.debug("parser.js hanmanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h3.title a");
  //console.debug("parser.js hanmanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hanmanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function amote69Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js amote69Parser content is: " + content);
  //console.debug("parser.js amote69Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h2.entry-title a");
  //console.debug("parser.js amote69Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js amote69Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function hmbaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js hmbaParser content is: " + content);
  //console.debug("parser.js hmbaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.item-cover a");
  //console.debug("parser.js hmbaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js hmbaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function wnacgParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js wnacgParser content is: " + content);
  //console.debug("parser.js wnacgParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.pic_box a");
  //console.debug("parser.js wnacgParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js wnacgParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function futaacgParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js futaacgParser content is: " + content);
  //console.debug("parser.js futaacgParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.simple-topic a.topic-title-wrap");
  //console.debug("parser.js futaacgParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js futaacgParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function iacgripParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js iacgripParser content is: " + content);
  //console.debug("parser.js iacgripParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.list-body>a");
  //console.debug("parser.js iacgripParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js iacgripParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function miobtParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js miobtParser content is: " + content);
  //console.debug("parser.js miobtParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#listTable tbody tr td:nth-child(3) a");
  //console.debug("parser.js miobtParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js miobtParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function acg02Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js acg02Parser content is: " + content);
  //console.debug("parser.js acg02Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row div.col-12 table tbody tr td:nth-child(2) a");
  //console.debug("parser.js acg02Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js acg02Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function mhguiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mhguiParser content is: " + content);
  //console.debug("parser.js mhguiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.book-detail dl dt a");
  //console.debug("parser.js mhguiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mhguiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function dmzjParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dmzjParser content is: " + content);
  //console.debug("parser.js dmzjParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.tcaricature_block ul li a");
  //console.debug("parser.js dmzjParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js dmzjParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function mangabzParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mangabzParser content is: " + content);
  //console.debug("parser.js mangabzParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.mh-item-detali h2.title a");
  //console.debug("parser.js mangabzParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mangabzParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function wuqimhParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js wuqimhParser content is: " + content);
  //console.debug("parser.js wuqimhParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.book-detail dl dt a");
  //console.debug("parser.js wuqimhParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js wuqimhParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function tutumanhuaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js tutumanhuaParser content is: " + content);
  //console.debug("parser.js tutumanhuaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.cy_list_mh ul li.title a");
  //console.debug("parser.js tutumanhuaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tutumanhuaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function gufengmh8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js gufengmh8Parser content is: " + content);
  //console.debug("parser.js gufengmh8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.book-list li.item-lg a.cover");
  //console.debug("parser.js gufengmh8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js gufengmh8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function mmdzhijiaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mmdzhijiaParser content is: " + content);
  //console.debug("parser.js mmdzhijiaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content header.entry-header h2.entry-title a");
  //console.debug("parser.js mmdzhijiaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mmdzhijiaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function peroperoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js peroperoParser content is: " + content);
  //console.debug("parser.js peroperoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.update_area_lists li a");
  //console.debug("parser.js peroperoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js peroperoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function cosxcosParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cosxcosParser content is: " + content);
  //console.debug("parser.js cosxcosParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.table tbody tr td:nth-child(2) a");
  //console.debug("parser.js cosxcosParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cosxcosParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function hentaiclubParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js hentaiclubParser content is: " + content);
  //console.debug("parser.js hentaiclubParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("article.excerpt header h2 a");
  //console.debug("parser.js hentaiclubParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hentaiclubParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function acgzeroParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js acgzeroParser content is: " + content);
  //console.debug("parser.js acgzeroParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.list-table tbody tr td:nth-child(2) a");
  //console.debug("parser.js acgzeroParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js acgzeroParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function vcbstudioParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js vcbstudioParser content is: " + content);
  //console.debug("parser.js vcbstudioParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.title-article h1 a");
  //console.debug("parser.js vcbstudioParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js vcbstudioParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function mikoconParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mikoconParser content is: " + content);
  //console.debug("parser.js mikoconParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div#threadlist ul li.pbw h3 a");
  //console.debug("parser.js mikoconParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mikoconParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function hggardParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js hggardParser content is: " + content);
  //console.debug("parser.js hggardParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div#listdiv ul.listview li a.listlink");
  //console.debug("parser.js hggardParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hggardParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function nyaanetParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js nyaanetParser content is: " + content);
  //console.debug("parser.js nyaanetParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.results tr.torrent-info td.tr-name a");
  //console.debug("parser.js nyaanetParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js nyaanetParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}
