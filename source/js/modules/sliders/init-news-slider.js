const sliderNews = document.querySelector('[data-slider="news-swiper"]');

const initNewsSlider = () => {
  if (sliderNews) {
    // eslint-disable-next-line
    new Swiper(sliderNews, {
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

        768: {
          slidesPerView: 3,
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

export {initNewsSlider};
