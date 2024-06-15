const mobile__nav = document.querySelector(".mobile__nav-btn ");
const mobile__icon = document.querySelector(".mobile__nav-icon ");
const nav__header = document.querySelector(".header ");
let a = true;
mobile__nav.addEventListener("click", function () {
  nav__header.classList.toggle("nav");

  mobile__nav.style.transform = "rotate(180deg)";
});
