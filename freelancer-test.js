document.addEventListener("DOMContentLoaded", function() {
    let startTestBtn = document.getElementById("startTestBtn");

    if (startTestBtn) {
        startTestBtn.addEventListener("click", function() {
            window.location.href = "freelancer-test.html"; // Переход на страницу теста
        });
    }

    let questions = [
        {
            question: "Что делает тег <div> в HTML?",
            options: ["A: Создает заголовок", "B: Группирует элементы", "C: Добавляет изображение"],
            correct: "B"
        },
        {
            question: "Какой язык используется для стилизации веб-страниц?",
            options: ["A: CSS", "B: HTML", "C: Python"],
            correct: "A"
        },
        {
            question: "Что делает оператор '===' в JavaScript?",
            options: ["A: Сравнивает только значение", "B: Сравнивает значение и тип данных", "C: Это побитовый оператор"],
            correct: "B"
        },
        {
            question: "Какой метод используется для вывода в консоль в JavaScript?",
            options: ["A: console.log()", "B: print()", "C: alert()"],
            correct: "A"
        },
        {
            question: "Как в CSS задать цвет фона элемента?",
            options: ["A: color", "B: background-color", "C: font-color"],
            correct: "B"
        }
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        if (currentQuestion < questions.length) {
            let q = questions[currentQuestion];
            document.getElementById("question").textContent = q.question;
            document.getElementById("optionA").textContent = q.options[0];
            document.getElementById("optionB").textContent = q.options[1];
            document.getElementById("optionC").textContent = q.options[2];
        } else {
            window.location.href = "task-list.html"; // После теста переходит к списку задач
        }
    }

    document.querySelectorAll(".option").forEach(button => {
        button.addEventListener("click", function() {
            let selectedAnswer = this.getAttribute("data-answer");
            if (selectedAnswer === questions[currentQuestion].correct) {
                currentQuestion++;
                loadQuestion();
            } else {
                alert("Неправильный ответ! Попробуйте еще раз.");
            }
        });
    });

    if (document.getElementById("question")) {
        loadQuestion(); // Загружаем первый вопрос
    }
});
