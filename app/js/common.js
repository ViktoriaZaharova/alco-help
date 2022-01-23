$('.history-clients-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
});

$('.submenu-item__links').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').siblings('.dropdown-menu__sub').slideToggle();
});


$('.dropdown-services .dropdown-menu').on('click', function(event){
    // The event won't be propagated up to the document NODE and
    // therefore delegated events won't be fired
    event.stopPropagation();
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});
