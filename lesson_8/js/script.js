window.addEventListener('DOMContentLoaded', function () {
	
	// Плавная прокрутка

	let elements = document.querySelectorAll('a[href*="#"]');

	elements.forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.preventDefault();
			
			smoothScroll(item.getAttribute('href'));
			
		});
	});

	function currentYPosition() {
	    
	    if (self.pageYOffset) {
	    	return self.pageYOffset;
	    }
	    return 0;
	}


	function elmYPosition(eID) {
	    let elm = document.querySelector(eID);
	    let y = elm.offsetTop;
	    let node = elm;
	    while (node.offsetParent && node.offsetParent != document.body) {
	        node = node.offsetParent;
	        y += node.offsetTop;
	    } return y - 60;
	}


	function smoothScroll(eID) {
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

	function hideTabContent(a) {
			for (let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
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

	let deadline = '2018-09-22 23:30:00';

	function getTimeRemaining(endtime) {
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

	function setClock(id, endtime) {

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
				t.hours = '0' + t.hours;
			}

			hours.innerHTML = t.hours;
			minutes.innerHTML = ('0' + t.minutes).slice(-2);
			seconds.innerHTML = ('0' + t.seconds).slice(-2);
		}

		updateClock();
		
	}
	setClock('timer', deadline);

});