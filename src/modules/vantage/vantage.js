import $ from 'jquery'
import Draggabilly from 'draggabilly'


var dragMe = document.querySelector(".befaft__drag"),
  $dragMe = $(".befaft__drag"),
  $container = $(".befaft__box"),
  $viewAfter = $(".befaft__view_before");

var draggie = new Draggabilly(dragMe, {
  containment: '.befaft__box',
  axis: 'x'
});

draggie.on('dragMove', function (event, pointer, moveVector) {
  if (pointer.pageX > $container.offset().left && pointer.pageX < $container.offset().left + $container.width()){
    $viewAfter.css({
      width: pointer.pageX - $container.offset().left
    });
  }
});
draggie.on('dragEnd', function (event, pointer, moveVector) {
  if (pointer.pageX > $container.offset().left && pointer.pageX < $container.offset().left + $container.width()) {
    $viewAfter.css({
      width: pointer.pageX - $container.offset().left
    });
  }
});

$container.on("click", function(event) {
    var eventLeft = event.pageX - $container.offset().left;
    animateTo(eventLeft);
});

animateTo("50%");

function animateTo(_left) {
  $dragMe.animate({
    left: _left
  });
  $viewAfter.animate({
    width: _left
  });
}