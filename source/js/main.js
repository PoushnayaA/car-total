import { iosVhFix } from './utils/ios-vh-fix';

import IMask from 'imask';

import { initLotsSlider } from './modules/sliders/init-lots-slider';
import { initNewsSlider } from './modules/sliders/init-news-slider';
import { initPhotoSlider } from './modules/sliders/init-card-photo-slider';

import { initAccordions } from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  const mapItems = document.querySelectorAll('.map__item');
  if (mapItems) {
    mapItems.forEach(function (item) {
      item.onmouseenter = function() {
        var itemID = this.id;
        document.getElementById(`${itemID}-img`).querySelector('.map__img').classList.add('visually-hidden');
        document.getElementById(`${itemID}-img`).querySelector('.map__img-active').classList.remove('visually-hidden');
        document.getElementById(`${itemID}`).classList.add('map__item--active');
        document.getElementById(`${itemID}-img`).querySelector('.map__number').classList.add('map__number--img-active');
      };
      item.onmouseleave = function() {
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
      item.onmouseenter = function() {
        var itemMapID = this.id;
        document.getElementById(`${itemMapID}-map-img`).querySelector('.map__img').classList.add('visually-hidden');
        document.getElementById(`${itemMapID}-map-img`).querySelector('.map__img-active').classList.remove('visually-hidden');
        document.getElementById(`${itemMapID}`).classList.add('map__number--img-active');
        document.getElementById(`${itemMapID}-map`).classList.add('map__item--active');
      };
      item.onmouseleave = function() {
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
    document.querySelector('.filter-sorting__select-item--active').classList.remove('filter-sorting__select-item--active');
    buttonFilter.classList.remove('filter-sorting__select-button--open-nav');
    if (evt.target.matches('.filter-sorting__select-item')) {
      evt.target.classList.add('filter-sorting__select-item--active');
      document.querySelector('.filter-sorting__select').dataset.filter = evt.target.dataset.filter;
    }
  });
}

document.querySelectorAll('.lots__item').forEach(function (lot) {
  lot.querySelector('.favorite').addEventListener('click', function () {
    lot.classList.toggle('lots__item--favorite');
  });
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

const emailEnter = document.querySelector('.log-in__form--main').querySelector('.connection__field--email');
const passwordEnter = document.querySelector('.log-in__form--main').querySelector('.connection__field--password');
const EMAIL_REGEXP = /^[^@\s]+@[^@\s]+\.[^@\s]+$/iu;

if (emailEnter && passwordEnter) {
  passwordEnter.addEventListener('input', function () {
    if (passwordEnter.value !== "" && emailEnter.value !== "") {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  emailEnter.addEventListener('input', function () {
    if (passwordEnter.value !== "" && emailEnter.value !== "") {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--main').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
    if (!EMAIL_REGEXP.test(email.value)) {
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
const checkboxNotificationLabel = document.querySelector('.checkbox--notification');
const checkboxAgreement = document.querySelector('.checkbox--agreement').querySelector('.checkbox__input');
const checkboxNotification = document.querySelector('.checkbox--notification').querySelector('.checkbox__input');

if (emailReg && passwordReg && passwordRepeat && name && dateBirth && phone && checkboxAgreement && checkboxNotification) {
  passwordReg.addEventListener('input', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  emailReg.addEventListener('input', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
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
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  name.addEventListener('input', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  dateBirth.addEventListener('input', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  phone.addEventListener('input', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  }
  );
  checkboxAgreementLabel.addEventListener('click', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
  checkboxNotificationLabel.addEventListener('click', function () {
    if (checkboxNotification.checked && checkboxAgreement.checked && passwordReg.value !== "" && emailReg.value !== "" && passwordRepeat.value !== "" && name.value !== "" && dateBirth.value !== "" && phone.value.length === 18) {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.add('connection__button--active');
    } else {
      document.querySelector('.log-in__form--registration').querySelector('.connection__button--submit').classList.remove('connection__button--active');
    }
  });
}

const emailRecovery = document.querySelector('.connection__field--recovery');
if (emailRecovery) {
  emailRecovery.addEventListener('input', function () {
    if (emailRecovery.value !== "") {
      document.querySelector('.modal__button-send').classList.add('modal__button-send--active');
    } else {
      document.querySelector('.modal__button-send').classList.remove('modal__button-send--active');
    }
  });
}

// document.querySelector('.authorization').classList.add('visually-hidden');
