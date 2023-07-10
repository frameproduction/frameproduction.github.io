$(document).ready(function () {
    if (window.pageYOffset > 50) {
        $('header').addClass('minimize');
    } else {
        $('header').removeClass('minimize');
    }

    $(window).scroll(function () { 
        if (window.pageYOffset > 1) {
            $('header').addClass('minimize');
        } else {
            $('header').removeClass('minimize');
        }
    });
    
});