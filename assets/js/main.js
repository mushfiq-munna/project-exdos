(function ($) {
  "use strict";

  // data bg img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + ")"
    );
  });

  // testimonial slider
  var swiper = new Swiper(".tp-testimonial-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tp-swiper-test-button-next",
      prevEl: ".tp-swiper-test-button-prev",
    },
  });

  // brand slider
  var swiper = new Swiper(".tp-brand-top-active", {
    slidesPerView: "auto",
    spaceBetween: 60,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".tp-brand-bottom-active", {
    slidesPerView: "auto",
    spaceBetween: 60,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  // team slider
  var swiper = new Swiper(".tp-team-active", {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tp-swiper-team-button-next",
      prevEl: ".tp-swiper-team-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
})(jQuery);
