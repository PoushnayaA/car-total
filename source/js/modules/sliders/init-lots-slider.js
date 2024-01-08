const sliderLots = document.querySelector('[data-slider="lots-swiper"]');

const initLotsSlider = () => {
  if (sliderLots) {
    // eslint-disable-next-line
    new Swiper(sliderLots, {
      keyboard: true,
      // loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1440: {
          slidesPerView: 4,
          spaceBetween: 24,
        },

        500: {
          slidesPerView: 2.5,
          spaceBetween: 20,
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
