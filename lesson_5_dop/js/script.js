function formatNowDay(date) {
	let HH = date.getHours();
	if (HH < 10) {
		HH = '0' + HH;
	}
	let mm = date.getMinutes();
	if (mm < 10) {
		mm = '0' + mm;
	}
	let ss = date.getSeconds();
	if (ss < 10) {
		ss = '0' + ss;
	}
	let DD = date.getDate();
	if (DD < 10) {
		DD = '0' + DD;
	}
	let MM = date.getMonth() + 1;
	if (MM < 10) {
		MM = '0' + MM;
	}
	let YY = date.getFullYear();

	return HH + ':' + mm + ':' + ss + ' ' + DD + '.' + MM + '.' + YY;
	}
	let d = new Date();
	document.write(formatNowDay(d) + '<br>');

function formatDate(date) {
	let DD = date.getDate();
	if (DD < 10) {
		DD = '0' + DD;
	}
	let MM = date.getMonth() + 1;
	if (MM < 10) {
		MM = '0' + MM;
	}
	let YY = date.getFullYear();

	return DD + '.' + MM + '.' + YY;
}
let a = new Date();
document.write(formatDate(a) + '<br>');

let weekDay = new Date();
document.write(weekDay.toLocaleString('ru', {weekday: 'long'}) + '<br>');

let body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');
document.body.appendChild(div);
let dat1 = document.createElement('input');
let dat2 = document.createElement('input');
let dat3 = document.createElement('input');
dat1.setAttribute('type', 'date');
dat2.setAttribute('type', 'date');
dat3.setAttribute('type', 'button');
dat3.value = 'Сравнить';
dat3.addEventListener("click", getDiffDays);
const textVal = document.createElement('p');

div.appendChild(dat1);
div.appendChild(dat2);
div.appendChild(dat3);
div.appendChild(textVal);
console.log(dat1);

function getDiffDays() {
	let date1 = Date.parse(dat1.value);
	let date2 = Date.parse(dat2.value);
	let timeDiff = Math.abs(date2 - date1);
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	//document.write("Разница между датами " + diffDays + " дней.");
	textVal.textContent = "Разница между датами " + diffDays + " дней.";
	console.log(date1);
	console.log(date2);
}

// getDiffDays();
