const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
  burger.classList.toggle("open");
  main.classList.toggle("open");
});
