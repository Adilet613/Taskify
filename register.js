document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Этот email уже зарегистрирован!");
    } else {
        let newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        alert("Регистрация успешна!");
        window.location.href = "index.html"; // Переход на главную страницу
    }
});
