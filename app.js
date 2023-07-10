$(document).ready(function () {
    if (window.pageYOffset > 50) {
        $('header').addClass('minimize');
        $('.negative-1').addClass('minimize');
    } else {
        $('header').removeClass('minimize');
        $('.negative-1').removeClass('minimize');
    }

    $(window).scroll(function () { 
        if (window.pageYOffset > 1) {
            $('header').addClass('minimize');
            $('.negative-1').addClass('minimize');
        } else {
            $('header').removeClass('minimize');
            $('.negative-1').removeClass('minimize');
        }
    });
    
});