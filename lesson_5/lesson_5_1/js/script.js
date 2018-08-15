let menu = document.getElementsByClassName('menu')[0],
	menuItem = document.getElementsByClassName('menu-item'),
	li = document.createElement('li')
	body = document.getElementsByTagName('body')[0],
	title = document.getElementById('title'),
	adv = document.getElementsByClassName('adv')[0],
	ans = document.getElementById('prompt');

// console.log(prompt);
menu.insertBefore(menuItem[2], menuItem[1]);

li.classList.add('menu-item');
li.textContent = "Пятый пункт";
// console.log(li);
// console.log(menu);
menu.appendChild(li);

body.style.background = 'url(img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

let text = prompt('Как вы относитесь к технике Apple?');
ans.appendChild(document.createTextNode(text));
// console.log(ans);
