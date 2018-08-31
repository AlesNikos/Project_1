

describe("sum", function() {
	it("Функция sum должна возвращать true", function() {
		assert.equal(sum(5,6), true);
	});
	it("Переменная num должна быть равна 5", function() {
		assert.equal(num, 5);
	});
	it("Проверка на тип данных, на результат и на длину функции each", function() {
		assert.typeOf(each(arr,myFunc), 'array');
		assert.deepEqual(each(arr,myFunc), [8, 7, 6, 5, 4]);
		assert.lengthOf(each(arr,myFunc), 5);
	}); 
});

