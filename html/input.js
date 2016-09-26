(function() {
	const rollInput = document.querySelector('#roll-input');
	const pitchInput = document.querySelector('#pitch-input');

	const DELTA = 1;

	let roll = 0;
	let pitch = 0;

	function updateRoll(x) {
		roll += x;
		if(roll > 180) roll -= 360;
		else if(-roll > 180) roll += 360;
		rollInput.value = roll;
	}
	function updatePitch(x) {
		pitch += x;
		if(pitch > 180) pitch -= 360;
		else if(-pitch > 180) pitch += 360;
		pitchInput.value = pitch;
	}

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
			updateRoll(-DELTA);
			indicator.updateRoll(roll);
		}
		else if(e.which === 39) { // right
			updateRoll(DELTA);
			indicator.updateRoll(roll);
		}
		else if(e.which === 38) { // up
			updatePitch(DELTA);
			indicator.updatePitch(pitch);
		}
		else if(e.which === 40) { // down
			updatePitch(-DELTA);
			indicator.updatePitch(pitch);
		}
	});
}());
