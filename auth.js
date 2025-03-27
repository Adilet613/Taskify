document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            localStorage.setItem("user", JSON.stringify({ username, email, password }));
            alert("Регистрация успешна! Теперь войдите в систему.");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                alert("Вход выполнен успешно!");
                localStorage.setItem("loggedIn", "true");
                window.location.href = "index.html";
            } else {
                alert("Неверные данные! Попробуйте еще раз.");
            }
        });
    }
});
