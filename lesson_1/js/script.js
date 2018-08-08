var budget = +prompt('Ваш бюджет на месяц?');
var nameStore = prompt('Название вашего магазина?');

var mainList = {
	budget: budget,
 nameStore: nameStore,
	shopGoods: [],
	employers: {},
	open: true,
};

for (var i = 0; i < 3; i++) {
	mainList.shopGoods.push(prompt('Какой тип товаров будем продавать?'));
}

alert('Ваш бюджет на 1 день: ' + Math.round(mainList.budget / 30) + ' денежных единиц');
console.log(mainList);