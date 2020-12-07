$(document).ready(function() {
  $('#composers').click(function() {
    $('html, body').animate({
      scrollTop: 0 
    })
  })

  $('#about').click(function() {
    $('html, body').animate({
      scrollTop: $('#bottom-half').offset().top - 10
    })
  })
});