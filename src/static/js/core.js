import $ from 'jquery'
import Inputmask from "inputmask";
import { Fancybox } from "../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js";

Fancybox.bind("[data-fancybox]");

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $('body').addClass("open");
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
    $('body').removeClass('open');
  }
});

$('.modal__close').click((e) => {
  $('.modal').fadeOut();
  $('body').removeClass('open');
});

$('.up').click(() => {
  $('html, body').animate({
    scrollTop: 0,
  }, 500);
});

$(window).scroll(() =>{
  const s = $(window).scrollTop();
  if (s > window.innerHeight / 2) {
    $('.up').fadeIn();
  } else {
    $('.up').hide();
  }
})

new Inputmask("+7(999) 999-99-99").mask(document.querySelector('[type="tel"]'))