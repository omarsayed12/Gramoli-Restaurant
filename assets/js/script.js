
$('.responsive').slick({
  rtl: true,
  arrows: false,
  pauseOnHover: true,
  slidesPerGroup: 1,
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  speed: 1700,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false
    }
  }
  ]
});



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
let navbar = document.getElementById('fixed-nav');

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= 50) {
    navbar.classList.add("sticky")
  }else {
    navbar.classList.remove("sticky");
  }
}


let header = document.getElementById('header');

window.addEventListener("scroll", onscrollPage);
function onscrollPage() {
  window.scrollY >=50
    ? (header.style.marginTop = "80px")
    : (header.style.marginTop = "0");
}