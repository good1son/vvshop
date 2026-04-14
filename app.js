document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });
});
