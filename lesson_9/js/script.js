window.addEventListener('DOMContentLoaded', function () {
	
	// Плавная прокрутка

	/*let elements = document.querySelectorAll('a[href*="#"]'),
	anchors = [].slice.call(elements),
	animationTime = 300,
	framesCount = 20;

	anchors.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.preventDefault();

			let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
			let scroller = setInterval(function () {
				let scrollBy = coordY / framesCount;

				if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
					window.scrollBy(0, scrollBy);
				} else {
					window.scrollTo(0, coordY);
					clearInterval(scroller);
				}
			}, animationTime / framesCount);
		});
	});*/

	// Tabs

	let tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	let hideTabContent = a => {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideTabContent(1);

	let showTabContent = b => {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

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

	let deadline = '2018-08-24 23:30:00';

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
	}

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
		
	}
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
	




});