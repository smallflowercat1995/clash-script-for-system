$(document).ready(function () {
  localizeHtmlPage();
  $("#btn_save").click(function () {
    saveOptions();
  });

  $("#btn_website_admin").click(function () {
    chrome.tabs.create({ url: chrome.extension.getURL("/admin/admin.html") });
  });
  $("#btn_category_admin").click(function () {
    chrome.tabs.create({ url: chrome.extension.getURL("/admin/categoryAdmin.html") });
  });
  getStorage()
    .then(function (config) {
      init(config);
    })
    .catch(function (err) {});
});

function saveOptions() {
  let engine_number_per_search = $("#input_engine_number_per_search").val();
  let results_per_engine = $("#input_results_per_engine").val();
  let results_order_by = $("#input_results_order_by").val();

  chrome.storage.local.set(
    {
      engine_number_per_search: engine_number_per_search,
      results_per_engine: results_per_engine,
      results_order_by: results_order_by,
    },
    function () {
      mytoast = $.toast({
        heading: "",
        icon: "info",
        text: chrome.i18n.getMessage("popup_settings_ok"),
        showHideTransition: "slide",
        allowToastClose: false,
        hideAfter: 2000,
        stack: 1,
        textAlign: "center",
        position: "mid-center",
      });
    }
  );
}

function init(config) {
  $("#input_engine_number_per_search").val(config.engine_number_per_search);
  $("#input_results_per_engine").val(config.results_per_engine);
  $("#input_results_order_by").val(config.results_order_by);
}
