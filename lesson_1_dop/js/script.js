let num = 33721;
num = num.toString();
let num1 = num.split('');
let comp = 1;

for (var i = 0; i < num1.length; i++) {
	comp *= num1[i];
}

comp = Math.pow(comp, 3);
comp = comp.toString();
comp = comp.split('');
comp.length = 2;
alert(comp);


