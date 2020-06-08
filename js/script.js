$(document).ready(function () {

    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
  
  
    /* FIXED HEADER */
    $(window).on("scroll load resize", function () {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();
  
      if (scrollPos > introH) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    });
  
  
  
    /* SMOOTH SCROLL */
    $("[data-scroll]").on("click", function (event) {
      event.preventDefault();
  
      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      $("#menu a.active").removeClass("active");
      $(this).addClass("active");
  
      $("html, body").animate({
        scrollTop: elementOffset - 120
      }, 700);
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