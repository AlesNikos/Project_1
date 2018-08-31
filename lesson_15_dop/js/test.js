const sum = require('./sum');
const num = require('./num');
const each = require('./each');


test("Функция sum должна возвращать true", function() {
	expect(sum(5, 6)).toBe(true);
});


test("Переменная num должна быть равна 5", function() {
	expect(num).toEqual(5);
});

test("что вернет функция each", function() {
	let arr = [64, 49, 36, 25, 16];
	let myFunc = function(a){
		let newArr = [];
		for (let i = 0; i < a.length; i++) {
			newArr[i]=Math.sqrt(a[i]);
		}
		return newArr;
	}

	expect(Array.isArray(each(arr,myFunc))).toBe(true);
	expect(each(arr, myFunc)).toEqual([8, 7, 6, 5, 4]);
	expect(each(arr, myFunc)).toHaveLength(5);
});



