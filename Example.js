$(document).ready(() => {
  $('.hover').on('mouseover', () => {
      $('.hover-box').show()
  })
  $('.hover-box').on('mouseleave', () => {
      $('.hover-box').hide();
  })
})
