document.getElementById("customer-btn").addEventListener("click", function () {
    document.getElementById("customer-options").classList.remove("hidden");
});

document.querySelectorAll(".job-btn").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("order-form").classList.remove("hidden");
    });
});

document.getElementById("freelancer-btn").addEventListener("click", function () {
    document.getElementById("freelancer-test").classList.remove("hidden");
});
