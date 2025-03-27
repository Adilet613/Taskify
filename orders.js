document.addEventListener("DOMContentLoaded", function () {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    let ordersContainer = document.getElementById("orders-container");
    let publishButton = document.getElementById("publish-order");
    let orderInput = document.getElementById("order-input");
    
    function displayOrders() {
        ordersContainer.innerHTML = "";
        orders.forEach(order => {
            let orderElement = document.createElement("div");
            orderElement.classList.add("order");
            orderElement.innerHTML = `<p>${order}</p>`;
            ordersContainer.appendChild(orderElement);
        });
    }
    
    publishButton.addEventListener("click", function () {
        let newOrder = orderInput.value.trim();
        if (newOrder !== "") {
            orders.push(newOrder);
            localStorage.setItem("orders", JSON.stringify(orders));
            orderInput.value = "";
            displayOrders();
        }
    });
    
    displayOrders();
});
