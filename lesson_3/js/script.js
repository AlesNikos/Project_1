let budget,
				nameStore,
				time,
				price

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
	open: true,
	discount: true
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

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time > 8 && time < 20) {
		console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно');
	} else {
		console.log('В сутках только 24 часа!');
	}
}
workTime(18);

function dayBudget() {
	alert('Ваш бюджет на 1 день: ' + Math.round(mainList.budget / 30) + ' денежных единиц');

}
dayBudget();

function makeDiscount(price) {
	if (mainList.discount == true) {
		price = price * 0.8;
	}
	console.log(price);
}
makeDiscount(1000);

function hireEmployees() {
	for (let i = 1; i <= 4; i++) {
		let b = prompt('Как зовут сотрудника?');

			if ((typeof(b)) === 'string' && b !== null && b != '' && b.length < 50) {
			console.log('Все верно!');
			mainList.employers[i] = b;
		} else {
			i = i - 1;
		}
	}
}
// hireEmployees();
console.log(mainList);