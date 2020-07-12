function random(min, max) {
	return Math.random() * (max - min) + min;
}

function getRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function init() {
	for (let i = 0; i < 20; i++) {
		window.requestAnimationFrame(draw.bind(null, random(0, 50) + 30 * i + 50, 0, getRandomColor()));
	}
}

function draw(x, y, color) {
	const canvas = document.getElementById('background');
	const ctx = canvas.getContext('2d');
	ctx.strokeStyle = color;
	const x_off = random(-2, 2);

	ctx.beginPath();
	ctx.moveTo(x, y);
	x += random(-1, 1) + x_off;
	y += 0.5;
	ctx.lineWidth = 2;
	ctx.lineTo(x, y);
	ctx.stroke();

	if (y < canvas.height) {
		window.requestAnimationFrame(draw.bind(null, x, y, color));
	} else {
	}
}

init();
