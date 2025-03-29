// orders.js - Файл для управления заказами

document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    
    function saveOrders() {
        localStorage.setItem("orders", JSON.stringify(orders));
    }
    
    function renderOrders() {
        const orderList = document.getElementById("order-list");
        orderList.innerHTML = "";
        orders.forEach((order, index) => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${order.title}</strong> - ${order.description} (${order.price} руб.)`;
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Удалить";
            deleteBtn.onclick = function () {
                orders.splice(index, 1);
                saveOrders();
                renderOrders();
            };
            li.appendChild(deleteBtn);
            orderList.appendChild(li);
        });
    }
    
    document.getElementById("create-order").addEventListener("submit", function (event) {
        event.preventDefault();
        let title = document.getElementById("order-title").value;
        let description = document.getElementById("order-description").value;
        let price = document.getElementById("order-price").value;
        if (title && description && price) {
            orders.push({ title, description, price });
            saveOrders();
            renderOrders();
            document.getElementById("create-order").reset();
        }
    });
    
    renderOrders();
});
