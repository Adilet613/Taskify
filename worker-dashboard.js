document.addEventListener("DOMContentLoaded", function () {
    const orderList = document.getElementById("order-list");
    const userRole = localStorage.getItem("userRole");
    const preferredJobs = JSON.parse(localStorage.getItem("preferredJobs")) || [];
    
    function fetchOrders() {
        const orders = JSON.parse(localStorage.getItem("orders")) || [];
        orderList.innerHTML = "";
        
        const filteredOrders = orders.filter(order => preferredJobs.includes(order.jobType));
        
        if (filteredOrders.length === 0) {
            orderList.innerHTML = "<p>Нет доступных заказов</p>";
            return;
        }
        
        filteredOrders.forEach(order => {
            const orderItem = document.createElement("li");
            orderItem.innerHTML = `
                <strong>${order.title}</strong><br>
                ${order.description}<br>
                <em>Сумма: ${order.price} руб.</em><br>
                <button class="take-order" data-id="${order.id}">Взяться за работу</button>
            `;
            orderList.appendChild(orderItem);
        });
    }
    
    orderList.addEventListener("click", function (event) {
        if (event.target.classList.contains("take-order")) {
            const orderId = event.target.getAttribute("data-id");
            let orders = JSON.parse(localStorage.getItem("orders")) || [];
            let order = orders.find(o => o.id === orderId);
            
            if (order) {
                order.worker = localStorage.getItem("userEmail");
                localStorage.setItem("orders", JSON.stringify(orders));
                alert("Вы взялись за заказ! Теперь вы можете связаться с заказчиком.");
                window.location.href = "chat.html?orderId=" + orderId;
            }
        }
    });
    
    fetchOrders();
});
