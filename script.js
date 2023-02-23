const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const arrowLeft = document.querySelector('.carousel-arrow-left');
const arrowRight = document.querySelector('.carousel-arrow-right');

let currentIndex = 0;
let lastIndex = carouselImages.length - 1;

// initialize carousel by setting the first slide to active
carouselImages[currentIndex].parentElement.classList.add('active');

// add event listeners to arrows to allow scrolling through the slides
arrowLeft.addEventListener('click', () => {
  // remove active class from current slide
  carouselImages[currentIndex].parentElement.classList.remove('active');

  // decrement current index and handle wraparound
  if (currentIndex === 0) {
    currentIndex = lastIndex;
  } else {
    currentIndex--;
  }

  // add active class to new slide
  carouselImages[currentIndex].parentElement.classList.add('active');
});

arrowRight.addEventListener('click', () => {
  // remove active class from current slide
  carouselImages[currentIndex].parentElement.classList.remove('active');

  // increment current index and handle wraparound
  if (currentIndex === lastIndex) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  // add active class to new slide
  carouselImages[currentIndex].parentElement.classList.add('active');
});
