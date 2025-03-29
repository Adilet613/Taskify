document.addEventListener("DOMContentLoaded", function () {
    const ordersList = document.getElementById("orders-list");

    // Получаем выбранную работу фрилансера
    const selectedJob = localStorage.getItem("selectedJob");

    // Загружаем заказы
    function loadOrders() {
        let allOrders = JSON.parse(localStorage.getItem("allOrders")) || [];
        ordersList.innerHTML = "";

        if (allOrders.length === 0) {
            ordersList.innerHTML = "<p>Заказов пока нет.</p>";
            return;
        }

        allOrders.forEach(order => {
            if (order.job === selectedJob) {
                let li = document.createElement("li");
                li.textContent = `${order.title} - ${order.description}`;
                ordersList.appendChild(li);
            }
        });

        if (ordersList.innerHTML === "") {
            ordersList.innerHTML = "<p>Нет заказов для выбранной работы.</p>";
        }
    }

    loadOrders();
});
