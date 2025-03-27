document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let ordersList = document.getElementById("orders-list");
    
    if (orders.length === 0) {
        ordersList.innerHTML = "<p>Пока нет доступных заказов.</p>";
        return;
    }
    
    orders.forEach(order => {
        let orderElement = document.createElement("div");
        orderElement.classList.add("order-item");
        orderElement.innerHTML = `
            <h3>${order.title}</h3>
            <p><strong>Категория:</strong> ${order.category}</p>
            <p><strong>Описание:</strong> ${order.description}</p>
            <p><strong>Оплата:</strong> ${order.price} USD</p>
            <button class="apply-button" data-order-id="${order.id}">Откликнуться</button>
        `;
        ordersList.appendChild(orderElement);
    });

    document.querySelectorAll(".apply-button").forEach(button => {
        button.addEventListener("click", function () {
            let orderId = this.getAttribute("data-order-id");
            alert(`Вы откликнулись на заказ ${orderId}`);
        });
    });
});
