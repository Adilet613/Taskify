document.addEventListener("DOMContentLoaded", function () {
    const ordersList = document.getElementById("orders-list");

    function loadOrders() {
        let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        ordersList.innerHTML = "";

        if (allOrders.length === 0) {
            ordersList.innerHTML = "<p>Заказов пока нет.</p>";
            return;
        }

        allOrders.forEach(order => {
            let li = document.createElement("li");
            li.innerHTML = `
                <strong>${order.title}</strong> - ${order.description}
                <button class="take-order" data-id="${order.id}">Взять заказ</button>
                <button class="delete-order" data-id="${order.id}">Удалить</button>
            `;
            ordersList.appendChild(li);
        });

        document.querySelectorAll(".take-order").forEach(button => {
            button.addEventListener("click", function () {
                let id = parseInt(this.dataset.id);
                markOrderAsTaken(id);
            });
        });

        document.querySelectorAll(".delete-order").forEach(button => {
            button.addEventListener("click", function () {
                let id = parseInt(this.dataset.id);
                let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
                allOrders = allOrders.filter(order => order.id !== id);
                localStorage.setItem("allOrders", JSON.stringify(allOrders));

                alert("Заказ удалён!");
                loadOrders();
            });
        });
    }

    function markOrderAsTaken(orderId) {
        let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        let order = allOrders.find(o => o.id === orderId);
        
        if (!order) return;

        order.taken = true; 
        localStorage.setItem("allOrders", JSON.stringify(allOrders));

        localStorage.setItem("notification", `Ваш заказ "${order.title}" взят в работу.`);
        
        alert("Вы взяли заказ! Заказчик получит уведомление.");
        loadOrders();
    }

    loadOrders();
});
