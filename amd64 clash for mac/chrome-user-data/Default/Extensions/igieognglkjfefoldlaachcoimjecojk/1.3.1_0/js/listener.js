function interceptListener(type, element) {
  if (typeof element[type] == "function") {
    element[type] = function () {
      let original = this[type];
      this.allListeners = this.allListeners || {};
      return function () {
        this.allListeners[arguments[0]] = arguments[0] in this.allListeners ? this.allListeners[arguments[0]] + 1 : 1;
        return original.apply(this, arguments);
      };
    }.bind(element)();
  }
}

function getScrollEventListeners() {
  const allElements = Array.prototype.slice.call(document.querySelectorAll("*"));
  allElements.push(document);
  const types = [];
  for (let ev in window) {
    if (/^on/.test(ev)) types[types.length] = ev;
    //console.debug("autoscroll.js listAllEventListeners window event:" + ev);
  }

  let elements = [];
  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    for (let j = 0; j < types.length; j++) {
      if (typeof currentElement[types[j]] === "function") {
        elements.push({
          node: currentElement,
          type: types[j],
          func: currentElement[types[j]].toString(),
        });
      }
      if (types[i] == "onscroll") {
        //console.debug("autoscroll.js listAllEventListeners element:" + currentElement.tagName + ", event:" + types[i]);
        return 1;
      }
    }
  }
  return 0;
}

function injectLoading(){
  let loading = document.createElement("div");
  loading.setAttribute("style","display:none");
  document.doeumentElement.appendChild(loading);  

  document.documentElement.appendChild(loading);
}

function injectMeta() {
  let code = `
  let policies = document.querySelectorAll("meta[http-equiv='Content-Security-Policy']");
  for (let policy of policies) {
    policy.remove();
  }  
  let metasrc = document.createElement("meta");
  metasrc.httpEquiv = "Content-Security-Policy";
  metasrc.content ="style-src 'self' filesystem http: https: 'unsafe-inline'; script-src 'self' 'unsafe-eval' ;child-src gap: filesystem http: https: data: blob: 'unsafe-inline' 'unsafe-eval' 'self' ;frame-src gap: filesystem http: https: data: blob: 'unsafe-inline' 'unsafe-eval' 'self'; object-src blob: 'unsafe-eval' 'self' ";
  document.head.appendChild(metasrc);  
  `;

  var script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = code;
  //console.debug("content-script.js inject script,userAgent is: " + window.navigator.userAgent);
  document.documentElement.appendChild(script);
  script.remove();
}

//injectMeta();
interceptListener("attachEvent", window);
interceptListener("addEventListener", window);

//for autoscroll to detect infinite scrolling

var lastScrollHeight = new Array();
var lastScrollTop = new Array();

config = { attributes: true, childList: true, subtree: true };
callback = function (mutationsList, instance) {
  let scrollTop;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  lastScrollTop.push(scrollTop);
  lastScrollHeight.push(document.documentElement.scrollHeight);

  //console.debug("listener.js Observer lastscrollHeight is:" + lastScrollHeight + ",lastscrollTop is:" + scrollTop);
};

var mutationObserver = new MutationObserver(callback);
var resizeObserver = new ResizeObserver((entries) => {
  let scrollTop;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  lastScrollTop.push(scrollTop);
  lastScrollHeight.push(document.documentElement.scrollHeight);
  //console.debug("listener.js resizeObserver lastscrollHeight1 is:" + lastScrollHeight + ",lastscrollTop1 is:" + scrollTop);
});

function startObserver() {
  //MutatiotionObserver
  mutationObserver.observe(document.documentElement, config);

  //resizeObserver
  resizeObserver.observe(document.documentElement);
}

function ifBottom() {
  let scrollTop;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = window.document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = window.document.body.scrollTop;
  }

  let scrollHeight = document.documentElement.scrollHeight;
  let clientHeight = document.documentElement.clientHeight;
  lastScrollTop.push(scrollTop);
  lastScrollHeight.push(scrollHeight);

  let scrollTopUnChanged = 0;
  if (lastScrollTop.length >= 200) {
    let tops = lastScrollTop.slice(-200, -1);
    //console.debug("listener.js ifBottom tops is:" + tops);
    if (Math.max.apply(null, tops) === Math.min.apply(null, tops)) scrollTopUnChanged = 1;
  }
  let scrollHeightUnChanged = 0;
  if (lastScrollHeight.length >= 200) {
    let heights = lastScrollHeight.slice(-200, -1);
    //console.debug("listener.js ifBottom heights is:" + heights);
    if (Math.max.apply(null, heights) === Math.min.apply(null, heights)) scrollHeightUnChanged = 1;
  }
  //console.debug("listener.js ifBottom scrollTopUnChanged is:" + scrollTopUnChanged + ",scrollTopUnChanged1 is:" + scrollTopUnChanged);
  //console.debug("listener.js ifBottom scrollTop + clientHeight is:" + (scrollTop + clientHeight) + ",scrollHeight is:" + scrollHeight);

  //if (scrollTop + clientHeight + 10 >= scrollHeight && scrollTopUnChanged == 1 && scrollHeightUnChanged == 1) {
  if (scrollTopUnChanged == 1 && scrollHeightUnChanged == 1) {
    //console.debug("listener.js ifBottom return 1");
    mutationObserver.disconnect();
    resizeObserver.disconnect();
    return 1;
  } else {
    return 0;
  }
}

//changeUserAgent();
function changeUserAgent() {
  let code = `
    (function () {
      var navigator = window.navigator;
      var modifiedNavigator;
      if ("userAgent" in Navigator.prototype) {
        modifiedNavigator = Navigator.prototype;
      } else {
        modifiedNavigator = Object.create(navigator);
        Object.defineProperty(window, "navigator", {
          value: modifiedNavigator,
          configurable: false,
          enumerable: false,
          writable: false,
        });
      }

      Object.defineProperties(modifiedNavigator, {
        userAgent: {
          value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0",
          configurable: false,
          enumerable: true,
          writable: false,
        },
        appVersion: {
          value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0",
          configurable: false,
          enumerable: true,
          writable: false,
        },
        platform: {
          value: "Macintosh; Intel Mac OS X 10_10",
          configurable: false,
          enumerable: true,
          writable: false,
        },
      });
    } 
    )();`;

  let script = document.createElement("script");
  script.type = "text/javascript";
  script.textContent = code;
  //console.debug("content-script.js inject script,userAgent is: " + window.navigator.userAgent);
  document.documentElement.appendChild(script);
  script.remove();
}
