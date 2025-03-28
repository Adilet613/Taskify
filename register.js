document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
        alert("Заполните все поля!");
        return;
    }

    // Получаем список пользователей из localStorage или создаем новый массив
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Проверяем, есть ли уже такой email в системе
    if (users.some(user => user.email === email)) {
        alert("Пользователь с таким email уже зарегистрирован!");
        return;
    }

    // Добавляем нового пользователя
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Регистрация успешна!");

    // Сохраняем текущего пользователя как авторизованного
    localStorage.setItem("currentUser", JSON.stringify({ username, email }));

    // Перенаправляем на главную страницу
    window.location.href = "index.html";
});
