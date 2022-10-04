$('.pack-slider').each(function () {
    $(this).slick({
        dots: true,
        infinite: true,
        speed: 250,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $(this).parent().find('.pack-slider__dots-wrapper'),
        prevArrow: '<div class="pack-slider__arrow pack-slider__arrow_prev"></div>',
        nextArrow: '<div class="pack-slider__arrow pack-slider__arrow_next"></div>',
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            console.log(slider);
            return (i + 1) + '/' + slider.slideCount;
        }
    });
});

$('.reviews-slider').each(function () {
    $(this).slick({
        dots: false,
        infinite: true,
        speed: 250,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="reviews-slider__arrow reviews-slider__arrow_prev"></div>',
        nextArrow: '<div class="reviews-slider__arrow reviews-slider__arrow_next"></div>',
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            console.log(slider);
            return (i + 1) + '/' + slider.slideCount;
        }
    });
});

$('.distances-scheme-slider').each(function () {

    $(this).slick({
        dots: false,
        infinite: true,
        speed: 250,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $(this).find('.distances-scheme-slider__arrows-wrapper'),
        prevArrow: '<div class="distances-scheme-slider__arrow distances-scheme-slider__arrow_prev"></div>',
        nextArrow: '<div class="distances-scheme-slider__arrow distances-scheme-slider__arrow_next"></div>',
    });

    $(this).on('click', '.distances-scheme-slider__arrow_prev', function () {
        $(this).parents('.distances-scheme-slider').slick('slickPrev');
    });

    $(this).on('click', '.distances-scheme-slider__arrow_next', function () {
        $(this).parents('.distances-scheme-slider').slick('slickNext');
    });
});


// $(window).on("load", function () {
//     $(".reviews-slider__text").mCustomScrollbar();
// });


$('.header-menu__wrap > .header-menu__item').hover(function () {
    $(this).find('.header-dd-menu').stop().delay(300).queue('fx', function () {
        $(this).addClass('header-dd-menu_open').dequeue();
        $('.header-menu').addClass('header-menu_open');
        $('.header').addClass('header_menu-open');
    });
}, function () {
    $(this).find('.header-dd-menu').stop().removeClass('header-dd-menu_open');
    $('.header-menu').stop().removeClass('header-menu_open');
    $('.header').stop().removeClass('header_menu-open');
});


$('.header-dd-menu').width($(window).width());
let leftMargin = ($(window).width() - $('.header-menu__wrap').width()) / 2;
$('.header-dd-menu').css('left', '-' + leftMargin + 'px');


var headerHeight = 88;

if ($(window).width() < 992) {
    headerHeight = 71;
}

var nav = $('header');
$(window).scroll(function () {
    if ($(this).scrollTop() > headerHeight) {
        nav.addClass("header_fixed");
        $('body').addClass('body_fixed');
    } else {
        nav.removeClass("header_fixed");
        $('body').removeClass("body_fixed");
    }
});

$(function () {
    $('.header-mobile__button').click(function () {
        $('body').toggleClass('body-hidden');
        $('.header-mobile__button').toggleClass('header-mobile__button_open');
        $('.header-mobile__menu').toggleClass('header-mobile__menu_open');
    });
});

$('.choice-lang_active').click(function () {
    $('.language__slide-menu').toggleClass('language__slide-menu_show');
    $('.choice-lang_active').toggleClass('choice-lang_active_choose');
});


$('[data-fancybox="images"]').fancybox({
    loop: true,
    arrows: true,
    fullScreen: true,
    afterLoad: function (instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;

        if (pixelRatio > 1.5) {
            current.width = current.width / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }

});


