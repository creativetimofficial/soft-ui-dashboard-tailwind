var page = window.location.pathname.split("/").pop().split(".")[0];

if (page != "sign-in" && page != "sign-up") {
  loadJS("../assets/js/fixed-plugin.js", true);
  loadJS("../assets/js/sidenav-highlight.js", true);
  loadJS("../assets/js/sidenav-burger.js", true);
  loadJS("../assets/js/navbar-dropdown.js", true);
  loadJS("https://buttons.github.io/buttons.js", true);
  if (page != "profile") {
    loadJS("../assets/js/navbar-sticky.js", true);
  }
} else {
  loadJS("../assets/js/navbar-dropdown-sign.js", true);
}
loadStylesheet("../assets/css/perfect-scrollbar.css");
loadJS("../assets/js/perfect-scrollbar.js", true);

if (page == "dashboard" || page == "rtl") {
  loadJS("../assets/js/projects-dropdown.js", true);
  loadJS("../assets/js/chart-1.js", false);
  loadJS("../assets/js/chart-2.js", false);
}
if (page == "virtual-reality") {
  loadJS("../assets/js/sidenav-vr.js", true);
}
if (page == "profile") {
  loadJS("../assets/js/profile-pills.js", true);
}
if (page == "billing" || page == "dashboard" || page == "virtual-reality" || page == "rtl" || page == "profile") {
  loadJS("../assets/js/tooltips.js", true);
  loadStylesheet("../assets/css/tooltips.css");
}

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}
function loadStylesheet(FILE_URL) {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}
