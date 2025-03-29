document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("order-form");
    const orderList = document.getElementById("user-orders");
    const deleteOrderButton = document.getElementById("delete-order");
    const noOrdersMessage = document.getElementById("no-orders-message");
    
    function loadOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orderList.innerHTML = "";
        
        if (orders.length === 0) {
            noOrdersMessage.style.display = "block";
        } else {
            noOrdersMessage.style.display = "none";
            orders.forEach((order, index) => {
                const li = document.createElement("li");
                li.textContent = `${order.title} - ${order.price} руб.`;
                li.dataset.index = index;
                orderList.appendChild(li);
            });
        }
    }
    
    function saveOrder(order) {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        loadOrders();
    }
    
    function deleteOrders() {
        localStorage.removeItem("orders");
        loadOrders();
    }
    
    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("order-title").value;
        const description = document.getElementById("order-description").value;
        const price = document.getElementById("order-price").value;
        
        if (title && price) {
            const order = { title, description, price };
            saveOrder(order);
            orderForm.reset();
        }
    });
    
    deleteOrderButton.addEventListener("click", function () {
        deleteOrders();
    });
    
    loadOrders();
});
