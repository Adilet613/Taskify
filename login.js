document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Заполните все поля!");
        return;
    }

    // Получаем список пользователей из localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Ищем пользователя в списке
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        alert("Неправильный email или пароль!");
        return;
    }

    alert("Вход выполнен успешно!");

    // Сохраняем текущего пользователя как авторизованного
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Перенаправляем на главную страницу
    window.location.href = "index.html";
});
