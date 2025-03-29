document.getElementById("submit-test").addEventListener("click", function () {
    let answer1 = document.getElementById("answer1").value.trim().toLowerCase();
    let answer2 = document.getElementById("answer2").value.trim().toLowerCase();

    if (answer1 === "правильный ответ" && answer2 === "правильный ответ") {
        localStorage.setItem("isFreelancer", "true"); // Сохраняем в localStorage
        alert("Поздравляем! Вы прошли тест.");
        window.location.href = "orders.html"; // Отправляем на страницу с заказами
    } else {
        alert("Тест не пройден. Попробуйте снова.");
    }
});
