const questions = [
  {
    question: "Какой алгоритм используется для нахождения максимального элемента в двумерном массиве?",
    options: [
      "A. Поиск методом перебора",
      "B. Динамическое программирование",
      "C. Бинарный поиск"
    ],
    correctAnswer: "A" // правильный ответ: "A. Поиск методом перебора"
  },
  {
    question: "Опишите процесс создания логотипа для веб-сайта. Какие элементы дизайна важны?",
    options: [
      "A. Цветовая палитра, формы и типографика",
      "B. Только выбор шрифта",
      "C. Только создание графики"
    ],
    correctAnswer: "A" // правильный ответ: "A. Цветовая палитра, формы и типографика"
  },
  {
    question: "Как бы вы написали рекламный текст для веб-страницы, чтобы привлечь клиентов?",
    options: [
      "A. Использование ключевых слов, краткость и стиль",
      "B. Длинные, детализированные тексты",
      "C. Использование только одного типа контента"
    ],
    correctAnswer: "A" // правильный ответ: "A. Использование ключевых слов, краткость и стиль"
  },
  {
    question: "Как вы бы организовали рабочий процесс на фрилансе?",
    options: [
      "A. Использование платформ для фрилансеров и управления временем",
      "B. Работа без планирования",
      "C. Все заказы выполнялись бы подряд"
    ],
    correctAnswer: "A" // правильный ответ: "A. Использование платформ для фрилансеров и управления временем"
  },
  {
    question: "Как бы вы решили задачу нахождения наибольшей общей подстроки двух строк?",
    options: [
      "A. Динамическое программирование",
      "B. Рекурсия",
      "C. Простое перебор всех подстрок"
    ],
    correctAnswer: "A" // правильный ответ: "A. Динамическое программирование"
  }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const question = questions[currentQuestion];
  document.getElementById("question").textContent = question.question;
  document.getElementById("optionA").textContent = question.options[0];
  document.getElementById("optionB").textContent = question.options[1];
  document.getElementById("optionC").textContent = question.options[2];
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];
  const feedback = document.getElementById("feedback");

  if (selectedOption === question.correctAnswer) {
    score++;
    feedback.textContent = "Правильный ответ!";
    feedback.style.color = "green";
    document.getElementById("nextButton").style.display = "block";
  } else {
    feedback.textContent = "Неправильный ответ, попробуйте еще раз.";
    feedback.style.color = "red";
    document.getElementById("nextButton").style.display = "none";
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    displayQuestion();
    document.getElementById("feedback").textContent = "";
    document.getElementById("nextButton").style.display = "none";
  } else {
    alert("Тест завершен! Ваш результат: " + score + " из " + questions.length);
  }
}

document.getElementById("optionA").addEventListener("click", () => checkAnswer("A"));
document.getElementById("optionB").addEventListener("click", () => checkAnswer("B"));
document.getElementById("optionC").addEventListener("click", () => checkAnswer("C"));

document.getElementById("nextButton").addEventListener("click", nextQuestion);

displayQuestion();
