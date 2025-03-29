document.addEventListener("DOMContentLoaded", function () {
    let notification = localStorage.getItem("notification");

    if (notification) {
        alert(notification);
        localStorage.removeItem("notification"); // Удаляем после показа
    }

    const userOrdersList = document.getElementById("user-orders");

    function loadUserOrders() {
        let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        userOrdersList.innerHTML = "";

        let userId = localStorage.getItem("userId"); // Должен быть уникальный ID заказчика
        let userOrders = allOrders.filter(order => order.userId === userId);

        if (userOrders.length === 0) {
            document.getElementById("no-orders-message").style.display = "block";
            return;
        }

        userOrders.forEach(order => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${order.title}</strong> - ${order.description}`;
            userOrdersList.appendChild(li);
        });
    }

    loadUserOrders();
});
