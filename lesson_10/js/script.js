class options {
	constructor (height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	newDiv(text) {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.textContent = text;
		div.style.cssText = `height: ${this.height}px; \
			width: ${this.width}px; \
			background-color: ${this.bg}; \
			font-size: ${this.fontSize}px; \
			text-align: ${this.textAlign}px;`;
	}
}

let obj = new options(80, 600, 'green', 20, 5);
obj.newDiv('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut illo ab sit praesentium. Cum non impedit vero, rerum veritatis qui eligendi mollitia debitis illo, ut? Eos consequuntur impedit sunt praesentium.');