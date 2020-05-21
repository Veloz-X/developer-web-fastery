/*
-------------------------------------------------------------------------------------------
* Template Name    : itotek - Bootstrap 4 HTML5 One Pages Template                        *
* Author           : Setblue                                                              *
* Version          : 1.0.0                                                                *
* File Description : Main Css file of the template                                        *
*------------------------------------------------------------------------------------------
*/

$(document).ready(function () {
    "use strict";
    //===== Prealoder
    $(function () {
        var preloaderFadeOutTime = 500;
        function hidePreloader() {
            var preloader = $('.spinner-wrapper');
            setTimeout(function () {
                preloader.fadeOut(preloaderFadeOutTime);
            }, 500);
        }
        hidePreloader();
    });

    //===== jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: (target.offset().top - 60)
                    }, 1200);
                    return false;
                }
            }
        });

    });

    //===== Sticky
    $(window).on('scroll', function (event) {
        $(function () {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "images/logo.svg");
        } else {
            $(".navbar-area").addClass("sticky");
            $(".navbar .navbar-brand img").attr("src", "images/logo-2.svg");
        }
        });

        //===== Section Menu Active
        $(function () {
            var scrollLink = $('.page-scroll');
            var scrollbarLocation = $(this).scrollTop();
            scrollLink.each(function () {
                var sectionOffset = $(this.hash).offset().top - 73;
                if (sectionOffset <= scrollbarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        });

        //===== Show or hide the sticky footer button
        $(function () {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
        });
    });

    //===== close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });


    //===== testimonial active
    $('.testimonial-active').slick({
        dots: true,
        speed: 800,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    //===== Back to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //=====  WOW active
    new WOW().init();

    //=====  particles
    (function ($) {
        "use strict";
        particlesJS.load('particles-1', 'particles.json', function () { });
        particlesJS.load('particles-2', 'particles.json', function () { });
    })(jQuery);

});
