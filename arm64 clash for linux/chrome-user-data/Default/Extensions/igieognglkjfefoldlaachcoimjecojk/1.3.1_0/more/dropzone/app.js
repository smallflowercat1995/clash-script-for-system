//https://www.dropzonejs.com/

Dropzone.autoDiscover = false;

function init() {
  localizeHtmlPage();

  FastClick.attach(document.body);

  var allSections = [],
    sections = [],
    //navElement = document.querySelector("main > nav"),
    navElement = null,
    mainElement = document.querySelector("main"),
    headerElement = document.querySelector("body > header"),
    windowHeight = getWindowHeight();

  // Makes sure a function isn't called too often.
  function buffer(callBack) {
    var timeoutId,
      lastCall = 0,
      bufferSpan = 200;

    var bufferedFunction = function () {
      // Already buffered
      if (timeoutId) return;

      // Last call has been long ago enough
      if (Date.now() - lastCall > bufferSpan) {
        callBack();
        lastCall = Date.now();
      } else {
        timeoutId = setTimeout(function () {
          timeoutId = null;
          callBack();
          lastCall = Date.now();
        }, bufferSpan);
      }
    };

    return bufferedFunction;
  }

  function getWindowHeight() {
    return document.body.getBoundingClientRect().height;
  }

  function Section(element) {
    this.element = element;
    this.isCurrent = false;
    this.navElement = null;
    this.parent = null;
    this.subSections = [];
    this.name = element.innerHTML;
    this.id = element.id;
    this.level = parseInt(element.tagName.substr(1)) - 1;
    this.updatePosition();
  }
  Section.prototype.getSubSectionsHeight = function () {
    var height = 0;
    for (var i = 0; i < this.subSections.length; i++) {
      height += this.subSections[i].navElement.getBoundingClientRect().height;
    }
    return height;
  };
  Section.prototype.addSubSection = function (subSection) {
    this.subSections.push(subSection);
    subSection.parent = this;
  };
  Section.prototype.updatePosition = function () {
    var top = 0,
      obj = this.element;

    do {
      top += obj.offsetTop;
    } while ((obj = obj.offsetParent));

    this.top = top;
  };
  Section.prototype.getHtml = function () {
    var element = document.createElement("div");
    element.classList.add("level-" + this.level);

    var link = document.createElement("a");
    link.href = "#" + this.id;
    link.innerHTML = this.name;

    element.appendChild(link);

    if (this.subSections.length > 0) {
      var subSectionsElement = document.createElement("div");
      subSectionsElement.classList.add("sub-sections");

      for (var i = 0; i < this.subSections.length; i++) {
        subSectionsElement.appendChild(this.subSections[i].getHtml());
      }

      element.appendChild(subSectionsElement);
      this.subSectionsElement = subSectionsElement;
    }

    this.navElement = element;
    this.linkElement = link;
    return element;
  };
  Section.prototype.highlight = function (notCurrentSection) {
    if (!notCurrentSection) {
      if (this.isCurrent) return;
      this.isCurrent = true;
      for (var i = 0; i < allSections.length; i++) {
        if (allSections[i] !== this) {
          allSections[i].downlight();
        }
      }
      this.linkElement.classList.add("current");
    }
    this.navElement.classList.add("visible");
    if (this.parent) this.parent.highlight(true);

    if (this.level == 0 && this.subSectionsElement) {
      var height = this.getSubSectionsHeight();
      this.subSectionsElement.style.height = height + "px";
    }
  };
  // He he, funny name
  Section.prototype.downlight = function () {
    this.isCurrent = false;
    //this.navElement.classList.remove("visible");
    //this.linkElement.classList.remove("current");

    if (this.level == 0 && this.subSectionsElement) {
      this.subSectionsElement.style.height = "0px";
    }
  };

  function parseSections() {
    var headlines = document.querySelectorAll("main > section > h1");
    //var headlines = document.querySelectorAll('main > section > h1, main > section > h2');
    var lastSection;

    for (var i = 0; i < headlines.length; i++) {
      var headline = headlines[i];
      var section = new Section(headline);
      if (section.id == "try-it-out" || section.id == "news") continue;
      if (section.level == 0) {
        lastSection = section;
        sections.push(section);
      } else {
        lastSection.addSubSection(section);
      }

      allSections.push(section);
    }
  }

  // Dropzone

  var dropzone = new Dropzone("#demo-upload", {
    previewTemplate: document.querySelector("#preview-template").innerHTML,
    parallelUploads: 2,
    thumbnailHeight: 120,
    thumbnailWidth: 120,
    maxFilesize: 3,
    filesizeBase: 1000,
    thumbnail: function (file, dataUrl) {
      if (file.previewElement) {
        file.previewElement.classList.remove("dz-file-preview");
        var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
        for (var i = 0; i < images.length; i++) {
          var thumbnailElement = images[i];
          thumbnailElement.alt = file.name;
          thumbnailElement.src = dataUrl;
        }
        setTimeout(function () {
          file.previewElement.classList.add("dz-image-preview");
        }, 1);
      }
    },
  });

  // Now fake the file upload, since GitHub does not handle file uploads
  // and returns a 404

  var minSteps = 6,
    maxSteps = 60,
    timeBetweenSteps = 100,
    bytesPerStep = 100000;

  dropzone.uploadFiles = async function (files) {
    document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

    var self = this;

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      let smms = new SMMS();
      let data = await smms.upload(file);
      if (data && data.url) {
        //console.debug("urls is " + data.url);
        let url = data.url;
        let hash = data.hash;
        let delete_url = data.delete_url;
        chrome.runtime.sendMessage({ type: "reverse_image", url: url, hash: hash, delete_url: delete_url }, function (response) {
          //console.debug("scraper.js getImageInfo info is:" + JSON.stringify(response.info));
          console.debug("background.js search response:" + JSON.stringify(response));
          //smms.delete(hash);
          document.getElementById("loader").setAttribute("class", "loader loader-default");
          getStorage().then(function (config) {
            console.debug("results.js config is:" + JSON.stringify(config.results));
          });
          chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
          });
          let parameter = "?from=more_search&keyword=" + encodeURIComponent(url);

          chrome.storage.local.set(
            {
              keyword: url,
            },
            async function () {
              //console.debug("utils.js getLatestEngines upgrade :" + JSON.stringify(config));
            }
          );

          chrome.tabs.create({ url: chrome.extension.getURL("/more/reverseimage_results.html") + parameter });
        });
        totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

        for (var step = 0; step < totalSteps; step++) {
          var duration = timeBetweenSteps * (step + 1);
          setTimeout(
            (function (file, totalSteps, step) {
              return function () {
                file.upload = {
                  progress: (100 * (step + 1)) / totalSteps,
                  total: file.size,
                  bytesSent: ((step + 1) * file.size) / totalSteps,
                };

                self.emit("uploadprogress", file, file.upload.progress, file.upload.bytesSent);
                if (file.upload.progress == 100) {
                  file.status = Dropzone.SUCCESS;
                  self.emit("success", file, "success", null);
                  self.emit("complete", file);
                  self.processQueue();
                }
              };
            })(file, totalSteps, step),
            duration
          );
        }
      } else {
        document.getElementById("loader").setAttribute("class", "loader loader-default");
        //self.removeFile(file);
        self.emit("error", file, "error", null);
      }
    }
  };
}

document.addEventListener("DOMContentLoaded", init);

function SMMS() {}

SMMS.prototype.upload = async function (file) {
  return new Promise(function (resolve) {
    var formData = new FormData();
    formData.processData = false;
    formData.contentType = false;
    formData.append("smfile", file, file.name);

    let url = "https://sm.ms/api/v2/upload";
    let xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      //console.debug("utils.js httpPST response  is:" + JSON.stringify(xhr));
      //let headers = xhr.getAllResponseHeaders();
      //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));
      console.debug("utils.js httpPST response is:" + xhr.response);
      let json = JSON.parse(xhr.response);

      if (json.code == "success") {
        resolve(json.data);
      } else if (json.code == "image_repeated") {
        let url = json.images;
        let data = {
          url: url,
        };
        resolve(data);
      } else {
        resolve();
      }
    };
    xhr.onerror = function (err) {};
    xhr.ontimeout = function (err) {};
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Authorization", "OHLOC1R7PKEKTWG8Nb8pY0gt85eJkkpu");
    xhr.send(formData);
  });
};

SMMS.prototype.delete = async function (hash) {
  return new Promise(function (resolve) {
    let url = "https://sm.ms/api/v2/delete/" + hash;
    let xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      //console.debug("utils.js httpPST response  is:" + JSON.stringify(xhr));
      //let headers = xhr.getAllResponseHeaders();
      //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));
      console.debug("utils.js httpPST response is:" + xhr.response);
      let json = JSON.parse(xhr.response);

      if (json.code == "success") {
        resolve(json.data);
      } else if (json.code == "image_repeated") {
        let url = json.images;
        let data = {
          url: url,
        };
        resolve(data);
      } else {
        resolve();
      }
    };
    xhr.onerror = function (err) {};
    xhr.ontimeout = function (err) {};
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Authorization", "OHLOC1R7PKEKTWG8Nb8pY0gt85eJkkpu");
    xhr.send();
  });
};

function google(imageUrl) {
  let url = "https://www.google.com/searchbyimage?image_url=" + encodeURIComponent(imageUrl);
  let xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    //console.debug("utils.js httpPST response  is:" + JSON.stringify(xhr));

    chrome.tabs.create({
      url: url,
    });
    //let headers = xhr.getAllResponseHeaders();
    //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));
    console.debug("utils.js httpPST response is:" + xhr.response);
  };
  xhr.onerror = function (err) {};
  xhr.ontimeout = function (err) {};
  xhr.open("POST", url, true);
  xhr.send();
}

function tineye(imageUrl) {
  let url = "https://tineye.com/search/?pluginver=chrome-1.3.0&url=" + encodeURIComponent(imageUrl);
  let xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    //console.debug("utils.js httpPST response  is:" + JSON.stringify(xhr));
    chrome.tabs.create({
      url: url,
    });
    let headers = xhr.getAllResponseHeaders();
    //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));
    console.debug("utils.js httpPST response is:" + xhr.response);
  };
  xhr.onerror = function (err) {};
  xhr.ontimeout = function (err) {};
  xhr.open("GET", url, true);
  xhr.send();
}

function googleUpload(file) {
  var formData = new FormData();
  formData.processData = false;
  formData.contentType = false;
  formData.append("encoded_image", file, file.name);

  let url = "https://www.google.com/searchbyimage/upload";
  let xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    //console.debug("utils.js httpPST response  is:" + JSON.stringify(xhr));
    chrome.tabs.create({
      url: xhr.responseURL,
    });
    //let headers = xhr.getAllResponseHeaders();
    //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));
    //console.debug("utils.js httpPST response is:" + xhr.response);
  };
  xhr.onerror = function (err) {};
  xhr.ontimeout = function (err) {};
  xhr.open("POST", url, true);
  xhr.send(formData);
}

function xlist(file) {
  var formData = new FormData();
  formData.processData = false;
  formData.contentType = false;
  formData.append("pic", file, file.name);
  formData.append("lg", "zh");

  let url = "https://xslist.org/search/pic";
  let xhr = new XMLHttpRequest();
  xhr.onload = function (e) {
    ///console.debug("utils.js httpPST response  is:" + JSON.stringify(xhr));

    //let headers = xhr.getAllResponseHeaders();
    //console.debug("utils.js httpPST response headers is:" + JSON.stringify(headers));
    console.debug("utils.js httpPOST response is:" + xhr.response);
  };
  xhr.onerror = function (err) {};
  xhr.ontimeout = function (err) {};
  xhr.open("POST", url, true);
  xhr.send(formData);
}
