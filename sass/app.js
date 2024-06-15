const mobile__nav = document.querySelector(".mobile__nav-btn ");
const mobile__icon = document.querySelector(".mobile__nav-icon ");
const nav__header = document.querySelector(".header ");
var a = true;
mobile__nav.addEventListener("click", function () {
  nav__header.classList.toggle("nav");
  if (a) {
    mobile__nav.style.transform = "rotate(180deg)";
    a = false;
  } else {
    a = true;
    mobile__nav.style.transform = "rotate(360deg)";
  }
});

//sticky navbar

const section__hero = document.querySelector(".section__hero");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    ent.isIntersecting === false
      ? nav__header.classList.add("sticky")
      : nav__header.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "",
    threshold: "",
  }
);
observer.observe(section__hero);
