function showFreelancerTest() {
    let testSection = document.createElement("div");
    testSection.innerHTML = `
        <div class="test-container">
            <h2>Тест для фрилансеров</h2>
            <p>Решите следующую задачу:</p>
            <pre>Чему равно 2 + 2 * 2?</pre>
            <input type="text" id="answer" placeholder="Введите ответ">
            <button onclick="checkAnswer()">Отправить</button>
            <p id="result"></p>
        </div>
    `;
    document.body.innerHTML = "";
    document.body.appendChild(testSection);
}

function checkAnswer() {
    let answer = document.getElementById("answer").value;
    let resultText = document.getElementById("result");
    if (answer == "6") {
        resultText.innerHTML = "Правильно! Вы прошли тест!";
    } else {
        resultText.innerHTML = "Неправильно. Попробуйте еще раз.";
    }
}
