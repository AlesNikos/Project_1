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