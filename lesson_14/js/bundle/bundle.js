(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function () {
	
	

	let scrolling = require('../parts/scrolling.js'),
		tab = require('../parts/tab.js'),
		timer = require('../parts/timer.js'),
		modal = require('../parts/modal.js'),	
		ajax = require('../parts/ajax.js'),
		slider = require('../parts/slider.js'),
		calc = require('../parts/calc.js');

		
		scrolling();
		tab();
		timer();
		modal();
		ajax();
		slider();
		calc();
	 
});
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scrolling.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax() {
	// Form

 let message = new Object();
 message.loading = "Загрузка...";
 message.success = "<img src='../img/tick.png' height=50px width=50px>";
 message.failure = "Что-то пошло не так...";

 let form = document.getElementsByClassName('main-form')[0],
 	input = document.getElementsByTagName('input'),
 	formBottom = document.getElementById('form'),
 	statusMessage = document.createElement('div');
 	statusMessage.classList.add('status');

 	function sendForm(elem) {
 		elem.addEventListener('submit', function(e) {
 			e.preventDefault;
 			elem.appendChild(statusMessage);

	 		//AJAX

	 		let request = new XMLHttpRequest();
	 		request.open("POST", 'server.php');

	 		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	 		let formData = new FormData(elem);
	 		
	 		request.send(formData);

	 		request.onreadystatechange = function() {
	 			if (request.readyState < 4) {
	 				statusMessage.innerHTML = message.loading;
	 			} else if (request.readyState === 4) {
	 				if (request.status == 200 && request.status < 300) {
	 					statusMessage.innerHTML = message.success;
	 					//Добавляем контент на страницу
	 				} else {
	 					statusMessage.innerHTML = message.failure;
	 				}
	 			}
	 		}

	 		for (let i = 0; i < input.length; i++) {
	 			input[i].value = '';
	 			//Очищаем поля ввода
	 		}
 		});
 	}

	sendForm(form);
	sendForm(formBottom);

}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {
	//Calc

	let persons = document.getElementsByClassName('counter-block-input')[0],
	 	restDays = document.getElementsByClassName('counter-block-input')[1],
	 	place = document.getElementById('select'),
	 	totalValue = document.getElementById('total'),
	 	personsSum = 0,
	 	daysSum = 0,
	 	total = 0;

 totalValue.innerHTML = 0;

 persons.addEventListener('keypress', checkNum);
 persons.addEventListener('change', function() {
 	personsSum = +this.value;
 	total = (daysSum + personsSum)*4000;
 	if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
 		totalValue.innerHTML = 0;
 	} else {
 		totalValue.innerHTML = total;
 	}
 });

 restDays.addEventListener('keypress', checkNum);
 restDays.addEventListener('change', function() {
 	daysSum = +this.value;
 	total = (daysSum + personsSum)*4000;
 	if (persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {
 		totalValue.innerHTML = 0;
 	} else {
 		totalValue.innerHTML = total;
 	}
 });

 place.addEventListener('change', function() {
 	if (restDays.value == '' || persons.value == '' || persons.value == '0' || restDays.value == '0') {
 		totalValue.innerHTML = 0;
 	} else {
 		let a = total;
 		totalValue.innerHTML = a * this.options[this.selectedIndex].value;
 	}

 });

 function checkNum(event) {
 	let key = event.key;
 	if (key.match('[0-9]') === null) {
 		event.preventDefault();
 		return false;
 	}
 }
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {
	// Modal

	let more = document.querySelector('.more'),
	 overlay = document.querySelector('.overlay'),
	 close = document.querySelector('.popup-close'),
	 descriptionBtn = document.querySelectorAll('.description-btn');

	 more.addEventListener('click', function () {
	 	this.classList.add('more-splash');
	 	overlay.style.display = "block";
	 	document.body.style.overflow = 'hidden';
	 });
	 close.addEventListener('click',  () => {
	 	overlay.style.display = "none";
	 	more.classList.remove('more-splash');
	 	document.body.style.overflow = '';
	 });

	 for (let i = 0; i < descriptionBtn.length; i++) {
	 	descriptionBtn[i].addEventListener('click', () => {
	 	overlay.style.display = "block";
	 	document.body.style.overflow = 'hidden';
	 	});
	 }
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function scrolling() {
	// Плавная прокрутка

	let elements = document.querySelectorAll('a[href*="#"]');

	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', function (event) {
			event.preventDefault();
			
			smoothScroll(elements[i].getAttribute('href'));
			
		});
	}

	let currentYPosition = () => {
	    
	    if (self.pageYOffset) {
	    	return self.pageYOffset;
	    }
	    return 0;
	}


	let elmYPosition = eID => {
	    let elm = document.querySelector(eID);
	    let y = elm.offsetTop;
	    let node = elm;
	    while (node.offsetParent && node.offsetParent != document.body) {
	        node = node.offsetParent;
	        y += node.offsetTop;
	    } return y - 60;
	}


	let smoothScroll = eID => {
	    let startY = currentYPosition();
	    let stopY = elmYPosition(eID);
	    let distance = stopY > startY ? stopY - startY : startY - stopY;
	    if (distance < 100) {
	        scrollTo(0, stopY); return;
	    }
	    let speed = Math.round(distance / 100);
	    if (speed >= 20) speed = 20;
	    let step = Math.round(distance / 25);
	    let leapY = stopY > startY ? startY + step : startY - step;
	    let timer = 0;
	    if (stopY > startY) {
	        for ( let i=startY; i<stopY; i+=step ) {
	            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
	        } return;
	    }
	    for ( let i=startY; i>stopY; i-=step ) {
	        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	    }
	}
}

module.exports = scrolling;
},{}],6:[function(require,module,exports){
function slider() {
	//Slider

	let slideIndex = 1,
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}

		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('dot-active');
		}

		slides[slideIndex - 1].style.display = 'block';
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function plusSliders(n) {
		showSlides(slideIndex += n);
	}

	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSliders(-1);
	});

	next.addEventListener('click', function() {
		plusSliders(1);
	});

	dotsWrap.addEventListener('click', function(event) {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tab() {
	// Tabs

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = a => {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		};

		hideTabContent(1);

	let showTabContent = b => {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	};

	info.addEventListener('click', event => {
		let target = event.target;
		if (target.className == 'info-header-tab') {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	// Timer

	let deadline = '2018-09-24';

	let getTimeRemaining = endtime => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor( (t/1000) % 60 ),
		minutes = Math.floor( (t/1000/60) % 60 ),
		hours = Math.floor( (t/(1000*60*60)) );

		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	let setClock = (id, endtime) => {

		let timer = document.getElementById(id),
		hours = timer.querySelector('.hours'),
		minutes = timer.querySelector('.minutes'),
		seconds = timer.querySelector('.seconds'),
		timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.innerHTML = '00';
				minutes.innerHTML = '00';
				seconds.innerHTML = '00';
				return true;
			} 

			if (t.hours < 10) {
				t.hours = `0${t.hours}`;
			}

			hours.innerHTML = t.hours;
			minutes.innerHTML = (`0${t.minutes}`).slice(-2);
			seconds.innerHTML = (`0${t.seconds}`).slice(-2);
		}

		updateClock();
		
	};
	setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
