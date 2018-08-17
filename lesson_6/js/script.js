let openBtn = document.getElementById('open-btn'),
	nameValue = document.getElementsByClassName('name-value')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],

	goodsItem = document.getElementsByClassName('goods-item'),
	btnGoodsItem = document.getElementsByTagName('button')[1],
	btnCountBudget = document.getElementsByTagName('button')[2],
	btnHireEmployers = document.getElementsByTagName('button')[3],
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudgetValue = document.querySelector('.count-budget-value'),
	hireEmployersItem = document.querySelectorAll('.hire-employers-item');

// console.log(goodsItem);

let budget,
	price;

let mainList = {
	budget: budget,
	nameStore: nameValue,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
};	

btnCountBudget.disabled = true;

openBtn.addEventListener('click', () => {
		budget = prompt('Ваш бюджет на месяц?');

		while (isNaN(budget) || budget == '' || budget == null) {
			budget = prompt('Ваш бюджет на месяц?');
		}
		budgetValue.textContent = budget;
		nameValue.textContent = prompt('Название вашего магазина?').toUpperCase();
		checkGoodsItem();
		btnCountBudget.disabled = false;
		checkhireEmployersItem();
});

btnGoodsItem.addEventListener('click', () => {
		
		for (let i = 0; i < goodsItem.length; i++) {
			let a = goodsItem[i].value; 
			
			if ((typeof(a)) === 'string' && a !== null && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
			} else {
				i = i - 1;
			}
		}
});

chooseItem.addEventListener('change', () => {
			let items = chooseItem.value;

			if (isNaN(items) && items != '') {
				mainList.shopItems = items.split(', ');
				mainList.shopItems.sort();

				itemsValue.textContent = mainList.shopItems;
			} 		
	});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {
			console.log('Такого не может быть!');
			mainList.open = false;
		} else if (time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно');
			mainList.open = false;
		} else {
			console.log('В сутках только 24 часа!');
			mainList.open = false;
		}

		if (mainList.open == true) {
			isopenValue.style.backgroundColor = 'green';
		} else {
			isopenValue.style.backgroundColor = 'red';
		}
});

btnCountBudget.addEventListener('click', () => {
	countBudgetValue.value = budget / 30;
});

btnHireEmployers.addEventListener('click', () => {
	for (let i = 0; i < hireEmployersItem.length; i++) {
			let name = hireEmployersItem[i].value;
			mainList.employers[i] = name;
			employersValue.textContent += mainList.employers[i] + ', ';
		}
});

discountValue.addEventListener('click', () => {
	mainList.discount = confirm('Сделать скидку?');
	if (mainList.discount == true) {
			discountValue.style.backgroundColor = 'green';
		} else {
			discountValue.style.backgroundColor = 'red';
		}
});

function checkGoodsItem() {
	for (let i = 0; i < goodsItem.length; i++) {
		if (goodsItem[i].value != '') {
			btnGoodsItem.disabled = false;
		} else {
			btnGoodsItem.disabled = true;
		}
		goodsItem[i].addEventListener('keypress', checkGoodsItem);
	}
}
checkGoodsItem();

function checkhireEmployersItem() {
	for (let i = 0; i < hireEmployersItem.length; i++) {
		if (hireEmployersItem[i].value != '') {
			btnHireEmployers.disabled = false;
		} else {
			btnHireEmployers.disabled = true;
		}
		hireEmployersItem[i].addEventListener('keypress', checkhireEmployersItem);
	}
}
checkhireEmployersItem();


function checkCountBudget () {
	countBudgetValue.disabled = true;
}

checkCountBudget();


