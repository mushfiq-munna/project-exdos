(function ($) {
  "use strict";

  // mobile menu
  var tpMenuWrap = $(".tp-mobile-menu-active > ul").clone();
  var tpSideMenu = $(".tp-offcanvas-menu nav");
  tpSideMenu.append(tpMenuWrap);
  if ($(tpSideMenu).find(".sub-menu, .tp-mega-menu").length != 0) {
    $(tpSideMenu)
      .find(".sub-menu, .tp-mega-menu")
      .parent()
      .append(
        '<button class="tp-menu-close"><i class="fas fa-chevron-right"></i></button>'
      );
  }

  var sideMenuList = $(
    ".tp-offcanvas-menu nav > ul > li button.tp-menu-close, .tp-offcanvas-menu nav > ul li.has-dropdown > a"
  );
  $(sideMenuList).on("click", function (e) {
    console.log(e);
    e.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(this).parent().addClass("active");
      $(this).siblings(".sub-menu, .tp-mega-menu").slideDown();
    } else {
      $(this).siblings(".sub-menu, .tp-mega-menu").slideUp();
      $(this).parent().removeClass("active");
    }
  });

  // class add
  $(".tp-offcanvas-toggle").on("click", function () {
    $(".tp-offcanvas").addClass("tp-offcanvas-open");
    $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
  });

  $(".tp-offcanvas-close, .tp-offcanvas-overlay").on("click", function () {
    $(".tp-offcanvas").removeClass("tp-offcanvas-open");
    $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
  });

  // data bg img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + ")"
    );
  });

  // data bg color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // data color
  $("[data-color]").each(function () {
    $(this).css("color", $(this).attr("data-color"));
  });

  $(".popup-img").magnificPopup({
    type: "image",
    // other options
  });

  $(".popup-video").magnificPopup({
    type: "iframe",
    // other options
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

  // // testimonial slider
  // var swiper = new Swiper(".tp-testimonial-active-2", {
  //   slidesPerView: 1,
  //   effect: "fade",
  //   spaceBetween: 30,
  //   keyboard: {
  //     enabled: true,
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".tp-swiper-test-button-next",
  //     prevEl: ".tp-swiper-test-button-prev",
  //   },
  // });

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

  // brand title active
  var swiper = new Swiper(".tp-brand-title-active", {
    slidesPerView: "auto",
    spaceBetween: 40,
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

  // brand normal slider
  var swiper = new Swiper(".tp-brand-normal-active", {
    slidesPerView: 5,
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
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
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
      0: {
        slidesPerView: 1,
      },
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

  // project slider
  var swiper = new Swiper(".tp-project-active", {
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
      0: {
        slidesPerView: 1,
      },
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
