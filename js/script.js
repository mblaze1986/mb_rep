$(function () {

    var header = $("#header"),
    sectionintroH = $("#sectionintro").innerHeight(),
    scrollOffset = $(window).scrollTop();


/* Fixed Header */
checkScroll(scrollOffset);

$(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset) {
    if (scrollOffset >= sectionintroH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
}


/* Smooth scroll */
$("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("#menu a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
        scrollTop: blockOffset
    }, 1000);
});


  /* Menu nav toggle */
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#menu").toggleClass("active");
        $("#header").toggleClass("active");
    });


    $("[data-slider]").slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });


});