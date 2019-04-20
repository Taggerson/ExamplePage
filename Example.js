$(document).ready(() => {
  $('.hover').on('mouseover', () => {
      $('#box-animate').fadeIn();
  });
  $('.hover-box').on('mouseleave', () => {
      $('#box-animate').fadeOut();
  });

  $('.hamburgerIcon').on('mouseover', () => {
      $('.hamburgerIcon').toggleClass('hamburgerHover');
      $('.hamburgerIcon').on('mouseleave', () => {
          $('.hamburgerIcon').toggleClass('hamburgerHover');
        });
  });




});
