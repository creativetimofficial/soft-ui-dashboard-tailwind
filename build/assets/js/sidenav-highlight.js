// Highlight page on sidenav ->>

var page = window.location.pathname.split("/").pop().split(".")[0];

highlightPage(page);

function highlightPage(pageName) {
  let sidenav_target = "../pages/" + pageName + ".html";
  let target_a = document.querySelector("a[href=" + CSS.escape(sidenav_target) + "]");
  let target_div = target_a.firstElementChild;
  let target_paths = target_div.querySelectorAll("path.fill-slate-20");
  let target_polygons = target_div.querySelectorAll("polygon.fill-slate-20");

  target_a.classList.add("rounded-lg");
  target_a.classList.add("bg-white");
  target_a.classList.add("font-semibold");
  target_a.classList.add("text-slate-700");
  target_a.classList.add("shadow-soft-xl");
  target_div.classList.add("bg-gradient-fuchsia-500");

  target_paths.forEach((path) => {
    path.classList.remove("fill-slate-20");
  });
  target_polygons.forEach((polygon) => {
    polygon.classList.remove("fill-slate-20");
  });
}
