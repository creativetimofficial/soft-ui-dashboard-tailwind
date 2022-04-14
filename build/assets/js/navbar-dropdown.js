// Navbar notifications dropdown

var dropdown_trigger = document.getElementById("dropdown-trigger");
var dropdown_menu = document.getElementById("dropdown-menu");
var navbar = document.getElementById("navbarBlur");

dropdown_trigger.addEventListener("click", function () {
  dropdown_menu.classList.toggle("opacity-0");
  dropdown_menu.classList.toggle("pointer-events-none");
  dropdown_menu.classList.toggle("before:-top-5");
  if (dropdown_trigger.getAttribute("aria-expanded") == "false") {
    dropdown_trigger.setAttribute("aria-expanded", "true");
    dropdown_menu.classList.remove("transform-dropdown");
    dropdown_menu.classList.add("transform-dropdown-show");
  } else {
    dropdown_trigger.setAttribute("aria-expanded", "false");
    dropdown_menu.classList.remove("transform-dropdown-show");
    dropdown_menu.classList.add("transform-dropdown");
  }
});

window.addEventListener("click", function (e) {
  if (!dropdown_menu.contains(e.target) && !dropdown_trigger.contains(e.target)) {
    if (!dropdown_menu.classList.contains("opacity-0")) {
      dropdown_trigger.click();
    }
  }
});
