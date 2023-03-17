import $ from 'jquery'
import 'slick-carousel'

$('.banner').slick({
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icofont-arrow-right"></i></button>',
  prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icofont-arrow-left"></i></button>',
});