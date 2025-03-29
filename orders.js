document.addEventListener("DOMContentLoaded", function () {
    const ordersList = document.getElementById("orders-list");
    const userRole = localStorage.getItem("userRole"); // Получаем роль пользователя

    if (userRole !== "freelancer") {
        alert("Вы не фрилансер!");
        window.location.href = "index.html";
        return;
    }

    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        ordersList.innerHTML = "";
        
        if (orders.length === 0) {
            ordersList.innerHTML = "<p>Заказов пока нет.</p>";
            return;
        }
        
        orders.forEach((order, index) => {
            const orderItem = document.createElement("li");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
                <strong>${order.title}</strong><br>
                ${order.description}<br>
                <button class="take-order" data-index="${index}">Взяться за работу</button>
            `;
            ordersList.appendChild(orderItem);
        });
    }

    ordersList.addEventListener("click", function (event) {
        if (event.target.classList.contains("take-order")) {
            const orderIndex = event.target.getAttribute("data-index");
            const orders = JSON.parse(localStorage.getItem("orders")) || [];
            const takenOrder = orders[orderIndex];
            
            if (takenOrder) {
                alert("Вы взялись за работу: " + takenOrder.title);
                const clientEmail = takenOrder.clientEmail;
                alert("Уведомление отправлено заказчику: " + clientEmail);
            }
        }
    });

    loadOrders();
});
