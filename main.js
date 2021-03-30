const k = window.location.pathname
const q = k.split('/')

if (q[1] !== 'admin') {
  $('.carousel').addClass("owl-carousel owl-theme")

  console.log('front-end')
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })

} else {
  $('.carousel').removeClass("owl-carousel owl-theme")

}
