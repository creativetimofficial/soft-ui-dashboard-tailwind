if(window.location.pathname.length > 1){
  var pageName = window.location.pathname.split("/").pop().split(".")[0];
  var sidenav_target = "../pages/" + pageName + ".html";
} else {
  var pageName = "dashboard";
  var sidenav_target = "./pages/" + pageName + ".html";
}
var fixedPlugin = document.querySelector("[fixed-plugin]");
var fixedPluginButton = document.querySelector("[fixed-plugin-button]");
var fixedPluginButtonNav = document.querySelector("[fixed-plugin-button-nav]");
var fixedPluginCard = document.querySelector("[fixed-plugin-card]");
var fixedPluginCloseButton = document.querySelector("[fixed-plugin-close-button]");

var navbar = document.querySelector("[navbar-main]");

var buttonNavbarFixed = document.querySelector("[navbarFixed]");

var sidenav = document.querySelector("aside");
var sidenav_icons = sidenav.querySelectorAll("li a div");


var transparentBtn = document.querySelector("[transparent-style-btn]");
var whiteBtn = document.querySelector("[white-style-btn]");

var non_active_style = ["bg-none", "bg-transparent", "text-fuchsia-500", "border-fuchsia-500"];
var active_style = ["bg-gradient-fuchsia", "bg-fuchsia-500", "text-white", "border-transparent"];

var transparent_sidenav_classes = ["xl:bg-transparent", "shadow-none"];
var transparent_sidenav_highlighted = ["shadow-soft-xl"];
var transparent_sidenav_icons = ["bg-white"];

var white_sidenav_classes = ["xl:bg-white", "shadow-soft-xl"];
var white_sidenav_highlighted = ["shadow-none"];
var white_sidenav_icons = ["bg-gray-200"];

var sidenav_highlight = document.querySelector("a[href=" + CSS.escape(sidenav_target) + "]");

// fixed plugin toggle
if (pageName != "rtl") {
  fixedPluginButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-right-90");
    fixedPluginCard.classList.toggle("right-0");
  });

  fixedPluginButtonNav.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-right-90");
    fixedPluginCard.classList.toggle("right-0");
  });

  fixedPluginCloseButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-right-90");
    fixedPluginCard.classList.toggle("right-0");
  });

  window.addEventListener("click", function (e) {
    if (!fixedPlugin.contains(e.target) && !fixedPluginButton.contains(e.target) && !fixedPluginButtonNav.contains(e.target)) {
      if (fixedPluginCard.classList.contains("right-0")) {
        fixedPluginCloseButton.click();
      }
    }
  });
} else {
  fixedPluginButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-left-90");
    fixedPluginCard.classList.toggle("left-0");
  });

  fixedPluginButtonNav.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-left-90");
    fixedPluginCard.classList.toggle("left-0");
  });

  fixedPluginCloseButton.addEventListener("click", function () {
    fixedPluginCard.classList.toggle("-left-90");
    fixedPluginCard.classList.toggle("left-0");
  });

  window.addEventListener("click", function (e) {
    if (!fixedPlugin.contains(e.target) && !fixedPluginButton.contains(e.target) && !fixedPluginButtonNav.contains(e.target)) {
      if (fixedPluginCard.classList.contains("left-0")) {
        fixedPluginCloseButton.click();
      }
    }
  });
}

// color sidenav

function sidebarColor(a) {
  var color = a.getAttribute("data-color");
  var parent = a.parentElement.children;
  var activeColor;
  var activeSidenavIconColorClass;
  var activeSidenavCardColorClass;
  var activeSidenavCardIconColorClass;

  var checkedSidenavIconColor = "bg-gradient-" + color;
  var checkedSidenavCardColor = "after:bg-gradient-" + (color == "fuchsia" ? "slate" : color);
  var checkedSidenavCardIconColorClass = "bg-gradient-" + (color == "fuchsia" ? "slate" : color);

  var sidenavCard = document.querySelector("[sidenav-card]");
  var sidenavCardIcon = document.querySelector("[sidenav-card-icon]");
  var sidenavIcon = document.querySelector("a[href=" + CSS.escape(sidenav_target) + "]").firstElementChild;

  for (var i = 0; i < parent.length; i++) {
    if (parent[i].hasAttribute("active-color")) {
      activeColor = parent[i].getAttribute("data-color");

      parent[i].classList.toggle("border-white");
      parent[i].classList.toggle("border-slate-700");

      activeSidenavIconColorClass = "bg-gradient-" + activeColor;
      activeSidenavCardColorClass = "after:bg-gradient-" + (activeColor == "fuchsia" ? "slate" : activeColor);
      activeSidenavCardIconColorClass = "bg-gradient-" + (activeColor == "fuchsia" ? "slate" : activeColor);
    }
    parent[i].removeAttribute("active-color");
  }

  var att = document.createAttribute("active-color");

  a.setAttributeNode(att);
  a.classList.toggle("border-white");
  a.classList.toggle("border-slate-700");

  //   remove active style

  sidenavCard.classList.remove(activeSidenavCardColorClass);
  sidenavCardIcon.classList.remove(activeSidenavCardIconColorClass);
  sidenavIcon.classList.remove(activeSidenavIconColorClass);

  //   add new style

  sidenavCard.classList.add(checkedSidenavCardColor);
  sidenavCardIcon.classList.add(checkedSidenavCardIconColorClass);
  sidenavIcon.classList.add(checkedSidenavIconColor);
}

// sidenav style

transparentBtn.addEventListener("click", function () {
  const active_style_attr = document.createAttribute("active-style");
  if (!this.hasAttribute(active_style_attr)) {
    // change trigger buttons style

    this.setAttributeNode(active_style_attr);

    non_active_style.forEach((style_class) => {
      this.classList.remove(style_class);
    });

    active_style.forEach((style_class) => {
      this.classList.add(style_class);
    });

    whiteBtn.removeAttribute(active_style_attr);

    active_style.forEach((style_class) => {
      whiteBtn.classList.remove(style_class);
    });

    non_active_style.forEach((style_class) => {
      whiteBtn.classList.add(style_class);
    });

    // change actual styles

    white_sidenav_classes.forEach((style_class) => {
      sidenav.classList.remove(style_class);
    });
    transparent_sidenav_classes.forEach((style_class) => {
      sidenav.classList.add(style_class);
    });

    white_sidenav_highlighted.forEach((style_class) => {
      sidenav_highlight.classList.remove(style_class);
    });
    transparent_sidenav_highlighted.forEach((style_class) => {
      sidenav_highlight.classList.add(style_class);
    });
    for (var i = 0; i < sidenav_icons.length; i++) {
      white_sidenav_icons.forEach((style_class) => {
        sidenav_icons[i].classList.remove(style_class);
      });
      transparent_sidenav_icons.forEach((style_class) => {
        sidenav_icons[i].classList.add(style_class);
      });
    }
  }
});

whiteBtn.addEventListener("click", function () {
  const active_style_attr = document.createAttribute("active-style");
  if (!this.hasAttribute(active_style_attr)) {
    this.setAttributeNode(active_style_attr);
    non_active_style.forEach((style_class) => {
      this.classList.remove(style_class);
    });
    active_style.forEach((style_class) => {
      this.classList.add(style_class);
    });

    transparentBtn.removeAttribute(active_style_attr);
    active_style.forEach((style_class) => {
      transparentBtn.classList.remove(style_class);
    });
    non_active_style.forEach((style_class) => {
      transparentBtn.classList.add(style_class);
    });

    // change actual styles

    transparent_sidenav_classes.forEach((style_class) => {
      sidenav.classList.remove(style_class);
    });
    white_sidenav_classes.forEach((style_class) => {
      sidenav.classList.add(style_class);
    });

    transparent_sidenav_highlighted.forEach((style_class) => {
      sidenav_highlight.classList.remove(style_class);
    });

    white_sidenav_highlighted.forEach((style_class) => {
      sidenav_highlight.classList.add(style_class);
    });

    for (var i = 0; i < sidenav_icons.length; i++) {
      transparent_sidenav_icons.forEach((style_class) => {
        sidenav_icons[i].classList.remove(style_class);
      });
      white_sidenav_icons.forEach((style_class) => {
        sidenav_icons[i].classList.add(style_class);
      });
    }
  }
});

// navbar fixed plugin

if (navbar) {
  if (navbar.getAttribute("navbar-scroll") == "true") {
    buttonNavbarFixed.setAttribute("checked", "true");
  }
  buttonNavbarFixed.addEventListener("change", function () {
    if (this.checked) {
      navbar.setAttribute("navbar-scroll", "true");
      navbar.classList.add("sticky");
      navbar.classList.add("top-[1%]");
      navbar.classList.add("backdrop-saturate-[200%]");
      navbar.classList.add("backdrop-blur-[30px]");
      navbar.classList.add("bg-[hsla(0,0%,100%,0.8)]");
      navbar.classList.add("shadow-blur");
      navbar.classList.add("z-110");
    } else {
      navbar.setAttribute("navbar-scroll", "false");
      navbar.classList.remove("sticky");
      navbar.classList.remove("top-[1%]");
      navbar.classList.remove("backdrop-saturate-[200%]");
      navbar.classList.remove("backdrop-blur-[30px]");
      navbar.classList.remove("bg-[hsla(0,0%,100%,0.8)]");
      navbar.classList.remove("shadow-blur");
      navbar.classList.remove("z-110");
    }
  });
} else {
  // buttonNavbarFixed.setAttribute("checked", "true");
  buttonNavbarFixed.setAttribute("disabled", "true");
}
