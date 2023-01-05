const header = document.querySelector("header");
const navMenu = document.getElementById("nav-menu");
const menuButton = document.getElementById("menu-button");

let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.classList.add("hidden");
    navMenu.classList.add("hidden-nav");
  } else {
    header.classList.remove("hidden");
    navMenu.classList.remove("hidden-nav");
  }
  lastScrollTop = currentScroll;
});

menuButton.addEventListener("click", function() {
  navMenu.classList.toggle("active");
});