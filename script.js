function showCustomerOptions() {
    document.getElementById("role-selection").classList.add("hidden");
    document.getElementById("customer-options").classList.remove("hidden");
}

function showFreelancerTest() {
    document.getElementById("role-selection").classList.add("hidden");
    document.getElementById("freelancer-test").classList.remove("hidden");
    startTest();
}

function showOrderForm(workType) {
    document.getElementById("customer-options").classList.add("hidden");
    document.getElementById("order-form").classList.remove("hidden");
    document.getElementById("selected-work").textContent = workType;
}

function submitOrder() {
    alert("Ваш заказ отправлен!");
    location.reload();
}
