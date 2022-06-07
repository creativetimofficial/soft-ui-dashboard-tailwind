// Navbar notifications dropdown

var dropdown_triggers = document.querySelectorAll("[dropdown-trigger]");
dropdown_triggers.forEach((dropdown_trigger) => {
  let dropdown_menu = dropdown_trigger.parentElement.querySelector("[dropdown-menu]");

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
      if (dropdown_trigger.getAttribute("aria-expanded") == "true") {
        dropdown_trigger.click();
      }
    }
  });
});
