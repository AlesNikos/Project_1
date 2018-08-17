function getFriendlyNumbers(start, end) {
	let arr = [];
	if ((typeof(start)) != 'number' || (typeof(end)) != 'number') {
			return false;
		}
		if (start > end || start < 0) {
			return false;
		}
		if (isFloat(start) || isFloat(end)) return false;

		for (let i = start; i <= end; i ++) {
		let y = [];
		let a = getDivisorsSum(i);
		
		if (getDivisorsSum(a) == i && a <= end && i < a) {
			y.push(i, a);
			arr.push(y);
			//console.log(arr);
		 }
	}
	console.log(arr);
 return arr;
}
// getFriendlyNumbers(300, 1);

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

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

module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}