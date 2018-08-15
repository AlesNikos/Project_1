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
document.div.appendChild(dat1);


function getDiffDays() {
	let date1 = new Date();
	let date2 = new Date('08.08.2018');
	let timeDiff = Math.abs(date2.getTime() - date1.getTime());
	let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	document.write("Разница между датами " + diffDays + " дней.");
	console.log(date1);
	console.log(date2);
}
getDiffDays();
