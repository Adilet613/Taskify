document.addEventListener("DOMContentLoaded", function () {
    const jobButtons = document.querySelectorAll(".job-button");

    // Обработчик нажатия на кнопку выбора работы
    jobButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedJob = this.getAttribute("data-job");
            localStorage.setItem("selectedJob", selectedJob);
            alert(`Вы выбрали: ${this.innerText}`);
            window.location.href = "orders.html"; // Перенаправляем на страницу заказов
        });
    });

    // Проверяем, есть ли у пользователя заказы
    const userOrdersList = document.getElementById("user-orders");
    const deleteOrderButton = document.getElementById("delete-order");
    const noOrdersMessage = document.getElementById("no-orders-message");

    function loadUserOrders() {
        let userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
        userOrdersList.innerHTML = "";
        
        if (userOrders.length > 0) {
            userOrders.forEach((order, index) => {
                let li = document.createElement("li");
                li.textContent = order;
                li.setAttribute("data-index", index);
                userOrdersList.appendChild(li);
            });
            noOrdersMessage.style.display = "none";
        } else {
            noOrdersMessage.style.display = "block";
        }
    }

    // Удаление заказа
    deleteOrderButton.addEventListener("click", function () {
        let userOrders = JSON.parse(localStorage.getItem("userOrders")) || [];
        if (userOrders.length > 0) {
            userOrders.pop(); // Удаляем последний заказ
            localStorage.setItem("userOrders", JSON.stringify(userOrders));
            loadUserOrders();
        }
    });

    loadUserOrders();
});
