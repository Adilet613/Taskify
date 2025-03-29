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
                <button class="delete-order" data-id="${order.id}">Удалить</button>
            `;
            ordersList.appendChild(li);
        });

        document.querySelectorAll(".delete-order").forEach(button => {
            button.addEventListener("click", function () {
                let id = parseInt(this.dataset.id);
                let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
                allOrders = allOrders.filter(order => order.id !== id);
                localStorage.setItem("allOrders", JSON.stringify(allOrders));

                alert("Заказ удалён!");
                loadOrders(); // Обновляем страницу заказов
            });
        });
    }

    loadOrders();
});
