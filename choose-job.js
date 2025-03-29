document.querySelectorAll(".job-button").forEach(button => {
    button.addEventListener("click", function() {
        const job = this.getAttribute("data-job");
        localStorage.setItem("selectedJob", job);
        window.location.href = "create-order.html";
    });
});

document.getElementById("delete-order").addEventListener("click", function() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    if (orders.length > 0) {
        localStorage.removeItem("orders");
        document.getElementById("user-orders").innerHTML = "";
        document.getElementById("no-orders-message").style.display = "block";
    } else {
        alert("У вас пока что нет заказов.");
    }
});
