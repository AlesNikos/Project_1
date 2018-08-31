window.addEventListener('DOMContentLoaded', function () {
	
	// Плавная прокрутка

	let elements = document.querySelectorAll('a[href*="#"]');

	elements.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.preventDefault();
			
			smoothScroll(item.getAttribute('href'));
			
		});
	});

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

	// Timer

	let deadline = '2018-09-24 23:30:00';

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
	
	 // Form
	 let message = new Object();
	 message.loading = "Загрузка...";
	 message.success = "<img src='../img/tick.png' height=50px width=50px>";
	 message.failure = "Что-то пошло не так...";

	 let form = document.getElementsByClassName('main-form')[0],
	 	input = form.getElementsByTagName('input'),
	 	form_1 = document.getElementById('form'),
	 	input_1 = form_1.getElementsByTagName('input'),
	 	statusMessage = document.createElement('div');
	 	statusMessage.classList.add('status');

	 	// Модальное окно

 	form.addEventListener('submit', function(event) {
 		event.preventDefault();
 		form.appendChild(statusMessage);
 		let formData = new FormData(form);

 		function postData(data) {

 			return new Promise(function(resolve, reject) {
 				let request = new XMLHttpRequest();

 				request.open("POST", 'server.php');

 				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 				request.onreadystatechange = function() {
		 			if (request.readyState < 4) {
		 				resolve()
		 			} else if (request.readyState === 4) {
		 				if (request.status == 200 && request.status < 300) {
		 					resolve()
		 					//Добавляем контент на страницу
		 				} else {
		 					reject()
		 				}
		 			}
		 		}
		 		request.send(formData);
 			})
 		}
 		function clearInput() {
 			for (let i = 0; i < input.length; i++) {
 				input[i].value = '';
 			}
 		}
 		postData(formData)
 			.then( () => statusMessage.innerHTML = message.loading)
 			.then( () => statusMessage.innerHTML = message.success)
 			.catch( () => statusMessage.innerHTML = message.failure)
 			.then(clearInput)
 	});

	 	// Контактная форма

	 		form_1.addEventListener('submit', function(event) {
	 		event.preventDefault();
	 		form_1.appendChild(statusMessage);
let formData = new FormData(form_1);

 		function postData(data) {

 			return new Promise(function(resolve, reject) {
 				let request = new XMLHttpRequest();

 				request.open("POST", 'server.php');

 				request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

 				request.onreadystatechange = function() {
		 			if (request.readyState < 4) {
		 				resolve()
		 			} else if (request.readyState === 4) {
		 				if (request.status == 200 && request.status < 300) {
		 					resolve()
		 					//Добавляем контент на страницу
		 				} else {
		 					reject()
		 				}
		 			}
		 		}
		 		request.send(formData);
 			})
 		}
 		function clearInput() {
 			for (let i = 0; i < input.length; i++) {
 				input[i].value = '';
 			}
 		}
 		postData(formData)
 			.then( () => statusMessage.innerHTML = message.loading)
 			.then( () => statusMessage.innerHTML = message.success)
 			.catch( () => statusMessage.innerHTML = message.failure)
 			.then(clearInput)
	 	});
});