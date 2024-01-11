(function ($) {
    "use strict";


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();
    //
    //window.location.reload(true).init();




    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });



    //  Dropdown on mouse hover
    // const $dropdown = $(".dropdown");
    // const $dropdownToggle = $(".dropdown-toggle");
    // const $dropdownMenu = $(".dropdown-menu");
    // const showClass = "show";

    // $(window).on("load resize", function () {
    //     if (this.matchMedia("(min-width: 992px)").matches) {
    //         $dropdown.hover(
    //             function () {
    //                 const $this = $(this);
    //                 $this.addClass(showClass);
    //                 $this.find($dropdownToggle).attr("aria-expanded", "true");
    //                 $this.find($dropdownMenu).addClass(showClass);
    //             },
    //             function () {
    //                 const $this = $(this);
    //                 $this.removeClass(showClass);
    //                 $this.find($dropdownToggle).attr("aria-expanded", "false");
    //                 $this.find($dropdownMenu).removeClass(showClass);
    //             }
    //         );
    //     } else {
    //         $dropdown.off("mouseenter mouseleave");
    //     }
    // });


    /** PDF REDIRECT */

    //    document.addEventListener("DOMContentLoaded", function() {



    /**Animated Bike */
    $(".screen").click(function () {
        var el = $(this),
            newone = el.clone(true);

        el.before(newone);
        $(el).remove();
    });
    /*End */



    /*Home Navigation*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    /*End*/



    /**Sub Menu */
    $(document).ready(function () {
        $('.navbar-toggler').click(function () {
            console.log("Inside nav toggle")
            $('.navbar-collapse').slideToggle(300);
        });

        smallScreenMenu();
        let temp;
        function resizeEnd() {
            smallScreenMenu();
        }

        $(window).resize(function () {
            console.log("Cleadr temp", temp);
            clearTimeout(temp);

            temp = setTimeout(resizeEnd, 100);
            resetMenu();
        });
    });


    const subMenus = $('.sub-menu');
    const menuLinks = $('.menu-link');

    // function smallScreenMenu() {
    //     if ($(window).innerWidth() <= 992) {
    //         menuLinks.each(function (item) {
    //             $(this).click(function () {
    //                 console.log("Inside nav  menu item  toggle", item, this)
    //                 $(this).next().slideToggle();

    //             });
    //         });
    //     } else {
    //         menuLinks.each(function (item) {
    //             console.log("Else Click")
    //             $(this).off('click');
    //         });
    //     }
    // }


    function smallScreenMenu() {
        if ($(window).innerWidth() <= 992) {
            menuLinks.off('click'); // Unbind previously bound click event handlers
            menuLinks.click(function () {
                console.log("Inside nav  menu item  toggle", this);
                $(this).next().slideToggle();
            });
        } else {
            menuLinks.off('click'); // Unbind click event handlers for larger screens
        }
    }
    /**End */








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






    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000,
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 45,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 4
            },
            768: {
                items: 6
            },
            992: {
                items: 8
            }
        }
    });

})(jQuery);

