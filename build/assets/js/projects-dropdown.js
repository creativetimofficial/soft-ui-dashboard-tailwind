var dropdown_trigger_table = document.getElementById("dropdown-trigger-table");
var dropdown_menu_table = document.getElementById("dropdown-menu-table");

dropdown_trigger_table.addEventListener("click", function () {
  dropdown_menu_table.classList.toggle("opacity-0");
  dropdown_menu_table.classList.toggle("pointer-events-auto");
  dropdown_menu_table.classList.toggle("before:-top-5");
  if (dropdown_trigger_table.getAttribute("aria-expanded") == "false") {
    dropdown_trigger_table.setAttribute("aria-expanded", "true");
    dropdown_menu_table.classList.remove("transform-dropdown");
    dropdown_menu_table.classList.add("transform-dropdown-show");
  } else {
    dropdown_trigger_table.setAttribute("aria-expanded", "false");
    dropdown_menu_table.classList.remove("transform-dropdown-show");
    dropdown_menu_table.classList.add("transform-dropdown");
  }
});

window.addEventListener("click", function (e) {
  if (!dropdown_menu_table.contains(e.target) && !dropdown_trigger_table.contains(e.target)) {
    if (!dropdown_menu_table.classList.contains("opacity-0")) {
      dropdown_trigger_table.click();
    }
  }
});
