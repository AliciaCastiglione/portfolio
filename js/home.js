var mySwiper = new Swiper('.swiper-container', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

$(".hamburger").on('click', function() {
  $(".nav").fadeToggle('slow');
});

$(".close").on('click', function() {
  $(".nav").fadeOut('slow');
});