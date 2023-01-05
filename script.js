var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var navMenu = document.getElementById("nav-menu");
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.classList.add("hidden");
    navMenu.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
    navMenu.classList.add("hidden");
  }
  lastScrollTop = currentScroll;
});

document.getElementById("menu-button").addEventListener("click", function() {
  var navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("hidden");
  navMenu.classList.toggle("active");
});