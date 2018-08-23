let age = document.getElementById('age');

age.addEventListener('change', function showUser(surname,name) {
	this.surname = "Пупкин";
	this.name = "Василий";
	alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
});