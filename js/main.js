/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const prevButton = document.querySelector('.button__prev'),
  nextButton = document.querySelector('.button__next'),
  sliderItems = document.querySelectorAll('.slider__item');
dots = document.querySelectorAll('.dot');
let dotIndex = 0;

//Function
const nextSlide = () => {
  if (dotIndex < dots.length - 1) {
    dotIndex++;
  } else {
    dotIndex = 0;
  }
  thisSlide(dotIndex);
};
const prevSlide = () => {
  if (dotIndex > 0) {
    dotIndex--;
  } else {
    dotIndex = dots.length - 1;
  }
  thisSlide(dotIndex);
};
const thisSlide = index => {
  for (let dot of dots) {
    dot.classList.remove('active');
  }
  for (let sliderItem of sliderItems) {
    sliderItem.classList.remove('focused');
  }
  sliderItems[index].classList.add('focused');
  dots[index].classList.add('active');
};

//EventListeners

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dotIndex = index;
    thisSlide(dotIndex);
  });
});

//SETINTERVAL

// setInterval(() =>{
// nextSlide()
// },3000)
/******/ })()
;
//# sourceMappingURL=main.js.map