const sliderLots = document.querySelector('[data-slider="lots-swiper"]');

const initLotsSlider = () => {
  if (sliderLots) {
    // eslint-disable-next-line
    new Swiper(sliderLots, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
          // spaceBetween: 24,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  }
};

export {initLotsSlider};
