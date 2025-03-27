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
let completedProjects = Math.floor(Math.random() * 20) + 1; // Случайное количество работ (1-20)
let daysOnSite = Math.floor(Math.random() * 365) + 1; // Сколько дней на сайте (1-365)

let reviews = [
    { name: "Алексей", rating: 5, comment: "Отличный фрилансер! Быстро справился с задачей." },
    { name: "Марина", rating: 4, comment: "Хорошая работа, но были небольшие задержки." },
    { name: "Игорь", rating: 5, comment: "Рекомендую! Всё сделал качественно." },
];

function showFreelancerTest() {
    document.getElementById("role-selection").classList.add("hidden");
    document.getElementById("freelancer-test").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById("test-question").innerText = questions[currentQuestionIndex].question;
        document.getElementById("test-answer").value = "";
        document.getElementById("test-feedback").innerText = "";
        document.getElementById("next-question").classList.add("hidden");
    } else {
        saveFreelancerData();
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

// Сохранение данных и переход в профиль
function saveFreelancerData() {
    localStorage.setItem("completedProjects", completedProjects);
    localStorage.setItem("daysOnSite", daysOnSite);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    
    window.location.href = "profile.html"; // Переход в профиль
}
