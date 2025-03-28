document.addEventListener("DOMContentLoaded", function () {
    const ordersContainer = document.getElementById("orders-container");
    
    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        ordersContainer.innerHTML = "";
        
        orders.forEach((order, index) => {
            const orderElement = document.createElement("div");
            orderElement.classList.add("order-item");
            orderElement.innerHTML = `
                <h2>${order.title}</h2>
                <p>${order.description}</p>
                <p><strong>Price:</strong> $${order.price}</p>
                <button onclick="acceptOrder(${index})">Откликнуться</button>
            `;
            ordersContainer.appendChild(orderElement);
        });
    }
    
    window.acceptOrder = function (index) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        const selectedOrder = orders[index];
        localStorage.setItem("selectedOrder", JSON.stringify(selectedOrder));
        window.location.href = "order-details.html";
    }
    
    loadOrders();
});
