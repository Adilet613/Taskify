document.getElementById("create-order").addEventListener("click", function() {
    const title = document.getElementById("order-title").value;
    const description = document.getElementById("order-description").value;
    const price = document.getElementById("order-price").value;
    
    if (title && description && price) {
        const order = { title, description, price, job: localStorage.getItem("selectedJob") };
        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        alert("Заказ создан!");
        window.location.href = "index.html";
    } else {
        alert("Заполните все поля!");
    }
});
