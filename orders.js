// orders.js - управление заказами

// Функция для загрузки заказов
function loadOrders() {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = "";
    
    orders.forEach((order, index) => {
        let orderElement = document.createElement("div");
        orderElement.classList.add("order-item");
        orderElement.innerHTML = `
            <h3>${order.title}</h3>
            <p>${order.description}</p>
            <p><strong>Цена:</strong> ${order.price} USD</p>
            <button onclick="deleteOrder(${index})">Удалить</button>
        `;
        ordersList.appendChild(orderElement);
    });
}

// Функция для удаления заказа
function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    loadOrders();
}

// Загрузка заказов при открытии страницы
document.addEventListener("DOMContentLoaded", loadOrders);
