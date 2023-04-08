const slides = document.querySelectorAll(".slide-img");

let counterImg = 0;
const totImg = slides.length-1;

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
