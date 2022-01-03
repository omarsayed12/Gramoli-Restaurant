$('.responsive').slick({
  rtl: true,
  arrows: false,
  pauseOnHover: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1700,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
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

$('.responsive-en').slick({
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 1700,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});
$('.slider-days').slick({
  rtl: true,
  arrows: false,
  slidesToShow: 24,
  slidesToScroll: 10,
  speed: 3000,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 15,
      slidesToScroll: 5,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 10,
      slidesToScroll: 4,
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 8,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 443,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 2,
    }
  }
  ]
});

$('.slider-days-en').slick({
  arrows: false,
  slidesToShow: 24,
  slidesToScroll: 10,
  speed: 3000,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 15,
      slidesToScroll: 5,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 10,
      slidesToScroll: 4,
    }
  },
  {
    breakpoint: 568,
    settings: {
      slidesToShow: 8,
      slidesToScroll: 3,
    }
  },
  {
    breakpoint: 443,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 2,
    }
  }
  ]
});