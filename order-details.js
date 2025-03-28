document.addEventListener("DOMContentLoaded", function () {
    let orderDetails = document.getElementById("orderDetails");
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let index = localStorage.getItem("selectedOrder");

    if (orders[index]) {
        let order = orders[index];
        orderDetails.innerHTML = `
            <h3>${order.title}</h3>
            <p>${order.description}</p>
            <p><strong>Цена:</strong> ${order.price} руб.</p>
        `;
    } else {
        orderDetails.innerHTML = "<p>Заказ не найден.</p>";
    }
});

function applyForOrder() {
    localStorage.setItem("chatMessages", JSON.stringify([])); // Очищаем чат
    window.location.href = "chat.html"; // Переход в чат
}
