let indicator = (function() {
	const canvas = document.querySelector('#indicator');
	canvas.width = 600;
	canvas.height = 600;

	const ctx = canvas.getContext('2d');

	const FPS = 30;
	const SPEED = 10;

	const reqAnimationFrame = window.requestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| function(cb) { setTimeout(cb, 1000 / FPS); };

	let roll = 0;
	let pitch = 0;

	function update(r, p) {
		roll = r * Math.PI / 180;
		pitch = p * Math.PI / 180;
	}

	(function update() {
		setTimeout(update, SPEED);
	}());

	(function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.translate(canvas.width / 2, canvas.height / 2);
		ctx.translate(0, pitch * canvas.height / Math.PI);
		ctx.rotate(-roll);

		ctx.fillStyle = '#004AFF'; // blue
		ctx.fillRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height);
		ctx.fillStyle = '#523108'; // brown
		ctx.fillRect(-canvas.width, 0, canvas.width * 2, canvas.height);

		ctx.resetTransform();

		reqAnimationFrame(draw);
	}());

	return {
		update
	};
}());
