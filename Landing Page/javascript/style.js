const slides = document.querySelectorAll(".slide-img");

let counterImg = 0;
const totImg = slides.length - 1;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const showPrev = () => {
  counterImg--;
  slideImage();
};

const showNext = () => {
  if (counterImg != totImg) {
    counterImg++;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counterImg * 100}%)`;
  });
};

// toggle navbar
const mobile_toggle = document.querySelector(".mobile-navbar");
const nav_tabs = document.querySelector(".nav-tabs");

const toggleNavbar = () => {
  nav_tabs.classList.toggle("active");
};

mobile_toggle.addEventListener("click",() => toggleNavbar());
