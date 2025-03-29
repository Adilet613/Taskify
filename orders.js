document.addEventListener("DOMContentLoaded", function () {
    let ordersList = document.getElementById("orders-list");
    let isFreelancer = localStorage.getItem("isFreelancer");

    if (isFreelancer !== "true") {
        ordersList.innerHTML = "<p>Вы не фрилансер или не прошли тест.</p>";
        return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    
    if (orders.length === 0) {
        ordersList.innerHTML = "<p>Заказов пока нет.</p>";
        return;
    }

    orders.forEach(order => {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${order.title}</strong> <br> ${order.description} <br> <i>Автор: ${order.author}</i>`;
        ordersList.appendChild(li);
    });
});
