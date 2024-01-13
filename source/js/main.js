import { iosVhFix } from './utils/ios-vh-fix';

import { initLotsSlider } from './modules/sliders/init-lots-slider';
import { initNewsSlider } from './modules/sliders/init-news-slider';
import { initPhotoSlider } from './modules/sliders/init-card-photo-slider';

import { initAccordions } from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  // function getTimeRemaining(endtime) {
  //   var t = Date.parse(endtime) - Date.parse(new Date());
  //   var seconds = Math.floor((t / 1000) % 60);
  //   var minutes = Math.floor((t / 1000 / 60) % 60);
  //   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //   var days = Math.floor(t / (1000 * 60 * 60 * 24));
  //   return {
  //     'total': t,
  //     'days': days,
  //     'hours': hours,
  //     'minutes': minutes,
  //     'seconds': seconds,
  //   };
  // }

  // function initializeClock(timer, endtime, id) {
  //   var clock = document.getElementById(id);
  //   if (clock) {
  //   var daysSpan = clock.querySelector('.days');
  //   var hoursSpan = clock.querySelector('.hours');
  //   var minutesSpan = clock.querySelector('.minutes');

  //   function updateClock() {
  //     var t = getTimeRemaining(endtime);

  //     daysSpan.innerHTML = t.days;
  //     hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
  //     minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);

  //     if (t.total <= 0) {
  //       clearInterval(timeinterval);
  //     }
  //   }
  //   updateClock();
  //   var timeinterval = setInterval(updateClock, 1000);
  // }
  // }

  // const elements = document.querySelectorAll('.lots__timer');
  // elements.forEach(i => initializeClock('.countdown', i.dataset.deadline, i.id));

  const loginForm = document.querySelector('.log-in__navigation-item--login');
const registrationForm = document.querySelector('.log-in__navigation-item--registration');

  if (loginForm) {
    loginForm.addEventListener('click', function () {
      document.querySelector('.log-in__navigation-item--active').classList.remove('log-in__navigation-item--active');
      loginForm.classList.add('log-in__navigation-item--active');
      document.querySelector('.log-in__form--main').classList.add('.log-in__form--active');
      document.querySelector('.log-in__form--main').classList.remove('visually-hidden');
      document.querySelector('.log-in__form--registration').classList.add('visually-hidden');
    });

    registrationForm.addEventListener('click', function () {
      document.querySelector('.log-in__navigation-item--active').classList.remove('log-in__navigation-item--active');
      registrationForm.classList.add('log-in__navigation-item--active');
      document.querySelector('.log-in__form--registration').classList.add('.log-in__form--active');
      document.querySelector('.log-in__form--registration').classList.remove('visually-hidden');
      document.querySelector('.log-in__form--main').classList.add('visually-hidden');
    });
  }


  const personAccount = document.querySelector('.account__navigation-item--personal');
  const favoriteAccount = document.querySelector('.account__navigation-item--favorite');
  const archiveAccount = document.querySelector('.account__navigation-item--archive');

  if (personAccount) {
    personAccount.addEventListener('click', function () {
      document.querySelector('.account__navigation-item--active').classList.remove('account__navigation-item--active');
      personAccount.classList.add('account__navigation-item--active');
      document.querySelector('.account__form--personal').classList.add('.account__form--active');
      document.querySelector('.account__form--personal').classList.remove('visually-hidden');
      document.querySelector('.account__form--favorite').classList.add('visually-hidden');
      document.querySelector('.account__form--archive').classList.add('visually-hidden');
    });

    favoriteAccount.addEventListener('click', function () {
      document.querySelector('.account__navigation-item--active').classList.remove('account__navigation-item--active');
      favoriteAccount.classList.add('account__navigation-item--active');
      document.querySelector('.account__form--favorite').classList.add('.account__form--active');
      document.querySelector('.account__form--favorite').classList.remove('visually-hidden');
      document.querySelector('.account__form--personal').classList.add('visually-hidden');
      document.querySelector('.account__form--archive').classList.add('visually-hidden');
    });

    archiveAccount.addEventListener('click', function () {
      document.querySelector('.account__navigation-item--active').classList.remove('account__navigation-item--active');
      archiveAccount.classList.add('account__navigation-item--active');
      document.querySelector('.account__form--archive').classList.add('.account__form--active');
      document.querySelector('.account__form--archive').classList.remove('visually-hidden');
      document.querySelector('.account__form--personal').classList.add('visually-hidden');
      document.querySelector('.account__form--favorite').classList.add('visually-hidden');
    });

  }

  // window.addEventListener('load', () => {
    setTimeout(initLotsSlider(), 1000);
    setTimeout(initNewsSlider(), 1000);
    setTimeout(initAccordions(), 1000);
    setTimeout(initPhotoSlider(), 1000);

    const btnText = document.querySelector('.lots__more-button');
    btnText.addEventListener('click', function () {
      document.querySelectorAll('.lots__photo-item--hidden').forEach(function (item) {
        item.classList.toggle('lots__photo-item--hidden');
        btnText.classList.toggle('visually-hidden');
      });
    });
  // });
});

// ---------------------------------

const buttonCity = document.querySelector('[data-button="change-city"]');
buttonCity.addEventListener('click', function () {
  document.querySelector('.navigation__select-list').classList.toggle('visually-hidden');
  document.querySelector('.navigation__select-button').classList.toggle('navigation__select-button--open-nav');
});

document.querySelector('.navigation__select-list').addEventListener('click', function (evt) {
  document.querySelector('.navigation__select-list').classList.add('visually-hidden');
  document.querySelector('.navigation__select-item--active').classList.remove('navigation__select-item--active');
  buttonCity.classList.remove('navigation__select-button--open-nav');
  if (evt.target.matches('.navigation__select-item')) {
    evt.target.classList.add('navigation__select-item--active');
    buttonCity.querySelector('div').textContent = evt.target.textContent;
  }
});

const buttonNavigation = document.querySelector('[data-button="navigation"]');
buttonNavigation.addEventListener('click', function () {
  buttonNavigation.classList.toggle('navigation__button--active');
  document.querySelector('.navigation__list--desktop').classList.toggle('navigation__list--open');
  document.querySelector('main').classList.toggle('main--dark');
});

const buttonFilter = document.querySelector('[data-button="change-filter"]');
buttonFilter.addEventListener('click', function () {
  document.querySelector('.filter-sorting__select-list').classList.toggle('visually-hidden');
  document.querySelector('.filter-sorting__select-button').classList.toggle('filter-sorting__select-button--open-nav');
});

document.querySelector('.filter-sorting__select-list').addEventListener('click', function (evt) {
  document.querySelector('.filter-sorting__select-list').classList.add('visually-hidden');
  document.querySelector('.filter-sorting__select-item--active').classList.remove('filter-sorting__select-item--active');
  buttonFilter.classList.remove('filter-sorting__select-button--open-nav');
  if (evt.target.matches('.filter-sorting__select-item')) {
    evt.target.classList.add('filter-sorting__select-item--active');
    document.querySelector('.filter-sorting__select').dataset.filter = evt.target.dataset.filter;
  }
});

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown__list--visible');
    this.classList.toggle('dropdown__button--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      // dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownBtn.classList.remove('dropdown__button--active');
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  });
});
