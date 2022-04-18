$(function () {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
        $('.body').addClass('body--lock');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
        $('.body').removeClass('body--lock');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact-slider').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        dots: true,
        arrows: false,
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