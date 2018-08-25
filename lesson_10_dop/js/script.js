document.getElementById('telephone').addEventListener('keypress',checkIsCyr, false);

function checkIsCyr(event) {
	let key = event.key;
	let regex =  /^\+?[7]{0,1}([(]{1}[0-9]{0,3}[)]{0,1}[0-9]{0,7}|[0-9]{0,10})$/;
	if(key.match(/[\+0-9()]/) === null || (event.target.value + key).match(regex) === null) {
		event.preventDefault();
		return false;j
	}
}