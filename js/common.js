$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},400);
        return false;
    });
    
});

$(".contact-me").click(function () {
    $('.contact-overlay').addClass('active');
});

$(".close-contact").click(function () {
    $('.contact-overlay').removeClass('active');
});

$(".search-btn").click(function(){
    $(".search-container").fadeIn("normal").toggleClass("hide");
});