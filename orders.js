document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    let ordersContainer = document.getElementById("orders-container");
    let orderForm = document.getElementById("order-form");

    function displayOrders() {
        ordersContainer.innerHTML = "<h3>Доступные заказы:</h3>";

        if (orders.length === 0) {
            ordersContainer.innerHTML += "<p>Заказов пока нет.</p>";
            return;
        }

        orders.forEach((order, index) => {
            let orderElement = document.createElement("div");
            orderElement.classList.add("order-item");
            orderElement.innerHTML = `
                <h4>${order.title}</h4>
                <p><strong>Описание:</strong> ${order.description}</p>
                <p><strong>Категория:</strong> ${order.category}</p>
                <button class="apply-btn" data-index="${index}">Откликнуться</button>
            `;
            ordersContainer.appendChild(orderElement);
        });

        document.querySelectorAll(".apply-btn").forEach(button => {
            button.addEventListener("click", function () {
                let orderIndex = this.getAttribute("data-index");
                applyForOrder(orderIndex);
            });
        });
    }

    function applyForOrder(index) {
        let freelancerName = localStorage.getItem("freelancerName") || "Анонимный фрилансер";
        let confirmation = confirm(`Вы хотите откликнуться на заказ "${orders[index].title}"?`);
        if (confirmation) {
            alert(`${freelancerName}, вы откликнулись на заказ!`);
        }
    }

    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let title = document.getElementById("order-title").value.trim();
            let description = document.getElementById("order-description").value.trim();
            let category = document.getElementById("order-category").value;

            if (title && description && category) {
                let newOrder = { title, description, category };
                orders.push(newOrder);
                localStorage.setItem("orders", JSON.stringify(orders));
                alert("Заказ успешно опубликован!");
                orderForm.reset();
                displayOrders();
            } else {
                alert("Заполните все поля перед публикацией заказа!");
            }
        });
    }

    displayOrders();
});
