function getFriendlyNumbers(start, end) {
	let arr = [];
	for (let i = start; i <= end; i ++) {
		let y = [];
		let a = getDivisorsSum(i);
		
		if (getDivisorsSum(a) == i && a <= end && i < a) {
			y.push(i, a);
			arr.push(y);
			console.log(arr);
		 } //else if ((i >= 1 && i <= 100) || (i >= 284 && i <= 500)) {
		// 	arr = y;
		// }
	}
	console.log(arr);
 // return arr;
}
// getFriendlyNumbers(1, 300);

function getDivisorsSum(num) {
	return getSum(getDivisors(num));
}

function getDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if (num % i == 0) {
			arr.push(i);
		}
	}
	return arr;
}

function getSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// module.exports = {
//     firstName: 'Name',
//     secondName: 'Surname',
//     task: getFriendlyNumbers
// }