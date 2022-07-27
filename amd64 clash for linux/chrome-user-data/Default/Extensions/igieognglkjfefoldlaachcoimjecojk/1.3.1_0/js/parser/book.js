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
        if (!desc) desc = keyword;
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

function xiangshi123Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xiangshi123Parser content is: " + content);
  //console.debug("parser.js xiangshi123Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.mst_info a");
  //console.debug("parser.js xiangshi123Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xiangshi123Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function lorefreeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js lorefreeParser content is: " + content);
  //console.debug("parser.js lorefreeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.caption a");
  //console.debug("parser.js lorefreeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js lorefreeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function torrentorgcnParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js torrentorgcnParser content is: " + content);
  //console.debug("parser.js torrentorgcnParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("span.item_title a");
  //console.debug("parser.js torrentorgcnParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js torrentorgcnParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function zxcsParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zxcsParser content is: " + content);
  //console.debug("parser.js zxcsParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("dl#plist dt>a");
  //console.debug("parser.js zxcsParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zxcsParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function owlookParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js owlookParser content is: " + content);
  //console.debug("parser.js owlookParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result_item li>a");
  //console.debug("parser.js owlookParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js owlookParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function toplinksParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js toplinksParser content is: " + content);
  //console.debug("parser.js toplinksParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table.table  tr td a");
  //console.debug("parser.js toplinksParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js toplinksParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function zhishikooParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js zhishikooParser content is: " + content);
  //console.debug("parser.js zhishikooParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.post h3 a");
  //console.debug("parser.js zhishikooParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js zhishikooParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function kindleerParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js kindleerParser content is: " + content);
  //console.debug("parser.js kindleerParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.search-page li.entry-title a");
  //console.debug("parser.js kindleerParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js kindleerParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function iydwangParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js iydwangParser content is: " + content);
  //console.debug("parser.js iydwangParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("header.entry-header h2.entry-title a");
  //console.debug("parser.js iydwangParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js iydwangParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function ctextorgParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js ctextorgParser content is: " + content);
  //console.debug("parser.js ctextorgParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.searchres tr td div.ctext a");
  //console.debug("parser.js ctextorgParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js ctextorgParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function bookinlifeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bookinlifeParser content is: " + content);
  //console.debug("parser.js bookinlifeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("table#tab tr td.lhlist:nth-child(4) a");
  //console.debug("parser.js bookinlifeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bookinlifeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function huiyankanParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js huiyankanParser content is: " + content);
  //console.debug("parser.js huiyankanParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("main#main header.entry-header h2.entry-title a");
  //console.debug("parser.js huiyankanParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js huiyankanParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function sxpdfParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js sxpdfParser content is: " + content);
  //console.debug("parser.js sxpdfParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("main#main header.entry-header h2.entry-title a");
  //console.debug("parser.js sxpdfParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js sxpdfParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function banshujiangParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js banshujiangParser content is: " + content);
  //console.debug("parser.js banshujiangParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.book-property li a");
  //console.debug("parser.js banshujiangParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js banshujiangParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function bookstackParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bookstackParser content is: " + content);
  //console.debug("parser.js bookstackParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.row ul li div:nth-child(2) a");
  //console.debug("parser.js bookstackParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bookstackParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function xz577Parser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js xz577Parser content is: " + content);
  //console.debug("parser.js xz577Parser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.result.c-container.new-pmd h3.t a");
  //console.debug("parser.js xz577Parser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js xz577Parser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function aibooksParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js aibooksParser content is: " + content);
  //console.debug("parser.js aibooksParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.card-item h3 a");
  //console.debug("parser.js aibooksParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js aibooksParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function qqszzParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js qqszzParser content is: " + content);
  //console.debug("parser.js qqszzParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.posts-ul li article h2 a");
  //console.debug("parser.js qqszzParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js qqszzParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function dushudarenParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js dushudarenParser content is: " + content);
  //console.debug("parser.js dushudarenParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("header.entry-header h2.entry-title a");
  //console.debug("parser.js dushudarenParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js dushudarenParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function nmodParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js nmodParser content is: " + content);
  //console.debug("parser.js nmodParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.card-item h3 a");
  //console.debug("parser.js nmodParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js nmodParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function digilibrariesParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js digilibrariesParser content is: " + content);
  //console.debug("parser.js digilibrariesParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.ebook-title div h2 a");
  //console.debug("parser.js digilibrariesParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js digilibrariesParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function onlinebooksParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js onlinebooksParser content is: " + content);
  //console.debug("parser.js onlinebooksParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.nodot li a");
  //console.debug("parser.js onlinebooksParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js onlinebooksParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function bookseeParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js bookseeParser content is: " + content);
  //console.debug("parser.js bookseeParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div#searchResultBox div.resItemBox div a[href^='book/']");
  //console.debug("parser.js bookseeParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js bookseeParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function gutenbergParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js gutenbergParser content is: " + content);
  //console.debug("parser.js gutenbergParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("ul.results li.booklink a.link");
  //console.debug("parser.js gutenbergParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js gutenbergParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function cnxorgParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js cnxorgParser content is: " + content);
  //console.debug("parser.js cnxorgParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("main#results td.title h4 a");
  //console.debug("parser.js cnxorgParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js cnxorgParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}

function manybooksParser(content, url, source, keyword) {
  let myDocument = documentFactory(content);
  //console.debug("parser.js manybooksParser content is: " + content);
  //console.debug("parser.js manybooksParser content is: " + myDocument.innerHTML);
  const elements = myDocument.querySelectorAll("div.content div:nth-child(2) a");
  //console.debug("parser.js manybooksParser elements is: " + elements.length);

  let hrefs = [];
  for (let element of elements) {
    let href = element.getAttribute("href");
    if (href) {
      href = relativeUrlToAbsolute(href, url);
      let text = element.innerText;
      let desc = keyword;
      //console.debug("parser.js manybooksParser href is: " + href + ", text is:" + text);
      if (href && text) {
        hrefs.push({ link: href, linkText: text, desc: desc, source: source, keyword: keyword, url: url, type: "book" });
      }
    }
  }

  return hrefs;
}
