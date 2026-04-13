document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");

  const preloader = document.querySelector(".preloader");
  preloader.classList.add("active");

  const removePreloader = () => {
    if (preloader) {
      preloader.classList.remove("active");
    }
  };

  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("active");
    mobileMenu.classList.toggle("open");
  });

  setTimeout(removePreloader, 1000);
});
