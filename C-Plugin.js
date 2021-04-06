const k = window.location.pathname
const q = k.split('/')

if (q[1] === 'index.html') {
  $('.carousel').addClass("owl-carousel owl-theme")

  $('.owl-carousel').owlCarousel(OwlCarousel)

} else {
  $('.carousel').removeClass("owl-carousel owl-theme")

}
