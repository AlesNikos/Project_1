let budget = +prompt('Ваш бюджет на месяц?');
let nameStore = prompt('Название вашего магазина?');

let mainList = {
	budget: budget,
	nameStore: nameStore,
	shopGoods: [],
	employers: {},
	open: true
};

for (let i = 0; i < 5; i++) {

	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
}

// While 

/* let i = 0;

while (i < 5) {

	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
	i++;
} */

// do-while

/* let i = 0;
do {
	let a = prompt('Какой тип товаров будем продавать?');
	
	if ((typeof(a)) === 'string' && a !== null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
	i++;
}
while (i < 5); */


alert('Ваш бюджет на 1 день: ' + Math.round(mainList.budget / 30) + ' денежных единиц');
console.log(mainList);