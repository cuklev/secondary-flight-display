(function() {
	const rollInput = document.querySelector('#roll-input');
	const pitchInput = document.querySelector('#pitch-input');

	const DELTA = 1;
	let roll = 0;
	let pitch = 0;

	rollInput.addEventListener('keyup', function(e) {
		roll = +rollInput.value;
		indicator.updateRoll(roll);
	});
	pitchInput.addEventListener('keyup', function(e) {
		pitch = +pitchInput.value;
		indicator.updatePitch(pitch);
	});

	window.addEventListener('keyup', function(e) {
		if(e.which === 37) { // left
			roll -= DELTA;
			indicator.updateRoll(roll);
			rollInput.value = roll;
		}
		else if(e.which === 39) { // right
			roll += DELTA;
			indicator.updateRoll(roll);
			rollInput.value = roll;
		}
		else if(e.which === 38) { // up
			pitch += DELTA;
			indicator.updatePitch(pitch);
			pitchInput.value = pitch;
		}
		else if(e.which === 40) { // 40
			pitch -= DELTA;
			indicator.updatePitch(pitch);
			pitchInput.value = pitch;
		}
	});
}());
