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