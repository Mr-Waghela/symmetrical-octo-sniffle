$(window).load(function () {
    
    $('.fade').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });

    $('.product-fade').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });
    
    $('.testimonial-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        fade: true,
        pauseOnHover: false,
        cssEase: 'linear'
    });
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('header').addClass("sticky");
        }
        else {
            $('header').removeClass("sticky");
        }
    });
});