// freelancer-test.js
const questions = [
    {
        question: "Какая основная задача UX-дизайнера?",
        answers: ["A) Создавать красивые изображения", "B) Улучшать пользовательский опыт", "C) Писать код"],
        correct: "B"
    },
    {
        question: "Что такое HTML?",
        answers: ["A) Язык программирования", "B) Язык разметки", "C) Графический редактор"],
        correct: "B"
    },
    {
        question: "Какой язык чаще всего используется для backend-разработки?",
        answers: ["A) JavaScript", "B) Python", "C) Photoshop"],
        correct: "B"
    },
    {
        question: "Что делает CSS?",
        answers: ["A) Добавляет стили", "B) Запускает сервер", "C) Хранит данные"],
        correct: "A"
    },
    {
        question: "Что такое фриланс?",
        answers: ["A) Работа в офисе", "B) Работа на себя", "C) Работа без зарплаты"],
        correct: "B"
    }
];

let currentQuestionIndex = 0;
let selectedAnswer = "";

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-answer");
const nextButton = document.getElementById("next-question");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    answerButtons.innerHTML = "";
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("answer-btn");
        button.setAttribute("data-option", ["A", "B", "C"][index]);
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
    submitButton.disabled = true;
    nextButton.style.display = "none";
}

function selectAnswer(event) {
    selectedAnswer = event.target.getAttribute("data-option");
    submitButton.disabled = false;
}

submitButton.addEventListener("click", () => {
    if (selectedAnswer === questions[currentQuestionIndex].correct) {
        alert("Правильный ответ!");
        nextButton.style.display = "block";
    } else {
        alert("Неправильный ответ. Попробуйте ещё раз!");
    }
    submitButton.disabled = true;
});

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert("Тест завершён! Переход к списку задач.");
        window.location.href = "task-list.html";
    }
});

loadQuestion();
