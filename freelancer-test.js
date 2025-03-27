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
    {
        question: "Как объявить функцию в JavaScript?",
        options: {
            a: "function myFunction() {}",
            b: "func myFunction() {}",
            c: "declare myFunction() {}"
        },
        correctAnswer: "a"
    },
    {
        question: "Что означает 'undefined' в JavaScript?",
        options: {
            a: "Переменная не была объявлена.",
            b: "Переменная была объявлена, но ей не присвоено значение.",
            c: "Переменная была присвоена значению null."
        },
        correctAnswer: "b"
    },
    {
        question: "Как создать объект в JavaScript?",
        options: {
            a: "var obj = {};",
            b: "var obj = new Object();",
            c: "var obj = object();"
        },
        correctAnswer: "a"
    }
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

    // Скрыть кнопку "Следующий вопрос" в начале
    document.getElementById('next-question').style.display = 'none';
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption && selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
        alert('Правильный ответ!');
    } else {
        alert('Неправильный ответ. Попробуйте снова.');
        return;
    }

    // Переход к следующему вопросу или завершение теста
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-question').style.display = 'none'; // Скрыть кнопку на время перехода
    } else {
        alert('Тест завершен!');
        // Добавить функционал для отображения результатов теста
    }
}

// Показываем кнопку "Следующий вопрос" только если ответ правильный
function showNextButton() {
    document.getElementById('next-question').style.display = 'block';
}
