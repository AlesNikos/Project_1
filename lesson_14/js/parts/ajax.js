function ajax() {
	// Form

	 let message = new Object();
	 message.loading = "Загрузка...";
	 message.success = "<img src='../img/tick.png' height=50px width=50px>";
	 message.failure = "Что-то пошло не так...";

	 let form = document.getElementsByClassName('main-form')[0],
	 	input = form.getElementsByTagName('input'),
	 	form_1 = document.getElementById('form'),
	 	input_1 = form_1.getElementsByTagName('input'),
	 	statusMessage = document.createElement('div');
	 	statusMessage.classList.add('status');

	 	// Модальное окно

	 	form.addEventListener('submit', function(event) {
	 		event.preventDefault();
	 		form.appendChild(statusMessage);

	 		//AJAX

	 		let request = new XMLHttpRequest();
	 		request.open("POST", 'server.php');

	 		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	 		let formData = new FormData(form);
	 		

	 		request.send(formData);
	 		

	 		request.onreadystatechange = function() {
	 			if (request.readyState < 4) {
	 				statusMessage.innerHTML = message.loading;
	 			} else if (request.readyState === 4) {
	 				if (request.status == 200 && request.status < 300) {
	 					statusMessage.innerHTML = message.success;
	 					//Добавляем контент на страницу
	 				} else {
	 					statusMessage.innerHTML = message.failure;
	 				}
	 			}
	 		};
	 		for (let i = 0; i < input.length; i++) {
	 			input[i].value = '';
	 			//Очищаем поля ввода
	 		}
	 	});

	 	// Контактная форма

	 		form_1.addEventListener('submit', function(event) {
	 		event.preventDefault();
	 		form_1.appendChild(statusMessage);

	 		//AJAX

	 		let request = new XMLHttpRequest();
	 		request.open("POST", 'server.php');

	 		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	 		let formData = new FormData(form_1);
	 		

	 		request.send(formData);
	 		

	 		request.onreadystatechange = function() {
	 			if (request.readyState < 4) {
	 				statusMessage.innerHTML = message.loading;
	 			} else if (request.readyState === 4) {
	 				if (request.status == 200 && request.status < 300) {
	 					statusMessage.innerHTML = message.success;
	 					//Добавляем контент на страницу
	 				} else {
	 					statusMessage.innerHTML = message.failure;
	 				}
	 			}
	 		};
	 		for (let i = 0; i < input.length; i++) {
	 			input[i].value = '';
	 			//Очищаем поля ввода
	 		}
	 	});
}

module.exports = ajax;