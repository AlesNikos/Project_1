let str = "урок-3-был слишком легким";
str = (str[0].toUpperCase() + str.substring(1));
console.log(str);

newStr = str.split("-").join(" ");
console.log(newStr);

newStr = str.slice(-6);
console.log(newStr);
newStr = newStr.split("им").join("о");
document.write(newStr);

let arr = [20, 33, 1, "Человек", 2, 3];
let total = 0;

function squareSum() {
	for (let i = 0; i < arr.length; i++) {
		let num = Math.pow(arr[i], 3);
		// console.log(num);
		total += num;
	}
	console.log(Math.sqrt(total));
}
squareSum();

function showMessage (text) {
	if ((typeof(text) !== 'string')) {
		console.log('Введена не строка!')
	 } else if ((typeof(text) === 'string') && text.length < 50) {
			text = text.trim();
			console.log(text);
		} else if (text.length > 50) {
			text = (text.slice(1,50) + '...');
			console.log(text);
		}
}
showMessage();