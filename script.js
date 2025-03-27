document.addEventListener("DOMContentLoaded", function () {
    const loginLink = document.querySelector("a[href='login.html']");
    const registerLink = document.querySelector("a[href='register.html']");
    const container = document.querySelector(".container");

    const user = localStorage.getItem("user");

    if (user) {
        // Если пользователь вошел, показать кнопку "Выйти"
        container.innerHTML += `<button id="logout">Выйти</button>`;
        document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("user");
            location.reload();
        });

        // Убираем ссылки "Войти" и "Зарегистрироваться"
        if (loginLink) loginLink.remove();
        if (registerLink) registerLink.remove();
    }
});
