let timerId = setTimeout(showTimer, 1000);


function formatTime(date) {
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
	return HH + ':' + mm + ':' + ss;
}

function showTimer() {
	let a = new Date();
	document.write(formatTime(a) + '<br>');
	// timerId = setTimeout(showTimer, 1000)
}

