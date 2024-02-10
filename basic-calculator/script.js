const display = document.querySelector('.display');
const keys = document.querySelector('.keys');

keys.addEventListener('click', function(event) {
	const target = event.target;

	if (target.matches('button')) {
		const keyValue = target.textContent;

		if (target.classList.contains('clear')) {
			clearDisplay();
		}
		else if (target.classList.contains('calculate')) {
			calculateResult();
		}
		else {
			updateDisplay(keyValue);
		}
	}
});

function clearDisplay() {
	display.value = '';
}

function updateDisplay(value) {
	display.value += value;
}

function calculateResult() {
	try {
		let val = eval(display.value);
		if (val === Infinity) {
			display.value = "Can't divide by Zero";
		} else if (!isNaN(val)) {
			display.value = val;
		} else {
			display.value = "Math Error";
		}
	} 
	catch (error) {
  	display.value = 'Error';
  }
}