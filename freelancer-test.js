const questions = [
    {
        question: "Что означает HTML?",
        answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
        correct: 0
    },
    {
        question: "Как называется язык программирования для создания стилей?",
        answers: ["CSS", "JavaScript", "Python"],
        correct: 0
    },
    {
        question: "Какой тег используется для создания ссылки в HTML?",
        answers: ["<a>", "<link>", "<url>"],
        correct: 0
    }
];

let currentQuestionIndex = 0;

function showFreelancerTest() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("freelancer-test").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        alert("Тест пройден! Переход в профиль...");
        window.location.href = "profile.html"; // Переход на страницу профиля
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.className = "answer-button";
        button.onclick = () => checkAnswer(index);
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    if (selectedIndex === questionData.correct) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Неправильный ответ. Попробуйте еще раз.");
    }
}
