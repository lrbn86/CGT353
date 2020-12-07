$(document).ready(function() {
  
  let items = $('#hover-images-grid').children('.hover-image');
  let composerName = $('#composer-name');

  items.each(function(i) {
    $(this).click(function() {
      let element = cuisines[composerName.text()].pieces[i];
      $('#piece-author').text(composerName.text());
      $('#piece-title').text($(this).text());
      $('#youtube-embed').attr('src', element.youtube);

      // Show a pop up box modal
      $('#box-modal-popup').fadeIn();
      $('#overlay').fadeIn();
    });
  });

  $('#popup-close').click(function() {
    $('#box-modal-popup').fadeOut();
    $('#overlay').fadeOut();
    stopVideo();
  });

  // Box modal will close when clicked outside
  $('#overlay').click(function() {
    $('#box-modal-popup').fadeOut();
    $('#overlay').fadeOut(); 
    stopVideo();
  });

  function stopVideo() {
    $('#youtube-embed').attr('src','');
  }

});

