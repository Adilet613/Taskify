const questions = [
    { 
        question: "Что делает CSS?", 
        answers: { A: "Добавляет стили", B: "Запускает код", C: "Создает сервер" },
        correct: "A"
    },
    { 
        question: "Какая функция отвечает за ввод в C++?", 
        answers: { A: "cout", B: "cin", C: "print" },
        correct: "B"
    },
    { 
        question: "Какой формат используется для изображений?", 
        answers: { A: "JPEG", B: "MP3", C: "TXT" },
        correct: "A"
    },
    { 
        question: "Кто пишет статьи?", 
        answers: { A: "Копирайтер", B: "Разработчик", C: "Админ" },
        correct: "A"
    },
    { 
        question: "Какое число следует за 21, 34, 55?", 
        answers: { A: "79", B: "89", C: "144" },
        correct: "B"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.querySelectorAll(".answer").forEach((btn, index) => {
        btn.innerText = Object.values(q.answers)[index];
        btn.onclick = () => checkAnswer(Object.keys(q.answers)[index]);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        document.getElementById("next-question").style.display = "block";
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("next-question").style.display = "none";
        loadQuestion();
    } else {
        window.location.href = "choose-job.html";
    }
}

document.addEventListener("DOMContentLoaded", loadQuestion);
