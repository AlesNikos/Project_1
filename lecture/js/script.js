prime: for (let i = 2; i <= 100; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j == 0) continue prime;
	}
	document.write(i + ' ' + 'Делители этого числа: 1 и ' + i + '<br>');
}