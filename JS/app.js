/*============================
-----------Team-Owl-carousel---------
==============================*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 750,
        loop: true,
        autoplayHoverPause: true,
        margin: 10,
        dots: false,
        nav: true,
        navText: ['<span><i class="fa-solid fa-caret-left"></i></span>', '<span><i class="fa-solid fa-caret-right"></i></span>']
    });
});