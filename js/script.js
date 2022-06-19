"use strict";
import tabs from './modules/tabs';
import timer from './modules/timer'; 
import modal from './modules/modal';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
	
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 100000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	timer('.timer');
	modal('[data-modal]', '.modal', modalTimerId);
	cards();
	calc();
	forms('form', modalTimerId);
	slider({
		container: '.offer__slider',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		slide: '.offer__slide',
		currentCounter: '#current',
		field: '.offer__slider-inner',
		wrapper: '.offer__slider-wrapper',
		totalCounter: '#total'
	});
});