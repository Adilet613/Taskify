let currentQuestionIndex = 0;
const questions = [
    {
        question: "Что такое HTML?",
        options: {
            a: "Язык программирования",
            b: "Язык разметки",
            c: "Операционная система"
        },
        correctAnswer: "b"
    },
    {
        question: "Что такое CSS?",
        options: {
            a: "Язык программирования",
            b: "Язык для стилизации",
            c: "Система управления базами данных"
        },
        correctAnswer: "b"
    },
    {
        question: "Что такое JavaScript?",
        options: {
            a: "Язык программирования для динамических страниц",
            b: "Язык разметки",
            c: "Язык для оформления страниц"
        },
        correctAnswer: "a"
    },
    // Добавь еще вопросы здесь
];

function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        <ul>
            <li><input type="radio" name="answer" value="a"> ${question.options.a}</li>
            <li><input type="radio" name="answer" value="b"> ${question.options.b}</li>
            <li><input type="radio" name="answer" value="c"> ${question.options.c}</li>
        </ul>
    `;
}

function submitAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        
        if (answerValue === correctAnswer) {
            alert('Правильный ответ!');
            document.getElementById('next-question-btn').style.display = 'block';
            document.getElementById('submit-answer-btn').style.display = 'none';
        } else {
            alert('Неправильный ответ, попробуйте снова!');
        }
    } else {
        alert('Пожалуйста, выберите ответ!');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('submit-answer-btn').style.display = 'inline-block';
        document.getElementById('next-question-btn').style.display = 'none';
    } else {
        alert('Тест завершен!');
        window.location.href = "tasks.html"; // Переходим к списку задач
    }
}

showQuestion();  // Показать первый вопрос при загрузке страницы
