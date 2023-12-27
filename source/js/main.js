import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

import {initLotsSlider} from './modules/sliders/init-lots-slider';
import {initNewsSlider} from './modules/sliders/init-news-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    initLotsSlider();
    initNewsSlider();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
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


// if (window.NodeList && !NodeList.prototype.forEach) {
// 	NodeList.prototype.forEach = function (callback, thisArg) {
// 		thisArg = thisArg || window;
// 		for (var i = 0; i < this.length; i++) {
// 			callback.call(thisArg, this[i], i, this);
// 		}
// 	};
// }

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
