/*!

=========================================================
* Soft UI Dashboard Tailwind - v1.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-tailwind
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (site.license)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var page = window.location.pathname.split("/").pop().split(".")[0];
var aux = window.location.pathname.split("/");
var to_build = (aux.includes('pages')?'../':'./');
var root = window.location.pathname.split("/")
if (!aux.includes("pages")) {
  page = "dashboard";
}

loadStylesheet(to_build + "assets/css/perfect-scrollbar.css");
loadJS(to_build + "assets/js/perfect-scrollbar.js", true);

if (page != "sign-in" && page != "sign-up") {
  loadJS(to_build + "assets/js/fixed-plugin.js", true);
  loadJS(to_build + "assets/js/sidenav-burger.js", true);
  loadJS(to_build + "assets/js/dropdown.js", true);
  if (page != "profile") {
    loadJS(to_build + "assets/js/navbar-sticky.js", true);
  } else {
    loadJS(to_build + "assets/js/nav-pills.js", true);
  }
  if (page != "tables") {
    loadJS(to_build + "assets/js/tooltips.js", true);
    loadStylesheet(to_build + "assets/css/tooltips.css");
  }
} else {
  loadJS(to_build + "assets/js/navbar-collapse.js", true);
}

if (document.querySelector("canvas")) {
  loadJS(to_build + "assets/js/chart-1.js", true);
  loadJS(to_build + "assets/js/chart-2.js", true);
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
