import { iosVhFix } from './utils/ios-vh-fix';

import IMask from 'imask';

import { initLotsSlider } from './modules/sliders/init-lots-slider';
import { initNewsSlider } from './modules/sliders/init-news-slider';
import { initPhotoSlider } from './modules/sliders/init-card-photo-slider';

import { initAccordions } from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  const lots = document.querySelectorAll('.lots__item');
  if (lots) {
    lots.forEach(function (item) {
      item.querySelector('a').onmouseenter = function () {
        item.classList.add('lots__item--active');
      };
      item.querySelector('a').onmouseleave = function () {
        item.classList.remove('lots__item--active');
      };
    });
  }

  const mapItems = document.querySelectorAll('.map__item');
  if (mapItems) {
    mapItems.forEach(function (item) {
      item.onmouseenter = function () {
        var itemID = this.id;
        document.getElementById(`${itemID}-img`).querySelector('.map__img').classList.add('visually-hidden');
        document.getElementById(`${itemID}-img`).querySelector('.map__img-active').classList.remove('visually-hidden');
        document.getElementById(`${itemID}`).classList.add('map__item--active');
        document.getElementById(`${itemID}-img`).querySelector('.map__number').classList.add('map__number--img-active');
      };
      item.onmouseleave = function () {
        var itemID = this.id;
        document.getElementById(`${itemID}-img`).querySelector('.map__img').classList.remove('visually-hidden');
        document.getElementById(`${itemID}-img`).querySelector('.map__img-active').classList.add('visually-hidden');
        document.getElementById(`${itemID}`).classList.remove('map__item--active');
        document.getElementById(`${itemID}-img`).querySelector('.map__number').classList.remove('map__number--img-active');
      };
    });
  }

  const imgMapItems = document.querySelectorAll('.map__number--img');
  if (imgMapItems) {
    imgMapItems.forEach(function (item) {
      item.onmouseenter = function () {
        var itemMapID = this.id;
        document.getElementById(`${itemMapID}-map-img`).querySelector('.map__img').classList.add('visually-hidden');
        document.getElementById(`${itemMapID}-map-img`).querySelector('.map__img-active').classList.remove('visually-hidden');
        document.getElementById(`${itemMapID}`).classList.add('map__number--img-active');
        document.getElementById(`${itemMapID}-map`).classList.add('map__item--active');
      };
      item.onmouseleave = function () {
        var itemMapID = this.id;
        document.getElementById(`${itemMapID}-map-img`).querySelector('.map__img').classList.remove('visually-hidden');
        document.getElementById(`${itemMapID}-map-img`).querySelector('.map__img-active').classList.add('visually-hidden');
        document.getElementById(`${itemMapID}`).classList.remove('map__number--img-active');
        document.getElementById(`${itemMapID}-map`).classList.remove('map__item--active');
      };
    });
  }


  const buttonRegistration = document.querySelector('[data-button="registration"]');
  const buttonRecoveryPassword = document.querySelector('[data-button="recovery-password"]');
  const buttonSuccessRecoveryPassword = document.querySelector('[data-button="send"]');

  if (buttonRegistration) {
    buttonRegistration.addEventListener('click', function () {
      document.querySelector('[data-modal="success-registration"]').classList.remove('visually-hidden');
    });
  }

  const buttonCloseRegistration = document.querySelector('[data-modal="success-registration"]');
  if (buttonCloseRegistration) {
    buttonCloseRegistration.querySelector('[data-button="close-modal"]').addEventListener('click', function () {
      document.querySelector('[data-modal="success-registration"]').classList.add('visually-hidden');
    });
  }

  if (buttonRecoveryPassword) {
    buttonRecoveryPassword.addEventListener('click', function () {
      document.querySelector('[data-modal="password-recovery"]').classList.remove('visually-hidden');
    });
  }

  const buttonClosePasswordRecovery = document.querySelector('[data-modal="password-recovery"]');
  if (buttonClosePasswordRecovery) {
    buttonClosePasswordRecovery.querySelector('[data-button="close-modal"]').addEventListener('click', function () {
      document.querySelector('[data-modal="password-recovery"]').classList.add('visually-hidden');
    });
  }

  if (buttonSuccessRecoveryPassword) {
    buttonSuccessRecoveryPassword.addEventListener('click', function () {
      document.querySelector('[data-modal="password-recovery"]').classList.add('visually-hidden');
      document.querySelector('[data-modal="success-password-recovery"]').classList.remove('visually-hidden');
    });
  }

  const buttonCloseSuccessPasswordRecovery = document.querySelector('[data-modal="success-password-recovery"]');
  if (buttonCloseSuccessPasswordRecovery) {
    buttonCloseSuccessPasswordRecovery.querySelector('[data-button="close-modal"]').addEventListener('click', function () {
      document.querySelector('[data-modal="success-password-recovery"]').classList.add('visually-hidden');
    });
  }

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

  const phoneMask = document.getElementById('phone');
  const repeatPhoneMask = document.getElementById('phone-repeat');
  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
  };

  if (phoneMask) {
    const mask = IMask(phoneMask, maskOptions);
  }

  if (repeatPhoneMask) {
    const mask = IMask(repeatPhoneMask, maskOptions);
  }

  const dateMask = document.getElementById('birth-date');
  if (dateMask) {
    IMask(dateMask, {
      mask: Date,
      // lazy: false,
      min: new Date(1900, 0, 1),
      max: new Date(2024, 0, 1),

      blocks: {
        YYYY: {
          mask: IMask.MaskedRange,
          from: 1900,
          to: 2024,
        },
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
        DD: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
        },
      },
    });
  };

  const loginForm = document.querySelector('.log-in__navigation-item--login');
  const registrationForm = document.querySelector('.log-in__navigation-item--registration');

  if (loginForm) {
    loginForm.addEventListener('click', function () {
      document.querySelector('.log-in__navigation-item--active').classList.remove('log-in__navigation-item--active');
      loginForm.classList.add('log-in__navigation-item--active');
      document.querySelector('.log-in__form--main').classList.add('log-in__form--active');
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
  if (btnText) {
    btnText.addEventListener('click', function () {
      document.querySelectorAll('.lots__photo-item--hidden').forEach(function (item) {
        item.classList.toggle('lots__photo-item--hidden');
        btnText.classList.toggle('visually-hidden');
      });
    });
  }

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
  document.querySelector('.page').classList.toggle('page--dark');
});

// const zoomList = document.querySelector('.mySwiper2');
// const zoomItems = zoomList.querySelectorAll('.lots__photo-item');
// zoomItems.forEach(item => {
//   item.addEventListener('click', function (e) {
//     document.querySelector('.page').classList.toggle('page--dark');
//     // e.target.querySelector()
//     console.log(e.target);
//     e.target.style.zIndex = "100";
//     e.target.style.borderRadius = "15px";
//   });
// });

const buttonFilter = document.querySelector('[data-button="change-filter"]');
if (buttonFilter) {
  buttonFilter.addEventListener('click', function () {
    document.querySelector('.filter-sorting__select-list').classList.toggle('visually-hidden');
    document.querySelector('.filter-sorting__select-button').classList.toggle('filter-sorting__select-button--open-nav');
  });
}

if (document.querySelector('.filter-sorting__select-list')) {
  document.querySelector('.filter-sorting__select-list').addEventListener('click', function (evt) {
    document.querySelector('.filter-sorting__select-list').classList.add('visually-hidden');
    if (document.querySelector('.filter-sorting__select-item--active')) {
      document.querySelector('.filter-sorting__select-item--active').classList.remove('filter-sorting__select-item--active');
    }
    buttonFilter.classList.remove('filter-sorting__select-button--open-nav');
    if (evt.target.matches('.filter-sorting__select-item')) {
      evt.target.classList.add('filter-sorting__select-item--active');
      document.querySelector('.filter-sorting__select').dataset.filter = evt.target.dataset.filter;
      if (document.querySelector('.filter-sorting__select').dataset.filter === "ascending-price") {
        const list = document.querySelector('.lots__list');
        var items = list.childNodes;
        var itemsArr = [];
        for (var i in items) {
          if (items[i].nodeType == 1) {
            itemsArr.push(items[i]);
          }
        }
        itemsArr.sort(function (a, b) {
          return parseFloat(a.getAttribute('data-price')) == parseFloat(b.getAttribute('data-price')) ? 0
            : (parseFloat(a.getAttribute('data-price')) > parseFloat(b.getAttribute('data-price')) ? 1 : -1);
        });
        for (i = 0; i < itemsArr.length; ++i) {
          list.appendChild(itemsArr[i]);
        }
      }
      if (document.querySelector('.filter-sorting__select').dataset.filter === "descending-price") {
        const list = document.querySelector('.lots__list');
        var items = list.childNodes;
        var itemsArr = [];
        for (var i in items) {
          if (items[i].nodeType == 1) {
            itemsArr.push(items[i]);
          }
        }
        itemsArr.sort(function (a, b) {
          return parseFloat(a.getAttribute('data-price')) == parseFloat(b.getAttribute('data-price')) ? 0
            : (parseFloat(a.getAttribute('data-price')) < parseFloat(b.getAttribute('data-price')) ? 1 : -1);
        });
        for (i = 0; i < itemsArr.length; ++i) {
          list.appendChild(itemsArr[i]);
        }
      }
      if (document.querySelector('.filter-sorting__select').dataset.filter === "start-date") {
        const list = document.querySelector('.lots__list');
        var items = list.childNodes;
        var itemsArr = [];
        for (var i in items) {
          if (items[i].nodeType == 1) {
            itemsArr.push(items[i]);
          }
        }
        itemsArr.sort(compare);

        function compare(a, b) {
          var dateA = new Date(a.getAttribute('data-timer'));
          var dateB = new Date(b.getAttribute('data-timer'));

          return dateA - dateB;
        }

        for (i = 0; i < itemsArr.length; ++i) {
          list.appendChild(itemsArr[i]);
        }
      }
      if (document.querySelector('.filter-sorting__select').dataset.filter === "end-date") {
        const list = document.querySelector('.lots__list');
        var items = list.childNodes;
        var itemsArr = [];
        for (var i in items) {
          if (items[i].nodeType == 1) {
            itemsArr.push(items[i]);
          }
        }
        itemsArr.sort(compare);

        function compare(a, b) {
          var dateA = new Date(a.getAttribute('data-timer'));
          var dateB = new Date(b.getAttribute('data-timer'));

          return dateB - dateA;
        }

        for (i = 0; i < itemsArr.length; ++i) {
          list.appendChild(itemsArr[i]);
        }
      }
    }
  });
}

if (document.querySelectorAll('.lots__item')) {
  document.querySelectorAll('.lots__item').forEach(function (lot) {
    lot.querySelector('.favorite').addEventListener('click', function () {
      lot.classList.toggle('lots__item--favorite');
    });
  });
}

if (document.querySelector('.card__signs-wrapper').querySelector('.favorite')) {
  document.querySelector('.card__signs-wrapper').querySelector('.favorite').addEventListener('click', function () {
    document.querySelector('.card__signs-wrapper').querySelector('.favorite').classList.toggle('favorite--active');
  });
}


if (document.querySelector('.price-data__button--auto')) {
  document.querySelector('.price-data__button--auto').addEventListener('click', function () {
    document.querySelector('.price-data__modal').classList.remove('visually-hidden');
  });
  document.querySelector('.price-data__buttons-offer').querySelector('[data-button="close-modal"]').addEventListener('click', function () {
    document.querySelector('.price-data__modal').classList.add('visually-hidden');
  });
}

const priceInputModal = document.querySelector('.price-input');
const offerPriceModal = document.querySelector('.checkbox__input--offer');
if (offerPriceModal && priceInputModal) {

  offerPriceModal.addEventListener('click', function () {
    if (offerPriceModal.checked && priceInputModal.value !== "") {
      document.querySelector('.modal__button-offer').classList.add('modal__button-offer--active');
    } else {
      document.querySelector('.modal__button-offer').classList.remove('modal__button-offer--active');
    }
  });
  priceInputModal.addEventListener('input', function () {
    if (offerPriceModal.checked && priceInputModal.value !== "") {
      document.querySelector('.modal__button-offer').classList.add('modal__button-offer--active');
    } else {
      document.querySelector('.modal__button-offer').classList.remove('modal__button-offer--active');
    }
  });
}

const offerModal = document.querySelector('[data-modal="offer"]');
if (offerModal) {
  offerModal.querySelector('[data-button="close-modal"]').addEventListener('click', function () {
    offerModal.classList.add('visually-hidden');
  });
  offerModal.querySelector('[data-button="save-modal"]').addEventListener('click', function () {
    offerModal.classList.add('visually-hidden');
  });
}

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
      dropDownBtn.innerText = listItem.innerText;
      // dropDownBtn.focus();
      dropDownInput.dataset.option = listItem.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownBtn.classList.remove('dropdown__button--active');

      if (dropDownInput.dataset.option !== 'default') {
        dropDownBtn.style.color = "#292929";
        document.querySelector('.filter__reset').classList.remove('visually-hidden');
        document.querySelector('.filter__submit').classList.add('filter__submit--active');
      }
    });
  });

  document.querySelector('.filter__reset').addEventListener('click', function () {
    location.reload();
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

if (document.querySelector('.price-card__reload-button')) {
  document.querySelector('.price-card__reload-button').addEventListener('click', function () {
    location.reload();
  });
}

if (document.querySelector('.price-card__reload-button--account')) {
  document.querySelector('.price-card__reload-button--account').addEventListener('click', function () {
    location.reload();
  });
}

const EMAIL_REGEXP = /^[^@\s]+@[^@\s]+\.[^@\s]+$/iu;

if (document.querySelector('.account__form--personal')) {
  const emailEdit = document.querySelector('.account__form--active').querySelector('.connection__field--edit-email');
  const passwordEdit = document.querySelector('.account__form--personal').querySelector('.connection__field--edit-password');
  const passwordRepeatEdit = document.querySelector('.account__form--personal').querySelector('.connection__field--edit-password-repeat');

  const nameEdit = document.querySelector('.account__form--personal').querySelector('.connection__field--edit-name');
  const dateBirthEdit = document.querySelector('.account__form--personal').querySelector('.connection__field--edit-birth-date');
  const phoneEdit = document.querySelector('.account__form--personal').querySelector('.connection__field--edit-phone');

  const checkboxNotificationEditLabel = document.querySelector('.account__form--personal').querySelector('.checkbox--notification');
  const checkboxNotificationEdit = document.querySelector('.account__form--personal').querySelector('.checkbox--notification').querySelector('.checkbox__input');

  if (emailEdit && passwordEdit && passwordRepeatEdit && nameEdit) {
    emailEdit.addEventListener('input', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
      if (!EMAIL_REGEXP.test(emailEdit.value)) {
        document.querySelector('.error-message--edit-email').classList.remove('visually-hidden');
        emailEdit.classList.add('connection__field--error');
      } else {
        document.querySelector('.error-message--edit-email').classList.add('visually-hidden');
        emailEdit.classList.remove('connection__field--error');
      }
    });
    passwordEdit.addEventListener('input', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
    });
    passwordRepeatEdit.addEventListener('input', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
      if (passwordRepeatEdit.value !== passwordEdit.value) {
        document.querySelector('.error-message--edit').classList.remove('visually-hidden');
        passwordRepeatEdit.classList.add('connection__field--error');
      } else {
        document.querySelector('.error-message--edit').classList.add('visually-hidden');
        passwordRepeatEdit.classList.remove('connection__field--error');
      }
      if (passwordRepeatEdit.value === "") {
        document.querySelector('.error-message--edit-none').classList.remove('visually-hidden');
        passwordRepeatEdit.classList.add('connection__field--error');
      } else {
        document.querySelector('.error-message--edit-none').classList.add('visually-hidden');
        passwordRepeatEdit.classList.remove('connection__field--error');
      }
    });
    nameEdit.addEventListener('input', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
    });
    dateBirthEdit.addEventListener('input', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
    });
    phoneEdit.addEventListener('input', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
    });
    checkboxNotificationEditLabel.addEventListener('click', function () {
      if (EMAIL_REGEXP.test(emailEdit.value) && checkboxNotificationEdit.checked && passwordEdit.value !== "" && (passwordEdit.value === passwordRepeatEdit.value
        && nameEdit.value !== "" && dateBirthEdit.value.length >= 10 && phoneEdit.value.length >= 18)) {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.add('connection__button--active');
      } else {
        document.querySelector('.account__form--personal').querySelector('.connection__button--submit').classList.remove('connection__button--active');
      }
    });
  }
}

const emailEnter = document.querySelector('.log-in__form--main').querySelector('.connection__field--email');
const passwordEnter = document.querySelector('.log-in__form--main').querySelector('.connection__field--password');


if (emailEnter && passwordEnter) {
  passwordEnter.addEventListener('input', function () {
    if (passwordEnter.value !== "" && emailEnter.value !== "" && EMAIL_REGEXP.test(emailEnter.value)) {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  emailEnter.addEventListener('input', function () {
    if (passwordEnter.value !== "" && emailEnter.value !== "" && EMAIL_REGEXP.test(emailEnter.value)) {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
    if (!EMAIL_REGEXP.test(emailEnter.value)) {
      document.querySelector('.error-message-enter').classList.remove('visually-hidden');
      document.querySelector('.connection__field--email').classList.add('connection__field--error');
    } else {
      document.querySelector('.error-message-enter').classList.add('visually-hidden');
      document.querySelector('.connection__field--email').classList.remove('connection__field--error');
    }
  }
  );
}

const emailReg = document.querySelector('.log-in__form--registration').querySelector('.connection__field--reg-email');
const passwordReg = document.querySelector('.log-in__form--registration').querySelector('.connection__field--reg-password');
const passwordRepeat = document.querySelector('.log-in__form--registration').querySelector('.connection__field--reg-password-repeat');

const name = document.querySelector('.log-in__form--registration').querySelector('.connection__field--name');
const dateBirth = document.querySelector('.log-in__form--registration').querySelector('.connection__field--birth-date');
const phone = document.querySelector('.log-in__form--registration').querySelector('.connection__field--phone');

const checkboxAgreementLabel = document.querySelector('.checkbox--agreement');
const checkboxDataLabel = document.querySelector('.checkbox--data');
const checkboxNotificationLabel = document.querySelector('.checkbox--notification');
const checkboxAgreement = document.querySelector('.checkbox--agreement').querySelector('.checkbox__input');
const checkboxData = document.querySelector('.checkbox--data').querySelector('.checkbox__input');
const checkboxNotification = document.querySelector('.checkbox--notification').querySelector('.checkbox__input');

if (emailReg && passwordReg && passwordRepeat && name && dateBirth && phone && checkboxAgreementLabel && checkboxNotificationLabel && checkboxDataLabel) {
  passwordReg.addEventListener('input', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  emailReg.addEventListener('input', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxData.checked && checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
    if (!EMAIL_REGEXP.test(emailReg.value)) {
      document.querySelector('.error-message').classList.remove('visually-hidden');
      document.querySelector('.connection__field--reg-email').classList.add('connection__field--error');
    } else {
      document.querySelector('.error-message').classList.add('visually-hidden');
      document.querySelector('.connection__field--reg-email').classList.remove('connection__field--error');
    }
  }
  );
  passwordRepeat.addEventListener('input', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
    if (passwordRepeat.value !== passwordReg.value) {
      document.querySelector('.error-message--reg-password').classList.remove('visually-hidden');
      passwordRepeat.classList.add('connection__field--error');
    } else {
      document.querySelector('.error-message--reg-password').classList.add('visually-hidden');
      passwordRepeat.classList.remove('connection__field--error');
    }
    if (passwordRepeat.value === "") {
      document.querySelector('.error-message--reg-password-none').classList.remove('visually-hidden');
      passwordRepeat.classList.add('connection__field--error');
    } else {
      document.querySelector('.error-message--reg-password-none').classList.add('visually-hidden');
      passwordRepeat.classList.remove('connection__field--error');
    }
  }
  );
  name.addEventListener('input', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  dateBirth.addEventListener('input', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  phone.addEventListener('input', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  checkboxAgreementLabel.addEventListener('click', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  checkboxNotificationLabel.addEventListener('click', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  checkboxDataLabel.addEventListener('click', function () {
    if ((passwordRepeat.value === passwordReg.value) && EMAIL_REGEXP.test(emailReg.value) && checkboxNotification.checked && checkboxData.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value.length >= 10 && phone.value.length >= 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
}

const emailRecovery = document.querySelector('.connection__field--recovery');
if (emailRecovery) {
  emailRecovery.addEventListener('input', function () {
    if (emailRecovery.value !== "" && EMAIL_REGEXP.test(emailRecovery.value)) {
      document.querySelector('.modal__button-send').classList.add('modal__button-send--active');
    } else {
      document.querySelector('.modal__button-send').classList.remove('modal__button-send--active');
    }
  });
}

// document.querySelector('.authorization').classList.add('visually-hidden');
