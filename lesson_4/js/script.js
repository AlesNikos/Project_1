let budget,
	nameStore,
	time,
	price

function start() {
		budget = prompt('Ваш бюджет на месяц?', "");

	while (isNaN(budget) || budget == '' || budget == null) {
		budget = prompt('Ваш бюджет на месяц?', "");
	}

	nameStore = prompt('Название вашего магазина?', "").toUpperCase();
	time = 21;
}
// start();

let mainList = {
	budget: budget,
	nameStore: nameStore,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt('Какой тип товаров будем продавать?', "");
			
			if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно');
		} else {
			console.log('В сутках только 24 часа!');
		}
	},
	dayBudget: function dayBudget() {
		alert('Ваш бюджет на 1 день: ' + Math.round(mainList.budget / 30) + ' денежных единиц');
	},
	makeDiscount: function makeDiscount(price) {
		if (mainList.discount == true) {
			price = price * 0.8;
		}
		console.log(price);
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i <= 4; i++) {
			let b = prompt('Как зовут сотрудника?');
			
				if ((typeof(b)) === 'string' && b !== null && b != '' && b.length < 50) {
				console.log('Все верно!');
				mainList.employers[i] = i + ' - ' + b;
			} else {
				i = i - 1;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 1; i <= 1; i++) {
			let items = prompt("Перечислите через запятую товары", "");

			if ((typeof(items)) === 'string' && items != null && items != '') {
				mainList.shopItems = items.split(',');
				mainList.shopItems.push(prompt("Подождите, ещё ", ''));
				mainList.shopItems.sort();
			} else {
				i--;
			}
		}
		mainList.shopItems.forEach(function(item, i, arr) {
			document.write("У нас вы можете купить: " + (++i) + ". "+ item + '<br>');
		})
	}		
};

for (let key in mainList) {
	console.log("Наш магазин включает в себя: " + key);
}
console.log(mainList);