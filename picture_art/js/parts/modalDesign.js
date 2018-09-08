function modalDesign() {

	//Модальное окно при нажатии на кнопки "Заказать", "Заказать портрет", "Заказать дизайн проекта", "Хочу так же"

	let popupDesign = document.querySelector('.popup-design'),
		body = document.getElementsByTagName('body')[0],
		close = document.getElementsByClassName('popup-close');


	body.addEventListener('click', event => {
		let target = event.target;
		if (!event.target.classList.contains('button-design')) return;
		
		openModalDesign();
	});

	close[2].addEventListener('click', closeModal);

	window.addEventListener('click', outsideClick);

	//Функция открывания модального
	function openModalDesign() {
		popupDesign.style.display = "block";
	}

	//Функция закрывания модального окна при нажатии на крестик
	function closeModal() {
		popupDesign.style.display = "none";
	}

	//Функция закрывания модального окна при нажатии вне его
	function outsideClick(event) {
		if (event.target == popupDesign) {
			popupDesign.style.display = "none";
		}
	}
}

module.exports = modalDesign;