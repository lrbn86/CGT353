$(document).ready(function() {

  let items = $('#hover-images-grid').children('.hover-image');

  items.each(function() {
    $(this).hover(function() {
      $(this).animate({opacity: 1});
    },
    function() {
      $(this).animate({opacity: .6});
    });
  })

});
