var loadCount = 0;
$(document).ready(function () {
  localizeHtmlPage();
  console.debug("admin.js ready ");
  let href = window.location.href;
  console.debug("delete.js init " + href);
  let match = href.match(/id=(.*)&action=(.*)/);
  if (match) {
    if (match[2] == "del") {
      del(match[1]);
    } else if (match[2] == "verify") {
      verify(match[1]);
    }
  } else {
    init();
  }
});

function init() {
  document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

  getStorage()
    .then(function (config) {
      console.debug("admin.js init config is:" + JSON.stringify(config));
      let user_engines = config.user_engines;
      let default_engines = config.engines;
      website_source_user_defined = chrome.i18n.getMessage("website_source_user_defined");
      website_source_system_default = chrome.i18n.getMessage("website_source_system_default");
      console.debug("admin.js btn_add click user_engines is:" + JSON.stringify(user_engines));
      let user_defined_template = `
      <td class="desc"><a href="%website_url%" target="_blank">%website_id%</a></td>
      <td class="desc">%website_name%</td>
      <td class="desc">%website_shortname%</td>
      <td class="desc">%website_type%</td>
      <td class="desc">%website_source%</td>
      <td class="text-center">
        <div>
            <a href="/admin/edit.html?id=%website_id%" class="btn btn-primary btn-md" data-toggle="tooltip" data-placement="top" title="Edit"><i class="zmdi zmdi-edit"></i></a>       
            <a href="/admin/admin.html?id=%website_id%&action=verify" class="btn btn-primary btn-md" data-toggle="tooltip" data-placement="top" title="verify"><i class="zmdi zmdi-eye"></i></a>
            <a href="/admin/admin.html?id=%website_id%&action=del" class="btn btn-primary btn-md" data-toggle="tooltip" data-placement="top" title="Delete"><i class="zmdi zmdi-delete"></i></a>
        </div>

      </td>
  `;

      let system_default_template = `
      <td class="desc"><a href="%website_url%" target="_blank">%website_id%</a></td>
      <td class="desc">%website_name%</td>
      <td class="desc">%website_shortname%</td>
      <td class="desc">%website_type%</td>
      <td class="desc">%website_source%</td>
      <td class="text-center">
        <div>
        </div>

      </td>
  `;

      let tbody = document.createElement("tbody");
      for (let key in user_engines) {
        let engine = user_engines[key];
        let website_id = key;
        let website_name = engine.name;
        let website_shortname = engine.shortname;
        let website_type = engine.type;
        let website_url = engine.url;
        let website_parser = engine.parser;
        let website_request_method = engine.method;
        let keyword = engine.keyword;
        let data = user_defined_template;
        data = data.replace(/%website_id%/g, website_id);
        data = data.replace("%website_name%", website_name);
        data = data.replace("%website_shortname%", website_shortname);
        data = data.replace("%website_type%", website_type);
        data = data.replace("%website_source%", website_source_user_defined);
        data = data.replace("%website_url%", website_url);
        if (keyword) data = data.replace("searchkeyword", keyword);
        //data = data.replace("%website_request_method%", website_request_method);
        //console.debug("admin.js init template is:" + data);
        let tr1 = document.createElement("tr");
        tr1.setAttribute("class", "tr-shadow");
        tr1.innerHTML = data;
        tbody.appendChild(tr1);
        let tr2 = document.createElement("tr");
        tr2.setAttribute("class", "spacer");
        tbody.appendChild(tr2);
        //console.debug("admin.js init tbody is:" + tbody.innerHTML);
      }

      for (let key in default_engines) {
        let engine = default_engines[key];
        let website_id = key;
        let website_name = engine.name;
        let website_shortname = engine.shortname;
        let website_type = engine.type;
        let website_url = engine.url;
        let website_parser = engine.parser;
        let website_request_method = engine.method;
        let data = system_default_template;
        let keyword = engine.keyword;

        data = data.replace(/%website_id%/g, website_id);
        data = data.replace("%website_name%", website_name);
        data = data.replace("%website_shortname%", website_shortname);
        data = data.replace("%website_type%", website_type);
        data = data.replace("%website_source%", website_source_system_default);
        data = data.replace("%website_url%", website_url);
        if (keyword) data = data.replace("searchkeyword", keyword);

        //data = data.replace("%website_request_method%", website_request_method);
        //console.debug("admin.js init template is:" + data);
        let tr1 = document.createElement("tr");
        tr1.setAttribute("class", "tr-shadow");
        tr1.innerHTML = data;
        tbody.appendChild(tr1);
        let tr2 = document.createElement("tr");
        tr2.setAttribute("class", "spacer");
        tbody.appendChild(tr2);
        //console.debug("admin.js init tbody is:" + tbody.innerHTML);
      }
      let table = document.getElementById("admin_table");
      table.appendChild(tbody);
      document.getElementById("loader").setAttribute("class", "loader loader-default");
    })
    .catch(function (err) {});
}

function del(website_id) {
  console.debug("add.js init website_id is: " + website_id);
  getStorage()
    .then(function (config) {
      console.debug("add.js init config is: " + JSON.stringify(config));
      let user_engines = config.user_engines;
      delete user_engines[website_id];
      chrome.storage.local.set(
        {
          user_engines: user_engines,
        },
        async function () {
          window.location.href = chrome.extension.getURL("/admin/admin.html");
        }
      );
    })
    .catch(function (err) {});
}

async function verify(website_id) {
  document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

  let engine = await getEngineData(website_id);
  console.debug("admin.js verify() engine is:" + JSON.stringify(engine));
  if (Object.keys(engine).length == 0) {
    mytoast = $.toast({
      heading: "",
      icon: "error",
      text: chrome.i18n.getMessage("verify_website_error"),
      showHideTransition: "slide",
      allowToastClose: false,
      hideAfter: 3000,
      stack: 1,
      textAlign: "center",
      position: "mid-center",
      beforeHide: function () {},
    });
  }
  let website_search_keyword = engine.keyword;
  let website_type = engine.type;
  let website_name = engine.name;
  let website_shortname = engine.shortname;
  let website_search_url = engine.url;
  let website_request_method = engine.method;
  let website_parser = engine.parser;
  let website_searcher = engine.searcher;
  let searcherName = engine.searcherName;

  let data = { type: "config_verify", keyword: website_search_keyword, name: website_name, shortname: website_shortname, url: website_search_url, type: website_type, parser: website_parser, searcher: website_searcher, searcherName: searcherName, method: website_request_method };

  chrome.runtime.sendMessage({ type: "config_verify", data: data }, function (response) {
    console.debug("results.js loadMore info is:" + JSON.stringify(response));

    if (response) {
      chrome.storage.local.set(
        {
          keyword: website_search_keyword,
          results: response.results,
        },
        function () {
          document.getElementById("loader").setAttribute("class", "loader loader-default");
          chrome.tabs.create({ url: chrome.extension.getURL("results.html") + "?from=verify" });
        }
      );
    } else {
      mytoast = $.toast({
        heading: "",
        icon: "error",
        text: chrome.i18n.getMessage("verify_website_error"),
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

function getEngineData(website_id) {
  console.debug("admin.js getEngineData website_id is: " + website_id);
  return new Promise(function (resolve) {
    getStorage()
      .then(function (config) {
        console.debug("add.js init config is: " + JSON.stringify(config));
        let user_engines = config.user_engines;
        let data = {};
        if (user_engines) data = user_engines[website_id];
        resolve(data);
      })
      .catch(function (err) {
        resolve({});
      });
  });
}
