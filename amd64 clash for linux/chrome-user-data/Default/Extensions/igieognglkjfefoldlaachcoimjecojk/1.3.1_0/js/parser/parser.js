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
  const elements = myDocument.querySelectorAll("#waterfall div a.movie-box");
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

//acg search
function dmhyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dmhyParser content is: " + content);
  //console.debug("parser.js dmhyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr td.title a");
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
  const elements = myDocument.querySelectorAll("div.row div div.well>a");
  //console.debug("parser.js comic18Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
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

//movie

//movie search

function cupfoxParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cupfoxParser content is: " + content);
  //console.debug("parser.js cupfoxParser content is: " + myDocument.innerHTML);
  const script = myDocument.querySelector("#__NEXT_DATA__");
  let json;
  if (script) {
    //console.debug("parser.js cupfoxParser script is: " + script.innerHTML);
    json = JSON.parse(script);
  }

  let hrefs = [];
  if (json && json.props.pageProps.searchResponse && json.props.pageProps.searchResponse.numFound && json.props.pageProps.searchResponse.resources) {
    let elements = json.props.pageProps.searchResponse.resources;
    let total = json.props.pageProps.searchResponse.numFound;
    for (let element of elements) {
      let href = element.url;
      href = relativeUrlToAbsolute(href, url);
      let text = element.text;
      let desc = keyword;
      //console.debug("parser.js cupfoxParser href is: " + href + ", text is:" + text);
      hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
    }
  }

  return hrefs;
}

async function ifkdyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ifkdyParser content is: " + content);
  //console.debug("parser.js ifkdyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.results-item div.m-info");
  //console.debug("parser.js ifkdyParser elements is: " + elements.length);

  let hrefs = [];
  if (elements.length > 1) {
    for (let element of elements) {
      let href = element.getAttribute("href");
      if (href) {
        href = relativeUrlToAbsolute(href, url);
        let text = element.innerText;

        let response = await httpGet(href);
        let myDocument1 = documentFactory(response.body);
        const ele = myDocument1.querySelector("div.go-movie-btn-container a");
        if (ele) {
          href = ele.getAttribute("href");
        }
        let desc = keyword;
        //console.debug("parser.js ifkdyParser href is: " + href + ", text is:" + text);
        if (href && text) {
          hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
        }
      }
    }
  }

  return hrefs;
}

function dianyinggouParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dianyinggouParser content is: " + content);
  //console.debug("parser.js dianyinggouParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.movies a");
  //console.debug("parser.js dianyinggouParser elements is: " + elements.length);

  let hrefs = [];
  if (elements.length > 1) {
    for (let element of elements) {
      let href = element.getAttribute("href");
      if (href) {
        href = relativeUrlToAbsolute(href, url);
        let text = element.title;
        let desc = keyword;
        //console.debug("parser.js dianyinggouParser href is: " + href + ", text is:" + text);
        if (href && text) {
          hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
        }
      }
    }
  }

  return hrefs;
}

function ddrkParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ddrkParser content is: " + content);
  //console.debug("parser.js ddrkParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result__body h2.result__title a");
  //console.debug("parser.js ddrkParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ddrkParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function dandanzanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dandanzanParser content is: " + content);
  //console.debug("parser.js dandanzanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.lists-content ul li h2 a");
  //console.debug("parser.js dandanzanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dandanzanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function bde4Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bde4Parser content is: " + content);
  //console.debug("parser.js bde4Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content a");
  //console.debug("parser.js bde4Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bde4Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function haitudyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js haitudyParser content is: " + content);
  //console.debug("parser.js haitudyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.search-list li div.row div.txt h5 a");
  //console.debug("parser.js haitudyParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js haitudyParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function novipnoadParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js novipnoadParser content is: " + content);
  //console.debug("parser.js novipnoadParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item-head a");
  //console.debug("parser.js novipnoadParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js novipnoadParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function kpp77Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kpp77Parser content is: " + content);
  //console.debug("parser.js kpp77Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.show-list li p:nth-child(2) a");
  //console.debug("parser.js kpp77Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kpp77Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function kankanwuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kankanwuParser content is: " + content);
  //console.debug("parser.js kankanwuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.show-list li div h5 a");
  //console.debug("parser.js kankanwuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kankanwuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function kkkkwoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kkkkwoParser content is: " + content);
  //console.debug("parser.js kkkkwoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.show-list li div.play-txt h5 a");
  //console.debug("parser.js kkkkwoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kkkkwoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function bttwobParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bttwobParser content is: " + content);
  //console.debug("parser.js bttwobParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.mikd div.mi_cont div.bt_img ul li  h3.dytit a");
  //console.debug("parser.js bttwobParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bttwobParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function btbtdy2Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btbtdy2Parser content is: " + content);
  //console.debug("parser.js btbtdy2Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.list_so dl dd p strong a");
  //console.debug("parser.js btbtdy2Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btbtdy2Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function idybeeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js idybeeParser content is: " + content);
  //console.debug("parser.js idybeeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.update_area_lists li.i_list a");
  //console.debug("parser.js idybeeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js idybeeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function mjw91Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mjw91Parser content is: " + content);
  //console.debug("parser.js mjw91Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.m-movies article a");
  //console.debug("parser.js mjw91Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js mjw91Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function ttkmjParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ttkmjParser content is: " + content);
  //console.debug("parser.js ttkmjParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.bd ul.list-col li div.info h4.title a");
  //console.debug("parser.js ttkmjParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ttkmjParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function imeijuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js imeijuParser content is: " + content);
  //console.debug("parser.js imeijuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content div.list-content div.m-moives article a");
  //console.debug("parser.js imeijuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js imeijuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function rijutvParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js rijutvParser content is: " + content);
  //console.debug("parser.js rijutvParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item div.text h3 a");
  //console.debug("parser.js rijutvParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js rijutvParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function rijulaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js rijulaParser content is: " + content);
  //console.debug("parser.js rijulaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("dl.fed-deta-info dd h1 a");
  //console.debug("parser.js rijulaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js rijulaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function waijutvParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js waijutvParser content is: " + content);
  //console.debug("parser.js waijutvParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.macplus-vodlist__media li.bottom-line div.detail h3.title a");
  //console.debug("parser.js waijutvParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js waijutvParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function xl720Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xl720Parser content is: " + content);
  //console.debug("parser.js xl720Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post-grid div h3.entry-title a");
  //console.debug("parser.js xl720Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xl720Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function btbttParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btbttParser content is: " + content);
  //console.debug("parser.js btbttParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.body table tbody tr td a:nth-child(7)");
  //console.debug("parser.js btbttParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btbttParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function ibtbaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ibtbaParser content is: " + content);
  //console.debug("parser.js ibtbaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.div div.left ul li div h3 a");
  //console.debug("parser.js ibtbaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ibtbaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function dyttParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dyttParser content is: " + content);
  //console.debug("parser.js dyttParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.tableListMain table tbody tr td a");
  //console.debug("parser.js dyttParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dyttParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function bdfilmParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bdfilmParser content is: " + content);
  //console.debug("parser.js bdfilmParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item ul li div span a");
  //console.debug("parser.js bdfilmParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bdfilmParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function yskkParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yskkParser content is: " + content);
  //console.debug("parser.js yskkParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.movielist ul li a");
  //console.debug("parser.js yskkParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yskkParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function xieppParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xieppParser content is: " + content);
  //console.debug("parser.js xieppParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.searchlist div.row ul.media-list li div.media-body h4 a");
  //console.debug("parser.js xieppParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xieppParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function yyetssParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yyetssParser content is: " + content);
  //console.debug("parser.js yyetssParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.container div.row div.col-xs-12 div.row div.col-xs-3 a");
  //console.debug("parser.js yyetssParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js yyetssParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function jsr9Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js jsr9Parser content is: " + content);
  //console.debug("parser.js jsr9Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.ml div.item div.title p.tt a");
  //console.debug("parser.js jsr9Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js jsr9Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function yinfansParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js yinfansParser content is: " + content);
  //console.debug("parser.js yinfansParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#post_container li.post div.article h2 a ");
  //console.debug("parser.js yinfansParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yinfansParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function loldyttParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js loldyttParser content is: " + content);
  //console.debug("parser.js loldyttParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.movielist ul li a");
  //console.debug("parser.js loldyttParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js loldyttParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function pianyuanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js pianyuanParser content is: " + content);
  //console.debug("parser.js pianyuanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.minfo ul.detail h4.nomt a");
  //console.debug("parser.js pianyuanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pianyuanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function btdx8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btdx8Parser content is: " + content);
  //console.debug("parser.js btdx8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post-grid div h3.entry-title a");
  //console.debug("parser.js btdx8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btdx8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function pianhdParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js pianhdParser content is: " + content);
  //console.debug("parser.js pianhdParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.stui-vodlist__media li div.detail h3 a");
  //console.debug("parser.js pianhdParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pianhdParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function hkb123Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js hkb123Parser content is: " + content);
  //console.debug("parser.js hkb123Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.channel-content ul li p a");
  //console.debug("parser.js hkb123Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hkb123Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function piankuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js piankuParser content is: " + content);
  //console.debug("parser.js piankuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.sr_lists dl dd p strong a");
  //console.debug("parser.js piankuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js piankuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function pianbaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js pianbaParser content is: " + content);
  //console.debug("parser.js pianbaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.stui-vodlist__detail h4 a");
  //console.debug("parser.js pianbaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pianbaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function gimyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js gimyParser content is: " + content);
  //console.debug("parser.js gimyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.info li:nth-child(1) a");
  //console.debug("parser.js gimyParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js gimyParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function ys88Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js ys88Parser content is: " + content);
  //console.debug("parser.js ys88Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.index-area ul li a");
  //console.debug("parser.js ys88Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ys88Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function xunbodyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js xunbodyParser content is: " + content);
  //console.debug("parser.js xunbodyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.info h2 a");
  //console.debug("parser.js xunbodyParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xunbodyParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function dililitvParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js dililitvParser content is: " + content);
  //console.debug("parser.js dililitvParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.m-movies article>a");
  //console.debug("parser.js dililitvParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dililitvParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function ys1090Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js ys1090Parser content is: " + content);
  //console.debug("parser.js ys1090Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.detail h3.title a");
  //console.debug("parser.js ys1090Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ys1090Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function dadatutuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js dadatutuParser content is: " + content);
  //console.debug("parser.js dadatutuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.detail h3.title a");
  //console.debug("parser.js dadatutuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dadatutuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function mvcatParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js mvcatParser content is: " + content);
  //console.debug("parser.js mvcatParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#searchOutput a.list");
  //console.debug("parser.js mvcatParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mvcatParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function zxzjParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js zxzjParser content is: " + content);
  //console.debug("parser.js zxzjParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.stui-vodlist__detail a");
  //console.debug("parser.js zxzjParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zxzjParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function yizidyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js yizidyParser content is: " + content);
  //console.debug("parser.js yizidyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.movielist ul li h5 a");
  //console.debug("parser.js yizidyParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js yizidyParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function movieffmParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js movieffmParser content is: " + content);
  //console.debug("parser.js movieffmParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.details div.title a");
  //console.debug("parser.js movieffmParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js movieffmParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function tv777Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js tv777Parser content is: " + content);
  //console.debug("parser.js tv777Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.vodlist li.searchlist_item div.searchlist_titbox h4 a");
  //console.debug("parser.js tv777Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tv777Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function hktvybParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js hktvybParser content is: " + content);
  //console.debug("parser.js hktvybParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.detail h4.title a");
  //console.debug("parser.js hktvybParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hktvybParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function hanjutvParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js hanjutvParser content is: " + content);
  //console.debug("parser.js hanjutvParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.item div.text h3 a");
  //console.debug("parser.js hanjutvParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hanjutvParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function okzywParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js okzywParser content is: " + content);
  //console.debug("parser.js okzywParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.xing_vb ul li span.xing_vb4 a");
  //console.debug("parser.js okzywParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js okzywParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function mahuazyParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js mahuazyParser content is: " + content);
  //console.debug("parser.js mahuazyParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.xing_vb ul li span.xing_vb4 a");
  //console.debug("parser.js mahuazyParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mahuazyParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function kuyunzywParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js kuyunzywParser content is: " + content);
  //console.debug("parser.js kuyunzywParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.xing_vb ul li span.xing_vb4 a");
  //console.debug("parser.js kuyunzywParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kuyunzywParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function zuidazy4Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js zuidazy4Parser content is: " + content);
  //console.debug("parser.js zuidazy4Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.xing_vb ul li span.xing_vb4 a");
  //console.debug("parser.js zuidazy4Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zuidazy4Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function btmaoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  console.debug("parser.js btmaoParser content is: " + content);
  //console.debug("parser.js btmaoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.minfo div.movTt a");
  //console.debug("parser.js btmaoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btmaoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

//book
function jiumodiaryParser(content, url, source, keyword) {
  //jiumodiary.com request the api,then return json
  /*
   data = [
    {
      view_type: "view_sidebar",
      view_type_sidebar_priority: 40,
      view_host: "纸质图书转让 (kongfz.com):",
      view_host_link: "http://www.kongfz.com/",
      details: {
        status: "succeed",
        data: [
          {
            img_link: "//www2.jiumodiary.com/kongfz_img_url.php?url=TVphV01pY3dPT1dBK2syYjhtYTVpQnFEMzFReTlVcUtTUjdBZ3lMekZsUG5MM2NYY2VoUHY2aEpDaXpDWjliUjN2MHgxV2NKZS81dVZ3NVZZQVNnNUo2bnJXRjVNU0JBbGdycWpmcFpoQkk9",
            link: "http://book.kongfz.com/185596/1249676356/",
            title: "查理芒格的智慧",
            des: "美）哈格斯特朗; 机械工业出版社; 2015; 精装;",
            price: "¥40.00",
            used: "九品",
            time: "闻雅书店",
            v_des: "发布书店: 闻雅书店<br />美）哈格斯特朗; 机械工业出版社; 2015; 精装;",
            rate_summary: 2003,
            host: "纸质图书转让 (kongfz.com)",
            v_right1: "¥40.00",
            v_right2: "九品",
          },
        ],
      },
    },
  ]
  */
  //console.debug("parser.js jiumodiaryParser content is: " + JSON.stringify(content));

  let hrefs = [];
  for (let item of content) {
    //console.debug("parser.js jiumodiaryParser item is: " + JSON.stringify(item));
    //console.debug("parser.js jiumodiaryParser item.details is: " + JSON.stringify(item.details));
    //console.debug("parser.js jiumodiaryParser item.details.data is: " + JSON.stringify(item.details.data));
    if (item.details && item.details.data) {
      for (let data of item.details.data) {
        //console.debug("parser.js jiumodiaryParser item.details.data is: " + JSON.stringify(data));
        let href = data.link;
        let text = data.title;
        let desc = data.desc;
        //console.debug("parser.js jiumodiaryParser href is: " + href + ", text is:" + text);

        if (href && text) {
          hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
        }
      }
    }
  }
  //console.debug("parser.js jiumodiaryParser hrefs is: " + JSON.stringify(hrefs));

  return hrefs;
}

function zlibraryParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zlibraryParser content is: " + content);
  //console.debug("parser.js zlibraryParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#searchResultBox div.resItemBox div table tr td table tbody tr td h3 a");
  //console.debug("parser.js zlibraryParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zlibraryParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function epubeeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js epubeeParser content is: " + content);
  //console.debug("parser.js epubeeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#get_ebook_list div.get_ebook_list div.ebookitem div.list_title a");
  //console.debug("parser.js epubeeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js epubeeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function shiyisoushuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js shiyisoushuParser content is: " + content);
  //console.debug("parser.js shiyisoushuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.ant-list-item div div:nth-child(2)>a");
  //console.debug("parser.js shiyisoushuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js shiyisoushuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function shugeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js shugeParser content is: " + content);
  //console.debug("parser.js shugeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("article.inner-entry div.grid-content header h2 a");
  //console.debug("parser.js shugeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js shugeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function libgenParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js libgenParser content is: " + content);
  //console.debug("parser.js libgenParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table[rules='rows'] tbody tr td[width='500'] a[title]");
  //console.debug("parser.js libgenParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js libgenParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function shubanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js shubanParser content is: " + content);
  //console.debug("parser.js shubanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.entry-wrapper header.entry-header h2.entry-title a");
  //console.debug("parser.js shubanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js shubanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function sobooksParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sobooksParser content is: " + content);
  //console.debug("parser.js sobooksParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.card-item div.thumb-img>a");
  //console.debug("parser.js sobooksParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let id = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.getAttribute("title");
      let desc = keyword;
      //console.debug("parser.js sobooksParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ipfslabParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ipfslabParser content is: " + content);
  //console.debug("parser.js ipfslabParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#hits div.hit div.hit-content h2.hit-name a");
  //console.debug("parser.js ipfslabParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ipfslabParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function volmoeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js volmoeParser content is: " + content);
  //console.debug("parser.js volmoeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("tr.listbg td a:nth-child(2)");
  //console.debug("parser.js volmoeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js volmoeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ebookeeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ebookeeParser content is: " + content);
  //console.debug("parser.js ebookeeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("#booklist ol li a");
  //console.debug("parser.js ebookeeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ebookeeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ebooks777Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ebooks777Parser content is: " + content);
  //console.debug("parser.js ebooks777Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content header a");
  //console.debug("parser.js ebooks777Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ebooks777Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function magazinelibParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js magazinelibParser content is: " + content);
  //console.debug("parser.js magazinelibParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("header.entry-header h2.entry-title a");
  //console.debug("parser.js magazinelibParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js magazinelibParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function audiobookbayParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js audiobookbayParser content is: " + content);
  //console.debug("parser.js audiobookbayParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post div.postTitle h2 a");
  //console.debug("parser.js audiobookbayParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js audiobookbayParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function pdfdriveParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js pdfdriveParser content is: " + content);
  //console.debug("parser.js pdfdriveParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row div.col-sm div.file-right a");
  //console.debug("parser.js pdfdriveParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pdfdriveParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ebook3000Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ebook3000Parser content is: " + content);
  //console.debug("parser.js ebook3000Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.list_box div.list_box_title a ");
  //console.debug("parser.js ebook3000Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ebook3000Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ebookbbParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ebookbbParser content is: " + content);
  //console.debug("parser.js ebookbbParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post h2.title a");
  //console.debug("parser.js ebookbbParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ebookbbParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function mangakakalotParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mangakakalotParser content is: " + content);
  //console.debug("parser.js mangakakalotParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h3.story_name a");
  //console.debug("parser.js mangakakalotParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mangakakalotParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ibooksParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ibooksParser content is: " + content);
  //console.debug("parser.js ibooksParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post_box div.headline_area h2.headline a");
  //console.debug("parser.js ibooksParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ibooksParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ebookhunterParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ebookhunterParser content is: " + content);
  //console.debug("parser.js ebookhunterParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.index_box div.index_box_title a");
  //console.debug("parser.js ebookhunterParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ebookhunterParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function mangasushiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mangasushiParser content is: " + content);
  //console.debug("parser.js mangasushiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post-title h3 a");
  //console.debug("parser.js mangasushiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mangasushiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

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
