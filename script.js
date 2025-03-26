function showCustomerMenu() {
    document.getElementById("customer-menu").classList.remove("hidden");
    document.getElementById("freelancer-test").classList.add("hidden");
}

function showFreelancerTest() {
    document.getElementById("customer-menu").classList.add("hidden");
    document.getElementById("freelancer-test").classList.remove("hidden");
}
