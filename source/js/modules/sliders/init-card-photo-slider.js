
const sliderPhotos = document.querySelector('[data-slider="card-photo-swiper"]');

const initPhotoSlider = () => {
  if (sliderPhotos) {
    // eslint-disable-next-line
    var swiper3 = new Swiper(".mySwiper3", {
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
    });
    // eslint-disable-next-line
    var swiper2 = new Swiper(".mySwiper2", {
      breakpoints: {
        1440: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 3,
        },

        500: {
          slidesPerView: 2,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      thumbs: {
        swiper: swiper3,
      },
    });
  }

};


export {initPhotoSlider};
