const k = window.location.pathname
const q = k.split('/')

if (q[1] !== 'admin') {
  $('.carousel').addClass("owl-carousel owl-theme")

  console.log('front-end')
  $('.owl-carousel').owlCarousel(OwlCarousel)

} else {
  $('.carousel').removeClass("owl-carousel owl-theme")

}
