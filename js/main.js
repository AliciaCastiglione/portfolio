$('.open-modal').on('click', function() {
  var imgSource = $(this).find('img').attr('src');
  $('.modal-wrapper img').attr('src', imgSource);
  $('.modal-wrapper').fadeIn('slow');
});

$('.close-modal').on('click', function() {
  $('.modal-wrapper').fadeOut('slow');
});