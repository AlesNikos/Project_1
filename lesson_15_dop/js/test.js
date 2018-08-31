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
	expect(each).toEqual(array);
	expect(each).toEqual([8, 7, 6, 5, 4]);
	expect(each).toHaveLength(5);
});

// describe('Exam', function() {
// 	it("что вернет функция each", function() {
// 		expect(each).toContain([8, 7, 6, 5, 4])
// 	});
// });
/*let assert = require('chai').assert

describe("sum", function() {
	it("Функция sum должна возвращать true", function() {
		assert.equal(sum(5,6), true);
	});
	it("Переменная num должна быть равна 5", function() {
		assert.equal(num, 5);
	});
	it("что вернет функция each", function() {
		assert.typeOf(each(arr,myFunc), 'array');
		assert.deepEqual(each(arr,myFunc), [8, 7, 6, 5, 4]);
		assert.lengthOf(each(arr,myFunc), 5);
	}); 
});*/

