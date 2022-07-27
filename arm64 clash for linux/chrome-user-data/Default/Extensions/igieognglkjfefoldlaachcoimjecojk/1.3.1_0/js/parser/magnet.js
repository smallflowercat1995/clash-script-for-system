//magnet search
function torrentz2Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentz2Parser content is: " + content);
  //console.debug("parser.js torrentz2Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.results dl dt");
  //console.debug("parser.js torrentz2Parser elements is: " + elements.length);

  let hrefs = [];
  //extract images from img, input,button,iframe,source,svg,object,embed
  for (let element of elements) {
    let href = element.children[0].getAttribute("href");
    href = relativeUrlToAbsolute(href, url);
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js torrentz2Parser href is: " + href + ", text is:" + text);
    if (href && text) {
      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
    }
  }
  return hrefs;
}

function btsowParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btsowParser content is: " + content);
  //console.debug("parser.js btsowParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.data-list div.row a");
  //console.debug("parser.js btsowParser elements is: " + elements.length);

  let hrefs = [];
  //extract images from img, input,button,iframe,source,svg,object,embed
  for (let element of elements) {
    let href = element.getAttribute("href");
    href = relativeUrlToAbsolute(href, url);
    let text = element.getAttribute("title");
    //console.debug("parser.js btsowParser href is: " + href + ", text is:" + text);
    let desc = keyword;
    if (href && text) {
      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
    }
  }
  return hrefs;
}

function torrentkittyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentkittyParser content is: " + content);
  //console.debug("parser.js torrentkittyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#archiveResult tbody tr");
  //console.debug("parser.js torrentkittyParser elements is: " + elements.length);

  let hrefs = [];
  //extract images from img, input,button,iframe,source,svg,object,embed
  if (elements.length > 1) {
    //elements = elements.slice(1, elements.length - 1);
    for (let element of elements) {
      if (element.children[3] && element.children[3].children[0]) {
        let href = element.children[3].children[0].getAttribute("href");
        if (href) {
          href = relativeUrlToAbsolute(href, url);
          let text = element.children[3].children[0].getAttribute("title");
          let desc = keyword;
          //console.debug("parser.js torrentkittyParser href is: " + href + ", text is:" + text);
          if (href && text) {
            hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
          }
        }
      }
    }
  }

  return hrefs;
}

function btmayiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btmayiParser content is: " + content);
  //console.debug("parser.js btmayiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title a");
  //console.debug("parser.js btmayiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btmayiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function yuhuageParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yuhuageParser content is: " + content);
  //console.debug("parser.js yuhuageParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title h3 a");
  //console.debug("parser.js yuhuageParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yuhuageParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function zhongzisoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zhongzisoParser content is: " + content);
  //console.debug("parser.js zhongzisoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table tbody tr td[colspan='6'] div.text-left h4 a");
  //console.debug("parser.js zhongzisoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zhongzisoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function sobtParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sobtParser content is: " + content);
  //console.debug("parser.js sobtParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title h3 a");
  //console.debug("parser.js sobtParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sobtParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function cilibaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cilibaParser content is: " + content);
  //console.debug("parser.js cilibaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title h3 a");
  //console.debug("parser.js cilibaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cilibaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btdadParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btdadParser content is: " + content);
  //console.debug("parser.js btdadParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.ssbox div.title h3 a");
  //console.debug("parser.js btdadParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btdadParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btmoviParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btmoviParser content is: " + content);
  //console.debug("parser.js btmoviParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title h3 a");
  //console.debug("parser.js btmoviParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btmoviParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function zhongzi8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zhongzi8Parser content is: " + content);
  //console.debug("parser.js zhongzi8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.media-list li.media div.media-body h4.media-heading a");
  //console.debug("parser.js zhongzi8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zhongzi8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function ciligouParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ciligouParser content is: " + content);
  //console.debug("parser.js ciligouParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#Search_list_wrapper li div.Search_title_wrapper div.SearchListTitle_list_title a");
  //console.debug("parser.js ciligouParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ciligouParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function clttParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js clttParser content is: " + content);
  //console.debug("parser.js clttParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h5.item-title a");
  //console.debug("parser.js clttParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js clttParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function magnetdogParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js magnetdogParser content is: " + content);
  //console.debug("parser.js magnetdogParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h5.item-title a");
  //console.debug("parser.js magnetdogParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js magnetdogParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btmirrorParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btmirrorParser content is: " + content);
  //console.debug("parser.js btmirrorParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("dt.item-title a");
  //console.debug("parser.js btmirrorParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btmirrorParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btchiliParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btchiliParser content is: " + content);
  //console.debug("parser.js btchiliParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("article.item div a");
  //console.debug("parser.js btchiliParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btchiliParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function cilipaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cilipaParser content is: " + content);
  //console.debug("parser.js cilipaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.panel-body h5 a");
  //console.debug("parser.js cilipaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cilipaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function piratebayParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js piratebay content is: " + content);
  //console.debug("parser.js piratebay content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li.list-entry span.item-name a");
  //console.debug("parser.js piratebay elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js piratebay href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function idopeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js idopeParser content is: " + content);
  //console.debug("parser.js idopeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.resultdiv div.resultdivtop a");
  //console.debug("parser.js idopeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js idopeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function zooqleParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zooqleParser content is: " + content);
  //console.debug("parser.js zooqleParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.panel-body table  tbody tr td:nth-child(2) a");
  //console.debug("parser.js zooqleParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zooqleParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function anixmoeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js anixmoeParser content is: " + content);
  //console.debug("parser.js anixmoeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#data_list tr td:nth-child(3) a:nth-child(1)");
  //console.debug("parser.js anixmoeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js anixmoeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function x1337Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js x1337Parser content is: " + content);
  //console.debug("parser.js x1337Parser keyword is: " + keyword);
  //console.debug("parser.js x1337Parser url is: " + url);
  //console.debug("parser.js x1337Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tbody tr td:nth-child(1) a:nth-child(2)");
  //console.debug("parser.js x1337Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js x1337Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function katcrParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js katcrParser content is: " + content);
  //console.debug("parser.js katcrParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.torrentname div.markeredBlock a.cellMainLink");
  //console.debug("parser.js katcrParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js katcrParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function yourbittorrent2Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yourbittorrent2Parser content is: " + content);
  //console.debug("parser.js yourbittorrent2Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr.table-default td a");
  //console.debug("parser.js yourbittorrent2Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yourbittorrent2Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function torrentdownloadsParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentdownloadsParser content is: " + content);
  //console.debug("parser.js torrentdownloadsParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.grey_bar3 p a");
  //console.debug("parser.js torrentdownloadsParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js torrentdownloadsParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function limetorParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js limetorParser content is: " + content);
  //console.debug("parser.js limetorParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.tt-name a:nth-child(2)");
  //console.debug("parser.js limetorParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js limetorParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function torrentfunkParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentfunkParser content is: " + content);
  //console.debug("parser.js torrentfunkParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.title table.tmain tbody tr td a");
  //console.debug("parser.js torrentfunkParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js torrentfunkParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function javbusParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js javbusParser content is: " + content);
  //console.debug("parser.js javbusParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("a.movie-box");
  //console.debug("parser.js javbusParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.children[0].children[0].title;
      let desc = keyword;
      //console.debug("parser.js javbusParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function soukaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js soukaParser content is: " + content);
  //console.debug("parser.js soukaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#data_list tdiv.el-card div.el-card__body div.div_2 a.a_name");
  //console.debug("parser.js soukaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js soukaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function javhooParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js javhooParser content is: " + content);
  //console.debug("parser.js javhooParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h3.entry-title a");
  //console.debug("parser.js javhooParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js javhooParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function u7c7Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js u7c7Parser content is: " + content);
  //console.debug("parser.js u7c7Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr.default td:nth-child(2) a");
  //console.debug("parser.js u7c7Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js u7c7Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btmuluParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btmuluParser content is: " + content);
  //console.debug("parser.js btmuluParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr.default td:nth-child(2) a");
  //console.debug("parser.js btmuluParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btmuluParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function crsosoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js crsosoParser content is: " + content);
  //console.debug("parser.js crsosoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("article.item div a");
  //console.debug("parser.js crsosoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js crsosoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function bthahaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bthahaParser content is: " + content);
  //console.debug("parser.js bthahaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("td.x-item div a.title");
  //console.debug("parser.js bthahaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bthahaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function sodhtParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sodhtParser content is: " + content);
  //console.debug("parser.js sodhtParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.mlist li h3.T1 a");
  //console.debug("parser.js sodhtParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sodhtParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function torrentwebParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentwebParser content is: " + content);
  //console.debug("parser.js torrentwebParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr td.align-middle a.text-decoration-none");
  //console.debug("parser.js torrentwebParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js torrentwebParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function eclmyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js eclmyParser content is: " + content);
  //console.debug("parser.js eclmyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.itemHead>a");
  //console.debug("parser.js eclmyParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js eclmyParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function bthubParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bthubParser content is: " + content);
  //console.debug("parser.js bthubParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item-title h3 a");
  //console.debug("parser.js bthubParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bthubParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function bthuyaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bthuyaParser content is: " + content);
  //console.debug("parser.js bthuyaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item-title h3 a");
  //console.debug("parser.js bthuyaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bthuyaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function cilidaoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cilidaoParser content is: " + content);
  //console.debug("parser.js cilidaoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr.default td:nth-child(2) a");
  //console.debug("parser.js cilidaoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cilidaoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function ciliduoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ciliduoParser content is: " + content);
  //console.debug("parser.js ciliduoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.title h3 a");
  //console.debug("parser.js ciliduoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ciliduoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function sofanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sofanParser content is: " + content);
  //console.debug("parser.js sofanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.list-unstyled li h3.list-title a");
  //console.debug("parser.js sofanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sofanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function bt4gParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bt4gParser content is: " + content);
  //console.debug("parser.js bt4gParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row div.col div h5 a");
  //console.debug("parser.js bt4gParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bt4gParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function skytorrentsParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js skytorrentsParser content is: " + content);
  //console.debug("parser.js skytorrentsParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#results tr.result td a:nth-child(1)");
  //console.debug("parser.js skytorrentsParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js skytorrentsParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btsheParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btsheParser content is: " + content);
  //console.debug("parser.js btsheParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.mlist li h3.T1 a");
  //console.debug("parser.js btsheParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btsheParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btdigParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btdigParser content is: " + content);
  //console.debug("parser.js btdigParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.torrent_name a");
  //console.debug("parser.js btdigParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btdigParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function ciliproParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ciliproParser content is: " + content);
  //console.debug("parser.js ciliproParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("dl.item dt a");
  //console.debug("parser.js ciliproParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ciliproParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function mag0Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mag0Parser content is: " + content);
  //console.debug("parser.js mag0Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.file-list tbody tr td a");
  //console.debug("parser.js mag0Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mag0Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function clbbizParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js clbbizParser content is: " + content);
  //console.debug("parser.js clbbizParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title h3 a");
  //console.debug("parser.js clbbizParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js clbbizParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btmetParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btmetParser content is: " + content);
  //console.debug("parser.js btmetParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-item div.item-title h3 a");
  //console.debug("parser.js btmetParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btmetParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function btfoxParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btfoxParser content is: " + content);
  //console.debug("parser.js btfoxParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.threadlist_subject div.thread_check div a");
  //console.debug("parser.js btfoxParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btfoxParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function zhaociliParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zhaociliParser content is: " + content);
  //console.debug("parser.js zhaociliParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.file-list tr td a");
  //console.debug("parser.js zhaociliParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zhaociliParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function letbtParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js letbtParser content is: " + content);
  //console.debug("parser.js letbtParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.J_searchResult div.row div a");
  //console.debug("parser.js letbtParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js letbtParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function torrentprojectParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentprojectParser content is: " + content);
  //console.debug("parser.js torrentprojectParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div#similarfiles div span a");
  //console.debug("parser.js torrentprojectParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js torrentprojectParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function torrents7Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrents7Parser content is: " + content);
  //console.debug("parser.js torrents7Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div#results div.media-body h5 a");
  //console.debug("parser.js torrents7Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js torrents7Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function monovaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js monovaParser content is: " + content);
  //console.debug("parser.js monovaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr.desktop td.torrent_name a");
  //console.debug("parser.js monovaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js monovaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function javdbParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js javdbParser content is: " + content);
  //console.debug("parser.js javdbParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.grid-item a.box");
  //console.debug("parser.js javdbParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js javdbParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function javlibraryParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js javlibraryParser content is: " + content);
  //console.debug("parser.js javlibraryParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.videotextlist tr td.title div.video>a");
  //console.debug("parser.js javlibraryParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js javlibraryParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "magnet" });
      }
    }
  }

  return hrefs;
}

function jusoParser(content, url, source, keyword) {
  //console.debug("parser.js jusoParser content is: " + content);
  let type = typeof content;
  //console.debug("parser.js jusoParser content type is: " + type);
  //console.debug("parser.js jusoParser content is: " + myDocument.innerHTML);
  //console.debug("parser.js jusoParser elements is: " + elements.length);
  let json = JSON.parse(content);
  let data = json.data;
  //console.debug("parser.js jusoParser data is: " + JSON.stringify(data));

  let hrefs = [];
  for (let element of data) {
    let href = element.link;
    if (href) {
      //href = relativeUrlToAbsolute(href, url);
      let guid = element.guid;
      let text = element.title;
      console.debug("parser.js jusoParser title is: " + text);
      let website = element.website;
      let peers = element.peers;
      let seeders = element.seeders;
      let size = element.size;
      if (size >= 1024 * 1024 * 1024) {
        size = size / (1024 * 1024 * 1024);
        size = size.toFixed(2) + "GB";
      } else if (size >= 1024 * 1024) {
        size = size / (1024 * 1024);
        size = size.toFixed(2) + "MB";
      } else if (size >= 1024) {
        size = size / 1024;
        size = size.toFixed(2) + "KB";
      } else {
        size = size + "Byte";
      }
      let pubDate = new Date(element.pubDate);
      //pubDate = pubDate.getFullYear() + "-" + (pubDate.getMonth() + 1) + "-" + pubDate.getDate() + " " + pubDate.getHours() + ":" + pubDate.getMinutes() + ":" + pubDate.getSeconds();
      pubDate = pubDate.getFullYear() + "-" + (pubDate.getMonth() + 1) + "-" + pubDate.getDate();

      let msg_created = chrome.i18n.getMessage("created_date") + ": ";
      let msg_peers = chrome.i18n.getMessage("peers") + ": ";
      let msg_seeders = chrome.i18n.getMessage("seeders") + ": ";
      let msg_content_size = chrome.i18n.getMessage("content_size") + ": ";

      let desc = msg_created + pubDate + "&nbsp;&nbsp;&nbsp;" + msg_peers + peers + "&nbsp;&nbsp;&nbsp;" + msg_seeders + seeders + "&nbsp;&nbsp;&nbsp;" + msg_content_size + size;
      //console.debug("parser.js jusoParser href is: " + href + ", text is:" + text + ",desc is:" + desc);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: website, keyword: keyword, url: guid, type: "magnet" });
      }
    }
  }
  //console.debug("parser.js jusoParser href is: " + JSON.stringify(hrefs));

  return hrefs;
}
