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

	function updateRoll(v) {
		roll = v * Math.PI / 180;
	}
	function updatePitch(v) {
		pitch = v * Math.PI / 180;
	}

	(function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.translate(canvas.width / 2, canvas.height / 2);

		ctx.rotate(-roll);
		ctx.translate(0, pitch * canvas.height / Math.PI);

		// horizon
		ctx.fillStyle = '#004AFF'; // blue
		ctx.fillRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height);
		ctx.fillStyle = '#523108'; // brown
		ctx.fillRect(-canvas.width, 0, canvas.width * 2, canvas.height);

		// scale
		ctx.strokeStyle = 'yellow';
		ctx.lineWidth = 1;
		ctx.beginPath();
		for(let y = -90; y <= 90; y += 10) {
			ctx.moveTo(-40, y * canvas.height / 180);
			ctx.lineTo(40, y * canvas.height / 180);
		}
		for(let y = -25; y <= 25; y += 10) {
			ctx.moveTo(-15, y * canvas.height / 180);
			ctx.lineTo(15, y * canvas.height / 180);
		}
		ctx.stroke();

		ctx.resetTransform();

		ctx.translate(canvas.width / 2, canvas.height / 2);

		// plane
		ctx.strokeStyle = 'red';
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(-canvas.width / 2, 0);
		ctx.lineTo(-20, 0);
		ctx.moveTo(canvas.width / 2, 0);
		ctx.lineTo(20, 0);
		ctx.arc(0, 0, 20, 0, Math.PI);
		ctx.stroke();

		ctx.resetTransform();

		reqAnimationFrame(draw);
	}());

	return {
		updateRoll,
		updatePitch
	};
}());
