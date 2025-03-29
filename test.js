document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        {
            question: "Что делает дизайнер?",
            answers: { A: "Рисует и создает макеты", B: "Пишет код", C: "Продвигает товары" },
            correct: "A"
        },
        {
            question: "Что делает программист?",
            answers: { A: "Создает рекламу", B: "Пишет код", C: "Делает переводы" },
            correct: "B"
        },
        {
            question: "Что делает копирайтер?",
            answers: { A: "Пишет статьи и тексты", B: "Редактирует видео", C: "Создает базы данных" },
            correct: "A"
        },
        {
            question: "Что делает маркетолог?",
            answers: { A: "Исследует рынок и продвигает товары", B: "Разрабатывает сайты", C: "Пишет музыку" },
            correct: "A"
        },
        {
            question: "Какое число продолжает последовательность: 2, 6, 12, 20, ?",
            answers: { A: "30", B: "42", C: "26" },
            correct: "30"
        }
    ];
    
    let currentQuestionIndex = 0;
    const questionContainer = document.getElementById("question-container");
    const nextButton = document.getElementById("next-button");
    
    function loadQuestion() {
        const q = questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <h2>${q.question}</h2>
            <button class="answer" data-answer="A">A: ${q.answers.A}</button>
            <button class="answer" data-answer="B">B: ${q.answers.B}</button>
            <button class="answer" data-answer="C">C: ${q.answers.C}</button>
        `;
        document.querySelectorAll(".answer").forEach(button => {
            button.addEventListener("click", function () {
                if (this.dataset.answer === q.correct) {
                    nextButton.style.display = "block";
                } else {
                    alert("Неправильный ответ! Попробуйте еще раз.");
                }
            });
        });
    }
    
    nextButton.addEventListener("click", function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            nextButton.style.display = "none";
            loadQuestion();
        } else {
            alert("Поздравляем! Вы прошли тест.");
            window.location.href = "worker-dashboard.html";
        }
    });
    
    loadQuestion();
});
