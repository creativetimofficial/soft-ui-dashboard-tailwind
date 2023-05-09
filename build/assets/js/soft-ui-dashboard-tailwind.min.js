/*!

=========================================================
* Soft UI Dashboard Tailwind - v1.0.5
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-tailwind
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (site.license)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/ var page=window.location.pathname.split("/").pop().split(".")[0],aux=window.location.pathname.split("/"),to_build=aux.includes("pages")?"../":"./",root=window.location.pathname.split("/");function loadJS(b,c){let a=document.createElement("script");a.setAttribute("src",b),a.setAttribute("type","text/javascript"),a.setAttribute("async",c),document.head.appendChild(a)}function loadStylesheet(b){let a=document.createElement("link");a.setAttribute("href",b),a.setAttribute("type","text/css"),a.setAttribute("rel","stylesheet"),document.head.appendChild(a)}aux.includes("pages")||(page="dashboard"),loadStylesheet(to_build+"assets/css/perfect-scrollbar.css"),loadJS(to_build+"assets/js/perfect-scrollbar.js",!0),document.querySelector("nav [navbar-trigger]")&&loadJS(to_build+"assets/js/navbar-collapse.js",!0),document.querySelector("[data-target='tooltip']")&&(loadJS(to_build+"assets/js/tooltips.js",!0),loadStylesheet(to_build+"assets/css/tooltips.css")),document.querySelector("[nav-pills]")&&loadJS(to_build+"assets/js/nav-pills.js",!0),document.querySelector("[dropdown-trigger]")&&loadJS(to_build+"assets/js/dropdown.js",!0),document.querySelector("[fixed-plugin]")&&loadJS(to_build+"assets/js/fixed-plugin.js",!0),document.querySelector("[navbar-main]")&&(loadJS(to_build+"assets/js/sidenav-burger.js",!0),loadJS(to_build+"assets/js/navbar-sticky.js",!0)),document.querySelector("canvas")&&(loadJS(to_build+"assets/js/chart-1.js",!0),loadJS(to_build+"assets/js/chart-2.js",!0))