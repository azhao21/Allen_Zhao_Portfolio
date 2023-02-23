const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNavItems = document.querySelectorAll('.carousel-nav-item');
const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
const carouselArrowRight = document.querySelector('.carousel-arrow-right');
const carouselTitle = document.querySelector('.carousel-title');
const carouselWidth = carouselItems[0].clientWidth;

let currentIndex = 0;

// Set initial slide position
carouselSlide.style.transform = `translateX(${-carouselWidth * currentIndex}px)`;

// Highlight current slide and update title
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    if (index === currentIndex) {
      item.classList.add('active');
      carouselNavItems[index].classList.add('active');
      carouselTitle.textContent = item.querySelector('.carousel-caption').textContent;
    } else {
      item.classList.remove('active');
      carouselNavItems[index].classList.remove('active');
    }
  });
}

// Go to previous slide
function goToPrevSlide() {
  if (currentIndex === 0) {
    currentIndex = carouselItems.length - 1;
  } else {
    currentIndex--;
  }
  carouselSlide.style.transform = `translateX(${-carouselWidth * currentIndex}px)`;
  updateCarousel();
}

// Go to next slide
function goToNextSlide() {
  if (currentIndex === carouselItems.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carouselSlide.style.transform = `translateX(${-carouselWidth * currentIndex}px)`;
  updateCarousel();
}

// Handle arrow clicks
carouselArrowLeft.addEventListener('click', goToPrevSlide);
carouselArrowRight.addEventListener('click', goToNextSlide);

// Handle nav clicks
carouselNavItems.forEach((navItem, index) => {
  navItem.addEventListener('click', () => {
    currentIndex = index;
    carouselSlide.style.transform = `translateX(${-carouselWidth * currentIndex}px)`;
    updateCarousel();
  });
});

// Update carousel on load
updateCarousel();
