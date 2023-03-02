import $ from 'jquery'

$('.header__link').click(function () {
  const item = $(this).attr('href')
  $('body').animate({
    scrollTop: $(item).offset().top - 150,
  }, 1000)
})