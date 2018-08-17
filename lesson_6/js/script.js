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
			
			if ((typeof(a)) === 'string' && a.trim().length > 0 && a !== null && a.length < 50) {
				console.log('Все верно!');
				mainList.shopGoods[i] = a;
				goodsValue.textContent = mainList.shopGoods;
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
	let str = '';
	for (let i = 0; i < hireEmployersItem.length; i++) {
			let name = hireEmployersItem[i].value;
				if (name.trim().length > 0) {
				mainList.employers[i] = name;
				str += mainList.employers[i] + ', ';
			}
		}
		if (str.endsWith(', ')) {
			str = str.substr(0, str.length -2);
		}
		employersValue.textContent = str;
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
			return;
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
			return;
		} else {
			btnHireEmployers.disabled = true;
		}
		hireEmployersItem[i].addEventListener('keypress', checkhireEmployersItem);
		hireEmployersItem[i].addEventListener('keypress', checkIsCyr);
	}
}
checkhireEmployersItem();

function checkIsCyr(event) {
	let key = event.key;
	if(key.match('[А-я]') === null) {
		event.preventDefault();
		return false;
	}
}


function checkCountBudget () {
	countBudgetValue.disabled = true;
}

checkCountBudget();


