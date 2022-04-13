(function () {
  var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    if (document.querySelector("main")) {
      var mainpanel = document.querySelector("main");
      var ps = new PerfectScrollbar(mainpanel);
    }

    if (document.getElementsByClassName("aside")[0]) {
      var sidebar = document.querySelector("aside");
      var ps1 = new PerfectScrollbar(sidebar);
    }
  }
})();
