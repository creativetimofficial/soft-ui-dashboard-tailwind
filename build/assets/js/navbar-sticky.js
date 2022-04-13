// Navbar stick on scroll ++ styles

var navbar = document.getElementById("navbarBlur");

window.onscroll = function () {
  let blur = navbar.getAttribute("navbar-scroll");
  if (blur == "true") stickyNav();
};

function stickyNav() {
  if (window.scrollY >= 5) {
    navbar.classList.add("sticky");
    navbar.classList.add("top-[1%]");
    navbar.classList.add("backdrop-saturate-[200%]");
    navbar.classList.add("backdrop-blur-[30px]");
    navbar.classList.add("bg-[hsla(0,0%,100%,0.8)]");
    navbar.classList.add("shadow-blur");
    navbar.classList.add("z-110");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("top-[1%]");
    navbar.classList.remove("backdrop-saturate-[200%]");
    navbar.classList.remove("backdrop-blur-[30px]");
    navbar.classList.remove("bg-[hsla(0,0%,100%,0.8)]");
    navbar.classList.remove("shadow-blur");
    navbar.classList.remove("z-110");
  }
}
