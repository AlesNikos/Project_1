let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let now = new Date();
week.forEach(function(item, i, weekNew) {
	if (i === 5 || i === 6) {
		document.write('<b>' + weekNew[i] + '</b>' + '<br>');
	} else if (i === now.getDay()-1) {
		document.write('<i>' + weekNew[i] + '</i>' + '<br>');
	} else {
		document.write(weekNew[i] + '<br>');
	}
});


let arr = ['345', '567', '3567', '4456', '765', '987', '789'];

arr.forEach(function(item, i, arrNew) {
	if (arrNew[i][0] == '3' || arrNew[i][0] == '7') {
		console.log(arrNew[i]);
	}	
});
