let questions = [
    "Сколько будет 2 + 2?",
    "Какой тег используется для ссылки в HTML?",
    "Как называется язык программирования для создания стилей?"
];
let currentQuestion = 0;

function nextQuestion() {
    if (currentQuestion < questions.length) {
        document.getElementById("question-text").textContent = questions[currentQuestion];
        currentQuestion++;
    } else {
        alert("Вы прошли тест!");
    }
}
