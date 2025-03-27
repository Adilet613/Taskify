document.addEventListener("DOMContentLoaded", function () {
    const ordersList = document.getElementById("orders-list");
    const createOrderBtn = document.getElementById("create-order-btn");
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    function renderOrders() {
        ordersList.innerHTML = "";
        orders.forEach((order, index) => {
            const orderElement = document.createElement("div");
            orderElement.innerText = `${index + 1}. ${order.title} - ${order.description}`;
            ordersList.appendChild(orderElement);
        });
    }

    createOrderBtn.addEventListener("click", function () {
        const title = prompt("Введите заголовок заказа:");
        const description = prompt("Введите описание заказа:");
        if (title && description) {
            orders.push({ title, description });
            localStorage.setItem("orders", JSON.stringify(orders));
            renderOrders();
        }
    });

    renderOrders();
});
