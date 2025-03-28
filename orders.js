document.addEventListener("DOMContentLoaded", function () {
    let ordersList = document.getElementById("ordersList");

    // Получаем заказы из localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        ordersList.innerHTML = "<p>Пока нет заказов.</p>";
        return;
    }

    // Выводим заказы
    orders.forEach(order => {
        let orderDiv = document.createElement("div");
        orderDiv.classList.add("order");

        orderDiv.innerHTML = `
            <h2>${order.title}</h2>
            <p>${order.description}</p>
            <p><strong>Цена:</strong> ${order.price}₽</p>
            <button onclick="openOrder(${order.id})">Откликнуться</button>
        `;

        ordersList.appendChild(orderDiv);
    });
});

// Функция для обработки нажатия на кнопку "Откликнуться"
function openOrder(orderId) {
    localStorage.setItem("selectedOrder", orderId);
    window.location.href = "order-details.html";
}
