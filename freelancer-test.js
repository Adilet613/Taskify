// Пример вопросов для фрилансера
const questions = [
    {
        question: "Как создать переменную в JavaScript?",
        options: {
            a: "var myVar;",
            b: "variable myVar;",
            c: "create myVar;"
        },
        correctAnswer: "a"
    },
    {
        question: "Как вывести сообщение в консоль?",
        options: {
            a: "alert('Hello World');",
            b: "console.log('Hello World');",
            c: "print('Hello World');"
        },
        correctAnswer: "b"
    },
    // Добавь другие вопросы по необходимости
];

let currentQuestionIndex = 0;

function startTest() {
    document.querySelector('button').style.display = 'none'; // Скрыть кнопку начала теста
    document.getElementById('test-container').style.display = 'block'; // Показать контейнер с вопросами
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        <p><input type="radio" name="answer" value="a"> ${question.options.a}</p>
        <p><input type="radio" name="answer" value="b"> ${question.options.b}</p>
        <p><input type="radio" name="answer" value="c"> ${question.options.c}</p>
    `;

    // Показать кнопку "Следующий вопрос"
    document.getElementById('next-question').style.display = 'block';
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
        alert('Правильный ответ!');
    } else {
        alert('Неправильный ответ. Попробуйте снова.');
    }

    // Переход к следующему вопросу или завершение теста
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Тест завершен!');
    }
}
