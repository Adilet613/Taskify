document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");

    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let title = document.getElementById("order-title").value.trim();
        let description = document.getElementById("order-description").value.trim();
        let category = document.getElementById("order-job").value;

        if (title === "" || description === "") {
            alert("Заполните все поля!");
            return;
        }

        let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

        let newOrder = {
            title,
            description,
            category,
            id: Date.now()
        };

        allOrders.push(newOrder);
        localStorage.setItem("allOrders", JSON.stringify(allOrders));

        alert("Заказ успешно создан!");
        window.location.href = "orders.html"; // Перенаправление на страницу заказов
    });
});
