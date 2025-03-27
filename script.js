function showCustomerMenu() {
    document.getElementById("customer-menu").classList.remove("hidden");
    document.getElementById("work-description").classList.add("hidden");
    document.getElementById("freelancer-test").classList.add("hidden");
}

function showFreelancerTest() {
    document.getElementById("customer-menu").classList.add("hidden");
    document.getElementById("work-description").classList.add("hidden");
    document.getElementById("freelancer-test").classList.remove("hidden");
    startTest(); // Запускаем тест
}

function selectWork(work) {
    document.getElementById("customer-menu").classList.add("hidden");
    document.getElementById("work-title").textContent = work;
    document.getElementById("work-description").classList.remove("hidden");
}
