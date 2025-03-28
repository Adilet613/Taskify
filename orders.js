document.addEventListener("DOMContentLoaded", function () {
    let ordersList = document.getElementById("ordersList");
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.forEach((order, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <h3>${order.title}</h3>
            <p>${order.description}</p>
            <p><strong>Цена:</strong> ${order.price} руб.</p>
            <button onclick="viewOrder(${index})">Подробнее</button>
        `;
        ordersList.appendChild(div);
    });
});

function viewOrder(index) {
    localStorage.setItem("selectedOrder", index);
    window.location.href = "order-details.html";
}
