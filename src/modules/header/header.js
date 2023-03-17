import $ from 'jquery'

$('.header__link').click(function () {
  const item = $(this).attr('href')
  $('body').animate({
    scrollTop: $(item).offset().top - 150,
  }, 1000);
})

$('.mobile-menu__link').click(function () {
  $('.burger').removeClass('open')
  $('body').removeClass('open')
  $('.mobile-menu').slideUp();
  const item = $(this).attr('href')
  $('body').animate({
    scrollTop: $(item).offset().top - 150,
  }, 1000);
})

$('.header__mobile-menu').click(function() {
  $(this).find('.burger').toggleClass('open')
  $('body').toggleClass('open')
  $('.mobile-menu').slideToggle();
})