import $ from 'jquery'
import 'slick-carousel'

$('.brand__list').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icofont-arrow-right"></i></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icofont-arrow-left"></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});