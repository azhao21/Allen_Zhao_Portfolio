// get the header element
const header = document.querySelector('header');

// get the distance from the top of the page to the top of the header
const top = header.offsetTop;

// add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // if the window has been scrolled more than the distance from the top of the page to the top of the header, fix the header in place
  if (window.pageYOffset > top) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});
