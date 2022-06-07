var expand_trigger = document.querySelector("[navbar-trigger]");
var bar1 = document.querySelector("[bar1]");
var bar2 = document.querySelector("[bar2]");
var bar3 = document.querySelector("[bar3]");
var navbar_sign_in_up = document.querySelector("[navbar-menu]");
const collapse_height = navbar_sign_in_up.scrollHeight;

expand_trigger.addEventListener("click", function () {
  elements = navbar_sign_in_up.querySelectorAll("a");
  if (navbar_sign_in_up.classList.contains("lg-max:max-h-0")) {
    navbar_sign_in_up.classList.remove("lg-max:max-h-0");
    navbar_sign_in_up.classList.add("lg-max:max-h-54");
    setTimeout(function () {
      elements.forEach((element) => {
        element.classList.remove("lg-max:opacity-0");
      });
    }, 50);
  } else {
    setTimeout(function () {
      elements.forEach((element) => {
        element.classList.add("lg-max:opacity-0");
      });
    }, 100);
    navbar_sign_in_up.classList.remove("lg-max:max-h-54");
    navbar_sign_in_up.classList.add("lg-max:max-h-0");
  }
  bar1.classList.toggle("rotate-45");
  bar1.classList.toggle("origin-10-10");
  bar1.classList.toggle("mt-1");

  bar2.classList.toggle("opacity-0");

  bar3.classList.toggle("-rotate-45");
  bar3.classList.toggle("origin-10-90");
  bar3.classList.toggle("mt-0.75");
  bar3.classList.toggle("mt-1.75");
});
