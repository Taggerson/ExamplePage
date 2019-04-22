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
      $('.hamburgerIcon').on('click', () => {
        $('.hamburgerDropdown').fadeIn();
      });
      $('.hamburgerDropdown').on('mouseleave', () => {
          $('.hamburgerDropdown').fadeOut();
      });
      $('.1').on('mouseover', () => {
          $('.1').toggleClass('hamburgerHover');
      });
      $('.1').on('mouseleave', () => {
          $('.1').toggleClass('hamburgerHover');
      });
      $('.2').on('mouseover', () => {
          $('.2').toggleClass('hamburgerHover');
      });
      $('.2').on('mouseleave', () => {
          $('.2').toggleClass('hamburgerHover');
      });
      $('.1').on('mouseover', () => {
          $('.1').toggleClass('hamburgerHover');
      });
      $('.3').on('mouseleave', () => {
          $('.3').toggleClass('hamburgerHover');
      });
  });

});
