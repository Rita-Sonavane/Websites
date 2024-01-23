
$('.carousel').carousel({ // targetting carousel class
  interval: 1000,  // 1000 milliseconds
  keyboard: true,  // being able to change w keyboard if true
  pause: 'hover', // means if hovering over won't change
  wrap: true // true by default, just means it will keep looping once reach last (vs false, will stop on last)
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});


