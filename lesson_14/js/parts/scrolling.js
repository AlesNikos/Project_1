function scrolling() {
	// Плавная прокрутка

	let elements = document.querySelectorAll('a[href*="#"]');

	for (let i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', function (event) {
			event.preventDefault();
			
			smoothScroll(elements[i].getAttribute('href'));
			
		});
	}

	let currentYPosition = () => {
	    
	    if (self.pageYOffset) {
	    	return self.pageYOffset;
	    }
	    return 0;
	}


	let elmYPosition = eID => {
	    let elm = document.querySelector(eID);
	    let y = elm.offsetTop;
	    let node = elm;
	    while (node.offsetParent && node.offsetParent != document.body) {
	        node = node.offsetParent;
	        y += node.offsetTop;
	    } return y - 60;
	}


	let smoothScroll = eID => {
	    let startY = currentYPosition();
	    let stopY = elmYPosition(eID);
	    let distance = stopY > startY ? stopY - startY : startY - stopY;
	    if (distance < 100) {
	        scrollTo(0, stopY); return;
	    }
	    let speed = Math.round(distance / 100);
	    if (speed >= 20) speed = 20;
	    let step = Math.round(distance / 25);
	    let leapY = stopY > startY ? startY + step : startY - step;
	    let timer = 0;
	    if (stopY > startY) {
	        for ( let i=startY; i<stopY; i+=step ) {
	            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
	        } return;
	    }
	    for ( let i=startY; i>stopY; i-=step ) {
	        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
	        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	    }
	}
}

module.exports = scrolling;