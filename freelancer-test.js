document.addEventListener("DOMContentLoaded", function() {
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
    let questionElement = document.getElementById("question");
    let optionA = document.getElementById("optionA");
    let optionB = document.getElementById("optionB");
    let optionC = document.getElementById("optionC");
    let nextQuestionBtn = document.getElementById("nextQuestionBtn");

    function loadQuestion() {
        if (currentQuestion < questions.length) {
            let q = questions[currentQuestion];
            questionElement.textContent = q.question;
            optionA.textContent = q.options[0];
            optionB.textContent = q.options[1];
            optionC.textContent = q.options[2];
            nextQuestionBtn.style.display = "none"; // Прячем кнопку "Следующий вопрос"
        } else {
            window.location.href = "orders.html"; // Переход в заказы после теста
        }
    }

    document.querySelectorAll(".option").forEach(button => {
        button.addEventListener("click", function() {
            let selectedAnswer = this.getAttribute("data-answer");
            if (selectedAnswer === questions[currentQuestion].correct) {
                nextQuestionBtn.style.display = "block"; // Показываем кнопку "Следующий вопрос"
            } else {
                alert("Неправильный ответ! Попробуйте еще раз.");
            }
        });
    });

    nextQuestionBtn.addEventListener("click", function() {
        currentQuestion++;
        loadQuestion();
    });

    loadQuestion();
});
