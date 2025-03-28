document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const ordersList = document.getElementById("ordersList");
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    function saveOrders() {
        localStorage.setItem("orders", JSON.stringify(orders));
    }

    function renderOrders() {
        ordersList.innerHTML = "";
        orders.forEach((order, index) => {
            const orderItem = document.createElement("div");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
                <h3>${order.title}</h3>
                <p>${order.description}</p>
                <p><strong>Цена:</strong> ${order.price} USD</p>
                <button class="delete-order" data-index="${index}">Удалить</button>
            `;
            ordersList.appendChild(orderItem);
        });
    }

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("orderTitle").value;
        const description = document.getElementById("orderDescription").value;
        const price = document.getElementById("orderPrice").value;

        if (title && description && price) {
            const newOrder = { title, description, price };
            orders.push(newOrder);
            saveOrders();
            renderOrders();
            orderForm.reset();
        }
    });

    ordersList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-order")) {
            const index = event.target.getAttribute("data-index");
            orders.splice(index, 1);
            saveOrders();
            renderOrders();
        }
    });

    renderOrders();
});
