(function() {
	const rollInput = document.querySelector('#roll-input');
	const pitchInput = document.querySelector('#pitch-input');

	rollInput.addEventListener('keyup', function(e) {
		indicator.updateRoll(+rollInput.value);
	});
	pitchInput.addEventListener('keyup', function(e) {
		indicator.updatePitch(+pitchInput.value);
	});
}());
