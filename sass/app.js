const mobile__nav = document.querySelector(".mobile__nav-btn ");
const nav__header = document.querySelector(".header ");
mobile__nav.addEventListener("click", function () {
  nav__header.classList.toggle("nav");
});
