document.addEventListener("DOMContentLoaded", function () {
    const customerButton = document.getElementById("customerButton");
    const freelancerButton = document.getElementById("freelancerButton");
    const roleSelection = document.getElementById("role-selection");
    const jobSelection = document.getElementById("job-selection");
    const freelancerTest = document.getElementById("freelancer-test");
    const jobList = document.getElementById("job-list");
    const orderForm = document.getElementById("order-form");
    const jobTitle = document.getElementById("job-title");
    
    customerButton.addEventListener("click", function () {
        roleSelection.style.display = "none";
        jobSelection.style.display = "block";
    });
    
    freelancerButton.addEventListener("click", function () {
        roleSelection.style.display = "none";
        freelancerTest.style.display = "block";
    });
    
    document.querySelectorAll(".job-item").forEach(job => {
        job.addEventListener("click", function () {
            jobSelection.style.display = "none";
            orderForm.style.display = "block";
            jobTitle.textContent = `Создание заказа: ${this.textContent}`;
        });
    });
    
    document.getElementById("order-submit").addEventListener("click", function () {
        alert("Ваш заказ создан!");
        location.reload();
    });
});
