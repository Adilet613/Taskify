document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Заполните все поля!");
        return;
    }

    // Создаем объект пользователя
    const user = {
        username: username,
        email: email,
        password: password
    };

    // Сохраняем пользователя в localStorage (имитация базы данных)
    localStorage.setItem("user", JSON.stringify(user));

    alert("Регистрация успешна!");

    // Перенаправляем на страницу входа
    window.location.href = "login.html";
});
