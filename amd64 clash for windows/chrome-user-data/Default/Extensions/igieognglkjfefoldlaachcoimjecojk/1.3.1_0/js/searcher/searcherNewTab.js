var total = 0;
function cnkiSearcher(url, keyword) {
  //console.debug("parserNewTab.js cnkiSearcher keyword is: " + keyword);
  if (document.getElementById("txt_search")) {
    let element = document.getElementById("txt_search");
    element.value = keyword;
    var handler = setInterval(function () {
      element = document.getElementById("txt_search");
      //console.debug("parserNewTab.js cnkiSearcher value1 is: " + element.value);
      if (element.value == keyword) {
        //console.debug("parserNewTab.js cnkiSearcher value2 is: " + keyword);
        clearInterval(handler);
        document.querySelector("input.search-btn").click();
        setTimeout(function () {}, 1000);
      } else {
        cnkiSearcher(keyword);
      }
    }, 1000);
  } else {
    total++;
    if (total < 7) {
      cnkiSearcher(url, keyword);
    }
  }
}

function baiduImageSearcher(url, keyword) {
  console.debug("parserNewTab.js baiduImageSearcher keyword is: " + keyword);
  if (document.querySelector("input.graph-searchnew-box-input")) {
    let element = document.querySelector("input.graph-searchnew-box-input");
    //element.value = keyword;
    //element.setAttribute("value", keyword);
    //element.focus();
    element.setRangeText(keyword);
    var handler = setInterval(function () {
      element = document.querySelector("input.graph-searchnew-box-input");
      //console.debug("parserNewTab.js baiduImageSearcher value1 is: " + element.value);
      if (element.value == keyword) {
        console.debug("parserNewTab.js baiduImageSearcher value2 is: " + keyword);
        clearInterval(handler);
        setTimeout(function () {}, 1000);

        let clickEvent = new MouseEvent("click", { bubbles: true, cancellable: true });
        clickEvent.initMouseEvent("click");
        let elem = document.querySelector("input.graph-searchnew-submit-url");
        elem.dispatchEvent(clickEvent);

        //setTimeout(function () {}, 2000);
        setTimeout(function () {}, 3000);
      } else {
        baiduImageSearcher(url, keyword);
      }
    }, 1000);
  } else {
    total++;
    if (total < 7) {
      baiduImageSearcher(url, keyword);
    }
  }
}
