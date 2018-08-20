setInterval(showTime, 1000);

function showTime() {
	let a = new Date();
	document.getElementById('clock').innerHTML = a.toLocaleTimeString();
}