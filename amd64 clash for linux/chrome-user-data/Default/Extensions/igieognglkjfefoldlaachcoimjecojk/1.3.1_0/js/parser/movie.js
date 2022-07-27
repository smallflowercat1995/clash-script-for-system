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

function btjiaParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btjiaParser content is: " + content);
  //console.debug("parser.js btjiaParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.body table tbody tr td a:nth-child(6)");
  //console.debug("parser.js btjiaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btjiaParser href is: " + href + ", text is:" + text);
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
  //console.debug("parser.js hkb123Parser content is: " + content);
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
  //console.debug("parser.js piankuParser content is: " + content);
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
  //console.debug("parser.js pianbaParser content is: " + content);
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
  //console.debug("parser.js gimyParser content is: " + content);
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
  //console.debug("parser.js ys88Parser content is: " + content);
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
  //console.debug("parser.js xunbodyParser content is: " + content);
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
  //console.debug("parser.js dililitvParser content is: " + content);
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
  //console.debug("parser.js ys1090Parser content is: " + content);
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
  //console.debug("parser.js dadatutuParser content is: " + content);
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
  //console.debug("parser.js mvcatParser content is: " + content);
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
  //console.debug("parser.js zxzjParser content is: " + content);
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
  //console.debug("parser.js yizidyParser content is: " + content);
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
  //console.debug("parser.js movieffmParser content is: " + content);
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
  //console.debug("parser.js tv777Parser content is: " + content);
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
  //console.debug("parser.js hktvybParser content is: " + content);
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
  //console.debug("parser.js hanjutvParser content is: " + content);
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
  //console.debug("parser.js okzywParser content is: " + content);
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
  //console.debug("parser.js mahuazyParser content is: " + content);
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
  //console.debug("parser.js kuyunzywParser content is: " + content);
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
  //console.debug("parser.js zuidazy4Parser content is: " + content);
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
  //console.debug("parser.js btmaoParser content is: " + content);
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

function dy2018Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dy2018Parser content is: " + content);
  //console.debug("parser.js dy2018Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.co_content8 ul table tbody tr td b a");
  //console.debug("parser.js dy2018Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dy2018Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function xiaodiaoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xiaodiaoParser content is: " + content);
  //console.debug("parser.js xiaodiaoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.co_content8 ul table tbody tr td b a");
  //console.debug("parser.js xiaodiaoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiaodiaoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function ygdy8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ygdy8Parser content is: " + content);
  //console.debug("parser.js ygdy8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.co_content8 ul table tbody tr td b a");
  //console.debug("parser.js ygdy8Parser elements is: " + elements.length);
  let utf8Keyword = encodeURIComponent(keyword);
  let gbkKeyword = GBK.URI.encodeURI(keyword);
  url = url.replace(utf8Keyword, gbkKeyword);
  //console.debug("movie.js ygdy8Parser url  :" + url + ",keyword is:" + keyword + ",gbkKeyword is:" + gbkKeyword + ",utf8Keyword is:" + utf8Keyword);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ygdy8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function btbuluoParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js btbuluoParser content is: " + content);
  //console.debug("parser.js btbuluoParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h2 a.b97da3e174f");
  //console.debug("parser.js btbuluoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js btbuluoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function chapaofanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js chapaofanParser content is: " + content);
  //console.debug("parser.js chapaofanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.list ul.item li:nth-child(1) a");
  //console.debug("parser.js chapaofanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js chapaofanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function meijuttParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js meijuttParser content is: " + content);
  //console.debug("parser.js meijuttParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.cn_box2 ul li a");
  //console.debug("parser.js meijuttParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js meijuttParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function txmeijuParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js txmeijuParser content is: " + content);
  //console.debug("parser.js txmeijuParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row div.detail-line a");
  //console.debug("parser.js txmeijuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js txmeijuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function mjf2020Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js mjf2020Parser content is: " + content);
  //console.debug("parser.js mjf2020Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content h2.thumbnail a[onmouseover]");
  //console.debug("parser.js mjf2020Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js mjf2020Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function meijumiParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js meijumiParser content is: " + content);
  //console.debug("parser.js meijumiParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("h2.entry-title a");
  //console.debug("parser.js meijumiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js meijumiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function bt12Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bt12Parser content is: " + content);
  //console.debug("parser.js bt12Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.infoindex ul div  table tbody tr td a");
  //console.debug("parser.js bt12Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bt12Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function pindao24Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js pindao24Parser content is: " + content);
  //console.debug("parser.js pindao24Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.search-frame div div.col-md-12 div  div div a");
  //console.debug("parser.js pindao24Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js pindao24Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function hanfanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js hanfanParser content is: " + content);
  //console.debug("parser.js hanfanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("article header h2 a");
  //console.debug("parser.js hanfanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js hanfanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function doki8Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js doki8Parser content is: " + content);
  //console.debug("parser.js doki8Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("article.item-list h2.post-box-title a");
  //console.debug("parser.js doki8Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js doki8Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function tokyonothotParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js tokyonothotParser content is: " + content);
  //console.debug("parser.js tokyonothotParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("li a.details");
  //console.debug("parser.js tokyonothotParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tokyonothotParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}

function n7f6Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js n7f6Parser content is: " + content);
  //console.debug("parser.js n7f6Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.media a");
  //console.debug("parser.js n7f6Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js n7f6Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "movie" });
      }
    }
  }

  return hrefs;
}
