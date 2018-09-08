(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let modalGift = require('../parts/modalGift.js'),
		modalConsultation = require('../parts/modalConsultation.js'),
		modalDesign = require('../parts/modalDesign.js');



	modalGift();	
	modalConsultation();
	modalDesign();






});
},{"../parts/modalConsultation.js":2,"../parts/modalDesign.js":3,"../parts/modalGift.js":4}],2:[function(require,module,exports){
function modalConsultation() {

	//Модальное окно при нажатии на кнопки "Подробнее об услуге"

	let popupConsultation = document.querySelector('.popup-consultation'),
		body = document.getElementsByTagName('body')[0],
		close = document.getElementsByClassName('popup-close');

	body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('button-consultation')) return;
		
		openModalConsultation();
	});

	close[0].addEventListener('click', closeModalConsultation);

	window.addEventListener('click', outsideClickConsultation);

	//Функция открывания модального
	function openModalConsultation() {
		popupConsultation.style.display = "block";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModalConsultation() {
		popupConsultation.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClickConsultation(event) {
		if (event.target == popupConsultation) {
			popupConsultation.style.display = "none";
		}
	}
}

module.exports = modalConsultation;
},{}],3:[function(require,module,exports){
function modalDesign() {

	//Модальное окно при нажатии на кнопки "Заказать", "Заказать портрет", "Заказать дизайн проекта", "Хочу так же"

	let popupDesign = document.querySelector('.popup-design'),
		body = document.getElementsByTagName('body')[0],
		close = document.getElementsByClassName('popup-close');


	body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('button-design')) return;
		
		openModalDesign();
	});

	close[2].addEventListener('click', closeModal);

	window.addEventListener('click', outsideClick);

	//Функция открывания модального
	function openModalDesign() {
		popupDesign.style.display = "block";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModal() {
		popupDesign.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClick(event) {
		if (event.target == popupDesign) {
			popupDesign.style.display = "none";
		}
	}
}

module.exports = modalDesign;
},{}],4:[function(require,module,exports){
function modalGift() {

	// Модальное окно при нажатии на подарок

	let fixedGift = document.querySelector('.fixed-gift'),
		popupGift = document.querySelector('.popup-gift'),
		close = document.getElementsByClassName('popup-close');

	fixedGift.addEventListener('click', openModalGift);

	close[1].addEventListener('click', closeModal);

	window.addEventListener('click', outsideClick);

	//Функция открывания модального и исчезновение подарка
	function openModalGift() {
		popupGift.style.display = "block";
		fixedGift.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModal() {
		popupGift.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClick(event) {
		if (event.target == popupGift) {
			popupGift.style.display = "none";
		}
	}
}

module.exports = modalGift;
},{}]},{},[1]);
