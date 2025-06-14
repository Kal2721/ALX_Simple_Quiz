function add(number1, number2) {
	return (number1 + number2);
}

function subtract((number1, number2)) {
        return (number1 - number2);
}

function multiply((number1, number2)) {
        return (number1 * number2);
}

function divide((number1, number2)) {
        return (number1 / number2);
}

document.getElementById('add').addEventListener('click', function() {
	const number1 = parstFloat(document.getElementById('number1').value) || 0;
	const number2 = parstFloat(document.getElementById('number2').value) || 0;

	const result = add(number1, number2);
	document.getElementById('calculation-result').textContent = result;
});
 
document.getElementById('subtract').addEventListener('click', function() {
        const number1 = parstFloat(document.getElementById('number1').value) || 0;
        const number2 = parstFloat(document.getElementById('number2').value) || 0;

        const result = subtract(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
        const number1 = parstFloat(document.getElementById('number1').value) || 0;
        const number2 = parstFloat(document.getElementById('number2').value) || 0;

        const result = multiply(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
        const number1 = parstFloat(document.getElementById('number1').value) || 0;
        const number2 = parstFloat(document.getElementById('number2').value) || 0;

        const result = divide(number1, number2);
        document.getElementById('calculation-result').textContent = result;
});

