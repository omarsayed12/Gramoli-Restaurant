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
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    ]
  },100);


  $('.responsive-en').slick({
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
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
    ]
  });

let navbar = document.getElementById('fixed-nav');
window.addEventListener("scroll", ()=> {
  setTimeout(() =>{
    if (window.scrollY >= 50) {
      navbar.classList.add("sticky")
    }else {
      navbar.classList.remove("sticky");
    }
  })
})


let header = document.getElementById('header');

window.addEventListener("scroll", () =>{
  setTimeout(()=> {
  window.scrollY >=50
    ? (header.style.marginTop = "80px")
    : (header.style.marginTop = "0")
  })
});
