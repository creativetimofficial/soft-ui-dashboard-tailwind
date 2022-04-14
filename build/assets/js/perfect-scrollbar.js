(function () {
  var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

  if (isWindows) {
    // if we are on windows OS we activate the perfectScrollbar function
    if (document.querySelector("main")) {
      var mainpanel = document.querySelector("main");
      var ps = new PerfectScrollbar(mainpanel);
    }

    if (document.querySelectorAll(".overflow-auto")[0]) {
      var sidebar = document.querySelectorAll(".overflow-auto");
      var i = 0;
      var ps;
      sidebar.forEach((element) => {
        ps[i++] = new PerfectScrollbar(element);
      });
    }
    if (document.querySelectorAll(".overflow-y-auto")[0]) {
      var sidebar = document.querySelectorAll(".overflow-y-auto");
      var i = 0;
      var ps;
      sidebar.forEach((element) => {
        ps[i++] = new PerfectScrollbar(element);
      });
    }
    if (document.querySelectorAll(".overflow-x-auto")[0]) {
      var sidebar = document.querySelectorAll(".overflow-x-auto");
      var i = 0;
      var ps;
      sidebar.forEach((element) => {
        ps[i++] = new PerfectScrollbar(element);
      });
    }
  }
})();
