function checkAnswer() {
	const correctAnswer = "4";
	const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

	if (selectedAnswer){
		const userAnswer = selectedAnswer.value;
	}

	if (userAnswer == correctAnswer){
		feedback.textContent = "Correct! Well done.";
	}else{
		feedback.textContent = "That's incorrect. Try again!";
	}

	const submit-answer = document.getElementById('submit-answer');

	submit-answer.addEventListener('submit', event =>{
		checkAnswer();
	}
}
