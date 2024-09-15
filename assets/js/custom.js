

$(document).ready(function () {






    // swiper home banner
    let swiper = new Swiper(".homeSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


    let swiper2 = new Swiper(".historicalSwiper", {
        slidesPerView: 2.5,
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 1,

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide: 0,
          },
          1200: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
          },
          // when window width is >= 640px
         
        },
       
      });

      let swiper3 = new Swiper(".enrichmentSwiper", {
        slidesPerView: 2.5,
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 2,

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide: 0,
          },
          1200: {
            slidesPerView: 2.5,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
          },
          // when window width is >= 640px
         
        },

      });


      let swiper4 = new Swiper(".dataSwiper", {
        slidesPerView: 3.8,
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 2,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide:0,
          },
            // when window width is >= 480px
          1200: {
            slidesPerView: 3.8,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 2,
          },
          // when window width is >= 640px
         
        },

      });

      let swiper5 = new Swiper(".tourismSwiper", {
        slidesPerView: 3.8,
        centeredSlides: true,
        spaceBetween: 30,
        initialSlide: 2,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide:0,
          },
            // when window width is >= 480px
          1200: {
            slidesPerView: 3.8,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 2,
          },
          // when window width is >= 640px
         
        },

      });
  




      let swiper6 = new Swiper(".eventsSwiper", {
        slidesPerView: 2.3,
        centeredSlides: false,
        spaceBetween: 30,
        initialSlide: 0,

        navigation: {
          nextEl: ".ev-next",
          prevEl: ".ev-prev",
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            initialSlide: 0,
            centeredSlides: false,
          },

           // when window width is >= 480px
           1200: {
            slidesPerView: 2.3,
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide: 0,
          },
          // 1400: {
          //   slidesPerView: 2.3,
          //   spaceBetween: 30,
          //   centeredSlides: false,
          //   initialSlide: 0,
          // },
          
          // when window width is >= 640px
         
        },

      });


      let swiper7 = new Swiper(".activitiesSwiper", {
        slidesPerView: 2.3,
        centeredSlides: false,
        spaceBetween: 30,
        initialSlide: 0,

        navigation: {
          nextEl: ".act-next",
          prevEl: ".act-prev",
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            initialSlide: 0,
            centeredSlides: false,
          },

           // when window width is >= 480px
           1200: {
            slidesPerView: 2.3,
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide: 0,
          },
          // 1400: {
          //   slidesPerView: 2.3,
          //   spaceBetween: 30,
          //   centeredSlides: false,
          //   initialSlide: 0,
          // },
          
          // when window width is >= 640px
         
        },

      });




      let swiper8 = new Swiper(".landMarkSwiper", {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 28,
        initialSlide: 0,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          575: {
            slidesPerView: 2,
            spaceBetween: 20,
            initialSlide: 0,
            centeredSlides: false,
          },

           // when window width is >= 480px
           992: {
            slidesPerView: 3,
            spaceBetween: 28,
            centeredSlides: false,
            initialSlide: 0,
          },
          // when window width is >= 640px
         
        },

      });

      

     
});










// start numbers counter

jQuery(function ($) {
  "use strict";

  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  var $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    var waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 10,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
});


// contact us toggle btn

$('.contact-toggle').click(function(){
  $(this).toggleClass("show");
});


// fancybox 

Fancybox.bind("[data-fancybox]", {
  // Transition effect when changing gallery items
  Carousel: {
    transition: "slide",
  },
  // Disable image zoom animation on opening and closing
  Images: {
    zoom: false,
  },
  // Custom CSS transition on opening
  showClass: "f-fadeIn",
 });