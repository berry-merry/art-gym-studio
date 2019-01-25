
$(document).ready(function() {
    /**** STICKY NAV ****/
    
    $('.js--section-what-we-do').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {offset: '60px'})
})