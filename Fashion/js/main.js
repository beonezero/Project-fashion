const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");

burger.addEventListener("click", () => {
  menu.classList.toggle("header__inner--active");
});
