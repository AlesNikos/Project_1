let age = document.getElementById('age');

age.addEventListener('change', function showUser(surname,name) {
	surname = "Пупкин";
	name = "Василий";
	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
});