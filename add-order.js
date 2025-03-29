document.getElementById("publish-order").addEventListener("click", function () {
    let title = document.getElementById("order-title").value;
    let description = document.getElementById("order-description").value;
    
    if (!title || !description) {
        alert("Заполните все поля!");
        return;
    }

    let newOrder = {
        title: title,
        description: description,
        author: localStorage.getItem("username") || "Заказчик"
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Заказ опубликован!");
    window.location.href = "dashboard.html"; 
});
