var loadCount = 0;
var website_parser = `
  //HTTP请求类型="GET" 和 "GET-自定义"值的模板代码，需要熟悉css selector，请谨慎修改
  //以动漫花园 https://dmhy.anoneko.com 为例，主要修改有两处
    let myDocument = documentFactory(content);
  //修改1：获取搜索结果列表
  const elements = myDocument.querySelectorAll("tr td.title>a");

  let hrefs = [];
  for (let element of elements) {
    //获取搜索结果的链接地址
    let href = element.getAttribute("href");
    if (href) {
      //不需要修改，将相对路径修改为绝对路径
      href = relativeUrlToAbsolute(href, url);
      //修改点2:获取单行搜索结果显示文本
      let text = element.innerText;
      if (href && text) {
        hrefs.push({ link: href, linkText: text, source: source, keyword: keyword, url: url, type: "%type%" });
      }
    }
  }

  return hrefs;
  `;

var newtab_website_parser = `
  //HTTP请求类型="GET-新标签页"和 "GET-新标签页-iframe"值的模板代码，需要熟悉css selector，请谨慎修改
  //以动漫花园 https://dmhy.anoneko.com 为例，主要修改有两处
  //修改1：获取搜索结果列表
  const elements = document.querySelectorAll("tr td.title>a");

  let hrefs = [];
  for (let element of elements) {
    //获取搜索结果的链接地址
    let href = element.getAttribute("href");
    if (href) {
      //不需要修改，将相对路径修改为绝对路径
      href = relativeUrlToAbsolute(href, url);
      //修改点2:获取单行搜索结果显示文本
      let text = element.innerText;
      if (href && text) {
        hrefs.push({ link: href, linkText: text, source: source, keyword: keyword, url: url, type: "%type%" });
      }
    }
  }

  return hrefs;
  `;

$(document).ready(function () {
  localizeHtmlPage();
  localizeHtmlPage1();
  console.debug("add.js ready ");
  init();
  //validate();

  $("#btn_add").click(function () {
    validate();
  });

  let request_method = $("#website_request_method").val();
  let default_searcher = `
        try {
          let response = await httpGet(url);
          return response.body;
        } catch (err) {
          console.info("worker.js search err: " + JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
        }      
      `;
  if (request_method == "GET") {
    $("#website_searcher").prop("disabled", true);
    $("#website_searcher").val(default_searcher);
  } else if (request_method == "GET_CUSTOM") {
    $("#website_searcher").prop("disabled", false);
    $("#website_searcher").val(default_searcher);
  } else if (request_method == "NEWTAB" || request_method == "NEWTAB_IFRAME") {
    $("#website_searcher").prop("disabled", false);
    $("#website_searcher").val("");
  } else {
    $("#website_searcher").prop("disabled", false);
  }

  $("#website_request_method").change(function () {
    let request_method = this.value;
    if (request_method == "GET") {
      $("#website_searcher").prop("disabled", true);
      $("#website_searcher").val(default_searcher);
      $("#website_parser").val(website_parser);
    } else if (request_method == "GET_CUSTOM") {
      $("#website_searcher").prop("disabled", false);
      $("#website_searcher").val(default_searcher);
      $("#website_parser").val(website_parser);
    } else if (request_method == "NEWTAB" || request_method == "NEWTAB_IFRAME") {
      $("#website_searcher").prop("disabled", false);

      $("#website_searcher").val("");
      $("#website_parser").val(newtab_website_parser);
    } else {
      $("#website_searcher").prop("disabled", false);
      $("#website_searcher").val("");
      $("#website_parser").val("");
    }
  });
});

function add() {
  document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

  console.debug("admin.js add() ");
  let website_id = $("#website_id").val();
  let website_name = $("#website_name").val();
  let website_shortname = $("#website_shortname").val();
  let website_search_url = $("#website_search_url").val();
  let website_type = $("#website_type").val();
  let website_request_method = $("#website_request_method").val();
  let website_parser = $("#website_parser").val();
  let keyword_encode = $("#website_search_keyword_encode").val();
  let selector = $("#newtab_selector").val();

  let website_search_keyword = $("#website_search_keyword").val();
  website_parser = base64EncodeUnicode(website_parser);
  let website_searcher = $("#website_searcher").val();
  if (website_request_method == "GET") website_searcher = "default";
  website_searcher = base64EncodeUnicode(website_searcher);

  let data = {
    type: "config_verify",
    keyword: website_search_keyword,
    name: website_name,
    shortname: website_shortname,
    url: website_search_url,
    type: website_type,
    parser: website_parser,
    searcher: website_searcher,
    method: website_request_method,
    selector: selector,
    keyword_encode: keyword_encode,
  };

  chrome.runtime.sendMessage({ type: "config_verify", data: data }, function (response) {
    console.debug("results.js loadMore info is:" + JSON.stringify(response));
    console.debug("results.js loadMore results is:" + JSON.stringify(response.results));
    console.debug("results.js loadMore results length is:" + response.results.length);

    if (response && response.results && response.results.length) {
      getStorage()
        .then(function (config) {
          console.debug("add.js init config is: " + JSON.stringify(config));
          let user_engines = config.user_engines;
          let engines_keys = config.engines_keys;

          let default_engines = config.engines;
          let default_keys = Object.keys(default_engines);

          if (default_keys.indexOf(website_id) >= 0) {
            mytoast = $.toast({
              heading: "",
              icon: "error",
              text: chrome.i18n.getMessage("website_exist"),
              showHideTransition: "slide",
              allowToastClose: false,
              hideAfter: 1000,
              stack: 1,
              textAlign: "center",
              position: "mid-center",
            });
            document.getElementById("loader").setAttribute("class", "loader loader-default");
            return;
          }

          if (engines_keys.indexOf(website_id) == -1) engines_keys.push(website_id);

          if (user_engines == null || Object.keys(user_engines).length == 0) user_engines = {};
          user_engines[website_id] = {
            name: website_name,
            shortname: website_shortname,
            type: website_type,
            url: website_search_url,
            parser: website_parser,
            keyword: website_search_keyword,
            searcher: website_searcher,
            method: website_request_method,
            selector: selector,
            keyword_encode: keyword_encode,
          };
          console.debug("add.js init user_engines is: " + JSON.stringify(user_engines));
          console.debug("add.js init engines_keys is: " + engines_keys);
          console.debug("add.js init website_id is: " + website_id);
          /*
          chrome.storage.sync.set(
            {
              user_engines: user_engines,
              engines_keys: engines_keys,
            },
            function () {}
          );
          */
          chrome.storage.local.set(
            {
              user_engines: user_engines,
              engines_keys: engines_keys,
            },
            function () {
              document.getElementById("loader").setAttribute("class", "loader loader-default");

              mytoast = $.toast({
                heading: "",
                icon: "info",
                text: chrome.i18n.getMessage("add_website_ok"),
                showHideTransition: "slide",
                allowToastClose: false,
                hideAfter: 1000,
                stack: 1,
                textAlign: "center",
                position: "mid-center",
                beforeHide: function () {
                  window.location.href = chrome.extension.getURL("/admin/admin.html");
                },
              });
            }
          );
        })
        .catch(function (err) {});
    } else {
      document.getElementById("loader").setAttribute("class", "loader loader-default");

      mytoast = $.toast({
        heading: "",
        icon: "error",
        text: chrome.i18n.getMessage("add_website_error"),
        showHideTransition: "slide",
        allowToastClose: false,
        hideAfter: 3000,
        stack: 1,
        textAlign: "center",
        position: "mid-center",
        beforeHide: function () {},
      });
    }
  });
}

function init() {
  document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

  let href = window.location.href;

  $("#website_parser").val(website_parser);

  console.debug("add.js init " + href);

  getStorage()
    .then(function (config) {
      //init category
      console.debug("add.js init config.categories is:" + JSON.stringify(config.categories));
      let user_categories = config.user_categories;
      let categories = config.categories;
      let categories_keys = Object.keys(categories);
      console.debug("add.js init  categories_keys is: " + categories_keys);
      let user_categories_keys = Object.keys(user_categories);
      console.debug("add.js init  user_categories_keys is: " + user_categories_keys);
      let merged_categories_keys = categories_keys.concat(user_categories_keys);
      console.debug("add.js init  merged_categories_keys is: " + merged_categories_keys);

      let merged_categories = categories;
      for (let key of user_categories_keys) {
        merged_categories[key] = user_categories[key];
      }
      console.debug("add.js init  merged_categories_keys is: " + merged_categories_keys);
      console.debug("add.js init  merged_categories is: " + JSON.stringify(merged_categories));
      let options = "";
      for (let key of merged_categories_keys) {
        let category = merged_categories[key];
        let category_value = category.category_value;
        let category_name = category.category_name;
        let category_value_i18 = chrome.i18n.getMessage("category_" + category_value);
        if (!category_value_i18) category_value_i18 = category_name;
        let option = '<option value="' + category_value + '">' + category_value_i18 + "</option>";
        console.debug("add.js init  category_value is: " + category_value + " i18n is:" + category_value_i18);
        console.debug("add.js init  option is: " + option);
        options = options + option;
        //console.debug("add.js init  options is: " + options);
      }
      $("#website_type").html(options);
      document.getElementById("loader").setAttribute("class", "loader loader-default");
    })
    .catch(function (err) {});
}

function validate() {
  //console.debug("options.js getStorage: config is:" + JSON.stringify(config));
  $.validator.addMethod("shortnameFunc", function (value, element, params) {
    let match = value.match(/(?=^[^0-9])(?=[0-9a-zA-Z])/);
    if (match) {
      return true;
    } else {
      return false;
    }
  });
  $.validator.addMethod("urlFunc", function (value, element, params) {
    let request_method = $("#website_request_method").val();
    console.debug("add.js method is:" + request_method);
    if (request_method == "GET") {
      let match = value.match(/(?=^http)(?=.*searchkeyword.*)/);
      if (match) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });
  $.validator.addMethod("searcherFunc", function (value, element, params) {
    let request_method = $("#website_request_method").val();
    let searcher = $("#website_searcher").val();
    if (request_method == "POST" && !searcher) {
      return false;
    } else {
      return true;
    }
  });
  $.validator.addMethod("selectorFunc", function (value, element, params) {
    let request_method = $("#website_request_method").val();
    let seletor = $("#newtab_selector").val();
    if (request_method == "NEWTAB" || request_method == "NEWTAB_IFRAME") {
      if (!seletor) return false;
      else return true;
    } else {
      return true;
    }
  });

  $("#addform").validate({
    rules: {
      website_id: {
        required: true,
      },
      website_shortname: {
        required: true,
        shortnameFunc: [],
      },
      website_searcher: {
        searcherFunc: [],
      },
      newtab_selector: {
        selectorFunc: [],
      },
      website_name: "required",
      website_search_url: {
        required: true,
        urlFunc: [],
      },
      website_search_keyword: "required",
    },
    messages: {
      website_id: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
      },
      website_shortname: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
        shortnameFunc: chrome.i18n.getMessage("shortname_validate"),
      },
      website_name: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
      },
      website_search_url: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
        urlFunc: chrome.i18n.getMessage("website_search_url_validate"),
      },
      website_searcher: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
        searcherFunc: chrome.i18n.getMessage("website_searcher_validate"),
      },
      newtab_selector: {
        selectorFunc: chrome.i18n.getMessage("newtab_selector_required"),
      },
      website_search_keyword: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
      },
    },
    submitHandler: function (form) {
      add();
    },
  });
}
