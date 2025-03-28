document.addEventListener("DOMContentLoaded", function () {
    let orderDetails = document.getElementById("orderDetails");

    // Получаем ID выбранного заказа
    let orderId = localStorage.getItem("selectedOrder");
    if (!orderId) {
        orderDetails.innerHTML = "<p>Заказ не найден.</p>";
        return;
    }

    // Получаем заказы из localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let order = orders.find(o => o.id == orderId);

    if (!order) {
        orderDetails.innerHTML = "<p>Заказ не найден.</p>";
        return;
    }

    // Отображаем данные заказа
    orderDetails.innerHTML = `
        <h2>${order.title}</h2>
        <p><strong>Описание:</strong> ${order.description}</p>
        <p><strong>Цена:</strong> ${order.price}₽</p>
        <button onclick="applyForOrder(${order.id})">Откликнуться</button>
    `;
});

// Функция для обработки отклика на заказ
function applyForOrder(orderId) {
    alert("Вы откликнулись на заказ! Заказчик скоро с вами свяжется.");
    window.location.href = "orders.html";
}
