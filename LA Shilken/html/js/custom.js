/*------------------------------------------------------------------
Template Name:  N. agency - Responisve Landing Page for Agency
Version:        1.0
Last update:    12/17/2017
Author:         tabthemes
URL:            http://www.tabthemes.com/
-------------------------------------------------------------------*/

$(function () {
  'use strict';

  /*--------------------------------------------------
      Stellar Parallax Animation
  ---------------------------------------------------*/

  $(window).stellar({
    responsive: true,
    horizontalOffset: 0,
    horizontalScrolling: false
  });


  /*--------------------------------------------------
      WOW Effects Animation
  ---------------------------------------------------*/

  var wow = new WOW({
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 100,          // distance to the element when triggering the animation (default is 0)
    mobile: false        // trigger animations on mobile devices (true is default)
  });
  wow.init();


  /*--------------------------------------------------
      Preloader Page 
  ---------------------------------------------------*/

  $(window).load(function () {
    $("#preloader").delay(600).fadeOut("slow");
  });


  /*--------------------------------------------------
      Menu Features 
  ---------------------------------------------------*/

  // Sticky Navigation

  // $(window).scroll(function(){
  //   if ($(window).scrollTop() > 1 && $('.navbar-toggle').is(":hidden")){
  //     $('.navigation-overlay, .navigation, .nav-solid').addClass("sticky");
  //     $('.logo-wrap').addClass("shrink");
  //   } else {
  //     $('.navigation-overlay, .navigation, .nav-solid').removeClass("sticky");
  //     $('.logo-wrap').removeClass("shrink");
  //   }
  // });

  // // Closes the Responsive Menu on Menu Item Click        
  // $('.navbar-collapse ul li a').on('click',function() {
  //   $(".navbar-collapse").collapse('hide');
  // });

  // // Mobile Menu Resize
  // $(".navbar .navbar-collapse").css("max-height", $(window).height() - $(".navbar-header").height() );




  /*=============== SHOW MENU ===============*/
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')
      // Add show-icon to show and hide menu icon
      toggle.classList.toggle('show-icon')
    })
  }

  showMenu('nav-toggle', 'nav-menu')

  /*=============== SHOW DROPDOWN MENU ===============*/
  const dropdownItems = document.querySelectorAll('.dropdown__item')

  // 1. Select each dropdown item
  dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button')

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
      // 7. Select the current show-dropdown class
      const showDropdown = document.querySelector('.show-dropdown')

      // 5. Call the toggleItem function
      toggleItem(item)

      // 8. Remove the show-dropdown class from other items
      if (showDropdown && showDropdown !== item) {
        toggleItem(showDropdown)
      }
    })
  })

  // 3. Create a function to display the dropdown
  const toggleItem = (item) => {
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if (item.classList.contains('show-dropdown')) {
      dropdownContainer.removeAttribute('style')
      item.classList.remove('show-dropdown')
    } else {
      // 4. Add the maximum height to the dropdown content and add the show-dropdown class
      dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
      item.classList.add('show-dropdown')
    }
  }



  /*=============== DELETE DROPDOWN STYLES ===============*/
  const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container')

  // Function to remove dropdown styles in mobile mode when browser resizes
  const removeStyle = () => {
    // Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
      // Remove the dropdown container height style
      dropdownContainer.forEach((e) => {
        e.removeAttribute('style')
      })

      // Remove the show-dropdown class from dropdown item
      dropdownItems.forEach((e) => {
        e.classList.remove('show-dropdown')
      })
    }
  }

  addEventListener('resize', removeStyle)


  /*--------------------------------------------------
      Page Scroll Features 
  ---------------------------------------------------*/

  smoothScroll.init({
    speed: 2000,
    updateURL: false,
    offset: 70
  });


  /*--------------------------------------------------
      Owl Carousel Testimonials 
  ---------------------------------------------------*/

  $("#owl-testimonials").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoHeight: true,
    items: 1
  });


  /*--------------------------------------------------
      Owl Carousel Blog 
  ---------------------------------------------------*/

  $("#owl-blog").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }

  });

  /*--------------------------------------------------
      Owl Carousel Clients 
  ---------------------------------------------------*/

  $("#owl-clients").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 4
      },
      1170: {
        items: 5
      }
    }
  });


  /*--------------------------------------------------
      Stat Counter
  ---------------------------------------------------*/
  $(".stat-item-number").appear(function () {
    var count = $(this);
    count.countTo({
      from: 0,
      to: count.html(),
      speed: 3000,
      refreshInterval: 60,
    });
  });



  /*--------------------------------------------------
      Magnific Popup
  ---------------------------------------------------*/
  $(".lightbox-image").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: "mfp-fade"

  });

  $(".individual-gallery").magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: "mfp-fade"

  });

  $('.lightbox-video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });


  /*--------------------------------------------------
    Portfolio Isotope 
---------------------------------------------------*/

  if ($.fn.isotope && $.fn.imagesLoaded && ($('.portfolio').length > 0)) {

    $('.portfolio-isotope').imagesLoaded(function () {

      $('.iso-button').on("click", function () {
        $('.iso-button').removeClass('iso-active');
        $(this).addClass('iso-active');

        var selector = $(this).attr('data-filter');
        container.isotope({
          filter: selector
        });

        return false;
      });

      $(window).resize(function () {
        container.isotope({});

      });

      var container = $('.portfolio-isotope');

      container.isotope({
        itemSelector: '.pf-item',
        transitionDuration: '0.6s',
        layoutMode: 'fitRows'

      });

    });
  }


  /*--------------------------------------------------
      Youtube Video Background
  ---------------------------------------------------*/

  $(function () {
    $(".video-player").YTPlayer();
  });


  /*--------------------------------------------------
      CountTo Facts 
  ---------------------------------------------------*/

  $('.countup').appear(function () {
    var count_element = $(this);
    count_element.countTo({
      from: 0,
      to: parseInt(count_element.text(), 10),
      speed: 3000
    });
  });


  /* ---------------------------------------------
   Height 100%
   --------------------------------------------- */

  $(function () {
    $(".js-height-full").height($(window).height());
    $(".js-height-parent").each(function () {
      $(this).height($(this).parent().first().height());
    });
  });


  /*--------------------------------------------------
    Back to Top
  ---------------------------------------------------*/

  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }


});


/**Carees upload File */
var input = document.getElementById('file-upload');
var infoArea = document.getElementById('file-upload-filename');

input.addEventListener('change', showFileName);

function showFileName(event) {

  // the change event gives us the input it occurred in 
  var input = event.srcElement;

  // the input has an array of files in the `files` property, each one has a name that you can use. We're just using the name here.
  var fileName = input.files[0].name;

  // use fileName however fits your app best, i.e. add it into a div
  infoArea.textContent = 'File name: ' + fileName;
}
/**End */