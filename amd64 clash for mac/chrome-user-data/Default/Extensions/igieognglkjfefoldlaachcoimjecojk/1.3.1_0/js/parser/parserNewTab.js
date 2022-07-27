//magnet
function piratebayParser(url, source, keyword) {
  const elements = document.querySelectorAll("li.list-entry span.item-name a");
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

//music
function qqmusicParser(url, source, keyword) {
  setTimeout(function () {}, 1000);
  //const elements = document.querySelectorAll("div.songlist__songname span.songlist__songname_txt a:nth-child(1)");
  const elements = document.querySelectorAll("a.js_song");

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiamiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function xiamiParser(url, source, keyword) {
  //const elements = document.querySelectorAll("div.song-name a");
  const elements = document.querySelectorAll("tr td.song_name a[href^='//']");
  //console.debug("parser.js xiamiParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiamiParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function music163Parser(url, source, keyword) {
  const elements = document.querySelectorAll("div.item div.sn div.text a:nth-child(1)");
  //console.debug("parser.js music163Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js music163Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function kuwoParser(url, source, keyword) {
  const elements = document.querySelectorAll("ul.search_list li.song_item div.song_name a");
  //console.debug("parser.js kuwoParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kuwoParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

function kugouParser(url, source, keyword) {
  const elements = document.querySelectorAll("div.song_list ul.list_content li div a.song_name");
  //console.debug("parser.js kugouParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kugouParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "music" });
      }
    }
  }

  return hrefs;
}

//acg
function anixmoeParser(url, source, keyword) {
  //console.debug("parser.js anixmoeParser content is: " + content);
  //console.debug("parser.js anixmoeParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("#data_list tr td:nth-child(3) a:nth-child(1)");
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

function cangkuParser(url, source, keyword) {
  //console.debug("parser.js cangkuParser content is: " + content);
  //console.debug("parser.js cangkuParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("div.post-card section.post-card-wrap>a");
  //console.debug("parser.js cangkuParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cangkuParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function anidexParser(url, source, keyword) {
  //console.debug("parser.js anidexParser content is: " + content);
  //console.debug("parser.js anidexParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("a.torrent");
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

function agefansParser(url, source, keyword) {
  //console.debug("parser.js agefansParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("div.cell_imform div a.cell_imform_name");
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

function qqhentaiParser(url, source, keyword) {
  //console.debug("parser.js qqhentaiParser content is: " + content);
  //console.debug("parser.js qqhentaiParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("div.container div.gallery a");
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

function comic18Parser(url, source, keyword) {
  //console.debug("parser.js comic18Parser content is: " + content);
  //console.debug("parser.js comic18Parser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("div.row div div.well>a");
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

function anirenaParser(url, source, keyword) {
  //console.debug("parser.js anirenaParser content is: " + content);
  //console.debug("parser.js anirenaParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("tr td.torrents_small_info_data1 div>a");
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

function mikuclubParser(url, source, keyword) {
  //console.debug("parser.js mikuclubParser content is: " + content);
  //console.debug("parser.js mikuclubParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("#div.row div.col div.card-img-container div:nth-child(3) a");
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

function cnkiParser(url, source, keyword) {
  //console.debug("parser.js mikuclubParser content is: " + content);
  //console.debug("parser.js mikuclubParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("td.name a");
  //console.debug("parser.js mikuclubParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    let match = href.match(/FileName=(.*)&DbName=(.*)&DbCode=(.*)&/);
    if (match) {
      let filename = match[1];
      let dbname = match[2];
      let dbcode = match[3];
      href = "https://kns.cnki.net/kcms/detail/detail.aspx?filename=" + filename + "&dbname=" + dbname + "&dbcode=" + dbcode;
      let text = element.innerText;
      let desc = keyword;
      console.debug("parser.js mikuclubParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function semanticscholarParser(url, source, keyword) {
  //console.debug("parser.js semanticscholarParser content is: " + content);
  //console.debug("parser.js semanticscholarParser content is: " + document.documentElement.innerHTML);
  const elements = document.querySelectorAll("div.result-page div.cl-paper-row>a");
  //console.debug("parser.js semanticscholarParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js semanticscholarParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
      }
    }
  }

  return hrefs;
}

function somanParser(url, source, keyword) {
  //console.debug("parser.js somanParser content is: " + content);
  //console.debug("parser.js somanParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("p.manga-item-title a");
  //console.debug("parser.js somanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let clickText = element.getAttribute("onclick");
    let match = clickText.match(/openWin\('(.*)', '.*'\);/);
    if (match) {
      console.debug("parser.js somanParser match is: " + match);

      let href = match[1];
      if (href) {
        href = relativeUrlToAbsolute(href, url);
        let text = element.innerText;
        let desc = keyword;
        //console.debug("parser.js somanParser href is: " + href + ", text is:" + text);
        if (href && text) {
          hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "acg" });
        }
      }
    }
  }

  return hrefs;
}

function aminerParser(url, source, keyword) {
  const elements = document.querySelectorAll("div.title-line a");
  //console.debug("parser.js aminerParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js aminerParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "scholar" });
      }
    }
  }

  return hrefs;
}

function baiduImageParser(url, source, keyword) {
  //console.debug("parser.js baiduImageParser content is: " + content);
  //console.debug("parser.js baiduImageParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("div.graph-same-list-item a");
  //console.debug("parser.js baiduImageParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js baiduImageParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function tineyeParser(url, source, keyword) {
  //console.debug("parser.js tineyeParser content is: " + content);
  //console.debug("parser.js tineyeParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("div.match h4 a");
  //console.debug("parser.js tineyeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js tineyeParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "pan" });
      }
    }
  }

  return hrefs;
}

function sogouImageParser(url, source, keyword) {
  //let myDocument = documentFactory(content);
  //console.debug("parser.js sogouImageParser content is: " + content);
  //console.debug("parser.js sogouImageParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("div.similar-box a");
  console.debug("parser.js sogouImageParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let text = element.innerText;
    let href = element.children[0].getAttribute("src");
    if (!text) text = href;
    console.debug("parser.js sogouImageParser href is: " + href + ",text is:" + text);
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let desc = keyword;
      //console.debug("parser.js sogouImageParser href is: " + href + ", text is:" + text);
      if (href) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "reverse_image" });
      }
    }
  }

  return hrefs;
}

function agilestudioParser(url, source, keyword) {
  //console.debug("parser.js agilestudioParser content is: " + content);
  //console.debug("parser.js agilestudioParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("div.subtitle-item");
  //console.debug("parser.js agilestudioParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    //let href = element.getAttribute("href");
    //href = relativeUrlToAbsolute(href, url);
    href = url;
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js agilestudioParser href is: " + href + ", text is:" + text);
    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function findmovieParser(url, source, keyword) {
  //console.debug("parser.js findmovieParser content is: " + content);
  //console.debug("parser.js findmovieParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("div.oneContentTime");
  console.debug("parser.js findmovieParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    //let href = element.getAttribute("href");
    //href = relativeUrlToAbsolute(href, url);
    href = url;
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js findmovieParser href is: " + href + ", text is:" + text);
    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function quodbParser(url, source, keyword) {
  //console.debug("parser.js quodbParser content is: " + content);
  //console.debug("parser.js quodbParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("small.title");
  //console.debug("parser.js quodbParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    //let href = element.getAttribute("href");
    //href = relativeUrlToAbsolute(href, url);
    href = url;
    let text = element.innerText;
    let desc = keyword;
    //console.debug("parser.js quodbParser href is: " + href + ", text is:" + text);
    hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "lines" });
  }

  return hrefs;
}

function aiqichaParser(url, source, keyword) {
  //let myDocument = documentFactory(content);
  //console.debug("parser.js aiqichaParser content is: " + content);
  //console.debug("parser.js aiqichaParser content is: " + myDocument.innerHTML);
  const elements = document.querySelectorAll("div.items h3.title a");
  console.debug("parser.js aiqichaParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js aiqichaParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "company" });
      }
    }
  }

  return hrefs;
}
