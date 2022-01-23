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
    event.stopPropagation();
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeOut();
});

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 768) {
        $('.advantages-wrapper:not(.slick-initialized)').slick({
            infinite: false,
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
        });
        $('.certificate-wrapper:not(.slick-initialized)').slick({
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
        });
    } else {
        $(".advantages-wrapper.slick-initialized").slick("unslick");
        $(".certificate-wrapper.slick-initialized").slick("unslick");
    }
});
// slick active

//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

// show list all
$('.btn-toggle').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents().find('.list-areas');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.find('.btn-text').html('Скрыть');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.find('.btn-text').html('Весь список');

        content.slice(1).slideUp();
    }
});
// show list all