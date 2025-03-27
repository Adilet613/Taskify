function showCustomerOptions() {
    document.getElementById("customer-options").classList.remove("hidden");
    document.getElementById("order-form").classList.add("hidden");
    document.getElementById("freelancer-test").classList.add("hidden");
}

function showOrderForm(jobType) {
    document.getElementById("customer-options").classList.add("hidden");
    document.getElementById("order-form").classList.remove("hidden");
}

function submitOrder() {
    let title = document.getElementById("order-title").value;
    let description = document.getElementById("order-description").value;
    
    if (title.trim() === "" || description.trim() === "") {
        alert("Заполните все поля!");
        return;
    }

    alert("Заказ размещен: " + title);
    document.getElementById("order-form").classList.add("hidden");
}
