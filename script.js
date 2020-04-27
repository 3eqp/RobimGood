var r = 255, g = 0, b = 0, a = 1;

function randomNumber(up) {
	return Math.round(Math.random() * up)
}

function addValue(value) {
	value = randomNumber(255);
	return value;
}

function increaseValue(val,par) {
	val+=par;
	return val;
}

function decreaseValue(val,par) {
	val-=par;
	return val;
}

function changeLinkColor() {
	r = addValue(r);
	g = addValue(g);
	b = addValue(b);
	document.documentElement.style.setProperty('--link-hover-color', 'rgba('+r+','+g+','+b+','+a+')');
}

//setInterval(changeLinkColor, 1000);

