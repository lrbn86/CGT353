$(document).ready(function() {
  let counter = 0;
  let numImages = $('#slider-wrapper .slider-image').length;
  let names = ["American Cuisine", "Italian Cuisine", "Mexican Cuisine", "Korean Cuisine", "Indian Cuisine", "French Cuisine", "Vietnamese Cuisine", "Japanese Cuisine", "Chinese Cuisine"];
  let cuisineName = $('#composer-name');
  cuisineName.text(names[counter]);
  changeImages();

  let lastImagePos = (numImages * 500);

  $('#next').click(next);

  $('#prev').click(prev);

  function next() {
    // Move the dot accordingly
    let next = $('div.dot-selected').next();
    $('.dot').removeClass('dot-selected');
    next.addClass('dot-selected');

    // Control slider
    counter++;
    if (counter >= numImages) {
      $('#slider-wrapper').animate({left: '0px'},'fast');
      counter = 0;
      $('#dot1').addClass('dot-selected'); // Make dot go to begin if we next from ending
    } else {
      $('#slider-wrapper').animate({left: '-=500px'});
    }
    cuisineName.text(names[counter]);
    changeImages();
  }

  function prev() {
    // Move the dot accordingly
    let prev = $('div.dot-selected').prev();
    $('.dot').removeClass('dot-selected');
    prev.addClass('dot-selected');

    // Control slider
    if (counter <= 0) {
      $('#slider-wrapper').animate({left: `-${lastImagePos-500}px`});
      counter = numImages;
      $('#dot9').addClass('dot-selected'); // Make dot go to end if we prev from the beginning
    } else {
      $('#slider-wrapper').animate({left: '+=500px'},'fast');
    }
    counter--;
    cuisineName.text(names[counter]);
    changeImages();
  }

  function changeImages() {
    let items = $('#hover-images-grid').children('.hover-image');
    items.each(function(i) {
      let element = cuisines[cuisineName.text()].pieces[i];
      $(this).html(`<p>${element.name}</p>`)
      $(this).css({'background-image': `url(${element.thumbnail})`});
    });
  }


  // Handle dots nav
  $('.dot').click(function() {
    $('.dot').removeClass('dot-selected');
    $(this).addClass('dot-selected');
  });

  // 1
  $('#dot1').click(function() {
    counter = 0;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '0px'})
    changeImages();
  });

  // 2
  $('#dot2').click(function() {
    counter = 1;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-500px'})
    changeImages();
  });

  // 3 
  $('#dot3').click(function() {
    counter = 2;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-1000px'})
    changeImages();
  });

  // 4
  $('#dot4').click(function() {
    counter = 3;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-1500px'})
    changeImages();
  });

  // 5
  $('#dot5').click(function() {
    counter = 4;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-2000px'})
    changeImages();
  });

  // 6
  $('#dot6').click(function() {
    counter = 5;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-2500px'})
    changeImages();
  });

  // 7
  $('#dot7').click(function() {
    counter = 6;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-3000px'})
    changeImages();
  });

  // 8
  $('#dot8').click(function() {
    counter = 7;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-3500px'})
    changeImages();
  });

  // 9
  $('#dot9').click(function() {
    counter = 8;
    cuisineName.text(names[counter]);
    $('#slider-wrapper').animate({left: '-4000px'})
    changeImages();
  });

});
