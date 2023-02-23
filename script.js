const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const carouselNavItems = document.querySelectorAll('.carousel-nav-item');
const arrowLeft = document.querySelector('.carousel-arrow-left');
const arrowRight = document.querySelector('.carousel-arrow-right');

let currentIndex = 0;
let lastIndex = carouselImages.length - 1;

// initialize carousel by setting the first slide to active
carouselImages[currentIndex].parentElement.classList.add('active');
carouselNavItems[currentIndex].classList.add('active');

// add event listeners to nav items to allow direct navigation to a slide
carouselNavItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // remove active classes from current slide and nav item
    carouselImages[currentIndex].parentElement.classList.remove('active');
    carouselNavItems[currentIndex].classList.remove('active');

    // set new current index and add active classes to new slide and nav item
    currentIndex = index;
    carouselImages[currentIndex].parentElement.classList.add('active');
    carouselNavItems[currentIndex].classList.add('active');
  });
});

// add event listeners to arrows to allow scrolling through the slides
arrowLeft.addEventListener('click', () => {
  // remove active classes from current slide and nav item
  carouselImages[currentIndex].parentElement.classList.remove('active');
  carouselNavItems[currentIndex].classList.remove('active');

  // decrement current index and handle wraparound
  if (currentIndex === 0) {
    currentIndex = lastIndex;
  } else {
    currentIndex--;
  }

  // add active classes to new slide and nav item
  carouselImages[currentIndex].parentElement.classList.add('active');
  carouselNavItems[currentIndex].classList.add('active');
});

arrowRight.addEventListener('click', () => {
  // remove active classes from current slide and nav item
  carouselImages[currentIndex].parentElement.classList.remove('active');
  carouselNavItems[currentIndex].classList.remove('active');

  // increment current index and handle wraparound
  if (currentIndex === lastIndex) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  // add active classes to new slide and nav item
  carouselImages[currentIndex].parentElement.classList.add('active');
  carouselNavItems[currentIndex].classList.add('active');
});
