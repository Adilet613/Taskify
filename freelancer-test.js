let questions = [
    { question: "Сколько будет 2 + 2 * 2?", answer: "6" },
    { question: "Какой тег используется для ссылки в HTML?", answer: "a" },
    { question: "Как называется язык программирования для создания стилей?", answer: "css" }
];

let currentQuestion = 0;

function startTest() {
    document.getElementById("question-text").textContent = questions[currentQuestion].question;
    document.getElementById("answer-input").value = "";
    document.getElementById("result-message").textContent = "";
    document.getElementById("next-button").classList.add("hidden");
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    let correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("result-message").textContent = "Правильно!";
        document.getElementById("next-button").classList.remove("hidden");
    } else {
        document.getElementById("result-message").textContent = "Неправильно, попробуйте ещё раз.";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        startTest();
    } else {
        document.getElementById("freelancer-test").innerHTML = "<h2>Вы успешно прошли тест!</h2>";
    }
}

// Запускаем тест сразу при открытии
document.addEventListener("DOMContentLoaded", startTest);
