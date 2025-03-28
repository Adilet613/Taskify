document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Вход успешен!");
        window.location.href = "index.html"; // Переход на главную страницу
    } else {
        alert("Неверный email или пароль!");
    }
});
