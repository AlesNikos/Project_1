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