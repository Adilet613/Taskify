const questions = [
    {
        question: "Какое число лишнее? 2, 3, 5, 7, 9, 11",
        answers: ["3", "9", "7", "5"],
        correct: "9"
    },
    {
        question: "Что тяжелее: 1 кг железа или 1 кг пуха?",
        answers: ["Железо", "Пух", "Одинаково", "Не знаю"],
        correct: "Одинаково"
    },
    {
        question: "Что идёт вверх, но никогда не опускается вниз?",
        answers: ["Температура", "Лестница", "Время", "Шар"],
        correct: "Время"
    },
    {
        question: "Если 5 машин делают 5 деталей за 5 минут, сколько деталей сделают 100 машин за 100 минут?",
        answers: ["500", "2000", "10000", "200"],
        correct: "2000"
    },
    {
        question: "У матери Маши 5 дочерей: Лала, Леле, Лили, Лоло... Как зовут пятую?",
        answers: ["Лулу", "Лиля", "Маша", "Не знаю"],
        correct: "Маша"
    },
    {
        question: "Если яйцо варится 5 минут, сколько минут варится 5 яиц?",
        answers: ["25", "5", "10", "1"],
        correct: "5"
    },
    {
        question: "Чем больше берёшь, тем больше остаётся. Что это?",
        answers: ["Знания", "Шаги", "Опыт", "Время"],
        correct: "Шаги"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.innerText = answer;
        btn.classList.add("answer-btn");
        btn.onclick = () => checkAnswer(answer);
        answersDiv.appendChild(btn);
    });

    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        document.getElementById("next-btn").classList.remove("hidden");
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("test-container").innerHTML = "<h2>Вы прошли тест!</h2>";
    }
}

window.onload = loadQuestion;
