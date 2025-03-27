let questions = [
    { question: "Как называется язык разметки веб-страниц?", answer: "HTML" },
    { question: "Как называется язык программирования для создания стилей?", answer: "CSS" },
    { question: "Какой язык программирования используется для веб-разработки?", answer: "JavaScript" },
    { question: "Что означает сокращение HTTP?", answer: "HyperText Transfer Protocol" },
    { question: "Как называется база данных, часто используемая в веб-разработке?", answer: "MySQL" },
    { question: "Какой метод в JavaScript используется для вывода в консоль?", answer: "console.log" },
    { question: "Как называется язык запросов к базе данных?", answer: "SQL" }
];

let currentQuestionIndex = 0;

function showFreelancerTest() {
    document.getElementById("customer-options").classList.add("hidden");
    document.getElementById("order-form").classList.add("hidden");
    document.getElementById("freelancer-test").classList.remove("hidden");
    document.getElementById("freelancer-profile").classList.add("hidden");

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("test-question").innerText = questions[currentQuestionIndex].question;
        document.getElementById("test-answer").value = "";
        document.getElementById("test-feedback").innerText = "";
        document.getElementById("next-question").classList.add("hidden");
    } else {
        showFreelancerProfile(); // Показываем профиль после теста
    }
}

function checkAnswer() {
    let userAnswer = document.getElementById("test-answer").value.trim();
    let correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("test-feedback").innerText = "Правильно!";
        document.getElementById("next-question").classList.remove("hidden");
    } else {
        document.getElementById("test-feedback").innerText = "Неправильно. Попробуйте еще раз!";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function showFreelancerProfile() {
    document.getElementById("freelancer-test").classList.add("hidden");
    document.getElementById("freelancer-profile").classList.remove("hidden");

    document.getElementById("profile-name").innerText = "Фрилансер";
    document.getElementById("profile-status").innerText = "Вы успешно прошли тест!";
}
