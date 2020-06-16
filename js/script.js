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

  $('.header__link').click(function (event) {
    $('#nav_toggle,#menu').removeClass('active');
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

  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top', // defines which position of the element regarding to window should trigger the animation

});


});