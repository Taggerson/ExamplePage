$(document).ready(() => {
  $('.header').on('mouseover', event => {
      $(event.currentTarget).text('Hovered')
  })
  $('.header').on('mouseleave', event => {
      $(event.currentTarget).text('Hover Me')
  })
})
