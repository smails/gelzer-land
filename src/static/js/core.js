import $ from 'jquery'
import Inputmask from "inputmask";
import { Fancybox } from "../../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.esm.js";

Fancybox.bind("[data-fancybox]");

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.modal').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $('body').addClass("hidden");
  $(`[data-type="${modal}"]`).fadeIn();
});

$(window).click((e) => {
  if (e.target.classList.contains('modal') && e.target.style.display == 'block') {
    $('.modal').fadeOut();
    $('body').removeClass('hidden');
  }
});

$('.modal__close').click((e) => {
  $('.modal').fadeOut();
  $('body').removeClass('hidden');
});


new Inputmask("+7(999) 999-99-99").mask(document.querySelector('[type="tel"]'))