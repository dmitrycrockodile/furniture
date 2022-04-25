$(function () {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
        $('.body').addClass('body--lock');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
        $('.body').removeClass('body--lock');
    });

    $('.header__btn--menu').on('click', function() {
        $('.menu').toggleClass('menu--open');
    });

    if ($(window).width() < 651) {
        $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
    }

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                }
            },
            {
                breakpoint: 1370,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article__slider--arrow article__slider--arrowleft"> <img src="images/blog-section/arrow-slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article__slider--arrow article__slider--arrowright"> <img src="images/blog-section/arrow-slider-right.svg" alt="arrow right"></button>'
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living-room'
        }
    });
})