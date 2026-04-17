document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (burgerButton && mobileMenu) {
    burgerButton.addEventListener("click", () => {
      burgerButton.classList.toggle("active");
      mobileMenu.classList.toggle("open");
    });
  }

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.toggle("flipped");
    });
  });

  const track = document.querySelector(".slider-track");
  const slides = Array.from(document.querySelectorAll(".slider-slide"));
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  const dotsContainer = document.querySelector(".slider-dots");

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  let slidesToShow = getSlidesToShow();
  const totalSlides = slides.length;
  let isMobile = window.innerWidth <= 768;

  function getSlidesToShow() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 900) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  }

  function getTotalPages() {
    return Math.ceil(totalSlides / slidesToShow);
  }

  function generateDots() {
    if (!dotsContainer) return;
    const totalPages = getTotalPages();
    dotsContainer.innerHTML = "";
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === Math.floor(currentIndex / slidesToShow)) {
        dot.classList.add("active");
      }
      dot.addEventListener("click", () => goToPage(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = document.querySelectorAll(".dot");
    const currentPage = Math.floor(currentIndex / slidesToShow);
    dots.forEach((dot, idx) => {
      if (idx === currentPage) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function goToPage(pageIndex) {
    const maxPage = getTotalPages() - 1;
    const targetPage = Math.min(maxPage, Math.max(0, pageIndex));
    currentIndex = targetPage * slidesToShow;
    updateSlider();
  }

  function updateSlider() {
    if (isMobile) return; // на мобилках не используем transform
    const slideWidth = slides[0]?.offsetWidth || 0;
    const gap = 30;
    const offset = currentIndex * (slideWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
    updateDots();
  }

  function nextSlide() {
    if (isMobile) return;
    const maxIndex = totalSlides - slidesToShow;
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  }

  function prevSlide() {
    if (isMobile) return;
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  }
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        if (!isMobile) {
          currentIndex = 0;
          updateSlider();
          generateDots();
        }
      } else {
        const newSlidesToShow = getSlidesToShow();
        if (newSlidesToShow !== slidesToShow) {
          slidesToShow = newSlidesToShow;
          currentIndex = 0;
          generateDots();
          updateSlider();
        } else {
          updateSlider();
        }
      }
    }, 200);
  });

  generateDots();
  updateSlider();
});
