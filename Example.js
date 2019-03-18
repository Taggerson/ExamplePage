$(document).ready(() => {
  $('.hover').on('mouseover', () => {
      $('#box-animate').fadeIn();
  })
  $('.hover-box').on('mouseleave', () => {
      $('#box-animate').fadeOut();
  })
})
