const burger = document.querySelector(".burger");

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  burger.classList.toggle("open");
});
