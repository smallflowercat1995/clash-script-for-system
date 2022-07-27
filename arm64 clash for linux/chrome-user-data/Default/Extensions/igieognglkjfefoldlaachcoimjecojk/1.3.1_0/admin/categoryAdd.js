var loadCount = 0;
$(document).ready(function () {
  localizeHtmlPage();
  console.debug("add.js ready ");
  init();

  $("#btn_add").click(function () {
    validate();
  });
});

function add() {
  console.debug("admin.js add() ");
  let category_name = $("#category_name").val();
  let category_value = $("#category_value").val();

  getStorage()
    .then(function (config) {
      let user_categories = config.user_categories;
      let categories = config.categories;
      let categories_keys = Object.keys(categories);
      let user_categories_keys = Object.keys(user_categories);

      if (categories_keys.indexOf(category_value) >= 0) {
        mytoast = $.toast({
          heading: "",
          icon: "error",
          text: chrome.i18n.getMessage("category_exist"),
          showHideTransition: "slide",
          allowToastClose: false,
          hideAfter: 1000,
          stack: 1,
          textAlign: "center",
          position: "mid-center",
        });
        return;
      } else if (user_categories_keys.indexOf(category_value) >= 0) {
        let category = user_categories[category_value];
        let old_category_name = category.category_name;

        if (category_name == old_category_name) {
          mytoast = $.toast({
            heading: "",
            icon: "error",
            text: chrome.i18n.getMessage("category_exist"),
            showHideTransition: "slide",
            allowToastClose: false,
            hideAfter: 1000,
            stack: 1,
            textAlign: "center",
            position: "mid-center",
          });
          return;
        }
      }

      if (user_categories == null || Object.keys(user_categories).length == 0) user_categories = {};

      user_categories[category_value] = {
        category_name: category_name,
        category_value: category_value,
      };

      //console.debug("add.js init config is: " + JSON.stringify(user_categories));

      chrome.storage.local.set(
        {
          user_categories: user_categories,
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
              window.location.href = chrome.extension.getURL("/admin/categoryAdmin.html");
            },
          });
        }
      );
    })
    .catch(function (err) {});
}

function init() {
  let href = window.location.href;

  console.debug("add.js init " + href);
  let match = href.match(/id=(.*)/);
  if (match) {
    category_value = match[1];
    console.debug("add.js init website_id is: " + website_id);
    getStorage()
      .then(function (config) {
        console.debug("add.js init config is: " + JSON.stringify(config));
        let user_categories = config.user_categories;
        let category = user_categories[category_value];
        console.debug("add.js init engine is: " + JSON.stringify(engine));
        let category_name = category.category_name;
        let category_value = category.category_value;

        $("#category_name").val(category_name);
        $("#category_value").val(category_value);
      })
      .catch(function (err) {});
  }
}

function validate() {
  //console.debug("options.js getStorage: config is:" + JSON.stringify(config));
  $.validator.addMethod("categoryFunc", function (value, element, params) {
    let match = value.match(/(?=^[^0-9])(?=[0-9a-zA-Z])/);
    if (match) {
      return true;
    } else {
      return false;
    }
  });

  $("#addform").validate({
    rules: {
      category_name: {
        required: true,
      },
      category_value: {
        required: true,
        categoryFunc: [],
      },
    },
    messages: {
      category_name: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
      },
      category_value: {
        required: chrome.i18n.getMessage("popup_settings_validate_required"),
        categoryFunc: chrome.i18n.getMessage("category_value_placeholder"),
      },
    },
    submitHandler: function (form) {
      add();
    },
  });
}
