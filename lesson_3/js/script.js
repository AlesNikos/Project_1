let budget, 
	nameStore,
	time

function start() {
		budget = prompt('Ваш бюджет на месяц?');

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('Ваш бюджет на месяц?');
	}

	nameStore = prompt('Название вашего магазина?').toUpperCase();
	time = 21;
}
start();

let mainList = {
	budget: budget,
	nameStore: nameStore,
	shopGoods: [],
	employers: {},
	open: true
};

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('Какой тип товаров будем продавать?');
		
		if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
}
chooseGoods();

function workTime() {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно')
	}
}

alert('Ваш бюджет на 1 день: ' + Math.round(mainList.budget / 30) + ' денежных единиц');
console.log(mainList);