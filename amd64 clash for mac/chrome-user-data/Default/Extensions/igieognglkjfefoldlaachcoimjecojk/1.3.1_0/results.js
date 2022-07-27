var loadCount = 0;

$(document).ready(function () {
  localizeHtmlPage();
  //console.debug("results.js render domain is:" + document.domain);

  initCategory();
  initAds();
  filterInit();

  $("#search").click(function () {
    loadCount = 0;
    let keyword = $("#keyword").val();
    if (!keyword) return;
    document.getElementById("postrow").innerHTML = "";
    //loadCount++;
    loadMore(0, "default");
  });

  $("#searchType").change(function () {
    if ($("#searchType").val() == "magnet") $("#resultFilter").show();
    else $("#resultFilter").hide();
  });

  $("#keyword").on("keyup keypress", function (e) {
    if (e.which == 13) {
      e.preventDefault();
      $("#search").click();
      return false;
    }
  });

  let loc = window.location.href;
  let popup = loc.indexOf("from=popup");
  let background = loc.indexOf("from=background");
  let background_search = loc.indexOf("from=background_search");
  let more_search = loc.indexOf("from=more_search");
  let verify = loc.indexOf("from=verify");

  if (popup == -1) {
    if (background > 0) {
      loadCount = 0;
      let match = loc.match(/keyword=(.*)/);
      //console.debug("results.js match is:" + match);
      if (match) {
        let keyword = match[1];
        if (!keyword) return;
        keyword = base64DecodeUnicode(keyword);
        //console.debug("results.js keyword is:" + keyword);
        $("#keyword").val(keyword);

        document.getElementById("postrow").innerHTML = "";
        loadMore(0, "default");
      }
    } else if (background_search > 0) {
      getStorage().then(function (config) {
        console.debug("results.js config is:" + JSON.stringify(config));
        $("#keyword").val(config.keyword);
        if (config.keyword) {
          render(config.results);
        }
      });
    } else if (verify > 0) {
      getStorage().then(function (config) {
        //console.debug("results.js config is:" + JSON.stringify(config));
        $("#keyword").val(config.keyword);
        if (config.keyword) {
          render(config.results);
        }
      });
    } else if (more_search > 0) {
      getStorage().then(function (config) {
        console.debug("results.js config is:" + JSON.stringify(config));
        $("#keyword").val(config.keyword);
        if (config.keyword) {
          render(config.results);
        }
      });
    }
  }
});

var scroller = document.querySelector("#postrow");
var sentinel = document.querySelector("#sentinel");
var intersectionObserver = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.intersectionRatio > 0)) {
    loadCount++;
    loadMore(loadCount, "default");
  }
});
intersectionObserver.observe(sentinel);

function loadMore(page, filterType = "default") {
  let keyword = $("#keyword").val();
  if (!keyword) return;
  let searchType = $("#searchType").val();
  if (!searchType) searchType = "all";
  console.debug("results.js ready keyword is:" + keyword + ",searchType is:" + searchType + ",page  is:" + page);

  //$("#loader").addClass("loader loader-default is-active");
  document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

  chrome.runtime.sendMessage({ type: "load_more", keyword: keyword, page: page, searchType: searchType, filterType: filterType }, function (response) {
    //console.debug("results.js loadMore info is:" + JSON.stringify(response));
    //console.debug("results.js loadMore info keys is:" + Object.keys(response).length);

    if (response && Object.keys(response).length > 0) {
      if (response.currentPage) loadCount = response.currentPage;
      if (response.results) render(response.results);
    }
  });
}
function render(results) {
  //console.debug("results.js render config is:" + JSON.stringify(results));

  let template = `
              <div class="single-post inner-post">
                <div class="post-info">
                  <div class="post-title">
                    <h3><a href="%href%" target="_blank">%title%</a></h3>
                  </div>
                  <div class="post-content">
                    <p><span class="high-color">%desc%</span><br /></p>
                  </div>
                  <div class="blog-meta fix">
                    <div class="meta-left pull-left">
                      <ul>
                        <li>
                            <p>%search_engine_source% : %source%</p>
                        </li>
                        <li>
                            <p>%search_engine_type% : %type%</p>
                        </li>
                        <li>
                            <p>%more%</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            
    `;

  for (let result of results) {
    //console.debug("results.js render result is:" + JSON.stringify(result) + ", Object.keys is:" + Object.keys(result));
    if (result && Object.keys(result).length > 1) {
      let search_engine_source = chrome.i18n.getMessage("search_engine_source");
      let search_engine_type = chrome.i18n.getMessage("search_engine_type");
      let search_engine_more = chrome.i18n.getMessage("search_engine_more");

      let href = result.link;
      let title = result.linkText;
      let source = result.source;
      let type = result.type;
      let keyword = result.keyword;
      let desc = result.desc;

      if (chrome.i18n.getMessage("website_type_" + type)) {
        type = chrome.i18n.getMessage("website_type_" + type);
      }
      let row = template.replace("%href%", href);
      let url = "<a href='" + result.url + "' target='_blank'>" + search_engine_more + "...</a>";
      row = row.replace("%title%", title);
      row = row.replace("%source%", source);
      row = row.replace("%type%", type);
      row = row.replace("%desc%", desc);
      row = row.replace("%keyword%", keyword);
      row = row.replace("%more%", url);
      row = row.replace("%search_engine_source%", search_engine_source);
      row = row.replace("%search_engine_type%", search_engine_type);
      row = row.replace("%type%", type);
      //console.debug("results.js row result is:" + row);
      let element = document.createElement("div");
      element.setAttribute("class", "single-post");
      element.innerHTML = row;
      document.getElementById("postrow").appendChild(element);
    }
  }
  document.getElementById("loader").setAttribute("class", "loader loader-default");
}

function initCategory() {
  document.getElementById("loader4Category").setAttribute("class", "loader loader-default is-active");
  getLatestEngines()
    .then(function (result) {
      //console.debug("results.js getLatestEngines result:" + JSON.stringify(result));
      if (result && Object.keys(result).length > 0) {
        if (result.upgrade == "reload" && result.latest != local_engines_version) {
          mytoast = $.toast({
            heading: "",
            icon: "info",
            text: chrome.i18n.getMessage("need_to_reload"),
            showHideTransition: "slide",
            allowToastClose: false,
            hideAfter: 2000,
            stack: 1,
            textAlign: "center",
            position: "mid-center",
            beforeHide: function () {
              chrome.runtime.reload();
            },
          });
        } else if (result.upgrade == "upgrade") {
          getStorageItem("prompt")
            .then(function (prompt) {
              if (prompt == null) prompt = result.version;
              if (prompt != result.version) {
                chrome.storage.local.set(
                  {
                    prompt: result.version,
                  },
                  async function () {}
                );

                mytoast = $.toast({
                  heading: "",
                  icon: "info",
                  text: chrome.i18n.getMessage("need_to_upgrade"),
                  showHideTransition: "slide",
                  allowToastClose: false,
                  hideAfter: 2000,
                  stack: 1,
                  textAlign: "center",
                  position: "mid-center",
                  beforeHide: function () {
                    chrome.tabs.create({ url: result.upgrade_url });
                  },
                });
              }
            })
            .catch(function (err) {});
        }
      }

      getStorage()
        .then(function (config) {
          //console.debug("admin.js init config is:" + JSON.stringify(config.categories));
          let user_categories = config.user_categories;
          let categories = config.categories;
          let categories_keys = Object.keys(categories);
          let user_categories_keys = Object.keys(user_categories);
          let merged_categories_keys = categories_keys.concat(user_categories_keys);

          let merged_categories = categories;
          for (let key of user_categories_keys) {
            //console.debug("add.js init  merged_categories_keys is: " + key);
            merged_categories[key] = user_categories[key];
          }
          let options = '<option value="all" selected >' + chrome.i18n.getMessage("website_type_all") + "</option> ";
          for (let key of merged_categories_keys) {
            let category = merged_categories[key];
            let category_value = category.category_value;

            let category_name = category.category_name;
            let category_value_i18 = chrome.i18n.getMessage("category_" + category_value);
            if (!category_value_i18) category_value_i18 = category_name;
            let option = '<option value="' + category_value + '">' + category_value_i18 + "</option>";

            //console.debug("add.js init  category_value is: " + category_value + " i18n is:" + category_value_i18);
            //console.debug("add.js init  option is: " + option);
            options = options + option;
            //console.debug("add.js init  options is: " + options);
          }
          $("#searchType").html(options);
          document.getElementById("loader4Category").setAttribute("class", "loader loader-default");
        })
        .catch(function (err) {
          console.info("result.js getStorage error " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        });
    })
    .catch(function (err) {
      console.info("result.js getLatestEngines error " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    });
}

function initAds() {
  getAds()
    .then(function (ads) {
      //console.debug("results.js initAds banner_ads is: " + JSON.stringify(ads));
      let banner_ads = ads.banner_ads;
      let flow_ads = ads.flow_ads;
      //console.debug("results.js initAds banner_ads is: " + JSON.stringify(banner_ads));
      //console.debug("results.js initAds flow_ads is: " + JSON.stringify(flow_ads));
      for (let key in banner_ads) {
        let item = banner_ads[key];
        let href = item.url;
        let desc = item.desc;

        let loc = document.createElement("a");
        loc.setAttribute("href", href);
        loc.setAttribute("style", "padding-left: 10px");
        loc.setAttribute("target", "_blank");
        loc.innerText = desc;
        document.getElementById("banner-ads").append(loc);
      }
      for (let key in flow_ads) {
        let item = flow_ads[key];
        let href = item.url;
        let desc = item.desc;
        let keyword = desc;
        let title = item.name;
        let source = item.shortname;
        let type = chrome.i18n.getMessage("website_type_ad");

        let template = `
              <div class="single-post inner-post">
                <div class="post-info">
                  <div class="post-title">
                    <h3><a href="%href%" target="_blank">%title%</a></h3>
                  </div>
                  <div class="post-content">
                    <p><span class="high-color">%keyword%</span><br /></p>
                  </div>
                  <div class="blog-meta fix">
                    <div class="meta-left pull-left">
                      <ul>
                        <li>
                            <p>%search_engine_source% : %source%</p>
                        </li>
                        <li>
                            <p>%search_engine_type% : %type%</p>
                        </li>
                        <li>
                            <p>%more%</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            
    `;
        let search_engine_source = chrome.i18n.getMessage("search_engine_source");
        let search_engine_type = chrome.i18n.getMessage("search_engine_type");
        let search_engine_more = chrome.i18n.getMessage("search_engine_more");

        let row = template.replace("%href%", href);
        let url = "<a href='" + href + "' target='_blank'>" + search_engine_more + "...</a>";
        row = row.replace("%title%", title);
        row = row.replace("%source%", source);
        row = row.replace("%type%", type);
        row = row.replace("%keyword%", keyword);
        row = row.replace("%more%", url);
        row = row.replace("%search_engine_source%", search_engine_source);
        row = row.replace("%search_engine_type%", search_engine_type);
        row = row.replace("%type%", type);

        let element = document.createElement("div");
        element.setAttribute("class", "single-post");
        element.innerHTML = row;

        document.getElementById("postrow").appendChild(element);
      }
    })
    .catch(function (err) {
      console.info("result.js initAds error " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    });
}

function filterInit() {
  $("#default").click(function () {
    loadCount = 0;
    let keyword = $("#keyword").val();
    if (!keyword) return;
    document.getElementById("postrow").innerHTML = "";
    //loadCount++;
    loadMore(0, "default");
  });
  $("#byhot").click(function () {
    loadCount = 0;
    let keyword = $("#keyword").val();
    if (!keyword) return;
    document.getElementById("postrow").innerHTML = "";
    //loadCount++;
    loadMore(0, "byhot");
  });
  $("#bydate").click(function () {
    loadCount = 0;
    let keyword = $("#keyword").val();
    if (!keyword) return;
    document.getElementById("postrow").innerHTML = "";
    //loadCount++;
    loadMore(0, "bydate");
  });
  $("#bysize").click(function () {
    loadCount = 0;
    let keyword = $("#keyword").val();
    if (!keyword) return;
    document.getElementById("postrow").innerHTML = "";
    //loadCount++;
    loadMore(0, "bysize");
  });
}
