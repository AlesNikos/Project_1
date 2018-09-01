function ajax() {
	// Form

 let message = new Object();
 message.loading = "Загрузка...";
 message.success = "<img src='../img/tick.png' height=50px width=50px>";
 message.failure = "Что-то пошло не так...";

 let form = document.getElementsByClassName('main-form')[0],
 	input = document.getElementsByTagName('input'),
 	formBottom = document.getElementById('form'),
 	statusMessage = document.createElement('div');
 	statusMessage.classList.add('status');

 	function sendForm(elem) {
 		elem.addEventListener('submit', function(e) {
 			e.preventDefault;
 			elem.appendChild(statusMessage);

	 		//AJAX

	 		let request = new XMLHttpRequest();
	 		request.open("POST", 'server.php');

	 		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	 		let formData = new FormData(elem);
	 		
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
	 		}

	 		for (let i = 0; i < input.length; i++) {
	 			input[i].value = '';
	 			//Очищаем поля ввода
	 		}
 		});
 	}

	sendForm(form);
	sendForm(formBottom);

}

module.exports = ajax;