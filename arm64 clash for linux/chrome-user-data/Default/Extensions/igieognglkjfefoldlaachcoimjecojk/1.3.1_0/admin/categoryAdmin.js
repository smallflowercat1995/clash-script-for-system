var loadCount = 0;
$(document).ready(function () {
  localizeHtmlPage();
  let href = window.location.href;
  console.debug("delete.js init " + href);
  let match = href.match(/id=(.*)&action=(.*)/);
  if (match) {
    if (match[2] == "del") {
      del(match[1]);
    }
  } else {
    init();
  }
});

function init() {
  document.getElementById("loader").setAttribute("class", "loader loader-default is-active");

  getStorage()
    .then(function (config) {
      console.debug("admin.js init config is:" + JSON.stringify(config.categories));
      let user_categories = config.user_categories;
      let default_categories = config.categories;
      let category_user_defined = chrome.i18n.getMessage("category_user_defined");
      let category_system_default = chrome.i18n.getMessage("category_system_default");
      let user_defined_template = `
      <td class="desc">%category_name%</td>
      <td class="desc">%category_value%</td>
      <td class="desc">%category_type%</td>
      <td class="text-center">
        <div>
            <a href="/admin/categoryEdit.html?id=%category_value%" class="btn btn-primary btn-md" data-toggle="tooltip" data-placement="top" title="Edit"><i class="zmdi zmdi-edit"></i></a>       
            <a href="/admin/categoryAdmin.html?id=%category_value%&action=del" class="btn btn-primary btn-md" data-toggle="tooltip" data-placement="top" title="Delete"><i class="zmdi zmdi-delete"></i></a>
        </div>

      </td>
  `;

      let system_default_template = `
      <td class="desc">%category_name%</td>
      <td class="desc">%category_value%</td>
      <td class="desc">%category_type%</td>
      <td class="text-center">
        <div>
        </div>

      </td>
  `;

      let tbody = document.createElement("tbody");
      for (let key of Object.keys(user_categories)) {
        let category = user_categories[key];
        let category_name = category.category_name;
        let category_value = category.category_value;
        console.debug("categoryAdmin.js category_name is:" + category_name + ",category_value is:" + category_value);
        let data = user_defined_template;
        data = data.replace("%category_name%", category_name);
        data = data.replace(/%category_value%/g, category_value);
        data = data.replace("%category_type%", category_user_defined);
        console.debug("categoryAdmin.js category_name is:" + category_name + ",category_value is:" + category_value + ", data is:" + data);
        let tr1 = document.createElement("tr");
        tr1.setAttribute("class", "tr-shadow");
        tr1.innerHTML = data;
        tbody.appendChild(tr1);
        let tr2 = document.createElement("tr");
        tr2.setAttribute("class", "spacer");
        tbody.appendChild(tr2);
        //console.debug("admin.js init tbody is:" + tbody.innerHTML);
      }

      for (let key of Object.keys(default_categories)) {
        let category = default_categories[key];
        let category_name = category.category_name;
        let category_value = category.category_value;
        let data = system_default_template;
        //console.debug("categoryAdmin.js category_name is:" + category_name + ",category_value is:" + category_value + ",type is:" + category_system_default);
        data = data.replace("%category_name%", category_name);
        data = data.replace("%category_value%", category_value);
        data = data.replace("%category_type%", category_system_default);

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

function del(category_value) {
  console.debug("add.js init category_value is: " + category_value);
  getStorage()
    .then(function (config) {
      console.debug("add.js init config is: " + JSON.stringify(config.user_categories));
      let user_categories = config.user_categories;
      console.debug("add.js init to delete is: " + JSON.stringify(user_categories[category_value]));
      delete user_categories[category_value];
      chrome.storage.local.set(
        {
          user_categories: user_categories,
        },
        async function () {
          window.location.href = chrome.extension.getURL("/admin/categoryAdmin.html");
        }
      );
    })
    .catch(function (err) {});
}
