$(document).ready(function () {
  localizeHtmlPage();
  getAds()
    .then(function (data) {
      let json = data.popup_menu;

      let popup_menu_items = [];
      for (let key in json) {
        let item = json[key];
        if (item && item.type == "popup_menu") {
          popup_menu_items.push(item);
          if (key == "nav1") {
            $("#nav1").attr("href", item.url);
            $("#nav1").html(item.name);
          } else if (key == "nav2") {
            $("#nav2").attr("href", item.url);
            $("#nav2").html(item.name);
          } else if (key == "nav3") {
            $("#nav3").attr("href", item.url);
            $("#nav3").html(item.name);
          } else {
            let template = `
            <img src="%logo%" alt="" class="mr-2 rounded" />
            <a class="nav-link" id="%id%" href="%url%" target="_blank">
              %name%
            </a>
          `;
            console.log(template);
            template = template.replace("%logo%", item.logo);
            template = template.replace("%id%", item.shortname);
            template = template.replace("%url%", item.url);
            template = template.replace("%name%", item.name);
            console.debug("popup.js getAds template is:" + template);
            let div = document.createElement("div");
            div.setAttribute("class", "media text-muted pt-3");
            div.innerHTML = template;
            $("#menu_wrapper").append(div);
          }
        }
      }
    })
    .catch(function (err) {});

  $("#search").click(function () {
    chrome.tabs.create({ url: chrome.extension.getURL("results.html") + "?from=popup" });
  });
});
