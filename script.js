function showCustomerOptions() {
    document.getElementById("role-selection").classList.add("hidden");
    document.getElementById("customer-options").classList.remove("hidden");
}

function showOrderForm(job) {
    document.getElementById("customer-options").classList.add("hidden");
    document.getElementById("order-form").classList.remove("hidden");
}

function submitOrder() {
    let title = document.getElementById("order-title").value.trim();
    let description = document.getElementById("order-description").value.trim();

    if (title === "" || description === "") {
        alert("Заполните все поля!");
        return;
    }

    alert("Заказ создан!");
    document.getElementById("order-form").classList.add("hidden");
    document.getElementById("role-selection").classList.remove("hidden");
}
