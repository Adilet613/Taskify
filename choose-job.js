document.addEventListener("DOMContentLoaded", function () {
    const jobButtons = document.querySelectorAll(".job-button");

    jobButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedJob = this.dataset.job;
            localStorage.setItem("selectedJob", selectedJob);
            alert(`Вы выбрали: ${selectedJob}`);
            window.location.href = "orders.html"; // Переход на страницу заказов
        });
    });
});
